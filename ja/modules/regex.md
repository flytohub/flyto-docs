# Regex

Pattern matching: match, extract, replace, split, and test.

**5 modules**

| Module | Description |
|--------|-------------|
| [正規表現抽出](#正規表現抽出) | テキストから名前付きグループを抽出する |
| [正規表現マッチ](#正規表現マッチ) | テキスト内のパターンのすべての一致を見つける |
| [正規表現置換](#正規表現置換) | テキスト内のパターン一致を置換する |
| [正規表現分割](#正規表現分割) | 正規表現パターンでテキストを分割する |
| [正規表現テスト](#正規表現テスト) | 文字列が正規表現パターンに一致するかテスト |

## Modules

### 正規表現抽出

`regex.extract`

テキストから名前付きグループを抽出する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 抽出するテキスト |
| `pattern` | string | Yes | - | 抽出するテキスト |
| `ignore_case` | boolean | No | `False` | 大文字小文字を区別しないマッチング |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | 大文字小文字を区別しないマッチング |
| `matched` | boolean | 抽出された名前付きグループ |
| `full_match` | string | 抽出された名前付きグループ |

### 正規表現マッチ

`regex.match`

テキスト内のパターンのすべての一致を見つける

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 検索するテキスト |
| `pattern` | string | Yes | - | 検索するテキスト |
| `ignore_case` | boolean | No | `False` | 正規表現パターン |
| `first_only` | boolean | No | `False` | 大文字小文字を区別しないマッチング |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `matches` | array | 最初の一致のみを返す |
| `count` | number | 一致のリスト |
| `groups` | array | 一致のリスト |

### 正規表現置換

`regex.replace`

テキスト内のパターン一致を置換する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 処理するテキスト |
| `pattern` | string | Yes | - | 処理するテキスト |
| `replacement` | string | Yes | - | 正規表現パターン |
| `ignore_case` | boolean | No | `False` | 置換テキスト（後方参照をサポート） |
| `count` | number | No | `0` | 大文字小文字を区別しないマッチング |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 最大置換数（0 = 無制限） |
| `replacements` | number | 置換後のテキスト |
| `original` | string | 置換後のテキスト |

### 正規表現分割

`regex.split`

正規表現パターンでテキストを分割する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 分割するテキスト |
| `pattern` | string | Yes | - | 分割するテキスト |
| `ignore_case` | boolean | No | `False` | 区切り用の正規表現パターン |
| `max_split` | number | No | `0` | 大文字小文字を区別しないマッチング |
| `remove_empty` | boolean | No | `False` | 最大分割数（0 = 無制限） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 結果から空の文字列を削除する |
| `count` | number | 分割された部分 |

### 正規表現テスト

`regex.test`

文字列が正規表現パターンに一致するかテスト

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | テストするテキスト |
| `pattern` | string | Yes | - | テストするテキスト |
| `ignore_case` | boolean | No | `False` | 正規表現パターン |
| `full_match` | boolean | No | `False` | 大文字小文字を区別しない一致 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | パターンが文字列全体に一致する必要がある |
| `pattern` | string | パターンが一致するかどうか |
