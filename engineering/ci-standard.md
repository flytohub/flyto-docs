# CI / Engineering Baseline Standard

> Canonical source: **FLYA-11 — Engineering Baseline Standard**. This page
> is the engineer-facing summary of the per-stack CI templates and the
> branch-protection profile every active flytohub repo is held to.

Every active repo runs **lint → build → test** on every pull request and
every push to `main`, via a `.github/workflows/ci.yml` cut from the
per-stack template below. New repos must land CI before their first
feature merge.

## Per-stack CI templates

| Stack | Repos (examples) | CI jobs |
|-------|------------------|---------|
| **Python** | `flyto-core`, `flyto-ai`, `flyto-indexer`, `flyto-pro*`, `flyto-data` (backend) | `ruff` + `mypy` + `pytest` + `pip-audit` |
| **Go** | `flyto-engine` | `go vet` + `golangci-lint` + `go test ./...` + `govulncheck` |
| **Node / TS** | `flyto-cloud`, `flyto-code`, `flyto-console`, `flyto-cortex`, `flyto-vscode`, `flyto-plugins-js`, `flyto-landing-page` | `eslint` + `tsc --noEmit` + test runner + `npm audit --audit-level=high` |
| **Flutter** | `flyto-app` | `flutter analyze` + `flutter test` |

Conventions baked into the templates:

- Triggers: `pull_request` + `push` to `main` + `workflow_dispatch`.
- `concurrency` group per ref with `cancel-in-progress: true` so rapid
  pushes don't stack full CI cycles.
- `permissions: contents: read` by default.
- The **lint** and **test** jobs are required status checks. The
  **security** job (`pip-audit` / `npm audit` / `govulncheck`) runs on
  every PR but is a *hard* gate only for published packages; elsewhere it
  is informational so a transitive advisory can't block all merges.
- New typing/test debt on a freshly-onboarded repo is surfaced (not
  hidden): advisory steps use `continue-on-error`, and optional-dependency
  tests `importorskip`/`skipif` rather than erroring at collection.

### Python (`ci.yml`)

```yaml
name: CI
on:
  pull_request: { branches: [main] }
  push: { branches: [main] }
  workflow_dispatch:
concurrency: { group: ci-${{ github.ref }}, cancel-in-progress: true }
permissions: { contents: read }
jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: '3.12' }
      - run: pip install ruff mypy
      - run: ruff check src/
      - run: mypy src/            # promote off continue-on-error once typed
  test:
    runs-on: ubuntu-latest
    strategy: { matrix: { python-version: ['3.11', '3.12'] } }
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: ${{ matrix.python-version }} }
      - run: pip install ".[dev]"
      - run: pytest tests/ -v
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: '3.12' }
      - run: pip install . pip-audit
      - run: pip-audit
```

The Go (`flyto-engine`), Node/TS (`flyto-code`, `flyto-console`), and
Flutter templates follow the same shape; copy the closest existing
`ci.yml` from a same-stack repo as the starting point.

## Companion repo hygiene

Each repo also carries (FLYA-11 checklist):

- `.github/dependabot.yml` — weekly `pip`/`npm` + `github-actions` updates.
- `.github/CODEOWNERS` — default owner (code-owner review is advisory
  until `require_code_owner_reviews` is enabled).
- `README` + `LICENSE` + canonical `SECURITY.md`.
- Release automation for published packages (tag → build → sign/provenance
  → publish), see FLYA-18.

## Branch-protection profile (`main`)

Applied via the GitHub branch-protection API. Current profile:

- Force-push **off**, deletion **off**, conversation-resolution **required**.
- Required **status checks**: the repo's CI `lint`/`build`/`test` jobs.
- `enforce_admins = false` — the repo owner retains an emergency
  direct-push path while the team is small. Revisit as the team grows.
- Required PR review (≥1 approval) is **on for the shared-spine repos**
  (`flyto-core`, `flyto-engine`, `flyto-i18n`) and rolls out to the rest
  as engineer headcount supports it.
