# Math

Basic math operations: abs, ceil, floor, power, round.

**5 modules**

| Module | Description |
|--------|-------------|
| [絶対値](#絶対値) | 数値の絶対値を取得 |
| [切り上げ](#切り上げ) | 数値を最も近い整数に切り上げ |
| [切り下げ](#切り下げ) | 数値を最も近い整数に切り下げ |
| [べき乗/指数](#べき乗指数) | 数値をべき乗 |
| [四捨五入](#四捨五入) | 数値を指定した小数点以下の桁数に四捨五入 |

## Modules

### 絶対値

`math.abs`

数値の絶対値を取得

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | 絶対値 |
| `original` | number | 絶対値 |

**Example:** Absolute of negative number

```yaml
number: -5
```

**Example:** Absolute of positive number

```yaml
number: 3.14
```

### 切り上げ

`math.ceil`

数値を最も近い整数に切り上げ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | 切り上げ値 |
| `original` | number | 切り上げ値 |

**Example:** Ceiling positive number

```yaml
number: 3.2
```

**Example:** Ceiling negative number

```yaml
number: -2.7
```

### 切り下げ

`math.floor`

数値を最も近い整数に切り下げ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | 切り下げ値 |
| `original` | number | 切り下げ値 |

**Example:** Floor positive number

```yaml
number: 3.7
```

**Example:** Floor negative number

```yaml
number: -2.3
```

### べき乗/指数

`math.power`

数値をべき乗

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `base` | number | Yes | - | Base number |
| `exponent` | number | Yes | - | Power to raise to |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | 底を指数でべき乗した結果 |
| `base` | number | 底を指数でべき乗した結果 |
| `exponent` | number | 底を指数でべき乗した結果 |

**Example:** Square a number

```yaml
base: 5
exponent: 2
```

**Example:** Cube root

```yaml
base: 27
exponent: 0.333333
```

### 四捨五入

`math.round`

数値を指定した小数点以下の桁数に四捨五入

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |
| `decimals` | number | No | `0` | Number of decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | 四捨五入された値 |
| `original` | number | 四捨五入された値 |
| `decimals` | number | 四捨五入された値 |

**Example:** Round to integer

```yaml
number: 3.7
```

**Example:** Round to 2 decimal places

```yaml
number: 3.14159
decimals: 2
```
