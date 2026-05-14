# Flyto2 Warroom

Flyto2 Warroom is an AI-powered security war room that unifies **vulnerability scanning (VA/PT)**, **external attack surface monitoring (CTEM)**, and **cloud security posture management (CSPM)** into a single platform with cross-dimensional correlation.

## What Makes Warroom Different

Traditional security tools operate in silos -- one tool for code scanning, another for external monitoring, a third for cloud. Warroom connects them:

- A **critical CVE** in your code that is **reachable via a public API** and **being edited in an open PR** gets a higher blast radius score than the same CVE in an internal library.
- An **expired SSL certificate** on your production domain combined with **leaked credentials** from a breach triggers a grade cap regardless of how clean your code is.
- **Slow remediation speed** (MTTR >14 days) caps your grade at B -- because the best detection is worthless if you don't act on it.

## Products

### [Flyto2 Code](/warroom/flyto-code) -- Internal Security (VA/PT)

Connect your GitHub or GitLab repositories. Warroom scans for:
- CVE vulnerabilities (SCA) with function-level reachability
- Leaked secrets with format detection
- SAST findings with taint flow analysis
- License compliance risks
- Container vulnerabilities via Trivy

### [Flyto2 Domains](/warroom/flyto-domains) -- External Security (CTEM)

Add your domains. Warroom discovers:
- SSL/TLS configuration and certificate health
- DNS security (DNSSEC, CAA, SPF, DKIM, DMARC)
- Open ports and exposed services
- Web security headers (HSTS, CSP, X-Frame-Options)
- Breach exposure and credential leaks
- WAF detection, subdomain takeover risks

### Cross-Dimensional Correlation

When both internal and external data exist, Warroom computes:
- **Blast Radius** -- how exposed is this vulnerability to the internet?
- **PR Adjacency** -- is someone actively editing the vulnerable code?
- **Taint Adjacency** -- does user input flow to the vulnerable function?
- **Pentest Verdict** -- did a dynamic probe confirm exploitability?

## Documentation

| Topic | Description |
|-------|-------------|
| [Product Tour](/warroom/product-tour) | Visual walkthrough with 29 screenshots covering every major feature |
| [Flyto2 Code](/warroom/flyto-code) | Internal VA/PT scanning, 9 scanner categories, AutoFix, CI gate |
| [Flyto2 Domains](/warroom/flyto-domains) | External CTEM discovery (22 scanners), pentest projects, brand impersonation |
| [Scoring Methodology](/warroom/scoring-methodology) | How scores are computed, grade boundaries, confidence levels, anti-gaming |
| [Score Events](/warroom/score-events) | Grade change tracking, reason generation, smoothing, caps |
| [Closed-Loop Verify](/warroom/closed-loop) | Static + dynamic verification, confidence promotion, SSE events |
| [Pulse](/warroom/pulse) | Cross-dimensional feed, blast radius scoring, PR matching, AI advisor |
| [Red Team](/warroom/red-team) | 5-phase pipeline, campaign budgets, runner dispatch |
| [API Reference](/warroom/api) | REST endpoints, SSE events (31 types), webhooks (5 types, HMAC) |
| [Integrations](/warroom/integrations) | GitHub, GitLab, Trivy, threat feeds, CI/CD, MCP |
