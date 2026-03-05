# Error Handling

Retry, fallback, and circuit breaker patterns.

**3 modules**

| Module | Description |
|--------|-------------|
| [Circuit Breaker](#circuit-breaker) | ป้องกันความล้มเหลวที่ต่อเนื่องด้วยรูปแบบ Circuit Breaker |
| [การสำรอง](#การสำรอง) | ให้ค่าการสำรองเมื่อการดำเนินการล้มเหลว |
| [ลองใหม่](#ลองใหม่) | ห่อหุ้มการดำเนินการด้วยตรรกะการลองใหม่ที่กำหนดค่าได้ |

## Modules

### Circuit Breaker

`error.circuit_breaker`

ป้องกันความล้มเหลวที่ต่อเนื่องด้วยรูปแบบ Circuit Breaker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | object | Yes | - | การกระทำที่ต้องป้องกันด้วย Circuit Breaker |
| `circuit_id` | string | Yes | - | การกระทำที่ต้องป้องกันด้วย Circuit Breaker |
| `failure_threshold` | number | No | `5` | รหัสเฉพาะสำหรับวงจรนี้ (สำหรับการติดตามสถานะ) |
| `failure_window_ms` | number | No | `60000` | ช่วงเวลาสำหรับการนับความล้มเหลว |
| `recovery_timeout_ms` | number | No | `30000` | เวลาที่จะลองกู้คืน (สถานะครึ่งเปิด) |
| `success_threshold` | number | No | `3` | คำขอที่สำเร็จที่ต้องการในสถานะครึ่งเปิดเพื่อปิดวงจร |
| `fallback` | object | No | - | การกระทำทางเลือกเมื่อวงจรเปิด |
| `fallback_value` | any | No | - | การกระทำทางเลือกเมื่อวงจรเปิด |
| `track_errors` | array | No | `[]` | ค่าคงที่ที่จะคืนเมื่อวงจรเปิด |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | นับเฉพาะรหัสข้อผิดพลาดเหล่านี้สำหรับเกณฑ์ (ว่าง = ทั้งหมด) |
| `result` | any | เหตุการณ์สำหรับการกำหนดเส้นทาง (สำเร็จ/วงจรเปิด/สำรอง) |
| `circuit_state` | string | ผลลัพธ์จากการกระทำหรือการสำรอง |
| `failure_count` | number | สถานะปัจจุบันของวงจร (ปิด/เปิด/ครึ่งเปิด) |
| `last_failure_time` | string | จำนวนความล้มเหลวปัจจุบันในช่วงเวลา |
| `circuit_opened_at` | string | เวลาที่เกิดความล้มเหลวครั้งล่าสุด |

**Example:** Example

```yaml
action: {"module": "http.post", "params": {"url": "https://api.example.com/submit"}}
circuit_id: example-api
failure_threshold: 5
failure_window_ms: 60000
recovery_timeout_ms: 30000
```

**Example:** Example

```yaml
action: {"module": "http.get", "params": {"url": "https://api.example.com/data"}}
circuit_id: data-api
failure_threshold: 3
fallback: {"module": "cache.get", "params": {"key": "data_cache"}}
```

**Example:** Example

```yaml
action: {"module": "database.query", "params": {"query": "SELECT * FROM users"}}
circuit_id: database
failure_threshold: 3
fallback_value: {"users": [], "from_cache": false}
```

### การสำรอง

`error.fallback`

ให้ค่าการสำรองเมื่อการดำเนินการล้มเหลว

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | No | - | การดำเนินการหลักที่จะพยายาม |
| `fallback_value` | any | No | - | การดำเนินการหลักที่จะพยายาม |
| `fallback_operation` | object | No | - | ค่าคงที่ที่จะคืนเมื่อเกิดความล้มเหลว |
| `fallback_on` | array | No | `[]` | การดำเนินการทางเลือกที่จะทำเมื่อเกิดความล้มเหลว |
| `include_error_info` | boolean | No | `True` | รหัสข้อผิดพลาดที่ทำให้เกิดการสำรอง (ว่าง = ข้อผิดพลาดทั้งหมด) |
| `log_fallback` | boolean | No | `True` | รวมข้อมูลข้อผิดพลาดเดิมในผลลัพธ์ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | บันทึกเมื่อใช้การสำรอง |
| `used_fallback` | boolean | ผลลัพธ์จากการดำเนินการหลักหรือการสำรอง |
| `source` | string | ว่ามีการใช้การสำรองหรือไม่ |
| `original_error` | object | แหล่งที่มาของผลลัพธ์ (หลัก/ค่าการสำรอง/การดำเนินการสำรอง) |

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/items"}}
fallback_value: []
```

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/config"}}
fallback_operation: {"module": "cache.get", "params": {"key": "config_cache"}}
```

**Example:** Example

```yaml
operation: {"module": "api.call", "params": {"endpoint": "/data"}}
fallback_value: {"status": "unavailable"}
fallback_on: ["NETWORK_ERROR", "TIMEOUT_ERROR"]
```

### ลองใหม่

`error.retry`

ห่อหุ้มการดำเนินการด้วยตรรกะการลองใหม่ที่กำหนดค่าได้

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | Yes | - | การดำเนินการที่จะลองใหม่ (ID โมดูลและพารามิเตอร์) |
| `max_retries` | number | No | `3` | การดำเนินการที่จะลองใหม่ (ID โมดูลและพารามิเตอร์) |
| `initial_delay_ms` | number | No | `1000` | จำนวนครั้งสูงสุดที่ลองใหม่ |
| `max_delay_ms` | number | No | `30000` | ความล่าช้าเริ่มต้นก่อนลองใหม่ครั้งแรก |
| `backoff_multiplier` | number | No | `2.0` | ตัวคูณสำหรับการถอยแบบทวีคูณ (เช่น 2 จะเพิ่มความล่าช้าทุกครั้งที่ลองใหม่) |
| `jitter` | boolean | No | `True` | เพิ่มการสั่นแบบสุ่มเพื่อป้องกันการโหลดซ้ำ |
| `retry_on` | array | No | `[]` | เพิ่มการสั่นแบบสุ่มเพื่อป้องกันการโหลดซ้ำ |
| `timeout_per_attempt_ms` | number | No | `0` | รายการรหัสข้อผิดพลาดที่จะลองใหม่ (ว่างเปล่า = ลองใหม่ทั้งหมด) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | หมดเวลาสำหรับแต่ละความพยายาม (0 สำหรับไม่หมดเวลา) |
| `result` | any | เหตุการณ์สำหรับการกำหนดเส้นทาง (สำเร็จ/หมด) |
| `attempts` | number | เหตุการณ์สำหรับการกำหนดเส้นทาง (สำเร็จ/หมด) |
| `total_delay_ms` | number | ผลลัพธ์จากความพยายามที่สำเร็จ |
| `errors` | array | จำนวนความพยายามที่ทำ |

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/data"}}
max_retries: 3
```

**Example:** Example

```yaml
operation: {"module": "database.query", "params": {"query": "SELECT * FROM users"}}
max_retries: 5
initial_delay_ms: 2000
backoff_multiplier: 2.0
jitter: true
```

**Example:** Example

```yaml
operation: {"module": "api.call", "params": {"endpoint": "/submit"}}
max_retries: 3
retry_on: ["NETWORK_ERROR", "TIMEOUT_ERROR", "SERVICE_UNAVAILABLE"]
```
