/** Validate launch-critical Flow and Warroom CE pages and public references. */
import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const requiredFiles = [
  'flow/community-edition-docker.md',
  'flow/index.md',
  'warroom/self-hosted-ce.md',
  'warroom/index.md',
  'core/whitepaper.md',
  'core/reference/index.md',
  'core/reference/python-api.md',
  'reference/docs-code.md',
  'docs/documentation-manifest.json',
  'public/llms.txt',
  'public/llms-full.txt',
  '.vitepress/config.mts',
];

const requiredReferences = [
  'https://flyto2.com/flow/',
  'https://docs.flyto2.com/flow/community-edition-docker',
  'https://github.com/flytohub/flyto-flow',
  'https://hub.docker.com/r/flyto2/flow',
  'https://flyto2.com/open-source/',
  'https://docs.flyto2.com/warroom/self-hosted-ce',
  'https://github.com/flytohub/flyto-warroom',
  'https://hub.docker.com/r/chesterhsu/flyto-warroom',
  'https://docs.flyto2.com/core/whitepaper',
  'https://docs.flyto2.com/core/reference/',
];

const failures = [];

for (const file of requiredFiles) {
  if (!existsSync(path.join(root, file))) {
    failures.push(`missing required file: ${file}`);
  }
}

const sidebar = readFileSync(path.join(root, '.vitepress/config.mts'), 'utf8');
if (!sidebar.includes("link: '/warroom/self-hosted-ce'")) {
  failures.push('sidebar missing /warroom/self-hosted-ce');
}
if (!sidebar.includes("link: '/flow/community-edition-docker'")) {
  failures.push('sidebar missing /flow/community-edition-docker');
}
if (!sidebar.includes('https://github.com/flytohub/flyto-warroom')) {
  failures.push('social link should point at flyto-warroom during CE launch');
}
if (!sidebar.includes("link: '/core/reference/python-api'")) {
  failures.push('sidebar missing source-backed Core Python reference');
}

const warroomIndex = readFileSync(path.join(root, 'warroom/index.md'), 'utf8');
if (!warroomIndex.includes('[Self-hosted CE](/warroom/self-hosted-ce)')) {
  failures.push('warroom/index.md missing Self-hosted CE entry');
}

const flowIndex = readFileSync(path.join(root, 'flow/index.md'), 'utf8');
if (!flowIndex.includes('[Flow CE with Docker](/flow/community-edition-docker)')) {
  failures.push('flow/index.md missing Flow CE Docker entry');
}

const flowCe = readFileSync(path.join(root, 'flow/community-edition-docker.md'), 'utf8');
for (const token of [
  'docker.io/flyto2/flow:0.1.1',
  '--publish 127.0.0.1:9000:9000',
  '--volume flyto-flow-data:/data/flyto',
  'http://127.0.0.1:9000/api/health',
  'https://hub.docker.com/r/flyto2/flow',
  'PolyForm Shield 1.0.0',
  'FLYTO_FLOW_MCP_TOKEN',
  'FLYTO_MCP_ALLOWED_ORIGINS',
]) {
  if (!flowCe.includes(token)) {
    failures.push(`Flow CE Docker guide missing contract token: ${token}`);
  }
}

const llms = [
  readFileSync(path.join(root, 'public/llms.txt'), 'utf8'),
  readFileSync(path.join(root, 'public/llms-full.txt'), 'utf8'),
  readFileSync(path.join(root, 'warroom/self-hosted-ce.md'), 'utf8'),
].join('\n');

for (const ref of requiredReferences) {
  if (!llms.includes(ref)) {
    failures.push(`missing public CE reference: ${ref}`);
  }
}

if (failures.length) {
  console.error('docs public audit failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log('docs public audit passed');
