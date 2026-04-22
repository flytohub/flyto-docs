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
| `original` | string | Original input string |
| `status` | string | Operation status |

### Pad String

`string.pad`

Pad a string to a specified length

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to pad |
| `length` | number | Yes | - | Target length |
| `pad_char` | string | No | ` ` | Character to pad with |
| `position` | string | No | `end` | Where to add padding |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Padded string |
| `original` | string | Original string |
| `added` | number | Characters added |

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
| `original` | string | Original input string |
| `search` | string | Search string that was replaced |
| `replace` | string | Replacement string used |
| `status` | string | Operation status |

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
| `original` | string | Original input string |
| `length` | number | String length |

### Slugify

`string.slugify`

Convert text to URL-friendly slug

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to slugify |
| `separator` | string | No | `-` | Word separator |
| `lowercase` | boolean | No | `True` | Convert to lowercase |
| `max_length` | number | No | `0` | Maximum slug length (0 = unlimited) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | URL-friendly slug |
| `original` | string | Original text |

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
| `result` | array | Alias for parts - array of split string parts |
| `length` | number | Number of parts after split |
| `original` | string | Original input string |
| `delimiter` | string | Delimiter used for splitting |
| `status` | string | Operation status |

### Template

`string.template`

Render a template with variable substitution

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Template string with {<!-- -->{variable}<!-- -->} placeholders |
| `variables` | object | Yes | - | Variables to substitute |
| `missing_value` | string | No | - | Value for undefined variables |
| `preserve_missing` | boolean | No | `False` | Keep placeholder if variable is missing |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Rendered template |
| `replaced` | number | Number of replacements made |
| `missing` | array | Missing variable names |

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
| `original` | string | Original input string |
| `status` | string | Operation status |

### Truncate String

`string.truncate`

Truncate a string to a maximum length

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to truncate |
| `length` | number | Yes | - | Maximum length |
| `suffix` | string | No | `...` | Text to append if truncated |
| `word_boundary` | boolean | No | `False` | Break at word boundary |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Truncated string |
| `original` | string | Original string |
| `truncated` | boolean | Whether string was truncated |
| `removed` | number | Characters removed |

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
| `original` | string | Original input string |
| `status` | string | Operation status |
