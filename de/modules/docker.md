# Docker

Build, run, inspect, and manage Docker containers.

**6 modules**

| Module | Description |
|--------|-------------|
| [Docker-Image erstellen](#docker-image-erstellen) | Ein Docker-Image aus einer Dockerfile erstellen |
| [Docker-Container inspizieren](#docker-container-inspizieren) | Detaillierte Informationen über einen Docker-Container erhalten |
| [Container-Logs abrufen](#container-logs-abrufen) | Logs von einem Docker-Container abrufen |
| [Docker-Container auflisten](#docker-container-auflisten) | Docker-Container auflisten |
| [Docker-Container ausführen](#docker-container-ausführen) | Einen Docker-Container aus einem Image ausführen |
| [Docker-Container stoppen](#docker-container-stoppen) | Einen laufenden Docker-Container stoppen |

## Modules

### Docker-Image erstellen

`docker.build`

Ein Docker-Image aus einer Dockerfile erstellen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Pfad zum Build-Kontext-Verzeichnis |
| `tag` | string | Yes | - | Bild benennen und optional taggen (z.B. myapp:latest) |
| `dockerfile` | string | No | - | Pfad zur Dockerfile (relativ zum Build-Kontext) |
| `build_args` | object | No | - | Build-Zeit-Variablen (z.B. {"NODE_ENV": "production"}) |
| `no_cache` | boolean | No | `False` | Cache beim Erstellen des Images nicht verwenden |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `image_id` | string | ID des erstellten Images |
| `tag` | string | Tag, das auf das Image angewendet wurde |
| `size` | string | Größe des erstellten Images |

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

### Docker-Container inspizieren

`docker.inspect_container`

Detaillierte Informationen über einen Docker-Container erhalten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | Container-ID oder -Name zum Inspizieren |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Kurze Container-ID |
| `name` | string | Container-Name |
| `state` | object | Container-Status (Status, läuft, PID, Exit-Code, etc.) |
| `image` | string | Vom Container verwendetes Image |
| `network_settings` | object | Netzwerkkonfiguration (IP, Ports, Netzwerke) |
| `mounts` | array | Volume- und Bind-Mounts |
| `config` | object | Container-Konfiguration (Env, Cmd, Labels, etc.) |

**Example:** Inspect a container by name

```yaml
container: my-nginx
```

**Example:** Inspect a container by ID

```yaml
container: a1b2c3d4e5f6
```

### Container-Logs abrufen

`docker.logs`

Logs von einem Docker-Container abrufen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | Container-ID oder Name |
| `tail` | number | No | `100` | Anzahl der Zeilen, die vom Ende der Logs angezeigt werden |
| `follow` | boolean | No | `False` | Log-Ausgabe folgen (streamt bis zum Timeout) |
| `timestamps` | boolean | No | `False` | Zeitstempel in der Log-Ausgabe anzeigen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `logs` | string | Container-Log-Ausgabe |
| `lines` | number | Anzahl der zurückgegebenen Log-Zeilen |

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

### Docker-Container auflisten

`docker.ps`

Docker-Container auflisten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `all` | boolean | No | `False` | Alle Container anzeigen (standardmäßig nur laufende) |
| `filters` | object | No | - | Container filtern (z.B. {"name": "my-app", "status": "running"}) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `containers` | array | Liste der Container mit ID, Name, Image, Status, Ports |
| `count` | number | Anzahl der gefundenen Container |

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

### Docker-Container ausführen

`docker.run`

Einen Docker-Container aus einem Image ausführen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | string | Yes | - | Docker-Image zum Ausführen (z.B. nginx:latest) |
| `command` | string | No | - | Befehl, der im Container ausgeführt wird |
| `name` | string | No | - | Dem Container einen Namen zuweisen |
| `ports` | object | No | - | Port-Zuordnungen als Host:Container (z.B. {"8080": "80"}) |
| `volumes` | object | No | - | Volume-Zuordnungen als Host_Pfad:Container_Pfad |
| `env` | object | No | - | Umgebungsvariablen, die im Container gesetzt werden |
| `detach` | boolean | No | `True` | Container im Hintergrund ausführen |
| `remove` | boolean | No | `False` | Container automatisch entfernen, wenn er beendet wird |
| `network` | string | No | - | Den Container mit einem Netzwerk verbinden |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | ID des erstellten Containers |
| `status` | string | Container-Status nach dem Ausführen |

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

### Docker-Container stoppen

`docker.stop`

Einen laufenden Docker-Container stoppen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | Container-ID oder -Name zum Stoppen |
| `timeout` | number | No | `10` | Sekunden, die gewartet werden, bevor der Container beendet wird |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | ID oder Name des gestoppten Containers |
| `stopped` | boolean | Ob der Container erfolgreich gestoppt wurde |

**Example:** Stop a container by name

```yaml
container: my-nginx
```

**Example:** Stop with custom timeout

```yaml
container: my-app
timeout: 30
```
