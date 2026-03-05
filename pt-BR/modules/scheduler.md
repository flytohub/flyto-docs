# Scheduler

Cron parsing, delay, and interval calculations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Analisar Expressão Cron](#analisar-expressão-cron) | Analisar expressão cron e calcular os próximos N horários de execução |
| [Atraso / Pausa](#atraso--pausa) | Pausar execução por uma duração especificada |
| [Calcular Intervalo](#calcular-intervalo) | Calcular tempo de intervalo e próximas ocorrências |

## Modules

### Analisar Expressão Cron

`scheduler.cron_parse`

Analisar expressão cron e calcular os próximos N horários de execução

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Expressão cron padrão de 5 campos (ex: "0 9 * * SEG-SEX") |
| `count` | number | No | `5` | Número de próximos horários de execução a calcular |
| `timezone` | string | No | `0` | Fuso horário para cálculo (offset UTC como "+8" ou "-5", padrão "0" para UTC) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `expression` | string | A expressão cron analisada |
| `description` | string | Descrição do agendamento em linguagem natural |
| `next_runs` | array | Lista dos próximos horários de execução como strings de data e hora ISO |
| `is_valid` | boolean | Se a expressão é válida |

### Atraso / Pausa

`scheduler.delay`

Pausar execução por uma duração especificada

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | Número de segundos para atrasar |
| `message` | string | No | - | Mensagem opcional para incluir no resultado |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `delayed_seconds` | number | Número real de segundos atrasados |
| `message` | string | A mensagem fornecida ou padrão |

### Calcular Intervalo

`scheduler.interval`

Calcular tempo de intervalo e próximas ocorrências

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | No | `0` | Componente de segundos do intervalo |
| `minutes` | number | No | `0` | Componente de minutos do intervalo |
| `hours` | number | No | `0` | Componente de horas do intervalo |
| `start_time` | string | No | - | Hora de início no formato ISO 8601 (padrão: agora) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `interval_seconds` | number | Intervalo total em segundos |
| `next_runs` | array | Lista das próximas 5 execuções como strings de data e hora ISO |
| `human_readable` | string | Descrição do intervalo em linguagem natural |
