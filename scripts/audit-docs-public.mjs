import { existsSync, readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const requiredFiles = [
  'warroom/self-hosted-ce.md',
  'warroom/index.md',
  'public/llms.txt',
  'public/llms-full.txt',
  '.vitepress/config.mts',
];

const requiredReferences = [
  'https://flyto2.com/open-source/',
  'https://docs.flyto2.com/warroom/self-hosted-ce',
  'https://github.com/flytohub/flyto-warroom',
  'https://hub.docker.com/r/chesterhsu/flyto-warroom',
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
if (!sidebar.includes('https://github.com/flytohub/flyto-warroom')) {
  failures.push('social link should point at flyto-warroom during CE launch');
}

const warroomIndex = readFileSync(path.join(root, 'warroom/index.md'), 'utf8');
if (!warroomIndex.includes('[Self-hosted CE](/warroom/self-hosted-ce)')) {
  failures.push('warroom/index.md missing Self-hosted CE entry');
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
