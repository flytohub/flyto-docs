# Queue

In-memory and Redis message queue operations.

**3 modules**

| Module | Description |
|--------|-------------|
| [항목 제거](#항목-제거) | 큐에서 항목을 제거하고 반환 |
| [항목 추가](#항목-추가) | 항목을 메모리 또는 Redis 큐에 추가 |
| [큐 크기](#큐-크기) | 큐의 현재 크기 가져오기 |

## Modules

### 항목 제거

`queue.dequeue`

큐에서 항목을 제거하고 반환

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | 항목을 제거할 큐의 이름 |
| `backend` | string | No | `memory` | 사용할 큐 백엔드 |
| `redis_url` | string | No | `redis://localhost:6379` | Redis 연결 URL |
| `timeout` | number | No | `0` | 초 단위 타임아웃 (0 = 비차단) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | any | 제거된 항목 (큐가 비어 있으면 null) |
| `queue_name` | string | 큐의 이름 |
| `remaining` | number | 큐에 남은 항목 |
| `empty` | boolean | 큐가 비어 있는지 여부 |

### 항목 추가

`queue.enqueue`

항목을 메모리 또는 Redis 큐에 추가

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | 항목을 추가할 큐의 이름 |
| `data` | string | Yes | - | 큐에 추가할 데이터 (JSON 직렬화 가능한 값) |
| `backend` | string | No | `memory` | 사용할 큐 백엔드 |
| `redis_url` | string | No | `redis://localhost:6379` | Redis 연결 URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | 큐의 이름 |
| `position` | number | 큐에서 항목의 위치 |
| `queue_size` | number | 항목 추가 후 큐의 현재 크기 |

### 큐 크기

`queue.size`

큐의 현재 크기 가져오기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | 확인할 큐의 이름 |
| `backend` | string | No | `memory` | 사용할 큐 백엔드 |
| `redis_url` | string | No | `redis://localhost:6379` | Redis 연결 URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | 큐의 이름 |
| `size` | number | 큐의 현재 항목 수 |
