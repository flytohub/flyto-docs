# Docker

Build, run, inspect, and manage Docker containers.

**6 modules**

| Module | Description |
|--------|-------------|
| [Crea Immagine Docker](#crea-immagine-docker) | Crea un'immagine Docker da un Dockerfile |
| [Ispeziona Contenitore Docker](#ispeziona-contenitore-docker) | Ottieni informazioni dettagliate su un contenitore Docker |
| [Ottieni log del container](#ottieni-log-del-container) | Ottieni log da un container Docker |
| [Elenca container Docker](#elenca-container-docker) | Elenca i container Docker |
| [Esegui Contenitore Docker](#esegui-contenitore-docker) | Esegui un contenitore Docker da un'immagine |
| [Ferma Contenitore Docker](#ferma-contenitore-docker) | Ferma un contenitore Docker in esecuzione |

## Modules

### Crea Immagine Docker

`docker.build`

Crea un'immagine Docker da un Dockerfile

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Percorso alla directory del contesto di build |
| `tag` | string | Yes | - | Nome e opzionalmente tag dell'immagine (es. myapp:latest) |
| `dockerfile` | string | No | - | Percorso al Dockerfile (relativo al contesto di build) |
| `build_args` | object | No | - | Variabili di build-time (es. {"NODE_ENV": "production"}) |
| `no_cache` | boolean | No | `False` | Non usare la cache durante la creazione dell'immagine |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `image_id` | string | ID dell'immagine creata |
| `tag` | string | Tag applicato all'immagine |
| `size` | string | Dimensione dell'immagine creata |

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

### Ispeziona Contenitore Docker

`docker.inspect_container`

Ottieni informazioni dettagliate su un contenitore Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID o nome del contenitore da ispezionare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | ID breve del contenitore |
| `name` | string | Nome del container |
| `state` | object | Stato del container (status, running, pid, exit_code, ecc.) |
| `image` | string | Immagine usata dal container |
| `network_settings` | object | Configurazione di rete (IP, porte, reti) |
| `mounts` | array | Volume e mount bind |
| `config` | object | Configurazione del container (env, cmd, etichette, ecc.) |

**Example:** Inspect a container by name

```yaml
container: my-nginx
```

**Example:** Inspect a container by ID

```yaml
container: a1b2c3d4e5f6
```

### Ottieni log del container

`docker.logs`

Ottieni log da un container Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID o nome del container |
| `tail` | number | No | `100` | Numero di linee da mostrare dalla fine dei log |
| `follow` | boolean | No | `False` | Segui l'output dei log (stream fino al timeout) |
| `timestamps` | boolean | No | `False` | Mostra timestamp nell'output dei log |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `logs` | string | Output dei log del container |
| `lines` | number | Numero di linee di log restituite |

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

### Elenca container Docker

`docker.ps`

Elenca i container Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `all` | boolean | No | `False` | Mostra tutti i container (predefinito mostra solo quelli in esecuzione) |
| `filters` | object | No | - | Filtra i container (es. {"name": "my-app", "status": "running"}) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `containers` | array | Elenco dei container con id, nome, immagine, stato, porte |
| `count` | number | Numero di container trovati |

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

### Esegui Contenitore Docker

`docker.run`

Esegui un contenitore Docker da un'immagine

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | string | Yes | - | Immagine Docker da eseguire (es. nginx:latest) |
| `command` | string | No | - | Comando da eseguire all'interno del contenitore |
| `name` | string | No | - | Assegna un nome al contenitore |
| `ports` | object | No | - | Mappature porte come host:contenitore (es. {"8080": "80"}) |
| `volumes` | object | No | - | Mappature volumi come percorso_host:percorso_contenitore |
| `env` | object | No | - | Variabili d'ambiente da impostare nel contenitore |
| `detach` | boolean | No | `True` | Esegui il contenitore in background |
| `remove` | boolean | No | `False` | Rimuovi automaticamente il contenitore quando termina |
| `network` | string | No | - | Collega il contenitore a una rete |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | ID del contenitore creato |
| `status` | string | Stato del contenitore dopo l'esecuzione |

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

### Ferma Contenitore Docker

`docker.stop`

Ferma un contenitore Docker in esecuzione

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID o nome del contenitore da fermare |
| `timeout` | number | No | `10` | Secondi da attendere prima di terminare il contenitore |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | ID o nome del contenitore fermato |
| `stopped` | boolean | Se il contenitore è stato fermato con successo |

**Example:** Stop a container by name

```yaml
container: my-nginx
```

**Example:** Stop with custom timeout

```yaml
container: my-app
timeout: 30
```
