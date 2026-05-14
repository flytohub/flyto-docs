# Why Flyto2

Every security tool on the market sees one dimension. Flyto2 sees the full picture.

## The Gap in Today's Tools

### External-only tools (Bitsight, SecurityScorecard)

These platforms scan your domains from the outside -- TLS certificates, DNS records, open ports, breach exposure. They're good at answering "what does my perimeter look like?" but they have no visibility into your code.

**What they miss:**
- A critical CVE in your backend code that's reachable through a public API
- A leaked secret in your repository that matches a production credential
- Whether your team is actually fixing vulnerabilities or just shipping new features

**The consequence:** You can have an A rating on Bitsight while your codebase has 50 unpatched critical CVEs. The score looks great until you get breached.

### Internal-only tools (Snyk, SonarQube, Semgrep)

These tools scan your code for vulnerabilities, secrets, and code quality issues. They're good at finding problems, but they can't tell you which ones matter most.

**What they miss:**
- Whether a CVE in your dependency is actually reachable from the internet
- Whether the vulnerable endpoint is behind a WAF or exposed directly
- Whether your TLS certificate is about to expire on the same domain

**The consequence:** Your backlog has 500 findings, all marked "high severity." Your team treats them all equally, or worse, ignores the backlog entirely because there's no way to prioritize.

### Point solutions (Trivy, Grype, Nuclei, OWASP ZAP)

Specialized tools that do one thing well. But each produces its own findings in its own format, with no correlation between them.

**The consequence:** You're the integration layer. You manually cross-reference CVEs against your domain exposure, check Git logs to see who's working on what, and build spreadsheets to track remediation. This doesn't scale.

## How Flyto2 Is Different

### 1. Unified scoring across dimensions

One score (250-900, A-F) that combines internal code security, external attack surface, and operational diligence. Not three separate dashboards -- one number that reflects your actual risk.

| Category | Weight | What it measures |
|----------|--------|-----------------|
| Code Security | 40% | CVEs, secrets, taint flows, SAST, containers |
| Attack Surface | 35% | TLS, DNS, headers, ports, breach, threat intel |
| Diligence | 25% | Scan coverage, triage rate, remediation speed |

### 2. Cross-dimensional correlation

When both internal and external data exist, Flyto2 computes signals that no single-dimension tool can:

| Signal | What it means | Scoring impact |
|--------|--------------|----------------|
| **Blast Radius** | A CVE in code is exposed through a public API | Up to -8 pts |
| **PR Adjacency** | A developer is editing a file with a known vulnerability | Up to -4 pts |
| **Taint Adjacency** | User input flows to a vulnerable function without sanitization | Up to -3 pts |
| **Pentest Verdict** | Dynamic probing confirmed (or cleared) a vulnerability | -5 to +3 pts |
| **MTTR Penalty** | Your team takes too long to fix findings | Up to -10 pts |

These modifiers mean that the same CVE can score very differently depending on context. A CVE in an internal library that's not internet-reachable gets a much lower blast radius than the same CVE in a public API handler with unsanitized input.

### 3. Confidence levels instead of alert fatigue

Every finding carries a confidence level that reflects how verified it is:

- **L0 (0.3x penalty)** -- Scanner-detected only. Might be a false positive.
- **L1 (0.7x penalty)** -- Corroborated by a second signal (import graph reachability, CVSS >= 7.0).
- **L2 (1.0x penalty)** -- Verified by objective evidence (CISA KEV, EPSS >= 0.5, dynamic probe).

An L0 finding contributes 30% of the penalty of an L2 finding. This means your score reflects verified risk, not scanner noise. [Closed-loop verification](/warroom/closed-loop) promotes findings automatically.

### 4. Anti-gaming by design

Common gaming tactics don't work:

| Gaming attempt | What happens |
|----------------|-------------|
| Add 20 empty repos to dilute a bad one | Clean repos lift score by max 15 pts -- the bad repo still dominates |
| Add staging domains to inflate score | Staging can lift score by max 10 pts above worst production domain |
| Scan only the clean repos | Coverage below 50% caps grade at B |
| Fix then re-break to game trends | 30-day smoothing prevents rapid cycling |

### 5. Actionable output, not just dashboards

- **Pulse** ranks findings by blast radius so your team knows what to fix first
- **AutoFix** generates pull requests that patch vulnerabilities automatically
- **CI Gate** blocks deployments that introduce new risks
- **Reports** map findings to compliance frameworks (OWASP, ISO 27001, SOC 2, PCI-DSS) with real scan evidence

## Head-to-Head Comparison

| Capability | Flyto2 | Bitsight | SecurityScorecard | Snyk | SonarQube |
|-----------|--------|----------|-------------------|------|-----------|
| Internal code scanning | 9 categories | -- | -- | SCA + SAST | SAST + quality |
| External attack surface | 22 scanners | Yes | Yes | -- | -- |
| Cross-dim correlation | 5 modifiers | -- | -- | -- | -- |
| Confidence levels | L0/L1/L2 | -- | -- | -- | -- |
| Dynamic verification | Closed-loop | -- | -- | -- | -- |
| Unified score | 250-900, A-F | 250-900, A-F | 0-100, A-F | -- | A-E |
| AutoFix PRs | 3 tiers | -- | -- | 1 tier | -- |
| CI gate | Yes | -- | -- | Yes | Yes |
| Compliance reports | 4 frameworks | Yes | Yes | -- | -- |
| PR decoration | Yes | -- | -- | Yes | Yes |
| Anti-gaming measures | 6 safeguards | Unknown | Unknown | -- | -- |
| Time decay | 30d+ aging | Yes | Yes | -- | -- |
| Grade caps | 3 conditions | Unknown | Unknown | -- | -- |

## The Bottom Line

Bitsight tells you how your perimeter looks from outside. Snyk tells you what's broken inside your code. Neither tells you which internal vulnerability is actually exploitable through your external attack surface, or whether someone is about to make it worse in an open PR.

Flyto2 Warroom is the only platform that connects both sides into a single, evidence-based score with cross-dimensional correlation. Your team fixes the things that actually matter, in the right order.

## Next Steps

- [Getting Started](/warroom/getting-started) -- See your first score in 5 minutes
- [Scoring Methodology](/warroom/scoring-methodology) -- Full technical details on how scores are computed
- [Product Tour](/warroom/product-tour) -- Visual walkthrough of every feature
