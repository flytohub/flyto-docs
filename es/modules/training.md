# Training



**4 modules**

| Module | Description |
|--------|-------------|
| [Analisis de practica](#analisis-de-practica) | Analizar estructura de sitio web para practica |
| [Ejecucion de practica](#ejecucion-de-practica) | Ejecutar sesion de practica |
| [Inferir esquema de practica](#inferir-esquema-de-practica) | Inferir esquema de datos desde sitio web |
| [Estadisticas de practica](#estadisticas-de-practica) | Obtener estadisticas de practica |

## Modules

### Analisis de practica

`training.practice.analyze`

Analizar estructura de sitio web para practica

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Analizar estructura de sitio web |
| `structure` | object | Analizar estructura de sitio web |

### Ejecucion de practica

`training.practice.execute`

Ejecutar sesion de practica

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `max_items` | number | No | `10` | Maximum items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Ejecutar sesion de practica |
| `items_processed` | number | Ejecutar sesion de practica |

### Inferir esquema de practica

`training.practice.infer_schema`

Inferir esquema de datos desde sitio web

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `sample_size` | number | No | `5` | Number of samples to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Inferir esquema de datos |
| `schema` | object | Inferir esquema de datos |

### Estadisticas de practica

`training.practice.stats`

Obtener estadisticas de practica

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total_sessions` | number | El total de sesiones |
| `successful_sessions` | number | El total de sesiones |
| `success_rate` | number | Obtener estadisticas de practica |
| `history` | array | Obtener estadisticas de practica |
