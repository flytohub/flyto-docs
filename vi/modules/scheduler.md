# Scheduler

Cron parsing, delay, and interval calculations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Phân Tích Biểu Thức Cron](#phân-tích-biểu-thức-cron) | Phân tích biểu thức cron và tính toán N lần chạy tiếp theo |
| [Trì Hoãn / Ngủ](#trì-hoãn--ngủ) | Tạm dừng thực thi trong một khoảng thời gian xác định |
| [Tính Khoảng Thời Gian](#tính-khoảng-thời-gian) | Tính thời gian khoảng cách và lần xuất hiện tiếp theo |

## Modules

### Phân Tích Biểu Thức Cron

`scheduler.cron_parse`

Phân tích biểu thức cron và tính toán N lần chạy tiếp theo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Biểu thức cron tiêu chuẩn 5 trường (ví dụ: "0 9 * * MON-FRI") |
| `count` | number | No | `5` | Số lần chạy tiếp theo cần tính toán |
| `timezone` | string | No | `0` | Múi giờ để tính toán (độ lệch UTC như "+8" hoặc "-5", mặc định "0" cho UTC) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `expression` | string | Biểu thức cron đã phân tích |
| `description` | string | Mô tả lịch trình dễ hiểu |
| `next_runs` | array | Danh sách các lần chạy tiếp theo dưới dạng chuỗi ngày giờ ISO |
| `is_valid` | boolean | Biểu thức có hợp lệ không |

### Trì Hoãn / Ngủ

`scheduler.delay`

Tạm dừng thực thi trong một khoảng thời gian xác định

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | Số giây cần trì hoãn |
| `message` | string | No | - | Tin nhắn tùy chọn để đưa vào kết quả |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `delayed_seconds` | number | Số giây thực tế đã trì hoãn |
| `message` | string | Tin nhắn đã cung cấp hoặc mặc định |

### Tính Khoảng Thời Gian

`scheduler.interval`

Tính thời gian khoảng cách và lần xuất hiện tiếp theo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | No | `0` | Thành phần giây của khoảng thời gian |
| `minutes` | number | No | `0` | Thành phần phút của khoảng thời gian |
| `hours` | number | No | `0` | Thành phần giờ của khoảng thời gian |
| `start_time` | string | No | - | Thời gian bắt đầu theo định dạng ISO 8601 (mặc định: bây giờ) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `interval_seconds` | number | Tổng khoảng thời gian tính bằng giây |
| `next_runs` | array | Danh sách 5 lần chạy tiếp theo dưới dạng chuỗi ngày giờ ISO |
| `human_readable` | string | Mô tả khoảng thời gian dễ hiểu |
