# Docker

Build, run, inspect, and manage Docker containers.

**6 modules**

| Module | Description |
|--------|-------------|
| [Docker 이미지 빌드](#docker-이미지-빌드) | Dockerfile에서 Docker 이미지를 빌드합니다 |
| [Docker 컨테이너 검사](#docker-컨테이너-검사) | Docker 컨테이너에 대한 자세한 정보를 가져옵니다 |
| [컨테이너 로그 가져오기](#컨테이너-로그-가져오기) | Docker 컨테이너에서 로그 가져오기 |
| [Docker 컨테이너 목록](#docker-컨테이너-목록) | Docker 컨테이너 목록 |
| [Docker 컨테이너 실행](#docker-컨테이너-실행) | 이미지에서 Docker 컨테이너를 실행합니다 |
| [Docker 컨테이너 중지](#docker-컨테이너-중지) | 실행 중인 Docker 컨테이너를 중지합니다 |

## Modules

### Docker 이미지 빌드

`docker.build`

Dockerfile에서 Docker 이미지를 빌드합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | 빌드 컨텍스트 디렉토리 경로 |
| `tag` | string | Yes | - | 이미지 이름과 선택적 태그 (예: myapp:latest) |
| `dockerfile` | string | No | - | Dockerfile 경로 (빌드 컨텍스트 기준) |
| `build_args` | object | No | - | 빌드 시 변수 (예: {"NODE_ENV": "production"}) |
| `no_cache` | boolean | No | `False` | 이미지 빌드 시 캐시를 사용하지 않습니다 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `image_id` | string | 빌드된 이미지 ID |
| `tag` | string | 이미지에 적용된 태그 |
| `size` | string | 빌드된 이미지 크기 |

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

### Docker 컨테이너 검사

`docker.inspect_container`

Docker 컨테이너에 대한 자세한 정보를 가져옵니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | 검사할 컨테이너 ID 또는 이름 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | 짧은 컨테이너 ID |
| `name` | string | 컨테이너 이름 |
| `state` | object | 컨테이너 상태 (상태, 실행 중, pid, 종료 코드 등) |
| `image` | string | 컨테이너에서 사용하는 이미지 |
| `network_settings` | object | 네트워크 설정 (IP, 포트, 네트워크) |
| `mounts` | array | 볼륨 및 바인드 마운트 |
| `config` | object | 컨테이너 설정 (환경 변수, 명령어, 레이블 등) |

**Example:** Inspect a container by name

```yaml
container: my-nginx
```

**Example:** Inspect a container by ID

```yaml
container: a1b2c3d4e5f6
```

### 컨테이너 로그 가져오기

`docker.logs`

Docker 컨테이너에서 로그 가져오기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | 컨테이너 ID 또는 이름 |
| `tail` | number | No | `100` | 로그의 끝에서 보여줄 줄 수 |
| `follow` | boolean | No | `False` | 로그 출력 따라가기 (타임아웃까지 스트리밍) |
| `timestamps` | boolean | No | `False` | 로그 출력에 타임스탬프 표시 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `logs` | string | 컨테이너 로그 출력 |
| `lines` | number | 반환된 로그 줄 수 |

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

### Docker 컨테이너 목록

`docker.ps`

Docker 컨테이너 목록

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `all` | boolean | No | `False` | 모든 컨테이너 보기 (기본값은 실행 중인 것만 표시) |
| `filters` | object | No | - | 컨테이너 필터링 (예: {"name": "my-app", "status": "running"}) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `containers` | array | ID, 이름, 이미지, 상태, 포트가 포함된 컨테이너 목록 |
| `count` | number | 찾은 컨테이너 수 |

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

### Docker 컨테이너 실행

`docker.run`

이미지에서 Docker 컨테이너를 실행합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | string | Yes | - | 실행할 Docker 이미지 (예: nginx:latest) |
| `command` | string | No | - | 컨테이너 내에서 실행할 명령어 |
| `name` | string | No | - | 컨테이너에 이름을 지정합니다 |
| `ports` | object | No | - | 호스트:컨테이너 형식의 포트 매핑 (예: {"8080": "80"}) |
| `volumes` | object | No | - | 호스트 경로:컨테이너 경로 형식의 볼륨 매핑 |
| `env` | object | No | - | 컨테이너에 설정할 환경 변수 |
| `detach` | boolean | No | `True` | 컨테이너를 백그라운드에서 실행합니다 |
| `remove` | boolean | No | `False` | 컨테이너 종료 시 자동으로 제거합니다 |
| `network` | string | No | - | 컨테이너를 네트워크에 연결합니다 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | 생성된 컨테이너 ID |
| `status` | string | 실행 후 컨테이너 상태 |

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

### Docker 컨테이너 중지

`docker.stop`

실행 중인 Docker 컨테이너를 중지합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | 중지할 컨테이너 ID 또는 이름 |
| `timeout` | number | No | `10` | 컨테이너를 강제 종료하기 전 대기 시간 (초) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | 중지된 컨테이너 ID 또는 이름 |
| `stopped` | boolean | 컨테이너가 성공적으로 중지되었는지 여부 |

**Example:** Stop a container by name

```yaml
container: my-nginx
```

**Example:** Stop with custom timeout

```yaml
container: my-app
timeout: 30
```
