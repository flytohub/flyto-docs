# HTTP

HTTP request utilities.

**1 modules**

| Module | Description |
|--------|-------------|
| [HTTP GET](#http-get) | ส่งคำขอ HTTP GET และรับการตอบกลับ |

## Modules

### HTTP GET

`http.get`

ส่งคำขอ HTTP GET และรับการตอบกลับ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL ที่จะส่งคำขอ GET ไปยัง |
| `headers` | object | No | `{}` | ส่วนหัวของคำขอในรูปแบบคีย์-ค่า |
| `query` | object | No | `{}` | พารามิเตอร์สตริงคำถามในรูปแบบคีย์-ค่า |
| `timeout` | number | No | `30` | หมดเวลาคำขอในหน่วยมิลลิวินาที |
| `verify_ssl` | boolean | No | `True` | Verify SSL certificates |
| `ssrf_protection` | boolean | No | `True` | Block requests to private/internal networks (localhost, 192.168.x.x, metadata endpoints). Disable only for trusted internal targets. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | คำขอสำเร็จหรือไม่ (สถานะ 2xx) |
| `status` | number | รหัสสถานะ HTTP |
| `body` | any | เนื้อหาการตอบกลับ (JSON ที่แปลงแล้วหรือข้อความ) |
| `headers` | object | ส่วนหัวของการตอบกลับ |
