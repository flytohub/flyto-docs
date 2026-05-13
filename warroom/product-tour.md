# Product Tour

A visual walkthrough of Flyto2 Warroom's key features.

## Getting Started

### Project Selection

Choose your project type when creating a new war room. Each type activates a different set of scanners and views.

![Projects Home](/warroom/01-projects-home.png)

Three project types are available:

- **Code Audit** -- Connect repositories for vulnerability scanning, dead code analysis, and dependency review
- **Black-box Pentest** -- Test live websites and APIs without source code access
- **Attack Surface** -- Discover domains, subdomains, exposed services, and SSL issues

![New Project](/warroom/02-new-project.png)

### Onboarding

Connect your source control provider to import repositories. GitHub, GitLab, and Bitbucket are supported.

![Connect Provider](/warroom/03-onboarding-connect.png)

The onboarding flow detects your repositories automatically and shows what Warroom will analyze: security vulnerabilities, secrets, dead code, complexity, dependency risks, and attack surface.

---

## Pulse -- Priority Feed

The Pulse view answers one question: **what should I act on right now?**

![Pulse Feed](/warroom/04-pulse-feed.png)

Pulse ranks findings across all dimensions by urgency. Each item shows:

- Severity level and finding type (SAST, CVE, secret, IaC)
- Which repository and file is affected
- AI-generated recommendations and action items
- Whether an AutoFix is available

The AI Recommendations panel provides context-aware advice based on the current state of your organization.

---

## Issues

All security findings in one filterable view. Supports tabs for open, snoozed, ignored, and solved issues.

![Issues List](/warroom/05-issues-list.png)

Each finding shows severity, affected package, source advisory (OSV/GHSA), and repository. Filter by severity, type, or repository to focus your triage.

---

## AutoFix

AI-powered remediation that generates pull requests automatically.

![AutoFix](/warroom/06-autofix.png)

AutoFix organizes fixable findings by category:

| Tab | What it fixes |
|-----|---------------|
| **Dependencies** | CVE version bumps for vulnerable packages |
| **SAST** | Code-level fixes for taint flow and injection issues |
| **IaC** | Infrastructure misconfiguration corrections |
| **Pentest** | Remediation for dynamic testing findings |
| **Containers** | Base image updates for OS-package CVEs |

Each finding shows a confidence level (High/Medium) and a "View Fix" action that generates the PR.

---

## Repositories

Manage connected repositories with health scores, CI status, and scan actions.

![Repositories](/warroom/07-repositories.png)

The repository list shows:
- Repository name and owner
- Primary language
- Health grade (A-F)
- CI gate status (pass/fail)
- Last scan timestamp

### Repository Detail

Drill into any repository for a complete security profile.

![Repository Detail](/warroom/08-repo-detail.png)

The detail view includes:
- **Grade gauge** with numeric score (250-900 scale)
- **Key metrics**: files, APIs, models, dependencies, issues
- **Recommended Actions**: prioritized list of what to fix first
- **Health dimensions**: Security, Complexity, Dead Code progress bars
- **Risk indicators**: secrets detected, data flow risks, documentation coverage

Tabs for Overview, Security findings, and AI Fix Plan provide different perspectives on the same repository.

---

## Architecture Intelligence

### Organization Overview

Cross-repo health analysis with AI-powered insights.

![Architecture Overview](/warroom/09-architecture-overview.png)

The architecture view aggregates data across all repositories:
- Total repos, files, dead code symbols, complex functions
- Secrets and taint flows detected across the organization
- API endpoint count and worst-performing repository
- Language distribution breakdown

### Repository Breakdown

Per-repo drill-down with framework detection and dead code listing.

![Repository Breakdown](/warroom/10-repo-breakdown.png)

Each repository card shows its score, project type, file count, complex functions, dead code, APIs, secrets, and taint flows. Framework tags (react, tanstack_query, Firebase, Playwright, etc.) are auto-detected.

### Dead Code Detection

Find unreferenced symbols across all repositories.

![Dead Code](/warroom/11-dead-code.png)

Each entry shows the symbol name, type (function/class/component/composable), file path, and repository. Search and filter by repo or symbol type. Use "Copy visible" to export for cleanup sprints.

### Duplicate Code

Identify repeated code blocks that should be extracted into shared utilities.

![Duplicate Code](/warroom/12-duplicate-code.png)

### Complexity Hotspots

Rank repositories by function complexity to identify refactoring priorities.

![Complexity](/warroom/13-complexity.png)

Shows complex function count, maximum complexity score, average complexity, and per-repo health grade.

### Frameworks & Version Drift

Track framework usage across repos and detect version inconsistencies.

![Frameworks](/warroom/14-frameworks.png)

Highlights shared frameworks (used in 2+ repos), version drift warnings, and total framework count. Helps standardize technology choices across the organization.

### API Route Tree

Visualize all API endpoints discovered across repositories.

![API Routes](/warroom/15-api-routes.png)

Shows 1,213 routes across 3 repos, organized by HTTP method (GET/POST/DELETE/PUT/PATCH). Expand each route to see sub-paths and endpoint details.

---

## Security Scanning

### Security Action Queue

Prioritized queue of findings that need attention across all repositories.

![Security Queue](/warroom/16-security-queue.png)

### IaC Scanning

Terraform, CloudFormation, and Kubernetes misconfiguration detection.

![IaC Scanning](/warroom/17-iac-scanning.png)

Detects issues like hardcoded secrets in Dockerfiles, missing HEALTHCHECK directives, and services without memory limits. Each finding shows the file, line number, resource type, severity, and framework.

### License Compliance

Identify non-permissive licenses in your dependency tree.

![License Compliance](/warroom/18-license-compliance.png)

Flags packages with MPL, GPL, AGPL, and other restrictive licenses. Shows the specific license, risk level, and reason for flagging.

### Malicious Dependencies

Detect known malicious packages in your dependency tree.

![Malware Detection](/warroom/19-malware-detection.png)

Cross-references dependencies against advisory databases (OSV, GHSA) for known supply chain attacks.

### Taint Analysis

Track data flow from untrusted sources to security-sensitive sinks.

![Taint Analysis](/warroom/20-taint-analysis.png)

Shows source-to-sink flow paths with:
- Per-repo source and sink counts
- Unsanitized flow count (red indicators)
- Flow categories: XSS, SQL Injection, RCE, Path Traversal, ReDoS
- File-level drill-down with exact line numbers

---

## Scoring

Unified security rating across all dimensions.

![Scoring Breakdown](/warroom/21-scoring-breakdown.png)

The scoring overview shows:
- Overall grade with category breakdown (Code Security, Attack Surface, Diligence)
- Per-sub-vector scores (CVE Findings, Exposed Secrets, Taint Flows, etc.)
- Risk vector breakdown with numeric values
- Grade distribution chart (250-900 scale)

See [Scoring Methodology](/warroom/scoring-methodology) for full details on how scores are computed.

---

## External Security (CTEM)

### Domain Security

Comprehensive external security assessment for each domain.

![Domain Security](/warroom/23-domain-security.png)

The domain detail view provides:
- **Score gauges**: Issues, SSL days remaining, Headers compliance, Email security, Ports, WAF status, Sensitive files
- **Security tab**: TLS/SSL checks, Security Headers (HSTS, CSP, X-Frame-Options), Email security (SPF, DKIM, DMARC, DNSSEC, CAA), Cookie security, CORS policy
- **Pass/Fail indicators** for each individual check

### PageSpeed & Performance

Google Lighthouse integration for performance, accessibility, best practices, and SEO scoring.

![Domain PageSpeed](/warroom/24-domain-pagespeed.png)

### AI Security Score

AI-powered deterministic scoring with per-category grades and weights.

![Domain AI Score](/warroom/25-domain-ai-score.png)

Shows:
- Overall score (e.g., C 45/100)
- Per-category grades: TLS/SSL Security (A), DNS Security (D), Web Application Headers (F), Network Security (C), API Security (F), Software & Patching (A)
- Weight distribution for transparent scoring
- Individual check pass/fail with issue counts

### Asset Map

Complete external posture overview with domain-to-repository mapping.

![Asset Map](/warroom/26-asset-map.png)

The Asset Map shows:
- **External Posture summary**: Network, SSL/TLS, DNS Security, Protection, Tech & API, Performance metrics
- **Mapping Coverage**: how many domains are linked to internal repositories
- **Unmapped Domains**: domains that need to be correlated with repos for full visibility
- **AI Suggest**: automated domain-to-repository mapping recommendations

---

## Reports & Compliance

### Report Templates

Pre-built and custom report templates for security, compliance, and open source.

![Reports OWASP](/warroom/27-reports-owasp.png)

Available report categories:
- **Security**: Security Audit Report, Trend Over Time, Vulnerability Assessment
- **CTEM**: External posture reports
- **Compliance**: OWASP Top 10, ISO 27001:2022, SOC 2, Multi-Framework
- **Open Source**: Licenses & SBOM, CVE Database
- **Advanced**: CI Scan History
- **Custom**: Build your own reports with the visual editor

Reports include severity distribution charts, taint category treemaps, blast-by-severity radar charts, and detailed finding tables. Export to PDF with one click.

### Report Builder

Visual report builder for creating custom reports with drag-and-drop data sources.

![Report Builder](/warroom/28-reports-builder.png)

### Compliance Framework Evaluation

Detailed control-level assessment against industry standards.

![Compliance Table](/warroom/29-compliance-table.png)

Each framework (PCI-DSS, OWASP Top 10, GDPR) is evaluated control-by-control with:
- **Status**: pass / fail / partial
- **Details**: specific findings that affect each control
- Evidence from actual scan results, not self-assessments
