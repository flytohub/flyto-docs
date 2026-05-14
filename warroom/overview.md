# Overview

Flyto2 Warroom is a unified security platform that combines **internal code scanning** (VA/PT), **external attack surface monitoring** (CTEM), and **cross-dimensional correlation** into a single score.

This page gives you the full picture in 3 minutes.

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                        Data Sources                             │
├──────────────────────┬──────────────────────────────────────────┤
│  Internal (Code)     │  External (Domains)                     │
│  ─────────────────   │  ──────────────────────                 │
│  GitHub / GitLab     │  Your domains + subdomains              │
│  flyto-indexer scan  │  22 discovery scanners                  │
│  CVE, SAST, Secrets  │  TLS, DNS, Headers, Ports              │
│  Taint, IaC, License │  Breach, Threat Intel, WAF             │
│  Container (Trivy)   │  Brand impersonation                   │
└──────────┬───────────┴───────────────┬──────────────────────────┘
           │                           │
           ▼                           ▼
┌──────────────────────────────────────────────────────────────────┐
│                    Flyto2 Warroom Engine                         │
│                                                                  │
│  ┌──────────────┐  ┌──────────────┐  ┌────────────────────────┐ │
│  │ Code Security │  │ Attack       │  │ Diligence              │ │
│  │ (40%)         │  │ Surface (35%)│  │ (25%)                  │ │
│  │ 5 sub-vectors │  │ 11 sub-vec   │  │ 5 sub-vectors          │ │
│  └──────┬───────┘  └──────┬───────┘  └──────────┬─────────────┘ │
│         └─────────────────┼──────────────────────┘               │
│                           ▼                                      │
│              Cross-Dimensional Modifiers (±15 pts)               │
│              Blast radius · PR adjacency · Taint                 │
│              Pentest verdict · MTTR penalty                      │
│                           ▼                                      │
│              Grade Caps → 30-Day Smoothing → Final Score         │
└──────────────────────────────┬───────────────────────────────────┘
                               ▼
┌──────────────────────────────────────────────────────────────────┐
│                      Outputs                                     │
│  ┌────────┐  ┌─────────┐  ┌────────┐  ┌─────────┐  ┌────────┐ │
│  │ Score  │  │ Pulse   │  │AutoFix │  │ Reports │  │  API   │ │
│  │ A-F    │  │ Feed    │  │ PRs    │  │ PDF     │  │ + SSE  │ │
│  │250-900 │  │Priority │  │Auto PR │  │OWASP    │  │31 event│ │
│  └────────┘  └─────────┘  └────────┘  └─────────┘  └────────┘ │
└──────────────────────────────────────────────────────────────────┘
```

## Three Scoring Modes

Warroom adapts to what you've connected. You don't need both repos and domains to get value.

| Mode | What's connected | What's scored | Use case |
|------|-----------------|---------------|----------|
| **Internal only** | Repos, no domains | Code Security + Diligence | Dev teams focused on code quality |
| **External only** | Domains, no repos | Attack Surface | Security teams monitoring external posture |
| **Combined** | Both repos and domains | All categories + cross-dim correlation | Full visibility with correlation |

Cross-dimensional modifiers only activate in Combined mode. Internal-only and External-only scores are fully independent and useful on their own.

## Key Capabilities

### Scanning

![Issues List](/warroom/05-issues-list.png)

- **9 internal scanner categories** -- CVE (SCA), SAST, secrets, license, container, IaC, reachability, profile, API definitions
- **22 external discovery scanners** -- TLS, DNS, DNSSEC, CAA, SPF, DKIM, DMARC, headers, ports, sensitive files, subdomains, takeover, WAF, tech detection, API endpoints, breach, credentials, Shodan, URLhaus, Feodo, ThreatFox, brand impersonation
- **Continuous monitoring** -- Hourly threat feeds, daily TLS checks, weekly full re-discovery

### Confidence System (L0 / L1 / L2)

Not all findings are equal. Flyto2 tracks how verified each finding is:

| Level | Multiplier | Meaning |
|-------|-----------|---------|
| **L0** | 0.3x penalty | Scanner-detected only -- might be a false positive |
| **L1** | 0.7x penalty | Corroborated by a second signal (import graph, CVSS >= 7.0) |
| **L2** | 1.0x penalty | Verified by objective evidence (CISA KEV, EPSS >= 0.5, dynamic probe) |

[Closed-loop verification](/warroom/closed-loop) promotes findings through these levels automatically.

### Unified Scoring (250-900, A-F)

![Scoring Breakdown](/warroom/21-scoring-breakdown.png)

One score across all dimensions, compatible with the Bitsight 250-900 scale:

- **A (740-900)** -- Strong security posture
- **B (640-730)** -- Acceptable with improvements needed
- **C (500-630)** -- Significant concerns
- **D (380-490)** -- Serious deficiencies
- **F (250-370)** -- Critical state

Scores are smoothed over 30 days to prevent panic and gaming. Grade caps enforce hard floors: an unpatched critical CVE caps you at B regardless of everything else.

See [Scoring Methodology](/warroom/scoring-methodology) for the full formula.

### Pulse -- What to Fix First

![Pulse Feed](/warroom/04-pulse-feed.png)

Pulse correlates findings across 6 dimensions (code, external surface, threat intel, git activity, pentest results, remediation state) and assigns a deterministic blast radius score (0-100). The highest-blast-radius items appear first.

Pulse also matches findings to open PRs -- so if a developer is about to deploy a change that touches a vulnerable file, you see it immediately.

See [Pulse](/warroom/pulse) for details.

### AutoFix

![AutoFix](/warroom/06-autofix.png)

AI-powered remediation that generates pull requests:

- **Tier 1** -- Direct dependency CVE bump
- **Tier 2** -- Transitive dependency override
- **Tier 3** -- AI-generated code patch for SAST/taint findings

### Reports & Compliance

![Reports](/warroom/27-reports-owasp.png)

Pre-built templates for OWASP Top 10, ISO 27001, SOC 2, PCI-DSS. Each control is evaluated against actual scan evidence, not self-assessments. Export to PDF with one click.

Custom report builder available for tailored reports.

### Integrations

- **Source control** -- GitHub (OAuth + PR decoration), GitLab (PKCE)
- **CI/CD** -- Scan upload, CI gate pass/fail
- **Container** -- Trivy integration
- **Threat feeds** -- Shodan, URLhaus, Feodo, ThreatFox, HIBP
- **AI tools** -- MCP server for Claude Code, Cursor, etc.
- **API** -- Full REST API with 31 SSE event types and 5 webhook types

See [Integrations](/warroom/integrations) for setup details.

## Next Steps

- [Getting Started](/warroom/getting-started) -- Connect your first repo in 5 minutes
- [Why Flyto2](/warroom/why-flyto2) -- How we compare to alternatives
- [Product Tour](/warroom/product-tour) -- Visual walkthrough with 29 screenshots
