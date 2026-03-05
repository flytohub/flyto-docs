# Utilities

Datetime operations, delay, MD5 hash, and random utilities.

**9 modules**

| Module | Description |
|--------|-------------|
| [Ajouter du temps](#ajouter-du-temps) | Ajouter du temps a une date/heure |
| [Formater Date/Heure](#formater-dateheure) | Formater une date/heure en chaine |
| [Analyser Date/Heure](#analyser-dateheure) | Analyser une chaine en date/heure |
| [Soustraire du temps](#soustraire-du-temps) | Soustraire du temps d'une date/heure |
| [Date/Heure actuelle](#dateheure-actuelle) | Obtenir la date et l'heure actuelles |
| [Delai/Pause](#delaipause) | Mettre en pause l'execution du workflow pour une duree specifiee |
| [Hachage MD5](#hachage-md5) | Calculer le hachage MD5 du texte |
| [Nombre aleatoire](#nombre-aleatoire) | Generer un nombre aleatoire dans une plage |
| [Chaine aleatoire](#chaine-aleatoire) | Generer une chaine aleatoire ou UUID |

## Modules

### Ajouter du temps

`datetime.add`

Ajouter du temps a une date/heure

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `days` | number | No | `0` | Number of days to add (positive) or subtract (negative) |
| `hours` | number | No | `0` | Number of hours to add (positive) or subtract (negative) |
| `minutes` | number | No | `0` | Number of minutes to add (positive) or subtract (negative) |
| `seconds` | number | No | `0` | Number of seconds to add (positive) or subtract (negative) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Resultat de l'operation |
| `timestamp` | number | Resultat de l'operation |

**Example:** Add 7 days

```yaml
datetime: now
days: 7
```

**Example:** Add 2 hours 30 minutes

```yaml
datetime: 2024-01-15T10:00:00
hours: 2
minutes: 30
```

### Formater Date/Heure

`datetime.format`

Formater une date/heure en chaine

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Resultat de l'operation |
| `timestamp` | number | Resultat de l'operation |

**Example:** Format current time

```yaml
datetime: now
format: %Y-%m-%d %H:%M:%S
```

**Example:** Custom date format

```yaml
datetime: 2024-01-15T10:30:00
format: %B %d, %Y
```

### Analyser Date/Heure

`datetime.parse`

Analyser une chaine en date/heure

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime_string` | string | Yes | - | DateTime string to parse (ISO 8601 format recommended) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Resultat de l'operation |
| `timestamp` | number | Resultat de l'operation |
| `year` | number | Resultat de l'operation |
| `month` | number | Horodatage Unix |
| `day` | number | Composant annee |
| `hour` | number | Composant mois |
| `minute` | number | Composant jour |
| `second` | number | Composant heure |

**Example:** Parse ISO format

```yaml
datetime_string: 2024-01-15T10:30:00
```

**Example:** Parse custom format

```yaml
datetime_string: January 15, 2024
format: %B %d, %Y
```

### Soustraire du temps

`datetime.subtract`

Soustraire du temps d'une date/heure

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `days` | number | No | `0` | Number of days to add (positive) or subtract (negative) |
| `hours` | number | No | `0` | Number of hours to add (positive) or subtract (negative) |
| `minutes` | number | No | `0` | Number of minutes to add (positive) or subtract (negative) |
| `seconds` | number | No | `0` | Number of seconds to add (positive) or subtract (negative) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Resultat de l'operation |
| `timestamp` | number | Resultat de l'operation |

**Example:** Subtract 7 days

```yaml
datetime: now
days: 7
```

**Example:** Subtract 1 hour

```yaml
datetime: 2024-01-15T10:00:00
hours: 1
```

### Date/Heure actuelle

`utility.datetime.now`

Obtenir la date et l'heure actuelles

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`iso`, `unix`, `unix_ms`, `date`, `time`, `custom`) | No | `iso` | Format de sortie |
| `custom_format` | string | No | - | Format strftime Python (si format=custom) |
| `timezone` | string | No | `UTC` | Format strftime Python (si format=custom) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Fuseau horaire (defaut: UTC) |
| `datetime` | string | Statut de l'operation (succes/erreur) |
| `timestamp` | number | Statut de l'operation (succes/erreur) |
| `iso` | string | Date/heure formatee |

**Example:** Example

```yaml
format: iso
```

**Example:** Example

```yaml
format: unix
```

### Delai/Pause

`utility.delay`

Mettre en pause l'execution du workflow pour une duree specifiee

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Combien de temps attendre en millisecondes |
| `duration_seconds` | number | No | - | Alternative: duree en secondes |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Alternative: duree en secondes |
| `waited_ms` | number | Statut de l'operation (succes/erreur) |

**Example:** Example

```yaml
duration_seconds: 2
```

**Example:** Example

```yaml
duration_ms: 500
```

### Hachage MD5

`utility.hash.md5`

Calculer le hachage MD5 du texte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Texte a hacher |
| `encoding` | string | No | `utf-8` | Texte a hacher |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Encodage du texte |
| `hash` | string | Encodage du texte |

**Example:** Example

```yaml
text: Hello World
```

### Nombre aleatoire

`utility.random.number`

Generer un nombre aleatoire dans une plage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | Valeur minimum (inclusive) |
| `max` | number | No | `100` | Valeur minimum (inclusive) |
| `decimals` | number | No | `0` | Valeur maximum (inclusive) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Nombre de decimales (0 pour les entiers) |
| `value` | number | Statut de l'operation (succes/erreur) |

**Example:** Example

```yaml
min: 1
max: 100
decimals: 0
```

**Example:** Example

```yaml
min: 0
max: 1
decimals: 2
```

### Chaine aleatoire

`utility.random.string`

Generer une chaine aleatoire ou UUID

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | No | `16` | Longueur de la chaine |
| `charset` | select (`alphanumeric`, `letters`, `lowercase`, `uppercase`, `numbers`, `hex`, `uuid`) | No | `alphanumeric` | Longueur de la chaine |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'operation (succes/erreur) |
| `value` | string | Statut de l'operation (succes/erreur) |

**Example:** Example

```yaml
length: 16
charset: alphanumeric
```

**Example:** Example

```yaml
charset: uuid
```
