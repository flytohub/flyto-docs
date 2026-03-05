# Set

Set operations: union, intersection, difference, unique.

**4 modules**

| Module | Description |
|--------|-------------|
| [Diferença de Conjuntos](#diferença-de-conjuntos) | Obter elementos no primeiro array, mas não nos outros |
| [Interseção de Conjuntos](#interseção-de-conjuntos) | Obter interseção de dois ou mais arrays |
| [União de Conjuntos](#união-de-conjuntos) | Obter união de dois ou mais arrays |
| [Conjunto Único](#conjunto-único) | Remover elementos duplicados do array |

## Modules

### Diferença de Conjuntos

`set.difference`

Obter elementos no primeiro array, mas não nos outros

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | array | Yes | - | Array de origem |
| `exclude` | array | Yes | - | Array de origem |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Arrays de elementos para excluir |
| `count` | number | Elementos na origem, mas não nos arrays de exclusão |
| `removed_count` | number | Elementos na origem, mas não nos arrays de exclusão |

### Interseção de Conjuntos

`set.intersection`

Obter interseção de dois ou mais arrays

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Arrays para intersectar (array de arrays) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Arrays para intersectar (array de arrays) |
| `count` | number | Interseção de todos os arrays |

### União de Conjuntos

`set.union`

Obter união de dois ou mais arrays

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Arrays para combinar (array de arrays) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Arrays para combinar (array de arrays) |
| `count` | number | União de todos os arrays |

### Conjunto Único

`set.unique`

Remover elementos duplicados do array

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array para remover duplicados |
| `preserve_order` | boolean | No | `True` | Array para remover duplicados |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Manter a ordem da primeira ocorrência |
| `count` | number | Array com elementos únicos |
| `duplicates_removed` | number | Array com elementos únicos |
