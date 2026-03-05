# Scheduler

Cron parsing, delay, and interval calculations.

**3 modules**

| Module | Description |
|--------|-------------|
| [แยกวิเคราะห์ Cron Expression](#แยกวิเคราะห์-cron-expression) | แยกวิเคราะห์ cron expression และคำนวณเวลาเริ่มต้น N ครั้งถัดไป |
| [หน่วงเวลา / หยุดชั่วคราว](#หน่วงเวลา--หยุดชั่วคราว) | หยุดการทำงานชั่วคราวตามระยะเวลาที่กำหนด |
| [คำนวณช่วงเวลา](#คำนวณช่วงเวลา) | คำนวณเวลาช่วงและการเกิดขึ้นครั้งถัดไป |

## Modules

### แยกวิเคราะห์ Cron Expression

`scheduler.cron_parse`

แยกวิเคราะห์ cron expression และคำนวณเวลาเริ่มต้น N ครั้งถัดไป

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Cron expression แบบ 5 ฟิลด์มาตรฐาน (เช่น "0 9 * * MON-FRI") |
| `count` | number | No | `5` | จำนวนเวลาเริ่มต้นครั้งถัดไปที่ต้องคำนวณ |
| `timezone` | string | No | `0` | เขตเวลาสำหรับการคำนวณ (UTC offset เช่น "+8" หรือ "-5", ค่าเริ่มต้น "0" สำหรับ UTC) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `expression` | string | Cron expression ที่แยกวิเคราะห์แล้ว |
| `description` | string | คำอธิบายตารางเวลาในรูปแบบที่อ่านง่าย |
| `next_runs` | array | รายการเวลาเริ่มต้นครั้งถัดไปในรูปแบบวันที่และเวลา ISO |
| `is_valid` | boolean | Expression นี้ถูกต้องหรือไม่ |

### หน่วงเวลา / หยุดชั่วคราว

`scheduler.delay`

หยุดการทำงานชั่วคราวตามระยะเวลาที่กำหนด

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | จำนวนวินาทีที่ต้องหน่วงเวลา |
| `message` | string | No | - | ข้อความเพิ่มเติมที่ต้องการใส่ในผลลัพธ์ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `delayed_seconds` | number | จำนวนวินาทีที่หน่วงเวลาจริง |
| `message` | string | ข้อความที่ให้ไว้หรือค่าเริ่มต้น |

### คำนวณช่วงเวลา

`scheduler.interval`

คำนวณเวลาช่วงและการเกิดขึ้นครั้งถัดไป

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | No | `0` | ส่วนประกอบวินาทีของช่วงเวลา |
| `minutes` | number | No | `0` | ส่วนประกอบนาทีของช่วงเวลา |
| `hours` | number | No | `0` | ส่วนประกอบชั่วโมงของช่วงเวลา |
| `start_time` | string | No | - | เวลาเริ่มต้นในรูปแบบ ISO 8601 (ค่าเริ่มต้น: ตอนนี้) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `interval_seconds` | number | ช่วงเวลารวมในวินาที |
| `next_runs` | array | รายการเวลาเริ่มต้น 5 ครั้งถัดไปในรูปแบบวันที่และเวลา ISO |
| `human_readable` | string | คำอธิบายช่วงเวลาในรูปแบบที่อ่านง่าย |
