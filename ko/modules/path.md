# Path

File path utilities: join, normalize, basename, dirname, extension.

**6 modules**

| Module | Description |
|--------|-------------|
| [경로 베이스 이름](#경로-베이스-이름) | 경로에서 파일 이름 가져오기 |
| [경로 디렉토리 이름](#경로-디렉토리-이름) | 경로에서 디렉토리 이름 가져오기 |
| [경로 확장자](#경로-확장자) | 경로에서 파일 확장자 가져오기 |
| [경로 절대 여부](#경로-절대-여부) | 경로가 절대 경로인지 확인 |
| [경로 연결](#경로-연결) | 경로 구성 요소 연결 |
| [경로 정규화](#경로-정규화) | 파일 경로 정규화 |

## Modules

### 경로 베이스 이름

`path.basename`

경로에서 파일 이름 가져오기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | 파일 경로 |
| `remove_extension` | boolean | No | `False` | 파일 경로 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 결과에서 파일 확장자 제거 |
| `original` | string | 파일 이름 |
| `extension` | string | 파일 이름 |

### 경로 디렉토리 이름

`path.dirname`

경로에서 디렉토리 이름 가져오기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | 파일 경로 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 파일 경로 |
| `original` | string | 디렉토리 이름 |

### 경로 확장자

`path.extension`

경로에서 파일 확장자 가져오기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | 파일 경로 |
| `include_dot` | boolean | No | `True` | 파일 경로 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 확장자에 점 포함 |
| `original` | string | 파일 확장자 |
| `has_extension` | boolean | 파일 확장자 |

### 경로 절대 여부

`path.is_absolute`

경로가 절대 경로인지 확인

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | 확인할 파일 경로 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | 확인할 파일 경로 |
| `path` | string | 경로가 절대 경로인지 여부 |
| `absolute` | string | 경로가 절대 경로인지 여부 |

### 경로 연결

`path.join`

경로 구성 요소 연결

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `parts` | array | Yes | - | 연결할 경로 구성 요소 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 연결할 경로 구성 요소 |
| `parts` | array | 연결된 경로 |

### 경로 정규화

`path.normalize`

파일 경로 정규화

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | 정규화할 파일 경로 |
| `resolve` | boolean | No | `False` | 정규화할 파일 경로 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 절대 경로로 변환 |
| `original` | string | 정규화된 경로 |
| `is_absolute` | boolean | 정규화된 경로 |
