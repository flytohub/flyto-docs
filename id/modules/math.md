# Math

Basic math operations: abs, ceil, floor, power, round.

**5 modules**

| Module | Description |
|--------|-------------|
| [Nilai Absolut](#nilai-absolut) | Dapatkan nilai absolut dari angka |
| [Ceiling Angka](#ceiling-angka) | Bulatkan angka ke atas ke integer terdekat |
| [Floor Angka](#floor-angka) | Bulatkan angka ke bawah ke integer terdekat |
| [Pangkat/Eksponen](#pangkateksponen) | Pangkatkan angka |
| [Bulatkan Angka](#bulatkan-angka) | Bulatkan angka ke tempat desimal tertentu |

## Modules

### Nilai Absolut

`math.abs`

Dapatkan nilai absolut dari angka

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Nilai absolut |
| `original` | number | Nilai absolut |

**Example:** Absolute of negative number

```yaml
number: -5
```

**Example:** Absolute of positive number

```yaml
number: 3.14
```

### Ceiling Angka

`math.ceil`

Bulatkan angka ke atas ke integer terdekat

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Nilai ceiling |
| `original` | number | Nilai ceiling |

**Example:** Ceiling positive number

```yaml
number: 3.2
```

**Example:** Ceiling negative number

```yaml
number: -2.7
```

### Floor Angka

`math.floor`

Bulatkan angka ke bawah ke integer terdekat

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Nilai floor |
| `original` | number | Nilai floor |

**Example:** Floor positive number

```yaml
number: 3.7
```

**Example:** Floor negative number

```yaml
number: -2.3
```

### Pangkat/Eksponen

`math.power`

Pangkatkan angka

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `base` | number | Yes | - | Base number |
| `exponent` | number | Yes | - | Power to raise to |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Hasil basis dipangkatkan eksponen |
| `base` | number | Hasil basis dipangkatkan eksponen |
| `exponent` | number | Hasil basis dipangkatkan eksponen |

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

### Bulatkan Angka

`math.round`

Bulatkan angka ke tempat desimal tertentu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |
| `decimals` | number | No | `0` | Number of decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Nilai yang dibulatkan |
| `original` | number | Nilai yang dibulatkan |
| `decimals` | number | Nilai yang dibulatkan |

**Example:** Round to integer

```yaml
number: 3.7
```

**Example:** Round to 2 decimal places

```yaml
number: 3.14159
decimals: 2
```
