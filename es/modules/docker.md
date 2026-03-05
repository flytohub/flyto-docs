# Docker

Build, run, inspect, and manage Docker containers.

**6 modules**

| Module | Description |
|--------|-------------|
| [Construir imagen de Docker](#construir-imagen-de-docker) | Construir una imagen de Docker desde un Dockerfile |
| [Inspeccionar contenedor de Docker](#inspeccionar-contenedor-de-docker) | Obtener información detallada sobre un contenedor de Docker |
| [Obtener registros del contenedor](#obtener-registros-del-contenedor) | Obtener registros de un contenedor Docker |
| [Listar contenedores Docker](#listar-contenedores-docker) | Listar contenedores Docker |
| [Ejecutar contenedor de Docker](#ejecutar-contenedor-de-docker) | Ejecutar un contenedor de Docker desde una imagen |
| [Detener contenedor de Docker](#detener-contenedor-de-docker) | Detener un contenedor de Docker en ejecución |

## Modules

### Construir imagen de Docker

`docker.build`

Construir una imagen de Docker desde un Dockerfile

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Ruta al directorio del contexto de construcción |
| `tag` | string | Yes | - | Nombrar y opcionalmente etiquetar la imagen (ej. miapp:última) |
| `dockerfile` | string | No | - | Ruta al Dockerfile (relativa al contexto de construcción) |
| `build_args` | object | No | - | Variables de tiempo de construcción (ej. {"NODE_ENV": "producción"}) |
| `no_cache` | boolean | No | `False` | No usar caché al construir la imagen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `image_id` | string | ID de la imagen construida |
| `tag` | string | Etiqueta aplicada a la imagen |
| `size` | string | Tamaño de la imagen construida |

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

### Inspeccionar contenedor de Docker

`docker.inspect_container`

Obtener información detallada sobre un contenedor de Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID o nombre del contenedor a inspeccionar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | ID corto del contenedor |
| `name` | string | Nombre del contenedor |
| `state` | object | Estado del contenedor (estatus, ejecutando, pid, código de salida, etc.) |
| `image` | string | Imagen utilizada por el contenedor |
| `network_settings` | object | Configuración de red (IP, puertos, redes) |
| `mounts` | array | Montajes de volúmenes y enlaces |
| `config` | object | Configuración del contenedor (env, cmd, etiquetas, etc.) |

**Example:** Inspect a container by name

```yaml
container: my-nginx
```

**Example:** Inspect a container by ID

```yaml
container: a1b2c3d4e5f6
```

### Obtener registros del contenedor

`docker.logs`

Obtener registros de un contenedor Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID o nombre del contenedor |
| `tail` | number | No | `100` | Número de líneas a mostrar desde el final de los registros |
| `follow` | boolean | No | `False` | Seguir la salida de los registros (fluye hasta el tiempo de espera) |
| `timestamps` | boolean | No | `False` | Mostrar timestamps en la salida de registros |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `logs` | string | Salida de registros del contenedor |
| `lines` | number | Número de líneas de registro devueltas |

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

### Listar contenedores Docker

`docker.ps`

Listar contenedores Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `all` | boolean | No | `False` | Mostrar todos los contenedores (por defecto solo muestra los que están ejecutando) |
| `filters` | object | No | - | Filtrar contenedores (ej. {"name": "my-app", "status": "running"}) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `containers` | array | Lista de contenedores con id, nombre, imagen, estado, puertos |
| `count` | number | Número de contenedores encontrados |

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

### Ejecutar contenedor de Docker

`docker.run`

Ejecutar un contenedor de Docker desde una imagen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | string | Yes | - | Imagen de Docker a ejecutar (ej. nginx:última) |
| `command` | string | No | - | Comando a ejecutar dentro del contenedor |
| `name` | string | No | - | Asignar un nombre al contenedor |
| `ports` | object | No | - | Mapeo de puertos como host:contenedor (ej. {"8080": "80"}) |
| `volumes` | object | No | - | Mapeo de volúmenes como ruta_host:ruta_contenedor |
| `env` | object | No | - | Variables de entorno a establecer en el contenedor |
| `detach` | boolean | No | `True` | Ejecutar el contenedor en segundo plano |
| `remove` | boolean | No | `False` | Eliminar automáticamente el contenedor cuando termine |
| `network` | string | No | - | Conectar el contenedor a una red |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | ID del contenedor creado |
| `status` | string | Estado del contenedor después de ejecutar |

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

### Detener contenedor de Docker

`docker.stop`

Detener un contenedor de Docker en ejecución

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID o nombre del contenedor a detener |
| `timeout` | number | No | `10` | Segundos a esperar antes de matar el contenedor |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | ID o nombre del contenedor detenido |
| `stopped` | boolean | Si el contenedor se detuvo con éxito |

**Example:** Stop a container by name

```yaml
container: my-nginx
```

**Example:** Stop with custom timeout

```yaml
container: my-app
timeout: 30
```
