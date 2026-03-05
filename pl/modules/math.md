# Math

Basic math operations: abs, ceil, floor, power, round.

**5 modules**

| Module | Description |
|--------|-------------|
| [Wartosc bezwzgledna](#wartosc-bezwzgledna) | Pobierz wartosc bezwzgledna liczby |
| [Sufit liczby](#sufit-liczby) | Zaokraglij liczbe w gore do najblizszej liczby calkowitej |
| [Podloga liczby](#podloga-liczby) | Zaokraglij liczbe w dol do najblizszej liczby calkowitej |
| [Potega/Wykladnik](#potegawykladnik) | Podnies liczbe do potegi |
| [Zaokraglij liczbe](#zaokraglij-liczbe) | Zaokraglij liczbe do okreslonej liczby miejsc dziesietnych |

## Modules

### Wartosc bezwzgledna

`math.abs`

Pobierz wartosc bezwzgledna liczby

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Wartosc bezwzgledna |
| `original` | number | Wartosc bezwzgledna |

**Example:** Absolute of negative number

```yaml
number: -5
```

**Example:** Absolute of positive number

```yaml
number: 3.14
```

### Sufit liczby

`math.ceil`

Zaokraglij liczbe w gore do najblizszej liczby calkowitej

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Wartosc sufitu |
| `original` | number | Wartosc sufitu |

**Example:** Ceiling positive number

```yaml
number: 3.2
```

**Example:** Ceiling negative number

```yaml
number: -2.7
```

### Podloga liczby

`math.floor`

Zaokraglij liczbe w dol do najblizszej liczby calkowitej

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Wartosc podlogi |
| `original` | number | Wartosc podlogi |

**Example:** Floor positive number

```yaml
number: 3.7
```

**Example:** Floor negative number

```yaml
number: -2.3
```

### Potega/Wykladnik

`math.power`

Podnies liczbe do potegi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `base` | number | Yes | - | Base number |
| `exponent` | number | Yes | - | Power to raise to |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Wynik podniesienia podstawy do wykladnika |
| `base` | number | Wynik podniesienia podstawy do wykladnika |
| `exponent` | number | Wynik podniesienia podstawy do wykladnika |

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

### Zaokraglij liczbe

`math.round`

Zaokraglij liczbe do okreslonej liczby miejsc dziesietnych

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |
| `decimals` | number | No | `0` | Number of decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Zaokraglona wartosc |
| `original` | number | Zaokraglona wartosc |
| `decimals` | number | Zaokraglona wartosc |

**Example:** Round to integer

```yaml
number: 3.7
```

**Example:** Round to 2 decimal places

```yaml
number: 3.14159
decimals: 2
```
