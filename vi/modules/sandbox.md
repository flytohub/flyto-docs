# Sandbox

Execute JavaScript, Python, or shell commands in isolated environments.

**3 modules**

| Module | Description |
|--------|-------------|
| [Chạy JavaScript](#chạy-javascript) | Chạy mã JavaScript qua Node.js với thời gian chờ |
| [Chạy Python](#chạy-python) | Chạy mã Python trong một tiến trình phụ với thời gian chờ |
| [Chạy Shell](#chạy-shell) | Chạy lệnh shell với thời gian chờ và kiểm soát môi trường |

## Modules

### Chạy JavaScript

`sandbox.execute_js`

Chạy mã JavaScript qua Node.js với thời gian chờ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Mã JavaScript để chạy qua Node.js |
| `timeout` | number | No | `10` | Thời gian chờ chạy tính bằng giây |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Đầu ra chuẩn từ script |
| `stderr` | string | Lỗi chuẩn từ script |
| `exit_code` | number | Mã thoát của tiến trình (0 = thành công) |
| `execution_time_ms` | number | Thời gian chạy tính bằng mili giây |

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

### Chạy Python

`sandbox.execute_python`

Chạy mã Python trong một tiến trình phụ với thời gian chờ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Mã Python để chạy |
| `timeout` | number | No | `10` | Thời gian chờ chạy tính bằng giây |
| `allowed_modules` | array | No | - | Danh sách trắng các mô-đun có thể nhập (để trống để cho phép tất cả) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Đầu ra chuẩn từ script |
| `stderr` | string | Lỗi chuẩn từ script |
| `exit_code` | number | Mã thoát của tiến trình (0 = thành công) |
| `execution_time_ms` | number | Thời gian chạy tính bằng mili giây |

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

### Chạy Shell

`sandbox.execute_shell`

Chạy lệnh shell với thời gian chờ và kiểm soát môi trường

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `command` | string | Yes | - | Lệnh shell để chạy |
| `timeout` | number | No | `10` | Thời gian chờ chạy tính bằng giây |
| `working_dir` | string | No | - | Thư mục làm việc cho lệnh |
| `env` | object | No | - | Các biến môi trường bổ sung để thiết lập (kết hợp với môi trường hiện tại) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Đầu ra chuẩn từ lệnh |
| `stderr` | string | Lỗi chuẩn từ lệnh |
| `exit_code` | number | Mã thoát của tiến trình (0 = thành công) |
| `execution_time_ms` | number | Thời gian chạy tính bằng mili giây |

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
