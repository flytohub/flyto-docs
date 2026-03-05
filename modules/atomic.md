# Atomic

Low-level building blocks that serve as the foundation for workflows. These modules provide direct access to file system, git, HTTP, shell, SSH, networking, and testing primitives.

## Array Primitives

| Module | Description |
|--------|-------------|
| `array.filter` | Filter array elements by condition |
| `array.sort` | Sort array elements |
| `array.unique` | Remove duplicate values |

## Authentication

| Module | Description |
|--------|-------------|
| `auth.oauth2` | OAuth2 Token Exchange |

## DNS & Network

| Module | Description |
|--------|-------------|
| `dns.lookup` | DNS lookup for domain records |
| `monitor.http_check` | HTTP health check / uptime monitor |
| `port.check` | Check if network ports are open |
| `port.wait` | Wait for a port to become available |

## File System

| Module | Description |
|--------|-------------|
| `file.diff` | Generate unified diff between content |
| `file.edit` | Replace a string in a file |
| `file.exists` | Check if a file exists |
| `file.read` | Read content from a file |
| `file.write` | Write content to a file |

## Git

| Module | Description |
|--------|-------------|
| `git.clone` | Clone a git repository |
| `git.commit` | Create a git commit |
| `git.diff` | Get git diff |

## HTTP

| Module | Description |
|--------|-------------|
| `http.paginate` | Iterate paginated API endpoints |
| `http.request` | Send HTTP request |
| `http.response_assert` | Assert HTTP response properties |
| `http.session` | HTTP session with persistent cookies |
| `http.webhook_wait` | Wait for incoming webhook callback |

## Math

| Module | Description |
|--------|-------------|
| `math.calculate` | Perform mathematical operations |

## Process Management

| Module | Description |
|--------|-------------|
| `process.list` | List running background processes |
| `process.start` | Start a background process |
| `process.stop` | Stop a running process |

## Shell & SSH

| Module | Description |
|--------|-------------|
| `shell.exec` | Execute a shell command |
| `ssh.exec` | Execute command via SSH |
| `ssh.sftp_download` | Download file via SFTP |
| `ssh.sftp_upload` | Upload file via SFTP |

## Testing

| Module | Description |
|--------|-------------|
| `testing.e2e.run_steps` | Execute E2E test steps |
| `testing.gate.evaluate` | Quality gate evaluation |
| `testing.http.run_suite` | Run HTTP API test suite |
| `testing.lint.run` | Run linting checks |
| `testing.report.generate` | Generate test report |
| `testing.scenario.run` | Run scenario-based test (BDD) |
| `testing.security.scan` | Security vulnerability scan |
| `testing.suite.run` | Run test suite collection |
| `testing.unit.run` | Execute unit tests |
| `testing.visual.compare` | Visual comparison |
