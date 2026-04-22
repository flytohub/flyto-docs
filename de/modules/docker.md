# Docker

Build, run, inspect, and manage Docker containers.

**6 modules**

| Module | Description |
|--------|-------------|
| [Build Docker Image](#build-docker-image) | Build a Docker image from a Dockerfile |
| [Inspect Docker Container](#inspect-docker-container) | Get detailed information about a Docker container |
| [Get Container Logs](#get-container-logs) | Get logs from a Docker container |
| [List Docker Containers](#list-docker-containers) | List Docker containers |
| [Run Docker Container](#run-docker-container) | Run a Docker container from an image |
| [Stop Docker Container](#stop-docker-container) | Stop a running Docker container |

## Modules

### Build Docker Image

`docker.build`

Build a Docker image from a Dockerfile

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to the build context directory |
| `tag` | string | Yes | - | Name and optionally tag the image (e.g. myapp:latest) |
| `dockerfile` | string | No | - | Path to the Dockerfile (relative to build context) |
| `build_args` | object | No | - | Build-time variables (e.g. {"NODE_ENV": "production"}) |
| `no_cache` | boolean | No | `False` | Do not use cache when building the image |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `image_id` | string | ID of the built image |
| `tag` | string | Tag applied to the image |
| `size` | string | Size of the built image |

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

### Inspect Docker Container

`docker.inspect_container`

Get detailed information about a Docker container

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | Container ID or name to inspect |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Short container ID |
| `name` | string | Container name |
| `state` | object | Container state (status, running, pid, exit_code, etc.) |
| `image` | string | Image used by the container |
| `network_settings` | object | Network configuration (IP, ports, networks) |
| `mounts` | array | Volume and bind mounts |
| `config` | object | Container configuration (env, cmd, labels, etc.) |

**Example:** Inspect a container by name

```yaml
container: my-nginx
```

**Example:** Inspect a container by ID

```yaml
container: a1b2c3d4e5f6
```

### Get Container Logs

`docker.logs`

Get logs from a Docker container

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | Container ID or name |
| `tail` | number | No | `100` | Number of lines to show from the end of the logs |
| `follow` | boolean | No | `False` | Follow log output (streams until timeout) |
| `timestamps` | boolean | No | `False` | Show timestamps in log output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `logs` | string | Container log output |
| `lines` | number | Number of log lines returned |

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

### List Docker Containers

`docker.ps`

List Docker containers

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `all` | boolean | No | `False` | Show all containers (default shows just running) |
| `filters` | object | No | - | Filter containers (e.g. {"name": "my-app", "status": "running"}) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `containers` | array | List of containers with id, name, image, status, ports |
| `count` | number | Number of containers found |

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

### Run Docker Container

`docker.run`

Run a Docker container from an image

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | string | Yes | - | Docker image to run (e.g. nginx:latest) |
| `command` | string | No | - | Command to run inside the container |
| `name` | string | No | - | Assign a name to the container |
| `ports` | object | No | - | Port mappings as host:container (e.g. {"8080": "80"}) |
| `volumes` | object | No | - | Volume mappings as host_path:container_path |
| `env` | object | No | - | Environment variables to set in the container |
| `detach` | boolean | No | `True` | Run container in background |
| `remove` | boolean | No | `False` | Automatically remove the container when it exits |
| `network` | string | No | - | Connect the container to a network |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | ID of the created container |
| `status` | string | Container status after run |

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

### Stop Docker Container

`docker.stop`

Stop a running Docker container

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | Container ID or name to stop |
| `timeout` | number | No | `10` | Seconds to wait before killing the container |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | ID or name of the stopped container |
| `stopped` | boolean | Whether the container was successfully stopped |

**Example:** Stop a container by name

```yaml
container: my-nginx
```

**Example:** Stop with custom timeout

```yaml
container: my-app
timeout: 30
```
