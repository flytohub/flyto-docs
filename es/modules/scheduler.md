# Scheduler

Cron parsing, delay, and interval calculations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Analizar Expresión Cron](#analizar-expresión-cron) | Analizar expresión cron y calcular las próximas N horas de ejecución |
| [Retraso / Pausa](#retraso--pausa) | Pausar la ejecución durante una duración especificada |
| [Calcular Intervalo](#calcular-intervalo) | Calcular el tiempo de intervalo y las próximas ocurrencias |

## Modules

### Analizar Expresión Cron

`scheduler.cron_parse`

Analizar expresión cron y calcular las próximas N horas de ejecución

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Expresión cron estándar de 5 campos (ej. "0 9 * * MON-FRI") |
| `count` | number | No | `5` | Número de próximas horas de ejecución a calcular |
| `timezone` | string | No | `0` | Zona horaria para el cálculo (desplazamiento UTC como "+8" o "-5", por defecto "0" para UTC) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `expression` | string | La expresión cron analizada |
| `description` | string | Descripción del horario en lenguaje natural |
| `next_runs` | array | Lista de próximas horas de ejecución como cadenas de fecha y hora ISO |
| `is_valid` | boolean | Si la expresión es válida |

### Retraso / Pausa

`scheduler.delay`

Pausar la ejecución durante una duración especificada

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | Número de segundos para retrasar |
| `message` | string | No | - | Mensaje opcional para incluir en el resultado |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `delayed_seconds` | number | Número real de segundos retrasados |
| `message` | string | El mensaje proporcionado o por defecto |

### Calcular Intervalo

`scheduler.interval`

Calcular el tiempo de intervalo y las próximas ocurrencias

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | No | `0` | Componente de segundos del intervalo |
| `minutes` | number | No | `0` | Componente de minutos del intervalo |
| `hours` | number | No | `0` | Componente de horas del intervalo |
| `start_time` | string | No | - | Hora de inicio en formato ISO 8601 (por defecto: ahora) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `interval_seconds` | number | Intervalo total en segundos |
| `next_runs` | array | Lista de las próximas 5 horas de ejecución como cadenas de fecha y hora ISO |
| `human_readable` | string | Descripción del intervalo en lenguaje natural |
