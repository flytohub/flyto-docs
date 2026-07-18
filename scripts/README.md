# Scripts

This directory contains local-only documentation verification helpers.

Important checks:

- `generate-discovery.mjs` creates `public/image-sitemap.xml` and
  `public/discovery-manifest.json` from the committed Warroom screenshots.
- `audit-seo-surface.mjs` validates built docs metadata, sitemap, robots,
  llms files, image sitemap coverage, social image assets, `security.txt`,
  Flyto2 naming, `@flyto2.com` emails, and keyword evidence.

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

That command runs the public docs audit, lint alias, and VitePress build before
publishing.
