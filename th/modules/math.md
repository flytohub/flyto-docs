# Math

Basic math operations: abs, ceil, floor, power, round.

**5 modules**

| Module | Description |
|--------|-------------|
| [ค่าสัมบูรณ์](#ค่าสัมบูรณ์) | รับค่าสัมบูรณ์ของตัวเลข |
| [ปัดขึ้น](#ปัดขึ้น) | ปัดเศษตัวเลขขึ้นเป็นจำนวนเต็มที่ใกล้ที่สุด |
| [ปัดลง](#ปัดลง) | ปัดเศษตัวเลขลงเป็นจำนวนเต็มที่ใกล้ที่สุด |
| [ยกกำลัง](#ยกกำลัง) | ยกกำลังตัวเลข |
| [ปัดเศษ](#ปัดเศษ) | ปัดเศษตัวเลขตามจำนวนทศนิยมที่กำหนด |

## Modules

### ค่าสัมบูรณ์

`math.abs`

รับค่าสัมบูรณ์ของตัวเลข

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | ค่าสัมบูรณ์ |
| `original` | number | ค่าสัมบูรณ์ |

**Example:** Absolute of negative number

```yaml
number: -5
```

**Example:** Absolute of positive number

```yaml
number: 3.14
```

### ปัดขึ้น

`math.ceil`

ปัดเศษตัวเลขขึ้นเป็นจำนวนเต็มที่ใกล้ที่สุด

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | ค่าที่ปัดขึ้น |
| `original` | number | ค่าที่ปัดขึ้น |

**Example:** Ceiling positive number

```yaml
number: 3.2
```

**Example:** Ceiling negative number

```yaml
number: -2.7
```

### ปัดลง

`math.floor`

ปัดเศษตัวเลขลงเป็นจำนวนเต็มที่ใกล้ที่สุด

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | ค่าที่ปัดลง |
| `original` | number | ค่าที่ปัดลง |

**Example:** Floor positive number

```yaml
number: 3.7
```

**Example:** Floor negative number

```yaml
number: -2.3
```

### ยกกำลัง

`math.power`

ยกกำลังตัวเลข

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `base` | number | Yes | - | Base number |
| `exponent` | number | Yes | - | Power to raise to |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | ผลของฐานยกกำลังเลขชี้กำลัง |
| `base` | number | ผลของฐานยกกำลังเลขชี้กำลัง |
| `exponent` | number | ผลของฐานยกกำลังเลขชี้กำลัง |

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

### ปัดเศษ

`math.round`

ปัดเศษตัวเลขตามจำนวนทศนิยมที่กำหนด

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |
| `decimals` | number | No | `0` | Number of decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | ค่าที่ปัดเศษ |
| `original` | number | ค่าที่ปัดเศษ |
| `decimals` | number | ค่าที่ปัดเศษ |

**Example:** Round to integer

```yaml
number: 3.7
```

**Example:** Round to 2 decimal places

```yaml
number: 3.14159
decimals: 2
```
