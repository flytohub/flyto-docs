# Flow Control

Branching, loops, parallelism, subflows, triggers, and error handling.

**24 modules**

| Module | Description |
|--------|-------------|
| [Batch-Verarbeitung](#batch-verarbeitung) | Verarbeite Elemente in konfigurierbaren Batch-Größen |
| [Verzweigung](#verzweigung) | Bedingte Verzweigung basierend auf Ausdrucksauswertung |
| [Haltepunkt](#haltepunkt) | Workflow-Ausführung für menschliche Genehmigung oder Eingabe pausieren |
| [Leistungsschalter](#leistungsschalter) | Circuit-Breaker-Muster zur Vermeidung von Kaskadenfehlern |
| [Container](#container) | Eingebetteter Subflow-Container zum Organisieren komplexer Workflows |
| [Entprellen](#entprellen) | Ausführung verzögern, um schnelle Wiederholungen zu verhindern |
| [Ende](#ende) | Expliziter Workflow-Endknoten |
| [Fehlerbehandler](#fehlerbehandler) | Fängt Fehler von vorgelagerten Knoten ab und behandelt sie |
| [Fehler-Workflow-Auslöser](#fehler-workflow-auslöser) | Einstiegspunkt für Fehler-Workflows - ausgelöst, wenn ein anderer Workflow fehlschlägt |
| [Für jedes](#für-jedes) | Über eine Liste iterieren und Schritte für jedes Element ausführen |
| [Gabelung](#gabelung) | Ausführung in parallele Zweige aufteilen |
| [Gehe zu](#gehe-zu) | Unbedingter Sprung zu einem anderen Schritt |
| [Workflow aufrufen](#workflow-aufrufen) | Eine externe Workflow-Datei ausführen |
| [Zusammenführen](#zusammenführen) | Auf Abschluss paralleler Zweige warten |
| [Schleife](#schleife) | Schritte N-mal mit Ausgabeport-Routing wiederholen |
| [Zusammenführen](#zusammenführen) | Mehrere Eingaben zu einer einzelnen Ausgabe zusammenführen |
| [Parallel](#parallel) | Führe mehrere Aufgaben parallel mit unterschiedlichen Strategien aus |
| [Ratenbegrenzung](#ratenbegrenzung) | Ausführung mit Token-Bucket oder gleitendem Fenster begrenzen |
| [Erneut versuchen](#erneut-versuchen) | Fehlgeschlagene Operationen mit konfigurierbarem Backoff erneut versuchen |
| [Start](#start) | Expliziter Workflow-Startknoten |
| [Teilfluss](#teilfluss) | Externen Workflow referenzieren und ausführen |
| [Schalter](#schalter) | Mehrwegverzweigung basierend auf Wertabgleich |
| [Drosseln](#drosseln) | Ausführungsrate mit minimalem Intervall drosseln |
| [Auslöser](#auslöser) | Workflow-Einstiegspunkt - manuell, Webhook, Zeitplan oder Ereignis |

## Modules

### Batch-Verarbeitung

`flow.batch`

Verarbeite Elemente in konfigurierbaren Batch-Größen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `batch_size` | number | Yes | `10` | Anzahl der Elemente pro Batch |
| `delay_ms` | number | No | `0` | Millisekunden, die zwischen Batches gewartet werden (zur Ratenbegrenzung) |
| `continue_on_error` | boolean | No | `False` | Verbleibende Batches weiterverarbeiten, wenn einer fehlschlägt |
| `parallel_batches` | number | No | `1` | Verbleibende Batches weiterverarbeiten, wenn einer fehlschlägt |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Anzahl der Batches, die parallel verarbeitet werden (1 für sequenziell) |
| `batch` | array | Ereignis für Routing (Batch/abgeschlossen/Fehler) |
| `batch_index` | number | Ereignis für Routing (Batch/abgeschlossen/Fehler) |
| `total_batches` | number | Aktuelle Batch-Elemente |
| `total_items` | number | Aktueller Batch-Index (0-basiert) |
| `is_last_batch` | boolean | Gesamtanzahl der Batches |
| `progress` | object | Gesamtanzahl der Elemente |

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

### Verzweigung

`flow.branch`

Bedingte Verzweigung basierend auf Ausdrucksauswertung

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | string | Yes | - | Expression to evaluate (supports ==, !=, >, <, >=, <=, contains) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Routing-Ereignis (true/false/error) |
| `outputs` | object | Ausgabewerte nach Port |
| `result` | boolean | Verzweigungsergebnis |
| `condition` | string | Bedingungswert |
| `resolved_condition` | string | Ergebnis der Bedingungsauswertung |

**Example:** Example

```yaml
condition: ${search_step.count} > 0
```

**Example:** Example

```yaml
condition: ${api_call.status} == success
```

### Haltepunkt

`flow.breakpoint`

Workflow-Ausführung für menschliche Genehmigung oder Eingabe pausieren

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
| `__event__` | string | Routing-Ereignis (approved/rejected/timeout) |
| `breakpoint_id` | string | Haltepunkt-ID |
| `status` | string | Status |
| `approved_by` | array | Genehmigt von |
| `rejected_by` | array | Abgelehnt von |
| `custom_inputs` | object | Benutzerdefinierte Eingabewerte |
| `comments` | array | Überprüfungskommentare |
| `resolved_at` | string | Aufgelöste Zeit |
| `wait_duration_ms` | integer | Wartezeit (ms) |

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

### Leistungsschalter

`flow.circuit_breaker`

Circuit-Breaker-Muster zur Vermeidung von Kaskadenfehlern

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `failure_threshold` | number | Yes | `5` | Anzahl der Fehler, bevor der Circuit geöffnet wird |
| `reset_timeout_ms` | number | No | `60000` | Zeit in Millisekunden, bevor der Circuit in halb-offen übergeht |
| `half_open_max` | number | No | `1` | Maximale Anfragen im halb-offenen Zustand |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Ereignis für Routing (erlaubt/abgelehnt/halb-offen) |
| `state` | string | Zustand des Circuits (geschlossen/offen/halb-offen) |
| `failure_count` | number | Anzahl aufeinanderfolgender Fehler |
| `last_failure_time_ms` | number | Zeitstempel des letzten Fehlers in Millisekunden |
| `time_until_half_open_ms` | number | Millisekunden bis der Circuit in halb-offen übergeht |

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

### Container

`flow.container`

Eingebetteter Subflow-Container zum Organisieren komplexer Workflows

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
| `__event__` | string | Routing-Ereignis (success/error) |
| `outputs` | object | Ausgabewerte nach Port |
| `subflow_result` | object | Subflow-Ergebnis |
| `exported_variables` | object | Exportierte Variablen |
| `node_count` | integer | Knotenanzahl |
| `execution_time_ms` | number | Ausführungszeit (ms) |

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

### Entprellen

`flow.debounce`

Ausführung verzögern, um schnelle Wiederholungen zu verhindern

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `delay_ms` | number | Yes | - | Wartezeit nach dem letzten Anruf vor der Ausführung |
| `leading` | boolean | No | `False` | Ausführung auf der führenden Flanke (erster Anruf löst sofort aus) |
| `trailing` | boolean | No | `True` | Ausführung auf der nachlaufenden Flanke (nach Ablauf der Verzögerung) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Ereignis für Routing (ausgeführt/entprellt) |
| `last_call_ms` | number | Zeitstempel des letzten Anrufs in Millisekunden |
| `calls_debounced` | number | Anzahl der seit der letzten Ausführung entprellten Anrufe |
| `time_since_last_ms` | number | Verstrichene Zeit seit dem letzten Anruf in Millisekunden |
| `edge` | string | Welche Flanke die Ausführung ausgelöst hat (führend/nachlaufend) |

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

### Ende

`flow.end`

Expliziter Workflow-Endknoten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `success_message` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Routing-Ereignis (__end__) |
| `ended_at` | string | Endzeit |
| `workflow_result` | object | Workflow-Ergebnis |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
output_mapping: {"result": "${process.output}", "status": "success"}
```

### Fehlerbehandler

`flow.error_handle`

Fängt Fehler von vorgelagerten Knoten ab und behandelt sie

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | `log_and_continue` | Was mit dem Fehler zu tun ist |
| `include_traceback` | boolean | No | `True` | Vollständigen Stack-Trace in die Ausgabe einbeziehen |
| `error_code_mapping` | object | No | `{}` | Vollständigen Stack-Trace in die Ausgabe einbeziehen |
| `fallback_value` | any | No | - | Fehlercodes benutzerdefinierten Aktionen zuordnen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Wert, der verwendet wird, wenn der Fehler unterdrückt wird |
| `outputs` | object | Ereignis für Routing (behandelt/eskalieren) |
| `error_info` | object | Ereignis für Routing (behandelt/eskalieren) |
| `action_taken` | string | Welche Aktion wurde ergriffen |

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

### Fehler-Workflow-Auslöser

`flow.error_workflow_trigger`

Einstiegspunkt für Fehler-Workflows - ausgelöst, wenn ein anderer Workflow fehlschlägt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `description` | string | No | - | Description of this error workflow |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Beschreibung dieses Fehler-Workflows |
| `error_context` | object | Ereignis für Routing (ausgelöst) |
| `triggered_at` | string | ISO-Zeitstempel, wann der Fehler-Workflow ausgelöst wurde |

**Example:** Example

```yaml
description: Send Slack notification on workflow failure
```

**Example:** Example

```yaml
description: Log all workflow errors to monitoring system
```

### Für jedes

`flow.foreach`

Über eine Liste iterieren und Schritte für jedes Element ausführen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | string | Yes | - | Liste der zu iterierenden Elemente (unterstützt ${variable}-Referenz) |
| `steps` | array | No | - | Schritte, die für jedes Element ausgeführt werden |
| `item_var` | string | No | `item` | Variablenname für aktuelles Element |
| `index_var` | string | No | `index` | Variablenname für aktuellen Index |
| `output_mode` | string | No | `collect` | Ergebnissammelmodus |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Routing-Ereignis (iterate/done) |
| `__set_context` | object | Kontext setzen |
| `outputs` | object | Ausgabewerte nach Port |
| `iteration` | number | Aktueller Iterationsindex |
| `status` | string | Operationsstatus |
| `results` | array | Gesammelte Ergebnisse |
| `count` | number | Gesamtanzahl der Elemente |

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

### Gabelung

`flow.fork`

Ausführung in parallele Zweige aufteilen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `branch_count` | number | No | `2` | Number of parallel branches |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Routing-Ereignis (fork/error) |
| `input_data` | any | Eingabedaten |
| `branch_count` | integer | Zweiganzahl |

**Example:** Example

```yaml
branch_count: 2
```

**Example:** Example

```yaml
branch_count: 3
```

### Gehe zu

`flow.goto`

Unbedingter Sprung zu einem anderen Schritt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `target` | string | Yes | - | Step ID to jump to |
| `max_iterations` | number | No | `100` | Maximum number of iterations (prevents infinite loops) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Routing-Ereignis (goto) |
| `target` | string | Zielschritt |
| `iteration` | number | Iterationszähler |

**Example:** Example

```yaml
target: fetch_next_page
max_iterations: 10
```

**Example:** Example

```yaml
target: cleanup_step
```

### Workflow aufrufen

`flow.invoke`

Eine externe Workflow-Datei ausführen

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
| `__event__` | string | Parameter, die an den aufgerufenen Workflow übergeben werden |
| `result` | any | Maximale Ausführungszeit in Sekunden |
| `workflow_id` | string | Ereignis für Routing (Erfolg/Fehler) |
| `execution_time_ms` | number | Ergebnis der Workflow-Ausführung |

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

### Zusammenführen

`flow.join`

Auf Abschluss paralleler Zweige warten

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
| `__event__` | string | Routing-Ereignis (joined/timeout/error) |
| `joined_data` | array | Zusammengeführte Daten |
| `completed_count` | integer | Abgeschlossene Zweiganzahl |
| `strategy` | string | Zusammenführungsstrategie |

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

### Schleife

`flow.loop`

Schritte N-mal mit Ausgabeport-Routing wiederholen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `times` | number | Yes | `1` | Anzahl der Wiederholungen |
| `target` | string | No | - | Zielschritt (veraltet) |
| `steps` | array | No | - | Schritte, die für jede Iteration ausgeführt werden |
| `index_var` | string | No | `index` | Variablenname für aktuellen Index |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Routing-Ereignis (iterate/done) |
| `outputs` | object | Ausgabewerte nach Port |
| `iteration` | number | Aktuelle Iteration |
| `status` | string | Operationsstatus |
| `results` | array | Gesammelte Ergebnisse |
| `count` | number | Gesamtiterationen |

**Example:** Example

```yaml
times: 3
```

**Example:** Example

```yaml
times: 5
steps: [{"module": "browser.click", "params": {"selector": ".next"}}]
```

### Zusammenführen

`flow.merge`

Mehrere Eingaben zu einer einzelnen Ausgabe zusammenführen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`first`, `last`, `all`) | No | `all` | How to merge multiple inputs |
| `input_count` | number | No | `2` | Number of ports |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Routing-Ereignis (merged/error) |
| `merged_data` | any | Zusammengeführte Daten |
| `input_count` | integer | Eingabeanzahl |
| `strategy` | string | Zusammenführungsstrategie |

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

### Parallel

`flow.parallel`

Führe mehrere Aufgaben parallel mit unterschiedlichen Strategien aus

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tasks` | array | Yes | - | Array von Aufgaben, die parallel ausgeführt werden sollen |
| `mode` | string | No | `all` | Array von Aufgaben, die parallel ausgeführt werden sollen |
| `timeout_ms` | number | No | `60000` | Maximum wait time in milliseconds |
| `fail_fast` | boolean | No | `True` | Alle Aufgaben beim ersten Fehler stoppen (nur für Modus=alle) |
| `concurrency_limit` | number | No | `0` | Alle Aufgaben beim ersten Fehler stoppen (nur für Modus=alle) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Maximale Anzahl gleichzeitiger Aufgaben (0 für unbegrenzt) |
| `results` | array | Ereignis für Routing (abgeschlossen/teilweise/Fehler) |
| `completed_count` | number | Ereignis für Routing (abgeschlossen/teilweise/Fehler) |
| `failed_count` | number | Ergebnisse aller Aufgaben |
| `total_count` | number | Anzahl der erfolgreich abgeschlossenen Aufgaben |
| `mode` | string | Anzahl der fehlgeschlagenen Aufgaben |
| `duration_ms` | number | Gesamtanzahl der Aufgaben |

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

### Ratenbegrenzung

`flow.rate_limit`

Ausführung mit Token-Bucket oder gleitendem Fenster begrenzen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_requests` | number | Yes | - | Maximale Anzahl von Anfragen pro Fenster |
| `window_ms` | number | No | `60000` | Zeitfenster in Millisekunden |
| `strategy` | string | No | `token_bucket` | Strategie zur Ratenbegrenzung (Token-Bucket oder gleitendes Fenster) |
| `queue_overflow` | string | No | `wait` | Verhalten bei voller Warteschlange (verwerfen oder Fehler) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Ereignis für Routing (erlaubt/begrenzt) |
| `tokens_remaining` | number | Verbleibende Tokens im Bucket |
| `window_reset_ms` | number | Millisekunden bis das Fenster zurückgesetzt wird |
| `requests_in_window` | number | Anzahl der Anfragen im aktuellen Fenster |
| `wait_ms` | number | Millisekunden bis zur nächsten erlaubten Anfrage |

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

### Erneut versuchen

`flow.retry`

Fehlgeschlagene Operationen mit konfigurierbarem Backoff erneut versuchen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_retries` | number | Yes | `3` | Maximale Anzahl der Versuchsdurchläufe |
| `initial_delay_ms` | number | No | `1000` | Anfängliche Verzögerung vor dem ersten Versuch in Millisekunden |
| `backoff_multiplier` | number | No | `2.0` | Multiplikator für exponentielles Backoff |
| `max_delay_ms` | number | No | `30000` | Maximale Verzögerung zwischen den Versuchen in Millisekunden |
| `retry_on_errors` | array | No | `[]` | Fehlertypen, bei denen erneut versucht wird (leer bedeutet, alle erneut versuchen) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Ereignis für Routing (erneut versuchen/erfolgreich/fehlgeschlagen) |
| `attempt` | number | Aktuelle Versuchnummer |
| `max_retries` | number | Maximale Anzahl konfigurierter Versuche |
| `delay_ms` | number | Verzögerung vor dem nächsten Versuch in Millisekunden |
| `total_elapsed_ms` | number | Gesamte verstrichene Zeit in Millisekunden |
| `last_error` | object | Letzte Fehlermeldung |

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

### Start

`flow.start`

Expliziter Workflow-Startknoten

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Routing-Ereignis (start) |
| `started_at` | string | Startzeit |
| `workflow_id` | string | Workflow-ID |

**Example:** Example

```yaml
```

### Teilfluss

`flow.subflow`

Externen Workflow referenzieren und ausführen

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
| `__event__` | string | Routing-Ereignis (success/error) |
| `result` | any | Ausführungsergebnis |
| `execution_id` | string | Ausführungs-ID |
| `workflow_ref` | string | Workflow-Referenz |

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

### Schalter

`flow.switch`

Mehrwegverzweigung basierend auf Wertabgleich

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Value to match against cases (supports variable reference) |
| `cases` | array | Yes | `[{'id': 'case_1', 'value': 'case1', 'label': 'Case 1'}]` | List of case definitions |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Routing-Ereignis (case:value oder default) |
| `outputs` | object | Ausgabewerte nach Port |
| `matched_case` | string | Übereinstimmender Fall |
| `value` | any | Übereinstimmender Wert |

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

### Drosseln

`flow.throttle`

Ausführungsrate mit minimalem Intervall drosseln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `interval_ms` | number | Yes | - | Minimale Zeit zwischen den Ausführungen in Millisekunden |
| `leading` | boolean | No | `True` | Ausführung an der Vorderkante (erster Aufruf wird sofort ausgeführt) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Ereignis für Routing (ausgeführt/gedrosselt) |
| `last_execution_ms` | number | Zeitstempel der letzten erlaubten Ausführung |
| `calls_throttled` | number | Anzahl der seit der letzten Ausführung gedrosselten Aufrufe |
| `time_since_last_ms` | number | Verstrichene Zeit seit der letzten Ausführung in Millisekunden |
| `remaining_ms` | number | Verbleibende Millisekunden bis zur nächsten erlaubten Ausführung |

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

### Auslöser

`flow.trigger`

Workflow-Einstiegspunkt - manuell, Webhook, Zeitplan oder Ereignis

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
| `__event__` | string | Routing-Ereignis (triggered/error) |
| `trigger_data` | object | Auslöserdaten |
| `trigger_type` | string | Auslösertyp |
| `triggered_at` | string | Ausgelöst um |

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
