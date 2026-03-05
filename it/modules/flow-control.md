# Flow Control

Branching, loops, parallelism, subflows, triggers, and error handling.

**24 modules**

| Module | Description |
|--------|-------------|
| [Elaborazione Lotti](#elaborazione-lotti) | Elabora gli elementi in lotti con dimensioni configurabili |
| [Diramazione](#diramazione) | Ramificazione condizionale basata su valutazione espressione |
| [Punto di interruzione](#punto-di-interruzione) | Metti in pausa esecuzione workflow per approvazione o input umano |
| [Interruttore](#interruttore) | Schema di interruttore per prevenire guasti a cascata |
| [Contenitore](#contenitore) | Container subflow embedded per organizzare workflow complessi |
| [Antirimbalzo](#antirimbalzo) | Esecuzione debounce per prevenire chiamate ripetute rapide |
| [Fine](#fine) | Nodo fine workflow esplicito |
| [Gestore Errori](#gestore-errori) | Cattura e gestisce errori dai nodi a monte |
| [Attivazione Flusso di Lavoro Errore](#attivazione-flusso-di-lavoro-errore) | Punto di ingresso per flussi di lavoro di errore - attivato quando un altro flusso di lavoro fallisce |
| [Per Ogni](#per-ogni) | Itera su una lista ed esegui passaggi per ogni elemento |
| [Biforcazione](#biforcazione) | Dividi esecuzione in branch paralleli |
| [Vai a](#vai-a) | Salto incondizionato a un altro passaggio |
| [Invoca flusso di lavoro](#invoca-flusso-di-lavoro) | Esegui un file di flusso di lavoro esterno |
| [Unisci](#unisci) | Attendi completamento branch paralleli |
| [Ciclo](#ciclo) | Ripeti passaggi N volte usando routing porta output |
| [Unisci](#unisci) | Unisci input multipli in output singolo |
| [Parallelo](#parallelo) | Esegui più attività in parallelo con diverse strategie |
| [Limite di Velocità](#limite-di-velocità) | Limita l'esecuzione usando il token bucket o la finestra mobile |
| [Riprova](#riprova) | Riprova le operazioni fallite con backoff configurabile |
| [Inizio](#inizio) | Nodo inizio workflow esplicito |
| [Sottoflusso](#sottoflusso) | Riferisci ed esegui workflow esterno |
| [Interruttore](#interruttore) | Ramificazione multipla basata su corrispondenza valore |
| [Limita](#limita) | Limita la frequenza di esecuzione con intervallo minimo |
| [Innesco](#innesco) | Punto ingresso workflow - manuale, webhook, pianificato o evento |

## Modules

### Elaborazione Lotti

`flow.batch`

Elabora gli elementi in lotti con dimensioni configurabili

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `batch_size` | number | Yes | `10` | Numero di elementi per lotto |
| `delay_ms` | number | No | `0` | Millisecondi di attesa tra i lotti (per limitazione del tasso) |
| `continue_on_error` | boolean | No | `False` | Continua a elaborare i lotti rimanenti se uno fallisce |
| `parallel_batches` | number | No | `1` | Continua a elaborare i lotti rimanenti se uno fallisce |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Numero di lotti da elaborare in parallelo (1 per sequenziale) |
| `batch` | array | Evento per instradamento (lotto/completato/errore) |
| `batch_index` | number | Evento per instradamento (lotto/completato/errore) |
| `total_batches` | number | Elementi del lotto corrente |
| `total_items` | number | Indice del lotto corrente (basato su 0) |
| `is_last_batch` | boolean | Numero totale di lotti |
| `progress` | object | Numero totale di elementi |

**Example:** Example

```yaml
items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
batch_size: 10
```

**Example:** Example

```yaml
items: ${input.records}
batch_size: 100
delay_ms: 1000
```

**Example:** Example

```yaml
items: ${input.data}
batch_size: 50
parallel_batches: 3
continue_on_error: true
```

### Diramazione

`flow.branch`

Ramificazione condizionale basata su valutazione espressione

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | string | Yes | - | Expression to evaluate (supports ==, !=, >, <, >=, <=, contains) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento routing (true/false/error) |
| `outputs` | object | Valori output per porta |
| `result` | boolean | Risultato branch |
| `condition` | string | Valore condizione |
| `resolved_condition` | string | Risultato valutazione condizione |

**Example:** Example

```yaml
condition: ${search_step.count} > 0
```

**Example:** Example

```yaml
condition: ${api_call.status} == success
```

### Punto di interruzione

`flow.breakpoint`

Metti in pausa esecuzione workflow per approvazione o input umano

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | No | `Approval Required` | Title displayed to approvers |
| `description` | string | No | - | Optional description text |
| `timeout_seconds` | number | No | `0` | Maximum wait time (0 for no timeout) |
| `required_approvers` | array | Yes | - | Array of data items to process |
| `approval_mode` | select (`single`, `all`, `majority`, `first`) | No | `single` | How approvals are counted |
| `custom_fields` | array | Yes | - | Array of data items to process |
| `include_context` | boolean | No | `True` | Whether to include execution context |
| `auto_approve_condition` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento routing (approved/rejected/timeout) |
| `breakpoint_id` | string | ID Breakpoint |
| `status` | string | Stato |
| `approved_by` | array | Approvato da |
| `rejected_by` | array | Rifiutato da |
| `custom_inputs` | object | Valori input personalizzati |
| `comments` | array | Commenti revisione |
| `resolved_at` | string | Ora risoluzione |
| `wait_duration_ms` | integer | Durata attesa (ms) |

**Example:** Example

```yaml
title: Approve data export
description: Please review and approve the data export
```

**Example:** Example

```yaml
title: Manager Approval Required
description: Large transaction requires manager approval
required_approvers: ["manager@example.com"]
timeout_seconds: 3600
```

**Example:** Example

```yaml
title: Adjustment Required
custom_fields: [{"name": "reason", "label": "Reason", "type": "text", "required": true}, {"name": "amount", "label": "Amount", "type": "number", "required": true}]
```

### Interruttore

`flow.circuit_breaker`

Schema di interruttore per prevenire guasti a cascata

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `failure_threshold` | number | Yes | `5` | Numero di guasti prima di aprire il circuito |
| `reset_timeout_ms` | number | No | `60000` | Tempo in millisecondi prima che il circuito passi a semiaperto |
| `half_open_max` | number | No | `1` | Numero massimo di richieste consentite in stato semiaperto |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento per il routing (consentito/rifiutato/semiaperto) |
| `state` | string | Stato del circuito (chiuso/aperto/semiaperto) |
| `failure_count` | number | Numero di guasti consecutivi |
| `last_failure_time_ms` | number | Timestamp dell'ultimo guasto in millisecondi |
| `time_until_half_open_ms` | number | Millisecondi fino al passaggio del circuito a semiaperto |

**Example:** Example

```yaml
failure_threshold: 5
reset_timeout_ms: 60000
```

**Example:** Example

```yaml
failure_threshold: 2
reset_timeout_ms: 10000
half_open_max: 1
```

**Example:** Example

```yaml
failure_threshold: 20
reset_timeout_ms: 120000
half_open_max: 3
```

### Contenitore

`flow.container`

Container subflow embedded per organizzare workflow complessi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `subflow` | object | No | `{'nodes': [], 'edges': []}` | Embedded workflow definition with nodes and edges |
| `inherit_context` | boolean | No | `True` | Whether to inherit variables from parent workflow |
| `isolated_variables` | array | Yes | - | Array of data items to process |
| `export_variables` | array | Yes | - | Array of data items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento routing (success/error) |
| `outputs` | object | Valori output per porta |
| `subflow_result` | object | Risultato subflow |
| `exported_variables` | object | Variabili esportate |
| `node_count` | integer | Conteggio nodi |
| `execution_time_ms` | number | Tempo esecuzione (ms) |

**Example:** Example

```yaml
subflow: {"nodes": [], "edges": []}
inherit_context: true
```

**Example:** Example

```yaml
subflow: {"nodes": [], "edges": []}
inherit_context: false
```

### Antirimbalzo

`flow.debounce`

Esecuzione debounce per prevenire chiamate ripetute rapide

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `delay_ms` | number | Yes | - | Tempo di attesa dopo l'ultima chiamata prima dell'esecuzione |
| `leading` | boolean | No | `False` | Esegui sul bordo iniziale (la prima chiamata attiva immediatamente) |
| `trailing` | boolean | No | `True` | Esegui sul bordo finale (dopo la scadenza del ritardo) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento per il routing (eseguito/debounced) |
| `last_call_ms` | number | Timestamp dell'ultima chiamata in millisecondi |
| `calls_debounced` | number | Numero di chiamate debounce dall'ultima esecuzione |
| `time_since_last_ms` | number | Tempo trascorso dall'ultima chiamata in millisecondi |
| `edge` | string | Quale bordo ha attivato l'esecuzione (iniziale/finale) |

**Example:** Example

```yaml
delay_ms: 500
```

**Example:** Example

```yaml
delay_ms: 1000
leading: true
trailing: false
```

**Example:** Example

```yaml
delay_ms: 2000
leading: true
trailing: true
```

### Fine

`flow.end`

Nodo fine workflow esplicito

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `success_message` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento routing (__end__) |
| `ended_at` | string | Ora fine |
| `workflow_result` | object | Risultato workflow |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
output_mapping: {"result": "${process.output}", "status": "success"}
```

### Gestore Errori

`flow.error_handle`

Cattura e gestisce errori dai nodi a monte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | `log_and_continue` | Cosa fare con l'errore |
| `include_traceback` | boolean | No | `True` | Includi il traceback completo nell'output |
| `error_code_mapping` | object | No | `{}` | Includi il traceback completo nell'output |
| `fallback_value` | any | No | - | Mappa i codici di errore a azioni personalizzate |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Valore da usare quando l'errore è soppresso |
| `outputs` | object | Evento per instradamento (gestito/escalation) |
| `error_info` | object | Evento per instradamento (gestito/escalation) |
| `action_taken` | string | Azione intrapresa |

**Example:** Example

```yaml
action: log_and_continue
include_traceback: true
```

**Example:** Example

```yaml
action: suppress
fallback_value: {"status": "skipped", "reason": "upstream_error"}
```

**Example:** Example

```yaml
action: transform
error_code_mapping: {"TIMEOUT": {"retry": true, "delay": 5000}, "NOT_FOUND": {"skip": true}}
```

### Attivazione Flusso di Lavoro Errore

`flow.error_workflow_trigger`

Punto di ingresso per flussi di lavoro di errore - attivato quando un altro flusso di lavoro fallisce

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `description` | string | No | - | Description of this error workflow |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Descrizione di questo flusso di lavoro di errore |
| `error_context` | object | Evento per instradamento (attivato) |
| `triggered_at` | string | Timestamp ISO quando il flusso di lavoro di errore è stato attivato |

**Example:** Example

```yaml
description: Send Slack notification on workflow failure
```

**Example:** Example

```yaml
description: Log all workflow errors to monitoring system
```

### Per Ogni

`flow.foreach`

Itera su una lista ed esegui passaggi per ogni elemento

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | string | Yes | - | Lista di elementi su cui iterare (supporta riferimento ${variable}) |
| `steps` | array | No | - | Passaggi da eseguire per ogni elemento |
| `item_var` | string | No | `item` | Nome variabile per elemento corrente |
| `index_var` | string | No | `index` | Nome variabile per indice corrente |
| `output_mode` | string | No | `collect` | Modalita raccolta risultati |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento routing (iterate/done) |
| `__set_context` | object | Imposta contesto |
| `outputs` | object | Valori output per porta |
| `iteration` | number | Indice iterazione corrente |
| `status` | string | Stato operazione |
| `results` | array | Risultati raccolti |
| `count` | number | Conteggio totale elementi |

**Example:** Example

```yaml
items: ${steps.csv.result.data}
```

**Example:** Example

```yaml
items: ${search_results}
item_var: element
steps: [{"module": "element.text", "params": {"element_id": "${element}"}, "output": "text"}]
```

### Biforcazione

`flow.fork`

Dividi esecuzione in branch paralleli

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `branch_count` | number | No | `2` | Number of parallel branches |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento routing (fork/error) |
| `input_data` | any | Dati input |
| `branch_count` | integer | Conteggio branch |

**Example:** Example

```yaml
branch_count: 2
```

**Example:** Example

```yaml
branch_count: 3
```

### Vai a

`flow.goto`

Salto incondizionato a un altro passaggio

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `target` | string | Yes | - | Step ID to jump to |
| `max_iterations` | number | No | `100` | Maximum number of iterations (prevents infinite loops) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento routing (goto) |
| `target` | string | Passaggio target |
| `iteration` | number | Conteggio iterazioni |

**Example:** Example

```yaml
target: fetch_next_page
max_iterations: 10
```

**Example:** Example

```yaml
target: cleanup_step
```

### Invoca flusso di lavoro

`flow.invoke`

Esegui un file di flusso di lavoro esterno

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `workflow_source` | string | Yes | - | File path to workflow YAML or inline YAML content |
| `workflow_params` | object | Yes | - | Parameters to pass to the invoked workflow |
| `timeout_seconds` | number | No | `300` | Maximum execution time in seconds |
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Parametri da passare al flusso di lavoro invocato |
| `result` | any | Tempo massimo di esecuzione in secondi |
| `workflow_id` | string | Evento per il routing (successo/errore) |
| `execution_time_ms` | number | Risultato dell'esecuzione del flusso di lavoro |

**Example:** Example

```yaml
workflow_source: workflows/validate_order.yaml
workflow_params: {"order_id": "${input.order_id}"}
timeout_seconds: 60
```

**Example:** Example

```yaml
workflow_source: workflows/process_data.yaml
workflow_params: {"data": "${input.data}"}
output_mapping: {"processed": "result.data"}
```

### Unisci

`flow.join`

Attendi completamento branch paralleli

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`all`, `any`, `first`) | No | `all` | How to handle multiple inputs |
| `input_count` | number | No | `2` | Number of ports |
| `timeout` | number | No | `60000` | Maximum time to wait in milliseconds |
| `cancel_pending` | boolean | No | `True` | Cancel pending branches when using first strategy |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento routing (joined/timeout/error) |
| `joined_data` | array | Dati uniti |
| `completed_count` | integer | Conteggio branch completati |
| `strategy` | string | Strategia join |

**Example:** Example

```yaml
strategy: all
input_count: 2
timeout_ms: 30000
```

**Example:** Example

```yaml
strategy: first
input_count: 3
cancel_pending: true
```

### Ciclo

`flow.loop`

Ripeti passaggi N volte usando routing porta output

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `times` | number | Yes | `1` | Numero di ripetizioni |
| `target` | string | No | - | Passaggio target (deprecato) |
| `steps` | array | No | - | Passaggi da eseguire per ogni iterazione |
| `index_var` | string | No | `index` | Nome variabile per indice corrente |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento routing (iterate/done) |
| `outputs` | object | Valori output per porta |
| `iteration` | number | Iterazione corrente |
| `status` | string | Stato operazione |
| `results` | array | Risultati raccolti |
| `count` | number | Iterazioni totali |

**Example:** Example

```yaml
times: 3
```

**Example:** Example

```yaml
times: 5
steps: [{"module": "browser.click", "params": {"selector": ".next"}}]
```

### Unisci

`flow.merge`

Unisci input multipli in output singolo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`first`, `last`, `all`) | No | `all` | How to merge multiple inputs |
| `input_count` | number | No | `2` | Number of ports |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento routing (merged/error) |
| `merged_data` | any | Dati uniti |
| `input_count` | integer | Conteggio input |
| `strategy` | string | Strategia merge |

**Example:** Example

```yaml
strategy: all
input_count: 3
```

**Example:** Example

```yaml
strategy: first
input_count: 2
```

### Parallelo

`flow.parallel`

Esegui più attività in parallelo con diverse strategie

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tasks` | array | Yes | - | Array di definizioni di attività da eseguire in parallelo |
| `mode` | string | No | `all` | Array di definizioni di attività da eseguire in parallelo |
| `timeout_ms` | number | No | `60000` | Maximum wait time in milliseconds |
| `fail_fast` | boolean | No | `True` | Interrompe tutte le attività al primo fallimento (solo per modalità=all) |
| `concurrency_limit` | number | No | `0` | Interrompe tutte le attività al primo fallimento (solo per modalità=all) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Numero massimo di attività concorrenti (0 per illimitato) |
| `results` | array | Evento per il routing (completato/parziale/errore) |
| `completed_count` | number | Evento per instradamento (completato/parziale/errore) |
| `failed_count` | number | Risultati da tutte le attività |
| `total_count` | number | Numero di attività completate con successo |
| `mode` | string | Numero di attività fallite |
| `duration_ms` | number | Numero totale di attività |

**Example:** Example

```yaml
tasks: [{"module": "http.get", "params": {"url": "https://api1.example.com"}}, {"module": "http.get", "params": {"url": "https://api2.example.com"}}]
mode: all
timeout_ms: 30000
```

**Example:** Example

```yaml
tasks: [{"module": "http.get", "params": {"url": "https://mirror1.example.com"}}, {"module": "http.get", "params": {"url": "https://mirror2.example.com"}}]
mode: race
```

**Example:** Example

```yaml
tasks: [{"module": "http.get", "params": {"url": "https://api1.example.com"}}, {"module": "http.get", "params": {"url": "https://might-fail.example.com"}}]
mode: settle
```

### Limite di Velocità

`flow.rate_limit`

Limita l'esecuzione usando il token bucket o la finestra mobile

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_requests` | number | Yes | - | Numero massimo di richieste consentite per finestra |
| `window_ms` | number | No | `60000` | Finestra temporale in millisecondi |
| `strategy` | string | No | `token_bucket` | Strategia di limitazione della velocità (token_bucket o finestra_mobile) |
| `queue_overflow` | string | No | `wait` | Comportamento quando la coda è piena (scarta o errore) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento per il routing (consentito/limitato) |
| `tokens_remaining` | number | Token rimanenti nel bucket |
| `window_reset_ms` | number | Millisecondi fino al reset della finestra |
| `requests_in_window` | number | Numero di richieste nella finestra corrente |
| `wait_ms` | number | Millisecondi di attesa prima della prossima richiesta consentita |

**Example:** Example

```yaml
max_requests: 100
window_ms: 60000
strategy: token_bucket
```

**Example:** Example

```yaml
max_requests: 10
window_ms: 1000
strategy: fixed_window
queue_overflow: error
```

**Example:** Example

```yaml
max_requests: 50
window_ms: 30000
strategy: sliding_window
queue_overflow: wait
```

### Riprova

`flow.retry`

Riprova le operazioni fallite con backoff configurabile

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_retries` | number | Yes | `3` | Numero massimo di tentativi di riprova |
| `initial_delay_ms` | number | No | `1000` | Ritardo iniziale prima del primo tentativo in millisecondi |
| `backoff_multiplier` | number | No | `2.0` | Moltiplicatore per backoff esponenziale |
| `max_delay_ms` | number | No | `30000` | Ritardo massimo tra i tentativi in millisecondi |
| `retry_on_errors` | array | No | `[]` | Tipi di errore su cui riprovare (vuoto significa riprovare su tutti) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento per instradamento (riprova/successo/fallito) |
| `attempt` | number | Numero di tentativo corrente |
| `max_retries` | number | Numero massimo di tentativi configurati |
| `delay_ms` | number | Ritardo prima del prossimo tentativo in millisecondi |
| `total_elapsed_ms` | number | Tempo totale trascorso in millisecondi |
| `last_error` | object | Ultimo messaggio di errore |

**Example:** Example

```yaml
max_retries: 3
```

**Example:** Example

```yaml
max_retries: 10
initial_delay_ms: 500
backoff_multiplier: 1.5
max_delay_ms: 10000
```

**Example:** Example

```yaml
max_retries: 5
initial_delay_ms: 2000
retry_on_errors: ["TIMEOUT", "RATE_LIMIT", "429", "503"]
```

### Inizio

`flow.start`

Nodo inizio workflow esplicito

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento routing (start) |
| `started_at` | string | Ora inizio |
| `workflow_id` | string | ID Workflow |

**Example:** Example

```yaml
```

### Sottoflusso

`flow.subflow`

Riferisci ed esegui workflow esterno

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `workflow_ref` | string | Yes | - | Text content to process |
| `execution_mode` | select (`inline`, `spawn`, `async`) | No | `inline` | Select an option |
| `input_mapping` | object | Yes | - | Data object to process |
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `timeout` | number | No | `300000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento routing (success/error) |
| `result` | any | Risultato esecuzione |
| `execution_id` | string | ID Esecuzione |
| `workflow_ref` | string | Riferimento workflow |

**Example:** Example

```yaml
workflow_ref: workflows/validate_order
execution_mode: inline
input_mapping: {"order_data": "${input.order}"}
output_mapping: {"validation_result": "result"}
```

**Example:** Example

```yaml
workflow_ref: workflows/send_notifications
execution_mode: spawn
```

### Interruttore

`flow.switch`

Ramificazione multipla basata su corrispondenza valore

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Value to match against cases (supports variable reference) |
| `cases` | array | Yes | `[{'id': 'case_1', 'value': 'case1', 'label': 'Case 1'}]` | List of case definitions |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento routing (case:valore o default) |
| `outputs` | object | Valori output per porta |
| `matched_case` | string | Caso corrispondente |
| `value` | any | Valore corrispondente |

**Example:** Example

```yaml
expression: ${api_response.status}
cases: [{"id": "case-1", "value": "success", "label": "Success"}, {"id": "case-2", "value": "pending", "label": "Pending"}, {"id": "case-3", "value": "error", "label": "Error"}]
```

**Example:** Example

```yaml
expression: ${input.type}
cases: [{"id": "img", "value": "image", "label": "Image"}, {"id": "vid", "value": "video", "label": "Video"}, {"id": "txt", "value": "text", "label": "Text"}]
```

### Limita

`flow.throttle`

Limita la frequenza di esecuzione con intervallo minimo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `interval_ms` | number | Yes | - | Tempo minimo tra le esecuzioni in millisecondi |
| `leading` | boolean | No | `True` | Esegui sul bordo iniziale (la prima chiamata passa immediatamente) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento per instradamento (eseguito/limitato) |
| `last_execution_ms` | number | Timestamp dell'ultima esecuzione consentita |
| `calls_throttled` | number | Numero di chiamate limitate dall'ultima esecuzione |
| `time_since_last_ms` | number | Tempo trascorso dall'ultima esecuzione in millisecondi |
| `remaining_ms` | number | Millisecondi rimanenti fino alla prossima esecuzione consentita |

**Example:** Example

```yaml
interval_ms: 1000
```

**Example:** Example

```yaml
interval_ms: 200
leading: true
```

**Example:** Example

```yaml
interval_ms: 5000
leading: false
```

### Innesco

`flow.trigger`

Punto ingresso workflow - manuale, webhook, pianificato o evento

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `trigger_type` | select (`manual`, `webhook`, `schedule`, `event`, `mcp`, `polling`) | No | `manual` | Type of trigger event |
| `webhook_path` | string | No | - | URL path for webhook trigger |
| `schedule` | string | No | - | Cron expression for scheduled trigger |
| `event_name` | string | No | - | Event name to listen for |
| `tool_name` | string | No | - | MCP tool name exposed to AI agents |
| `tool_description` | string | No | - | Description shown to AI agents for this tool |
| `poll_url` | string | No | - | API endpoint to poll for changes |
| `poll_interval` | number | No | `300` | How often to check for changes (minimum 60 seconds) |
| `poll_method` | select (`GET`, `POST`) | No | `GET` | HTTP method for polling request |
| `poll_headers` | object | No | `{}` | Custom headers for polling request (e.g. API keys) |
| `poll_body` | object | No | `{}` | Request body for POST polling |
| `dedup_key` | string | No | - | JSON path to extract a unique value for deduplication |
| `config` | object | No | - | Custom trigger config (for composites: LINE BOT, Telegram, Slack, etc.) |
| `description` | string | No | - | Optional description text |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento routing (triggered/error) |
| `trigger_data` | object | Dati trigger |
| `trigger_type` | string | Tipo trigger |
| `triggered_at` | string | Ora attivazione |

**Example:** Example

```yaml
trigger_type: manual
```

**Example:** Example

```yaml
trigger_type: webhook
webhook_path: /api/webhooks/order-created
```

**Example:** Example

```yaml
trigger_type: schedule
schedule: 0 * * * *
```

**Example:** Example

```yaml
trigger_type: mcp
tool_name: send-report
tool_description: Send a weekly summary report
```

**Example:** Example

```yaml
trigger_type: polling
poll_url: https://api.example.com/items
poll_interval: 300
dedup_key: $.data[0].id
```
