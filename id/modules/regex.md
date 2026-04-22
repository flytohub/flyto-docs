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
| `pattern` | string | Yes | - | Regex with named groups (?P<name>...) |
| `ignore_case` | boolean | No | `False` | Case-insensitive matching |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | Extracted named groups |
| `matched` | boolean | Whether pattern matched |
| `full_match` | string | Full matched text |

### Regex Match

`regex.match`

Find all matches of a pattern in text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to search |
| `pattern` | string | Yes | - | Regular expression pattern |
| `ignore_case` | boolean | No | `False` | Case-insensitive matching |
| `first_only` | boolean | No | `False` | Return only the first match |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `matches` | array | List of matches |
| `count` | number | Number of matches |
| `groups` | array | Captured groups from each match |

### Regex Replace

`regex.replace`

Replace pattern matches in text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to process |
| `pattern` | string | Yes | - | Regular expression pattern |
| `replacement` | string | Yes | - | Replacement text (supports backreferences) |
| `ignore_case` | boolean | No | `False` | Case-insensitive matching |
| `count` | number | No | `0` | Maximum replacements (0 = unlimited) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Text with replacements |
| `replacements` | number | Number of replacements made |
| `original` | string | Original text |

### Regex Split

`regex.split`

Split text by a regex pattern

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to split |
| `pattern` | string | Yes | - | Regular expression pattern for delimiter |
| `ignore_case` | boolean | No | `False` | Case-insensitive matching |
| `max_split` | number | No | `0` | Maximum number of splits (0 = unlimited) |
| `remove_empty` | boolean | No | `False` | Remove empty strings from result |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Split parts |
| `count` | number | Number of parts |

### Regex Test

`regex.test`

Test if string matches a regex pattern

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to test |
| `pattern` | string | Yes | - | Regular expression pattern |
| `ignore_case` | boolean | No | `False` | Case-insensitive matching |
| `full_match` | boolean | No | `False` | Require pattern to match entire string |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Whether pattern matches |
| `pattern` | string | Pattern used |
