# Scripts

This directory contains documentation generators and release verification
helpers. Generated module and reference pages are committed so normal hosting
does not depend on sibling repositories.

## Generators

- `generate-docs.py` reads the flyto-core registry and flyto-i18n locales to
  generate 60 module pages per locale for 15 locales.
- `sync-core-reference.py` syncs nine Core narrative documents and source-backed
  CLI, HTTP, configuration, recipe, registration, file, and declaration
  references. The Python declaration reference is split by responsibility.
- `generate-code-reference.py` indexes every maintained function in Docs'
  Python, JavaScript, TypeScript, VitePress, SEO, and audit code.
- `sync-i18n-seo-manifest.mjs` imports the versioned Docs SEO surface from
  flyto-i18n.

Important checks:

- `generate-discovery.mjs` creates `public/image-sitemap.xml` and
  `public/discovery-manifest.json` from the committed Warroom screenshots.
- `audit-seo-surface.mjs` validates built docs metadata, sitemap, robots,
  llms files, image sitemap coverage, social image assets, `security.txt`,
  Flyto2 naming, `@flyto2.com` emails, and keyword evidence.
- `check-documentation.py` validates all Markdown identity, generated module
  inventories, Core provenance, declaration totals, code-reference drift,
  source ownership, Flyto2 naming, and the 16 approved public mailboxes.
- `check-public-links.mjs` resolves every built internal link and anchor.
- `seo-score.mjs` and `seo-manage.mjs` create page-level and portfolio-level
  reports from built evidence rather than subjective claims.

## Public Docs Audit

`audit-docs-public.mjs` verifies the public Warroom CE distribution surface:

- `/warroom/self-hosted-ce` exists.
- The VitePress sidebar exposes the self-hosted CE page.
- `public/llms.txt` and `public/llms-full.txt` cite the same canonical product,
  docs, GitHub, and Docker Hub links.
- The GitHub social link points to the public Warroom CE repository.

Run it directly with:

```sh
node scripts/audit-docs-public.mjs
```

The repository-level closed loop is:

```sh
npm run verify
```

That command runs the public docs audit, full documentation contract, syntax
checks, VitePress build, internal links, metadata audit, SEO score, and SEO
management gate before publishing.
