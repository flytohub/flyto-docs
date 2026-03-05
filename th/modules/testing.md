# Testing

Assertion utilities: equal, contains, length, true, not null, greater than.

**6 modules**

| Module | Description |
|--------|-------------|
| [ยืนยันมีค่า](#ยืนยันมีค่า) | ยืนยันว่าคอลเลกชันมีค่า |
| [ยืนยันเท่ากัน](#ยืนยันเท่ากัน) | ยืนยันว่าสองค่าเท่ากัน |
| [ยืนยันมากกว่า](#ยืนยันมากกว่า) | ยืนยันว่าค่ามากกว่าค่าอื่น |
| [ยืนยันความยาว](#ยืนยันความยาว) | ยืนยันว่าคอลเลกชันมีความยาวที่คาดหวัง |
| [ยืนยันไม่ใช่ Null](#ยืนยันไม่ใช่-null) | ยืนยันว่าค่าไม่ใช่ null หรือ undefined |
| [ยืนยันจริง](#ยืนยันจริง) | ยืนยันว่าเงื่อนไขเป็นจริง |

## Modules

### ยืนยันมีค่า

`test.assert_contains`

ยืนยันว่าคอลเลกชันมีค่า

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | คอลเลกชันที่จะค้นหา |
| `value` | ['string', 'number', 'boolean'] | Yes | - | คอลเลกชันที่จะค้นหา |
| `message` | string | No | - | ค่าที่จะค้นหา |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | ข้อความข้อผิดพลาดที่กำหนดเอง |
| `collection` | ['array', 'string'] | การยืนยันผ่านหรือไม่ |
| `value` | ['string', 'number', 'boolean'] | ยืนยันว่าคอลเลกชันมีค่า |
| `message` | string | ยืนยันว่าคอลเลกชันมีค่า |

### ยืนยันเท่ากัน

`test.assert_equal`

ยืนยันว่าสองค่าเท่ากัน

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | ค่าจริง |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | ค่าจริง |
| `message` | string | No | - | ค่าที่คาดหวัง |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | ข้อความข้อผิดพลาดที่กำหนดเอง |
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | การยืนยันผ่านหรือไม่ |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | ยืนยันว่าสองค่าเท่ากัน |
| `message` | string | ยืนยันว่าสองค่าเท่ากัน |

### ยืนยันมากกว่า

`test.assert_greater_than`

ยืนยันว่าค่ามากกว่าค่าอื่น

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | number | Yes | - | ค่าจริง |
| `threshold` | number | Yes | - | ค่าจริง |
| `message` | string | No | - | ค่าเกณฑ์ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | ข้อความข้อผิดพลาดที่กำหนดเอง |
| `actual` | number | การยืนยันผ่านหรือไม่ |
| `threshold` | number | ยืนยันว่าค่ามากกว่าค่าอื่น |
| `message` | string | ยืนยันว่าค่ามากกว่าค่าอื่น |

### ยืนยันความยาว

`test.assert_length`

ยืนยันว่าคอลเลกชันมีความยาวที่คาดหวัง

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | คอลเลกชันที่จะตรวจสอบ |
| `expected_length` | number | Yes | - | คอลเลกชันที่จะตรวจสอบ |
| `message` | string | No | - | ความยาวที่คาดหวัง |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | ข้อความข้อผิดพลาดที่กำหนดเอง |
| `actual_length` | number | ข้อความข้อผิดพลาดที่กำหนดเอง |
| `expected_length` | number | ยืนยันว่าคอลเลกชันมีความยาวที่คาดหวัง |
| `message` | string | ยืนยันว่าคอลเลกชันมีความยาวที่คาดหวัง |

### ยืนยันไม่ใช่ Null

`test.assert_not_null`

ยืนยันว่าค่าไม่ใช่ null หรือ undefined

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | ['string', 'number', 'boolean', 'object', 'array', 'null'] | Yes | - | ค่าที่จะตรวจสอบ |
| `message` | string | No | - | ค่าที่จะตรวจสอบ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | ยืนยันว่าค่าไม่ใช่ null หรือ undefined |
| `message` | string | ยืนยันว่าค่าไม่ใช่ null หรือ undefined |

### ยืนยันจริง

`test.assert_true`

ยืนยันว่าเงื่อนไขเป็นจริง

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | boolean | Yes | - | เงื่อนไขที่จะตรวจสอบ |
| `message` | string | No | - | เงื่อนไขที่จะตรวจสอบ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | ยืนยันว่าเงื่อนไขเป็นจริง |
| `message` | string | ยืนยันว่าเงื่อนไขเป็นจริง |
