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
| `currency` | string | No | `USD` | Currency code (USD, EUR, GBP, etc) |
| `decimal_places` | number | No | `2` | Number of decimal places |
| `symbol_position` | string | No | `before` | Position of currency symbol |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Formatted currency string |
| `original` | number | Original amount |
| `symbol` | string | Currency symbol used |

### Format Duration

`format.duration`

Format seconds as human-readable duration

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | Duration in seconds |
| `format` | string | No | `short` | Output format style |
| `show_zero` | boolean | No | `False` | Show units that are zero |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Formatted duration string |
| `original` | number | Original seconds |
| `parts` | object | Duration parts (days, hours, minutes, seconds) |

### Format Filesize

`format.filesize`

Format bytes as human-readable file size

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bytes` | number | Yes | - | Size in bytes |
| `binary` | boolean | No | `False` | Use binary units (KiB, MiB) instead of decimal (KB, MB) |
| `decimal_places` | number | No | `2` | Number of decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Formatted file size string |
| `original` | number | Original bytes |
| `unit` | string | Unit used |
| `value` | number | Numeric value in unit |

### Format Number

`format.number`

Format numbers with separators and decimals

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to format |
| `decimal_places` | number | No | `2` | Number of decimal places |
| `thousand_separator` | string | No | `,` | Separator for thousands |
| `decimal_separator` | string | No | `.` | Separator for decimals |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Formatted number string |
| `original` | number | Original number |

### Format Percentage

`format.percentage`

Format numbers as percentages

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | number | Yes | - | Value to format as percentage |
| `is_ratio` | boolean | No | `True` | Input is a ratio (0-1) that needs to be multiplied by 100 |
| `decimal_places` | number | No | `1` | Number of decimal places |
| `include_sign` | boolean | No | `False` | Include + sign for positive values |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Formatted percentage string |
| `original` | number | Original value |
| `numeric` | number | Numeric percentage value |
