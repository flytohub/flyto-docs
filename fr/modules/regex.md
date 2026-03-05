# Regex

Pattern matching: match, extract, replace, split, and test.

**5 modules**

| Module | Description |
|--------|-------------|
| [Extraction Regex](#extraction-regex) | Extraire des groupes nommés du texte |
| [Correspondance Regex](#correspondance-regex) | Trouver toutes les correspondances d'un motif dans le texte |
| [Remplacement Regex](#remplacement-regex) | Remplacer les correspondances de motifs dans le texte |
| [Division Regex](#division-regex) | Diviser le texte par un motif regex |
| [Test Regex](#test-regex) | Tester si la chaîne correspond à un motif regex |

## Modules

### Extraction Regex

`regex.extract`

Extraire des groupes nommés du texte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texte à extraire |
| `pattern` | string | Yes | - | Texte à extraire |
| `ignore_case` | boolean | No | `False` | Correspondance insensible à la casse |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | Correspondance insensible à la casse |
| `matched` | boolean | Groupes nommés extraits |
| `full_match` | string | Groupes nommés extraits |

### Correspondance Regex

`regex.match`

Trouver toutes les correspondances d'un motif dans le texte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texte à rechercher |
| `pattern` | string | Yes | - | Texte à rechercher |
| `ignore_case` | boolean | No | `False` | Motif d'expression régulière |
| `first_only` | boolean | No | `False` | Correspondance insensible à la casse |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `matches` | array | Retourne seulement la première correspondance |
| `count` | number | Liste des correspondances |
| `groups` | array | Liste des correspondances |

### Remplacement Regex

`regex.replace`

Remplacer les correspondances de motifs dans le texte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texte à traiter |
| `pattern` | string | Yes | - | Texte à traiter |
| `replacement` | string | Yes | - | Motif d'expression régulière |
| `ignore_case` | boolean | No | `False` | Texte de remplacement (supporte les rétro-références) |
| `count` | number | No | `0` | Correspondance insensible à la casse |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Remplacements maximum (0 = illimité) |
| `replacements` | number | Texte avec remplacements |
| `original` | string | Texte avec remplacements |

### Division Regex

`regex.split`

Diviser le texte par un motif regex

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texte à diviser |
| `pattern` | string | Yes | - | Texte à diviser |
| `ignore_case` | boolean | No | `False` | Motif d'expression régulière pour le délimiteur |
| `max_split` | number | No | `0` | Correspondance insensible à la casse |
| `remove_empty` | boolean | No | `False` | Nombre maximum de divisions (0 = illimité) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | Supprimer les chaînes vides du résultat |
| `count` | number | Parties divisées |

### Test Regex

`regex.test`

Tester si la chaîne correspond à un motif regex

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texte à tester |
| `pattern` | string | Yes | - | Texte à tester |
| `ignore_case` | boolean | No | `False` | Motif d'expression régulière |
| `full_match` | boolean | No | `False` | Correspondance insensible à la casse |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | Exiger que le motif corresponde à toute la chaîne |
| `pattern` | string | Si le motif correspond |
