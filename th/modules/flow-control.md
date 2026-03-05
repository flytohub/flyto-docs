# Flow Control

Branching, loops, parallelism, subflows, triggers, and error handling.

**24 modules**

| Module | Description |
|--------|-------------|
| [กระบวนการชุด](#กระบวนการชุด) | ประมวลผลรายการเป็นชุดด้วยขนาดที่กำหนดได้ |
| [แยกสาขา](#แยกสาขา) | แยกสาขาตามเงื่อนไขจากการประเมินนิพจน์ |
| [จุดพัก](#จุดพัก) | หยุดการทำงานของเวิร์กโฟลว์เพื่อรอการอนุมัติหรืออินพุตจากผู้ใช้ |
| [Circuit Breaker](#circuit-breaker) | รูปแบบ circuit breaker เพื่อป้องกันความล้มเหลวที่ต่อเนื่อง |
| [คอนเทนเนอร์](#คอนเทนเนอร์) | คอนเทนเนอร์ซับโฟลว์ฝังตัวสำหรับจัดระเบียบเวิร์กโฟลว์ที่ซับซ้อน |
| [Debounce](#debounce) | หน่วงการทำงานเพื่อป้องกันการเรียกซ้ำอย่างรวดเร็ว |
| [สิ้นสุด](#สิ้นสุด) | โหนดสิ้นสุดเวิร์กโฟลว์ |
| [ตัวจัดการข้อผิดพลาด](#ตัวจัดการข้อผิดพลาด) | จับและจัดการข้อผิดพลาดจากโหนดต้นน้ำ |
| [ตัวเรียกเวิร์กโฟลว์ข้อผิดพลาด](#ตัวเรียกเวิร์กโฟลว์ข้อผิดพลาด) | จุดเริ่มต้นสำหรับเวิร์กโฟลว์ข้อผิดพลาด - เรียกใช้งานเมื่อเวิร์กโฟลว์อื่นล้มเหลว |
| [วนซ้ำแต่ละรายการ](#วนซ้ำแต่ละรายการ) | วนซ้ำรายการและดำเนินการขั้นตอนสำหรับแต่ละรายการ |
| [แยกสาขา](#แยกสาขา) | แยกการดำเนินการเป็นสาขาคู่ขนาน |
| [ไปที่](#ไปที่) | กระโดดไปยังขั้นตอนอื่นโดยไม่มีเงื่อนไข |
| [Invoke Workflow](#invoke-workflow) | Execute an external workflow file |
| [รวมสาขา](#รวมสาขา) | รอให้สาขาคู่ขนานเสร็จสิ้น |
| [วนซ้ำ](#วนซ้ำ) | ทำซ้ำขั้นตอน N ครั้งโดยใช้การกำหนดเส้นทางพอร์ตเอาต์พุต |
| [รวม](#รวม) | รวมอินพุตหลายตัวเป็นเอาต์พุตเดียว |
| [ขนาน](#ขนาน) | ดำเนินการหลายงานพร้อมกันด้วยกลยุทธ์ที่แตกต่างกัน |
| [จำกัดอัตรา](#จำกัดอัตรา) | จำกัดอัตราการทำงานโดยใช้ token bucket หรือ sliding window |
| [ลองใหม่](#ลองใหม่) | ลองทำงานที่ล้มเหลวใหม่ด้วยการตั้งค่าการถอยกลับ |
| [เริ่มต้น](#เริ่มต้น) | โหนดเริ่มต้นเวิร์กโฟลว์ |
| [ซับโฟลว์](#ซับโฟลว์) | อ้างอิงและดำเนินการเวิร์กโฟลว์ภายนอก |
| [สวิตช์](#สวิตช์) | แยกสาขาหลายทางตามการจับคู่ค่า |
| [ควบคุมอัตรา](#ควบคุมอัตรา) | ควบคุมอัตราการทำงานด้วยช่วงเวลาขั้นต่ำ |
| [ทริกเกอร์](#ทริกเกอร์) | จุดเริ่มต้นเวิร์กโฟลว์ - แบบแมนนวล, webhook, กำหนดเวลา หรือเหตุการณ์ |

## Modules

### กระบวนการชุด

`flow.batch`

ประมวลผลรายการเป็นชุดด้วยขนาดที่กำหนดได้

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `batch_size` | number | Yes | `10` | จำนวนรายการต่อชุด |
| `delay_ms` | number | No | `0` | มิลลิวินาทีที่ต้องรอระหว่างชุด (สำหรับการจำกัดอัตรา) |
| `continue_on_error` | boolean | No | `False` | ดำเนินการประมวลผลชุดที่เหลือต่อหากมีชุดหนึ่งล้มเหลว |
| `parallel_batches` | number | No | `1` | ดำเนินการประมวลผลชุดที่เหลือต่อหากมีชุดหนึ่งล้มเหลว |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | จำนวนชุดที่จะประมวลผลพร้อมกัน (1 สำหรับตามลำดับ) |
| `batch` | array | เหตุการณ์สำหรับการกำหนดเส้นทาง (ชุด/เสร็จสิ้น/ข้อผิดพลาด) |
| `batch_index` | number | เหตุการณ์สำหรับการกำหนดเส้นทาง (ชุด/เสร็จสิ้น/ข้อผิดพลาด) |
| `total_batches` | number | รายการในชุดปัจจุบัน |
| `total_items` | number | ดัชนีชุดปัจจุบัน (เริ่มที่ 0) |
| `is_last_batch` | boolean | จำนวนชุดทั้งหมด |
| `progress` | object | จำนวนรายการทั้งหมด |

**Example:** Example

```yaml
items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
batch_size: 10
```

**Example:** Example

```yaml
items: ${input.records}
batch_size: 100
delay_ms: 1000
```

**Example:** Example

```yaml
items: ${input.data}
batch_size: 50
parallel_batches: 3
continue_on_error: true
```

### แยกสาขา

`flow.branch`

แยกสาขาตามเงื่อนไขจากการประเมินนิพจน์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | string | Yes | - | Expression to evaluate (supports ==, !=, >, <, >=, <=, contains) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | เหตุการณ์การกำหนดเส้นทาง (true/false/error) |
| `outputs` | object | ค่าเอาต์พุตตามพอร์ต |
| `result` | boolean | ผลลัพธ์การแยกสาขา |
| `condition` | string | ค่าเงื่อนไข |
| `resolved_condition` | string | ผลการประเมินเงื่อนไข |

**Example:** Example

```yaml
condition: ${search_step.count} > 0
```

**Example:** Example

```yaml
condition: ${api_call.status} == success
```

### จุดพัก

`flow.breakpoint`

หยุดการทำงานของเวิร์กโฟลว์เพื่อรอการอนุมัติหรืออินพุตจากผู้ใช้

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | No | `Approval Required` | Title displayed to approvers |
| `description` | string | No | - | Optional description text |
| `timeout_seconds` | number | No | `0` | Maximum wait time (0 for no timeout) |
| `required_approvers` | array | Yes | - | Array of data items to process |
| `approval_mode` | select (`single`, `all`, `majority`, `first`) | No | `single` | How approvals are counted |
| `custom_fields` | array | Yes | - | Array of data items to process |
| `include_context` | boolean | No | `True` | Whether to include execution context |
| `auto_approve_condition` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | เหตุการณ์การกำหนดเส้นทาง (approved/rejected/timeout) |
| `breakpoint_id` | string | รหัสจุดพัก |
| `status` | string | สถานะ |
| `approved_by` | array | อนุมัติโดย |
| `rejected_by` | array | ปฏิเสธโดย |
| `custom_inputs` | object | ค่าอินพุตที่กำหนดเอง |
| `comments` | array | ความเห็นการตรวจสอบ |
| `resolved_at` | string | เวลาที่แก้ไข |
| `wait_duration_ms` | integer | ระยะเวลารอ (มิลลิวินาที) |

**Example:** Example

```yaml
title: Approve data export
description: Please review and approve the data export
```

**Example:** Example

```yaml
title: Manager Approval Required
description: Large transaction requires manager approval
required_approvers: ["manager@example.com"]
timeout_seconds: 3600
```

**Example:** Example

```yaml
title: Adjustment Required
custom_fields: [{"name": "reason", "label": "Reason", "type": "text", "required": true}, {"name": "amount", "label": "Amount", "type": "number", "required": true}]
```

### Circuit Breaker

`flow.circuit_breaker`

รูปแบบ circuit breaker เพื่อป้องกันความล้มเหลวที่ต่อเนื่อง

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `failure_threshold` | number | Yes | `5` | จำนวนความล้มเหลวก่อนที่ circuit จะเปิด |
| `reset_timeout_ms` | number | No | `60000` | เวลาในมิลลิวินาทีก่อนที่ circuit จะเปลี่ยนเป็นครึ่งเปิด |
| `half_open_max` | number | No | `1` | จำนวนคำขอสูงสุดที่อนุญาตในสถานะครึ่งเปิด |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | เหตุการณ์สำหรับการกำหนดเส้นทาง (อนุญาต/ปฏิเสธ/ครึ่งเปิด) |
| `state` | string | สถานะของ circuit (ปิด/เปิด/ครึ่งเปิด) |
| `failure_count` | number | จำนวนความล้มเหลวที่ต่อเนื่อง |
| `last_failure_time_ms` | number | เวลาของความล้มเหลวครั้งล่าสุดในหน่วยมิลลิวินาที |
| `time_until_half_open_ms` | number | มิลลิวินาทีก่อนที่ circuit จะเปลี่ยนเป็นครึ่งเปิด |

**Example:** Example

```yaml
failure_threshold: 5
reset_timeout_ms: 60000
```

**Example:** Example

```yaml
failure_threshold: 2
reset_timeout_ms: 10000
half_open_max: 1
```

**Example:** Example

```yaml
failure_threshold: 20
reset_timeout_ms: 120000
half_open_max: 3
```

### คอนเทนเนอร์

`flow.container`

คอนเทนเนอร์ซับโฟลว์ฝังตัวสำหรับจัดระเบียบเวิร์กโฟลว์ที่ซับซ้อน

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `subflow` | object | No | `{'nodes': [], 'edges': []}` | Embedded workflow definition with nodes and edges |
| `inherit_context` | boolean | No | `True` | Whether to inherit variables from parent workflow |
| `isolated_variables` | array | Yes | - | Array of data items to process |
| `export_variables` | array | Yes | - | Array of data items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | เหตุการณ์การกำหนดเส้นทาง (success/error) |
| `outputs` | object | ค่าเอาต์พุตตามพอร์ต |
| `subflow_result` | object | ผลลัพธ์ซับโฟลว์ |
| `exported_variables` | object | ตัวแปรที่ส่งออก |
| `node_count` | integer | จำนวนโหนด |
| `execution_time_ms` | number | เวลาดำเนินการ (มิลลิวินาที) |

**Example:** Example

```yaml
subflow: {"nodes": [], "edges": []}
inherit_context: true
```

**Example:** Example

```yaml
subflow: {"nodes": [], "edges": []}
inherit_context: false
```

### Debounce

`flow.debounce`

หน่วงการทำงานเพื่อป้องกันการเรียกซ้ำอย่างรวดเร็ว

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `delay_ms` | number | Yes | - | เวลารอหลังจากการเรียกครั้งล่าสุดก่อนดำเนินการ |
| `leading` | boolean | No | `False` | ดำเนินการที่ขอบนำ (การเรียกครั้งแรกทำให้เกิดการดำเนินการทันที) |
| `trailing` | boolean | No | `True` | ดำเนินการที่ขอบท้าย (หลังจากหมดเวลาหน่วง) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | เหตุการณ์สำหรับการกำหนดเส้นทาง (ดำเนินการ/หน่วง) |
| `last_call_ms` | number | เวลาของการเรียกครั้งล่าสุดในหน่วยมิลลิวินาที |
| `calls_debounced` | number | จำนวนการเรียกที่ถูกหน่วงตั้งแต่การดำเนินการครั้งล่าสุด |
| `time_since_last_ms` | number | เวลาที่ผ่านไปตั้งแต่การเรียกครั้งล่าสุดในหน่วยมิลลิวินาที |
| `edge` | string | ขอบที่ทำให้เกิดการดำเนินการ (นำ/ท้าย) |

**Example:** Example

```yaml
delay_ms: 500
```

**Example:** Example

```yaml
delay_ms: 1000
leading: true
trailing: false
```

**Example:** Example

```yaml
delay_ms: 2000
leading: true
trailing: true
```

### สิ้นสุด

`flow.end`

โหนดสิ้นสุดเวิร์กโฟลว์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `success_message` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | เหตุการณ์การกำหนดเส้นทาง (__end__) |
| `ended_at` | string | เวลาสิ้นสุด |
| `workflow_result` | object | ผลลัพธ์เวิร์กโฟลว์ |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
output_mapping: {"result": "${process.output}", "status": "success"}
```

### ตัวจัดการข้อผิดพลาด

`flow.error_handle`

จับและจัดการข้อผิดพลาดจากโหนดต้นน้ำ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | `log_and_continue` | จะทำอย่างไรกับข้อผิดพลาด |
| `include_traceback` | boolean | No | `True` | รวมการติดตามข้อผิดพลาดเต็มรูปแบบในผลลัพธ์ |
| `error_code_mapping` | object | No | `{}` | รวมการติดตามข้อผิดพลาดเต็มรูปแบบในผลลัพธ์ |
| `fallback_value` | any | No | - | จับคู่รหัสข้อผิดพลาดกับการกระทำที่กำหนดเอง |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | ค่าที่จะใช้เมื่อข้อผิดพลาดถูกระงับ |
| `outputs` | object | เหตุการณ์สำหรับการกำหนดเส้นทาง (จัดการ/ยกระดับ) |
| `error_info` | object | เหตุการณ์สำหรับการกำหนดเส้นทาง (จัดการ/ยกระดับ) |
| `action_taken` | string | การกระทำที่ได้ดำเนินการ |

**Example:** Example

```yaml
action: log_and_continue
include_traceback: true
```

**Example:** Example

```yaml
action: suppress
fallback_value: {"status": "skipped", "reason": "upstream_error"}
```

**Example:** Example

```yaml
action: transform
error_code_mapping: {"TIMEOUT": {"retry": true, "delay": 5000}, "NOT_FOUND": {"skip": true}}
```

### ตัวเรียกเวิร์กโฟลว์ข้อผิดพลาด

`flow.error_workflow_trigger`

จุดเริ่มต้นสำหรับเวิร์กโฟลว์ข้อผิดพลาด - เรียกใช้งานเมื่อเวิร์กโฟลว์อื่นล้มเหลว

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `description` | string | No | - | Description of this error workflow |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | คำอธิบายของเวิร์กโฟลว์ข้อผิดพลาดนี้ |
| `error_context` | object | เหตุการณ์สำหรับการกำหนดเส้นทาง (เรียกใช้งาน) |
| `triggered_at` | string | เวลาประทับ ISO เมื่อเวิร์กโฟลว์ข้อผิดพลาดถูกเรียกใช้งาน |

**Example:** Example

```yaml
description: Send Slack notification on workflow failure
```

**Example:** Example

```yaml
description: Log all workflow errors to monitoring system
```

### วนซ้ำแต่ละรายการ

`flow.foreach`

วนซ้ำรายการและดำเนินการขั้นตอนสำหรับแต่ละรายการ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | string | Yes | - | รายการที่จะวนซ้ำ (รองรับการอ้างอิง ${variable}) |
| `steps` | array | No | - | ขั้นตอนที่จะดำเนินการสำหรับแต่ละรายการ |
| `item_var` | string | No | `item` | ชื่อตัวแปรสำหรับรายการปัจจุบัน |
| `index_var` | string | No | `index` | ชื่อตัวแปรสำหรับดัชนีปัจจุบัน |
| `output_mode` | string | No | `collect` | โหมดการรวบรวมผลลัพธ์ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | เหตุการณ์การกำหนดเส้นทาง (iterate/done) |
| `__set_context` | object | ตั้งค่าบริบท |
| `outputs` | object | ค่าเอาต์พุตตามพอร์ต |
| `iteration` | number | ดัชนีการวนซ้ำปัจจุบัน |
| `status` | string | สถานะการดำเนินการ |
| `results` | array | ผลลัพธ์ที่รวบรวม |
| `count` | number | จำนวนรายการทั้งหมด |

**Example:** Example

```yaml
items: ${steps.csv.result.data}
```

**Example:** Example

```yaml
items: ${search_results}
item_var: element
steps: [{"module": "element.text", "params": {"element_id": "${element}"}, "output": "text"}]
```

### แยกสาขา

`flow.fork`

แยกการดำเนินการเป็นสาขาคู่ขนาน

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `branch_count` | number | No | `2` | Number of parallel branches |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | เหตุการณ์การกำหนดเส้นทาง (fork/error) |
| `input_data` | any | ข้อมูลอินพุต |
| `branch_count` | integer | จำนวนสาขา |

**Example:** Example

```yaml
branch_count: 2
```

**Example:** Example

```yaml
branch_count: 3
```

### ไปที่

`flow.goto`

กระโดดไปยังขั้นตอนอื่นโดยไม่มีเงื่อนไข

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `target` | string | Yes | - | Step ID to jump to |
| `max_iterations` | number | No | `100` | Maximum number of iterations (prevents infinite loops) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | เหตุการณ์การกำหนดเส้นทาง (goto) |
| `target` | string | ขั้นตอนเป้าหมาย |
| `iteration` | number | จำนวนการวนซ้ำ |

**Example:** Example

```yaml
target: fetch_next_page
max_iterations: 10
```

**Example:** Example

```yaml
target: cleanup_step
```

### Invoke Workflow

`flow.invoke`

Execute an external workflow file

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `workflow_source` | string | Yes | - | File path to workflow YAML or inline YAML content |
| `workflow_params` | object | Yes | - | Parameters to pass to the invoked workflow |
| `timeout_seconds` | number | No | `300` | Maximum execution time in seconds |
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Parameters to pass to the invoked workflow |
| `result` | any | Maximum execution time in seconds |
| `workflow_id` | string | Event for routing (success/error) |
| `execution_time_ms` | number | Workflow execution result |

**Example:** Example

```yaml
workflow_source: workflows/validate_order.yaml
workflow_params: {"order_id": "${input.order_id}"}
timeout_seconds: 60
```

**Example:** Example

```yaml
workflow_source: workflows/process_data.yaml
workflow_params: {"data": "${input.data}"}
output_mapping: {"processed": "result.data"}
```

### รวมสาขา

`flow.join`

รอให้สาขาคู่ขนานเสร็จสิ้น

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`all`, `any`, `first`) | No | `all` | How to handle multiple inputs |
| `input_count` | number | No | `2` | Number of ports |
| `timeout` | number | No | `60000` | Maximum time to wait in milliseconds |
| `cancel_pending` | boolean | No | `True` | Cancel pending branches when using first strategy |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | เหตุการณ์การกำหนดเส้นทาง (joined/timeout/error) |
| `joined_data` | array | ข้อมูลที่รวม |
| `completed_count` | integer | จำนวนสาขาที่เสร็จสิ้น |
| `strategy` | string | กลยุทธ์การรวม |

**Example:** Example

```yaml
strategy: all
input_count: 2
timeout_ms: 30000
```

**Example:** Example

```yaml
strategy: first
input_count: 3
cancel_pending: true
```

### วนซ้ำ

`flow.loop`

ทำซ้ำขั้นตอน N ครั้งโดยใช้การกำหนดเส้นทางพอร์ตเอาต์พุต

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `times` | number | Yes | `1` | จำนวนครั้งที่ทำซ้ำ |
| `target` | string | No | - | ขั้นตอนเป้าหมาย (เลิกใช้แล้ว) |
| `steps` | array | No | - | ขั้นตอนที่จะดำเนินการสำหรับแต่ละการวนซ้ำ |
| `index_var` | string | No | `index` | ชื่อตัวแปรสำหรับดัชนีปัจจุบัน |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | เหตุการณ์การกำหนดเส้นทาง (iterate/done) |
| `outputs` | object | ค่าเอาต์พุตตามพอร์ต |
| `iteration` | number | การวนซ้ำปัจจุบัน |
| `status` | string | สถานะการดำเนินการ |
| `results` | array | ผลลัพธ์ที่รวบรวม |
| `count` | number | จำนวนการวนซ้ำทั้งหมด |

**Example:** Example

```yaml
times: 3
```

**Example:** Example

```yaml
times: 5
steps: [{"module": "browser.click", "params": {"selector": ".next"}}]
```

### รวม

`flow.merge`

รวมอินพุตหลายตัวเป็นเอาต์พุตเดียว

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`first`, `last`, `all`) | No | `all` | How to merge multiple inputs |
| `input_count` | number | No | `2` | Number of ports |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | เหตุการณ์การกำหนดเส้นทาง (merged/error) |
| `merged_data` | any | ข้อมูลที่รวม |
| `input_count` | integer | จำนวนอินพุต |
| `strategy` | string | กลยุทธ์การรวม |

**Example:** Example

```yaml
strategy: all
input_count: 3
```

**Example:** Example

```yaml
strategy: first
input_count: 2
```

### ขนาน

`flow.parallel`

ดำเนินการหลายงานพร้อมกันด้วยกลยุทธ์ที่แตกต่างกัน

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tasks` | array | Yes | - | อาร์เรย์ของคำจำกัดความของงานที่จะดำเนินการพร้อมกัน |
| `mode` | string | No | `all` | อาร์เรย์ของคำจำกัดความของงานที่จะดำเนินการพร้อมกัน |
| `timeout_ms` | number | No | `60000` | Maximum wait time in milliseconds |
| `fail_fast` | boolean | No | `True` | หยุดงานทั้งหมดเมื่อเกิดความล้มเหลวครั้งแรก (เฉพาะเมื่อ mode=all) |
| `concurrency_limit` | number | No | `0` | หยุดงานทั้งหมดเมื่อเกิดความล้มเหลวครั้งแรก (เฉพาะเมื่อ mode=all) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | จำนวนงานพร้อมกันสูงสุด (0 สำหรับไม่จำกัด) |
| `results` | array | เหตุการณ์สำหรับการกำหนดเส้นทาง (เสร็จสิ้น/บางส่วน/ข้อผิดพลาด) |
| `completed_count` | number | เหตุการณ์สำหรับการกำหนดเส้นทาง (เสร็จสิ้น/บางส่วน/ข้อผิดพลาด) |
| `failed_count` | number | ผลลัพธ์จากทุกงาน |
| `total_count` | number | จำนวนงานที่เสร็จสมบูรณ์สำเร็จ |
| `mode` | string | จำนวนงานที่ล้มเหลว |
| `duration_ms` | number | จำนวนงานทั้งหมด |

**Example:** Example

```yaml
tasks: [{"module": "http.get", "params": {"url": "https://api1.example.com"}}, {"module": "http.get", "params": {"url": "https://api2.example.com"}}]
mode: all
timeout_ms: 30000
```

**Example:** Example

```yaml
tasks: [{"module": "http.get", "params": {"url": "https://mirror1.example.com"}}, {"module": "http.get", "params": {"url": "https://mirror2.example.com"}}]
mode: race
```

**Example:** Example

```yaml
tasks: [{"module": "http.get", "params": {"url": "https://api1.example.com"}}, {"module": "http.get", "params": {"url": "https://might-fail.example.com"}}]
mode: settle
```

### จำกัดอัตรา

`flow.rate_limit`

จำกัดอัตราการทำงานโดยใช้ token bucket หรือ sliding window

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_requests` | number | Yes | - | จำนวนคำขอสูงสุดที่อนุญาตต่อหน้าต่าง |
| `window_ms` | number | No | `60000` | หน้าต่างเวลาในหน่วยมิลลิวินาที |
| `strategy` | string | No | `token_bucket` | กลยุทธ์การจำกัดอัตรา (token_bucket หรือ sliding_window) |
| `queue_overflow` | string | No | `wait` | พฤติกรรมเมื่อคิวเต็ม (ทิ้งหรือเกิดข้อผิดพลาด) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | เหตุการณ์สำหรับการกำหนดเส้นทาง (อนุญาต/จำกัด) |
| `tokens_remaining` | number | โทเค็นที่เหลือใน bucket |
| `window_reset_ms` | number | มิลลิวินาทีก่อนที่หน้าต่างจะรีเซ็ต |
| `requests_in_window` | number | จำนวนคำขอในหน้าต่างปัจจุบัน |
| `wait_ms` | number | มิลลิวินาทีที่ต้องรอก่อนคำขอถัดไปที่อนุญาต |

**Example:** Example

```yaml
max_requests: 100
window_ms: 60000
strategy: token_bucket
```

**Example:** Example

```yaml
max_requests: 10
window_ms: 1000
strategy: fixed_window
queue_overflow: error
```

**Example:** Example

```yaml
max_requests: 50
window_ms: 30000
strategy: sliding_window
queue_overflow: wait
```

### ลองใหม่

`flow.retry`

ลองทำงานที่ล้มเหลวใหม่ด้วยการตั้งค่าการถอยกลับ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_retries` | number | Yes | `3` | จำนวนครั้งสูงสุดในการลองใหม่ |
| `initial_delay_ms` | number | No | `1000` | ความล่าช้าเริ่มต้นก่อนลองใหม่ครั้งแรกในมิลลิวินาที |
| `backoff_multiplier` | number | No | `2.0` | ตัวคูณสำหรับการถอยกลับแบบทวีคูณ |
| `max_delay_ms` | number | No | `30000` | ความล่าช้าสูงสุดระหว่างการลองใหม่ในมิลลิวินาที |
| `retry_on_errors` | array | No | `[]` | ประเภทข้อผิดพลาดที่ต้องลองใหม่ (ว่างหมายถึงลองใหม่ทั้งหมด) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | เหตุการณ์สำหรับการกำหนดเส้นทาง (ลองใหม่/สำเร็จ/ล้มเหลว) |
| `attempt` | number | หมายเลขความพยายามปัจจุบัน |
| `max_retries` | number | จำนวนครั้งสูงสุดที่กำหนดไว้สำหรับการลองใหม่ |
| `delay_ms` | number | ความล่าช้าก่อนลองใหม่ครั้งถัดไปในมิลลิวินาที |
| `total_elapsed_ms` | number | เวลาที่ผ่านไปทั้งหมดในมิลลิวินาที |
| `last_error` | object | ข้อความข้อผิดพลาดล่าสุด |

**Example:** Example

```yaml
max_retries: 3
```

**Example:** Example

```yaml
max_retries: 10
initial_delay_ms: 500
backoff_multiplier: 1.5
max_delay_ms: 10000
```

**Example:** Example

```yaml
max_retries: 5
initial_delay_ms: 2000
retry_on_errors: ["TIMEOUT", "RATE_LIMIT", "429", "503"]
```

### เริ่มต้น

`flow.start`

โหนดเริ่มต้นเวิร์กโฟลว์

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | เหตุการณ์การกำหนดเส้นทาง (start) |
| `started_at` | string | เวลาเริ่มต้น |
| `workflow_id` | string | รหัสเวิร์กโฟลว์ |

**Example:** Example

```yaml
```

### ซับโฟลว์

`flow.subflow`

อ้างอิงและดำเนินการเวิร์กโฟลว์ภายนอก

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `workflow_ref` | string | Yes | - | Text content to process |
| `execution_mode` | select (`inline`, `spawn`, `async`) | No | `inline` | Select an option |
| `input_mapping` | object | Yes | - | Data object to process |
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `timeout` | number | No | `300000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | เหตุการณ์การกำหนดเส้นทาง (success/error) |
| `result` | any | ผลลัพธ์การดำเนินการ |
| `execution_id` | string | รหัสการดำเนินการ |
| `workflow_ref` | string | การอ้างอิงเวิร์กโฟลว์ |

**Example:** Example

```yaml
workflow_ref: workflows/validate_order
execution_mode: inline
input_mapping: {"order_data": "${input.order}"}
output_mapping: {"validation_result": "result"}
```

**Example:** Example

```yaml
workflow_ref: workflows/send_notifications
execution_mode: spawn
```

### สวิตช์

`flow.switch`

แยกสาขาหลายทางตามการจับคู่ค่า

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Value to match against cases (supports variable reference) |
| `cases` | array | Yes | `[{'id': 'case_1', 'value': 'case1', 'label': 'Case 1'}]` | List of case definitions |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | เหตุการณ์การกำหนดเส้นทาง (case:value หรือ default) |
| `outputs` | object | ค่าเอาต์พุตตามพอร์ต |
| `matched_case` | string | กรณีที่ตรงกัน |
| `value` | any | ค่าที่ตรงกัน |

**Example:** Example

```yaml
expression: ${api_response.status}
cases: [{"id": "case-1", "value": "success", "label": "Success"}, {"id": "case-2", "value": "pending", "label": "Pending"}, {"id": "case-3", "value": "error", "label": "Error"}]
```

**Example:** Example

```yaml
expression: ${input.type}
cases: [{"id": "img", "value": "image", "label": "Image"}, {"id": "vid", "value": "video", "label": "Video"}, {"id": "txt", "value": "text", "label": "Text"}]
```

### ควบคุมอัตรา

`flow.throttle`

ควบคุมอัตราการทำงานด้วยช่วงเวลาขั้นต่ำ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `interval_ms` | number | Yes | - | เวลาขั้นต่ำระหว่างการดำเนินการในมิลลิวินาที |
| `leading` | boolean | No | `True` | ดำเนินการในขอบนำ (การเรียกครั้งแรกผ่านทันที) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | เหตุการณ์สำหรับการกำหนดเส้นทาง (ดำเนินการ/ควบคุม) |
| `last_execution_ms` | number | เวลาที่ดำเนินการครั้งล่าสุดที่อนุญาต |
| `calls_throttled` | number | จำนวนการเรียกที่ถูกควบคุมตั้งแต่การดำเนินการครั้งล่าสุด |
| `time_since_last_ms` | number | เวลาที่ผ่านไปตั้งแต่การดำเนินการครั้งล่าสุดในมิลลิวินาที |
| `remaining_ms` | number | มิลลิวินาทีที่เหลือจนกว่าจะอนุญาตให้ดำเนินการครั้งถัดไป |

**Example:** Example

```yaml
interval_ms: 1000
```

**Example:** Example

```yaml
interval_ms: 200
leading: true
```

**Example:** Example

```yaml
interval_ms: 5000
leading: false
```

### ทริกเกอร์

`flow.trigger`

จุดเริ่มต้นเวิร์กโฟลว์ - แบบแมนนวล, webhook, กำหนดเวลา หรือเหตุการณ์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `trigger_type` | select (`manual`, `webhook`, `schedule`, `event`, `mcp`, `polling`) | No | `manual` | Type of trigger event |
| `webhook_path` | string | No | - | URL path for webhook trigger |
| `schedule` | string | No | - | Cron expression for scheduled trigger |
| `event_name` | string | No | - | Event name to listen for |
| `tool_name` | string | No | - | MCP tool name exposed to AI agents |
| `tool_description` | string | No | - | Description shown to AI agents for this tool |
| `poll_url` | string | No | - | API endpoint to poll for changes |
| `poll_interval` | number | No | `300` | How often to check for changes (minimum 60 seconds) |
| `poll_method` | select (`GET`, `POST`) | No | `GET` | HTTP method for polling request |
| `poll_headers` | object | No | `{}` | Custom headers for polling request (e.g. API keys) |
| `poll_body` | object | No | `{}` | Request body for POST polling |
| `dedup_key` | string | No | - | JSON path to extract a unique value for deduplication |
| `config` | object | No | - | Custom trigger config (for composites: LINE BOT, Telegram, Slack, etc.) |
| `description` | string | No | - | Optional description text |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | เหตุการณ์การกำหนดเส้นทาง (triggered/error) |
| `trigger_data` | object | ข้อมูลทริกเกอร์ |
| `trigger_type` | string | ประเภททริกเกอร์ |
| `triggered_at` | string | เวลาที่ทริกเกอร์ |

**Example:** Example

```yaml
trigger_type: manual
```

**Example:** Example

```yaml
trigger_type: webhook
webhook_path: /api/webhooks/order-created
```

**Example:** Example

```yaml
trigger_type: schedule
schedule: 0 * * * *
```

**Example:** Example

```yaml
trigger_type: mcp
tool_name: send-report
tool_description: Send a weekly summary report
```

**Example:** Example

```yaml
trigger_type: polling
poll_url: https://api.example.com/items
poll_interval: 300
dedup_key: $.data[0].id
```
