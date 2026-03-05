# String Operations

Text manipulation: case conversion, split, pad, slugify, template, and more.

**11 modules**

| Module | Description |
|--------|-------------|
| [小文字変換](#小文字変換) | 文字列を小文字に変換する |
| [文字列埋め](#文字列埋め) | 文字列を指定の長さに埋める |
| [文字列置換](#文字列置換) | 文字列内の部分文字列を置換する |
| [文字列反転](#文字列反転) | 文字列の文字を逆順にする |
| [スラッグ化](#スラッグ化) | テキストをURLに適したスラッグに変換 |
| [文字列分割](#文字列分割) | 区切り文字を使用して文字列を配列に分割する |
| [テンプレート](#テンプレート) | 変数置換でテンプレートをレンダリング |
| [タイトルケース変換](#タイトルケース変換) | 文字列をタイトルケースに変換する |
| [空白除去](#空白除去) | 文字列の両端から空白を除去する |
| [文字列切り詰め](#文字列切り詰め) | 文字列を最大長に切り詰める |
| [大文字変換](#大文字変換) | 文字列を大文字に変換する |

## Modules

### 小文字変換

`string.lowercase`

文字列を小文字に変換する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 小文字に変換された文字列 |
| `original` | string | 小文字に変換された文字列 |
| `status` | string | 操作ステータス |

### 文字列埋め

`string.pad`

文字列を指定の長さに埋める

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 埋めるテキスト |
| `length` | number | Yes | - | 埋めるテキスト |
| `pad_char` | string | No | ` ` | 目標の長さ |
| `position` | string | No | `end` | 埋める文字 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 埋められた文字列 |
| `original` | string | 埋められた文字列 |
| `added` | number | 埋められた文字列 |

### 文字列置換

`string.replace`

文字列内の部分文字列を置換する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `search` | string | Yes | - | The substring to search for in the input text |
| `replace` | string | Yes | - | Text to replace matches with (leave empty to remove matches) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 置換が適用された文字列 |
| `original` | string | 元の入力文字列 |
| `search` | string | 置換された検索文字列 |
| `replace` | string | 置換後の文字列 |
| `status` | string | 操作ステータス |

### 文字列反転

`string.reverse`

文字列の文字を逆順にする

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 反転された文字列 |
| `original` | string | 元の文字列 |
| `length` | number | 反転された文字列の長さ |

### スラッグ化

`string.slugify`

テキストをURLに適したスラッグに変換

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | スラッグ化するテキスト |
| `separator` | string | No | `-` | スラッグ化するテキスト |
| `lowercase` | boolean | No | `True` | 単語の区切り |
| `max_length` | number | No | `0` | 小文字に変換 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 最大スラッグ長 (0 = 無制限) |
| `original` | string | URLに適したスラッグ |

### 文字列分割

`string.split`

区切り文字を使用して文字列を配列に分割する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |
| `delimiter` | select (`,`, `;`, `	`, ` `, `
`, `|`, `-`, `_`) | No | ` ` | Character(s) to split the string on |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `parts` | array | 分割された文字列パーツの配列 |
| `result` | array | 分割された文字列パーツの配列 |
| `length` | number | 分割後のパーツ数 |
| `original` | string | 元の入力文字列 |
| `delimiter` | string | 使用された区切り文字 |
| `status` | string | 操作ステータス |

### テンプレート

`string.template`

変数置換でテンプレートをレンダリング

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template` | string | Yes | - | {<!-- -->{variable}<!-- -->} プレースホルダーを含むテンプレート文字列 |
| `variables` | object | Yes | - | 置換する変数 |
| `missing_value` | string | No | - | 未定義の変数の値 |
| `preserve_missing` | boolean | No | `False` | 未定義の変数の値 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 変数がない場合はプレースホルダーを保持 |
| `replaced` | number | レンダリングされたテンプレート |
| `missing` | array | レンダリングされたテンプレート |

### タイトルケース変換

`string.titlecase`

文字列をタイトルケースに変換する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | タイトルケースに変換された文字列 |

**Example:** Convert to title case

```yaml
text: hello world from flyto
```

**Example:** Format name

```yaml
text: john doe
```

### 空白除去

`string.trim`

文字列の両端から空白を除去する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 空白が除去された文字列 |
| `original` | string | 元の文字列 |
| `status` | string | 操作ステータス |

### 文字列切り詰め

`string.truncate`

文字列を最大長に切り詰める

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 切り詰めるテキスト |
| `length` | number | Yes | - | 切り詰めるテキスト |
| `suffix` | string | No | `...` | 最大長 |
| `word_boundary` | boolean | No | `False` | 省略時に追加するテキスト |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 単語の境界で切る |
| `original` | string | 切り詰められた文字列 |
| `truncated` | boolean | 切り詰められた文字列 |
| `removed` | number | 元の文字列 |

### 大文字変換

`string.uppercase`

文字列を大文字に変換する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | The text string to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 大文字に変換された文字列 |
| `original` | string | 元の文字列 |
| `status` | string | 操作ステータス |
