# Flow Control

Branching, loops, parallelism, subflows, triggers, and error handling.

**24 modules**

| Module | Description |
|--------|-------------|
| [Przetwarzanie partii](#przetwarzanie-partii) | Przetwarzaj elementy w partiach o konfigurowalnym rozmiarze |
| [Rozgalezienie](#rozgalezienie) | Rozgalezienie warunkowe na podstawie ewaluacji wyrazenia |
| [Punkt przerwania](#punkt-przerwania) | Wstrzymaj wykonanie przeplywu w celu zatwierdzenia lub wprowadzenia danych przez czlowieka |
| [Wyłącznik Obwodu](#wyłącznik-obwodu) | Wzorzec wyłącznika obwodu, aby zapobiec kaskadowym awariom |
| [Kontener](#kontener) | Osadzony kontener podprzeplywu do organizowania zlozonych przeplywow |
| [Opóźnienie](#opóźnienie) | Opóźnienie wykonania, aby zapobiec szybkim powtórnym wywołaniom |
| [Koniec](#koniec) | Jawny wezel konca przeplywu |
| [Obsługa błędów](#obsługa-błędów) | Przechwytuje i obsługuje błędy z węzłów powyżej |
| [Wyzwalacz przepływu błędów](#wyzwalacz-przepływu-błędów) | Punkt wejścia dla przepływów błędów - wyzwalany, gdy inny przepływ się nie powiedzie |
| [Dla kazdego](#dla-kazdego) | Iteruj po liscie i wykonaj kroki dla kazdego elementu |
| [Rozwidlenie](#rozwidlenie) | Podziel wykonanie na rownolegle galeezie |
| [Idz do](#idz-do) | Bezwarunkowy skok do innego kroku |
| [Invoke Workflow](#invoke-workflow) | Execute an external workflow file |
| [Zlaczenie](#zlaczenie) | Czekaj na zakonczenie rownolegych galezi |
| [Petla](#petla) | Powtarzaj kroki N razy uzywajac routingu portu wyjsciowego |
| [Scalenie](#scalenie) | Polacz wiele wejsc w jedno wyjscie |
| [Równoległe](#równoległe) | Wykonuj wiele zadań równolegle z różnymi strategiami |
| [Ograniczenie Szybkości](#ograniczenie-szybkości) | Ograniczenie szybkości wykonania za pomocą token bucket lub przesuwnego okna |
| [Ponów](#ponów) | Ponów nieudane operacje z konfigurowalnym opóźnieniem |
| [Start](#start) | Jawny wezel startu przeplywu |
| [Podprzeplyw](#podprzeplyw) | Odwolaj sie i wykonaj zewnetrzny przeplyw |
| [Przelacznik](#przelacznik) | Wielokierunkowe rozgalezienie na podstawie dopasowania wartosci |
| [Ogranicz](#ogranicz) | Ogranicz tempo wykonania z minimalnym interwałem |
| [Wyzwalacz](#wyzwalacz) | Punkt wejsciowy przeplywu - reczny, webhook, harmonogram lub zdarzenie |

## Modules

### Przetwarzanie partii

`flow.batch`

Przetwarzaj elementy w partiach o konfigurowalnym rozmiarze

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `batch_size` | number | Yes | `10` | Liczba elementów na partię |
| `delay_ms` | number | No | `0` | Milisekundy oczekiwania między partiami (dla ograniczenia szybkości) |
| `continue_on_error` | boolean | No | `False` | Kontynuuj przetwarzanie pozostałych partii, jeśli jedna się nie powiedzie |
| `parallel_batches` | number | No | `1` | Kontynuuj przetwarzanie pozostałych partii, jeśli jedna się nie powiedzie |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Liczba partii do przetworzenia równolegle (1 dla sekwencyjnego) |
| `batch` | array | Zdarzenie do kierowania (partia/zakończono/błąd) |
| `batch_index` | number | Zdarzenie do kierowania (partia/zakończono/błąd) |
| `total_batches` | number | Elementy bieżącej partii |
| `total_items` | number | Indeks bieżącej partii (od 0) |
| `is_last_batch` | boolean | Łączna liczba partii |
| `progress` | object | Łączna liczba elementów |

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

### Rozgalezienie

`flow.branch`

Rozgalezienie warunkowe na podstawie ewaluacji wyrazenia

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | string | Yes | - | Expression to evaluate (supports ==, !=, >, <, >=, <=, contains) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Zdarzenie routingu (true/false/error) |
| `outputs` | object | Wartosci wyjsciowe wedlug portu |
| `result` | boolean | Wynik rozgalezienia |
| `condition` | string | Wartosc warunku |
| `resolved_condition` | string | Wynik ewaluacji warunku |

**Example:** Example

```yaml
condition: ${search_step.count} > 0
```

**Example:** Example

```yaml
condition: ${api_call.status} == success
```

### Punkt przerwania

`flow.breakpoint`

Wstrzymaj wykonanie przeplywu w celu zatwierdzenia lub wprowadzenia danych przez czlowieka

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
| `__event__` | string | Zdarzenie routingu (approved/rejected/timeout) |
| `breakpoint_id` | string | ID punktu przerwania |
| `status` | string | Status |
| `approved_by` | array | Zatwierdzony przez |
| `rejected_by` | array | Odrzucony przez |
| `custom_inputs` | object | Niestandardowe wartosci wejsciowe |
| `comments` | array | Komentarze przegladu |
| `resolved_at` | string | Czas rozwiazania |
| `wait_duration_ms` | integer | Czas oczekiwania (ms) |

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

### Wyłącznik Obwodu

`flow.circuit_breaker`

Wzorzec wyłącznika obwodu, aby zapobiec kaskadowym awariom

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `failure_threshold` | number | Yes | `5` | Liczba awarii przed otwarciem obwodu |
| `reset_timeout_ms` | number | No | `60000` | Czas w milisekundach przed przejściem obwodu na półotwarty |
| `half_open_max` | number | No | `1` | Maksymalna liczba żądań dozwolona w stanie półotwartym |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Zdarzenie do routingu (dozwolone/odrzucone/półotwarte) |
| `state` | string | Stan obwodu (zamknięty/otwarty/półotwarty) |
| `failure_count` | number | Liczba kolejnych awarii |
| `last_failure_time_ms` | number | Znacznik czasu ostatniej awarii w milisekundach |
| `time_until_half_open_ms` | number | Milisekundy do przejścia obwodu na półotwarty |

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

### Kontener

`flow.container`

Osadzony kontener podprzeplywu do organizowania zlozonych przeplywow

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
| `__event__` | string | Zdarzenie routingu (success/error) |
| `outputs` | object | Wartosci wyjsciowe wedlug portu |
| `subflow_result` | object | Wynik podprzeplywu |
| `exported_variables` | object | Wyeksportowane zmienne |
| `node_count` | integer | Liczba wezlow |
| `execution_time_ms` | number | Czas wykonania (ms) |

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

### Opóźnienie

`flow.debounce`

Opóźnienie wykonania, aby zapobiec szybkim powtórnym wywołaniom

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `delay_ms` | number | Yes | - | Czas oczekiwania po ostatnim wywołaniu przed wykonaniem |
| `leading` | boolean | No | `False` | Wykonaj na wiodącej krawędzi (pierwsze wywołanie uruchamia natychmiast) |
| `trailing` | boolean | No | `True` | Wykonaj na kończącej krawędzi (po wygaśnięciu opóźnienia) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Zdarzenie do routingu (wykonane/opóźnione) |
| `last_call_ms` | number | Znacznik czasu ostatniego wywołania w milisekundach |
| `calls_debounced` | number | Liczba wywołań opóźnionych od ostatniego wykonania |
| `time_since_last_ms` | number | Czas, który upłynął od ostatniego wywołania w milisekundach |
| `edge` | string | Która krawędź wywołała wykonanie (wiodąca/kończąca) |

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

### Koniec

`flow.end`

Jawny wezel konca przeplywu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `success_message` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Zdarzenie routingu (__end__) |
| `ended_at` | string | Czas zakonczenia |
| `workflow_result` | object | Wynik przeplywu |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
output_mapping: {"result": "${process.output}", "status": "success"}
```

### Obsługa błędów

`flow.error_handle`

Przechwytuje i obsługuje błędy z węzłów powyżej

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | `log_and_continue` | Co zrobić z błędem |
| `include_traceback` | boolean | No | `True` | Dołącz pełny ślad stosu w wyjściu |
| `error_code_mapping` | object | No | `{}` | Dołącz pełny ślad stosu w wyjściu |
| `fallback_value` | any | No | - | Mapuj kody błędów na niestandardowe działania |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Wartość do użycia, gdy błąd jest zignorowany |
| `outputs` | object | Zdarzenie do kierowania (obsłużono/eskalacja) |
| `error_info` | object | Zdarzenie do kierowania (obsłużono/eskalacja) |
| `action_taken` | string | Jakie działanie zostało podjęte |

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

### Wyzwalacz przepływu błędów

`flow.error_workflow_trigger`

Punkt wejścia dla przepływów błędów - wyzwalany, gdy inny przepływ się nie powiedzie

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `description` | string | No | - | Description of this error workflow |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Opis tego przepływu błędów |
| `error_context` | object | Zdarzenie do kierowania (wyzwolone) |
| `triggered_at` | string | Znacznik czasu ISO, kiedy przepływ błędów został wyzwolony |

**Example:** Example

```yaml
description: Send Slack notification on workflow failure
```

**Example:** Example

```yaml
description: Log all workflow errors to monitoring system
```

### Dla kazdego

`flow.foreach`

Iteruj po liscie i wykonaj kroki dla kazdego elementu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | string | Yes | - | Lista elementow do iteracji (obsluguje odwolanie ${variable}) |
| `steps` | array | No | - | Kroki do wykonania dla kazdego elementu |
| `item_var` | string | No | `item` | Nazwa zmiennej dla biezacego elementu |
| `index_var` | string | No | `index` | Nazwa zmiennej dla biezacego indeksu |
| `output_mode` | string | No | `collect` | Tryb zbierania wynikow |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Zdarzenie routingu (iterate/done) |
| `__set_context` | object | Ustaw kontekst |
| `outputs` | object | Wartosci wyjsciowe wedlug portu |
| `iteration` | number | Biezacy indeks iteracji |
| `status` | string | Status operacji |
| `results` | array | Zebrane wyniki |
| `count` | number | Calkowita liczba elementow |

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

### Rozwidlenie

`flow.fork`

Podziel wykonanie na rownolegle galeezie

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `branch_count` | number | No | `2` | Number of parallel branches |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Zdarzenie routingu (fork/error) |
| `input_data` | any | Dane wejsciowe |
| `branch_count` | integer | Liczba galezi |

**Example:** Example

```yaml
branch_count: 2
```

**Example:** Example

```yaml
branch_count: 3
```

### Idz do

`flow.goto`

Bezwarunkowy skok do innego kroku

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `target` | string | Yes | - | Step ID to jump to |
| `max_iterations` | number | No | `100` | Maximum number of iterations (prevents infinite loops) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Zdarzenie routingu (goto) |
| `target` | string | Krok docelowy |
| `iteration` | number | Licznik iteracji |

**Example:** Example

```yaml
target: fetch_next_page
max_iterations: 10
```

**Example:** Example

```yaml
target: cleanup_step
```

### Invoke Workflow

`flow.invoke`

Execute an external workflow file

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
| `__event__` | string | Parameters to pass to the invoked workflow |
| `result` | any | Maximum execution time in seconds |
| `workflow_id` | string | Event for routing (success/error) |
| `execution_time_ms` | number | Workflow execution result |

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

### Zlaczenie

`flow.join`

Czekaj na zakonczenie rownolegych galezi

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
| `__event__` | string | Zdarzenie routingu (joined/timeout/error) |
| `joined_data` | array | Polaczone dane |
| `completed_count` | integer | Liczba zakonczonych galezi |
| `strategy` | string | Strategia laczenia |

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

### Petla

`flow.loop`

Powtarzaj kroki N razy uzywajac routingu portu wyjsciowego

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `times` | number | Yes | `1` | Liczba powtorzen |
| `target` | string | No | - | Krok docelowy (przestarzale) |
| `steps` | array | No | - | Kroki do wykonania dla kazdej iteracji |
| `index_var` | string | No | `index` | Nazwa zmiennej dla biezacego indeksu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Zdarzenie routingu (iterate/done) |
| `outputs` | object | Wartosci wyjsciowe wedlug portu |
| `iteration` | number | Biezaca iteracja |
| `status` | string | Status operacji |
| `results` | array | Zebrane wyniki |
| `count` | number | Calkowita liczba iteracji |

**Example:** Example

```yaml
times: 3
```

**Example:** Example

```yaml
times: 5
steps: [{"module": "browser.click", "params": {"selector": ".next"}}]
```

### Scalenie

`flow.merge`

Polacz wiele wejsc w jedno wyjscie

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`first`, `last`, `all`) | No | `all` | How to merge multiple inputs |
| `input_count` | number | No | `2` | Number of ports |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Zdarzenie routingu (merged/error) |
| `merged_data` | any | Scalone dane |
| `input_count` | integer | Liczba wejsc |
| `strategy` | string | Strategia scalania |

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

### Równoległe

`flow.parallel`

Wykonuj wiele zadań równolegle z różnymi strategiami

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tasks` | array | Yes | - | Tablica definicji zadań do wykonania równolegle |
| `mode` | string | No | `all` | Tablica definicji zadań do wykonania równolegle |
| `timeout_ms` | number | No | `60000` | Maximum wait time in milliseconds |
| `fail_fast` | boolean | No | `True` | Zatrzymaj wszystkie zadania przy pierwszej awarii (tylko dla trybu=all) |
| `concurrency_limit` | number | No | `0` | Zatrzymaj wszystkie zadania przy pierwszej awarii (tylko dla trybu=all) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Maksymalna liczba równoczesnych zadań (0 dla nieograniczonej) |
| `results` | array | Zdarzenie do routingu (zakończone/częściowe/błąd) |
| `completed_count` | number | Zdarzenie do kierowania (zakończono/częściowo/błąd) |
| `failed_count` | number | Wyniki ze wszystkich zadań |
| `total_count` | number | Liczba pomyślnie zakończonych zadań |
| `mode` | string | Liczba nieudanych zadań |
| `duration_ms` | number | Łączna liczba zadań |

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

### Ograniczenie Szybkości

`flow.rate_limit`

Ograniczenie szybkości wykonania za pomocą token bucket lub przesuwnego okna

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_requests` | number | Yes | - | Maksymalna liczba żądań dozwolona na okno |
| `window_ms` | number | No | `60000` | Okno czasowe w milisekundach |
| `strategy` | string | No | `token_bucket` | Strategia ograniczania szybkości (token_bucket lub przesuwne_okno) |
| `queue_overflow` | string | No | `wait` | Zachowanie, gdy kolejka jest pełna (odrzucenie lub błąd) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Zdarzenie do routingu (dozwolone/ograniczone) |
| `tokens_remaining` | number | Pozostałe tokeny w kubełku |
| `window_reset_ms` | number | Milisekundy do resetu okna |
| `requests_in_window` | number | Liczba żądań w bieżącym oknie |
| `wait_ms` | number | Milisekundy do odczekania przed następnym dozwolonym żądaniem |

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

### Ponów

`flow.retry`

Ponów nieudane operacje z konfigurowalnym opóźnieniem

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_retries` | number | Yes | `3` | Maksymalna liczba prób ponowienia |
| `initial_delay_ms` | number | No | `1000` | Początkowe opóźnienie przed pierwszą próbą w milisekundach |
| `backoff_multiplier` | number | No | `2.0` | Mnożnik dla wykładniczego opóźnienia |
| `max_delay_ms` | number | No | `30000` | Maksymalne opóźnienie między próbami w milisekundach |
| `retry_on_errors` | array | No | `[]` | Typy błędów do ponowienia (puste oznacza ponów wszystkie) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Zdarzenie do routingu (ponów/sukces/niepowodzenie) |
| `attempt` | number | Aktualny numer próby |
| `max_retries` | number | Maksymalna liczba skonfigurowanych prób |
| `delay_ms` | number | Opóźnienie przed kolejną próbą w milisekundach |
| `total_elapsed_ms` | number | Całkowity upływ czasu w milisekundach |
| `last_error` | object | Ostatnia wiadomość o błędzie |

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

Jawny wezel startu przeplywu

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Zdarzenie routingu (start) |
| `started_at` | string | Czas startu |
| `workflow_id` | string | ID przeplywu |

**Example:** Example

```yaml
```

### Podprzeplyw

`flow.subflow`

Odwolaj sie i wykonaj zewnetrzny przeplyw

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
| `__event__` | string | Zdarzenie routingu (success/error) |
| `result` | any | Wynik wykonania |
| `execution_id` | string | ID wykonania |
| `workflow_ref` | string | Referencja przeplywu |

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

### Przelacznik

`flow.switch`

Wielokierunkowe rozgalezienie na podstawie dopasowania wartosci

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Value to match against cases (supports variable reference) |
| `cases` | array | Yes | `[{'id': 'case_1', 'value': 'case1', 'label': 'Case 1'}]` | List of case definitions |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Zdarzenie routingu (case:value lub default) |
| `outputs` | object | Wartosci wyjsciowe wedlug portu |
| `matched_case` | string | Dopasowany przypadek |
| `value` | any | Dopasowana wartosc |

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

### Ogranicz

`flow.throttle`

Ogranicz tempo wykonania z minimalnym interwałem

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `interval_ms` | number | Yes | - | Minimalny czas między wykonaniami w milisekundach |
| `leading` | boolean | No | `True` | Wykonaj na czołowej krawędzi (pierwsze wywołanie przechodzi natychmiast) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Zdarzenie do routingu (wykonane/ograniczone) |
| `last_execution_ms` | number | Znacznik czasu ostatniego dozwolonego wykonania |
| `calls_throttled` | number | Liczba ograniczonych wywołań od ostatniego wykonania |
| `time_since_last_ms` | number | Czas, który upłynął od ostatniego wykonania w milisekundach |
| `remaining_ms` | number | Pozostałe milisekundy do następnego dozwolonego wykonania |

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

### Wyzwalacz

`flow.trigger`

Punkt wejsciowy przeplywu - reczny, webhook, harmonogram lub zdarzenie

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
| `__event__` | string | Zdarzenie routingu (triggered/error) |
| `trigger_data` | object | Dane wyzwalacza |
| `trigger_type` | string | Typ wyzwalacza |
| `triggered_at` | string | Czas wyzwolenia |

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
