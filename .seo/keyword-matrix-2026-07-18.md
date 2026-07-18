# Flyto2 Docs SEO Keyword Matrix

Date: 2026-07-18
Locale: US / English
Source: Ubersuggest keyword ideas and keyword overview
Scope: `https://docs.flyto2.com`

This file is internal SEO evidence for documentation prioritization. Docs should
serve implementation intent, not repeat marketing copy. Public docs should keep
accurate titles, descriptions, canonical URLs, `llms.txt`, `llms-full.txt`, and
sitemap coverage.

## Heat Bands

- High: 500+ estimated monthly searches
- Medium: 100-499 estimated monthly searches
- Low: 10-99 estimated monthly searches
- Emerging: 0-9 estimated monthly searches or no reliable estimate

## Documentation Keyword Coverage

| Intent | Keyword | Volume | SD | PD | CPC | Heat | Primary Docs Path | Related Landing | Related Blog |
| --- | --- | ---: | ---: | ---: | ---: | --- | --- | --- | --- |
| Core runtime | open source AI agent framework | 1600 | 6 | 3 | 7.05 | High | `/core/`, `/mcp/` | `https://flyto2.com/open-source/` | `https://blog.flyto2.com/posts/mcp-server-guide` |
| Core runtime | AI workflow automation | 1000 | 59 | 40 | 42.24 | High | `/core/`, `/guide/getting-started`, `/modules/` | `https://flyto2.com/` | `https://blog.flyto2.com/posts/ai-browser-automation-guide` |
| Modules | AI workflow automation tools | 480 | 32 | 11 | 33.65 | Medium | `/modules/`, `/modules/browser`, `/modules/ai-llm` | `https://flyto2.com/` | `https://blog.flyto2.com/posts/workflow-automation` |
| Warroom | attack surface management | 880 | 44 | 25 | 32.48 | High | `/warroom/surfaces/attack-surface` | `https://flyto2.com/attack-surface-management/` | `https://blog.flyto2.com/posts/attack-surface-management-guide` |
| Warroom | attack surface management tools | 390 | 46 | 14 | 43.46 | Medium | `/warroom/surfaces/attack-surface`, `/warroom/closed-loop` | `https://flyto2.com/attack-surface-management/` | `https://blog.flyto2.com/posts/attack-surface-management-guide` |
| Warroom | continuous threat exposure management | 260 | 39 | 32 | 171.87 | Medium | `/warroom/closed-loop`, `/warroom/` | `https://flyto2.com/ctem/` | `https://blog.flyto2.com/posts/what-is-ctem-continuous-threat-exposure-management` |
| Warroom | continuous threat exposure management ctem | 110 | 40 | 14 | 45.24 | Medium | `/warroom/closed-loop` | `https://flyto2.com/ctem/` | `https://blog.flyto2.com/posts/what-is-ctem-continuous-threat-exposure-management` |
| EASM | external attack surface management tools | 110 | 37 | 11 | 135.21 | Medium | `/warroom/surfaces/attack-surface` | `https://flyto2.com/external-attack-surface-management/` | `https://blog.flyto2.com/posts/what-is-easm-external-attack-surface-management` |
| MCP | MCP server automation | 10 | 34 | 68 | 16.50 | Low | `/mcp/`, `/modules/mcp` | `https://flyto2.com/api-docs/` | `https://blog.flyto2.com/posts/mcp-server-guide` |
| MCP testing | MCP server automation testing | 10 | 25 | 64 | 0.00 | Low | `/mcp/`, `/modules/verify`, `/modules/testing` | `https://flyto2.com/api-docs/` | `https://blog.flyto2.com/posts/mcp-server-guide` |
| Browser automation | no code browser automation | 20 | 23 | 56 | 16.13 | Low | `/modules/browser`, `/guide/getting-started` | `https://flyto2.com/` | `https://blog.flyto2.com/posts/no-code-browser-automation` |

## flyto-i18n Manifest Addendum

These terms are now carried by `.seo/i18n-seo-manifest.json`, synced from
`flyto-i18n/dist/seo-manifest.json`, and audited with the public docs build.

| Cluster | Manifest term | Volume | SD | PD | CPC | Docs routing |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| Open-source workflow automation | open source workflow automation | 70 | 47 | 28 | 11.47 | Route to `/core/`, `/mcp/`, `/modules/`, and open-source product pages. |
| Open-source workflow automation | open source workflow automation tools | 590 | 44 | 21 | 12.13 | Route to modules reference and beginner guide pages. |
| Open-source workflow automation | open source workflow automation tool | 390 | 42 | 19 | 9.60 | Route to concrete module docs and install path. |
| Open-source workflow automation | open source workflow automation platform | 260 | 45 | 24 | 13.20 | Route to architecture and execution model docs. |
| Open-source AI agent framework | best open source AI agent framework | 10 | 14 | 27 | 6.03 | Route to `/core/`, `/mcp/`, and `/guide/what-is-flyto2`. |
| Open-source AI agent framework | open source AI agent framework Python | 0 | 4 | 1 | 0.00 | Emerging implementation intent routed to `/core/` and `/modules/`. |
| Open-source AI agent framework | open source AI agent framework GitHub | 0 | 4 | 1 | 0.00 | Route to `/core/` plus GitHub distribution links. |
| MCP server automation | MCP server automation testing | 10 | 25 | 64 | 0.00 | Route to `/mcp/`, `/modules/verify`, and testing docs. |
| MCP server automation | MCP server automation agent | 0 | 4 | 1 | 0.00 | Emerging agent-tool intent routed to `/mcp/` and `/modules/mcp`. |
| MCP native AI agent runtime | open source execution engine for AI agents | 0 | 0 | 0 | 0.00 | Emerging Flyto2-owned phrase routed to `/core/`, `/mcp/`, and `/modules/`. |
| No-code browser automation | no code browser automation tool | 0 | 4 | 1 | 0.00 | Route to `/modules/browser` and beginner workflow docs. |
| No-code browser automation | free no code browser automation | 0 | 4 | 1 | 0.00 | Route to `/modules/browser` plus landing/open-source pages. |
| CTEM explainers | what is continuous threat exposure management | 20 | 15 | 31 | 0.00 | Route to `/warroom/closed-loop` plus landing `/ctem/` and the CTEM explainer post. |

## Long-Tail Docs Routing

| Docs task | Long-tail examples | Route behavior |
| --- | --- | --- |
| Start a workflow | `how to build AI workflow automation`, `AI workflow automation tutorial`, `self-hosted workflow automation` | Start at `/guide/getting-started`, then move to `/core/` and `/modules/`. |
| Connect AI agents to tools | `MCP server automation`, `MCP automation tools`, `MCP tools for AI agents` | Route to `/mcp/` and `/modules/mcp`. |
| Automate browser work | `no code browser automation`, `automate website without code`, `record and replay browser automation` | Route to `/modules/browser` and beginner guide pages. |
| Build CTEM workflows | `continuous threat exposure management ctem`, `CTEM framework`, `CTEM vs vulnerability management` | Route to `/warroom/closed-loop` and surface pages. |
| Work with EASM data | `external attack surface management platform`, `outside-in discovery`, `asset attribution` | Route to `/warroom/surfaces/attack-surface`. |

## Current Assessment

- Keywords: covered in `.vitepress/config.mts` via `SEO_KEYWORDS`, page metadata, and JSON-LD.
- Long-tail keywords: covered by docs paths and `public/llms.txt` / `public/llms-full.txt`.
- Search heat: now documented here with source, date, volume, SD, PD, and CPC.

## Maintenance Rules

- Refresh this matrix quarterly or when docs navigation changes.
- Keep docs pages focused on implementation details and cite landing/blog pages only for category education.
- Add Google Search Console query data once docs has stable impressions.
- Keep Flyto2 spelling exact and keep public contact emails on `@flyto2.com`.
