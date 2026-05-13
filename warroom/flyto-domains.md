# Flyto Domains -- External Security (CTEM)

Flyto Domains provides continuous threat exposure management (CTEM) for your organization's external attack surface. Add your domains and Flyto discovers, monitors, and scores your external security posture.

## Discovery (22 Scanner Types)

When you add a domain, Flyto runs a comprehensive discovery pipeline with 22 specialized scanners:

| # | Scanner | What It Detects |
|---|---------|-----------------|
| 1 | **TLS/SSL** | Certificate validity, chain, protocol versions, cipher strength |
| 2 | **DNS Records** | A, AAAA, MX, NS, TXT, CNAME resolution |
| 3 | **DNSSEC** | DNSSEC signing status and validation |
| 4 | **CAA** | Certificate Authority Authorization records |
| 5 | **SPF** | Sender Policy Framework configuration |
| 6 | **DKIM** | DomainKeys Identified Mail selectors |
| 7 | **DMARC** | Domain-based Message Authentication policy |
| 8 | **Web Headers** | HSTS, CSP, X-Frame-Options, X-Content-Type-Options, Referrer-Policy |
| 9 | **Open Ports** | TCP connect scan on common service ports |
| 10 | **Sensitive Files** | Exposed `.git`, `.env`, `wp-config.php`, backup files |
| 11 | **Subdomain Enumeration** | Certificate transparency logs, DNS brute-force |
| 12 | **Subdomain Takeover** | Dangling CNAME detection for known providers |
| 13 | **WAF Detection** | Web Application Firewall fingerprinting |
| 14 | **Technology Detection** | Server, framework, CMS identification |
| 15 | **API Endpoints** | OpenAPI/GraphQL endpoint discovery |
| 16 | **Breach Exposure** | HIBP breach database lookup for domain emails |
| 17 | **Credential Leaks** | Leaked credential monitoring from threat feeds |
| 18 | **Shodan InternetDB** | IP intelligence, open ports, known vulnerabilities |
| 19 | **URLhaus** | Malicious URL hosting detection |
| 20 | **Feodo Tracker** | Command-and-control server detection |
| 21 | **ThreatFox** | IOC (Indicators of Compromise) matching |
| 22 | **Brand Impersonation** | Lookalike domain and phishing detection |

Discovery results are stored as structured findings and feed into the [scoring engine](/warroom/scoring-methodology).

## Pentest Projects

Flyto supports four types of automated penetration testing projects:

| Type | Target | Method |
|------|--------|--------|
| **rest_api** | REST API endpoints | Authenticated fuzzing, injection testing, auth bypass |
| **graphql** | GraphQL endpoints | Introspection abuse, query injection, depth attacks |
| **frontend** | Web applications | XSS, CSRF, clickjacking, DOM-based attacks |
| **attack_surface** | Full domain surface | Combined scanner output + targeted exploitation |

Pentest projects are managed through the [Red Team](/warroom/red-team) pipeline which orchestrates the 5-phase state machine.

### Creating a Pentest Project

```
POST /api/v1/code/pentests
{
  "org_id": "...",
  "domain": "example.com",
  "type": "rest_api",
  "target_url": "https://api.example.com"
}
```

Each pentest project has its own score history and [score events](/warroom/score-events).

## Attack Surface Asset Management

The validation workflow for discovered assets:

1. **Auto-Discovery** -- Scanners enumerate subdomains, IPs, and services
2. **Pending Review** -- New assets appear in a pending queue
3. **Validation** -- Operator confirms ownership (DNS TXT record or HTTP file)
4. **Active Monitoring** -- Validated assets enter continuous monitoring
5. **Archival** -- Decommissioned assets can be archived (excluded from scoring)

Assets are classified by environment:

| Environment | Scoring Impact |
|-------------|---------------|
| **Production** | Sets the score floor (worst production domain drives the score) |
| **Staging** | Can lift score by max 10 points above worst production |
| **Development** | Can lift score by max 10 points above worst production |

## External Posture

The external posture dashboard provides:

### Score Trends

- Historical score chart with 30/60/90-day views
- Grade transition timeline with annotated reasons
- Per-category breakdown (TLS, DNS, Headers, Ports, etc.)

### SLA Tracking

Default SLA windows by severity:

| Severity | Default SLA |
|----------|-------------|
| Critical | 24 hours |
| High | 72 hours |
| Medium | 14 days |
| Low | 30 days |

SLA violations feed into the MTTR modifier in [scoring](/warroom/scoring-methodology).

### MTTR (Mean Time to Remediate)

- Computed from discovery-to-resolution timestamps
- Org-wide MTTR > 14 days triggers a grade cap at B
- MTTR trends are tracked over time for improvement measurement

### Action Plan

Prioritized list of remediation actions ranked by scoring impact:

- Each action shows the estimated point improvement
- Actions are grouped by domain and category
- Completed actions are tracked for audit trail

## Continuous Monitoring

After initial discovery, Flyto continuously monitors domains:

- **Hourly** -- Threat intelligence feeds (Shodan, URLhaus, Feodo, ThreatFox)
- **Daily** -- TLS certificate expiry check, DNS record changes
- **Weekly** -- Full re-discovery scan
- **On Change** -- SSE events trigger re-scoring when findings change

Score changes from monitoring feed into the [Score Events](/warroom/score-events) system.

## Brand Impersonation Detection

Flyto monitors for brand impersonation threats:

- **Lookalike domains** -- Detects domains visually similar to yours (typosquatting, homoglyph)
- **Phishing pages** -- Identifies pages mimicking your login or brand assets
- **Certificate monitoring** -- Alerts when certificates are issued for similar domain names

Findings from brand impersonation are flagged in the threat intelligence category and affect the Attack Surface score.

## Scoring

Attack Surface contributes **35%** of the unified score. See [Scoring Methodology](/warroom/scoring-methodology) for the full breakdown of 11 sub-vectors and their weights.
