# Flow Control

Branching, loops, parallelism, subflows, triggers, and error handling.

**24 modules**

| Module | Description |
|--------|-------------|
| [Proceso por Lotes](#proceso-por-lotes) | Procesa elementos en lotes con tamaño configurable |
| [Rama](#rama) | Ramificacion condicional basada en evaluacion de expresion |
| [Punto de interrupcion](#punto-de-interrupcion) | Pausar ejecucion de flujo de trabajo para aprobacion humana o entrada |
| [Disyuntor](#disyuntor) | Patrón de disyuntor para prevenir fallos en cascada |
| [Contenedor](#contenedor) | Contenedor de subflujo embebido para organizar flujos de trabajo complejos |
| [Retardo](#retardo) | Ejecutar con retardo para prevenir llamadas repetidas rápidas |
| [Fin](#fin) | Nodo de fin de flujo de trabajo explicito |
| [Manejador de Errores](#manejador-de-errores) | Captura y maneja errores de nodos anteriores |
| [Disparador de Flujo de Error](#disparador-de-flujo-de-error) | Punto de entrada para flujos de error - activado cuando otro flujo falla |
| [Para cada](#para-cada) | Iterar sobre una lista y ejecutar pasos para cada elemento |
| [Bifurcar](#bifurcar) | Dividir ejecucion en ramas paralelas |
| [Ir a](#ir-a) | Salto incondicional a otro paso |
| [Invocar flujo de trabajo](#invocar-flujo-de-trabajo) | Ejecutar un archivo de flujo de trabajo externo |
| [Unir](#unir) | Esperar a que se completen las ramas paralelas |
| [Bucle](#bucle) | Repetir pasos N veces usando enrutamiento de puerto de salida |
| [Combinar](#combinar) | Combinar multiples entradas en una sola salida |
| [Paralelo](#paralelo) | Ejecuta múltiples tareas en paralelo con diferentes estrategias |
| [Límite de Tasa](#límite-de-tasa) | Limitar la tasa de ejecución usando cubo de tokens o ventana deslizante |
| [Reintentar](#reintentar) | Reintentar operaciones fallidas con retroceso configurable |
| [Inicio](#inicio) | Nodo de inicio de flujo de trabajo explicito |
| [Subflujo](#subflujo) | Referenciar y ejecutar un flujo de trabajo externo |
| [Cambiar](#cambiar) | Ramificacion multiple basada en coincidencia de valores |
| [Regular](#regular) | Regular la tasa de ejecución con un intervalo mínimo |
| [Disparador](#disparador) | Punto de entrada de flujo de trabajo - manual, webhook, programado o evento |

## Modules

### Proceso por Lotes

`flow.batch`

Procesa elementos en lotes con tamaño configurable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `batch_size` | number | Yes | `10` | Número de elementos por lote |
| `delay_ms` | number | No | `0` | Milisegundos de espera entre lotes (para limitar la tasa) |
| `continue_on_error` | boolean | No | `False` | Continuar procesando los lotes restantes si uno falla |
| `parallel_batches` | number | No | `1` | Continuar procesando los lotes restantes si uno falla |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Número de lotes a procesar en paralelo (1 para secuencial) |
| `batch` | array | Evento para enrutamiento (lote/completado/error) |
| `batch_index` | number | Evento para enrutamiento (lote/completado/error) |
| `total_batches` | number | Elementos del lote actual |
| `total_items` | number | Índice del lote actual (basado en 0) |
| `is_last_batch` | boolean | Número total de lotes |
| `progress` | object | Número total de elementos |

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

### Rama

`flow.branch`

Ramificacion condicional basada en evaluacion de expresion

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | string | Yes | - | Expression to evaluate (supports ==, !=, >, <, >=, <=, contains) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento de enrutamiento (true/false/error) |
| `outputs` | object | Valores de salida por puerto |
| `result` | boolean | Resultado de rama |
| `condition` | string | Valor de condicion |
| `resolved_condition` | string | Resultado de evaluacion de condicion |

**Example:** Example

```yaml
condition: ${search_step.count} > 0
```

**Example:** Example

```yaml
condition: ${api_call.status} == success
```

### Punto de interrupcion

`flow.breakpoint`

Pausar ejecucion de flujo de trabajo para aprobacion humana o entrada

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
| `__event__` | string | Evento de enrutamiento (approved/rejected/timeout) |
| `breakpoint_id` | string | ID del punto de interrupcion |
| `status` | string | Estado |
| `approved_by` | array | Aprobado por |
| `rejected_by` | array | Rechazado por |
| `custom_inputs` | object | Valores de entrada personalizados |
| `comments` | array | Comentarios de revision |
| `resolved_at` | string | Hora de resolucion |
| `wait_duration_ms` | integer | Duracion de espera (ms) |

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

### Disyuntor

`flow.circuit_breaker`

Patrón de disyuntor para prevenir fallos en cascada

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `failure_threshold` | number | Yes | `5` | Número de fallos antes de abrir el circuito |
| `reset_timeout_ms` | number | No | `60000` | Tiempo en milisegundos antes de que el circuito pase a medio abierto |
| `half_open_max` | number | No | `1` | Máximo de solicitudes permitidas en estado medio abierto |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento para enrutamiento (permitido/rechazado/medio abierto) |
| `state` | string | Estado del circuito (cerrado/abierto/medio abierto) |
| `failure_count` | number | Número de fallos consecutivos |
| `last_failure_time_ms` | number | Marca de tiempo del último fallo en milisegundos |
| `time_until_half_open_ms` | number | Milisegundos hasta que el circuito pase a medio abierto |

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

### Contenedor

`flow.container`

Contenedor de subflujo embebido para organizar flujos de trabajo complejos

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
| `__event__` | string | Evento de enrutamiento (success/error) |
| `outputs` | object | Valores de salida por puerto |
| `subflow_result` | object | Resultado de subflujo |
| `exported_variables` | object | Variables exportadas |
| `node_count` | integer | Cantidad de nodos |
| `execution_time_ms` | number | Tiempo de ejecucion (ms) |

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

### Retardo

`flow.debounce`

Ejecutar con retardo para prevenir llamadas repetidas rápidas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `delay_ms` | number | Yes | - | Tiempo de espera después de la última llamada antes de ejecutar |
| `leading` | boolean | No | `False` | Ejecutar en el borde inicial (la primera llamada activa inmediatamente) |
| `trailing` | boolean | No | `True` | Ejecutar en el borde final (después de que expire el retardo) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento para enrutamiento (ejecutado/con retardo) |
| `last_call_ms` | number | Marca de tiempo de la última llamada en milisegundos |
| `calls_debounced` | number | Número de llamadas con retardo desde la última ejecución |
| `time_since_last_ms` | number | Tiempo transcurrido desde la última llamada en milisegundos |
| `edge` | string | Qué borde activó la ejecución (inicial/final) |

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

### Fin

`flow.end`

Nodo de fin de flujo de trabajo explicito

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `success_message` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento de enrutamiento (__end__) |
| `ended_at` | string | Hora de fin |
| `workflow_result` | object | Resultado del flujo de trabajo |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
output_mapping: {"result": "${process.output}", "status": "success"}
```

### Manejador de Errores

`flow.error_handle`

Captura y maneja errores de nodos anteriores

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | `log_and_continue` | Qué hacer con el error |
| `include_traceback` | boolean | No | `True` | Incluir traza completa en la salida |
| `error_code_mapping` | object | No | `{}` | Incluir traza completa en la salida |
| `fallback_value` | any | No | - | Mapear códigos de error a acciones personalizadas |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Valor a usar cuando el error es suprimido |
| `outputs` | object | Evento para enrutamiento (manejado/escalar) |
| `error_info` | object | Evento para enrutamiento (manejado/escalar) |
| `action_taken` | string | Qué acción se tomó |

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

### Disparador de Flujo de Error

`flow.error_workflow_trigger`

Punto de entrada para flujos de error - activado cuando otro flujo falla

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `description` | string | No | - | Description of this error workflow |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Descripción de este flujo de error |
| `error_context` | object | Evento para enrutamiento (disparado) |
| `triggered_at` | string | Marca de tiempo ISO cuando el flujo de error fue activado |

**Example:** Example

```yaml
description: Send Slack notification on workflow failure
```

**Example:** Example

```yaml
description: Log all workflow errors to monitoring system
```

### Para cada

`flow.foreach`

Iterar sobre una lista y ejecutar pasos para cada elemento

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | string | Yes | - | Lista de elementos para iterar (soporta referencia ${variable}) |
| `steps` | array | No | - | Pasos a ejecutar para cada elemento |
| `item_var` | string | No | `item` | Nombre de variable para elemento actual |
| `index_var` | string | No | `index` | Nombre de variable para indice actual |
| `output_mode` | string | No | `collect` | Modo de recoleccion de resultados |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento de enrutamiento (iterate/done) |
| `__set_context` | object | Establecer contexto |
| `outputs` | object | Valores de salida por puerto |
| `iteration` | number | Indice de iteracion actual |
| `status` | string | Estado de la operacion |
| `results` | array | Resultados recolectados |
| `count` | number | Cantidad total de elementos |

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

### Bifurcar

`flow.fork`

Dividir ejecucion en ramas paralelas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `branch_count` | number | No | `2` | Number of parallel branches |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento de enrutamiento (fork/error) |
| `input_data` | any | Datos de entrada |
| `branch_count` | integer | Cantidad de ramas |

**Example:** Example

```yaml
branch_count: 2
```

**Example:** Example

```yaml
branch_count: 3
```

### Ir a

`flow.goto`

Salto incondicional a otro paso

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `target` | string | Yes | - | Step ID to jump to |
| `max_iterations` | number | No | `100` | Maximum number of iterations (prevents infinite loops) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento de enrutamiento (goto) |
| `target` | string | Paso destino |
| `iteration` | number | Conteo de iteraciones |

**Example:** Example

```yaml
target: fetch_next_page
max_iterations: 10
```

**Example:** Example

```yaml
target: cleanup_step
```

### Invocar flujo de trabajo

`flow.invoke`

Ejecutar un archivo de flujo de trabajo externo

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
| `__event__` | string | Parámetros para pasar al flujo de trabajo invocado |
| `result` | any | Tiempo máximo de ejecución en segundos |
| `workflow_id` | string | Evento para enrutamiento (éxito/error) |
| `execution_time_ms` | number | Resultado de ejecución del flujo de trabajo |

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

### Unir

`flow.join`

Esperar a que se completen las ramas paralelas

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
| `__event__` | string | Evento de enrutamiento (joined/timeout/error) |
| `joined_data` | array | Datos unidos |
| `completed_count` | integer | Cantidad de ramas completadas |
| `strategy` | string | Estrategia de union |

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

### Bucle

`flow.loop`

Repetir pasos N veces usando enrutamiento de puerto de salida

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `times` | number | Yes | `1` | Numero de repeticiones |
| `target` | string | No | - | Paso destino (obsoleto) |
| `steps` | array | No | - | Pasos a ejecutar para cada iteracion |
| `index_var` | string | No | `index` | Nombre de variable para indice actual |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento de enrutamiento (iterate/done) |
| `outputs` | object | Valores de salida por puerto |
| `iteration` | number | Iteracion actual |
| `status` | string | Estado de la operacion |
| `results` | array | Resultados recolectados |
| `count` | number | Total de iteraciones |

**Example:** Example

```yaml
times: 3
```

**Example:** Example

```yaml
times: 5
steps: [{"module": "browser.click", "params": {"selector": ".next"}}]
```

### Combinar

`flow.merge`

Combinar multiples entradas en una sola salida

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`first`, `last`, `all`) | No | `all` | How to merge multiple inputs |
| `input_count` | number | No | `2` | Number of ports |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento de enrutamiento (merged/error) |
| `merged_data` | any | Datos combinados |
| `input_count` | integer | Cantidad de entradas |
| `strategy` | string | Estrategia de combinacion |

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

### Paralelo

`flow.parallel`

Ejecuta múltiples tareas en paralelo con diferentes estrategias

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tasks` | array | Yes | - | Arreglo de definiciones de tareas para ejecutar en paralelo |
| `mode` | string | No | `all` | Arreglo de definiciones de tareas para ejecutar en paralelo |
| `timeout_ms` | number | No | `60000` | Maximum wait time in milliseconds |
| `fail_fast` | boolean | No | `True` | Detener todas las tareas en el primer fallo (solo para modo=all) |
| `concurrency_limit` | number | No | `0` | Detener todas las tareas en el primer fallo (solo para modo=all) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Número máximo de tareas concurrentes (0 para ilimitado) |
| `results` | array | Evento para enrutamiento (completado/parcial/error) |
| `completed_count` | number | Evento para enrutamiento (completado/parcial/error) |
| `failed_count` | number | Resultados de todas las tareas |
| `total_count` | number | Número de tareas completadas con éxito |
| `mode` | string | Número de tareas fallidas |
| `duration_ms` | number | Número total de tareas |

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

### Límite de Tasa

`flow.rate_limit`

Limitar la tasa de ejecución usando cubo de tokens o ventana deslizante

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_requests` | number | Yes | - | Número máximo de solicitudes permitidas por ventana |
| `window_ms` | number | No | `60000` | Ventana de tiempo en milisegundos |
| `strategy` | string | No | `token_bucket` | Estrategia de limitación de tasa (cubo de tokens o ventana deslizante) |
| `queue_overflow` | string | No | `wait` | Comportamiento cuando la cola está llena (descartar o error) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento para enrutamiento (permitido/limitado) |
| `tokens_remaining` | number | Tokens restantes en el cubo |
| `window_reset_ms` | number | Milisegundos hasta que la ventana se reinicie |
| `requests_in_window` | number | Número de solicitudes en la ventana actual |
| `wait_ms` | number | Milisegundos de espera antes de la siguiente solicitud permitida |

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

### Reintentar

`flow.retry`

Reintentar operaciones fallidas con retroceso configurable

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_retries` | number | Yes | `3` | Número máximo de intentos de reintento |
| `initial_delay_ms` | number | No | `1000` | Retraso inicial antes del primer reintento en milisegundos |
| `backoff_multiplier` | number | No | `2.0` | Multiplicador para retroceso exponencial |
| `max_delay_ms` | number | No | `30000` | Retraso máximo entre reintentos en milisegundos |
| `retry_on_errors` | array | No | `[]` | Tipos de error para reintentar (vacío significa reintentar todos) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento para enrutamiento (reintento/éxito/fallido) |
| `attempt` | number | Número de intento actual |
| `max_retries` | number | Número máximo de reintentos configurados |
| `delay_ms` | number | Retraso antes del próximo reintento en milisegundos |
| `total_elapsed_ms` | number | Tiempo total transcurrido en milisegundos |
| `last_error` | object | Último mensaje de error |

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

### Inicio

`flow.start`

Nodo de inicio de flujo de trabajo explicito

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento de enrutamiento (start) |
| `started_at` | string | Hora de inicio |
| `workflow_id` | string | ID del flujo de trabajo |

**Example:** Example

```yaml
```

### Subflujo

`flow.subflow`

Referenciar y ejecutar un flujo de trabajo externo

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
| `__event__` | string | Evento de enrutamiento (success/error) |
| `result` | any | Resultado de ejecucion |
| `execution_id` | string | ID de ejecucion |
| `workflow_ref` | string | Referencia de flujo de trabajo |

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

### Cambiar

`flow.switch`

Ramificacion multiple basada en coincidencia de valores

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Value to match against cases (supports variable reference) |
| `cases` | array | Yes | `[{'id': 'case_1', 'value': 'case1', 'label': 'Case 1'}]` | List of case definitions |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento de enrutamiento (case:value o default) |
| `outputs` | object | Valores de salida por puerto |
| `matched_case` | string | Caso coincidente |
| `value` | any | Valor coincidente |

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

### Regular

`flow.throttle`

Regular la tasa de ejecución con un intervalo mínimo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `interval_ms` | number | Yes | - | Tiempo mínimo entre ejecuciones en milisegundos |
| `leading` | boolean | No | `True` | Ejecutar en el borde inicial (la primera llamada pasa inmediatamente) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento para enrutamiento (ejecutado/regulado) |
| `last_execution_ms` | number | Marca de tiempo de la última ejecución permitida |
| `calls_throttled` | number | Número de llamadas reguladas desde la última ejecución |
| `time_since_last_ms` | number | Tiempo transcurrido desde la última ejecución en milisegundos |
| `remaining_ms` | number | Milisegundos restantes hasta que se permita la próxima ejecución |

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

### Disparador

`flow.trigger`

Punto de entrada de flujo de trabajo - manual, webhook, programado o evento

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
| `__event__` | string | Evento de enrutamiento (triggered/error) |
| `trigger_data` | object | Datos del disparador |
| `trigger_type` | string | Tipo de disparador |
| `triggered_at` | string | Hora de disparo |

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
