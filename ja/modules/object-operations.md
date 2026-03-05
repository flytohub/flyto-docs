# Object Operations

Deep merge, flatten, dot-path get/set, and unflatten.

**5 modules**

| Module | Description |
|--------|-------------|
| [ディープマージ](#ディープマージ) | 複数のオブジェクトをディープマージする |
| [オブジェクトをフラット化](#オブジェクトをフラット化) | ネストされたオブジェクトを単一レベルにフラット化する |
| [値を取得](#値を取得) | パスでオブジェクトから値を取得する |
| [値を設定](#値を設定) | パスでオブジェクトに値を設定する |
| [オブジェクトをアンフラット化](#オブジェクトをアンフラット化) | ドット表記のオブジェクトをネストに戻す |

## Modules

### ディープマージ

`object.deep_merge`

複数のオブジェクトをディープマージする

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | マージするオブジェクトの配列 |
| `array_merge` | string | No | `replace` | マージするオブジェクトの配列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | マージされたオブジェクト |

### オブジェクトをフラット化

`object.flatten`

ネストされたオブジェクトを単一レベルにフラット化する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | フラット化するネストされたオブジェクト |
| `separator` | string | No | `.` | フラット化するネストされたオブジェクト |
| `max_depth` | number | No | `0` | キーのセパレーター |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | フラット化する最大深度 (0 = 無制限) |
| `keys` | array | フラット化されたオブジェクト |

### 値を取得

`object.get`

パスでオブジェクトから値を取得する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | 値を取得するオブジェクト |
| `path` | string | Yes | - | 値を取得するオブジェクト |
| `default` | any | No | - | ドット表記のパス |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | any | パスが見つからない場合のデフォルト値 |
| `found` | boolean | 取得された値 |

### 値を設定

`object.set`

パスでオブジェクトに値を設定する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | 変更するオブジェクト |
| `path` | string | Yes | - | 変更するオブジェクト |
| `value` | any | Yes | - | ドット表記のパス |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 設定する値 |

### オブジェクトをアンフラット化

`object.unflatten`

ドット表記のオブジェクトをネストに戻す

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | アンフラット化するフラットなオブジェクト |
| `separator` | string | No | `.` | アンフラット化するフラットなオブジェクト |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | キーのセパレーター |
