# Math

Basic math operations: abs, ceil, floor, power, round.

**5 modules**

| Module | Description |
|--------|-------------|
| [절대값](#절대값) | 숫자의 절대값 구하기 |
| [올림](#올림) | 숫자를 가장 가까운 정수로 올림 |
| [내림](#내림) | 숫자를 가장 가까운 정수로 내림 |
| [거듭제곱](#거듭제곱) | 숫자를 거듭제곱 |
| [반올림](#반올림) | 숫자를 지정된 소수 자릿수로 반올림 |

## Modules

### 절대값

`math.abs`

숫자의 절대값 구하기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | 절대값 |
| `original` | number | 절대값 |

**Example:** Absolute of negative number

```yaml
number: -5
```

**Example:** Absolute of positive number

```yaml
number: 3.14
```

### 올림

`math.ceil`

숫자를 가장 가까운 정수로 올림

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | 올림 값 |
| `original` | number | 올림 값 |

**Example:** Ceiling positive number

```yaml
number: 3.2
```

**Example:** Ceiling negative number

```yaml
number: -2.7
```

### 내림

`math.floor`

숫자를 가장 가까운 정수로 내림

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | 내림 값 |
| `original` | number | 내림 값 |

**Example:** Floor positive number

```yaml
number: 3.7
```

**Example:** Floor negative number

```yaml
number: -2.3
```

### 거듭제곱

`math.power`

숫자를 거듭제곱

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `base` | number | Yes | - | Base number |
| `exponent` | number | Yes | - | Power to raise to |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | 밑을 지수만큼 거듭제곱한 결과 |
| `base` | number | 밑을 지수만큼 거듭제곱한 결과 |
| `exponent` | number | 밑을 지수만큼 거듭제곱한 결과 |

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

### 반올림

`math.round`

숫자를 지정된 소수 자릿수로 반올림

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |
| `decimals` | number | No | `0` | Number of decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | 반올림된 값 |
| `original` | number | 반올림된 값 |
| `decimals` | number | 반올림된 값 |

**Example:** Round to integer

```yaml
number: 3.7
```

**Example:** Round to 2 decimal places

```yaml
number: 3.14159
decimals: 2
```
