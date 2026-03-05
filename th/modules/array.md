# Array Operations

List manipulation — chunk, flatten, group, map, reduce, zip, and more.

**12 modules**

| Module | Description |
|--------|-------------|
| [แบ่งอาเรย์](#แบ่งอาเรย์) | แบ่งอาร์เรย์เป็นชิ้นตามขนาดที่กำหนด |
| [บีบอัด](#บีบอัด) | ลบค่า null/ว่างเปล่าออกจากอาเรย์ |
| [ความแตกต่างของอาเรย์](#ความแตกต่างของอาเรย์) | หาองค์ประกอบในอาร์เรย์แรกที่ไม่อยู่ในอื่น ๆ |
| [ลบ](#ลบ) | ลบ N องค์ประกอบแรกจากอาเรย์ |
| [แบนอาเรย์](#แบนอาเรย์) | ทำให้อาร์เรย์ซ้อนเป็นอาร์เรย์เดียว |
| [จัดกลุ่มตาม](#จัดกลุ่มตาม) | จัดกลุ่มองค์ประกอบอาเรย์ตามคีย์ |
| [จุดตัดของอาเรย์](#จุดตัดของอาเรย์) | หาองค์ประกอบที่เหมือนกันระหว่างอาร์เรย์ |
| [รวมอาเรย์](#รวมอาเรย์) | รวมองค์ประกอบอาร์เรย์เป็นสตริง |
| [แมปอาเรย์](#แมปอาเรย์) | แปลงแต่ละองค์ประกอบในอาร์เรย์ |
| [ลดอาเรย์](#ลดอาเรย์) | ลดอาร์เรย์เป็นค่าเดียว |
| [นำ](#นำ) | นำ N องค์ประกอบแรกจากอาเรย์ |
| [ซิปอาเรย์](#ซิปอาเรย์) | รวมอาเรย์หลายอันตามลำดับ |

## Modules

### แบ่งอาเรย์

`array.chunk`

แบ่งอาร์เรย์เป็นชิ้นตามขนาดที่กำหนด

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `size` | number | Yes | `10` | Number of items per chunk |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | อาร์เรย์ของชิ้น |
| `chunks` | number | อาร์เรย์ของชิ้น |

**Example:** Chunk into groups of 3

```yaml
array: [1, 2, 3, 4, 5, 6, 7, 8, 9]
size: 3
```

**Example:** Batch process items

```yaml
array: ["a", "b", "c", "d", "e"]
size: 2
```

### บีบอัด

`array.compact`

ลบค่า null/ว่างเปล่าออกจากอาเรย์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | อาเรย์ที่ต้องการบีบอัด |
| `remove_empty_strings` | boolean | No | `True` | ลบสตริงที่ว่างเปล่า |
| `remove_zero` | boolean | No | `False` | ลบสตริงที่ว่างเปล่า |
| `remove_false` | boolean | No | `False` | ลบค่าที่เป็นศูนย์ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | ลบค่าที่เป็นเท็จ |
| `removed` | number | อาเรย์ที่บีบอัดแล้ว |

### ความแตกต่างของอาเรย์

`array.difference`

หาองค์ประกอบในอาร์เรย์แรกที่ไม่อยู่ในอื่น ๆ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `subtract` | array | Yes | - | Arrays containing items to remove from the base array |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | องค์ประกอบเฉพาะในอาร์เรย์แรก |
| `length` | number | องค์ประกอบเฉพาะในอาร์เรย์แรก |

**Example:** Find unique elements

```yaml
array: [1, 2, 3, 4, 5]
subtract: [[2, 4], [5]]
```

### ลบ

`array.drop`

ลบ N องค์ประกอบแรกจากอาเรย์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | อาเรย์ต้นทาง |
| `count` | number | Yes | `1` | อาเรย์ต้นทาง |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | จำนวนองค์ประกอบที่จะลบ |
| `dropped` | number | องค์ประกอบที่เหลือ |

### แบนอาเรย์

`array.flatten`

ทำให้อาร์เรย์ซ้อนเป็นอาร์เรย์เดียว

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `depth` | number | No | `1` | How many levels of nesting to flatten (-1 for infinite) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | อาร์เรย์ที่ทำให้แบนแล้ว |
| `length` | number | อาร์เรย์ที่ทำให้แบนแล้ว |

**Example:** Flatten one level

```yaml
array: [[1, 2], [3, 4], [5, 6]]
depth: 1
```

**Example:** Flatten all levels

```yaml
array: [[1, [2, [3, [4]]]]]
depth: -1
```

### จัดกลุ่มตาม

`array.group_by`

จัดกลุ่มองค์ประกอบอาเรย์ตามคีย์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | อาเรย์ของออบเจ็กต์ที่ต้องการจัดกลุ่ม |
| `key` | string | Yes | - | อาเรย์ของออบเจ็กต์ที่ต้องการจัดกลุ่ม |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `groups` | object | ชื่อคุณสมบัติที่ใช้จัดกลุ่ม |
| `keys` | array | ผลลัพธ์ที่จัดกลุ่มแล้ว |
| `count` | number | ผลลัพธ์ที่จัดกลุ่มแล้ว |

### จุดตัดของอาเรย์

`array.intersection`

หาองค์ประกอบที่เหมือนกันระหว่างอาร์เรย์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | Array of arrays to process (for intersection, union) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | องค์ประกอบที่เหมือนกัน |
| `length` | number | องค์ประกอบที่เหมือนกัน |

**Example:** Find common elements

```yaml
arrays: [[1, 2, 3, 4], [2, 3, 5], [2, 3, 6]]
```

### รวมอาเรย์

`array.join`

รวมองค์ประกอบอาร์เรย์เป็นสตริง

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `separator` | select (`, `, `,`, ` `, `
`, ` | `, ` - `, ``) | No | `,` | String to insert between items when joining |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | สตริงที่รวมแล้ว |

**Example:** Join with comma

```yaml
array: ["apple", "banana", "cherry"]
separator: , 
```

**Example:** Join with newline

```yaml
array: ["Line 1", "Line 2", "Line 3"]
separator: 

```

### แมปอาเรย์

`array.map`

แปลงแต่ละองค์ประกอบในอาร์เรย์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `operation` | select (`multiply`, `add`, `subtract`, `divide`, `extract`, `uppercase`, `lowercase`, `trim`, `tostring`, `tonumber`) | Yes | - | Transformation to apply to each item |
| `value` | any | No | - | Value for the operation: number for math operations, field name for extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | อาร์เรย์ที่แปลงแล้ว |
| `length` | number | อาร์เรย์ที่แปลงแล้ว |

**Example:** Multiply numbers

```yaml
array: [1, 2, 3, 4, 5]
operation: multiply
value: 2
```

**Example:** Extract field from objects

```yaml
array: [{"name": "Alice", "age": 30}, {"name": "Bob", "age": 25}]
operation: extract
value: name
```

### ลดอาเรย์

`array.reduce`

ลดอาร์เรย์เป็นค่าเดียว

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `operation` | select (`sum`, `product`, `average`, `min`, `max`, `count`, `join`, `first`, `last`) | Yes | - | How to combine all items into a single value |
| `separator` | select (`, `, `,`, ` `, `
`, ` | `, ` - `, ``) | No | `,` | String to insert between items when joining |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | ค่าที่ลดแล้ว |
| `operation` | string | ค่าที่ลดแล้ว |

**Example:** Sum numbers

```yaml
array: [1, 2, 3, 4, 5]
operation: sum
```

**Example:** Join strings

```yaml
array: ["Hello", "World", "from", "Flyto"]
operation: join
separator:  
```

### นำ

`array.take`

นำ N องค์ประกอบแรกจากอาเรย์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `array` | array | Yes | - | อาเรย์ต้นทาง |
| `count` | number | Yes | `1` | อาเรย์ต้นทาง |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | จำนวนองค์ประกอบที่จะนำ |
| `length` | number | องค์ประกอบที่นำมา |

### ซิปอาเรย์

`array.zip`

รวมอาเรย์หลายอันตามลำดับ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `arrays` | array | Yes | - | อาเรย์ของอาเรย์ที่ต้องการซิป |
| `fill_value` | any | No | - | อาเรย์ของอาเรย์ที่ต้องการ zip |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | array | ค่าเมื่อองค์ประกอบหายไป |
| `length` | number | อาเรย์ที่ซิปแล้ว |
