# String Operations

Text manipulation: case conversion, split, pad, slugify, template, and more.

**11 modules**

| Module | Description |
|--------|-------------|
| [String Minusculas](#string-minusculas) | Converter string para minusculas |
| [Pad String](#pad-string) | Pad a string to a specified length |
| [String Substituir](#string-substituir) | Substituir ocorrencias de uma substring em uma string |
| [String Inverter](#string-inverter) | Inverter os caracteres em uma string |
| [Slugify](#slugify) | Convert text to URL-friendly slug |
| [Dividir String](#dividir-string) | Dividir string em array usando delimitador |
| [Template](#template) | Render a template with variable substitution |
| [String em Titulo](#string-em-titulo) | Converter string para titulo |
| [String Trim](#string-trim) | Remover espacos em branco de ambas as extremidades de uma string |
| [Truncate String](#truncate-string) | Truncate a string to a maximum length |
| [String Maiusculas](#string-maiusculas) | Converter string para maiusculas |

## Modules

### String Minusculas

`string.lowercase`

Converter string para minusculas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | String convertida para minusculas |
| `original` | string | String convertida para minusculas |
| `status` | string | String convertida para minusculas |

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

### String Substituir

`string.replace`

Substituir ocorrencias de uma substring em uma string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `search` | string | Yes | - | The substring to search for in the input text |
| `replace` | string | Yes | - | Text to replace matches with (leave empty to remove matches) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | String com substituicoes aplicadas |
| `original` | string | String com substituicoes aplicadas |
| `search` | string | String com substituicoes aplicadas |
| `replace` | string | String de entrada original |
| `status` | string | String de busca que foi substituida |

### String Inverter

`string.reverse`

Inverter os caracteres em uma string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | String invertida |
| `original` | string | String invertida |
| `length` | number | String invertida |

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

### Dividir String

`string.split`

Dividir string em array usando delimitador

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `delimiter` | select (`,`, `;`, `	`, ` `, `
`, `|`, `-`, `_`) | No | ` ` | Character(s) to split the string on |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `parts` | array | Array de partes da string dividida |
| `result` | array | Array de partes da string dividida |
| `length` | number | Array de partes da string dividida |
| `original` | string | Alias para parts - array de partes da string dividida |
| `delimiter` | string | Numero de partes apos divisao |
| `status` | string | String de entrada original |

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

### String em Titulo

`string.titlecase`

Converter string para titulo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | String convertida para titulo |

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

Remover espacos em branco de ambas as extremidades de uma string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | String com espacos em branco removidos |
| `original` | string | String com espacos em branco removidos |
| `status` | string | String com espacos em branco removidos |

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

### String Maiusculas

`string.uppercase`

Converter string para maiusculas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | String convertida para maiusculas |
| `original` | string | String convertida para maiusculas |
| `status` | string | String convertida para maiusculas |
