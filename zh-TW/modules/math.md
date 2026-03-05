# Math

Basic math operations: abs, ceil, floor, power, round.

**5 modules**

| Module | Description |
|--------|-------------|
| [絕對值](#絕對值) | 取得數字的絕對值 |
| [向上取整](#向上取整) | 將數字向上取整到最接近的整數 |
| [向下取整](#向下取整) | 將數字向下取整到最接近的整數 |
| [次方/指數](#次方指數) | 將數字進行次方運算 |
| [四捨五入](#四捨五入) | 將數字四捨五入到指定的小數位 |

## Modules

### 絕對值

`math.abs`

取得數字的絕對值

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | 絕對值 |
| `original` | number | 原始值 |

**Example:** Absolute of negative number

```yaml
number: -5
```

**Example:** Absolute of positive number

```yaml
number: 3.14
```

### 向上取整

`math.ceil`

將數字向上取整到最接近的整數

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | 向上取整的值 |
| `original` | number | 原始值 |

**Example:** Ceiling positive number

```yaml
number: 3.2
```

**Example:** Ceiling negative number

```yaml
number: -2.7
```

### 向下取整

`math.floor`

將數字向下取整到最接近的整數

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | 向下取整的值 |
| `original` | number | 原始值 |

**Example:** Floor positive number

```yaml
number: 3.7
```

**Example:** Floor negative number

```yaml
number: -2.3
```

### 次方/指數

`math.power`

將數字進行次方運算

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `base` | number | Yes | - | Base number |
| `exponent` | number | Yes | - | Power to raise to |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | 底數的指數次方結果 |
| `base` | number | 底數 |
| `exponent` | number | 指數 |

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

將數字四捨五入到指定的小數位

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |
| `decimals` | number | No | `0` | Number of decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | 四捨五入後的值 |
| `original` | number | 原始值 |
| `decimals` | number | 小數位數 |

**Example:** Round to integer

```yaml
number: 3.7
```

**Example:** Round to 2 decimal places

```yaml
number: 3.14159
decimals: 2
```
