# Meta

Module generation, listing, testing, and documentation.

**2 modules**

| Module | Description |
|--------|-------------|
| [Lister les modules disponibles](#lister-les-modules-disponibles) | Lister tous les modules disponibles dans le registre |
| [Mettre a jour la documentation des modules](#mettre-a-jour-la-documentation-des-modules) | Generer ou mettre a jour la documentation MODULES.md depuis le registre |

## Modules

### Lister les modules disponibles

`meta.modules.list`

Lister tous les modules disponibles dans le registre

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `category` | string | No | - | Filtrer les modules par categorie (ex: browser, data, ai) |
| `tags` | array | No | - | Filtrer les modules par categorie (ex: browser, data, ai) |
| `include_params` | boolean | No | `True` | Filtrer les modules par tags |
| `include_output` | boolean | No | `True` | Inclure le schema des parametres dans la sortie |
| `format` | select (`json`, `markdown`, `compact`) | No | `json` | Inclure le schema de sortie dans la reponse |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `modules` | array | Liste des modules enregistres |
| `count` | number | Le schema des parametres |
| `formatted` | string | Le schema de sortie |

**Example:** List all modules

```yaml
```

**Example:** List browser modules only

```yaml
category: browser
include_params: true
```

**Example:** List AI modules as markdown

```yaml
tags: ["ai", "llm"]
format: markdown
```

**Example:** Compact list for AI prompts

```yaml
format: compact
```

### Mettre a jour la documentation des modules

`meta.modules.update_docs`

Generer ou mettre a jour la documentation MODULES.md depuis le registre

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | No | `docs/MODULES.md` | Chemin pour ecrire le fichier MODULES.md |
| `include_examples` | boolean | No | `True` | Inclure des exemples d'utilisation dans la documentation |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `file_path` | string | Inclure des exemples d'utilisation dans la documentation |
| `modules_count` | number | Le chemin du fichier |
| `categories` | array | Le chemin du fichier |

**Example:** Update module documentation

```yaml
output_path: docs/MODULES.md
```
