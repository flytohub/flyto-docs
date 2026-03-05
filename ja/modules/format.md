# Format

Number, currency, duration, filesize, and percentage formatting.

**5 modules**

| Module | Description |
|--------|-------------|
| [通貨フォーマット](#通貨フォーマット) | 数値を通貨としてフォーマット |
| [期間フォーマット](#期間フォーマット) | 秒数を人間が読める期間にフォーマット |
| [ファイルサイズフォーマット](#ファイルサイズフォーマット) | バイト数を人間が読めるファイルサイズにフォーマット |
| [数値フォーマット](#数値フォーマット) | 数値を区切り文字と小数でフォーマット |
| [パーセンテージフォーマット](#パーセンテージフォーマット) | 数値をパーセンテージとしてフォーマット |

## Modules

### 通貨フォーマット

`format.currency`

数値を通貨としてフォーマット

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `amount` | number | Yes | - | フォーマットする金額 |
| `currency` | string | No | `USD` | フォーマットする金額 |
| `decimal_places` | number | No | `2` | 小数点以下の桁数 |
| `symbol_position` | string | No | `before` | 小数点以下の桁数 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | フォーマットされた通貨文字列 |
| `original` | number | フォーマットされた通貨文字列 |
| `symbol` | string | フォーマットされた通貨文字列 |

### 期間フォーマット

`format.duration`

秒数を人間が読める期間にフォーマット

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | 秒単位の期間 |
| `format` | string | No | `short` | 秒単位の期間 |
| `show_zero` | boolean | No | `False` | ゼロの単位を表示 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | ゼロの単位を表示 |
| `original` | number | フォーマットされた期間文字列 |
| `parts` | object | フォーマットされた期間文字列 |

### ファイルサイズフォーマット

`format.filesize`

バイト数を人間が読めるファイルサイズにフォーマット

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bytes` | number | Yes | - | バイト単位のサイズ |
| `binary` | boolean | No | `False` | バイト単位のサイズ |
| `decimal_places` | number | No | `2` | 10進（KB, MB）ではなく2進単位（KiB, MiB）を使用 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 小数点以下の桁数 |
| `original` | number | フォーマットされたファイルサイズ文字列 |
| `unit` | string | フォーマットされたファイルサイズ文字列 |
| `value` | number | 元のバイト数 |

### 数値フォーマット

`format.number`

数値を区切り文字と小数でフォーマット

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | フォーマットする数値 |
| `decimal_places` | number | No | `2` | フォーマットする数値 |
| `thousand_separator` | string | No | `,` | 小数点以下の桁数 |
| `decimal_separator` | string | No | `.` | 千単位の区切り文字 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 小数点の区切り文字 |
| `original` | number | フォーマットされた数値文字列 |

### パーセンテージフォーマット

`format.percentage`

数値をパーセンテージとしてフォーマット

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | number | Yes | - | パーセンテージとしてフォーマットする値 |
| `is_ratio` | boolean | No | `True` | パーセンテージとしてフォーマットする値 |
| `decimal_places` | number | No | `1` | 入力は0から1の比率で、100倍する必要がある |
| `include_sign` | boolean | No | `False` | 小数点以下の桁数 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 正の値には+記号を含める |
| `original` | number | フォーマットされたパーセンテージ文字列 |
| `numeric` | number | フォーマットされたパーセンテージ文字列 |
