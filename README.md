<h1 align="center">Flyto Docs</h1>

<p align="center">
  <b>Documentation for the Flyto Platform — core, cloud, cortex, engine, plugins.</b>
</p>

<p align="center">
  <a href="https://docs.flyto2.com">📖 Read online</a> ·
  <a href="https://flyto2.com">🌐 flyto2.com</a>
</p>

---

## Contents

```
docs/
├── core/          flyto-core — debuggable automation engine
├── cloud/         flyto-cloud — workflow SaaS + desktop app
├── cortex/        flyto-cortex — knowledge workspace
├── engine/        flyto-engine — Go backend internals
├── plugins/       flyto-plugins-js — browser plugins
├── indexer/       flyto-indexer — code-intelligence MCP server
├── blueprint/     flyto-blueprint — workflow templates
├── ai/            flyto-ai — AI-assisted workflows
├── i18n/          flyto-i18n — translation workflow
└── <lang>/        Localised mirrors (zh, de, es, fr, ja, hi, id, it)
```

Built with VitePress. Every product repo links back here for deep
documentation; this repo is the single source of truth so the README of
each product can stay short and opinionated.

## Local development

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # static output in docs/.vitepress/dist
```

## Contributing

Typo / clarity fix → PR straight to `main`. Bigger structural changes —
open a [discussion](https://github.com/flytohub/flyto-core/discussions) first
so we can keep navigation consistent across languages.

## Related

- [flyto-core](https://github.com/flytohub/flyto-core)
- [flyto-cloud](https://github.com/flytohub/flyto-cloud)
- [flyto-cortex](https://github.com/flytohub/flyto-cortex)
- [flyto-engine](https://github.com/flytohub/flyto-engine)
