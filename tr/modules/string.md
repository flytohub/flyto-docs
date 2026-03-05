# String Operations

Text manipulation: case conversion, split, pad, slugify, template, and more.

**11 modules**

| Module | Description |
|--------|-------------|
| [Dize Küçük Harf](#dize-küçük-harf) | Dizeyi küçük harfe dönüştür |
| [Pad String](#pad-string) | Pad a string to a specified length |
| [Dize Değiştir](#dize-değiştir) | Dizede alt dize geçişlerini değiştir |
| [Dize Ters Çevir](#dize-ters-çevir) | Dizideki karakterleri ters çevir |
| [Slugify](#slugify) | Convert text to URL-friendly slug |
| [Dize Böl](#dize-böl) | Ayırıcı kullanarak dizeyi diziye böl |
| [Template](#template) | Render a template with variable substitution |
| [Başlık Harfli Dize](#başlık-harfli-dize) | Dizeyi başlık harfine dönüştür |
| [Dize Kırp](#dize-kırp) | Dizenin her iki ucundan boşlukları kaldır |
| [Truncate String](#truncate-string) | Truncate a string to a maximum length |
| [Dize Büyük Harf](#dize-büyük-harf) | Dizeyi büyük harfe dönüştür |

## Modules

### Dize Küçük Harf

`string.lowercase`

Dizeyi küçük harfe dönüştür

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Küçük harfe dönüştürülmüş dize |
| `original` | string | Küçük harfe dönüştürülmüş dize |
| `status` | string | Küçük harfe dönüştürülmüş dize |

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

### Dize Değiştir

`string.replace`

Dizede alt dize geçişlerini değiştir

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `search` | string | Yes | - | The substring to search for in the input text |
| `replace` | string | Yes | - | Text to replace matches with (leave empty to remove matches) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Değişiklikler uygulanmış dize |
| `original` | string | Değişiklikler uygulanmış dize |
| `search` | string | Değişiklikler uygulanmış dize |
| `replace` | string | Orijinal giriş dizesi |
| `status` | string | Değiştirilen arama dizesi |

### Dize Ters Çevir

`string.reverse`

Dizideki karakterleri ters çevir

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Ters çevrilmiş dize |
| `original` | string | Ters çevrilmiş dize |
| `length` | number | Ters çevrilmiş dize |

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

### Dize Böl

`string.split`

Ayırıcı kullanarak dizeyi diziye böl

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `delimiter` | select (`,`, `;`, `	`, ` `, `
`, `|`, `-`, `_`) | No | ` ` | Character(s) to split the string on |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `parts` | array | Bölünmüş dize parçaları dizisi |
| `result` | array | Bölünmüş dize parçaları dizisi |
| `length` | number | Bölünmüş dize parçaları dizisi |
| `original` | string | Parçalar için takma ad - bölünmüş dize parçaları dizisi |
| `delimiter` | string | Bölünmeden sonra parça sayısı |
| `status` | string | Orijinal giriş dizesi |

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

### Başlık Harfli Dize

`string.titlecase`

Dizeyi başlık harfine dönüştür

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Başlık harfine dönüştürülmüş dize |

**Example:** Convert to title case

```yaml
text: hello world from flyto
```

**Example:** Format name

```yaml
text: john doe
```

### Dize Kırp

`string.trim`

Dizenin her iki ucundan boşlukları kaldır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Boşlukları kaldırılmış kırpılmış dize |
| `original` | string | Boşlukları kaldırılmış kırpılmış dize |
| `status` | string | Boşlukları kaldırılmış kırpılmış dize |

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

### Dize Büyük Harf

`string.uppercase`

Dizeyi büyük harfe dönüştür

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Büyük harfe dönüştürülmüş dize |
| `original` | string | Büyük harfe dönüştürülmüş dize |
| `status` | string | Büyük harfe dönüştürülmüş dize |
