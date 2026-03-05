# Path

File path utilities: join, normalize, basename, dirname, extension.

**6 modules**

| Module | Description |
|--------|-------------|
| [Nom de fichier](#nom-de-fichier) | Obtenir le nom de fichier à partir du chemin |
| [Nom du répertoire](#nom-du-répertoire) | Obtenir le nom du répertoire à partir du chemin |
| [Extension du fichier](#extension-du-fichier) | Obtenir l'extension du fichier à partir du chemin |
| [Chemin Absolu](#chemin-absolu) | Vérifier si le chemin est absolu |
| [Joindre Chemin](#joindre-chemin) | Joindre les composants du chemin |
| [Normaliser Chemin](#normaliser-chemin) | Normaliser un chemin de fichier |

## Modules

### Nom de fichier

`path.basename`

Obtenir le nom de fichier à partir du chemin

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Chemin du fichier |
| `remove_extension` | boolean | No | `False` | Chemin du fichier |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Supprimer l'extension du fichier du résultat |
| `original` | string | Nom de fichier |
| `extension` | string | Nom de fichier |

### Nom du répertoire

`path.dirname`

Obtenir le nom du répertoire à partir du chemin

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Chemin du fichier |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Chemin du fichier |
| `original` | string | Nom du répertoire |

### Extension du fichier

`path.extension`

Obtenir l'extension du fichier à partir du chemin

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Chemin du fichier |
| `include_dot` | boolean | No | `True` | Chemin du fichier |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Inclure le point dans l'extension |
| `original` | string | Extension du fichier |
| `has_extension` | boolean | Extension du fichier |

### Chemin Absolu

`path.is_absolute`

Vérifier si le chemin est absolu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Chemin du fichier à vérifier |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Chemin du fichier à vérifier |
| `path` | string | Si le chemin est absolu |
| `absolute` | string | Si le chemin est absolu |

### Joindre Chemin

`path.join`

Joindre les composants du chemin

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `parts` | array | Yes | - | Composants du chemin à joindre |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Composants du chemin à joindre |
| `parts` | array | Chemin joint |

### Normaliser Chemin

`path.normalize`

Normaliser un chemin de fichier

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Chemin du fichier à normaliser |
| `resolve` | boolean | No | `False` | Chemin du fichier à normaliser |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Résoudre en chemin absolu |
| `original` | string | Chemin normalisé |
| `is_absolute` | boolean | Chemin normalisé |
