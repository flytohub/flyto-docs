# Compare

Threshold-based change detection.

**1 modules**

| Module | Description |
|--------|-------------|
| [Detectar Mudança](#detectar-mudança) | Detectar se um valor mudou além do limite (por quantidade ou porcentagem) |

## Modules

### Detectar Mudança

`compare.change`

Detectar se um valor mudou além do limite (por quantidade ou porcentagem)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `current_value` | number | Yes | - | The current/new value to compare |
| `previous_value` | number | Yes | - | The previous/old value to compare against |
| `mode` | select (`percent`, `absolute`, `any`) | No | `percent` | O valor anterior/antigo para comparar |
| `threshold` | number | No | `5` | Mudança mínima para acionar (5 = 5% ou 5 unidades) |
| `direction` | select (`both`, `up`, `down`) | No | `both` | Qual direção de mudança detectar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se a operação foi bem-sucedida |
| `changed` | boolean | Se a operação foi bem-sucedida |
| `direction` | string | Se a operação foi bem-sucedida |
| `change_percent` | number | Direção da mudança:  |
| `change_absolute` | number | Mudança percentual (positivo = aumento, negativo = diminuição) |
| `current_value` | number | The current value |
| `previous_value` | number | The previous value |
| `summary` | string | O valor atual |

**Example:** Crypto price alert (5% change)

```yaml
current_value: 44500
previous_value: 42000
mode: percent
threshold: 5
direction: both
```

**Example:** Stock drop alert

```yaml
current_value: 145.5
previous_value: 152.3
mode: percent
threshold: 3
direction: down
```

**Example:** Temperature change (absolute)

```yaml
current_value: 32
previous_value: 25
mode: absolute
threshold: 5
direction: up
```
