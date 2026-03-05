# Flow Control

Branching, loops, parallelism, subflows, triggers, and error handling.

**24 modules**

| Module | Description |
|--------|-------------|
| [Processo em Lote](#processo-em-lote) | Processar itens em lotes com tamanho configurável |
| [Ramificacao](#ramificacao) | Ramificacao condicional baseada em avaliacao de expressao |
| [Ponto de Parada](#ponto-de-parada) | Pausar execucao do workflow para aprovacao ou entrada humana |
| [Disjuntor](#disjuntor) | Padrão de disjuntor para prevenir falhas em cascata |
| [Container](#container) | Container de subfluxo incorporado para organizar workflows complexos |
| [Debounce](#debounce) | Debounce para evitar chamadas repetidas rápidas |
| [Fim](#fim) | No explicito de fim de workflow |
| [Manipulador de Erro](#manipulador-de-erro) | Captura e lida com erros de nós anteriores |
| [Gatilho de Fluxo de Trabalho de Erro](#gatilho-de-fluxo-de-trabalho-de-erro) | Ponto de entrada para fluxos de trabalho de erro - acionado quando outro fluxo de trabalho falha |
| [Para Cada](#para-cada) | Iterar sobre lista e executar passos para cada item |
| [Bifurcacao](#bifurcacao) | Dividir execucao em ramificacoes paralelas |
| [Ir Para](#ir-para) | Salto incondicional para outro passo |
| [Invoke Workflow](#invoke-workflow) | Execute an external workflow file |
| [Juncao](#juncao) | Aguardar ramificacoes paralelas completarem |
| [Loop](#loop) | Repetir passos N vezes usando roteamento de porta de saida |
| [Mesclar](#mesclar) | Mesclar multiplas entradas em uma unica saida |
| [Paralelo](#paralelo) | Executar várias tarefas em paralelo com diferentes estratégias |
| [Limite de Taxa](#limite-de-taxa) | Limitar taxa de execução usando token bucket ou janela deslizante |
| [Tentar Novamente](#tentar-novamente) | Tentar novamente operações falhas com recuo configurável |
| [Inicio](#inicio) | No explicito de inicio de workflow |
| [Subfluxo](#subfluxo) | Referenciar e executar workflow externo |
| [Switch](#switch) | Ramificacao multipla baseada em correspondencia de valor |
| [Controlar Taxa](#controlar-taxa) | Controlar a taxa de execução com intervalo mínimo |
| [Gatilho](#gatilho) | Ponto de entrada do workflow - manual, webhook, agendamento ou evento |

## Modules

### Processo em Lote

`flow.batch`

Processar itens em lotes com tamanho configurável

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `batch_size` | number | Yes | `10` | Número de itens por lote |
| `delay_ms` | number | No | `0` | Milissegundos para esperar entre lotes (para limitar a taxa) |
| `continue_on_error` | boolean | No | `False` | Continuar processando os lotes restantes se um falhar |
| `parallel_batches` | number | No | `1` | Continuar processando os lotes restantes se um falhar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Número de lotes para processar em paralelo (1 para sequencial) |
| `batch` | array | Evento para roteamento (lote/concluído/erro) |
| `batch_index` | number | Evento para roteamento (lote/concluído/erro) |
| `total_batches` | number | Itens do lote atual |
| `total_items` | number | Índice do lote atual (baseado em 0) |
| `is_last_batch` | boolean | Número total de lotes |
| `progress` | object | Número total de itens |

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

### Ramificacao

`flow.branch`

Ramificacao condicional baseada em avaliacao de expressao

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | string | Yes | - | Expression to evaluate (supports ==, !=, >, <, >=, <=, contains) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento de roteamento (true/false/error) |
| `outputs` | object | Valores de saida por porta |
| `result` | boolean | Resultado da ramificacao |
| `condition` | string | Valor da condicao |
| `resolved_condition` | string | Resultado da avaliacao da condicao |

**Example:** Example

```yaml
condition: ${search_step.count} > 0
```

**Example:** Example

```yaml
condition: ${api_call.status} == success
```

### Ponto de Parada

`flow.breakpoint`

Pausar execucao do workflow para aprovacao ou entrada humana

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
| `__event__` | string | Evento de roteamento (approved/rejected/timeout) |
| `breakpoint_id` | string | ID do ponto de parada |
| `status` | string | Status |
| `approved_by` | array | Aprovado por |
| `rejected_by` | array | Rejeitado por |
| `custom_inputs` | object | Valores de entrada personalizados |
| `comments` | array | Comentarios da revisao |
| `resolved_at` | string | Hora de resolucao |
| `wait_duration_ms` | integer | Duracao de espera (ms) |

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

### Disjuntor

`flow.circuit_breaker`

Padrão de disjuntor para prevenir falhas em cascata

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `failure_threshold` | number | Yes | `5` | Número de falhas antes de abrir o circuito |
| `reset_timeout_ms` | number | No | `60000` | Tempo em milissegundos antes do circuito transicionar para meio-aberto |
| `half_open_max` | number | No | `1` | Máximo de requisições permitidas no estado meio-aberto |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento para roteamento (permitido/rejeitado/meio-aberto) |
| `state` | string | Estado do circuito (fechado/aberto/meio-aberto) |
| `failure_count` | number | Número de falhas consecutivas |
| `last_failure_time_ms` | number | Timestamp da última falha em milissegundos |
| `time_until_half_open_ms` | number | Milissegundos até o circuito transicionar para meio-aberto |

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

Container de subfluxo incorporado para organizar workflows complexos

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
| `__event__` | string | Evento de roteamento (success/error) |
| `outputs` | object | Valores de saida por porta |
| `subflow_result` | object | Resultado do subfluxo |
| `exported_variables` | object | Variaveis exportadas |
| `node_count` | integer | Contagem de nos |
| `execution_time_ms` | number | Tempo de execucao (ms) |

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

### Debounce

`flow.debounce`

Debounce para evitar chamadas repetidas rápidas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `delay_ms` | number | Yes | - | Tempo de espera após a última chamada antes de executar |
| `leading` | boolean | No | `False` | Executar na borda inicial (primeira chamada aciona imediatamente) |
| `trailing` | boolean | No | `True` | Executar na borda final (após o atraso expirar) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento para roteamento (executado/debounced) |
| `last_call_ms` | number | Timestamp da última chamada em milissegundos |
| `calls_debounced` | number | Número de chamadas debounced desde a última execução |
| `time_since_last_ms` | number | Tempo decorrido desde a última chamada em milissegundos |
| `edge` | string | Qual borda acionou a execução (inicial/final) |

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

### Fim

`flow.end`

No explicito de fim de workflow

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `success_message` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento de roteamento (__end__) |
| `ended_at` | string | Hora de termino |
| `workflow_result` | object | Resultado do workflow |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
output_mapping: {"result": "${process.output}", "status": "success"}
```

### Manipulador de Erro

`flow.error_handle`

Captura e lida com erros de nós anteriores

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | `log_and_continue` | O que fazer com o erro |
| `include_traceback` | boolean | No | `True` | Incluir rastreamento completo na saída |
| `error_code_mapping` | object | No | `{}` | Incluir rastreamento completo na saída |
| `fallback_value` | any | No | - | Mapear códigos de erro para ações personalizadas |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Valor a ser usado quando o erro é suprimido |
| `outputs` | object | Evento para roteamento (manipulado/escalar) |
| `error_info` | object | Evento para roteamento (manipulado/escalar) |
| `action_taken` | string | Ação tomada |

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

### Gatilho de Fluxo de Trabalho de Erro

`flow.error_workflow_trigger`

Ponto de entrada para fluxos de trabalho de erro - acionado quando outro fluxo de trabalho falha

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `description` | string | No | - | Description of this error workflow |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Descrição deste fluxo de trabalho de erro |
| `error_context` | object | Evento para roteamento (acionado) |
| `triggered_at` | string | Timestamp ISO quando o fluxo de trabalho de erro foi acionado |

**Example:** Example

```yaml
description: Send Slack notification on workflow failure
```

**Example:** Example

```yaml
description: Log all workflow errors to monitoring system
```

### Para Cada

`flow.foreach`

Iterar sobre lista e executar passos para cada item

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | string | Yes | - | Lista de itens para iterar (suporta referencia ${variable}) |
| `steps` | array | No | - | Passos para executar para cada item |
| `item_var` | string | No | `item` | Nome da variavel para item atual |
| `index_var` | string | No | `index` | Nome da variavel para indice atual |
| `output_mode` | string | No | `collect` | Modo de coleta de resultados |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento de roteamento (iterate/done) |
| `__set_context` | object | Definir contexto |
| `outputs` | object | Valores de saida por porta |
| `iteration` | number | Indice de iteracao atual |
| `status` | string | Status da operacao |
| `results` | array | Resultados coletados |
| `count` | number | Contagem total de itens |

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

### Bifurcacao

`flow.fork`

Dividir execucao em ramificacoes paralelas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `branch_count` | number | No | `2` | Number of parallel branches |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento de roteamento (fork/error) |
| `input_data` | any | Dados de entrada |
| `branch_count` | integer | Contagem de ramificacoes |

**Example:** Example

```yaml
branch_count: 2
```

**Example:** Example

```yaml
branch_count: 3
```

### Ir Para

`flow.goto`

Salto incondicional para outro passo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `target` | string | Yes | - | Step ID to jump to |
| `max_iterations` | number | No | `100` | Maximum number of iterations (prevents infinite loops) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento de roteamento (goto) |
| `target` | string | Passo alvo |
| `iteration` | number | Contagem de iteracoes |

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

### Juncao

`flow.join`

Aguardar ramificacoes paralelas completarem

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
| `__event__` | string | Evento de roteamento (joined/timeout/error) |
| `joined_data` | array | Dados unidos |
| `completed_count` | integer | Contagem de ramificacoes completadas |
| `strategy` | string | Estrategia de juncao |

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

### Loop

`flow.loop`

Repetir passos N vezes usando roteamento de porta de saida

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `times` | number | Yes | `1` | Numero de repeticoes |
| `target` | string | No | - | Passo alvo (obsoleto) |
| `steps` | array | No | - | Passos para executar para cada iteracao |
| `index_var` | string | No | `index` | Nome da variavel para indice atual |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento de roteamento (iterate/done) |
| `outputs` | object | Valores de saida por porta |
| `iteration` | number | Iteracao atual |
| `status` | string | Status da operacao |
| `results` | array | Resultados coletados |
| `count` | number | Total de iteracoes |

**Example:** Example

```yaml
times: 3
```

**Example:** Example

```yaml
times: 5
steps: [{"module": "browser.click", "params": {"selector": ".next"}}]
```

### Mesclar

`flow.merge`

Mesclar multiplas entradas em uma unica saida

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`first`, `last`, `all`) | No | `all` | How to merge multiple inputs |
| `input_count` | number | No | `2` | Number of ports |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento de roteamento (merged/error) |
| `merged_data` | any | Dados mesclados |
| `input_count` | integer | Contagem de entradas |
| `strategy` | string | Estrategia de mesclagem |

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

Executar várias tarefas em paralelo com diferentes estratégias

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tasks` | array | Yes | - | Array de definições de tarefas para executar em paralelo |
| `mode` | string | No | `all` | Array de definições de tarefas para executar em paralelo |
| `timeout_ms` | number | No | `60000` | Maximum wait time in milliseconds |
| `fail_fast` | boolean | No | `True` | Parar todas as tarefas na primeira falha (somente para modo=all) |
| `concurrency_limit` | number | No | `0` | Parar todas as tarefas na primeira falha (somente para modo=all) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Número máximo de tarefas concorrentes (0 para ilimitado) |
| `results` | array | Evento para roteamento (concluído/parcial/erro) |
| `completed_count` | number | Evento para roteamento (concluído/parcial/erro) |
| `failed_count` | number | Resultados de todas as tarefas |
| `total_count` | number | Número de tarefas concluídas com sucesso |
| `mode` | string | Número de tarefas falhas |
| `duration_ms` | number | Número total de tarefas |

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

### Limite de Taxa

`flow.rate_limit`

Limitar taxa de execução usando token bucket ou janela deslizante

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_requests` | number | Yes | - | Número máximo de requisições permitidas por janela |
| `window_ms` | number | No | `60000` | Janela de tempo em milissegundos |
| `strategy` | string | No | `token_bucket` | Estratégia de limitação de taxa (token_bucket ou janela_deslizante) |
| `queue_overflow` | string | No | `wait` | Comportamento quando a fila está cheia (descartar ou erro) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento para roteamento (permitido/limitado) |
| `tokens_remaining` | number | Tokens restantes no bucket |
| `window_reset_ms` | number | Milissegundos até a janela reiniciar |
| `requests_in_window` | number | Número de requisições na janela atual |
| `wait_ms` | number | Milissegundos para esperar antes da próxima requisição permitida |

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

### Tentar Novamente

`flow.retry`

Tentar novamente operações falhas com recuo configurável

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_retries` | number | Yes | `3` | Número máximo de tentativas |
| `initial_delay_ms` | number | No | `1000` | Atraso inicial antes da primeira tentativa em milissegundos |
| `backoff_multiplier` | number | No | `2.0` | Multiplicador para recuo exponencial |
| `max_delay_ms` | number | No | `30000` | Atraso máximo entre tentativas em milissegundos |
| `retry_on_errors` | array | No | `[]` | Tipos de erro para tentar novamente (vazio significa tentar todos) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento para roteamento (tentar novamente/sucesso/falha) |
| `attempt` | number | Número atual da tentativa |
| `max_retries` | number | Número máximo de tentativas configuradas |
| `delay_ms` | number | Atraso antes da próxima tentativa em milissegundos |
| `total_elapsed_ms` | number | Tempo total decorrido em milissegundos |
| `last_error` | object | Última mensagem de erro |

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

No explicito de inicio de workflow

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento de roteamento (start) |
| `started_at` | string | Hora de inicio |
| `workflow_id` | string | ID do workflow |

**Example:** Example

```yaml
```

### Subfluxo

`flow.subflow`

Referenciar e executar workflow externo

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
| `__event__` | string | Evento de roteamento (success/error) |
| `result` | any | Resultado da execucao |
| `execution_id` | string | ID de execucao |
| `workflow_ref` | string | Referencia do workflow |

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

### Switch

`flow.switch`

Ramificacao multipla baseada em correspondencia de valor

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Value to match against cases (supports variable reference) |
| `cases` | array | Yes | `[{'id': 'case_1', 'value': 'case1', 'label': 'Case 1'}]` | List of case definitions |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento de roteamento (case:value ou default) |
| `outputs` | object | Valores de saida por porta |
| `matched_case` | string | Caso correspondido |
| `value` | any | Valor correspondido |

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

### Controlar Taxa

`flow.throttle`

Controlar a taxa de execução com intervalo mínimo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `interval_ms` | number | Yes | - | Tempo mínimo entre execuções em milissegundos |
| `leading` | boolean | No | `True` | Executar na borda inicial (primeira chamada passa imediatamente) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Evento para roteamento (executado/controlado) |
| `last_execution_ms` | number | Timestamp da última execução permitida |
| `calls_throttled` | number | Número de chamadas controladas desde a última execução |
| `time_since_last_ms` | number | Tempo decorrido desde a última execução em milissegundos |
| `remaining_ms` | number | Milissegundos restantes até a próxima execução permitida |

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

### Gatilho

`flow.trigger`

Ponto de entrada do workflow - manual, webhook, agendamento ou evento

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
| `__event__` | string | Evento de roteamento (triggered/error) |
| `trigger_data` | object | Dados do gatilho |
| `trigger_type` | string | Tipo de gatilho |
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
