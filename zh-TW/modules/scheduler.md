# Scheduler

Cron parsing, delay, and interval calculations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Parse Cron Expression](#parse-cron-expression) | Parse cron expression and calculate next N run times |
| [Delay / Sleep](#delay--sleep) | Pause execution for a specified duration |
| [Calculate Interval](#calculate-interval) | Calculate interval timing and next occurrences |

## Modules

### Parse Cron Expression

`scheduler.cron_parse`

Parse cron expression and calculate next N run times

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Standard 5-field cron expression (e.g. "0 9 * * MON-FRI") |
| `count` | number | No | `5` | Number of next run times to calculate |
| `timezone` | string | No | `0` | Timezone for calculation (UTC offset like "+8" or "-5", default "0" for UTC) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `expression` | string | The parsed cron expression |
| `description` | string | Human-readable description of the schedule |
| `next_runs` | array | List of next run times as ISO datetime strings |
| `is_valid` | boolean | Whether the expression is valid |

### Delay / Sleep

`scheduler.delay`

Pause execution for a specified duration

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | Number of seconds to delay |
| `message` | string | No | - | Optional message to include in the result |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `delayed_seconds` | number | Actual number of seconds delayed |
| `message` | string | The provided message or default |

### Calculate Interval

`scheduler.interval`

Calculate interval timing and next occurrences

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | No | `0` | Interval seconds component |
| `minutes` | number | No | `0` | Interval minutes component |
| `hours` | number | No | `0` | Interval hours component |
| `start_time` | string | No | - | Start time in ISO 8601 format (default: now) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `interval_seconds` | number | Total interval in seconds |
| `next_runs` | array | List of next 5 run times as ISO datetime strings |
| `human_readable` | string | Human-readable interval description |
