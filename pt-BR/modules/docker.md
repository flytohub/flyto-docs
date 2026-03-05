# Docker

Build, run, inspect, and manage Docker containers.

**6 modules**

| Module | Description |
|--------|-------------|
| [Construir Imagem Docker](#construir-imagem-docker) | Construir uma imagem Docker a partir de um Dockerfile |
| [Inspecionar Container Docker](#inspecionar-container-docker) | Obter informações detalhadas sobre um container Docker |
| [Obter Logs do Container](#obter-logs-do-container) | Obter logs de um container Docker |
| [Listar Containers Docker](#listar-containers-docker) | Listar containers Docker |
| [Executar Container Docker](#executar-container-docker) | Executar um container Docker a partir de uma imagem |
| [Parar Container Docker](#parar-container-docker) | Parar um container Docker em execução |

## Modules

### Construir Imagem Docker

`docker.build`

Construir uma imagem Docker a partir de um Dockerfile

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Caminho para o diretório de contexto de build |
| `tag` | string | Yes | - | Nome e opcionalmente tag da imagem (ex.: myapp:latest) |
| `dockerfile` | string | No | - | Caminho para o Dockerfile (relativo ao contexto de build) |
| `build_args` | object | No | - | Variáveis de tempo de build (ex.: {"NODE_ENV": "production"}) |
| `no_cache` | boolean | No | `False` | Não usar cache ao construir a imagem |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `image_id` | string | ID da imagem construída |
| `tag` | string | Tag aplicada à imagem |
| `size` | string | Tamanho da imagem construída |

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

### Inspecionar Container Docker

`docker.inspect_container`

Obter informações detalhadas sobre um container Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID ou nome do container para inspecionar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | ID curto do container |
| `name` | string | Nome do container |
| `state` | object | Estado do container (status, rodando, pid, código de saída, etc.) |
| `image` | string | Imagem usada pelo container |
| `network_settings` | object | Configuração de rede (IP, portas, redes) |
| `mounts` | array | Volumes e montagens vinculadas |
| `config` | object | Configuração do container (env, cmd, labels, etc.) |

**Example:** Inspect a container by name

```yaml
container: my-nginx
```

**Example:** Inspect a container by ID

```yaml
container: a1b2c3d4e5f6
```

### Obter Logs do Container

`docker.logs`

Obter logs de um container Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID ou nome do container |
| `tail` | number | No | `100` | Número de linhas para mostrar do final dos logs |
| `follow` | boolean | No | `False` | Seguir saída de log (fluxos até o tempo limite) |
| `timestamps` | boolean | No | `False` | Mostrar carimbos de tempo na saída de log |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `logs` | string | Saída de log do container |
| `lines` | number | Número de linhas de log retornadas |

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

### Listar Containers Docker

`docker.ps`

Listar containers Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `all` | boolean | No | `False` | Mostrar todos os containers (padrão mostra apenas os em execução) |
| `filters` | object | No | - | Filtrar containers (ex.: {"name": "my-app", "status": "running"}) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `containers` | array | Lista de containers com id, nome, imagem, status, portas |
| `count` | number | Número de containers encontrados |

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

### Executar Container Docker

`docker.run`

Executar um container Docker a partir de uma imagem

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | string | Yes | - | Imagem Docker para executar (ex.: nginx:latest) |
| `command` | string | No | - | Comando para executar dentro do container |
| `name` | string | No | - | Atribuir um nome ao container |
| `ports` | object | No | - | Mapeamento de portas como host:container (ex.: {"8080": "80"}) |
| `volumes` | object | No | - | Mapeamento de volumes como caminho_host:caminho_container |
| `env` | object | No | - | Variáveis de ambiente para definir no container |
| `detach` | boolean | No | `True` | Executar container em segundo plano |
| `remove` | boolean | No | `False` | Remover automaticamente o container quando ele sair |
| `network` | string | No | - | Conectar o container a uma rede |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | ID do container criado |
| `status` | string | Status do container após execução |

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

### Parar Container Docker

`docker.stop`

Parar um container Docker em execução

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID ou nome do container para parar |
| `timeout` | number | No | `10` | Segundos para esperar antes de matar o container |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | ID ou nome do container parado |
| `stopped` | boolean | Se o container foi parado com sucesso |

**Example:** Stop a container by name

```yaml
container: my-nginx
```

**Example:** Stop with custom timeout

```yaml
container: my-app
timeout: 30
```
