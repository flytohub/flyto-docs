# Utilities

Datetime operations, delay, MD5 hash, and random utilities.

**9 modules**

| Module | Description |
|--------|-------------|
| [Thêm thời gian](#thêm-thời-gian) | Thêm thời gian vào datetime |
| [Định dạng DateTime](#định-dạng-datetime) | Định dạng datetime thành chuỗi |
| [Phân tích DateTime](#phân-tích-datetime) | Phân tích chuỗi thành datetime |
| [Trừ thời gian](#trừ-thời-gian) | Trừ thời gian từ datetime |
| [Ngày/Giờ hiện tại](#ngàygiờ-hiện-tại) | Lấy ngày giờ hiện tại |
| [Độ trễ/Nghỉ](#độ-trễnghỉ) | Tạm dừng thực thi workflow trong khoảng thời gian xác định |
| [Hash MD5](#hash-md5) | Tính hash MD5 của văn bản |
| [Số ngẫu nhiên](#số-ngẫu-nhiên) | Tạo số ngẫu nhiên trong khoảng |
| [Chuỗi ngẫu nhiên](#chuỗi-ngẫu-nhiên) | Tạo chuỗi ngẫu nhiên hoặc UUID |

## Modules

### Thêm thời gian

`datetime.add`

Thêm thời gian vào datetime

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `days` | number | No | `0` | Number of days to add (positive) or subtract (negative) |
| `hours` | number | No | `0` | Number of hours to add (positive) or subtract (negative) |
| `minutes` | number | No | `0` | Number of minutes to add (positive) or subtract (negative) |
| `seconds` | number | No | `0` | Number of seconds to add (positive) or subtract (negative) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Kết quả thao tác |
| `timestamp` | number | Kết quả thao tác |

**Example:** Add 7 days

```yaml
datetime: now
days: 7
```

**Example:** Add 2 hours 30 minutes

```yaml
datetime: 2024-01-15T10:00:00
hours: 2
minutes: 30
```

### Định dạng DateTime

`datetime.format`

Định dạng datetime thành chuỗi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Kết quả thao tác |
| `timestamp` | number | Kết quả thao tác |

**Example:** Format current time

```yaml
datetime: now
format: %Y-%m-%d %H:%M:%S
```

**Example:** Custom date format

```yaml
datetime: 2024-01-15T10:30:00
format: %B %d, %Y
```

### Phân tích DateTime

`datetime.parse`

Phân tích chuỗi thành datetime

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime_string` | string | Yes | - | DateTime string to parse (ISO 8601 format recommended) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Kết quả thao tác |
| `timestamp` | number | Kết quả thao tác |
| `year` | number | Kết quả thao tác |
| `month` | number | Dấu thời gian Unix |
| `day` | number | Thành phần năm |
| `hour` | number | Thành phần tháng |
| `minute` | number | Thành phần ngày |
| `second` | number | Thành phần giờ |

**Example:** Parse ISO format

```yaml
datetime_string: 2024-01-15T10:30:00
```

**Example:** Parse custom format

```yaml
datetime_string: January 15, 2024
format: %B %d, %Y
```

### Trừ thời gian

`datetime.subtract`

Trừ thời gian từ datetime

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `days` | number | No | `0` | Number of days to add (positive) or subtract (negative) |
| `hours` | number | No | `0` | Number of hours to add (positive) or subtract (negative) |
| `minutes` | number | No | `0` | Number of minutes to add (positive) or subtract (negative) |
| `seconds` | number | No | `0` | Number of seconds to add (positive) or subtract (negative) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Kết quả thao tác |
| `timestamp` | number | Kết quả thao tác |

**Example:** Subtract 7 days

```yaml
datetime: now
days: 7
```

**Example:** Subtract 1 hour

```yaml
datetime: 2024-01-15T10:00:00
hours: 1
```

### Ngày/Giờ hiện tại

`utility.datetime.now`

Lấy ngày giờ hiện tại

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`iso`, `unix`, `unix_ms`, `date`, `time`, `custom`) | No | `iso` | Định dạng đầu ra |
| `custom_format` | string | No | - | Định dạng strftime Python (nếu format=custom) |
| `timezone` | string | No | `UTC` | Định dạng strftime Python (nếu format=custom) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Múi giờ (mặc định: UTC) |
| `datetime` | string | Trạng thái thao tác (thành công/lỗi) |
| `timestamp` | number | Trạng thái thao tác (thành công/lỗi) |
| `iso` | string | Ngày/giờ đã định dạng |

**Example:** Example

```yaml
format: iso
```

**Example:** Example

```yaml
format: unix
```

### Độ trễ/Nghỉ

`utility.delay`

Tạm dừng thực thi workflow trong khoảng thời gian xác định

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Thời gian chờ tính bằng mili giây |
| `duration_seconds` | number | No | - | Thay thế: thời gian tính bằng giây |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Thay thế: thời gian tính bằng giây |
| `waited_ms` | number | Trạng thái thao tác (thành công/lỗi) |

**Example:** Example

```yaml
duration_seconds: 2
```

**Example:** Example

```yaml
duration_ms: 500
```

### Hash MD5

`utility.hash.md5`

Tính hash MD5 của văn bản

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Văn bản cần hash |
| `encoding` | string | No | `utf-8` | Văn bản cần hash |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Mã hóa văn bản |
| `hash` | string | Mã hóa văn bản |

**Example:** Example

```yaml
text: Hello World
```

### Số ngẫu nhiên

`utility.random.number`

Tạo số ngẫu nhiên trong khoảng

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | Giá trị tối thiểu (bao gồm) |
| `max` | number | No | `100` | Giá trị tối thiểu (bao gồm) |
| `decimals` | number | No | `0` | Giá trị tối đa (bao gồm) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Số chữ số thập phân (0 cho số nguyên) |
| `value` | number | Trạng thái thao tác (thành công/lỗi) |

**Example:** Example

```yaml
min: 1
max: 100
decimals: 0
```

**Example:** Example

```yaml
min: 0
max: 1
decimals: 2
```

### Chuỗi ngẫu nhiên

`utility.random.string`

Tạo chuỗi ngẫu nhiên hoặc UUID

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | No | `16` | Độ dài chuỗi |
| `charset` | select (`alphanumeric`, `letters`, `lowercase`, `uppercase`, `numbers`, `hex`, `uuid`) | No | `alphanumeric` | Độ dài chuỗi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái thao tác (thành công/lỗi) |
| `value` | string | Trạng thái thao tác (thành công/lỗi) |

**Example:** Example

```yaml
length: 16
charset: alphanumeric
```

**Example:** Example

```yaml
charset: uuid
```
