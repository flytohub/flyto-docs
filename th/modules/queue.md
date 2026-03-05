# Queue

In-memory and Redis message queue operations.

**3 modules**

| Module | Description |
|--------|-------------|
| [นำรายการออกจากคิว](#นำรายการออกจากคิว) | นำรายการออกและส่งคืนจากคิว |
| [เพิ่มรายการในคิว](#เพิ่มรายการในคิว) | เพิ่มรายการไปยังคิวในหน่วยความจำหรือ Redis |
| [ขนาดของคิว](#ขนาดของคิว) | ตรวจสอบขนาดปัจจุบันของคิว |

## Modules

### นำรายการออกจากคิว

`queue.dequeue`

นำรายการออกและส่งคืนจากคิว

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | ชื่อของคิวที่จะนำรายการออก |
| `backend` | string | No | `memory` | แบ็กเอนด์ของคิวที่จะใช้ |
| `redis_url` | string | No | `redis://localhost:6379` | URL การเชื่อมต่อ Redis |
| `timeout` | number | No | `0` | หมดเวลาเป็นวินาที (0 = ไม่บล็อก) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | any | รายการที่นำออกจากคิว (null ถ้าคิวว่าง) |
| `queue_name` | string | ชื่อของคิว |
| `remaining` | number | จำนวนรายการที่เหลือในคิว |
| `empty` | boolean | คิวว่างหรือไม่ |

### เพิ่มรายการในคิว

`queue.enqueue`

เพิ่มรายการไปยังคิวในหน่วยความจำหรือ Redis

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | ชื่อของคิวที่จะเพิ่มรายการ |
| `data` | string | Yes | - | ข้อมูลที่จะเพิ่มในคิว (ค่าใดๆ ที่สามารถแปลงเป็น JSON ได้) |
| `backend` | string | No | `memory` | แบ็กเอนด์ของคิวที่จะใช้ |
| `redis_url` | string | No | `redis://localhost:6379` | URL การเชื่อมต่อ Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | ชื่อของคิว |
| `position` | number | ตำแหน่งของรายการในคิว |
| `queue_size` | number | ขนาดปัจจุบันของคิวหลังจากเพิ่มรายการ |

### ขนาดของคิว

`queue.size`

ตรวจสอบขนาดปัจจุบันของคิว

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | ชื่อของคิวที่จะตรวจสอบ |
| `backend` | string | No | `memory` | แบ็กเอนด์ของคิวที่จะใช้ |
| `redis_url` | string | No | `redis://localhost:6379` | URL การเชื่อมต่อ Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | ชื่อของคิว |
| `size` | number | จำนวนรายการปัจจุบันในคิว |
