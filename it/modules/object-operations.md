# Object Operations

Deep merge, flatten, dot-path get/set, and unflatten.

**5 modules**

| Module | Description |
|--------|-------------|
| [Unione Profonda](#unione-profonda) | Unisci profondamente più oggetti |
| [Appiattisci Oggetto](#appiattisci-oggetto) | Appiattisci oggetto annidato a un solo livello |
| [Ottieni Valore](#ottieni-valore) | Ottieni valore dall'oggetto tramite percorso |
| [Imposta Valore](#imposta-valore) | Imposta valore nell'oggetto tramite percorso |
| [Deappiattisci Oggetto](#deappiattisci-oggetto) | Deappiattisci oggetto con notazione a punti ad annidato |

## Modules

### Unione Profonda

`object.deep_merge`

Unisci profondamente più oggetti

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Array di oggetti da unire |
| `array_merge` | string | No | `replace` | Array di oggetti da unire |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Oggetto unito |

### Appiattisci Oggetto

`object.flatten`

Appiattisci oggetto annidato a un solo livello

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Oggetto annidato da appiattire |
| `separator` | string | No | `.` | Oggetto annidato da appiattire |
| `max_depth` | number | No | `0` | Separatore di chiavi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Profondità massima da appiattire (0 = illimitato) |
| `keys` | array | Oggetto appiattito |

### Ottieni Valore

`object.get`

Ottieni valore dall'oggetto tramite percorso

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Oggetto da cui ottenere il valore |
| `path` | string | Yes | - | Oggetto da cui ottenere il valore |
| `default` | any | No | - | Percorso in notazione a punti |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | any | Valore predefinito se il percorso non è trovato |
| `found` | boolean | Valore recuperato |

### Imposta Valore

`object.set`

Imposta valore nell'oggetto tramite percorso

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Oggetto da modificare |
| `path` | string | Yes | - | Oggetto da modificare |
| `value` | any | Yes | - | Percorso in notazione a punti |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Valore da impostare |

### Deappiattisci Oggetto

`object.unflatten`

Deappiattisci oggetto con notazione a punti ad annidato

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Oggetto piatto da deappiattire |
| `separator` | string | No | `.` | Oggetto piatto da deappiattire |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Separatore di chiavi |
