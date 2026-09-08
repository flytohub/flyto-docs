/**
 * Expire the external-link exclusions once the repositories behind them ship.
 *
 * The docs describe Flow CE and Warroom CE ahead of their publication, so those
 * repository links 404 for a reader today and the lychee step excludes them. An
 * exclusion that outlives its reason is worse than the 404 it hid: the day the
 * repositories go public, nothing checks those links again and nobody
 * remembers the flag is there.
 *
 * So this fails in exactly that case. While a repository is still private it
 * says so and passes; the moment it answers publicly it fails and asks for the
 * exclusion to be removed.
 */
import { readFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const configPath = path.join(root, 'config', 'unpublished-repos.json');
const workflowPath = path.join(root, '.github', 'workflows', 'seo.yml');

const config = JSON.parse(readFileSync(configPath, 'utf8'));
const repositories = config.repositories ?? [];
const workflow = readFileSync(workflowPath, 'utf8');

const failures = [];
const notes = [];

async function isPublic(owner, name) {
  const url = `https://api.github.com/repos/${owner}/${name}`;
  const response = await fetch(url, {
    headers: { Accept: 'application/vnd.github+json', 'User-Agent': 'flyto-docs-link-audit' },
  });
  if (response.status === 404) return false;
  if (response.status === 200) return true;
  // Rate limiting or an outage must not turn into a false "now public", and
  // must not silently pass either.
  throw new Error(`GitHub answered ${response.status} for ${owner}/${name}`);
}

for (const entry of repositories) {
  const { owner, name } = entry;
  const slug = `${owner}/${name}`;
  if (!workflow.includes(name)) {
    failures.push(`${slug} is listed as unpublished but no lychee --exclude mentions it`);
    continue;
  }
  let published;
  try {
    published = await isPublic(owner, name);
  } catch (error) {
    failures.push(`could not determine visibility of ${slug}: ${error.message}`);
    continue;
  }
  if (published) {
    failures.push(
      `${slug} is public now. Remove its --exclude from .github/workflows/seo.yml and its entry ` +
      `from config/unpublished-repos.json so the docs links to it are checked again.`,
    );
  } else {
    notes.push(`${slug} is still private (${entry.reason ?? 'no reason recorded'})`);
  }
}

if (failures.length > 0) {
  console.error('unpublished link exclusions need attention:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`unpublished link exclusions still apply: ${repositories.length} repository(ies)`);
for (const note of notes) console.log(`  ${note}`);
