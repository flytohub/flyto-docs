# Flyto2 Warroom

**Security teams already have useful tools. The hard part is making their signals work together.**

Your code scanner found a critical CVE. Your external scanner says your API is exposed. Your Git log shows a developer is editing that exact file in an open PR right now. Three tools, three dashboards, limited correlation -- and the team still has to decide what matters first.

Flyto2 Warroom is built to complement that stack: ingest trusted signals, correlate them with assets and code, validate what matters, and keep the evidence attached to the action.

![Scoring Breakdown](/warroom/21-scoring-breakdown.png)

## The Problem

Most security teams already operate multiple tools. Each sees one dimension:

| What you have | What it sees | What it can't tell you |
|--------------|-------------|----------------------|
| Code scanner | Vulnerabilities in your repos | Whether they're reachable from the internet |
| External rating | Your perimeter posture | Whether internal code is actually affected |
| Container scanner | OS-package CVEs | Whether anyone is actively editing the vulnerable code |

Each tool scores independently. None of them can answer: **"Is this critical CVE in my code actually exploitable through my public API, and is someone about to deploy a change that makes it worse?"**

Flyto2 Warroom helps answer that combined question without asking you to throw away the tools that produced the signals.

## How It Works

```
Repositories (GitHub/GitLab)          Domains (your attack surface)
         │                                       │
    flyto-indexer                          22 discovery scanners
    CVE · SAST · Secrets                  TLS · DNS · Headers · Ports
    Taint · IaC · License                 Breach · Threat Intel · WAF
         │                                       │
         └──────────────┬────────────────────────┘
                        │
              Flyto2 Warroom Engine
              Cross-dimensional correlation
              Unified scoring (250-900)
                        │
              ┌─────────┼─────────┐
              │         │         │
           Pulse    Score Card   Reports
         (act now)  (A-F grade)  (PDF/compliance)
```

1. **Connect** -- Link your GitHub/GitLab repos and add your domains
2. **Scan** -- Automatic scanning on push, daily, or on-demand
3. **Correlate** -- Engine maps internal vulnerabilities to external exposure
4. **Score** -- One unified score (250-900, A-F) across all dimensions
5. **Act** -- Pulse feed tells you what to fix first, AutoFix generates PRs

## What Makes Warroom Different

**Cross-dimensional correlation.** When both internal code and external domains are connected, Warroom computes signals that no single-dimension tool can:

- **Blast Radius** -- A CVE in code that's exposed through a public API scores higher than the same CVE in an internal library
- **PR Adjacency** -- A vulnerability in a file being actively edited in an open PR gets flagged immediately
- **Taint Adjacency** -- User input flowing to a vulnerable function through an unsanitized path amplifies the risk
- **Pentest Verdict** -- Dynamic probing confirms whether a vulnerability is actually exploitable, not just theoretically possible

The result: your team fixes the things that actually matter, in the right order.

## Who It's For

| Role | What Warroom gives you |
|------|----------------------|
| **CISO / Security Lead** | Single dashboard with A-F grade, trend tracking, compliance reports, board-ready PDFs |
| **DevSecOps Engineer** | Pulse feed with blast radius scores, AutoFix PRs, CI gate policies |
| **Developer** | PR decorations showing which findings affect your code, one-click fixes |
| **Compliance / GRC** | OWASP Top 10, ISO 27001, SOC 2, PCI-DSS control mapping with evidence |

## Products

### [Flyto2 Code](/warroom/flyto-code) -- Internal Security (VA/PT)

Connect your repositories. 9 scanner categories detect CVEs, secrets, taint flows, license risks, and IaC misconfigurations. Every finding carries a confidence level (L0/L1/L2) that reflects how verified it is.

![Repository Detail](/warroom/08-repo-detail.png)

### [Flyto2 Domains](/warroom/flyto-domains) -- External Security (CTEM)

Add your domains. 22 scanners discover TLS issues, DNS misconfigurations, open ports, breach exposure, and brand impersonation threats. Continuous monitoring catches changes before attackers do.

![Domain Security](/warroom/23-domain-security.png)

## Quick Links

| | |
|---|---|
| **New here?** | [Getting Started](/warroom/getting-started) -- Connect your first repo in 5 minutes |
| **Want a tour?** | [Product Tour](/warroom/product-tour) -- 29 screenshots walking through every feature |

## Documentation

| Topic | Description |
|-------|-------------|
| [Overview](/warroom/overview) | Architecture, scoring model, and product capabilities at a glance |
| [Getting Started](/warroom/getting-started) | Connect repos and domains, run your first scan, see your score |
| [Flyto2 Code](/warroom/flyto-code) | Internal VA/PT scanning, 9 scanner categories, AutoFix, CI gate |
| [Flyto2 Domains](/warroom/flyto-domains) | External CTEM discovery (22 scanners), pentest projects, brand impersonation |
| [Scoring Methodology](/warroom/scoring-methodology) | How scores are computed, grade boundaries, confidence levels, anti-gaming |
| [Score Events](/warroom/score-events) | Grade change tracking, reason generation, smoothing, caps |
| [Closed-Loop Verify](/warroom/closed-loop) | Static + dynamic verification, confidence promotion |
| [Pulse](/warroom/pulse) | Cross-dimensional feed, blast radius scoring, PR matching, AI advisor |
| [Red Team](/warroom/red-team) | 5-phase pipeline, campaign budgets, runner dispatch |
| [API Reference](/warroom/api) | REST endpoints, SSE events (31 types), webhooks (5 types, HMAC) |
| [Integrations](/warroom/integrations) | GitHub, GitLab, Trivy, threat feeds, CI/CD, MCP |
| [Product Tour](/warroom/product-tour) | Visual walkthrough with 29 screenshots |
