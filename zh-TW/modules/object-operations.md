# Object Operations

Deep merge, flatten, dot-path get/set, and unflatten.

**5 modules**

| Module | Description |
|--------|-------------|
| [深度合併](#深度合併) | 深度合併多個物件 |
| [扁平化物件](#扁平化物件) | 將巢狀物件扁平化為單層 |
| [取得值](#取得值) | 根據路徑從物件中取得值 |
| [設置值](#設置值) | 根據路徑在物件中設置值 |
| [還原物件](#還原物件) | 將點表示法的物件還原為巢狀 |

## Modules

### 深度合併

`object.deep_merge`

深度合併多個物件

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `objects` | array | Yes | - | 要合併的物件陣列 |
| `array_merge` | string | No | `replace` | 要合併的物件陣列 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 合併後的物件 |

### 扁平化物件

`object.flatten`

將巢狀物件扁平化為單層

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | 要扁平化的巢狀物件 |
| `separator` | string | No | `.` | 要扁平化的巢狀物件 |
| `max_depth` | number | No | `0` | 鍵值分隔符 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 扁平化的最大深度（0 = 無限制） |
| `keys` | array | 扁平化後的物件 |

### 取得值

`object.get`

根據路徑從物件中取得值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | 要從中取得值的物件 |
| `path` | string | Yes | - | 要從中取得值的物件 |
| `default` | any | No | - | 點表示法路徑 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `value` | any | 路徑未找到時的預設值 |
| `found` | boolean | 取得的值 |

### 設置值

`object.set`

根據路徑在物件中設置值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | 要修改的物件 |
| `path` | string | Yes | - | 要修改的物件 |
| `value` | any | Yes | - | 點表示法路徑 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 要設置的值 |

### 還原物件

`object.unflatten`

將點表示法的物件還原為巢狀

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `object` | object | Yes | - | 要還原的扁平化物件 |
| `separator` | string | No | `.` | 要還原的扁平化物件 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | 鍵值分隔符 |
