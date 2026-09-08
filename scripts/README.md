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
- `check-unpublished-links.mjs` retires the external-link exclusions. The
  docs describe Flow CE and Warroom CE before those repositories are public,
  so their links 404 today and the lychee step in `seo.yml` excludes them.
  This reads `config/unpublished-repos.json` and fails once a listed
  repository answers publicly, which is the moment the exclusion starts
  hiding a link that works. Removing an entry there means removing its
  matching `--exclude` in the same change.
- The lychee step also excludes this repository's own
  `blob/main/...` source links. A file added by a pull request does not
  exist on `main` until it merges, so those links 404 for the run that
  introduces them and no external check can judge them. They are checked
  instead by `generate-code-reference.py --check`, against the working
  tree that produced them, which is the only place the answer is knowable.
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
