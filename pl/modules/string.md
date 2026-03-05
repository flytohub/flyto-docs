# String Operations

Text manipulation: case conversion, split, pad, slugify, template, and more.

**11 modules**

| Module | Description |
|--------|-------------|
| [Male litery](#male-litery) | Konwertuj lancuch na male litery |
| [Pad String](#pad-string) | Pad a string to a specified length |
| [Zamien w lancuchu](#zamien-w-lancuchu) | Zastap wystapienia podlancucha w lancuchu |
| [Odwroc lancuch](#odwroc-lancuch) | Odwroc znaki w lancuchu |
| [Slugify](#slugify) | Convert text to URL-friendly slug |
| [Podziel lancuch](#podziel-lancuch) | Podziel lancuch na tablice uzywajac separatora |
| [Template](#template) | Render a template with variable substitution |
| [Wielkosc tytulowa](#wielkosc-tytulowa) | Konwertuj lancuch na wielkosc tytulowa |
| [Przytnij lancuch](#przytnij-lancuch) | Usun biale znaki z obu koncow lancucha |
| [Truncate String](#truncate-string) | Truncate a string to a maximum length |
| [Wielkie litery](#wielkie-litery) | Konwertuj lancuch na wielkie litery |

## Modules

### Male litery

`string.lowercase`

Konwertuj lancuch na male litery

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Lancuch skonwertowany na male litery |
| `original` | string | Lancuch skonwertowany na male litery |
| `status` | string | Lancuch skonwertowany na male litery |

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

### Zamien w lancuchu

`string.replace`

Zastap wystapienia podlancucha w lancuchu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `search` | string | Yes | - | The substring to search for in the input text |
| `replace` | string | Yes | - | Text to replace matches with (leave empty to remove matches) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Lancuch z zastosowanymi zamiennikami |
| `original` | string | Lancuch z zastosowanymi zamiennikami |
| `search` | string | Lancuch z zastosowanymi zamiennikami |
| `replace` | string | Oryginalny lancuch wejsciowy |
| `status` | string | Szukany lancuch, ktory zostal zamieniony |

### Odwroc lancuch

`string.reverse`

Odwroc znaki w lancuchu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Odwrocony lancuch |
| `original` | string | Odwrocony lancuch |
| `length` | number | Odwrocony lancuch |

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

### Podziel lancuch

`string.split`

Podziel lancuch na tablice uzywajac separatora

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `delimiter` | select (`,`, `;`, `	`, ` `, `
`, `|`, `-`, `_`) | No | ` ` | Character(s) to split the string on |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `parts` | array | Tablica czesci podzielonego lancucha |
| `result` | array | Tablica czesci podzielonego lancucha |
| `length` | number | Tablica czesci podzielonego lancucha |
| `original` | string | Alias dla parts - tablica czesci podzielonego lancucha |
| `delimiter` | string | Liczba czesci po podziale |
| `status` | string | Oryginalny lancuch wejsciowy |

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

### Wielkosc tytulowa

`string.titlecase`

Konwertuj lancuch na wielkosc tytulowa

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Lancuch skonwertowany na wielkosc tytulowa |

**Example:** Convert to title case

```yaml
text: hello world from flyto
```

**Example:** Format name

```yaml
text: john doe
```

### Przytnij lancuch

`string.trim`

Usun biale znaki z obu koncow lancucha

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Przyciety lancuch z usunietymi bialymi znakami |
| `original` | string | Przyciety lancuch z usunietymi bialymi znakami |
| `status` | string | Przyciety lancuch z usunietymi bialymi znakami |

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

### Wielkie litery

`string.uppercase`

Konwertuj lancuch na wielkie litery

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Lancuch skonwertowany na wielkie litery |
| `original` | string | Lancuch skonwertowany na wielkie litery |
| `status` | string | Lancuch skonwertowany na wielkie litery |
