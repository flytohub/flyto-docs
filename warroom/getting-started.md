# Getting Started

Get your first security score in 5 minutes.

## Step 1: Create a Project

Log into Flyto2 Warroom and create a new project. Choose your starting point:

![New Project](/warroom/02-new-project.png)

| Project Type | Best for | What it scans |
|-------------|----------|---------------|
| **Code Audit** | Dev teams with repos | CVEs, secrets, SAST, taint flows, IaC, license, containers |
| **Attack Surface** | Security teams with domains | TLS, DNS, headers, ports, breach, threat intel, WAF |
| **Black-box Pentest** | Testing live endpoints | API injection, auth bypass, misconfig |

You can combine multiple project types later. Start with whichever data source you have ready.

## Step 2: Connect Your Source

### For repositories (Code Audit)

![Connect Provider](/warroom/03-onboarding-connect.png)

1. Click **Connect GitHub** (or GitLab)
2. Authorize Flyto2 via OAuth -- we request `repo` and `read:org` scopes
3. Select which repositories to scan
4. Warroom imports your repos and starts the first scan automatically

The first scan typically completes in 1-3 minutes per repository, depending on size.

### For domains (Attack Surface)

1. Click **Add Domain**
2. Enter your domain (e.g., `example.com`)
3. Verify ownership via DNS TXT record or HTTP file
4. Warroom runs all 22 discovery scanners automatically

Initial discovery takes 2-5 minutes. Subdomains are enumerated automatically via certificate transparency logs.

## Step 3: See Your Results

### Issues

Once scanning completes, your findings appear in the Issues view:

![Issues List](/warroom/05-issues-list.png)

Each finding shows:
- **Severity** (critical / high / medium / low)
- **Type** (CVE, secret, SAST, IaC, taint flow, etc.)
- **Confidence level** (L0 / L1 / L2) -- how verified the finding is
- **Affected file and repository**

### Your Score

Navigate to the Scoring tab to see your unified grade:

![Scoring Breakdown](/warroom/21-scoring-breakdown.png)

The score breaks down into:
- **Code Security (40%)** -- vulnerability severity and volume
- **Attack Surface (35%)** -- external posture across 11 sub-vectors
- **Diligence (25%)** -- how actively you manage security (scan coverage, triage rate, MTTR)

If you only connected repos, you'll see Code Security + Diligence. If you only added domains, you'll see Attack Surface. Connect both for the full picture.

## Step 4: Fix Something

### Option A: AutoFix (automated)

![AutoFix](/warroom/06-autofix.png)

Click **AutoFix** on any finding with a fix available. Warroom generates a pull request that bumps the vulnerable dependency or patches the code.

### Option B: Pulse (prioritized)

![Pulse Feed](/warroom/04-pulse-feed.png)

Open the Pulse feed to see findings ranked by blast radius. Fix the top items first -- they have the highest real-world impact.

### Option C: CI Gate (preventive)

Add a CI gate to your pipeline to block PRs that introduce new vulnerabilities:

```yaml
# GitHub Actions
- name: Flyto2 CI Gate
  run: |
    RESULT=$(curl -s -X POST \
      -H "X-API-Key: ${{ secrets.FLYTO_API_KEY }}" \
      https://api.flyto2.com/api/v1/code/repos/$REPO_ID/ci-gate)
    if echo "$RESULT" | jq -e '.pass == false' > /dev/null; then
      echo "Security gate failed"
      echo "$RESULT" | jq '.violations'
      exit 1
    fi
```

## Step 5: Connect Both Sides (Recommended)

The real power of Warroom is cross-dimensional correlation. If you started with repos, add your domains. If you started with domains, connect your repos.

Once both are connected:
- Blast radius scores activate -- showing which code vulnerabilities are exposed externally
- Asset mapping links domains to repositories
- The unified score includes all three categories + cross-dimensional modifiers

![Asset Map](/warroom/26-asset-map.png)

## What's Next

| Goal | Where to go |
|------|------------|
| Understand how scoring works | [Scoring Methodology](/warroom/scoring-methodology) |
| Set up continuous monitoring | [Flyto2 Domains](/warroom/flyto-domains) -- monitoring schedules |
| Generate compliance reports | [Product Tour: Reports](/warroom/product-tour#reports--compliance) |
| Integrate with CI/CD | [Integrations](/warroom/integrations) |
| Run a red team campaign | [Red Team](/warroom/red-team) |
| Explore the full API | [API Reference](/warroom/api) |
