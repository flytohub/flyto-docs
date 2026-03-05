# Scheduler

Cron parsing, delay, and interval calculations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Cron-Ausdruck analysieren](#cron-ausdruck-analysieren) | Cron-Ausdruck analysieren und nächste N Ausführungszeiten berechnen |
| [Verzögerung / Schlaf](#verzögerung--schlaf) | Ausführung für eine bestimmte Dauer pausieren |
| [Intervall berechnen](#intervall-berechnen) | Intervallzeit und nächste Vorkommen berechnen |

## Modules

### Cron-Ausdruck analysieren

`scheduler.cron_parse`

Cron-Ausdruck analysieren und nächste N Ausführungszeiten berechnen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Standard 5-Feld-Cron-Ausdruck (z.B. "0 9 * * MON-FRI") |
| `count` | number | No | `5` | Anzahl der nächsten Ausführungszeiten, die berechnet werden sollen |
| `timezone` | string | No | `0` | Zeitzone für die Berechnung (UTC-Offset wie "+8" oder "-5", Standard "0" für UTC) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `expression` | string | Der analysierte Cron-Ausdruck |
| `description` | string | Lesbare Beschreibung des Zeitplans |
| `next_runs` | array | Liste der nächsten Ausführungszeiten als ISO-Datetime-Strings |
| `is_valid` | boolean | Ob der Ausdruck gültig ist |

### Verzögerung / Schlaf

`scheduler.delay`

Ausführung für eine bestimmte Dauer pausieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | Anzahl der Sekunden, die verzögert werden sollen |
| `message` | string | No | - | Optionale Nachricht, die im Ergebnis enthalten sein soll |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `delayed_seconds` | number | Tatsächliche Anzahl der verzögerten Sekunden |
| `message` | string | Die angegebene Nachricht oder Standard |

### Intervall berechnen

`scheduler.interval`

Intervallzeit und nächste Vorkommen berechnen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | No | `0` | Intervall-Sekunden-Komponente |
| `minutes` | number | No | `0` | Intervall-Minuten-Komponente |
| `hours` | number | No | `0` | Intervall-Stunden-Komponente |
| `start_time` | string | No | - | Startzeit im ISO 8601 Format (Standard: jetzt) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `interval_seconds` | number | Gesamtintervall in Sekunden |
| `next_runs` | array | Liste der nächsten 5 Ausführungszeiten als ISO-Datetime-Strings |
| `human_readable` | string | Lesbare Intervallbeschreibung |
