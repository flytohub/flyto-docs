# Pulse -- Cross-Dimensional Feed

Your backlog has 300 findings. Which one do you fix first?

Pulse answers that question. It correlates findings from code scanning, external discovery, threat intelligence, git activity, and pentest results into a single ranked feed. Each item gets a deterministic blast radius score (0-100) so your team works on the highest-impact issues first.

![Pulse Feed](/warroom/04-pulse-feed.png)

## Overview

Pulse aggregates signals from across your security stack into a unified feed. Each pulse item combines evidence from multiple dimensions, anchors it to specific files, and assigns a deterministic blast radius score.

## 6 Input Dimensions

Pulse ingests data from six distinct dimensions:

| Dimension | Source | Examples |
|-----------|--------|----------|
| **Code Vulnerabilities** | flyto-indexer scans | CVEs, SAST findings, secrets, taint flows |
| **External Attack Surface** | Domain discovery | Open ports, exposed services, TLS issues |
| **Threat Intelligence** | Feeds (Shodan, URLhaus, etc.) | IOC matches, breach exposure |
| **Git Activity** | GitHub/GitLab webhooks | Open PRs, recent commits, branch activity |
| **Pentest Results** | Red team campaigns | Confirmed exploits, probe results |
| **Remediation State** | Issue tracking | Fix status, SLA violations, MTTR |

## Blast Radius Scoring

Every pulse item receives a deterministic blast radius score from 0 to 100, computed from weighted components.

### Weight Components

| Component | Weight | Range | Description |
|-----------|--------|-------|-------------|
| **Severity** | 25 | 0-25 | CVSS-based (critical=25, high=20, medium=12, low=5) |
| **Exploitability** | 20 | 0-20 | EPSS-derived probability of exploitation |
| **External Exposure** | 20 | 0-20 | Is the affected asset internet-facing? |
| **Reachability** | 15 | 0-15 | Import graph + taint flow evidence |
| **Active Threat** | 10 | 0-10 | KEV membership, active exploit campaigns |
| **Remediation Lag** | 10 | 0-10 | Time since discovery vs. SLA window |

**Formula:** The score is a deterministic weighted sum (no randomness, no ML). Given the same inputs, the same blast radius is always produced.

```
blast_radius = severity + exploitability + external_exposure
             + reachability + active_threat + remediation_lag
```

Each component is independently computed and capped at its maximum weight. The total is clamped to 0-100.

### Score Interpretation

| Range | Meaning |
|-------|---------|
| 80-100 | Critical blast radius -- immediate action required |
| 60-79 | High blast radius -- prioritize in current sprint |
| 40-59 | Medium blast radius -- schedule remediation |
| 0-39 | Low blast radius -- monitor |

## File Anchoring

Pulse items are anchored to specific files in your repositories when possible:

- CVE findings link to the dependency manifest (e.g., `package.json:15`)
- SAST findings link to the source file and line number
- Taint flows link to both source and sink locations
- Secret findings link to the file containing the exposed credential

File anchoring enables PR matching and provides developers with direct navigation to affected code.

## PR Matching

Pulse correlates findings with open pull requests using two matching strategies:

### File Match

If an open PR modifies a file that is anchored to a pulse item, the item is tagged with the PR. This surfaces vulnerabilities that developers are actively working near.

### Package Match

If an open PR modifies a dependency manifest (e.g., `package.json`, `go.mod`, `requirements.txt`) and a pulse item is linked to a vulnerability in that package, the item is tagged with the PR.

PR-matched items receive a boost in the blast radius score via the **Reachability** component, reflecting that the code is actively being changed.

## Deduplication

Pulse deduplicates findings across dimensions to avoid noise:

- Same CVE found via SCA and threat intelligence is merged into one pulse item
- Multiple scanner detections of the same secret are consolidated
- Overlapping findings from static and dynamic verification are unified
- The highest confidence level and blast radius from merged items is preserved

Deduplication keys are based on finding type + affected component + location.

## AI Summary and Advisor

Each pulse item includes AI-generated content:

### Summary

A concise natural-language description of the finding, its context, and its potential impact. Generated from the combined evidence across all matched dimensions.

### Advisor

Actionable remediation guidance:

- Specific fix steps (e.g., "Upgrade `lodash` from 4.17.20 to 4.17.21")
- Risk context (e.g., "This CVE is on the CISA KEV list and being actively exploited")
- Priority rationale (e.g., "Blast radius 85 because the affected endpoint is internet-facing and the PR #42 is modifying the vulnerable file")

## Related

- [Flyto2 Code](/warroom/flyto-code) -- Source of code vulnerability data
- [Flyto2 Domains](/warroom/flyto-domains) -- Source of external attack surface data
- [Scoring Methodology](/warroom/scoring-methodology) -- How blast radius feeds into cross-dimensional modifiers
- [Closed-Loop Verify](/warroom/closed-loop) -- Verification that promotes confidence levels
