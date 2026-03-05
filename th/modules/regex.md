# Regex

Pattern matching: match, extract, replace, split, and test.

**5 modules**

| Module | Description |
|--------|-------------|
| [Regex Extract](#regex-extract) | Extract named groups from text |
| [Regex Match](#regex-match) | Find all matches of a pattern in text |
| [Regex Replace](#regex-replace) | Replace pattern matches in text |
| [Regex Split](#regex-split) | Split text by a regex pattern |
| [Regex Test](#regex-test) | Test if string matches a regex pattern |

## Modules

### Regex Extract

`regex.extract`

Extract named groups from text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to extract from |
| `pattern` | string | Yes | - | Text to extract from |
| `ignore_case` | boolean | No | `False` | Case-insensitive matching |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | Case-insensitive matching |
| `matched` | boolean | Extracted named groups |
| `full_match` | string | Extracted named groups |

### Regex Match

`regex.match`

Find all matches of a pattern in text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to search |
| `pattern` | string | Yes | - | Text to search |
| `ignore_case` | boolean | No | `False` | Regular expression pattern |
| `first_only` | boolean | No | `False` | Case-insensitive matching |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `matches` | array | Return only the first match |
| `count` | number | List of matches |
| `groups` | array | List of matches |

### Regex Replace

`regex.replace`

Replace pattern matches in text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to process |
| `pattern` | string | Yes | - | Text to process |
| `replacement` | string | Yes | - | Regular expression pattern |
| `ignore_case` | boolean | No | `False` | Replacement text (supports backreferences) |
| `count` | number | No | `0` | Case-insensitive matching |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Maximum replacements (0 = unlimited) |
| `replacements` | number | Text with replacements |
| `original` | string | Text with replacements |

### Regex Split

`regex.split`

Split text by a regex pattern

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to split |
| `pattern` | string | Yes | - | Text to split |
| `ignore_case` | boolean | No | `False` | Regular expression pattern for delimiter |
| `max_split` | number | No | `0` | Case-insensitive matching |
| `remove_empty` | boolean | No | `False` | Maximum number of splits (0 = unlimited) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Remove empty strings from result |
| `count` | number | Split parts |

### Regex Test

`regex.test`

Test if string matches a regex pattern

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to test |
| `pattern` | string | Yes | - | Text to test |
| `ignore_case` | boolean | No | `False` | Regular expression pattern |
| `full_match` | boolean | No | `False` | Case-insensitive matching |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Require pattern to match entire string |
| `pattern` | string | Whether pattern matches |
