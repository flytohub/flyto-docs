# Training



**4 modules**

| Module | Description |
|--------|-------------|
| [Thực hành phân tích](#thực-hành-phân-tích) | Phân tích cấu trúc website để thực hành |
| [Thực hành thực thi](#thực-hành-thực-thi) | Thực thi phiên thực hành |
| [Thực hành suy luận Schema](#thực-hành-suy-luận-schema) | Suy luận schema dữ liệu từ website |
| [Thống kê thực hành](#thống-kê-thực-hành) | Lấy thống kê thực hành |

## Modules

### Thực hành phân tích

`training.practice.analyze`

Phân tích cấu trúc website để thực hành

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Phân tích cấu trúc website |
| `structure` | object | Phân tích cấu trúc website |

### Thực hành thực thi

`training.practice.execute`

Thực thi phiên thực hành

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `max_items` | number | No | `10` | Maximum items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Thực thi phiên thực hành |
| `items_processed` | number | Thực thi phiên thực hành |

### Thực hành suy luận Schema

`training.practice.infer_schema`

Suy luận schema dữ liệu từ website

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `sample_size` | number | No | `5` | Number of samples to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Suy luận schema dữ liệu |
| `schema` | object | Suy luận schema dữ liệu |

### Thống kê thực hành

`training.practice.stats`

Lấy thống kê thực hành

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total_sessions` | number | Tổng số phiên |
| `successful_sessions` | number | Tổng số phiên |
| `success_rate` | number | Lấy thống kê thực hành |
| `history` | array | Lấy thống kê thực hành |
