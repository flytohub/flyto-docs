# Path

File path utilities: join, normalize, basename, dirname, extension.

**6 modules**

| Module | Description |
|--------|-------------|
| [Nome Base Percorso](#nome-base-percorso) | Ottieni il nome del file dal percorso |
| [Nome Dir Percorso](#nome-dir-percorso) | Ottieni il nome della directory dal percorso |
| [Estensione Percorso](#estensione-percorso) | Ottieni l'estensione del file dal percorso |
| [Percorso Assoluto](#percorso-assoluto) | Verifica se il percorso è assoluto |
| [Unisci Percorso](#unisci-percorso) | Unisci i componenti del percorso |
| [Normalizza Percorso](#normalizza-percorso) | Normalizza un percorso di file |

## Modules

### Nome Base Percorso

`path.basename`

Ottieni il nome del file dal percorso

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Percorso del file |
| `remove_extension` | boolean | No | `False` | Percorso del file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Rimuovi l'estensione del file dal risultato |
| `original` | string | Nome del file |
| `extension` | string | Nome del file |

### Nome Dir Percorso

`path.dirname`

Ottieni il nome della directory dal percorso

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Percorso del file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Percorso del file |
| `original` | string | Nome della directory |

### Estensione Percorso

`path.extension`

Ottieni l'estensione del file dal percorso

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Percorso del file |
| `include_dot` | boolean | No | `True` | Percorso del file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Includi il punto nell'estensione |
| `original` | string | Estensione del file |
| `has_extension` | boolean | Estensione del file |

### Percorso Assoluto

`path.is_absolute`

Verifica se il percorso è assoluto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Percorso del file da verificare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Percorso del file da verificare |
| `path` | string | Se il percorso è assoluto |
| `absolute` | string | Se il percorso è assoluto |

### Unisci Percorso

`path.join`

Unisci i componenti del percorso

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `parts` | array | Yes | - | Componenti del percorso da unire |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Componenti del percorso da unire |
| `parts` | array | Percorso unito |

### Normalizza Percorso

`path.normalize`

Normalizza un percorso di file

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Percorso del file da normalizzare |
| `resolve` | boolean | No | `False` | Percorso del file da normalizzare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Risolvi a percorso assoluto |
| `original` | string | Percorso normalizzato |
| `is_absolute` | boolean | Percorso normalizzato |
