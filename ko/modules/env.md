# Environment

Environment variable management and .env file loading.

**3 modules**

| Module | Description |
|--------|-------------|
| [환경 변수 가져오기](#환경-변수-가져오기) | 환경 변수의 값을 가져옵니다 |
| [.env 파일 불러오기](#.env-파일-불러오기) | .env 파일에서 환경 변수를 불러옵니다 |
| [환경 변수 설정](#환경-변수-설정) | 현재 프로세스에 환경 변수를 설정합니다 |

## Modules

### 환경 변수 가져오기

`env.get`

환경 변수의 값을 가져옵니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | 환경 변수의 이름 |
| `default` | string | No | - | 변수가 설정되지 않은 경우의 기본값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | 변수 이름 |
| `value` | string | 변수 값 (설정되지 않은 경우 기본값) |
| `exists` | boolean | 환경에 변수가 존재하는지 여부 |

**Example:** Get HOME variable

```yaml
name: HOME
```

**Example:** Get variable with default

```yaml
name: MY_APP_PORT
default: 8080
```

### .env 파일 불러오기

`env.load_dotenv`

.env 파일에서 환경 변수를 불러옵니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | `.env` | .env 파일의 경로 |
| `override` | boolean | No | `False` | 기존 환경 변수를 덮어쓸지 여부 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `loaded_count` | number | 불러온 변수의 수 |
| `variables` | array | 불러온 변수 이름 목록 |

**Example:** Load .env file

```yaml
path: .env
override: false
```

### 환경 변수 설정

`env.set`

현재 프로세스에 환경 변수를 설정합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | 설정할 환경 변수의 이름 |
| `value` | string | Yes | - | 환경 변수에 할당할 값 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | 변수 이름 |
| `value` | string | 설정된 새 값 |
| `previous_value` | string | 이전 값 (이전에 설정되지 않은 경우 null) |

**Example:** Set an environment variable

```yaml
name: MY_APP_PORT
value: 3000
```
