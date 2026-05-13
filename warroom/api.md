# API Reference

Flyto Warroom exposes a RESTful API for all platform features. This page provides an overview of authentication, endpoint groups, SSE events, and webhooks.

## Authentication

### Firebase Authentication

For user-facing applications, Flyto uses Firebase Authentication:

```
Authorization: Bearer <firebase-id-token>
```

Tokens are validated server-side against the Firebase project. The token's `uid` maps to a Flyto user, and org-level permissions are enforced per endpoint.

### API Keys

For CI/CD and machine-to-machine integrations:

```
X-API-Key: <api-key>
```

API keys are scoped to an organization and can be restricted to specific endpoint groups. Keys are created and managed in the Warroom UI under Settings > API Keys.

## Endpoint Groups

### Scanning

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/code/repos/{id}/scan` | Trigger a scan |
| GET | `/api/v1/code/repos/{id}/scans` | List scan history |
| GET | `/api/v1/code/repos/{id}/scans/{scan_id}` | Get scan details |
| POST | `/api/v1/code/repos/{id}/upload` | Upload scan results (CI mode) |
| POST | `/api/v1/code/repos/{id}/ci-gate` | Evaluate CI gate policy |

### Discovery

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/code/pentests` | Create a pentest project |
| GET | `/api/v1/code/pentests/{id}` | Get pentest project details |
| POST | `/api/v1/code/pentests/{id}/discover` | Trigger discovery scan |
| GET | `/api/v1/code/pentests/{id}/findings` | List discovery findings |
| GET | `/api/v1/code/pentests/{id}/assets` | List discovered assets |

### Scoring

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/code/orgs/{id}/computed-score` | Get current org score |
| GET | `/api/v1/code/orgs/{id}/score-events` | Get org grade change history |
| GET | `/api/v1/code/pentests/{id}/computed-score` | Get domain score |
| GET | `/api/v1/code/pentests/{id}/score-events` | Get domain grade change history |
| GET | `/api/v1/code/repos/{id}/score` | Get per-repo score |

### Verify

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/code/findings/{id}/verify` | Trigger closed-loop verification |
| GET | `/api/v1/code/findings/{id}/verify-status` | Get verification status |
| POST | `/api/v1/code/findings/{id}/exclude` | Mark finding as excluded |

### AutoFix

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/code/findings/{id}/autofix` | Generate an AutoFix PR |
| GET | `/api/v1/code/findings/{id}/autofix-status` | Get AutoFix status |
| POST | `/api/v1/code/repos/{id}/fix-plan` | Generate a Fix Plan |
| GET | `/api/v1/code/repos/{id}/fix-plan` | Get current Fix Plan |

### Reports

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/v1/code/orgs/{id}/report` | Generate org security report |
| GET | `/api/v1/code/pentests/{id}/report` | Generate CTEM report |
| GET | `/api/v1/code/campaigns/{id}/report` | Generate red team campaign report |

### Red Team

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/v1/code/campaigns` | Create a red team campaign |
| GET | `/api/v1/code/campaigns/{id}` | Get campaign status |
| POST | `/api/v1/code/campaigns/{id}/pause` | Pause campaign |
| POST | `/api/v1/code/campaigns/{id}/cancel` | Cancel campaign |
| GET | `/api/v1/code/campaigns/{id}/events` | SSE event stream |

## SSE Events (31 Types)

Subscribe to real-time events via Server-Sent Events:

```
GET /api/v1/code/orgs/{id}/events
Accept: text/event-stream
```

### Scan Events

| Event Type | Description |
|------------|-------------|
| `scan.started` | Scan initiated |
| `scan.progress` | Scan progress update (percentage) |
| `scan.completed` | Scan finished successfully |
| `scan.failed` | Scan encountered an error |
| `scan.findings_ready` | Findings are processed and available |

### Discovery Events

| Event Type | Description |
|------------|-------------|
| `discovery.started` | Domain discovery initiated |
| `discovery.progress` | Discovery scanner progress |
| `discovery.completed` | Discovery finished |
| `discovery.failed` | Discovery encountered an error |
| `discovery.findings_ready` | Discovery findings processed |

### Score Events

| Event Type | Description |
|------------|-------------|
| `score.updated` | Score recomputed |
| `score.grade_changed` | Grade boundary crossed |
| `score.cap_applied` | Grade cap triggered |
| `score.cap_lifted` | Grade cap removed |

### Verify Events

| Event Type | Description |
|------------|-------------|
| `verify.dispatched` | Verification task sent to runner |
| `verify.terminal` | Verification completed |
| `verify.confidence_changed` | Finding confidence level changed |

### AutoFix Events

| Event Type | Description |
|------------|-------------|
| `autofix.started` | AutoFix generation initiated |
| `autofix.pr_created` | Pull request created |
| `autofix.failed` | AutoFix generation failed |

### Red Team Events

| Event Type | Description |
|------------|-------------|
| `campaign.created` | Campaign created |
| `campaign.phase_changed` | Campaign phase transition |
| `campaign.completed` | Campaign finished |
| `campaign.cancelled` | Campaign manually cancelled |
| `probe.dispatched` | Probe task dispatched |
| `probe.complete` | Probe returned results |
| `budget.soft_breach` | Campaign soft budget limit reached |
| `budget.hard_breach` | Campaign hard budget limit reached |
| `runner.dispatched` | Runner picked up task |
| `runner.complete` | Runner finished task |
| `runner.error` | Runner encountered error |

## Webhooks (5 Event Types)

Configure webhooks in Settings > Webhooks to receive HTTP POST notifications.

### Event Types

| Event | Trigger |
|-------|---------|
| `grade.changed` | Org or domain grade boundary crossed |
| `scan.completed` | Repository scan finished |
| `discovery.completed` | Domain discovery finished |
| `finding.critical` | New critical-severity finding detected |
| `campaign.completed` | Red team campaign finished |

### HMAC Signing

All webhook payloads are signed with HMAC-SHA256. The signature is included in the `X-Flyto-Signature` header:

```
X-Flyto-Signature: sha256=<hex-encoded-hmac>
```

**Verification:**

```python
import hmac, hashlib

expected = hmac.new(
    webhook_secret.encode(),
    request.body,
    hashlib.sha256
).hexdigest()

signature = request.headers["X-Flyto-Signature"].removeprefix("sha256=")
assert hmac.compare_digest(expected, signature)
```

### Webhook Payload Format

```json
{
  "event": "grade.changed",
  "timestamp": "2025-03-15T10:00:00Z",
  "org_id": "...",
  "data": {
    "previous_grade": "A",
    "new_grade": "B",
    "previous_display_score": 780,
    "new_display_score": 720,
    "reasons": ["Code Security dropped 15 pts"]
  }
}
```

### Retry Policy

Failed webhook deliveries (non-2xx response) are retried with exponential backoff:

- Retry 1: 1 minute
- Retry 2: 5 minutes
- Retry 3: 30 minutes
- After 3 failures: webhook is disabled, admin notified

### Organization Management

| Method | Path | Description |
|--------|------|-------------|
| GET/POST | `/code/orgs` | List/create organizations |
| PATCH/DELETE | `/code/orgs/{id}` | Update/delete org (owner/admin only) |
| GET | `/code/orgs/{id}/members` | List members (synced from GitHub/GitLab) |
| POST | `/code/orgs/{id}/invitations` | Invite member by email (admin only) |
| DELETE | `/code/orgs/{id}/invitations/{invId}` | Revoke pending invitation |
| POST | `/code/orgs/{id}/token` | Store provider OAuth token |
| GET | `/code/orgs/{id}/token/status` | Check token validity |
| GET/PUT | `/code/orgs/{id}/chart` | Org hierarchy visualization data |
| GET/PUT | `/code/orgs/{id}/scan-schedule` | Scan cadence (daily/weekly/manual) |

### GitHub Proxy

Frontend-friendly GitHub API proxy (avoids exposing org token to browser).

| Method | Path | Description |
|--------|------|-------------|
| GET | `/code/orgs/{id}/github/repos/{owner}/{repo}` | Repository metadata |
| GET | `/code/orgs/{id}/github/repos/{owner}/{repo}/pulls` | Open pull requests |
| GET | `/code/orgs/{id}/github/repos/{owner}/{repo}/pulls/{num}/files` | PR changed files |
| GET | `/code/orgs/{id}/github/pr-activity` | Recent PR activity (org-wide) |
| GET | `/code/orgs/{id}/github/members` | GitHub org members |
| GET | `/code/orgs/{id}/github/user-repos` | User's accessible repos |

### Unified Scoring

| Method | Path | Description |
|--------|------|-------------|
| GET | `/code/orgs/{id}/computed-score` | Real-time unified score (smoothed) |
| GET | `/code/orgs/{id}/unified-score-history` | Historical score trend |
| GET | `/code/orgs/{id}/score-events` | Grade change events with reasons |
| GET | `/code/orgs/{id}/benchmark` | Industry peer comparison (percentile) |
| GET | `/code/pentests/{id}/score` | Per-domain security score |
| GET | `/code/pentests/{id}/score-history` | Domain score history |
| GET | `/code/pentests/{id}/score-events` | Domain grade change events |

### Cross-Repo Intelligence

| Method | Path | Description |
|--------|------|-------------|
| GET | `/code/orgs/{id}/arch-map` | Service dependency graph |
| GET | `/code/orgs/{id}/api-definitions` | Extracted REST/GraphQL endpoints |
| GET | `/code/orgs/{id}/dependencies` | Shared package usage across repos |
| GET | `/code/orgs/{id}/dead-code` | Dead code symbols across org |
| GET | `/code/orgs/{id}/taint-flows` | Taint flow summary (sources/sinks) |
| GET | `/code/orgs/{id}/cve-exposure` | CVEs affecting multiple repos |
| GET/POST | `/code/orgs/{id}/asset-mappings` | Domain-to-repo correlation mapping |
| POST | `/code/orgs/{id}/suggest-mappings` | AI-suggested domain-repo mappings |

## Rate Limits

| Scope | Limit |
|-------|-------|
| API key | 100 requests/minute |
| Firebase user | 200 requests/minute |
| SSE connections | 5 per org |
| Webhook destinations | 10 per org |

## Related

- [Flyto Code](/warroom/flyto-code) -- Internal scanning features
- [Flyto Domains](/warroom/flyto-domains) -- External discovery features
- [Red Team](/warroom/red-team) -- Campaign management
- [Integrations](/warroom/integrations) -- CI/CD and SCM integration details
