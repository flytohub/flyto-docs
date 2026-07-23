/** Audit built metadata, crawler files, structured data, brand, and SEO evidence. */
import { createHash } from 'node:crypto';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(root, '.vitepress', 'dist');
const seoDir = path.join(root, '.seo');
const seoContractPath = path.join(seoDir, 'i18n-seo-manifest.json');
const expectedSurfaceKey = 'docs';
const seoContract = loadSeoContract();
const siteUrl = seoContract.surface.origin;
const maxKeywordMatrixAgeDays = 100;
const failures = [];
const corePythonReference = readFileSync(path.join(root, 'core', 'reference', 'python-api.md'), 'utf8');
const coreDeclarationMatch = corePythonReference.match(/\*\*(\d[\d,]*) declarations across/);
if (!coreDeclarationMatch) throw new Error('Core Python reference does not expose declaration inventory');
const coreDeclarationCount = Number(coreDeclarationMatch[1].replaceAll(',', ''));
const formattedCoreDeclarationCount = coreDeclarationCount.toLocaleString('en-US');

const checkedPages = [
  { name: 'home', file: 'index.html', canonical: siteUrl, terms: ['AI workflow automation', 'MCP server automation'] },
  { name: 'core', file: 'core/index.html', canonical: `${siteUrl}/core`, terms: ['flyto-core', 'execution'] },
  { name: 'core whitepaper', file: 'core/whitepaper.html', canonical: `${siteUrl}/core/whitepaper`, terms: ['module contract', 'security model'] },
  { name: 'core reference', file: 'core/reference/index.html', canonical: `${siteUrl}/core/reference`, terms: ['Python declaration reference', 'HTTP route reference'] },
  { name: 'python api', file: 'core/reference/python-api.html', canonical: `${siteUrl}/core/reference/python-api`, terms: [`${coreDeclarationCount} declarations`, 'Workflow Engine'] },
  { name: 'mcp', file: 'mcp/index.html', canonical: `${siteUrl}/mcp`, terms: ['MCP'] },
  { name: 'modules', file: 'modules/index.html', canonical: `${siteUrl}/modules`, terms: ['modules'] },
  { name: 'getting started', file: 'guide/getting-started.html', canonical: `${siteUrl}/guide/getting-started`, terms: ['workflow'] },
  { name: 'installation', file: 'guide/installation.html', canonical: `${siteUrl}/guide/installation`, terms: ['install'] },
  { name: 'community', file: 'community/index.html', canonical: `${siteUrl}/community`, terms: ['community', 'social syndication'] },
  { name: 'warroom', file: 'warroom/index.html', canonical: `${siteUrl}/warroom`, terms: ['Warroom'] },
  { name: 'self-hosted ce', file: 'warroom/self-hosted-ce.html', canonical: `${siteUrl}/warroom/self-hosted-ce`, terms: ['Warroom CE', 'Docker'] },
  { name: 'closed loop', file: 'warroom/closed-loop.html', canonical: `${siteUrl}/warroom/closed-loop`, terms: ['evidence'] },
  { name: 'attack surface docs', file: 'warroom/surfaces/attack-surface.html', canonical: `${siteUrl}/warroom/surfaces/attack-surface`, terms: ['attack surface'] },
];
const checkedLocalizedPages = [
  { name: 'zh-TW browser module', file: 'zh-TW/modules/browser.html', canonical: `${siteUrl}/zh-TW/modules/browser`, locale: 'zh-TW' },
  { name: 'ja browser module', file: 'ja/modules/browser.html', canonical: `${siteUrl}/ja/modules/browser`, locale: 'ja' },
];

const forbiddenSitemapTokens = ['/AGENTS', '/CLAUDE', '/PROJECT', '/STATE', '/ROADMAP', '/tasks'];
const requiredRobotsTokens = [
  `Sitemap: ${seoContract.surface.sitemap}`,
  'Sitemap: https://docs.flyto2.com/image-sitemap.xml',
  'User-agent: OAI-SearchBot',
  'User-agent: ChatGPT-User',
  'User-agent: Claude-User',
  'User-agent: PerplexityBot',
  'User-agent: GPTBot',
  'Disallow: /',
];
const requiredLlmsTokens = [
  'AI workflow automation',
  'open source AI agent framework',
  'MCP server automation',
  'flyto-core',
  '452 registry-backed modules',
  `${formattedCoreDeclarationCount} Python declarations`,
  'https://docs.flyto2.com/core/reference/',
  'Warroom CE',
  'https://docs.flyto2.com/image-sitemap.xml',
  'https://flyto2.com/open-source/',
  'https://blog.flyto2.com',
];
const requiredKeywordMatrixTokens = [
  'Volume',
  'SD',
  'PD',
  'CPC',
  'Long-Tail Docs Routing',
  'Evidence Caveats',
  'MCP security',
  'Ubersuggest',
];

function fail(message) {
  failures.push(message);
}

function sha256(value) {
  return createHash('sha256').update(value).digest('hex');
}

function loadSeoContract() {
  if (!existsSync(seoContractPath)) {
    throw new Error('missing .seo/i18n-seo-manifest.json; run npm run seo:sync');
  }

  return JSON.parse(readFileSync(seoContractPath, 'utf8'));
}

function decodeHtml(value) {
  return value
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .trim();
}

function getTags(html, tagName) {
  return Array.from(html.matchAll(new RegExp(`<${tagName}\\b([^>]*)>`, 'gi')), (match) => match[1]);
}

function attrs(rawAttrs) {
  const result = {};
  for (const match of rawAttrs.matchAll(/([:@\w-]+)\s*=\s*"([^"]*)"/g)) {
    result[match[1].toLowerCase()] = decodeHtml(match[2]);
  }
  return result;
}

function findMeta(html, key, value) {
  const wanted = value.toLowerCase();
  for (const raw of getTags(html, 'meta')) {
    const attributes = attrs(raw);
    if ((attributes[key] ?? '').toLowerCase() === wanted) {
      return attributes.content ?? '';
    }
  }
  return '';
}

function findLink(html, rel, hrefLang = null) {
  const wanted = rel.toLowerCase();
  const wantedLang = hrefLang?.toLowerCase();
  for (const raw of getTags(html, 'link')) {
    const attributes = attrs(raw);
    if ((attributes.rel ?? '').toLowerCase() === wanted) {
      if (wantedLang && (attributes.hreflang ?? '').toLowerCase() !== wantedLang) continue;
      return attributes.href ?? '';
    }
  }
  return '';
}

function publicAssetPath(url) {
  if (!url) return '';
  try {
    const parsed = new URL(url);
    if (parsed.host !== 'docs.flyto2.com') return '';
    return path.join(distDir, parsed.pathname.replace(/^\/+/, ''));
  } catch {
    return url.startsWith('/') ? path.join(distDir, url.replace(/^\/+/, '')) : '';
  }
}

function checkPublicAsset(label, metaLabel, url) {
  const assetPath = publicAssetPath(url);
  if (assetPath && !existsSync(assetPath)) fail(`${label} ${metaLabel} points to missing public asset: ${url}`);
}

function contractKeywordTerms() {
  return seoContract.surface.keywordClusters.flatMap((cluster) => [
    cluster.primary,
    ...cluster.longTail,
  ]);
}

function checkAlternateLinks(label, html, expectedHreflangs) {
  for (const hreflang of expectedHreflangs) {
    if (!findLink(html, 'alternate', hreflang)) {
      fail(`${label} missing alternate hreflang=${hreflang}`);
    }
  }
}

function titleFrom(html) {
  const match = html.match(/<title>([\s\S]*?)<\/title>/i);
  return match ? decodeHtml(match[1]) : '';
}

function checkLength(label, value, min, max) {
  if (value.length < min || value.length > max) {
    fail(`${label} length ${value.length} outside ${min}-${max}: ${value}`);
  }
}

function sitemapLocVariants(url) {
  return url.endsWith('/') ? [`<loc>${url}</loc>`] : [`<loc>${url}</loc>`, `<loc>${url}/</loc>`];
}

function checkBrandAndEmails(label, content) {
  const legacyBrandPattern = new RegExp(`\\b${'Fly'}${'to'}\\b`, 'g');
  if (content.match(legacyBrandPattern)) fail(`${label} contains standalone legacy brand token; use Flyto2 unless referring to repo IDs`);
  const emails = content.match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi) ?? [];
  const badEmails = [...new Set(emails.filter((email) => !email.toLowerCase().endsWith('@flyto2.com')))];
  if (badEmails.length) fail(`${label} contains non-flyto2.com email(s): ${badEmails.join(', ')}`);
}

function checkPage(page) {
  const htmlPath = path.join(distDir, page.file);
  if (!existsSync(htmlPath)) {
    fail(`${page.name} build output missing: ${path.relative(root, htmlPath)}`);
    return;
  }
  const html = readFileSync(htmlPath, 'utf8');
  const title = titleFrom(html);
  const description = findMeta(html, 'name', 'description');
  const canonical = findLink(html, 'canonical');
  const robots = findMeta(html, 'name', 'robots');
  const ogImage = findMeta(html, 'property', 'og:image');
  const twitterImage = findMeta(html, 'name', 'twitter:image');

  checkLength(`${page.name} title`, title, 10, 70);
  checkLength(`${page.name} description`, description, 50, 180);
  if (canonical !== page.canonical) fail(`${page.name} canonical mismatch: expected ${page.canonical}, got ${canonical || '(missing)'}`);
  if (!robots.toLowerCase().includes('index')) fail(`${page.name} robots tag must be indexable; got ${robots || '(missing)'}`);
  checkAlternateLinks(page.name, html, [seoContract.locales.en.hreflang, 'x-default']);
  for (const [label, value] of [
    ['og:title', findMeta(html, 'property', 'og:title')],
    ['og:description', findMeta(html, 'property', 'og:description')],
    ['og:image', ogImage],
    ['og:image:alt', findMeta(html, 'property', 'og:image:alt')],
    ['twitter:card', findMeta(html, 'name', 'twitter:card')],
    ['twitter:title', findMeta(html, 'name', 'twitter:title')],
    ['twitter:description', findMeta(html, 'name', 'twitter:description')],
    ['twitter:image', twitterImage],
    ['twitter:image:alt', findMeta(html, 'name', 'twitter:image:alt')],
  ]) {
    if (!value) fail(`${page.name} missing ${label}`);
  }
  checkPublicAsset(page.name, 'og:image', ogImage);
  checkPublicAsset(page.name, 'twitter:image', twitterImage);
  if (!html.includes('application/ld+json')) fail(`${page.name} missing JSON-LD`);
  for (const term of page.terms) {
    if (!html.toLowerCase().includes(term.toLowerCase())) fail(`${page.name} missing docs intent term: ${term}`);
  }
  checkBrandAndEmails(page.name, html);
}

function checkLocalizedPage(page) {
  const htmlPath = path.join(distDir, page.file);
  if (!existsSync(htmlPath)) {
    fail(`${page.name} build output missing: ${path.relative(root, htmlPath)}`);
    return;
  }

  const html = readFileSync(htmlPath, 'utf8');
  const canonical = findLink(html, 'canonical');
  const robots = findMeta(html, 'name', 'robots');

  if (canonical !== page.canonical) fail(`${page.name} canonical mismatch: expected ${page.canonical}, got ${canonical || '(missing)'}`);
  if (robots.toLowerCase().includes('noindex')) fail(`${page.name} must be indexable for multilingual docs sitemap; got ${robots}`);
  if (!robots.toLowerCase().includes('index')) fail(`${page.name} robots tag must be indexable; got ${robots || '(missing)'}`);
  checkAlternateLinks(page.name, html, [seoContract.locales[page.locale].hreflang, 'x-default']);
  checkBrandAndEmails(page.name, html);
}

function checkSeoContract() {
  if (seoContract.surfaceKey !== expectedSurfaceKey) {
    fail(`SEO contract surface mismatch: expected ${expectedSurfaceKey}, got ${seoContract.surfaceKey || '(missing)'}`);
  }
  if (seoContract.surface.origin !== 'https://docs.flyto2.com') {
    fail(`SEO contract origin mismatch: ${seoContract.surface.origin || '(missing)'}`);
  }
  if (seoContract.surface.sitemap !== `${seoContract.surface.origin}/sitemap.xml`) {
    fail(`SEO contract sitemap mismatch: ${seoContract.surface.sitemap || '(missing)'}`);
  }

  const requiredSignals = new Set(seoContract.surface.requiredSignals ?? []);
  for (const signal of ['canonical', 'hreflang-alternates', 'x-default', 'sitemap', 'localized-title', 'localized-description', 'structured-data']) {
    if (!requiredSignals.has(signal)) fail(`SEO contract missing required signal: ${signal}`);
  }
  if (Object.keys(seoContract.locales ?? {}).length < 16) {
    fail('SEO contract must expose all 16 Flyto2 locale definitions');
  }
  for (const cluster of seoContract.surface.keywordClusters ?? []) {
    if (!cluster.evidence?.source || !cluster.evidence.observedAt) {
      fail(`SEO contract keyword cluster ${cluster.id} missing evidence`);
    }
    if (!Array.isArray(cluster.longTail) || cluster.longTail.length < 5) {
      fail(`SEO contract keyword cluster ${cluster.id} must include long-tail terms`);
    }
  }

  const upstreamPath = path.resolve(root, '..', 'flyto-i18n', 'dist', 'seo-manifest.json');
  if (existsSync(upstreamPath)) {
    const upstreamText = readFileSync(upstreamPath, 'utf8');
    if (seoContract.source?.sha256 !== sha256(upstreamText)) {
      fail('.seo/i18n-seo-manifest.json is stale; run npm run seo:sync');
    }
  }
}

function checkDist() {
  if (!existsSync(distDir)) {
    fail('missing .vitepress/dist; run npm run build before npm run audit:seo');
    return;
  }
  for (const page of checkedPages) checkPage(page);
  for (const page of checkedLocalizedPages) checkLocalizedPage(page);

  const claude = path.join(distDir, 'CLAUDE.html');
  if (existsSync(claude)) {
    const html = readFileSync(claude, 'utf8');
    if (!findMeta(html, 'name', 'robots').toLowerCase().includes('noindex')) {
      fail('CLAUDE.html must remain noindex, follow');
    }
  }
}

function checkSitemapRobotsLlms() {
  const sitemap = readFileSync(path.join(distDir, 'sitemap.xml'), 'utf8');
  const robots = readFileSync(path.join(distDir, 'robots.txt'), 'utf8');
  const llms = readFileSync(path.join(distDir, 'llms.txt'), 'utf8');
  const full = readFileSync(path.join(distDir, 'llms-full.txt'), 'utf8');

  const locCount = (sitemap.match(/<loc>/g) ?? []).length;
  if (locCount < 900) fail(`sitemap has too few URLs for multilingual docs: ${locCount}`);
  for (const page of checkedPages) {
    const variants = sitemapLocVariants(page.canonical);
    if (!variants.some((token) => sitemap.includes(token))) {
      fail(`sitemap missing ${variants.join(' or ')}`);
    }
  }
  for (const page of checkedLocalizedPages) {
    const variants = sitemapLocVariants(page.canonical);
    if (!variants.some((token) => sitemap.includes(token))) {
      fail(`sitemap missing localized page ${variants.join(' or ')}`);
    }
  }
  for (const token of forbiddenSitemapTokens) {
    if (sitemap.includes(token)) fail(`sitemap should not include internal memory path token: ${token}`);
  }
  for (const token of requiredRobotsTokens) {
    if (!robots.includes(token)) fail(`robots.txt missing ${token}`);
  }
  for (const token of requiredLlmsTokens) {
    if (!llms.includes(token) && !full.includes(token)) fail(`llms files missing ${token}`);
  }
  checkBrandAndEmails('robots.txt', robots);
  checkBrandAndEmails('llms.txt', llms);
  checkBrandAndEmails('llms-full.txt', full);
}

function checkDiscoveryFiles() {
  const imageSitemapPath = path.join(distDir, 'image-sitemap.xml');
  const manifestPath = path.join(distDir, 'discovery-manifest.json');
  const securityPath = path.join(distDir, '.well-known', 'security.txt');
  for (const [label, filePath] of [
    ['image-sitemap.xml', imageSitemapPath],
    ['discovery-manifest.json', manifestPath],
    ['.well-known/security.txt', securityPath],
    ['og-image.png', path.join(distDir, 'og-image.png')],
  ]) {
    if (!existsSync(filePath)) fail(`missing docs discovery file: ${label}`);
  }
  if (!existsSync(imageSitemapPath) || !existsSync(manifestPath) || !existsSync(securityPath)) return;

  const imageSitemap = readFileSync(imageSitemapPath, 'utf8');
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'));
  const security = readFileSync(securityPath, 'utf8');
  if ((imageSitemap.match(/<image:image>/g) ?? []).length < 20) {
    fail('image-sitemap.xml must include the Warroom screenshot set');
  }
  if ((manifest.imageCount ?? 0) < 20) fail('discovery-manifest.json must track the Warroom screenshot set');
  for (const token of ['Contact: mailto:security@flyto2.com', 'Canonical: https://docs.flyto2.com/.well-known/security.txt']) {
    if (!security.includes(token)) fail(`security.txt missing ${token}`);
  }
  checkBrandAndEmails('image-sitemap.xml', imageSitemap);
  checkBrandAndEmails('discovery-manifest.json', JSON.stringify(manifest));
  checkBrandAndEmails('security.txt', security);
}

function newestKeywordMatrix() {
  if (!existsSync(seoDir)) return null;
  return readdirSync(seoDir)
    .filter((file) => /^keyword-matrix-\d{4}-\d{2}-\d{2}\.md$/.test(file))
    .map((file) => ({
      file,
      absolutePath: path.join(seoDir, file),
      date: file.match(/(\d{4}-\d{2}-\d{2})/)?.[1] ?? '',
    }))
    .sort((a, b) => b.date.localeCompare(a.date))[0] ?? null;
}

function checkKeywordMatrix() {
  const matrix = newestKeywordMatrix();
  if (!matrix) {
    fail('missing .seo/keyword-matrix-YYYY-MM-DD.md');
    return;
  }
  const ageDays = Math.floor((Date.now() - new Date(`${matrix.date}T00:00:00Z`).getTime()) / 86_400_000);
  if (ageDays > maxKeywordMatrixAgeDays) fail(`${matrix.file} is ${ageDays} days old; refresh keyword evidence`);

  const content = readFileSync(matrix.absolutePath, 'utf8');
  const stat = statSync(matrix.absolutePath);
  if (stat.size < 2000) fail(`${matrix.file} is too small to be a useful keyword evidence matrix`);
  for (const token of requiredKeywordMatrixTokens) {
    if (!content.includes(token)) fail(`${matrix.file} missing keyword evidence token: ${token}`);
  }
  for (const term of contractKeywordTerms().slice(0, 4)) {
    if (!content.toLowerCase().includes(term.toLowerCase())) {
      fail(`${matrix.file} missing manifest keyword term: ${term}`);
    }
  }
  checkBrandAndEmails(matrix.file, content);
}

checkSeoContract();
checkDist();
if (existsSync(path.join(distDir, 'sitemap.xml'))) {
  checkSitemapRobotsLlms();
  checkDiscoveryFiles();
} else {
  fail('missing built sitemap.xml; run npm run build before npm run audit:seo');
}
checkKeywordMatrix();

if (failures.length) {
  console.error('docs SEO surface audit failed:');
  for (const failure of failures) console.error(`- ${failure}`);
  process.exit(1);
}

console.log(`docs SEO surface audit passed: ${checkedPages.length + checkedLocalizedPages.length} pages, multilingual sitemap, robots, llms, keyword matrix`);
