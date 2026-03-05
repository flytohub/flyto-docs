# Math

Basic math operations: abs, ceil, floor, power, round.

**5 modules**

| Module | Description |
|--------|-------------|
| [Valeur absolue](#valeur-absolue) | Obtenir la valeur absolue d'un nombre |
| [Plafond](#plafond) | Arrondir un nombre vers le haut a l'entier le plus proche |
| [Plancher](#plancher) | Arrondir un nombre vers le bas a l'entier le plus proche |
| [Puissance/Exposant](#puissanceexposant) | Elever un nombre a une puissance |
| [Arrondir](#arrondir) | Arrondir un nombre au nombre de decimales specifie |

## Modules

### Valeur absolue

`math.abs`

Obtenir la valeur absolue d'un nombre

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Valeur absolue |
| `original` | number | Valeur absolue |

**Example:** Absolute of negative number

```yaml
number: -5
```

**Example:** Absolute of positive number

```yaml
number: 3.14
```

### Plafond

`math.ceil`

Arrondir un nombre vers le haut a l'entier le plus proche

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Valeur plafond |
| `original` | number | Valeur plafond |

**Example:** Ceiling positive number

```yaml
number: 3.2
```

**Example:** Ceiling negative number

```yaml
number: -2.7
```

### Plancher

`math.floor`

Arrondir un nombre vers le bas a l'entier le plus proche

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Valeur plancher |
| `original` | number | Valeur plancher |

**Example:** Floor positive number

```yaml
number: 3.7
```

**Example:** Floor negative number

```yaml
number: -2.3
```

### Puissance/Exposant

`math.power`

Elever un nombre a une puissance

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `base` | number | Yes | - | Base number |
| `exponent` | number | Yes | - | Power to raise to |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Resultat de la base elevee a l'exposant |
| `base` | number | Resultat de la base elevee a l'exposant |
| `exponent` | number | Resultat de la base elevee a l'exposant |

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

### Arrondir

`math.round`

Arrondir un nombre au nombre de decimales specifie

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | Number to process |
| `decimals` | number | No | `0` | Number of decimal places |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | Valeur arrondie |
| `original` | number | Valeur arrondie |
| `decimals` | number | Valeur arrondie |

**Example:** Round to integer

```yaml
number: 3.7
```

**Example:** Round to 2 decimal places

```yaml
number: 3.14159
decimals: 2
```
