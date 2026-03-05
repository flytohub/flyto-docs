# Math

Basic math operations: abs, ceil, floor, power, round.

**5 modules**

| Module | Description |
|--------|-------------|
| [Giá trị tuyệt đối](#giá-trị-tuyệt-đối) | Lấy giá trị tuyệt đối của một số |
| [Làm tròn lên](#làm-tròn-lên) | Làm tròn số lên số nguyên gần nhất |
| [Làm tròn xuống](#làm-tròn-xuống) | Làm tròn số xuống số nguyên gần nhất |
| [Lũy thừa](#lũy-thừa) | Nâng số lên lũy thừa |
| [Làm tròn số](#làm-tròn-số) | Làm tròn số đến số chữ số thập phân chỉ định |

## Modules

### Giá trị tuyệt đối

`math.abs`

Lấy giá trị tuyệt đối của một số

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Giá trị tuyệt đối |
| `original` | number | Giá trị tuyệt đối |

**Example:** Absolute of negative number

```yaml
number: -5
```

**Example:** Absolute of positive number

```yaml
number: 3.14
```

### Làm tròn lên

`math.ceil`

Làm tròn số lên số nguyên gần nhất

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Giá trị làm tròn lên |
| `original` | number | Giá trị làm tròn lên |

**Example:** Ceiling positive number

```yaml
number: 3.2
```

**Example:** Ceiling negative number

```yaml
number: -2.7
```

### Làm tròn xuống

`math.floor`

Làm tròn số xuống số nguyên gần nhất

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Giá trị làm tròn xuống |
| `original` | number | Giá trị làm tròn xuống |

**Example:** Floor positive number

```yaml
number: 3.7
```

**Example:** Floor negative number

```yaml
number: -2.3
```

### Lũy thừa

`math.power`

Nâng số lên lũy thừa

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `base` | number | Yes | - | Base number |
| `exponent` | number | Yes | - | Power to raise to |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Kết quả của cơ số nâng lên số mũ |
| `base` | number | Kết quả của cơ số nâng lên số mũ |
| `exponent` | number | Kết quả của cơ số nâng lên số mũ |

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

### Làm tròn số

`math.round`

Làm tròn số đến số chữ số thập phân chỉ định

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |
| `decimals` | number | No | `0` | Number of decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Giá trị đã làm tròn |
| `original` | number | Giá trị đã làm tròn |
| `decimals` | number | Giá trị đã làm tròn |

**Example:** Round to integer

```yaml
number: 3.7
```

**Example:** Round to 2 decimal places

```yaml
number: 3.14159
decimals: 2
```
