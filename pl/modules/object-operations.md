# Object Operations

Deep merge, flatten, dot-path get/set, and unflatten.

**5 modules**

| Module | Description |
|--------|-------------|
| [Głębokie Scalanie](#głębokie-scalanie) | Głębokie scalanie wielu obiektów |
| [Spłaszcz Obiekt](#spłaszcz-obiekt) | Spłaszczenie zagnieżdżonego obiektu do jednego poziomu |
| [Pobierz Wartość](#pobierz-wartość) | Pobierz wartość z obiektu według ścieżki |
| [Ustaw Wartość](#ustaw-wartość) | Ustaw wartość w obiekcie według ścieżki |
| [Rozpakuj Obiekt](#rozpakuj-obiekt) | Rozpakuj obiekt z notacją kropkową do zagnieżdżonego |

## Modules

### Głębokie Scalanie

`object.deep_merge`

Głębokie scalanie wielu obiektów

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | Tablica obiektów do scalenia |
| `array_merge` | string | No | `replace` | Tablica obiektów do scalenia |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Scalony obiekt |

### Spłaszcz Obiekt

`object.flatten`

Spłaszczenie zagnieżdżonego obiektu do jednego poziomu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Zagnieżdżony obiekt do spłaszczenia |
| `separator` | string | No | `.` | Zagnieżdżony obiekt do spłaszczenia |
| `max_depth` | number | No | `0` | Separator kluczy |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Maksymalna głębokość spłaszczenia (0 = bez ograniczeń) |
| `keys` | array | Spłaszczony obiekt |

### Pobierz Wartość

`object.get`

Pobierz wartość z obiektu według ścieżki

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Obiekt, z którego pobrać wartość |
| `path` | string | Yes | - | Obiekt, z którego pobrać wartość |
| `default` | any | No | - | Ścieżka w notacji kropkowej |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | any | Domyślna wartość, jeśli ścieżka nie zostanie znaleziona |
| `found` | boolean | Pobrana wartość |

### Ustaw Wartość

`object.set`

Ustaw wartość w obiekcie według ścieżki

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Obiekt do modyfikacji |
| `path` | string | Yes | - | Obiekt do modyfikacji |
| `value` | any | Yes | - | Ścieżka w notacji kropkowej |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Wartość do ustawienia |

### Rozpakuj Obiekt

`object.unflatten`

Rozpakuj obiekt z notacją kropkową do zagnieżdżonego

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | Płaski obiekt do rozpakowania |
| `separator` | string | No | `.` | Płaski obiekt do rozpakowania |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | Separator kluczy |
