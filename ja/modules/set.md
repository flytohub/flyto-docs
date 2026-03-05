# Set

Set operations: union, intersection, difference, unique.

**4 modules**

| Module | Description |
|--------|-------------|
| [集合差](#集合差) | 最初の配列にあるが他にはない要素を取得 |
| [集合積](#集合積) | 2つ以上の配列の共通部分を取得 |
| [集合和](#集合和) | 2つ以上の配列の和集合を取得 |
| [集合ユニーク](#集合ユニーク) | 配列から重複する要素を削除 |

## Modules

### 集合差

`set.difference`

最初の配列にあるが他にはない要素を取得

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | array | Yes | - | ソース配列 |
| `exclude` | array | Yes | - | ソース配列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 除外する要素の配列 |
| `count` | number | ソースにあるが除外配列にはない要素 |
| `removed_count` | number | ソースにあるが除外配列にはない要素 |

### 集合積

`set.intersection`

2つ以上の配列の共通部分を取得

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | 交差する配列（配列の配列） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 交差する配列（配列の配列） |
| `count` | number | すべての配列の共通部分 |

### 集合和

`set.union`

2つ以上の配列の和集合を取得

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | 結合する配列（配列の配列） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 結合する配列（配列の配列） |
| `count` | number | すべての配列の和集合 |

### 集合ユニーク

`set.unique`

配列から重複する要素を削除

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | 重複を除去する配列 |
| `preserve_order` | boolean | No | `True` | 重複を除去する配列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | 最初の出現順を保持 |
| `count` | number | ユニークな要素を持つ配列 |
| `duplicates_removed` | number | ユニークな要素を持つ配列 |
