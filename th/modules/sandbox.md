# Sandbox

Execute JavaScript, Python, or shell commands in isolated environments.

**3 modules**

| Module | Description |
|--------|-------------|
| [รัน JavaScript](#รัน-javascript) | รันโค้ด JavaScript ผ่าน Node.js พร้อมกำหนดเวลาหมด |
| [รัน Python](#รัน-python) | รันโค้ด Python ใน subprocess พร้อมกำหนดเวลาหมด |
| [รัน Shell](#รัน-shell) | รันคำสั่ง shell พร้อมกำหนดเวลาหมดและควบคุมสภาพแวดล้อม |

## Modules

### รัน JavaScript

`sandbox.execute_js`

รันโค้ด JavaScript ผ่าน Node.js พร้อมกำหนดเวลาหมด

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | โค้ด JavaScript ที่จะรันผ่าน Node.js |
| `timeout` | number | No | `10` | เวลาหมดในการรันเป็นวินาที |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | ผลลัพธ์มาตรฐานจากสคริปต์ |
| `stderr` | string | ข้อผิดพลาดมาตรฐานจากสคริปต์ |
| `exit_code` | number | รหัสออกจากกระบวนการ (0 = สำเร็จ) |
| `execution_time_ms` | number | เวลารันเป็นมิลลิวินาที |

**Example:** Simple console.log

```yaml
code: console.log("Hello, World!");
timeout: 10
```

**Example:** JSON processing

```yaml
code: const data = { name: "test", value: 42 };
console.log(JSON.stringify(data, null, 2));
```

### รัน Python

`sandbox.execute_python`

รันโค้ด Python ใน subprocess พร้อมกำหนดเวลาหมด

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | โค้ด Python ที่จะรัน |
| `timeout` | number | No | `10` | เวลาหมดในการรันเป็นวินาที |
| `allowed_modules` | array | No | - | รายการโมดูลที่สามารถนำเข้าได้ (ปล่อยว่างเพื่ออนุญาตทั้งหมด) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | ผลลัพธ์มาตรฐานจากสคริปต์ |
| `stderr` | string | ข้อผิดพลาดมาตรฐานจากสคริปต์ |
| `exit_code` | number | รหัสออกจากกระบวนการ (0 = สำเร็จ) |
| `execution_time_ms` | number | เวลารันเป็นมิลลิวินาที |

**Example:** Simple print

```yaml
code: print("Hello, World!")
timeout: 10
```

**Example:** Math calculation

```yaml
code: import math
print(math.pi)
allowed_modules: ["math"]
```

### รัน Shell

`sandbox.execute_shell`

รันคำสั่ง shell พร้อมกำหนดเวลาหมดและควบคุมสภาพแวดล้อม

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `command` | string | Yes | - | คำสั่ง shell ที่จะรัน |
| `timeout` | number | No | `10` | เวลาหมดในการรันเป็นวินาที |
| `working_dir` | string | No | - | ไดเรกทอรีทำงานสำหรับคำสั่ง |
| `env` | object | No | - | ตัวแปรสภาพแวดล้อมเพิ่มเติมที่จะตั้งค่า (รวมกับสภาพแวดล้อมปัจจุบัน) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | ผลลัพธ์มาตรฐานจากคำสั่ง |
| `stderr` | string | ข้อผิดพลาดมาตรฐานจากคำสั่ง |
| `exit_code` | number | รหัสออกจากกระบวนการ (0 = สำเร็จ) |
| `execution_time_ms` | number | เวลารันเป็นมิลลิวินาที |

**Example:** Simple echo

```yaml
command: echo "Hello, World!"
timeout: 10
```

**Example:** List files with custom working directory

```yaml
command: ls -la
working_dir: /tmp
```
