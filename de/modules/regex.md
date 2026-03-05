# Regex

Pattern matching: match, extract, replace, split, and test.

**5 modules**

| Module | Description |
|--------|-------------|
| [Regex Extraktion](#regex-extraktion) | Extrahiere benannte Gruppen aus Text |
| [Regex Übereinstimmung](#regex-übereinstimmung) | Finde alle Musterübereinstimmungen im Text |
| [Regex Ersetzen](#regex-ersetzen) | Ersetze Musterübereinstimmungen im Text |
| [Regex Teilen](#regex-teilen) | Teile Text mit einem Regex-Muster |
| [Regex-Test](#regex-test) | Testen, ob ein String einem Regex-Muster entspricht |

## Modules

### Regex Extraktion

`regex.extract`

Extrahiere benannte Gruppen aus Text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text, aus dem extrahiert werden soll |
| `pattern` | string | Yes | - | Text, aus dem extrahiert werden soll |
| `ignore_case` | boolean | No | `False` | Groß-/Kleinschreibung ignorieren |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | Groß-/Kleinschreibung ignorieren |
| `matched` | boolean | Extrahierte benannte Gruppen |
| `full_match` | string | Extrahierte benannte Gruppen |

### Regex Übereinstimmung

`regex.match`

Finde alle Musterübereinstimmungen im Text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text, in dem gesucht werden soll |
| `pattern` | string | Yes | - | Text, in dem gesucht werden soll |
| `ignore_case` | boolean | No | `False` | Regulärer Ausdruck |
| `first_only` | boolean | No | `False` | Groß-/Kleinschreibung ignorieren |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `matches` | array | Nur die erste Übereinstimmung zurückgeben |
| `count` | number | Liste der Übereinstimmungen |
| `groups` | array | Liste der Übereinstimmungen |

### Regex Ersetzen

`regex.replace`

Ersetze Musterübereinstimmungen im Text

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text, der bearbeitet werden soll |
| `pattern` | string | Yes | - | Text, der bearbeitet werden soll |
| `replacement` | string | Yes | - | Regulärer Ausdruck |
| `ignore_case` | boolean | No | `False` | Ersetzungstext (unterstützt Rückverweise) |
| `count` | number | No | `0` | Groß-/Kleinschreibung ignorieren |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Maximale Ersetzungen (0 = unbegrenzt) |
| `replacements` | number | Text mit Ersetzungen |
| `original` | string | Text mit Ersetzungen |

### Regex Teilen

`regex.split`

Teile Text mit einem Regex-Muster

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text zum Aufteilen |
| `pattern` | string | Yes | - | Text, der geteilt werden soll |
| `ignore_case` | boolean | No | `False` | Regulärer Ausdruck für Trennzeichen |
| `max_split` | number | No | `0` | Groß-/Kleinschreibung ignorieren |
| `remove_empty` | boolean | No | `False` | Maximale Anzahl von Teilungen (0 = unbegrenzt) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Leere Zeichenfolgen aus dem Ergebnis entfernen |
| `count` | number | Geteilte Teile |

### Regex-Test

`regex.test`

Testen, ob ein String einem Regex-Muster entspricht

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text zum Testen |
| `pattern` | string | Yes | - | Text zum Testen |
| `ignore_case` | boolean | No | `False` | Regulärer Ausdruck |
| `full_match` | boolean | No | `False` | Groß-/Kleinschreibung ignorieren |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Erfordert, dass das Muster mit dem gesamten String übereinstimmt |
| `pattern` | string | Ob das Muster übereinstimmt |
