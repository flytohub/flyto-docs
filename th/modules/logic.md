# Logic

Boolean logic operations: AND, OR, NOT, equals, contains.

**5 modules**

| Module | Description |
|--------|-------------|
| [ตรรกะ AND](#ตรรกะ-and) | ทำการดำเนินการทางตรรกะ AND |
| [ตรรกะ Contains](#ตรรกะ-contains) | ตรวจสอบว่าค่าหนึ่งมีอีกค่าหนึ่งหรือไม่ |
| [ตรรกะ Equals](#ตรรกะ-equals) | ตรวจสอบค่าสองค่าเท่ากันหรือไม่ |
| [ตรรกะ NOT](#ตรรกะ-not) | ทำการดำเนินการทางตรรกะ NOT |
| [ตรรกะ OR](#ตรรกะ-or) | ทำการดำเนินการทางตรรกะ OR |

## Modules

### ตรรกะ AND

`logic.and`

ทำการดำเนินการทางตรรกะ AND

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | ค่าบูลีนสำหรับ AND ร่วมกัน |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | ค่าบูลีนสำหรับ AND ร่วมกัน |
| `true_count` | number | ผลลัพธ์ของการดำเนินการ AND |
| `total_count` | number | ผลลัพธ์ของการดำเนินการ AND |

### ตรรกะ Contains

`logic.contains`

ตรวจสอบว่าค่าหนึ่งมีอีกค่าหนึ่งหรือไม่

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `haystack` | text | Yes | - | ค่าที่ต้องการค้นหาใน (สตริง, อาเรย์, หรือออบเจ็กต์) |
| `needle` | text | Yes | - | ค่าที่ต้องการค้นหาใน (สตริง, อาเรย์, หรือออบเจ็กต์) |
| `case_sensitive` | boolean | No | `True` | ค่าที่ต้องการค้นหา |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | การค้นหาสตริงที่คำนึงถึงตัวพิมพ์เล็กใหญ่ |
| `position` | number | ตรวจสอบว่า haystack มี needle หรือไม่ |
| `count` | number | ตรวจสอบว่า haystack มี needle หรือไม่ |

### ตรรกะ Equals

`logic.equals`

ตรวจสอบค่าสองค่าเท่ากันหรือไม่

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `a` | text | Yes | - | ค่าแรกที่ต้องการเปรียบเทียบ |
| `b` | text | Yes | - | ค่าแรกที่ต้องการเปรียบเทียบ |
| `strict` | boolean | No | `False` | ค่าที่สองที่ต้องการเปรียบเทียบ |
| `case_sensitive` | boolean | No | `True` | ต้องการประเภทเดียวกัน (ไม่มีการบังคับประเภท) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | การเปรียบเทียบสตริงที่คำนึงถึงตัวพิมพ์เล็กใหญ่ |
| `type_a` | string | ตรวจสอบว่าค่าเท่ากันหรือไม่ |
| `type_b` | string | ตรวจสอบว่าค่าเท่ากันหรือไม่ |

### ตรรกะ NOT

`logic.not`

ทำการดำเนินการทางตรรกะ NOT

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | boolean | Yes | `False` | ค่าบูลีนที่ต้องการปฏิเสธ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | ค่าบูลีนที่ต้องการปฏิเสธ |
| `original` | boolean | ผลลัพธ์ที่ถูกปฏิเสธ |

### ตรรกะ OR

`logic.or`

ทำการดำเนินการทางตรรกะ OR

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `values` | array | Yes | - | ค่าบูลีนสำหรับ OR ร่วมกัน |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | boolean | ค่าบูลีนสำหรับ OR ร่วมกัน |
| `true_count` | number | ผลลัพธ์ของการดำเนินการ OR |
| `total_count` | number | ผลลัพธ์ของการดำเนินการ OR |
