# Scheduler

Cron parsing, delay, and interval calculations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Analizza Espressione Cron](#analizza-espressione-cron) | Analizza l'espressione cron e calcola le prossime N esecuzioni |
| [Ritardo / Pausa](#ritardo--pausa) | Sospendi l'esecuzione per una durata specificata |
| [Calcola Intervallo](#calcola-intervallo) | Calcola il tempo dell'intervallo e le prossime occorrenze |

## Modules

### Analizza Espressione Cron

`scheduler.cron_parse`

Analizza l'espressione cron e calcola le prossime N esecuzioni

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Espressione cron standard a 5 campi (es. "0 9 * * MON-FRI") |
| `count` | number | No | `5` | Numero delle prossime esecuzioni da calcolare |
| `timezone` | string | No | `0` | Fuso orario per il calcolo (offset UTC come "+8" o "-5", predefinito "0" per UTC) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `expression` | string | L'espressione cron analizzata |
| `description` | string | Descrizione leggibile del programma |
| `next_runs` | array | Elenco delle prossime esecuzioni come stringhe datetime ISO |
| `is_valid` | boolean | Se l'espressione è valida |

### Ritardo / Pausa

`scheduler.delay`

Sospendi l'esecuzione per una durata specificata

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | Numero di secondi di ritardo |
| `message` | string | No | - | Messaggio opzionale da includere nel risultato |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `delayed_seconds` | number | Numero effettivo di secondi di ritardo |
| `message` | string | Il messaggio fornito o predefinito |

### Calcola Intervallo

`scheduler.interval`

Calcola il tempo dell'intervallo e le prossime occorrenze

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | No | `0` | Componente secondi dell'intervallo |
| `minutes` | number | No | `0` | Componente minuti dell'intervallo |
| `hours` | number | No | `0` | Componente ore dell'intervallo |
| `start_time` | string | No | - | Ora di inizio in formato ISO 8601 (predefinito: ora) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `interval_seconds` | number | Intervallo totale in secondi |
| `next_runs` | array | Elenco delle prossime 5 esecuzioni come stringhe datetime ISO |
| `human_readable` | string | Descrizione dell'intervallo leggibile |
