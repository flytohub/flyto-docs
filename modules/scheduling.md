# Scheduling Modules

Scheduling modules handle time-based execution control.

## Modules

### schedule.delay

Wait for a specified duration.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ms` | number | Yes | Milliseconds to wait |

### schedule.timeout

Execute with a timeout.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `ms` | number | Yes | Timeout in milliseconds |

### schedule.retry

Retry an operation with backoff.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `max_retries` | number | No | Maximum retry attempts (default: 3) |
| `backoff_ms` | number | No | Initial backoff in ms (default: 1000) |
| `backoff_multiplier` | number | No | Backoff multiplier (default: 2) |
