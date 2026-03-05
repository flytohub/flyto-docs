# Utilities

Datetime operations, delay, MD5 hash, and random utilities.

**9 modules**

| Module | Description |
|--------|-------------|
| [เพิ่มเวลา](#เพิ่มเวลา) | เพิ่มเวลาให้กับวันที่เวลา |
| [จัดรูปแบบวันที่เวลา](#จัดรูปแบบวันที่เวลา) | จัดรูปแบบวันที่เวลาเป็นข้อความ |
| [แปลงวันที่เวลา](#แปลงวันที่เวลา) | แปลงข้อความเป็นวันที่เวลา |
| [ลบเวลา](#ลบเวลา) | ลบเวลาออกจากวันที่เวลา |
| [วันที่/เวลาปัจจุบัน](#วันที่เวลาปัจจุบัน) | รับวันที่และเวลาปัจจุบัน |
| [หน่วงเวลา/พัก](#หน่วงเวลาพัก) | หยุดการทำงานของเวิร์กโฟลว์ชั่วคราวตามระยะเวลาที่กำหนด |
| [แฮช MD5](#แฮช-md5) | คำนวณแฮช MD5 ของข้อความ |
| [ตัวเลขสุ่ม](#ตัวเลขสุ่ม) | สร้างตัวเลขสุ่มในช่วง |
| [ข้อความสุ่ม](#ข้อความสุ่ม) | สร้างข้อความสุ่มหรือ UUID |

## Modules

### เพิ่มเวลา

`datetime.add`

เพิ่มเวลาให้กับวันที่เวลา

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
| `result` | string | ผลลัพธ์การดำเนินการ |
| `timestamp` | number | ผลลัพธ์การดำเนินการ |

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

### จัดรูปแบบวันที่เวลา

`datetime.format`

จัดรูปแบบวันที่เวลาเป็นข้อความ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | ผลลัพธ์การดำเนินการ |
| `timestamp` | number | ผลลัพธ์การดำเนินการ |

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

### แปลงวันที่เวลา

`datetime.parse`

แปลงข้อความเป็นวันที่เวลา

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime_string` | string | Yes | - | DateTime string to parse (ISO 8601 format recommended) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | ผลลัพธ์การดำเนินการ |
| `timestamp` | number | ผลลัพธ์การดำเนินการ |
| `year` | number | ผลลัพธ์การดำเนินการ |
| `month` | number | Unix timestamp |
| `day` | number | ส่วนประกอบปี |
| `hour` | number | ส่วนประกอบเดือน |
| `minute` | number | ส่วนประกอบวัน |
| `second` | number | ส่วนประกอบชั่วโมง |

**Example:** Parse ISO format

```yaml
datetime_string: 2024-01-15T10:30:00
```

**Example:** Parse custom format

```yaml
datetime_string: January 15, 2024
format: %B %d, %Y
```

### ลบเวลา

`datetime.subtract`

ลบเวลาออกจากวันที่เวลา

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
| `result` | string | ผลลัพธ์การดำเนินการ |
| `timestamp` | number | ผลลัพธ์การดำเนินการ |

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

### วันที่/เวลาปัจจุบัน

`utility.datetime.now`

รับวันที่และเวลาปัจจุบัน

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`iso`, `unix`, `unix_ms`, `date`, `time`, `custom`) | No | `iso` | รูปแบบเอาต์พุต |
| `custom_format` | string | No | - | รูปแบบ Python strftime (ถ้า format=custom) |
| `timezone` | string | No | `UTC` | รูปแบบ Python strftime (ถ้า format=custom) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | เขตเวลา (ค่าเริ่มต้น: UTC) |
| `datetime` | string | สถานะการดำเนินการ (success/error) |
| `timestamp` | number | สถานะการดำเนินการ (success/error) |
| `iso` | string | วันที่/เวลาที่จัดรูปแบบ |

**Example:** Example

```yaml
format: iso
```

**Example:** Example

```yaml
format: unix
```

### หน่วงเวลา/พัก

`utility.delay`

หยุดการทำงานของเวิร์กโฟลว์ชั่วคราวตามระยะเวลาที่กำหนด

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | ระยะเวลาที่จะรอเป็นมิลลิวินาที |
| `duration_seconds` | number | No | - | ทางเลือก: ระยะเวลาเป็นวินาที |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ทางเลือก: ระยะเวลาเป็นวินาที |
| `waited_ms` | number | สถานะการดำเนินการ (success/error) |

**Example:** Example

```yaml
duration_seconds: 2
```

**Example:** Example

```yaml
duration_ms: 500
```

### แฮช MD5

`utility.hash.md5`

คำนวณแฮช MD5 ของข้อความ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | ข้อความที่จะแฮช |
| `encoding` | string | No | `utf-8` | ข้อความที่จะแฮช |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | การเข้ารหัสข้อความ |
| `hash` | string | การเข้ารหัสข้อความ |

**Example:** Example

```yaml
text: Hello World
```

### ตัวเลขสุ่ม

`utility.random.number`

สร้างตัวเลขสุ่มในช่วง

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | ค่าต่ำสุด (รวม) |
| `max` | number | No | `100` | ค่าต่ำสุด (รวม) |
| `decimals` | number | No | `0` | ค่าสูงสุด (รวม) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | จำนวนทศนิยม (0 สำหรับจำนวนเต็ม) |
| `value` | number | สถานะการดำเนินการ (success/error) |

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

### ข้อความสุ่ม

`utility.random.string`

สร้างข้อความสุ่มหรือ UUID

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | No | `16` | ความยาวข้อความ |
| `charset` | select (`alphanumeric`, `letters`, `lowercase`, `uppercase`, `numbers`, `hex`, `uuid`) | No | `alphanumeric` | ความยาวข้อความ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการดำเนินการ (success/error) |
| `value` | string | สถานะการดำเนินการ (success/error) |

**Example:** Example

```yaml
length: 16
charset: alphanumeric
```

**Example:** Example

```yaml
charset: uuid
```
