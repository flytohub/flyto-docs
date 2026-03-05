# Random

Random number, UUID, choice, and shuffle.

**4 modules**

| Module | Description |
|--------|-------------|
| [ランダム選択](#ランダム選択) | 配列からランダムに要素を選ぶ |
| [ランダム数](#ランダム数) | 範囲内でランダムな数字を生成 |
| [配列シャッフル](#配列シャッフル) | 配列の要素をランダムにシャッフル |
| [UUID生成](#uuid生成) | ランダムなUUID（v4）を生成 |

## Modules

### ランダム選択

`random.choice`

配列からランダムに要素を選ぶ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | 選ぶ対象の配列 |
| `count` | number | No | `1` | 選ぶ対象の配列 |
| `unique` | boolean | No | `True` | 選ぶ要素の数 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `choice` | any | 重複なしでユニークな要素を選ぶ |
| `count` | number | 選ばれた要素 |

### ランダム数

`random.number`

範囲内でランダムな数字を生成

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | 最小値（含む） |
| `max` | number | No | `100` | 最小値（含む） |
| `integer` | boolean | No | `True` | 最大値（含む） |
| `precision` | number | No | `2` | 整数のみ生成 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `number` | number | 小数点以下の桁数 |
| `min` | number | 生成されたランダム数 |
| `max` | number | 生成されたランダム数 |

### 配列シャッフル

`random.shuffle`

配列の要素をランダムにシャッフル

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | シャッフルする配列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | シャッフルする配列 |
| `length` | number | シャッフルされた配列 |

### UUID生成

`random.uuid`

ランダムなUUID（v4）を生成

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `uppercase` | boolean | No | `False` | 大文字のUUIDを返す |
| `remove_hyphens` | boolean | No | `False` | 大文字のUUIDを返す |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `uuid` | string | UUIDからハイフンを削除 |
| `version` | number | 生成されたUUID |
