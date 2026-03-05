# Docker

Build, run, inspect, and manage Docker containers.

**6 modules**

| Module | Description |
|--------|-------------|
| [Construire une image Docker](#construire-une-image-docker) | Construire une image Docker à partir d'un Dockerfile |
| [Inspecter un conteneur Docker](#inspecter-un-conteneur-docker) | Obtenir des informations détaillées sur un conteneur Docker |
| [Obtenir les journaux du conteneur](#obtenir-les-journaux-du-conteneur) | Obtenir les journaux d'un conteneur Docker |
| [Lister les conteneurs Docker](#lister-les-conteneurs-docker) | Lister les conteneurs Docker |
| [Exécuter un conteneur Docker](#exécuter-un-conteneur-docker) | Exécuter un conteneur Docker à partir d'une image |
| [Arrêter un conteneur Docker](#arrêter-un-conteneur-docker) | Arrêter un conteneur Docker en cours d'exécution |

## Modules

### Construire une image Docker

`docker.build`

Construire une image Docker à partir d'un Dockerfile

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Chemin vers le répertoire du contexte de construction |
| `tag` | string | Yes | - | Nommer et éventuellement taguer l'image (ex. monapp:latest) |
| `dockerfile` | string | No | - | Chemin vers le Dockerfile (relatif au contexte de construction) |
| `build_args` | object | No | - | Variables de construction (ex. {"NODE_ENV": "production"}) |
| `no_cache` | boolean | No | `False` | Ne pas utiliser le cache lors de la construction de l'image |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `image_id` | string | ID de l'image construite |
| `tag` | string | Tag appliqué à l'image |
| `size` | string | Taille de l'image construite |

**Example:** Build from current directory

```yaml
path: .
tag: myapp:latest
```

**Example:** Build with custom Dockerfile and args

```yaml
path: ./backend
tag: myapi:v1.0
dockerfile: Dockerfile.prod
build_args: {"NODE_ENV": "production"}
no_cache: true
```

### Inspecter un conteneur Docker

`docker.inspect_container`

Obtenir des informations détaillées sur un conteneur Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID ou nom du conteneur à inspecter |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | ID court du conteneur |
| `name` | string | Nom du conteneur |
| `state` | object | État du conteneur (statut, en cours, pid, code de sortie, etc.) |
| `image` | string | Image utilisée par le conteneur |
| `network_settings` | object | Configuration réseau (IP, ports, réseaux) |
| `mounts` | array | Volumes et montages |
| `config` | object | Configuration du conteneur (env, cmd, labels, etc.) |

**Example:** Inspect a container by name

```yaml
container: my-nginx
```

**Example:** Inspect a container by ID

```yaml
container: a1b2c3d4e5f6
```

### Obtenir les journaux du conteneur

`docker.logs`

Obtenir les journaux d'un conteneur Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID ou nom du conteneur |
| `tail` | number | No | `100` | Nombre de lignes à afficher depuis la fin des journaux |
| `follow` | boolean | No | `False` | Suivre la sortie des journaux (flux jusqu'à expiration) |
| `timestamps` | boolean | No | `False` | Afficher les horodatages dans la sortie des journaux |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `logs` | string | Sortie des journaux du conteneur |
| `lines` | number | Nombre de lignes de journaux retournées |

**Example:** Get last 50 lines

```yaml
container: my-nginx
tail: 50
```

**Example:** Get logs with timestamps

```yaml
container: my-app
tail: 100
timestamps: true
```

### Lister les conteneurs Docker

`docker.ps`

Lister les conteneurs Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `all` | boolean | No | `False` | Afficher tous les conteneurs (par défaut, seulement ceux en cours) |
| `filters` | object | No | - | Filtrer les conteneurs (par ex. {"name": "my-app", "status": "running"}) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `containers` | array | Liste des conteneurs avec id, nom, image, statut, ports |
| `count` | number | Nombre de conteneurs trouvés |

**Example:** List running containers

```yaml
```

**Example:** List all containers

```yaml
all: true
```

**Example:** Filter by name

```yaml
filters: {"name": "nginx"}
```

### Exécuter un conteneur Docker

`docker.run`

Exécuter un conteneur Docker à partir d'une image

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | string | Yes | - | Image Docker à exécuter (ex. nginx:latest) |
| `command` | string | No | - | Commande à exécuter dans le conteneur |
| `name` | string | No | - | Attribuer un nom au conteneur |
| `ports` | object | No | - | Mappages de ports comme hôte:conteneur (ex. {"8080": "80"}) |
| `volumes` | object | No | - | Mappages de volumes comme chemin_hôte:chemin_conteneur |
| `env` | object | No | - | Variables d'environnement à définir dans le conteneur |
| `detach` | boolean | No | `True` | Exécuter le conteneur en arrière-plan |
| `remove` | boolean | No | `False` | Supprimer automatiquement le conteneur lorsqu'il se termine |
| `network` | string | No | - | Connecter le conteneur à un réseau |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | ID du conteneur créé |
| `status` | string | Statut du conteneur après exécution |

**Example:** Run Nginx web server

```yaml
image: nginx:latest
name: my-nginx
ports: {"8080": "80"}
detach: true
```

**Example:** Run a one-off command

```yaml
image: alpine:latest
command: echo hello world
remove: true
detach: false
```

### Arrêter un conteneur Docker

`docker.stop`

Arrêter un conteneur Docker en cours d'exécution

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID ou nom du conteneur à arrêter |
| `timeout` | number | No | `10` | Secondes à attendre avant de tuer le conteneur |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | ID ou nom du conteneur arrêté |
| `stopped` | boolean | Si le conteneur a été arrêté avec succès |

**Example:** Stop a container by name

```yaml
container: my-nginx
```

**Example:** Stop with custom timeout

```yaml
container: my-app
timeout: 30
```
