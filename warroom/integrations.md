# Integrations

Flyto Warroom integrates with source control, CI/CD systems, container scanners, and threat intelligence feeds.

## GitHub

### OAuth Integration

Flyto connects to GitHub via OAuth App authorization:

- Users authorize Flyto to access their GitHub account
- Flyto requests `repo` and `read:org` scopes
- Repositories and organizations are synced after authorization

### Org Proxy

For organizations that require centralized control:

- An org admin authorizes Flyto once for the entire organization
- Individual developers do not need to separately authorize
- Repo access is governed by the org-level GitHub App installation
- Permissions are scoped to the repositories selected during installation

### PR Decoration

Flyto posts scan results directly on pull requests:

- **Check Run** -- Creates a GitHub Check with pass/fail status based on [CI Gate](/warroom/flyto-code#ci-gate) policy
- **PR Comment** -- Posts a summary comment with finding counts, severity breakdown, and score impact
- **Review Comments** -- Annotates specific lines in the PR diff where findings are detected (secrets, SAST findings)

PR decoration is triggered by the `pull_request` webhook event and runs automatically for connected repositories.

## GitLab

### PKCE OAuth

Flyto connects to GitLab using OAuth 2.0 with PKCE (Proof Key for Code Exchange):

- Supports both GitLab.com and self-managed GitLab instances
- PKCE flow ensures secure authorization without exposing client secrets
- Requested scopes: `read_api`, `read_repository`, `read_user`

### Features

GitLab integration supports the same features as GitHub:

- Repository scanning (webhook-triggered and scheduled)
- Merge request decoration (comments and pipeline status)
- CI/CD scan upload via API

## Trivy (Container Scanning)

Flyto uses Trivy for container vulnerability scanning:

- Scans Docker images for OS-package CVEs
- Integrates with flyto-indexer's container scanning category
- Results are normalized into the standard finding format
- Container findings contribute to the Code Security score

### Usage

Trivy scanning is triggered when:

- A Dockerfile is detected in the repository
- A container image reference is configured for the repository
- The scan includes the `container` category

## Threat Feeds (5 Sources)

Flyto ingests threat intelligence from five external sources:

| Source | Data Type | Update Frequency |
|--------|-----------|-----------------|
| **Shodan InternetDB** | IP/port intelligence, known CVEs | Hourly |
| **URLhaus** | Malicious URL hosting | Hourly |
| **Feodo Tracker** | C2 server indicators | Hourly |
| **ThreatFox** | IOC (Indicators of Compromise) | Hourly |
| **HIBP** | Breach exposure for domain emails | On discovery |

Threat feed data is correlated with discovered domains and contributes to the Attack Surface score via the Threat Intelligence and Breach Exposure sub-vectors.

### Feed Processing

1. Feeds are fetched on schedule by a background worker
2. New indicators are matched against active domains
3. Matches generate findings in the discovery pipeline
4. Findings trigger score recomputation via SSE events

## CI/CD Integration

### Scan Upload

For CI pipelines that run flyto-indexer locally:

```yaml
# GitHub Actions example
- name: Flyto Scan
  run: |
    flyto-index scan .
    flyto-index export . --output flyto-results.json

- name: Upload Results
  run: |
    curl -X POST \
      -H "X-API-Key: ${{ secrets.FLYTO_API_KEY }}" \
      -H "Content-Type: application/json" \
      -d @flyto-results.json \
      https://api.flyto2.com/api/v1/code/repos/$REPO_ID/upload
```

### CI Gate

Evaluate scan results against a policy and fail the build if violations are found:

```yaml
- name: CI Gate
  run: |
    RESULT=$(curl -s -X POST \
      -H "X-API-Key: ${{ secrets.FLYTO_API_KEY }}" \
      https://api.flyto2.com/api/v1/code/repos/$REPO_ID/ci-gate)
    
    if echo "$RESULT" | jq -e '.pass == false' > /dev/null; then
      echo "CI Gate failed:"
      echo "$RESULT" | jq '.violations'
      exit 1
    fi
```

### Three Trigger Types

| Trigger | Integration | When |
|---------|-------------|------|
| **Webhook** | GitHub/GitLab webhook | On push or PR event |
| **Upload** | CI pipeline posts results | After local scan completes |
| **API** | Direct API call | On-demand from any system |

## MCP (flyto-indexer)

The flyto-indexer exposes an MCP (Model Context Protocol) server that AI agents can use to query code intelligence:

- **Code search** -- Find functions, classes, and symbols across the codebase
- **Dependency graph** -- Query import relationships and dependency chains
- **Vulnerability context** -- Get CVE details with function-level reachability
- **Taint analysis** -- Trace data flows from sources to sinks

MCP integration allows AI tools (Claude Code, Cursor, etc.) to access Flyto's code analysis capabilities directly within the development workflow. See the [flyto-indexer documentation](/indexer/) for MCP tool details.

## Related

- [Flyto Code](/warroom/flyto-code) -- Scanning features and CI gate
- [API Reference](/warroom/api) -- Full endpoint documentation
- [flyto-indexer](/indexer/) -- Code intelligence and MCP server
