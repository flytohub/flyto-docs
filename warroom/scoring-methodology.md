# Flyto2 Scoring Methodology

**Version:** 2.0
**Last Updated:** 2026-05-14
**Classification:** Customer-facing (shareable under NDA)

---

## 1. Overview

Your security score should reflect your actual risk, not your scanner's output volume. Most tools see only one dimension -- either your external perimeter or your code -- and neither can tell you which internal vulnerability is actually exploitable from the outside.

Flyto2's scoring system combines internal code scanning, external attack surface monitoring, and operational diligence into a single number. The score penalizes what matters (exploitable, internet-facing, unpatched vulnerabilities) and discounts what doesn't (unreachable code, false positives, internal-only libraries).

![Scoring Breakdown](/warroom/21-scoring-breakdown.png)

Flyto2's security scoring system provides a continuous, evidence-based assessment of an organization's security posture. Scores range from **250 to 900** (industry-standard scale), with letter grades **A through F**.

The system supports three deployment modes:

| Mode | When | What's scored |
|------|------|---------------|
| **Internal** | Repos connected, no domains | Code Security + Diligence |
| **External** | Domains added, no repos | Attack Surface |
| **Combined** | Both repos and domains | All categories + cross-dimensional correlation |

Scores are **not customizable per organization**. All customers are evaluated with the same weights, boundaries, and formulas. This ensures cross-organization comparability and prevents score gaming.

---

## 2. Scoring Architecture

```
                    ┌─────────────────────────┐
                    │     Overall Score        │
                    │   (0-100 raw, 250-900    │
                    │    display, A-F grade)   │
                    └────────────┬────────────┘
                                 │
              ┌──────────────────┼──────────────────┐
              │                  │                   │
     ┌────────▼────────┐ ┌──────▼──────┐ ┌─────────▼────────┐
     │  Code Security   │ │   Attack    │ │    Diligence      │
     │     (40%)        │ │  Surface    │ │     (25%)         │
     │                  │ │   (35%)     │ │                   │
     └────────┬─────────┘ └──────┬──────┘ └─────────┬────────┘
              │                  │                   │
         Sub-vectors        Sub-vectors         Sub-vectors
         (5 items)          (11 items)          (5 items)
              │                  │                   │
              └──────────────────┼───────────────────┘
                                 │
                    ┌────────────▼────────────┐
                    │  Cross-Dim Modifiers     │
                    │  (±15 pts max)           │
                    │  Blast radius, MTTR,     │
                    │  PR adjacency, Taint,    │
                    │  Pentest verdict         │
                    └────────────┬────────────┘
                                 │
                    ┌────────────▼────────────┐
                    │  Grade Caps              │
                    │  Critical CVE → max B    │
                    │  Coverage <50% → max B   │
                    │  MTTR >14d → max B       │
                    └────────────┬────────────┘
                                 │
                    ┌────────────▼────────────┐
                    │  30-Day Smoothing        │
                    │  (±15 pts per 30 days)   │
                    └─────────────────────────┘
```

---

## 3. Categories & Weights

### 3.1 Code Security (40%)

Measures the severity and volume of known vulnerabilities in connected repositories.

| Sub-vector | Weight | Data Source | Evidence Level |
|------------|--------|-------------|----------------|
| CVE Findings | 45% | NVD, OSV, GHSA | High — public database |
| Exposed Secrets | 25% | Regex + known format detection | Medium — needs verification |
| Taint Flows | 15% | AST-based source→sink analysis | Medium — static analysis |
| Code Findings (SAST) | 10% | Pattern-based static analysis | Medium |
| Malware | 5% | Trivy container scanning | High — binary detection |

**Aggregation method:** Worst-weighted. The worst repository's score gets 60% weight; remaining repositories share 40%. This prevents clean repositories from masking a severely compromised one.

**Penalty formula (per repo):**
- Critical CVE: -15 per CVE
- High CVE: -8 per CVE
- Medium/Low CVE: -2 per CVE
- Secret: -30 for first, -15 for each additional
- Base: 100 (no findings = perfect score)

### 3.2 Attack Surface (35%)

Measures the external security posture of connected domains, using the same formula for both per-domain detail views and the org-level dashboard (single source of truth via `ComputeDomainScore`).

| Sub-vector | Weight | Data Source | Evidence Level |
|------------|--------|-------------|----------------|
| TLS/SSL | 15% | Direct TLS handshake | High — reproducible |
| Web Headers | 12% | HTTP header inspection | High — reproducible |
| DNS Security | 10% | DNS query (DNSSEC, CAA, AXFR) | High — reproducible |
| Open Ports | 10% | TCP connect scan + Shodan | High — reproducible |
| Sensitive Files | 9% | HTTP probe (.git, .env, etc.) | High — reproducible |
| API Security | 8% | OpenAPI/GraphQL endpoint detection | Medium |
| Email Security | 9% | SPF/DKIM/DMARC/MX records | High — reproducible |
| Breach Exposure | 8% | HIBP + threat feeds | Medium — third-party data |
| Threat Intelligence | 7% | URLhaus, Feodo, ThreatFox, Shodan | Medium — third-party data |
| IP Intelligence | 7% | Shodan InternetDB | Medium — third-party data |
| WAF Detection | 5% | Header + behavioral fingerprinting | Medium |

**Sub-vector weights sum to exactly 1.00** (verified by automated tests).

**Aggregation method:** Production-floor. The worst production domain sets the score floor. Non-production domains (staging, development) can lift the score by at most 10% of the gap, capped at 10 points. This prevents staging environments from inflating the score.

### 3.3 Diligence (25%)

Measures how actively the organization manages its security program.

| Sub-vector | Weight | Data Source | Evidence Level |
|------------|--------|-------------|----------------|
| Scan Coverage | 40% | Scanned repos / total repos | High — binary fact |
| Licenses | 15% | Dependency license detection | High — deterministic |
| Triage | 15% | Resolved alerts / total alerts | High — measurable |
| Supply Chain | 15% | Vendor risk assessment | Medium |
| Remediation Speed | 15% | MTTR from git commit history | High — objective |

**Coverage scoring:** Steeper penalty below 50%. Scanning 10% of repos scores 2/100 (quadratic); scanning 80%+ scores near 100.

### 3.4 Code Quality (Context-only, 0%)

Code quality data (complexity, dead code, duplicates) is collected and displayed in drill-down views, but **does not affect the grade**. Rationale: code complexity is subjective and not directly correlated with breach risk. Including it in scoring would allow refactoring to inflate grades without reducing actual vulnerability exposure.

---

## 4. Grade Boundaries

| Grade | Raw Score | Display Score | Meaning |
|-------|-----------|---------------|---------|
| **A** | 76-100 | 740-900 | Strong security posture |
| **B** | 60-75 | 640-730 | Acceptable with improvements needed |
| **C** | 39-59 | 500-630 | Significant concerns |
| **D** | 20-38 | 380-490 | Serious deficiencies |
| **F** | 0-19 | 250-370 | Critical state |

**Display score formula:** `floor((250 + raw * 6.5) / 10) * 10`

This produces a 250-900 scale compatible with industry-standard security rating systems. The formula is monotonic (higher raw = higher display, always) and rounds to the nearest 10.

---

## 5. Confidence System (L0 / L1 / L2)

Every finding carries a confidence level that multiplies its penalty:

| Level | Multiplier | Meaning | Example |
|-------|-----------|---------|---------|
| **L0** | 0.3x | Scanner-detected only | Regex-matched potential secret |
| **L1** | 0.7x | Corroborated by second signal | CVE in imported package + reachability confirmed |
| **L2** | 1.0x | Verified by objective evidence | CISA KEV list, EPSS >0.5, manual verification |

**Impact:** An L0 finding has 30% of the penalty of an L2 finding. This reduces the impact of false positives without ignoring them entirely.

**Promotion criteria:**
- L0 → L1: Package is in import graph (reachability), or CVE has CVSS ≥7.0
- L1 → L2: On CISA KEV list, EPSS ≥0.5, or manually verified via dynamic probe
- Any → Excluded: Verified unreachable (confidence ≥70%), or marked false positive

---

## 6. Risk Formula (Per-Finding)

Each finding's risk score (0-10) is computed as:

```
risk = severity × exploitability × reachability × impact × confidence × 10

Where:
  severity      = CVSS/10 (or midpoint: critical=0.95, high=0.795, medium=0.545, low=0.20)
  exploitability = EPSS-based (KEV=max(EPSS,0.9), else=sqrt(EPSS), no data=0.3)
  reachability   = confirmed=1.0, unknown=0.5, unreachable=0.1
  impact         = critical=1.0, high=0.8, medium=0.6, low=0.3
  confidence     = L2=1.0, L1=0.7, L0=0.3
```

**Time decay:** Findings older than 30 days receive an increasing risk multiplier, up to 2x at 180+ days. This incentivizes timely remediation.

**Upper bound:** Risk scores are capped at 10.0 to prevent factor misconfiguration from producing invalid values.

---

## 7. Cross-Dimensional Modifiers

Cross-dimensional modifiers adjust the overall score based on signals that span multiple categories:

| Modifier | Range | Signal |
|----------|-------|--------|
| Blast Radius | -1 to -8 | Average blast radius across domains (correlate engine) |
| PR Adjacency | -1 to -4 | Open PRs touching security-critical files (deduplicated) |
| Taint Adjacency | -1 to -3 | Repos with unsanitized source→sink flows |
| Pentest Verdict | -5 to +3 | Critical pentest findings (-5) or clean pentest (+3) |
| MTTR Penalty | -2 to -10 | Org-wide mean time to remediate (>3d to >30d) |
| AutoFix Bonus | 0 | Reserved for future use |

**Total modifier is capped at -15** to prevent extreme combinations from overwhelming category scores.

---

## 8. Grade Caps (Hard Floors)

Grade caps enforce non-negotiable security standards. They override both category scores and smoothing:

| Condition | Cap | Rationale |
|-----------|-----|-----------|
| **Unpatched critical CVE** | Max B (≤75) | A critical vulnerability is an active risk regardless of other controls |
| **Scan coverage <50%** | Max B (≤75) | You cannot claim good security posture while ignoring half your codebase |
| **MTTR >14 days** | Max B (≤75) | Slow remediation indicates systemic process failure |

**Grade caps are applied AFTER smoothing** — they always take priority. If a critical CVE appears, the score drops to 75 immediately, even if smoothing would have kept it higher.

---

## 9. Score Smoothing (30-Day Rolling Window)

Scores change gradually over a 30-day rolling window, consistent with industry practice:

| Time Since Last Score | Maximum Change |
|----------------------|----------------|
| 1 hour | ±0 pts (effectively frozen) |
| 1 day | ±0.5 pts |
| 7 days | ±3.5 pts |
| 15 days | ±7.5 pts |
| 30 days | ±15 pts |
| >30 days | ±15 pts (no accumulation) |

**Why smoothing exists:**
- Prevents "my score dropped 20 points overnight" panic
- Prevents gaming by fixing-then-breaking repeatedly
- Produces interpretable trends for executive reporting
- Aligns with industry-standard rating platform behavior

**What is NOT smoothed:**
- Grade caps (applied after smoothing, always take effect immediately)
- The real-time `/computed-score` endpoint (returns the current computed score WITH smoothing applied)
- Per-finding risk scores (only the overall org score is smoothed)

**Important:** Both the live API endpoint and the background worker use identical smoothing logic, ensuring the dashboard gauge and the trend chart always agree.

---

## 10. Anti-Gaming Measures

The scoring system includes multiple safeguards against score inflation:

| Gaming Attempt | Prevention |
|----------------|------------|
| Add empty repos to dilute bad repo | Capped-lift: clean repos can only raise score by 15% of gap, max 15 pts |
| Add non-scorable repos | IsScorable filter: trivial repos (static, no deps) are excluded |
| Add good staging domains | Production-floor: staging can only add max 10 pts above worst production |
| Add unscanned domains | Pending filter: domains without discovery data are excluded |
| Low scan coverage + clean scanned repos | Coverage cap: <50% coverage → max B |
| Fix then re-break | 30-day smoothing prevents rapid cycling |

### Verified by automated tests:

| Scenario | Before Gaming | After Gaming | Score Inflation |
|----------|---------------|--------------|-----------------|
| Bad repo + 20 empty repos | 46 (C) | 54 (C) | +8, grade unchanged |
| Bad repo + 50 non-scorable repos | 52 (C) | 52 (C) | 0 |
| Bad domain + 10 good staging | 44 (C) | 48 (C) | +4, grade unchanged |
| Bad domain + 20 unscanned | 52 (C) | 52 (C) | 0 |

---

## 11. Scoring Cadence

| Trigger | Latency | Smoothing Applied? |
|---------|---------|-------------------|
| Scan complete (SSE event) | Real-time | Yes (via PreviousRaw) |
| Discovery complete (SSE event) | Real-time | Yes |
| Issue status change (snooze/resolve) | Real-time | Yes |
| Daily background recomputation | Every 24h | Yes |
| Time decay (aging findings) | Daily | Yes |

The background worker runs at a default interval of 24 hours (`FLYTO_UNIFIED_SCORE_INTERVAL`). This is primarily for time-decay updates. Real-time scoring occurs on every scan/discovery completion via SSE-driven API calls.

---

## 12. Score Events & Trend Tracking

The system tracks grade transitions over time:

```
2025-02-12  A → B  (82 → 72)
  Reasons:
  - Code Security dropped 15 pts (new critical CVEs in 'backend' repo)
  - Grade capped: critical CVE detected

2025-03-01  B → A  (72 → 78)
  Reasons:
  - Code Security improved 20 pts (CVEs patched)
  - Grade cap lifted: no critical CVEs remaining
```

**Reason detection:** The system compares consecutive score snapshots and flags categories that changed by more than 10 points. Grade cap triggers are explicitly annotated.

**Available via API:**
- `GET /api/v1/code/orgs/{id}/score-events?days=90` — org-level grade changes
- `GET /api/v1/code/pentests/{id}/score-events?days=90` — per-domain CTEM grade changes

---

## 13. Data Sources & Evidence Levels

| Data Source | Type | Update Frequency | Evidence Level |
|-------------|------|-------------------|----------------|
| NVD / OSV | CVE database | Continuous (enriched every 10m) | High |
| CISA KEV | Known exploited vulnerabilities | Daily | High |
| EPSS | Exploit probability scores | Daily | High |
| GHSA | GitHub Security Advisories | On scan | High |
| Trivy | Container CVE scanning | On scan | High |
| flyto-indexer | AST-based code analysis | On scan | Medium-High |
| Shodan InternetDB | IP/port intelligence | Hourly (threat feed) | Medium |
| HIBP | Breach exposure | On discovery | Medium |
| URLhaus / Feodo / ThreatFox | IOC feeds | Hourly (threat feed) | Medium |
| VirusTotal | URL/domain reputation | On discovery (optional) | Medium |

---

## 14. What We Do NOT Score

| Signal | Reason for Exclusion |
|--------|---------------------|
| Code complexity / dead code | Subjective; not correlated with breach risk |
| Code style / formatting | No security relevance |
| Test coverage percentage | Valuable but not a security metric |
| Number of contributors | Team size doesn't indicate security posture |
| Repository age | Old repos can be well-maintained |
| Programming language | Language choice is not a vulnerability |

---

## 15. Scoring Version

Every computed score includes a `scoring_version` field (currently `"2.0"`). When the scoring algorithm changes materially, the version is incremented. This allows:

- Historical comparison: "Was the improvement real or algorithmic?"
- Audit trail: "Which formula produced this score?"
- Migration: "Recompute historical scores under the new formula for fair comparison"

---

## 16. Industry Compatibility

Flyto2's scoring system is designed to be compatible with industry-standard rating scales:

- **250-900 scale** -- Same range used by major security rating platforms, making scores directly comparable in vendor risk assessments and board reporting
- **A-F grade system** -- Universal letter grades that map to clear thresholds
- **30-day smoothing** -- Consistent with industry practice for trend stability
- **Time decay** -- Aging penalties follow the same principle used across the industry

**What Flyto2 adds on top of this foundation:** confidence levels (L0/L1/L2) that reduce false positive noise, cross-dimensional correlation that connects internal and external risk, and grade caps that enforce non-negotiable security standards.

---

## Appendix A: Display Score Conversion Table

| Raw | Display | Grade |
|-----|---------|-------|
| 100 | 900 | A |
| 90 | 830 | A |
| 80 | 770 | A |
| 76 | 740 | A |
| 75 | 730 | B |
| 70 | 700 | B |
| 60 | 640 | B |
| 59 | 630 | C |
| 50 | 570 | C |
| 39 | 500 | C |
| 38 | 490 | D |
| 30 | 440 | D |
| 20 | 380 | D |
| 19 | 370 | F |
| 10 | 310 | F |
| 0 | 250 | F |

---

## Appendix B: SLA Windows (Default)

| Severity | Default SLA | Configurable? |
|----------|-------------|---------------|
| Critical | 24 hours | Yes (per-org) |
| High | 72 hours (3 days) | Yes (per-org) |
| Medium | 336 hours (14 days) | Yes (per-org) |
| Low | 720 hours (30 days) | Yes (per-org) |

SLA windows are the only scoring parameter that organizations can customize. They affect SLA violation tracking and the MTTR modifier, but do NOT change the scoring formula itself.

---

*This document describes the scoring methodology as implemented in Flyto2 Engine v2.0. For questions or audit requests, contact security@flyto2.com.*
