# Encode / Decode

Base64, hex, URL, and HTML encoding and decoding.

**7 modules**

| Module | Description |
|--------|-------------|
| [Base64 Dekodieren](#base64-dekodieren) | Base64-codierten Text dekodieren |
| [Hex Dekodieren](#hex-dekodieren) | Hexadezimal in Text dekodieren |
| [URL Dekodieren](#url-dekodieren) | URL-codierten Text dekodieren |
| [Base64 Kodierung](#base64-kodierung) | Text in Base64 umwandeln |
| [Hex Kodierung](#hex-kodierung) | Text in Hexadezimal umwandeln |
| [HTML Kodierung](#html-kodierung) | Text in HTML-Entitäten umwandeln |
| [URL Kodierung](#url-kodierung) | Text URL-kodieren (Prozentkodierung) |

## Modules

### Base64 Dekodieren

`decode.base64`

Base64-codierten Text dekodieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Base64-codierten Text zum Dekodieren |
| `encoding` | string | No | `utf-8` | Base64-codierten Text zum Dekodieren |
| `url_safe` | boolean | No | `False` | Zeichenkodierung für die Ausgabe |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Eingabe ist URL-sicheres Base64 |
| `original` | string | Dekodierter Text |
| `valid` | boolean | Dekodierter Text |

### Hex Dekodieren

`decode.hex`

Hexadezimal in Text dekodieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Hexadezimalen Text zum Dekodieren |
| `encoding` | string | No | `utf-8` | Hexadezimalen Text zum Dekodieren |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Zeichenkodierung für die Ausgabe |
| `original` | string | Dekodierter Text |
| `valid` | boolean | Dekodierter Text |

### URL Dekodieren

`decode.url`

URL-codierten Text dekodieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | URL-codierten Text zum Dekodieren |
| `plus_spaces` | boolean | No | `False` | URL-codierten Text zum Dekodieren |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | + als Leerzeichen behandeln (Formular-Dekodierung) |
| `original` | string | Dekodierter Text |

### Base64 Kodierung

`encode.base64`

Text in Base64 umwandeln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Zu kodierender Text |
| `encoding` | string | No | `utf-8` | Zu kodierender Text |
| `url_safe` | boolean | No | `False` | Zeichenkodierung |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | URL-sichere Base64-Kodierung verwenden |
| `original` | string | Base64-kodierter String |
| `length` | number | Base64-kodierter String |

### Hex Kodierung

`encode.hex`

Text in Hexadezimal umwandeln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text in Hex kodieren |
| `encoding` | string | No | `utf-8` | Text in Hex kodieren |
| `uppercase` | boolean | No | `False` | Zeichenkodierung |
| `separator` | string | No | - | Großbuchstaben für Hex-Zeichen verwenden |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Trennzeichen zwischen Hex-Bytes |
| `original` | string | Hex-kodierter String |
| `byte_count` | number | Hex-kodierter String |

### HTML Kodierung

`encode.html`

Text in HTML-Entitäten umwandeln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text als HTML-Entitäten kodieren |
| `quote` | boolean | No | `True` | Text als HTML-Entitäten kodieren |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Auch Anführungszeichen kodieren |
| `original` | string | HTML-kodierter String |

### URL Kodierung

`encode.url`

Text URL-kodieren (Prozentkodierung)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Text URL-kodieren |
| `plus_spaces` | boolean | No | `False` | Text URL-kodieren |
| `safe` | string | No | - | + statt %20 für Leerzeichen verwenden (Formular-Kodierung) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Zeichen, die nicht kodiert werden sollen |
| `original` | string | URL-kodierter String |
