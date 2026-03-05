# Scheduler

Cron parsing, delay, and interval calculations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Analyser l'expression Cron](#analyser-l'expression-cron) | Analyser l'expression cron et calculer les N prochaines exécutions |
| [Délai / Pause](#délai--pause) | Mettre en pause l'exécution pour une durée spécifiée |
| [Calculer l'intervalle](#calculer-l'intervalle) | Calculer le temps d'intervalle et les prochaines occurrences |

## Modules

### Analyser l'expression Cron

`scheduler.cron_parse`

Analyser l'expression cron et calculer les N prochaines exécutions

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Expression cron standard à 5 champs (par ex. "0 9 * * MON-FRI") |
| `count` | number | No | `5` | Nombre de prochaines exécutions à calculer |
| `timezone` | string | No | `0` | Fuseau horaire pour le calcul (décalage UTC comme "+8" ou "-5", par défaut "0" pour UTC) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `expression` | string | L'expression cron analysée |
| `description` | string | Description du calendrier en langage naturel |
| `next_runs` | array | Liste des prochaines exécutions sous forme de chaînes datetime ISO |
| `is_valid` | boolean | Si l'expression est valide |

### Délai / Pause

`scheduler.delay`

Mettre en pause l'exécution pour une durée spécifiée

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | Nombre de secondes de délai |
| `message` | string | No | - | Message optionnel à inclure dans le résultat |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `delayed_seconds` | number | Nombre réel de secondes de délai |
| `message` | string | Le message fourni ou par défaut |

### Calculer l'intervalle

`scheduler.interval`

Calculer le temps d'intervalle et les prochaines occurrences

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | No | `0` | Composant en secondes de l'intervalle |
| `minutes` | number | No | `0` | Composant en minutes de l'intervalle |
| `hours` | number | No | `0` | Composant en heures de l'intervalle |
| `start_time` | string | No | - | Heure de début au format ISO 8601 (par défaut : maintenant) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `interval_seconds` | number | Intervalle total en secondes |
| `next_runs` | array | Liste des 5 prochaines exécutions sous forme de chaînes datetime ISO |
| `human_readable` | string | Description de l'intervalle en langage naturel |
