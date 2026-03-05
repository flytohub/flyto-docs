# String Operations

Text manipulation: case conversion, split, pad, slugify, template, and more.

**11 modules**

| Module | Description |
|--------|-------------|
| [String Lowercase](#string-lowercase) | Convert a string to lowercase |
| [Pad String](#pad-string) | Pad a string to a specified length |
| [String Replace](#string-replace) | Replace occurrences of a substring in a string |
| [String Reverse](#string-reverse) | Reverse the characters in a string |
| [Slugify](#slugify) | Convert text to URL-friendly slug |
| [Split String](#split-string) | Split a string into an array using a delimiter |
| [Template](#template) | Render a template with variable substitution |
| [Title Case String](#title-case-string) | Convert string to title case |
| [String Trim](#string-trim) | Remove whitespace from both ends of a string |
| [Truncate String](#truncate-string) | Truncate a string to a maximum length |
| [String Uppercase](#string-uppercase) | Convert a string to uppercase |

## Modules

### String Lowercase

`string.lowercase`

Convert a string to lowercase

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Lowercase converted string |
| `original` | string | Lowercase converted string |
| `status` | string | Lowercase converted string |

### Pad String

`string.pad`

Pad a string to a specified length

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to pad |
| `length` | number | Yes | - | Text to pad |
| `pad_char` | string | No | ` ` | Target length |
| `position` | string | No | `end` | Character to pad with |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Padded string |
| `original` | string | Padded string |
| `added` | number | Padded string |

### String Replace

`string.replace`

Replace occurrences of a substring in a string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `search` | string | Yes | - | The substring to search for in the input text |
| `replace` | string | Yes | - | Text to replace matches with (leave empty to remove matches) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | String with replacements applied |
| `original` | string | String with replacements applied |
| `search` | string | String with replacements applied |
| `replace` | string | Original input string |
| `status` | string | Search string that was replaced |

### String Reverse

`string.reverse`

Reverse the characters in a string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Reversed string |
| `original` | string | Reversed string |
| `length` | number | Reversed string |

### Slugify

`string.slugify`

Convert text to URL-friendly slug

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to slugify |
| `separator` | string | No | `-` | Text to slugify |
| `lowercase` | boolean | No | `True` | Word separator |
| `max_length` | number | No | `0` | Convert to lowercase |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Maximum slug length (0 = unlimited) |
| `original` | string | URL-friendly slug |

### Split String

`string.split`

Split a string into an array using a delimiter

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `delimiter` | select (`,`, `;`, `	`, ` `, `
`, `|`, `-`, `_`) | No | ` ` | Character(s) to split the string on |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `parts` | array | Array of split string parts |
| `result` | array | Array of split string parts |
| `length` | number | Array of split string parts |
| `original` | string | Alias for parts - array of split string parts |
| `delimiter` | string | Number of parts after split |
| `status` | string | Original input string |

### Template

`string.template`

Render a template with variable substitution

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Template string with {<!-- -->{variable}<!-- -->} placeholders |
| `variables` | object | Yes | - | Variables to substitute |
| `missing_value` | string | No | - | Value for undefined variables |
| `preserve_missing` | boolean | No | `False` | Value for undefined variables |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Keep placeholder if variable is missing |
| `replaced` | number | Rendered template |
| `missing` | array | Rendered template |

### Title Case String

`string.titlecase`

Convert string to title case

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Title case converted string |

**Example:** Convert to title case

```yaml
text: hello world from flyto
```

**Example:** Format name

```yaml
text: john doe
```

### String Trim

`string.trim`

Remove whitespace from both ends of a string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Trimmed string with whitespace removed |
| `original` | string | Trimmed string with whitespace removed |
| `status` | string | Trimmed string with whitespace removed |

### Truncate String

`string.truncate`

Truncate a string to a maximum length

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to truncate |
| `length` | number | Yes | - | Text to truncate |
| `suffix` | string | No | `...` | Maximum length |
| `word_boundary` | boolean | No | `False` | Text to append if truncated |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Break at word boundary |
| `original` | string | Truncated string |
| `truncated` | boolean | Truncated string |
| `removed` | number | Original string |

### String Uppercase

`string.uppercase`

Convert a string to uppercase

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Uppercase converted string |
| `original` | string | Uppercase converted string |
| `status` | string | Uppercase converted string |
