# Environment

Environment variable management and .env file loading.

**3 modules**

| Module | Description |
|--------|-------------|
| [Lấy biến môi trường](#lấy-biến-môi-trường) | Lấy giá trị của biến môi trường |
| [Tải tệp .env](#tải-tệp-.env) | Tải biến môi trường từ tệp .env |
| [Thiết lập biến môi trường](#thiết-lập-biến-môi-trường) | Thiết lập biến môi trường trong tiến trình hiện tại |

## Modules

### Lấy biến môi trường

`env.get`

Lấy giá trị của biến môi trường

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | Tên của biến môi trường |
| `default` | string | No | - | Giá trị mặc định nếu biến chưa được thiết lập |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Tên biến |
| `value` | string | Giá trị biến (hoặc mặc định nếu chưa thiết lập) |
| `exists` | boolean | Biến có tồn tại trong môi trường không |

**Example:** Get HOME variable

```yaml
name: HOME
```

**Example:** Get variable with default

```yaml
name: MY_APP_PORT
default: 8080
```

### Tải tệp .env

`env.load_dotenv`

Tải biến môi trường từ tệp .env

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | `.env` | Đường dẫn đến tệp .env |
| `override` | boolean | No | `False` | Có ghi đè biến môi trường hiện có không |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `loaded_count` | number | Số lượng biến đã tải |
| `variables` | array | Danh sách tên biến đã tải |

**Example:** Load .env file

```yaml
path: .env
override: false
```

### Thiết lập biến môi trường

`env.set`

Thiết lập biến môi trường trong tiến trình hiện tại

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | Tên của biến môi trường cần thiết lập |
| `value` | string | Yes | - | Giá trị gán cho biến môi trường |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Tên biến |
| `value` | string | Giá trị mới đã thiết lập |
| `previous_value` | string | Giá trị trước đó (null nếu chưa thiết lập trước) |

**Example:** Set an environment variable

```yaml
name: MY_APP_PORT
value: 3000
```
