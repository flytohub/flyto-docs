# Template

Execute reusable templates as workflow steps.

**1 modules**

| Module | Description |
|--------|-------------|
| [Invoquer le modèle](#invoquer-le-modèle) | Exécutez un modèle de votre bibliothèque comme une étape de flux de travail |

## Modules

### Invoquer le modèle

`template.invoke`

Exécutez un modèle de votre bibliothèque comme une étape de flux de travail

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `template_id` | string | Yes | - | ID of the template to execute |
| `library_id` | string | Yes | - | ID of the library item (purchase/fork/owned) |
| `timeout_seconds` | number | No | `300` | Maximum execution time in seconds |
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | ID de l'élément de la bibliothèque (achat/fork/propriété) |
| `result` | any | Temps d'exécution maximum en secondes |
| `template_id` | string | Événement pour le routage (succès/erreur) |
| `execution_time_ms` | number | Résultat de l'exécution du modèle |

**Example:** Example

```yaml
template_id: abc123
library_id: purchase_xyz
timeout_seconds: 60
```

**Example:** Example

```yaml
template_id: abc123
library_id: purchase_xyz
output_mapping: {"processed_data": "result.data"}
```
