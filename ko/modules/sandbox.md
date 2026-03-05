# Sandbox

Execute JavaScript, Python, or shell commands in isolated environments.

**3 modules**

| Module | Description |
|--------|-------------|
| [JavaScript 실행](#javascript-실행) | 타임아웃과 함께 Node.js를 통해 JavaScript 코드를 실행합니다 |
| [Python 실행](#python-실행) | 타임아웃과 함께 서브프로세스에서 Python 코드를 실행합니다 |
| [쉘 실행](#쉘-실행) | 타임아웃 및 환경 제어와 함께 쉘 명령을 실행합니다 |

## Modules

### JavaScript 실행

`sandbox.execute_js`

타임아웃과 함께 Node.js를 통해 JavaScript 코드를 실행합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Node.js를 통해 실행할 JavaScript 코드 |
| `timeout` | number | No | `10` | 실행 타임아웃(초) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | 스크립트의 표준 출력 |
| `stderr` | string | 스크립트의 표준 에러 |
| `exit_code` | number | 프로세스 종료 코드 (0 = 성공) |
| `execution_time_ms` | number | 실행 시간 (밀리초) |

**Example:** Simple console.log

```yaml
code: console.log("Hello, World!");
timeout: 10
```

**Example:** JSON processing

```yaml
code: const data = { name: "test", value: 42 };
console.log(JSON.stringify(data, null, 2));
```

### Python 실행

`sandbox.execute_python`

타임아웃과 함께 서브프로세스에서 Python 코드를 실행합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | 실행할 Python 코드 |
| `timeout` | number | No | `10` | 실행 타임아웃(초) |
| `allowed_modules` | array | No | - | 가져올 수 있는 모듈의 화이트리스트 (모두 허용하려면 비워 두세요) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | 스크립트의 표준 출력 |
| `stderr` | string | 스크립트의 표준 에러 |
| `exit_code` | number | 프로세스 종료 코드 (0 = 성공) |
| `execution_time_ms` | number | 실행 시간 (밀리초) |

**Example:** Simple print

```yaml
code: print("Hello, World!")
timeout: 10
```

**Example:** Math calculation

```yaml
code: import math
print(math.pi)
allowed_modules: ["math"]
```

### 쉘 실행

`sandbox.execute_shell`

타임아웃 및 환경 제어와 함께 쉘 명령을 실행합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `command` | string | Yes | - | 실행할 쉘 명령 |
| `timeout` | number | No | `10` | 실행 타임아웃(초) |
| `working_dir` | string | No | - | 명령의 작업 디렉토리 |
| `env` | object | No | - | 설정할 추가 환경 변수 (현재 환경과 병합됨) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | 명령의 표준 출력 |
| `stderr` | string | 명령의 표준 에러 |
| `exit_code` | number | 프로세스 종료 코드 (0 = 성공) |
| `execution_time_ms` | number | 실행 시간 (밀리초) |

**Example:** Simple echo

```yaml
command: echo "Hello, World!"
timeout: 10
```

**Example:** List files with custom working directory

```yaml
command: ls -la
working_dir: /tmp
```
