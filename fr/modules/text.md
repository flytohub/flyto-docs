# Text

Text analysis: word count, encoding detection, email/URL/number extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [Nombre de caractères](#nombre-de-caractères) | Compter les caractères dans le texte |
| [Détecter l'encodage](#détecter-l'encodage) | Détecter l'encodage du texte |
| [Extraire les e-mails](#extraire-les-e-mails) | Extraire toutes les adresses e-mail du texte |
| [Extraire les nombres](#extraire-les-nombres) | Extraire tous les nombres du texte |
| [Extraire les URLs](#extraire-les-urls) | Extraire toutes les URLs du texte |
| [Nombre de mots](#nombre-de-mots) | Compter les mots dans le texte |

## Modules

### Nombre de caractères

`text.char_count`

Compter les caractères dans le texte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texte à analyser |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total` | number | Texte à analyser |
| `without_spaces` | number | Nombre total de caractères |
| `letters` | number | Nombre total de caractères |
| `digits` | number | Compter sans les espaces |
| `spaces` | number | Nombre de lettres |
| `lines` | number | Nombre de chiffres |

### Détecter l'encodage

`text.detect_encoding`

Détecter l'encodage du texte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texte ou octets pour détecter l'encodage |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `encoding` | string | Texte ou octets pour détecter l'encodage |
| `confidence` | number | Encodage détecté |
| `is_ascii` | boolean | Encodage détecté |
| `has_bom` | boolean | Score de confiance (0-1) |

### Extraire les e-mails

`text.extract_emails`

Extraire toutes les adresses e-mail du texte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texte pour extraire les e-mails |
| `unique` | boolean | No | `True` | Texte pour extraire les e-mails |
| `lowercase` | boolean | No | `True` | Retourner uniquement les e-mails uniques |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `emails` | array | Convertir les e-mails en minuscules |
| `count` | number | Liste des e-mails extraits |
| `domains` | array | Liste des e-mails extraits |

### Extraire les nombres

`text.extract_numbers`

Extraire tous les nombres du texte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texte pour extraire les nombres |
| `include_decimals` | boolean | No | `True` | Texte pour extraire les nombres |
| `include_negative` | boolean | No | `True` | Inclure les nombres décimaux |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `numbers` | array | Inclure les nombres négatifs |
| `count` | number | Liste des nombres extraits |
| `sum` | number | Liste des nombres extraits |
| `min` | number | Nombre de nombres trouvés |
| `max` | number | Somme de tous les nombres |

### Extraire les URLs

`text.extract_urls`

Extraire toutes les URLs du texte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texte pour extraire les URLs |
| `unique` | boolean | No | `True` | Texte pour extraire les URLs |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `urls` | array | Retourner uniquement les URLs uniques |
| `count` | number | Liste des URLs extraites |

### Nombre de mots

`text.word_count`

Compter les mots dans le texte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texte à analyser |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `word_count` | number | Texte à analyser |
| `unique_words` | number | Nombre total de mots |
| `sentence_count` | number | Nombre total de mots |
| `paragraph_count` | number | Nombre de mots uniques |
| `avg_word_length` | number | Nombre approximatif de phrases |
