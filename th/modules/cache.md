# Cache

In-memory key-value cache with TTL support.

**4 modules**

| Module | Description |
|--------|-------------|
| [ล้างแคช](#ล้างแคช) | ล้างรายการแคชทั้งหมดหรือกรองตามรูปแบบ |
| [ลบแคช](#ลบแคช) | ลบรายการแคชโดยใช้คีย์ |
| [ดึงข้อมูลแคช](#ดึงข้อมูลแคช) | ดึงค่าจากแคชโดยใช้คีย์ |
| [ตั้งค่าแคช](#ตั้งค่าแคช) | ตั้งค่าในแคชพร้อม TTL แบบเลือกได้ |

## Modules

### ล้างแคช

`cache.clear`

ล้างรายการแคชทั้งหมดหรือกรองตามรูปแบบ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `pattern` | string | No | `*` | รูปแบบ Glob ที่จะจับคู่คีย์ (เช่น "user:*", ค่าเริ่มต้น "*" ล้างทั้งหมด) |
| `backend` | string | No | `memory` | แบ็กเอนด์แคชที่ใช้ |
| `redis_url` | string | No | `redis://localhost:6379` | URL การเชื่อมต่อ Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `cleared_count` | number | จำนวนรายการแคชที่ถูกล้าง |
| `backend` | string | แบ็กเอนด์ที่ใช้ |

### ลบแคช

`cache.delete`

ลบรายการแคชโดยใช้คีย์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | คีย์แคชที่ต้องการลบ |
| `backend` | string | No | `memory` | แบ็กเอนด์แคชที่ใช้ |
| `redis_url` | string | No | `redis://localhost:6379` | URL การเชื่อมต่อ Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | คีย์แคช |
| `deleted` | boolean | พบและลบคีย์หรือไม่ |
| `backend` | string | แบ็กเอนด์ที่ใช้ |

### ดึงข้อมูลแคช

`cache.get`

ดึงค่าจากแคชโดยใช้คีย์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | คีย์แคชที่ต้องการค้นหา |
| `backend` | string | No | `memory` | แบ็กเอนด์แคชที่ใช้ |
| `redis_url` | string | No | `redis://localhost:6379` | URL การเชื่อมต่อ Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | คีย์แคช |
| `value` | any | ค่าที่แคชไว้ (null ถ้าไม่พบ) |
| `hit` | boolean | พบคีย์ในแคชหรือไม่ |
| `backend` | string | แบ็กเอนด์ที่ใช้ |

### ตั้งค่าแคช

`cache.set`

ตั้งค่าในแคชพร้อม TTL แบบเลือกได้

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | คีย์แคชที่ใช้เก็บค่า |
| `value` | string | Yes | - | ค่าที่จะเก็บในแคช (ค่า JSON ที่ serialize ได้) |
| `ttl` | number | No | `0` | เวลาหมดอายุในวินาที (0 = ไม่หมดอายุ) |
| `backend` | string | No | `memory` | แบ็กเอนด์แคชที่ใช้ |
| `redis_url` | string | No | `redis://localhost:6379` | URL การเชื่อมต่อ Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | คีย์แคช |
| `stored` | boolean | ค่าเก็บสำเร็จหรือไม่ |
| `ttl` | number | TTL ในวินาที (0 = ไม่หมดอายุ) |
| `backend` | string | แบ็กเอนด์ที่ใช้ |
