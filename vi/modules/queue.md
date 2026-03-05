# Queue

In-memory and Redis message queue operations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Lấy khỏi hàng đợi](#lấy-khỏi-hàng-đợi) | Xóa và trả về một mục từ hàng đợi |
| [Thêm vào hàng đợi](#thêm-vào-hàng-đợi) | Thêm một mục vào hàng đợi trong bộ nhớ hoặc Redis |
| [Kích thước hàng đợi](#kích-thước-hàng-đợi) | Lấy kích thước hiện tại của hàng đợi |

## Modules

### Lấy khỏi hàng đợi

`queue.dequeue`

Xóa và trả về một mục từ hàng đợi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Tên của hàng đợi để lấy mục ra |
| `backend` | string | No | `memory` | Hệ thống phía sau của hàng đợi để sử dụng |
| `redis_url` | string | No | `redis://localhost:6379` | URL kết nối Redis |
| `timeout` | number | No | `0` | Thời gian chờ tính bằng giây (0 = không chặn) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | any | Mục đã lấy ra (null nếu hàng đợi trống) |
| `queue_name` | string | Tên của hàng đợi |
| `remaining` | number | Số mục còn lại trong hàng đợi |
| `empty` | boolean | Hàng đợi có trống hay không |

### Thêm vào hàng đợi

`queue.enqueue`

Thêm một mục vào hàng đợi trong bộ nhớ hoặc Redis

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Tên của hàng đợi để thêm mục vào |
| `data` | string | Yes | - | Dữ liệu để thêm vào hàng đợi (bất kỳ giá trị nào có thể tuần tự hóa JSON) |
| `backend` | string | No | `memory` | Hệ thống phía sau của hàng đợi để sử dụng |
| `redis_url` | string | No | `redis://localhost:6379` | URL kết nối Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | Tên của hàng đợi |
| `position` | number | Vị trí của mục trong hàng đợi |
| `queue_size` | number | Kích thước hiện tại của hàng đợi sau khi thêm |

### Kích thước hàng đợi

`queue.size`

Lấy kích thước hiện tại của hàng đợi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Tên của hàng đợi để kiểm tra |
| `backend` | string | No | `memory` | Hệ thống phía sau của hàng đợi để sử dụng |
| `redis_url` | string | No | `redis://localhost:6379` | URL kết nối Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | Tên của hàng đợi |
| `size` | number | Số mục hiện tại trong hàng đợi |
