/** Generate deterministic image sitemap and discovery metadata from public media. */
import { existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicDir = path.join(root, 'public');
const warroomDir = path.join(publicDir, 'warroom');
const siteUrl = 'https://docs.flyto2.com';

function xmlEscape(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function titleFromFile(file) {
  return file
    .replace(/^\d+-/, '')
    .replace(/\.[a-z0-9]+$/i, '')
    .split('-')
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(' ');
}

function writeIfChanged(filePath, content) {
  const previous = existsSync(filePath) ? readFileSync(filePath, 'utf8') : null;
  if (previous === content) return false;
  mkdirSync(path.dirname(filePath), { recursive: true });
  writeFileSync(filePath, content, 'utf8');
  return true;
}

function imageRecords() {
  if (!existsSync(warroomDir)) return [];
  return readdirSync(warroomDir)
    .filter((file) => /\.(png|jpg|jpeg|webp|svg)$/i.test(file))
    .sort()
    .map((file) => ({
      file,
      page: `${siteUrl}/warroom/`,
      image: `${siteUrl}/warroom/${file}`,
      title: `Flyto2 Warroom ${titleFromFile(file)}`,
    }));
}

function imageSitemap(images) {
  const urls = images.map((image) => `  <url>
    <loc>${xmlEscape(image.page)}</loc>
    <image:image>
      <image:loc>${xmlEscape(image.image)}</image:loc>
      <image:title>${xmlEscape(image.title)}</image:title>
      <image:caption>${xmlEscape('Flyto2 docs screenshot for Warroom, CTEM, code audit, attack surface, and evidence workflows.')}</image:caption>
    </image:image>
  </url>`).join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
}

function manifest(images) {
  return `${JSON.stringify({
    generatedFrom: 'scripts/generate-discovery.mjs',
    sourceHash: createHash('sha256').update(images.map((image) => `${image.file}:${image.title}`).join('\n')).digest('hex'),
    outputs: ['/image-sitemap.xml'],
    imageCount: images.length,
  }, null, 2)}\n`;
}

function main() {
  const images = imageRecords();
  let changed = 0;
  if (writeIfChanged(path.join(publicDir, 'image-sitemap.xml'), imageSitemap(images))) changed += 1;
  if (writeIfChanged(path.join(publicDir, 'discovery-manifest.json'), manifest(images))) changed += 1;
  console.log(`docs discovery files ready: ${images.length} image(s), ${changed} changed`);
}

main();
