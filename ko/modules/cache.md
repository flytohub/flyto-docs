# Cache

In-memory key-value cache with TTL support.

**4 modules**

| Module | Description |
|--------|-------------|
| [캐시 지우기](#캐시-지우기) | 모든 캐시 항목 지우기 또는 패턴으로 필터링 |
| [캐시 삭제](#캐시-삭제) | 키로 캐시 항목 삭제 |
| [캐시 가져오기](#캐시-가져오기) | 키로 캐시에서 값 가져오기 |
| [캐시 설정](#캐시-설정) | 옵션 TTL과 함께 캐시에 값 설정 |

## Modules

### 캐시 지우기

`cache.clear`

모든 캐시 항목 지우기 또는 패턴으로 필터링

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `pattern` | string | No | `*` | 키와 일치하는 글로브 패턴 (예: "user:*", 기본값 "*"은 모두 지움) |
| `backend` | string | No | `memory` | 사용할 캐시 백엔드 |
| `redis_url` | string | No | `redis://localhost:6379` | Redis 연결 URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `cleared_count` | number | 지워진 캐시 항목 수 |
| `backend` | string | 사용된 백엔드 |

### 캐시 삭제

`cache.delete`

키로 캐시 항목 삭제

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | 삭제할 캐시 키 |
| `backend` | string | No | `memory` | 사용할 캐시 백엔드 |
| `redis_url` | string | No | `redis://localhost:6379` | Redis 연결 URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | 캐시 키 |
| `deleted` | boolean | 키가 발견되어 삭제되었는지 여부 |
| `backend` | string | 사용된 백엔드 |

### 캐시 가져오기

`cache.get`

키로 캐시에서 값 가져오기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | 조회할 캐시 키 |
| `backend` | string | No | `memory` | 사용할 캐시 백엔드 |
| `redis_url` | string | No | `redis://localhost:6379` | Redis 연결 URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | 캐시 키 |
| `value` | any | 캐시된 값 (없으면 null) |
| `hit` | boolean | 캐시에서 키를 찾았는지 여부 |
| `backend` | string | 사용된 백엔드 |

### 캐시 설정

`cache.set`

옵션 TTL과 함께 캐시에 값 설정

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | 값을 저장할 캐시 키 |
| `value` | string | Yes | - | 캐시할 값 (JSON 직렬화 가능한 값) |
| `ttl` | number | No | `0` | 초 단위의 수명 (0 = 만료 없음) |
| `backend` | string | No | `memory` | 사용할 캐시 백엔드 |
| `redis_url` | string | No | `redis://localhost:6379` | Redis 연결 URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | 캐시 키 |
| `stored` | boolean | 값이 성공적으로 저장되었는지 여부 |
| `ttl` | number | 초 단위의 TTL (0 = 만료 없음) |
| `backend` | string | 사용된 백엔드 |
