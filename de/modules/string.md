# String Operations

Text manipulation: case conversion, split, pad, slugify, template, and more.

**11 modules**

| Module | Description |
|--------|-------------|
| [String Kleinbuchstaben](#string-kleinbuchstaben) | String in Kleinbuchstaben umwandeln |
| [Text auffüllen](#text-auffüllen) | Einen Text auf eine bestimmte Länge auffüllen |
| [String ersetzen](#string-ersetzen) | Vorkommen eines Teilstrings in einem String ersetzen |
| [String umkehren](#string-umkehren) | Zeichen in einem String umkehren |
| [Slugify](#slugify) | Text in eine URL-freundliche Slug umwandeln |
| [String aufteilen](#string-aufteilen) | String mit Trennzeichen in Array aufteilen |
| [Vorlage](#vorlage) | Eine Vorlage mit Variablenersetzung rendern |
| [String Titelschreibung](#string-titelschreibung) | String in Titelschreibung umwandeln |
| [String trimmen](#string-trimmen) | Leerzeichen von beiden Enden eines Strings entfernen |
| [Text kürzen](#text-kürzen) | Einen Text auf eine maximale Länge kürzen |
| [String Großbuchstaben](#string-großbuchstaben) | String in Großbuchstaben umwandeln |

## Modules

### String Kleinbuchstaben

`string.lowercase`

String in Kleinbuchstaben umwandeln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | In Kleinbuchstaben umgewandelter String |
| `original` | string | In Kleinbuchstaben umgewandelter String |
| `status` | string | In Kleinbuchstaben umgewandelter String |

### Text auffüllen

`string.pad`

Einen Text auf eine bestimmte Länge auffüllen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text zum Auffüllen |
| `length` | number | Yes | - | Text zum Auffüllen |
| `pad_char` | string | No | ` ` | Ziel-Länge |
| `position` | string | No | `end` | Zeichen zum Auffüllen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Aufgefüllter Text |
| `original` | string | Aufgefüllter Text |
| `added` | number | Aufgefüllter Text |

### String ersetzen

`string.replace`

Vorkommen eines Teilstrings in einem String ersetzen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `search` | string | Yes | - | The substring to search for in the input text |
| `replace` | string | Yes | - | Text to replace matches with (leave empty to remove matches) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | String mit angewandten Ersetzungen |
| `original` | string | String mit angewandten Ersetzungen |
| `search` | string | String mit angewandten Ersetzungen |
| `replace` | string | Ursprünglicher Eingabestring |
| `status` | string | Suchstring, der ersetzt wurde |

### String umkehren

`string.reverse`

Zeichen in einem String umkehren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Umgekehrter String |
| `original` | string | Umgekehrter String |
| `length` | number | Umgekehrter String |

### Slugify

`string.slugify`

Text in eine URL-freundliche Slug umwandeln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text zum Slugifizieren |
| `separator` | string | No | `-` | Text zum Slugifizieren |
| `lowercase` | boolean | No | `True` | Worttrenner |
| `max_length` | number | No | `0` | In Kleinbuchstaben umwandeln |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Maximale Slug-Länge (0 = unbegrenzt) |
| `original` | string | URL-freundliche Slug |

### String aufteilen

`string.split`

String mit Trennzeichen in Array aufteilen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `delimiter` | select (`,`, `;`, `	`, ` `, `
`, `|`, `-`, `_`) | No | ` ` | Character(s) to split the string on |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `parts` | array | Array der aufgeteilten String-Teile |
| `result` | array | Array der aufgeteilten String-Teile |
| `length` | number | Array der aufgeteilten String-Teile |
| `original` | string | Alias für Teile - Array der aufgeteilten String-Teile |
| `delimiter` | string | Anzahl der Teile nach Aufteilung |
| `status` | string | Ursprünglicher Eingabestring |

### Vorlage

`string.template`

Eine Vorlage mit Variablenersetzung rendern

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | Vorlagen-String mit {<!-- -->{variable}<!-- -->} Platzhaltern |
| `variables` | object | Yes | - | Zu ersetzende Variablen |
| `missing_value` | string | No | - | Wert für undefinierte Variablen |
| `preserve_missing` | boolean | No | `False` | Wert für undefinierte Variablen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Platzhalter behalten, wenn Variable fehlt |
| `replaced` | number | Gerenderte Vorlage |
| `missing` | array | Gerenderte Vorlage |

### String Titelschreibung

`string.titlecase`

String in Titelschreibung umwandeln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | In Titelschreibung umgewandelter String |

**Example:** Convert to title case

```yaml
text: hello world from flyto
```

**Example:** Format name

```yaml
text: john doe
```

### String trimmen

`string.trim`

Leerzeichen von beiden Enden eines Strings entfernen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Getrimmter String mit entfernten Leerzeichen |
| `original` | string | Getrimmter String mit entfernten Leerzeichen |
| `status` | string | Getrimmter String mit entfernten Leerzeichen |

### Text kürzen

`string.truncate`

Einen Text auf eine maximale Länge kürzen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text zum Kürzen |
| `length` | number | Yes | - | Text zum Kürzen |
| `suffix` | string | No | `...` | Maximale Länge |
| `word_boundary` | boolean | No | `False` | Text, der angehängt wird, wenn abgeschnitten |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Am Wortende abbrechen |
| `original` | string | Gekürzter Text |
| `truncated` | boolean | Gekürzter Text |
| `removed` | number | Originaltext |

### String Großbuchstaben

`string.uppercase`

String in Großbuchstaben umwandeln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | In Großbuchstaben umgewandelter String |
| `original` | string | In Großbuchstaben umgewandelter String |
| `status` | string | In Großbuchstaben umgewandelter String |
