# Scheduler

Cron parsing, delay, and interval calculations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Cron式を解析](#cron式を解析) | Cron式を解析し、次のN回の実行時間を計算 |
| [遅延 / スリープ](#遅延--スリープ) | 指定された期間実行を一時停止 |
| [間隔を計算](#間隔を計算) | 間隔時間と次の発生を計算 |

## Modules

### Cron式を解析

`scheduler.cron_parse`

Cron式を解析し、次のN回の実行時間を計算

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | 標準の5フィールドのCron式（例："0 9 * * MON-FRI"） |
| `count` | number | No | `5` | 計算する次の実行回数 |
| `timezone` | string | No | `0` | 計算用のタイムゾーン（UTCオフセット「+8」や「-5」、デフォルト「0」はUTC） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `expression` | string | 解析されたCron式 |
| `description` | string | スケジュールの人間が読める説明 |
| `next_runs` | array | 次の実行時間のISO日時文字列リスト |
| `is_valid` | boolean | 式が有効かどうか |

### 遅延 / スリープ

`scheduler.delay`

指定された期間実行を一時停止

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | 遅延する秒数 |
| `message` | string | No | - | 結果に含めるオプションのメッセージ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `delayed_seconds` | number | 実際に遅延した秒数 |
| `message` | string | 提供されたメッセージまたはデフォルト |

### 間隔を計算

`scheduler.interval`

間隔時間と次の発生を計算

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | No | `0` | 間隔の秒コンポーネント |
| `minutes` | number | No | `0` | 間隔の分コンポーネント |
| `hours` | number | No | `0` | 間隔の時間コンポーネント |
| `start_time` | string | No | - | ISO 8601形式の開始時間（デフォルト：現在） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `interval_seconds` | number | 合計間隔（秒） |
| `next_runs` | array | 次の5回の実行時間のISO日時文字列リスト |
| `human_readable` | string | 人間が読める間隔の説明 |
