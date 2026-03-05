# Queue

In-memory and Redis message queue operations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Retirer de la file](#retirer-de-la-file) | Retirer et retourner un élément d'une file d'attente |
| [Mettre en file d'attente](#mettre-en-file-d'attente) | Ajouter un élément à une file d'attente en mémoire ou Redis |
| [Taille de la file](#taille-de-la-file) | Obtenir la taille actuelle d'une file |

## Modules

### Retirer de la file

`queue.dequeue`

Retirer et retourner un élément d'une file d'attente

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Nom de la file d'attente à retirer |
| `backend` | string | No | `memory` | Backend de file d'attente à utiliser |
| `redis_url` | string | No | `redis://localhost:6379` | URL de connexion Redis |
| `timeout` | number | No | `0` | Délai d'attente en secondes (0 = non-bloquant) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | any | L'élément retiré (null si la file est vide) |
| `queue_name` | string | Nom de la file |
| `remaining` | number | Éléments restants dans la file |
| `empty` | boolean | Si la file était vide |

### Mettre en file d'attente

`queue.enqueue`

Ajouter un élément à une file d'attente en mémoire ou Redis

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Nom de la file d'attente à laquelle ajouter l'élément |
| `data` | string | Yes | - | Données à mettre en file d'attente (valeur sérialisable en JSON) |
| `backend` | string | No | `memory` | Backend de file d'attente à utiliser |
| `redis_url` | string | No | `redis://localhost:6379` | URL de connexion Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | Nom de la file |
| `position` | number | Position de l'élément dans la file |
| `queue_size` | number | Taille actuelle de la file après l'ajout |

### Taille de la file

`queue.size`

Obtenir la taille actuelle d'une file

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Nom de la file à vérifier |
| `backend` | string | No | `memory` | Backend de file d'attente à utiliser |
| `redis_url` | string | No | `redis://localhost:6379` | URL de connexion Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | Nom de la file |
| `size` | number | Nombre actuel d'éléments dans la file |
