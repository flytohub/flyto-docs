# Environment

Environment variable management and .env file loading.

**3 modules**

| Module | Description |
|--------|-------------|
| [รับตัวแปรสภาพแวดล้อม](#รับตัวแปรสภาพแวดล้อม) | รับค่าของตัวแปรสภาพแวดล้อม |
| [โหลดไฟล์ .env](#โหลดไฟล์-.env) | โหลดตัวแปรสภาพแวดล้อมจากไฟล์ .env |
| [ตั้งค่าตัวแปรสภาพแวดล้อม](#ตั้งค่าตัวแปรสภาพแวดล้อม) | ตั้งค่าตัวแปรสภาพแวดล้อมในกระบวนการปัจจุบัน |

## Modules

### รับตัวแปรสภาพแวดล้อม

`env.get`

รับค่าของตัวแปรสภาพแวดล้อม

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | ชื่อตัวแปรสภาพแวดล้อม |
| `default` | string | No | - | ค่าเริ่มต้นถ้าตัวแปรไม่ได้ถูกตั้งค่า |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | ชื่อตัวแปร |
| `value` | string | ค่าตัวแปร (หรือค่าเริ่มต้นถ้าไม่ได้ตั้งค่า) |
| `exists` | boolean | ตัวแปรมีอยู่ในสภาพแวดล้อมหรือไม่ |

**Example:** Get HOME variable

```yaml
name: HOME
```

**Example:** Get variable with default

```yaml
name: MY_APP_PORT
default: 8080
```

### โหลดไฟล์ .env

`env.load_dotenv`

โหลดตัวแปรสภาพแวดล้อมจากไฟล์ .env

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | `.env` | เส้นทางไปยังไฟล์ .env |
| `override` | boolean | No | `False` | เขียนทับตัวแปรสภาพแวดล้อมที่มีอยู่หรือไม่ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `loaded_count` | number | จำนวนตัวแปรที่โหลด |
| `variables` | array | รายการชื่อตัวแปรที่ถูกโหลด |

**Example:** Load .env file

```yaml
path: .env
override: false
```

### ตั้งค่าตัวแปรสภาพแวดล้อม

`env.set`

ตั้งค่าตัวแปรสภาพแวดล้อมในกระบวนการปัจจุบัน

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | ชื่อตัวแปรสภาพแวดล้อมที่จะตั้งค่า |
| `value` | string | Yes | - | ค่าที่จะกำหนดให้กับตัวแปรสภาพแวดล้อม |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | ชื่อตัวแปร |
| `value` | string | ค่าที่ตั้งค่าใหม่ |
| `previous_value` | string | ค่าก่อนหน้า (null ถ้าไม่ได้ตั้งค่าก่อนหน้า) |

**Example:** Set an environment variable

```yaml
name: MY_APP_PORT
value: 3000
```
