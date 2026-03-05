# Cache

In-memory key-value cache with TTL support.

**4 modules**

| Module | Description |
|--------|-------------|
| [Xóa Toàn Bộ Cache](#xóa-toàn-bộ-cache) | Xóa tất cả các mục cache hoặc lọc theo mẫu |
| [Xóa Cache](#xóa-cache) | Xóa một mục cache bằng key |
| [Lấy Cache](#lấy-cache) | Lấy giá trị từ cache bằng key |
| [Đặt Cache](#đặt-cache) | Đặt giá trị trong cache với TTL tùy chọn |

## Modules

### Xóa Toàn Bộ Cache

`cache.clear`

Xóa tất cả các mục cache hoặc lọc theo mẫu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `pattern` | string | No | `*` | Mẫu glob để khớp khóa (ví dụ: "user:*", mặc định "*" xóa tất cả) |
| `backend` | string | No | `memory` | Backend cache để sử dụng |
| `redis_url` | string | No | `redis://localhost:6379` | URL kết nối Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `cleared_count` | number | Số lượng mục cache đã xóa |
| `backend` | string | Backend đã sử dụng |

### Xóa Cache

`cache.delete`

Xóa một mục cache bằng key

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | Khóa cache cần xóa |
| `backend` | string | No | `memory` | Backend cache để sử dụng |
| `redis_url` | string | No | `redis://localhost:6379` | URL kết nối Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | Khóa cache |
| `deleted` | boolean | Khóa có được tìm thấy và xóa không |
| `backend` | string | Backend đã sử dụng |

### Lấy Cache

`cache.get`

Lấy giá trị từ cache bằng key

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | Khóa cache cần tìm |
| `backend` | string | No | `memory` | Backend cache để sử dụng |
| `redis_url` | string | No | `redis://localhost:6379` | URL kết nối Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | Khóa cache |
| `value` | any | Giá trị cache (null nếu không tìm thấy) |
| `hit` | boolean | Khóa có được tìm thấy trong cache không |
| `backend` | string | Backend đã sử dụng |

### Đặt Cache

`cache.set`

Đặt giá trị trong cache với TTL tùy chọn

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | Khóa cache để lưu trữ giá trị |
| `value` | string | Yes | - | Giá trị để cache (bất kỳ giá trị nào có thể tuần tự hóa JSON) |
| `ttl` | number | No | `0` | Thời gian sống tính bằng giây (0 = không hết hạn) |
| `backend` | string | No | `memory` | Backend cache để sử dụng |
| `redis_url` | string | No | `redis://localhost:6379` | URL kết nối Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | Khóa cache |
| `stored` | boolean | Giá trị có được lưu trữ thành công không |
| `ttl` | number | TTL tính bằng giây (0 = không hết hạn) |
| `backend` | string | Backend đã sử dụng |
