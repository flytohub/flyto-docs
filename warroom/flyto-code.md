# Flyto Code -- Internal Security (VA/PT)

Flyto Code scans your connected repositories for security vulnerabilities, secrets, and code quality issues. It integrates with your existing GitHub or GitLab workflow.

## How It Works

```
Repository --> flyto-indexer scan --> Profile + CVE + Taint --> flyto-engine --> Score
```

1. **Connect** -- Link your GitHub or GitLab account via OAuth
2. **Scan** -- Automatic or manual triggering via UI, CI/CD, or API
3. **Analyze** -- flyto-indexer builds a dependency graph, detects CVEs, traces taint flows
4. **Score** -- Engine computes per-repo and org-level scores with confidence levels
5. **Remediate** -- AutoFix generates PRs, closed-loop verify confirms the fix

## Scanner Coverage (9 Categories)

| Category | Scanner | Method |
|----------|---------|--------|
| **CVE (SCA)** | OSV + GHSA + NVD | Dependency graph, batch vulnerability lookup |
| **SAST** | Taint analysis | AST-based source-to-sink flow tracking |
| **Secrets** | Regex + known formats | Pattern matching with format classification |
| **License** | Dependency metadata | GPL/AGPL/SSPL detection |
| **Container** | Trivy | OS-package CVE scanning for Docker images |
| **IaC** | Rule engine | Terraform/CloudFormation misconfiguration detection |
| **Reachability** | Import graph | Function-level call chain analysis to CVE-affected code |
| **Profile** | Language/framework detection | Build system, dependency manager, runtime identification |
| **API Definitions** | OpenAPI/GraphQL schema | Endpoint extraction for attack surface mapping |

## CVE Enrichment

Every CVE finding is enriched with multiple data sources:

- **GHSA** -- GitHub Security Advisories provide patch versions and affected version ranges
- **AI Enricher** -- Generates function-level context: which specific function is vulnerable, what the attack vector looks like, and whether the vulnerable code path is reachable in your project
- **EPSS** -- Exploit Prediction Scoring System probability (updated daily)
- **CISA KEV** -- Known Exploited Vulnerabilities catalog membership

Enrichment runs automatically after each scan and on a background schedule (every 10 minutes for new CVE data).

## Confidence System (L0 / L1 / L2)

Every finding carries a confidence level that multiplies its scoring penalty:

| Level | Multiplier | Meaning | Example |
|-------|-----------|---------|---------|
| **L0** | 0.3x | Scanner-detected only | Regex-matched potential secret |
| **L1** | 0.7x | Corroborated by second signal | CVE in imported package + reachability confirmed |
| **L2** | 1.0x | Verified by objective evidence | CISA KEV list, EPSS >=0.5, manual verification |

**Promotion criteria:**

- L0 to L1: Package is in import graph (reachable), or CVE has CVSS >= 7.0
- L1 to L2: On CISA KEV list, EPSS >= 0.5, or verified via [closed-loop](/warroom/closed-loop) dynamic probe
- Any to Excluded: Verified unreachable (confidence >= 70%), or marked false positive

## Closed-Loop Verify

Two verification modes promote findings through confidence levels. See [Closed-Loop Verify](/warroom/closed-loop) for full details.

- **Static mode** -- Import graph analysis + taint tracing + CVE function-level reachability
- **Dynamic mode** -- Runner dispatch to a target URL with live exploitation attempt, requires acknowledged consent

## AutoFix

AutoFix generates pull requests to remediate vulnerabilities automatically.

### Legacy AutoFix (CVE Bump)

Bumps vulnerable dependencies to the nearest patched version. Works for direct dependencies with known fix versions in GHSA.

### AutoFix v2 (Tiered)

| Tier | Scope | Method |
|------|-------|--------|
| **Tier 1** | Direct dependency CVE | Version bump to patched release |
| **Tier 2** | Transitive dependency CVE | Lock file override or resolution strategy |
| **Tier 3** | Code-level fix | AI-generated code patch for SAST/taint findings |

AutoFix PRs include a summary of what changed, which CVEs are resolved, and a confidence indicator.

## Fix Plan

AI-generated remediation roadmap for an organization's vulnerability backlog. The fix plan:

- Prioritizes findings by risk score (severity x exploitability x reachability)
- Groups related findings that share a common fix (e.g., one dependency bump resolving 5 CVEs)
- Estimates effort and provides a recommended remediation sequence
- Updates dynamically as findings are resolved or new ones appear

## Scan Upload (CI Mode)

For air-gapped environments or custom CI pipelines, flyto-indexer can run locally and upload results.

```bash
flyto-index scan .
flyto-index export .
# Upload the exported JSON to flyto-engine via API
```

### Three Trigger Types

| Trigger | When | Use Case |
|---------|------|----------|
| **Webhook** | Git push / PR event | Real-time CI/CD integration |
| **Scheduled** | Cron (daily/weekly) | Overnight or low-frequency monitoring |
| **Manual** | UI button or API call | On-demand scan |

## CI Gate

Policy evaluation that returns pass/fail for CI pipelines.

- Define policies: max critical CVEs, max high CVEs, required scan categories
- Gate evaluates against the latest scan results
- Returns structured JSON with pass/fail status, violation details, and finding counts
- Integrates with GitHub Actions, GitLab CI, and any CI system that can call an HTTP endpoint

```
POST /api/v1/code/repos/{id}/ci-gate
Response: { "pass": false, "violations": [...], "summary": "..." }
```

## Time Decay

Unpatched findings become progressively more expensive:

| Age | Penalty Multiplier |
|-----|-------------------|
| 0-30 days | 1.0x (base) |
| 30-90 days | 1.0x - 1.4x |
| 90-180 days | 1.4x - 2.0x |
| 180+ days | 2.0x (maximum) |

## Scoring

Code Security contributes **40%** of the unified score. See [Scoring Methodology](/warroom/scoring-methodology) for details.

### Per-Repo Score

Each repository gets an individual score based on:

- CVE count weighted by severity (critical -15, high -8, medium/low -2)
- Secret count (-30 first, -15 each additional)
- Taint flow count (-8 per unsanitized flow)
- SAST finding count (-1.5 per finding net of CVEs)

### Org-Level Aggregation

The worst repository drives the org score. Clean repositories can lift the score by at most 15% of the gap, capped at 15 points. This prevents 20 clean repos from masking 1 severely compromised repo.

## Scan Modes

| Mode | Trigger | Use Case |
|------|---------|----------|
| **On Push** | GitHub/GitLab webhook | CI/CD integration |
| **Daily** | Scheduled worker | Overnight scan |
| **Weekly** | Scheduled worker | Low-frequency monitoring |
| **Manual** | UI button or API call | On-demand |
| **Upload** | `flyto-index scan . && flyto-index export .` | Air-gapped environments |

## Grade Cap

If any repository has an **unpatched critical CVE**, the org-level grade is capped at **B (<=75)** regardless of other dimensions. This cap takes effect immediately and overrides smoothing. See [Scoring Methodology](/warroom/scoring-methodology#grade-caps) for all cap conditions.
