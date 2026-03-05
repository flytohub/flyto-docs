# Format

Number, currency, duration, filesize, and percentage formatting.

**5 modules**

| Module | Description |
|--------|-------------|
| [통화 포맷](#통화-포맷) | 숫자를 통화로 포맷 |
| [기간 포맷](#기간-포맷) | 초를 사람이 읽을 수 있는 기간으로 포맷 |
| [파일 크기 포맷](#파일-크기-포맷) | 바이트를 사람이 읽을 수 있는 파일 크기로 포맷 |
| [숫자 포맷](#숫자-포맷) | 숫자를 구분자와 소수로 포맷 |
| [백분율 포맷](#백분율-포맷) | 숫자를 백분율로 포맷 |

## Modules

### 통화 포맷

`format.currency`

숫자를 통화로 포맷

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `amount` | number | Yes | - | 포맷할 금액 |
| `currency` | string | No | `USD` | 포맷할 금액 |
| `decimal_places` | number | No | `2` | 소수 자릿수 |
| `symbol_position` | string | No | `before` | 소수 자릿수 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 포맷된 통화 문자열 |
| `original` | number | 포맷된 통화 문자열 |
| `symbol` | string | 포맷된 통화 문자열 |

### 기간 포맷

`format.duration`

초를 사람이 읽을 수 있는 기간으로 포맷

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | 초 단위 기간 |
| `format` | string | No | `short` | 초 단위 기간 |
| `show_zero` | boolean | No | `False` | 0인 단위 표시 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 0인 단위 표시 |
| `original` | number | 포맷된 기간 문자열 |
| `parts` | object | 포맷된 기간 문자열 |

### 파일 크기 포맷

`format.filesize`

바이트를 사람이 읽을 수 있는 파일 크기로 포맷

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `bytes` | number | Yes | - | 바이트 단위 크기 |
| `binary` | boolean | No | `False` | 바이트 단위 크기 |
| `decimal_places` | number | No | `2` | 십진수(KB, MB) 대신 이진수(KiB, MiB) 사용 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 소수 자릿수 |
| `original` | number | 포맷된 파일 크기 문자열 |
| `unit` | string | 포맷된 파일 크기 문자열 |
| `value` | number | 원래 바이트 |

### 숫자 포맷

`format.number`

숫자를 구분자와 소수로 포맷

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `number` | number | Yes | - | 포맷할 숫자 |
| `decimal_places` | number | No | `2` | 포맷할 숫자 |
| `thousand_separator` | string | No | `,` | 소수 자릿수 |
| `decimal_separator` | string | No | `.` | 천 단위 구분자 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 소수 구분자 |
| `original` | number | 포맷된 숫자 문자열 |

### 백분율 포맷

`format.percentage`

숫자를 백분율로 포맷

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | number | Yes | - | 백분율로 형식화할 값 |
| `is_ratio` | boolean | No | `True` | 백분율로 형식화할 값 |
| `decimal_places` | number | No | `1` | 입력은 0-1 사이의 비율로 100을 곱해야 함 |
| `include_sign` | boolean | No | `False` | 소수점 자릿수 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 양수에 + 기호 포함 |
| `original` | number | 형식화된 백분율 문자열 |
| `numeric` | number | 형식화된 백분율 문자열 |
