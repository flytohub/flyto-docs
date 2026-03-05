# Docker

Build, run, inspect, and manage Docker containers.

**6 modules**

| Module | Description |
|--------|-------------|
| [Tạo Docker Image](#tạo-docker-image) | Tạo một Docker image từ Dockerfile |
| [Kiểm tra Docker Container](#kiểm-tra-docker-container) | Lấy thông tin chi tiết về Docker container |
| [Lấy nhật ký container](#lấy-nhật-ký-container) | Lấy nhật ký từ container Docker |
| [Liệt kê container Docker](#liệt-kê-container-docker) | Liệt kê container Docker |
| [Chạy Docker Container](#chạy-docker-container) | Chạy một Docker container từ image |
| [Dừng Docker Container](#dừng-docker-container) | Dừng một Docker container đang chạy |

## Modules

### Tạo Docker Image

`docker.build`

Tạo một Docker image từ Dockerfile

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Đường dẫn đến thư mục ngữ cảnh build |
| `tag` | string | Yes | - | Tên và tùy chọn tag cho image (ví dụ: myapp:latest) |
| `dockerfile` | string | No | - | Đường dẫn đến Dockerfile (tương đối với ngữ cảnh build) |
| `build_args` | object | No | - | Biến trong thời gian build (ví dụ: {"NODE_ENV": "production"}) |
| `no_cache` | boolean | No | `False` | Không sử dụng cache khi tạo image |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `image_id` | string | ID của image đã tạo |
| `tag` | string | Tag được áp dụng cho image |
| `size` | string | Kích thước của image đã tạo |

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

### Kiểm tra Docker Container

`docker.inspect_container`

Lấy thông tin chi tiết về Docker container

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID hoặc tên container để kiểm tra |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | ID ngắn của container |
| `name` | string | Tên container |
| `state` | object | Trạng thái container (trạng thái, đang chạy, pid, mã thoát, v.v.) |
| `image` | string | Hình ảnh được container sử dụng |
| `network_settings` | object | Cấu hình mạng (IP, cổng, mạng) |
| `mounts` | array | Volume và bind mounts |
| `config` | object | Cấu hình container (env, cmd, nhãn, v.v.) |

**Example:** Inspect a container by name

```yaml
container: my-nginx
```

**Example:** Inspect a container by ID

```yaml
container: a1b2c3d4e5f6
```

### Lấy nhật ký container

`docker.logs`

Lấy nhật ký từ container Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID hoặc tên container |
| `tail` | number | No | `100` | Số dòng hiển thị từ cuối nhật ký |
| `follow` | boolean | No | `False` | Theo dõi đầu ra nhật ký (truyền đến khi hết thời gian chờ) |
| `timestamps` | boolean | No | `False` | Hiển thị dấu thời gian trong đầu ra nhật ký |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `logs` | string | Đầu ra nhật ký container |
| `lines` | number | Số dòng nhật ký được trả về |

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

### Liệt kê container Docker

`docker.ps`

Liệt kê container Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `all` | boolean | No | `False` | Hiển thị tất cả container (mặc định chỉ hiển thị đang chạy) |
| `filters` | object | No | - | Lọc container (ví dụ: {"name": "my-app", "status": "running"}) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `containers` | array | Danh sách container với id, tên, hình ảnh, trạng thái, cổng |
| `count` | number | Số lượng container tìm thấy |

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

### Chạy Docker Container

`docker.run`

Chạy một Docker container từ image

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | string | Yes | - | Docker image để chạy (ví dụ: nginx:latest) |
| `command` | string | No | - | Lệnh để chạy trong container |
| `name` | string | No | - | Gán tên cho container |
| `ports` | object | No | - | Ánh xạ cổng dạng host:container (ví dụ: {"8080": "80"}) |
| `volumes` | object | No | - | Ánh xạ ổ đĩa dạng host_path:container_path |
| `env` | object | No | - | Biến môi trường để thiết lập trong container |
| `detach` | boolean | No | `True` | Chạy container ở chế độ nền |
| `remove` | boolean | No | `False` | Tự động xóa container khi thoát |
| `network` | string | No | - | Kết nối container với một mạng |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | ID của container đã tạo |
| `status` | string | Trạng thái container sau khi chạy |

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

### Dừng Docker Container

`docker.stop`

Dừng một Docker container đang chạy

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID hoặc tên container để dừng |
| `timeout` | number | No | `10` | Số giây chờ trước khi dừng container |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | ID hoặc tên của container đã dừng |
| `stopped` | boolean | Container có được dừng thành công không |

**Example:** Stop a container by name

```yaml
container: my-nginx
```

**Example:** Stop with custom timeout

```yaml
container: my-app
timeout: 30
```
