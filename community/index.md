# Flyto2 Community

Flyto2 community work should make the open-source runtime easier to try,
inspect, debug, and share. This page is the technical companion to the public
community hub at <https://flyto2.com/community/>.

## Primary Channels

| Need | Channel |
|------|---------|
| Setup or workflow question | [GitHub Discussions](https://github.com/flytohub/flyto-core/discussions) |
| Bug report | Issue template in the repo where it failed |
| Small public contribution | [good first issues](https://github.com/flytohub/flyto-core/contribute) |
| Reusable demo or recipe | Showcase issue or Discussion |
| Vulnerability report | security@flyto2.com |

## What To Contribute First

The strongest first contributions are small and verifiable:

- a minimal recipe that demonstrates one module group;
- a missing install, MCP, or browser automation example;
- a docs fix that removes setup ambiguity;
- a reproducible bug with command output and version details;
- a focused test for existing behavior;
- a Warroom CE lab that uses safe sample data.

Avoid first issues that need private systems, customer data, commercial
credentials, or broad architecture decisions.

## Social Syndication Rules

Flyto2 can draft and publish community updates to social channels, but source
control must stay credential-free.

The review order is:

1. Write or choose one canonical URL: blog post, docs page, landing page,
   GitHub release, package page, or YouTube demo.
2. Generate social drafts for LinkedIn, Facebook, GitHub, YouTube, and other
   channels.
3. Review copy, tags, and links before publishing.
4. Run live publish only with maintainer-owned credentials passed through
   runtime environment variables.
5. Store returned post IDs in generated artifacts or release notes, not in
   source files.

Do not commit access tokens, page tokens, refresh tokens, app secrets, cookies,
or local account data.

## Canonical Link Map

- Product community hub: <https://flyto2.com/community/>
- Org community defaults: <https://github.com/flytohub/.github/blob/main/COMMUNITY.md>
- Contributor guide: <https://github.com/flytohub/.github/blob/main/CONTRIBUTING.md>
- Blog launch notes: <https://blog.flyto2.com/posts/community-growth-open-source-ai-workflow-automation>
- Core runtime docs: [/core/](/core/)
- MCP docs: [/mcp/](/mcp/)
- Modules reference: [/modules/](/modules/)

## Good Showcase Format

A useful showcase answers five questions:

1. What did the workflow do?
2. Which Flyto2 repo, module group, or MCP client did it use?
3. What command or config can another person reuse?
4. What evidence did the run produce?
5. What secrets or private data were removed before sharing?

Use screenshots, traces, replay notes, and short videos when they help someone
reproduce the result.
