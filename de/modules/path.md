# Path

File path utilities: join, normalize, basename, dirname, extension.

**6 modules**

| Module | Description |
|--------|-------------|
| [Pfad-Basename](#pfad-basename) | Dateiname aus Pfad erhalten |
| [Pfad-Verzeichnisname](#pfad-verzeichnisname) | Verzeichnisname aus Pfad erhalten |
| [Pfad-Erweiterung](#pfad-erweiterung) | Dateierweiterung aus Pfad erhalten |
| [Pfad ist absolut](#pfad-ist-absolut) | Überprüfen, ob Pfad absolut ist |
| [Pfad verbinden](#pfad-verbinden) | Pfadkomponenten verbinden |
| [Pfad normalisieren](#pfad-normalisieren) | Dateipfad normalisieren |

## Modules

### Pfad-Basename

`path.basename`

Dateiname aus Pfad erhalten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Dateipfad |
| `remove_extension` | boolean | No | `False` | Dateipfad |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Dateierweiterung aus Ergebnis entfernen |
| `original` | string | Dateiname |
| `extension` | string | Dateiname |

### Pfad-Verzeichnisname

`path.dirname`

Verzeichnisname aus Pfad erhalten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Dateipfad |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Dateipfad |
| `original` | string | Verzeichnisname |

### Pfad-Erweiterung

`path.extension`

Dateierweiterung aus Pfad erhalten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Dateipfad |
| `include_dot` | boolean | No | `True` | Dateipfad |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Punkt in Erweiterung einbeziehen |
| `original` | string | Dateierweiterung |
| `has_extension` | boolean | Dateierweiterung |

### Pfad ist absolut

`path.is_absolute`

Überprüfen, ob Pfad absolut ist

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Zu überprüfender Dateipfad |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Zu überprüfender Dateipfad |
| `path` | string | Ob Pfad absolut ist |
| `absolute` | string | Ob Pfad absolut ist |

### Pfad verbinden

`path.join`

Pfadkomponenten verbinden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `parts` | array | Yes | - | Zu verbindende Pfadkomponenten |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Zu verbindende Pfadkomponenten |
| `parts` | array | Verbundenen Pfad |

### Pfad normalisieren

`path.normalize`

Dateipfad normalisieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Zu normalisierender Dateipfad |
| `resolve` | boolean | No | `False` | Zu normalisierender Dateipfad |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Zu absolutem Pfad auflösen |
| `original` | string | Normalisierter Pfad |
| `is_absolute` | boolean | Normalisierter Pfad |
