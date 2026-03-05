# Path

File path utilities: join, normalize, basename, dirname, extension.

**6 modules**

| Module | Description |
|--------|-------------|
| [Nombre Base del Camino](#nombre-base-del-camino) | Obtener el nombre del archivo del camino |
| [Nombre del Directorio del Camino](#nombre-del-directorio-del-camino) | Obtener el nombre del directorio del camino |
| [Extensión del Camino](#extensión-del-camino) | Obtener la extensión del archivo del camino |
| [Camino Absoluto](#camino-absoluto) | Verificar si el camino es absoluto |
| [Unir Caminos](#unir-caminos) | Unir componentes del camino |
| [Normalizar Camino](#normalizar-camino) | Normalizar una ruta de archivo |

## Modules

### Nombre Base del Camino

`path.basename`

Obtener el nombre del archivo del camino

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Ruta del archivo |
| `remove_extension` | boolean | No | `False` | Ruta del archivo |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Eliminar la extensión del archivo del resultado |
| `original` | string | Nombre del archivo |
| `extension` | string | Nombre del archivo |

### Nombre del Directorio del Camino

`path.dirname`

Obtener el nombre del directorio del camino

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Ruta del archivo |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Ruta del archivo |
| `original` | string | Nombre del directorio |

### Extensión del Camino

`path.extension`

Obtener la extensión del archivo del camino

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Ruta del archivo |
| `include_dot` | boolean | No | `True` | Ruta del archivo |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Incluir el punto en la extensión |
| `original` | string | Extensión del archivo |
| `has_extension` | boolean | Extensión del archivo |

### Camino Absoluto

`path.is_absolute`

Verificar si el camino es absoluto

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Ruta del archivo a verificar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Ruta del archivo a verificar |
| `path` | string | Si el camino es absoluto |
| `absolute` | string | Si el camino es absoluto |

### Unir Caminos

`path.join`

Unir componentes del camino

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `parts` | array | Yes | - | Componentes del camino a unir |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Componentes del camino a unir |
| `parts` | array | Camino unido |

### Normalizar Camino

`path.normalize`

Normalizar una ruta de archivo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Ruta del archivo a normalizar |
| `resolve` | boolean | No | `False` | Ruta del archivo a normalizar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Resolver a camino absoluto |
| `original` | string | Camino normalizado |
| `is_absolute` | boolean | Camino normalizado |
