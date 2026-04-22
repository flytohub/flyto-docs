# Utilities

Datetime operations, delay, MD5 hash, and random utilities.

**9 modules**

| Module | Description |
|--------|-------------|
| [Add Time](#add-time) | Add time to datetime |
| [Format DateTime](#format-datetime) | Format datetime to string |
| [Parse DateTime](#parse-datetime) | Parse string to datetime |
| [Subtract Time](#subtract-time) | Subtract time from datetime |
| [Current Date/Time](#current-datetime) | Get current date and time |
| [Delay/Sleep](#delaysleep) | Pause workflow execution for specified duration |
| [MD5 Hash](#md5-hash) | Calculate MD5 hash of text |
| [Random Number](#random-number) | Generate random number in range |
| [Random String](#random-string) | Generate random string or UUID |

## Modules

### Add Time

`datetime.add`

Add time to datetime

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `days` | number | No | `0` | Number of days to add (positive) or subtract (negative) |
| `hours` | number | No | `0` | Number of hours to add (positive) or subtract (negative) |
| `minutes` | number | No | `0` | Number of minutes to add (positive) or subtract (negative) |
| `seconds` | number | No | `0` | Number of seconds to add (positive) or subtract (negative) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | The operation result |
| `timestamp` | number | Unix timestamp |

**Example:** Add 7 days

```yaml
datetime: now
days: 7
```

**Example:** Add 2 hours 30 minutes

```yaml
datetime: 2024-01-15T10:00:00
hours: 2
minutes: 30
```

### Format DateTime

`datetime.format`

Format datetime to string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | The operation result |
| `timestamp` | number | Unix timestamp |

**Example:** Format current time

```yaml
datetime: now
format: %Y-%m-%d %H:%M:%S
```

**Example:** Custom date format

```yaml
datetime: 2024-01-15T10:30:00
format: %B %d, %Y
```

### Parse DateTime

`datetime.parse`

Parse string to datetime

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime_string` | string | Yes | - | DateTime string to parse (ISO 8601 format recommended) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | The operation result |
| `timestamp` | number | Unix timestamp |
| `year` | number | Year component |
| `month` | number | Month component |
| `day` | number | Day component |
| `hour` | number | Hour component |
| `minute` | number | Minute component |
| `second` | number | Second component |

**Example:** Parse ISO format

```yaml
datetime_string: 2024-01-15T10:30:00
```

**Example:** Parse custom format

```yaml
datetime_string: January 15, 2024
format: %B %d, %Y
```

### Subtract Time

`datetime.subtract`

Subtract time from datetime

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `days` | number | No | `0` | Number of days to add (positive) or subtract (negative) |
| `hours` | number | No | `0` | Number of hours to add (positive) or subtract (negative) |
| `minutes` | number | No | `0` | Number of minutes to add (positive) or subtract (negative) |
| `seconds` | number | No | `0` | Number of seconds to add (positive) or subtract (negative) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | The operation result |
| `timestamp` | number | Unix timestamp |

**Example:** Subtract 7 days

```yaml
datetime: now
days: 7
```

**Example:** Subtract 1 hour

```yaml
datetime: 2024-01-15T10:00:00
hours: 1
```

### Current Date/Time

`utility.datetime.now`

Get current date and time

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`iso`, `unix`, `unix_ms`, `date`, `time`, `custom`) | No | `iso` | Output format |
| `custom_format` | string | No | - | Python strftime format (if format=custom) |
| `timezone` | string | No | `UTC` | Timezone (default: UTC) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success/error) |
| `datetime` | string | Formatted date/time |
| `timestamp` | number | Unix timestamp |
| `iso` | string | ISO format |

**Example:** Example

```yaml
format: iso
```

**Example:** Example

```yaml
format: unix
```

### Delay/Sleep

`utility.delay`

Pause workflow execution for specified duration

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | How long to wait in milliseconds |
| `duration_seconds` | number | No | - | Alternative: duration in seconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success/error) |
| `waited_ms` | number | Actual wait time in ms |

**Example:** Example

```yaml
duration_seconds: 2
```

**Example:** Example

```yaml
duration_ms: 500
```

### MD5 Hash

`utility.hash.md5`

Calculate MD5 hash of text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text to hash |
| `encoding` | string | No | `utf-8` | Text encoding |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success/error) |
| `hash` | string | MD5 hash (hexadecimal) |

**Example:** Example

```yaml
text: Hello World
```

### Random Number

`utility.random.number`

Generate random number in range

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | Minimum value (inclusive) |
| `max` | number | No | `100` | Maximum value (inclusive) |
| `decimals` | number | No | `0` | Number of decimal places (0 for integers) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success/error) |
| `value` | number | Random number |

**Example:** Example

```yaml
min: 1
max: 100
decimals: 0
```

**Example:** Example

```yaml
min: 0
max: 1
decimals: 2
```

### Random String

`utility.random.string`

Generate random string or UUID

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | No | `16` | String length |
| `charset` | select (`alphanumeric`, `letters`, `lowercase`, `uppercase`, `numbers`, `hex`, `uuid`) | No | `alphanumeric` | Which characters to use |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success/error) |
| `value` | string | Random string |

**Example:** Example

```yaml
length: 16
charset: alphanumeric
```

**Example:** Example

```yaml
charset: uuid
```
