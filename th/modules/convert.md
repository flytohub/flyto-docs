# Convert

Type casting between data types.

**5 modules**

| Module | Description |
|--------|-------------|
| [เป็นอาเรย์](#เป็นอาเรย์) | แปลงค่าเป็นอาเรย์ |
| [เป็นบูลีน](#เป็นบูลีน) | แปลงค่าเป็นบูลีน |
| [เป็นตัวเลข](#เป็นตัวเลข) | แปลงค่าเป็นตัวเลข |
| [เป็นออบเจ็กต์](#เป็นออบเจ็กต์) | แปลงค่าเป็นออบเจ็กต์ |
| [เป็นสตริง](#เป็นสตริง) | แปลงค่าใดๆ เป็นสตริง |

## Modules

### เป็นอาเรย์

`convert.to_array`

แปลงค่าเป็นอาเรย์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | ค่าที่ต้องการแปลง |
| `split_string` | boolean | No | `False` | ค่าที่ต้องการแปลง |
| `delimiter` | string | No | - | แยกสตริงเป็นตัวอักษร |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | ตัวคั่นสำหรับการแยกสตริง |
| `length` | number | อาเรย์ที่แปลงแล้ว |
| `original_type` | string | อาเรย์ที่แปลงแล้ว |

### เป็นบูลีน

`convert.to_boolean`

แปลงค่าเป็นบูลีน

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | ค่าที่ต้องการแปลง |
| `strict` | boolean | No | `False` | ค่าที่ต้องการแปลง |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | รับเฉพาะสตริง true/false |
| `original_type` | string | บูลีนที่แปลงแล้ว |

### เป็นตัวเลข

`convert.to_number`

แปลงค่าเป็นตัวเลข

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | ค่าที่ต้องการแปลง |
| `default` | number | No | `0` | ค่าที่ต้องการแปลง |
| `integer` | boolean | No | `False` | ค่าเริ่มต้นหากการแปลงล้มเหลว |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | number | แปลงเป็นจำนวนเต็ม |
| `success` | boolean | ตัวเลขที่แปลงแล้ว |
| `original_type` | string | ตัวเลขที่แปลงแล้ว |

### เป็นออบเจ็กต์

`convert.to_object`

แปลงค่าเป็นออบเจ็กต์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | ค่าที่ต้องการแปลง |
| `key_name` | string | No | `value` | ค่าที่ต้องการแปลง |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | object | ชื่อคีย์สำหรับห่อหุ้มที่ไม่ใช่ออบเจ็กต์ |
| `keys` | array | ออบเจ็กต์ที่แปลงแล้ว |
| `original_type` | string | ออบเจ็กต์ที่แปลงแล้ว |

### เป็นสตริง

`convert.to_string`

แปลงค่าใดๆ เป็นสตริง

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | any | Yes | - | ค่าที่ต้องการแปลง |
| `pretty` | boolean | No | `False` | ค่าที่ต้องการแปลง |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | จัดรูปแบบออบเจ็กต์/อาเรย์ด้วยการเยื้อง |
| `original_type` | string | การแสดงผลในรูปแบบสตริง |
