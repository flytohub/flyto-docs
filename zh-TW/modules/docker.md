# Docker

Build, run, inspect, and manage Docker containers.

**6 modules**

| Module | Description |
|--------|-------------|
| [建置 Docker 映像檔](#建置-docker-映像檔) | 從 Dockerfile 建置 Docker 映像檔 |
| [檢查 Docker 容器](#檢查-docker-容器) | 獲取 Docker 容器的詳細資訊 |
| [取得容器日誌](#取得容器日誌) | 從 Docker 容器取得日誌 |
| [列出 Docker 容器](#列出-docker-容器) | 列出 Docker 容器 |
| [執行 Docker 容器](#執行-docker-容器) | 從映像檔執行 Docker 容器 |
| [停止 Docker 容器](#停止-docker-容器) | 停止正在執行的 Docker 容器 |

## Modules

### 建置 Docker 映像檔

`docker.build`

從 Dockerfile 建置 Docker 映像檔

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | 建置上下文目錄的路徑 |
| `tag` | string | Yes | - | 命名並選擇性地標記映像檔（例如：myapp:latest） |
| `dockerfile` | string | No | - | Dockerfile 的路徑（相對於建置上下文） |
| `build_args` | object | No | - | 建置時的變數（例如：{"NODE_ENV": "production"}） |
| `no_cache` | boolean | No | `False` | 建置映像檔時不使用快取 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `image_id` | string | 建置後的映像檔 ID |
| `tag` | string | 應用於映像檔的標籤 |
| `size` | string | 建置後的映像檔大小 |

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

### 檢查 Docker 容器

`docker.inspect_container`

獲取 Docker 容器的詳細資訊

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | 要檢查的容器 ID 或名稱 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | 簡短的容器 ID |
| `name` | string | 容器名稱 |
| `state` | object | 容器狀態（狀態、運行中、pid、退出碼等） |
| `image` | string | 容器使用的映像 |
| `network_settings` | object | 網路設定（IP、埠、網路） |
| `mounts` | array | 卷和綁定掛載 |
| `config` | object | 容器設定（環境變數、命令、標籤等） |

**Example:** Inspect a container by name

```yaml
container: my-nginx
```

**Example:** Inspect a container by ID

```yaml
container: a1b2c3d4e5f6
```

### 取得容器日誌

`docker.logs`

從 Docker 容器取得日誌

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | 容器 ID 或名稱 |
| `tail` | number | No | `100` | 從日誌結尾顯示的行數 |
| `follow` | boolean | No | `False` | 跟隨日誌輸出（持續直到超時） |
| `timestamps` | boolean | No | `False` | 在日誌輸出中顯示時間戳 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `logs` | string | 容器日誌輸出 |
| `lines` | number | 返回的日誌行數 |

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

### 列出 Docker 容器

`docker.ps`

列出 Docker 容器

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `all` | boolean | No | `False` | 顯示所有容器（預設僅顯示運行中的） |
| `filters` | object | No | - | 篩選容器（例如：{"name": "my-app", "status": "running"}） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `containers` | array | 包含 ID、名稱、映像、狀態、埠的容器列表 |
| `count` | number | 找到的容器數量 |

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

### 執行 Docker 容器

`docker.run`

從映像檔執行 Docker 容器

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | string | Yes | - | 要執行的 Docker 映像檔（例如：nginx:latest） |
| `command` | string | No | - | 在容器內執行的指令 |
| `name` | string | No | - | 為容器指定名稱 |
| `ports` | object | No | - | 埠對應為主機:容器（例如：{"8080": "80"}） |
| `volumes` | object | No | - | 卷對應為主機路徑:容器路徑 |
| `env` | object | No | - | 在容器中設定的環境變數 |
| `detach` | boolean | No | `True` | 在背景執行容器 |
| `remove` | boolean | No | `False` | 容器退出時自動移除 |
| `network` | string | No | - | 將容器連接到網路 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | 建立的容器 ID |
| `status` | string | 執行後的容器狀態 |

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

### 停止 Docker 容器

`docker.stop`

停止正在執行的 Docker 容器

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | 要停止的容器 ID 或名稱 |
| `timeout` | number | No | `10` | 在殺死容器前等待的秒數 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | 已停止的容器 ID 或名稱 |
| `stopped` | boolean | 容器是否成功停止 |

**Example:** Stop a container by name

```yaml
container: my-nginx
```

**Example:** Stop with custom timeout

```yaml
container: my-app
timeout: 30
```
