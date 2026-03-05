# Utilities

Datetime operations, delay, MD5 hash, and random utilities.

**9 modules**

| Module | Description |
|--------|-------------|
| [時間を加算](#時間を加算) | 日時に時間を加算 |
| [日時フォーマット](#日時フォーマット) | 日時を文字列にフォーマット |
| [日時パース](#日時パース) | 文字列を日時にパース |
| [時間を減算](#時間を減算) | 日時から時間を減算 |
| [現在日時](#現在日時) | 現在の日付と時刻を取得する |
| [遅延/スリープ](#遅延スリープ) | 指定した時間だけワークフローの実行を一時停止する |
| [MD5ハッシュ](#md5ハッシュ) | テキストのMD5ハッシュを計算する |
| [ランダム数値](#ランダム数値) | 範囲内のランダムな数値を生成する |
| [ランダム文字列](#ランダム文字列) | ランダムな文字列またはUUIDを生成する |

## Modules

### 時間を加算

`datetime.add`

日時に時間を加算

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `days` | number | No | `0` | Number of days to add (positive) or subtract (negative) |
| `hours` | number | No | `0` | Number of hours to add (positive) or subtract (negative) |
| `minutes` | number | No | `0` | Number of minutes to add (positive) or subtract (negative) |
| `seconds` | number | No | `0` | Number of seconds to add (positive) or subtract (negative) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 操作結果 |
| `timestamp` | number | 操作結果 |

**Example:** Add 7 days

```yaml
datetime: now
days: 7
```

**Example:** Add 2 hours 30 minutes

```yaml
datetime: 2024-01-15T10:00:00
hours: 2
minutes: 30
```

### 日時フォーマット

`datetime.format`

日時を文字列にフォーマット

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 操作結果 |
| `timestamp` | number | 操作結果 |

**Example:** Format current time

```yaml
datetime: now
format: %Y-%m-%d %H:%M:%S
```

**Example:** Custom date format

```yaml
datetime: 2024-01-15T10:30:00
format: %B %d, %Y
```

### 日時パース

`datetime.parse`

文字列を日時にパース

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime_string` | string | Yes | - | DateTime string to parse (ISO 8601 format recommended) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 操作結果 |
| `timestamp` | number | 操作結果 |
| `year` | number | 操作結果 |
| `month` | number | Unixタイムスタンプ |
| `day` | number | 年の部分 |
| `hour` | number | 月の部分 |
| `minute` | number | 日の部分 |
| `second` | number | 時の部分 |

**Example:** Parse ISO format

```yaml
datetime_string: 2024-01-15T10:30:00
```

**Example:** Parse custom format

```yaml
datetime_string: January 15, 2024
format: %B %d, %Y
```

### 時間を減算

`datetime.subtract`

日時から時間を減算

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `days` | number | No | `0` | Number of days to add (positive) or subtract (negative) |
| `hours` | number | No | `0` | Number of hours to add (positive) or subtract (negative) |
| `minutes` | number | No | `0` | Number of minutes to add (positive) or subtract (negative) |
| `seconds` | number | No | `0` | Number of seconds to add (positive) or subtract (negative) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 操作結果 |
| `timestamp` | number | 操作結果 |

**Example:** Subtract 7 days

```yaml
datetime: now
days: 7
```

**Example:** Subtract 1 hour

```yaml
datetime: 2024-01-15T10:00:00
hours: 1
```

### 現在日時

`utility.datetime.now`

現在の日付と時刻を取得する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`iso`, `unix`, `unix_ms`, `date`, `time`, `custom`) | No | `iso` | 出力フォーマット |
| `custom_format` | string | No | - | Python strftimeフォーマット（format=customの場合） |
| `timezone` | string | No | `UTC` | タイムゾーン（デフォルト: UTC） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `datetime` | string | フォーマットされた日時 |
| `timestamp` | number | Unixタイムスタンプ（ミリ秒） |
| `iso` | string | ISO形式の日時 |

**Example:** Example

```yaml
format: iso
```

**Example:** Example

```yaml
format: unix
```

### 遅延/スリープ

`utility.delay`

指定した時間だけワークフローの実行を一時停止する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | 待機時間（ミリ秒） |
| `duration_seconds` | number | No | - | 代替: 待機時間（秒） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `waited_ms` | number | 待機した時間（ミリ秒） |

**Example:** Example

```yaml
duration_seconds: 2
```

**Example:** Example

```yaml
duration_ms: 500
```

### MD5ハッシュ

`utility.hash.md5`

テキストのMD5ハッシュを計算する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | ハッシュするテキスト |
| `encoding` | string | No | `utf-8` | テキストエンコーディング |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `hash` | string | MD5ハッシュ値 |

**Example:** Example

```yaml
text: Hello World
```

### ランダム数値

`utility.random.number`

範囲内のランダムな数値を生成する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | 最小値（含む） |
| `max` | number | No | `100` | 最大値（含む） |
| `decimals` | number | No | `0` | 小数点以下の桁数（0で整数） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `value` | number | 生成されたランダム値 |

**Example:** Example

```yaml
min: 1
max: 100
decimals: 0
```

**Example:** Example

```yaml
min: 0
max: 1
decimals: 2
```

### ランダム文字列

`utility.random.string`

ランダムな文字列またはUUIDを生成する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | No | `16` | 文字列の長さ |
| `charset` | select (`alphanumeric`, `letters`, `lowercase`, `uppercase`, `numbers`, `hex`, `uuid`) | No | `alphanumeric` | 使用する文字セット |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `value` | string | 生成されたランダム文字列 |

**Example:** Example

```yaml
length: 16
charset: alphanumeric
```

**Example:** Example

```yaml
charset: uuid
```
