# Flyto2 Docs

[![Website](https://img.shields.io/badge/docs-docs.flyto2.com-06B6D4)](https://docs.flyto2.com)
[![Product](https://img.shields.io/badge/product-flyto2.com-8B5CF6)](https://flyto2.com)
[![GitHub](https://img.shields.io/badge/GitHub-flytohub%2Fflyto--docs-181717?logo=github)](https://github.com/flytohub/flyto-docs)

Flyto2 Docs is the public technical documentation and citation surface for
Flyto2 Warroom, evidence-backed CTEM, attack surface management, code
intelligence, dark web and threat intelligence, automated security testing,
red-team workflows, MCP security, scoring, reports, and the deterministic
execution engine.

Use this repo when you need source-of-truth docs for Flyto2 Core, Flyto2 AI,
Flyto2 Indexer, Flyto2 Blueprint, Flyto2 Warroom CE, MCP transport, module
reference, self-hosted deployment, AI-search citation files, or multilingual
technical pages.

Read online:

- Website: <https://docs.flyto2.com>
- Product site: <https://flyto2.com>
- Self-hosted CE: <https://docs.flyto2.com/warroom/self-hosted-ce>
- GitHub CE: <https://github.com/flytohub/flyto-warroom>
- Docker Hub CE: <https://hub.docker.com/r/chesterhsu/flyto-warroom>

## Contents

| Area | Purpose |
| --- | --- |
| `guide/` | Start path for onboarding, installation, first workflow, and configuration |
| `warroom/` | Warroom, CTEM, surfaces, scoring, BYO integrations, CE install, and APIs |
| `core/` | Deterministic execution, evidence replay, and runtime architecture |
| `modules/` | Flyto2 module reference generated from flyto-core |
| `mcp/` | MCP server setup and transport reference |
| `indexer/` | flyto-indexer code intelligence and MCP tools |
| `ai/` | flyto-ai providers, agents, prompts, and CLI |
| `blueprint/` | Workflow blueprint docs |
| `public/llms*.txt` | AI/search-readable citation indexes |

## Navigation Model

The public docs menu is organized by user intent:

- `Start`: onboarding, installation, first workflow, and configuration.
- `Build`: core runtime, MCP server, module reference, and workflow mechanics.
- `Reference`: flyto-ai, flyto-indexer, and flyto-blueprint.
- `Security`: Warroom, self-hosted CE, security surfaces, BYO integrations, and scoring.
- `Resources`: product lines, blog, product site, and public repositories.

Keep the top navigation short. Put deep module categories and Warroom surfaces
in sidebars, with broad groups collapsed by default so the first screen remains
scannable.

## Install

```bash
npm install
```

## Usage

```bash
npm run docs:dev      # local VitePress dev server
npm run verify        # public docs audit + build
npm run docs:preview  # preview built site
```

`npm run verify` runs the public docs audit and VitePress build. The audit
checks the self-hosted CE entry, sidebar, GitHub/Docker links, and AI-readable
`llms` files so docs, landing, GitHub, and Docker Hub stay aligned.

## API And Citation Policy

Docs are the technical source of truth. Use `flyto2.com` for product
positioning, `docs.flyto2.com` for mechanics and contracts, and
`blog.flyto2.com` for educational explanations.

When adding public pages, update:

- VitePress navigation/sidebar when the page should be discoverable;
- `public/llms.txt` and `public/llms-full.txt` for AI/search citation;
- related landing/blog references when the page changes product positioning;
- `scripts/audit-docs-public.mjs` when a new launch-critical route becomes
  mandatory.

## Contributing

Small typo and clarity fixes can go directly through a pull request. Larger
structural changes should keep docs, landing, blog, GitHub, and Docker Hub
wording consistent. Do not publish credentials, customer data, private
implementation details, or unreleased customer claims.
