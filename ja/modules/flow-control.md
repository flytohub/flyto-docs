# Flow Control

Branching, loops, parallelism, subflows, triggers, and error handling.

**24 modules**

| Module | Description |
|--------|-------------|
| [バッチ処理](#バッチ処理) | 設定可能なサイズでアイテムをバッチ処理 |
| [分岐](#分岐) | 条件式に基づく分岐 |
| [ブレークポイント](#ブレークポイント) | 人間の承認または入力のためにワークフロー実行を一時停止 |
| [サーキットブレーカー](#サーキットブレーカー) | 連鎖的な障害を防ぐためのサーキットブレーカーパターン |
| [コンテナ](#コンテナ) | 複雑なワークフローを整理するための埋め込みサブフローコンテナ |
| [デバウンス](#デバウンス) | 急速な繰り返し呼び出しを防ぐためのデバウンス実行 |
| [終了](#終了) | 明示的なワークフロー終了ノード |
| [エラーハンドラー](#エラーハンドラー) | 上流ノードからのエラーをキャッチして処理 |
| [エラーワークフロートリガー](#エラーワークフロートリガー) | エラーワークフローのエントリーポイント - 別のワークフローが失敗したときにトリガーされる |
| [For Each ループ](#for-each-ループ) | リストを反復処理し、各項目に対してステップを実行 |
| [フォーク](#フォーク) | 実行を並列分岐に分割 |
| [ジャンプ](#ジャンプ) | 別のステップへ無条件ジャンプ |
| [ワークフローを呼び出す](#ワークフローを呼び出す) | 外部ワークフローファイルを実行する |
| [結合](#結合) | 並列分岐の完了を待機 |
| [ループ](#ループ) | 出力ポートルーティングを使用してステップをN回繰り返す |
| [マージ](#マージ) | 複数の入力を単一の出力にマージ |
| [並行](#並行) | 異なる戦略で複数のタスクを並行して実行 |
| [レート制限](#レート制限) | トークンバケットまたはスライディングウィンドウを使用したレート制限実行 |
| [再試行](#再試行) | 失敗した操作を再試行し、バックオフを設定可能 |
| [開始](#開始) | 明示的なワークフロー開始ノード |
| [サブフロー](#サブフロー) | 外部ワークフローを参照して実行 |
| [スイッチ](#スイッチ) | 値のマッチングに基づく多路分岐 |
| [スロットル](#スロットル) | 最小間隔で実行速度を制限 |
| [トリガー](#トリガー) | ワークフローエントリーポイント - 手動、Webhook、スケジュール、またはイベント |

## Modules

### バッチ処理

`flow.batch`

設定可能なサイズでアイテムをバッチ処理

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `batch_size` | number | Yes | `10` | バッチごとのアイテム数 |
| `delay_ms` | number | No | `0` | バッチ間で待機するミリ秒（レート制限用） |
| `continue_on_error` | boolean | No | `False` | 1つ失敗しても残りのバッチを処理し続ける |
| `parallel_batches` | number | No | `1` | 1つ失敗しても残りのバッチを処理し続ける |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 並列で処理するバッチ数（1は順次） |
| `batch` | array | ルーティング用イベント（バッチ/完了/エラー） |
| `batch_index` | number | ルーティング用イベント（バッチ/完了/エラー） |
| `total_batches` | number | 現在のバッチアイテム |
| `total_items` | number | 現在のバッチインデックス（0から始まる） |
| `is_last_batch` | boolean | バッチの総数 |
| `progress` | object | アイテムの総数 |

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

### 分岐

`flow.branch`

条件式に基づく分岐

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | string | Yes | - | Expression to evaluate (supports ==, !=, >, <, >=, <=, contains) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | ルーティングイベント (true/false/error) |
| `outputs` | object | ポート別出力値 |
| `result` | boolean | 分岐結果 |
| `condition` | string | 条件値 |
| `resolved_condition` | string | 条件評価結果 |

**Example:** Example

```yaml
condition: ${search_step.count} > 0
```

**Example:** Example

```yaml
condition: ${api_call.status} == success
```

### ブレークポイント

`flow.breakpoint`

人間の承認または入力のためにワークフロー実行を一時停止

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
| `__event__` | string | ルーティングイベント (approved/rejected/timeout) |
| `breakpoint_id` | string | ブレークポイントID |
| `status` | string | ステータス |
| `approved_by` | array | 承認者 |
| `rejected_by` | array | 却下者 |
| `custom_inputs` | object | カスタム入力値 |
| `comments` | array | レビューコメント |
| `resolved_at` | string | 解決時刻 |
| `wait_duration_ms` | integer | 待機時間（ミリ秒） |

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

### サーキットブレーカー

`flow.circuit_breaker`

連鎖的な障害を防ぐためのサーキットブレーカーパターン

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `failure_threshold` | number | Yes | `5` | サーキットを開く前の失敗回数 |
| `reset_timeout_ms` | number | No | `60000` | サーキットが半開に移行するまでの時間（ミリ秒） |
| `half_open_max` | number | No | `1` | 半開状態で許可される最大リクエスト数 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | ルーティング用イベント（許可/拒否/半開） |
| `state` | string | サーキットの状態（閉/開/半開） |
| `failure_count` | number | 連続失敗の回数 |
| `last_failure_time_ms` | number | 最後の失敗のタイムスタンプ（ミリ秒） |
| `time_until_half_open_ms` | number | サーキットが半開になるまでのミリ秒 |

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

### コンテナ

`flow.container`

複雑なワークフローを整理するための埋め込みサブフローコンテナ

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
| `__event__` | string | ルーティングイベント (success/error) |
| `outputs` | object | ポート別出力値 |
| `subflow_result` | object | サブフロー結果 |
| `exported_variables` | object | エクスポートされた変数 |
| `node_count` | integer | ノード数 |
| `execution_time_ms` | number | 実行時間（ミリ秒） |

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

### デバウンス

`flow.debounce`

急速な繰り返し呼び出しを防ぐためのデバウンス実行

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `delay_ms` | number | Yes | - | 最後の呼び出し後に実行するまでの待ち時間 |
| `leading` | boolean | No | `False` | リーディングエッジで実行（最初の呼び出しが即時トリガー） |
| `trailing` | boolean | No | `True` | トレーリングエッジで実行（遅延が終了した後） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | ルーティング用イベント（実行/デバウンス） |
| `last_call_ms` | number | 最後の呼び出しのタイムスタンプ（ミリ秒） |
| `calls_debounced` | number | 最後の実行以来デバウンスされた呼び出しの回数 |
| `time_since_last_ms` | number | 最後の呼び出しから経過した時間（ミリ秒） |
| `edge` | string | どのエッジが実行をトリガーしたか（リーディング/トレーリング） |

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

### 終了

`flow.end`

明示的なワークフロー終了ノード

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `success_message` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | ルーティングイベント (__end__) |
| `ended_at` | string | 終了時刻 |
| `workflow_result` | object | ワークフロー結果 |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
output_mapping: {"result": "${process.output}", "status": "success"}
```

### エラーハンドラー

`flow.error_handle`

上流ノードからのエラーをキャッチして処理

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | `log_and_continue` | エラーに対して何をするか |
| `include_traceback` | boolean | No | `True` | 出力に完全なスタックトレースを含める |
| `error_code_mapping` | object | No | `{}` | 出力に完全なスタックトレースを含める |
| `fallback_value` | any | No | - | エラーコードをカスタムアクションにマップ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | エラーが抑制されたときに使用する値 |
| `outputs` | object | ルーティング用イベント（処理済み/エスカレート） |
| `error_info` | object | ルーティング用イベント（処理済み/エスカレート） |
| `action_taken` | string | 取られたアクション |

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

### エラーワークフロートリガー

`flow.error_workflow_trigger`

エラーワークフローのエントリーポイント - 別のワークフローが失敗したときにトリガーされる

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `description` | string | No | - | Description of this error workflow |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | このエラーワークフローの説明 |
| `error_context` | object | ルーティング用イベント（トリガー済み） |
| `triggered_at` | string | エラーワークフローがトリガーされたときのISOタイムスタンプ |

**Example:** Example

```yaml
description: Send Slack notification on workflow failure
```

**Example:** Example

```yaml
description: Log all workflow errors to monitoring system
```

### For Each ループ

`flow.foreach`

リストを反復処理し、各項目に対してステップを実行

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | string | Yes | - | 反復処理する項目リスト（${variable} 参照対応） |
| `steps` | array | No | - | 各項目に対して実行するステップ |
| `item_var` | string | No | `item` | 現在の項目の変数名 |
| `index_var` | string | No | `index` | 現在のインデックスの変数名 |
| `output_mode` | string | No | `collect` | 結果収集モード |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | ルーティングイベント (iterate/done) |
| `__set_context` | object | 設定されたコンテキスト |
| `outputs` | object | ポート別出力値 |
| `iteration` | number | 現在の反復インデックス |
| `status` | string | 操作ステータス |
| `results` | array | 収集された結果 |
| `count` | number | 項目総数 |

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

### フォーク

`flow.fork`

実行を並列分岐に分割

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `branch_count` | number | No | `2` | Number of parallel branches |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | ルーティングイベント (fork/error) |
| `input_data` | any | 入力データ |
| `branch_count` | integer | 分岐数 |

**Example:** Example

```yaml
branch_count: 2
```

**Example:** Example

```yaml
branch_count: 3
```

### ジャンプ

`flow.goto`

別のステップへ無条件ジャンプ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `target` | string | Yes | - | Step ID to jump to |
| `max_iterations` | number | No | `100` | Maximum number of iterations (prevents infinite loops) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | ルーティングイベント (goto) |
| `target` | string | ターゲットステップ |
| `iteration` | number | 反復回数 |

**Example:** Example

```yaml
target: fetch_next_page
max_iterations: 10
```

**Example:** Example

```yaml
target: cleanup_step
```

### ワークフローを呼び出す

`flow.invoke`

外部ワークフローファイルを実行する

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
| `__event__` | string | 呼び出されたワークフローに渡すパラメータ |
| `result` | any | 最大実行時間（秒） |
| `workflow_id` | string | ルーティング用イベント（成功/エラー） |
| `execution_time_ms` | number | ワークフローの実行結果 |

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

### 結合

`flow.join`

並列分岐の完了を待機

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
| `__event__` | string | ルーティングイベント (joined/timeout/error) |
| `joined_data` | array | 結合されたデータ |
| `completed_count` | integer | 完了した分岐数 |
| `strategy` | string | 結合戦略 |

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

### ループ

`flow.loop`

出力ポートルーティングを使用してステップをN回繰り返す

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `times` | number | Yes | `1` | 繰り返し回数 |
| `target` | string | No | - | ターゲットステップ（非推奨） |
| `steps` | array | No | - | 各反復で実行するステップ |
| `index_var` | string | No | `index` | 現在のインデックスの変数名 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | ルーティングイベント (iterate/done) |
| `outputs` | object | ポート別出力値 |
| `iteration` | number | 現在の反復 |
| `status` | string | 操作ステータス |
| `results` | array | 収集された結果 |
| `count` | number | 反復総数 |

**Example:** Example

```yaml
times: 3
```

**Example:** Example

```yaml
times: 5
steps: [{"module": "browser.click", "params": {"selector": ".next"}}]
```

### マージ

`flow.merge`

複数の入力を単一の出力にマージ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`first`, `last`, `all`) | No | `all` | How to merge multiple inputs |
| `input_count` | number | No | `2` | Number of ports |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | ルーティングイベント (merged/error) |
| `merged_data` | any | マージされたデータ |
| `input_count` | integer | 入力数 |
| `strategy` | string | マージ戦略 |

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

### 並行

`flow.parallel`

異なる戦略で複数のタスクを並行して実行

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tasks` | array | Yes | - | 並行して実行するタスク定義の配列 |
| `mode` | string | No | `all` | 並行して実行するタスク定義の配列 |
| `timeout_ms` | number | No | `60000` | Maximum wait time in milliseconds |
| `fail_fast` | boolean | No | `True` | 最初の失敗で全タスクを停止（mode=all の場合のみ） |
| `concurrency_limit` | number | No | `0` | 最初の失敗で全タスクを停止（mode=all の場合のみ） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | 同時実行タスクの最大数（0は無制限） |
| `results` | array | ルーティング用のイベント（完了/部分/エラー） |
| `completed_count` | number | ルーティング用イベント（完了/部分/エラー） |
| `failed_count` | number | すべてのタスクの結果 |
| `total_count` | number | 正常に完了したタスクの数 |
| `mode` | string | 失敗したタスクの数 |
| `duration_ms` | number | タスクの総数 |

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

### レート制限

`flow.rate_limit`

トークンバケットまたはスライディングウィンドウを使用したレート制限実行

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_requests` | number | Yes | - | ウィンドウごとに許可される最大リクエスト数 |
| `window_ms` | number | No | `60000` | 時間ウィンドウ（ミリ秒） |
| `strategy` | string | No | `token_bucket` | レート制限戦略（トークンバケットまたはスライディングウィンドウ） |
| `queue_overflow` | string | No | `wait` | キューが満杯のときの動作（ドロップまたはエラー） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | ルーティング用イベント（許可/制限） |
| `tokens_remaining` | number | バケット内の残りトークン数 |
| `window_reset_ms` | number | ウィンドウがリセットされるまでのミリ秒 |
| `requests_in_window` | number | 現在のウィンドウ内のリクエスト数 |
| `wait_ms` | number | 次の許可されたリクエストまでの待ち時間（ミリ秒） |

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

### 再試行

`flow.retry`

失敗した操作を再試行し、バックオフを設定可能

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_retries` | number | Yes | `3` | 再試行の最大試行回数 |
| `initial_delay_ms` | number | No | `1000` | 最初の再試行までの初期遅延（ミリ秒） |
| `backoff_multiplier` | number | No | `2.0` | 指数バックオフの倍率 |
| `max_delay_ms` | number | No | `30000` | 再試行間の最大遅延（ミリ秒） |
| `retry_on_errors` | array | No | `[]` | 再試行するエラータイプ（空の場合はすべて再試行） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | ルーティング用イベント（再試行/成功/失敗） |
| `attempt` | number | 現在の試行回数 |
| `max_retries` | number | 設定された最大再試行回数 |
| `delay_ms` | number | 次の再試行までの遅延時間（ミリ秒） |
| `total_elapsed_ms` | number | 経過した合計時間（ミリ秒） |
| `last_error` | object | 最後のエラーメッセージ |

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

### 開始

`flow.start`

明示的なワークフロー開始ノード

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | ルーティングイベント (start) |
| `started_at` | string | 開始時刻 |
| `workflow_id` | string | ワークフローID |

**Example:** Example

```yaml
```

### サブフロー

`flow.subflow`

外部ワークフローを参照して実行

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
| `__event__` | string | ルーティングイベント (success/error) |
| `result` | any | 実行結果 |
| `execution_id` | string | 実行ID |
| `workflow_ref` | string | ワークフロー参照 |

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

### スイッチ

`flow.switch`

値のマッチングに基づく多路分岐

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Value to match against cases (supports variable reference) |
| `cases` | array | Yes | `[{'id': 'case_1', 'value': 'case1', 'label': 'Case 1'}]` | List of case definitions |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | ルーティングイベント (case:value または default) |
| `outputs` | object | ポート別出力値 |
| `matched_case` | string | マッチしたケース |
| `value` | any | マッチした値 |

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

### スロットル

`flow.throttle`

最小間隔で実行速度を制限

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `interval_ms` | number | Yes | - | 実行間の最小時間（ミリ秒） |
| `leading` | boolean | No | `True` | リーディングエッジで実行（最初の呼び出しは即時通過） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | ルーティング用イベント（実行済み/スロットル済み） |
| `last_execution_ms` | number | 最後に許可された実行のタイムスタンプ |
| `calls_throttled` | number | 最後の実行以降にスロットルされた呼び出し回数 |
| `time_since_last_ms` | number | 最後の実行から経過した時間（ミリ秒） |
| `remaining_ms` | number | 次の実行が許可されるまでの残り時間（ミリ秒） |

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

### トリガー

`flow.trigger`

ワークフローエントリーポイント - 手動、Webhook、スケジュール、またはイベント

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
| `__event__` | string | ルーティングイベント (triggered/error) |
| `trigger_data` | object | トリガーデータ |
| `trigger_type` | string | トリガータイプ |
| `triggered_at` | string | トリガー時刻 |

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
