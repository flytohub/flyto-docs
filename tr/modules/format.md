# Format

Number, currency, duration, filesize, and percentage formatting.

**5 modules**

| Module | Description |
|--------|-------------|
| [Format Currency](#format-currency) | Format numbers as currency |
| [Format Duration](#format-duration) | Format seconds as human-readable duration |
| [Format Filesize](#format-filesize) | Format bytes as human-readable file size |
| [Format Number](#format-number) | Format numbers with separators and decimals |
| [Format Percentage](#format-percentage) | Format numbers as percentages |

## Modules

### Format Currency

`format.currency`

Format numbers as currency

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `amount` | number | Yes | - | Amount to format |
| `currency` | string | No | `USD` | Amount to format |
| `decimal_places` | number | No | `2` | Number of decimal places |
| `symbol_position` | string | No | `before` | Number of decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Formatted currency string |
| `original` | number | Formatted currency string |
| `symbol` | string | Formatted currency string |

### Format Duration

`format.duration`

Format seconds as human-readable duration

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | Duration in seconds |
| `format` | string | No | `short` | Duration in seconds |
| `show_zero` | boolean | No | `False` | Show units that are zero |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Show units that are zero |
| `original` | number | Formatted duration string |
| `parts` | object | Formatted duration string |

### Format Filesize

`format.filesize`

Format bytes as human-readable file size

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bytes` | number | Yes | - | Size in bytes |
| `binary` | boolean | No | `False` | Size in bytes |
| `decimal_places` | number | No | `2` | Use binary units (KiB, MiB) instead of decimal (KB, MB) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Number of decimal places |
| `original` | number | Formatted file size string |
| `unit` | string | Formatted file size string |
| `value` | number | Original bytes |

### Format Number

`format.number`

Format numbers with separators and decimals

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to format |
| `decimal_places` | number | No | `2` | Number to format |
| `thousand_separator` | string | No | `,` | Number of decimal places |
| `decimal_separator` | string | No | `.` | Separator for thousands |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Separator for decimals |
| `original` | number | Formatted number string |

### Format Percentage

`format.percentage`

Format numbers as percentages

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | number | Yes | - | Value to format as percentage |
| `is_ratio` | boolean | No | `True` | Value to format as percentage |
| `decimal_places` | number | No | `1` | Input is a ratio (0-1) that needs to be multiplied by 100 |
| `include_sign` | boolean | No | `False` | Number of decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Include + sign for positive values |
| `original` | number | Formatted percentage string |
| `numeric` | number | Formatted percentage string |
