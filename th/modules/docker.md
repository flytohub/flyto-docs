# Docker

Build, run, inspect, and manage Docker containers.

**6 modules**

| Module | Description |
|--------|-------------|
| [สร้าง Docker Image](#สร้าง-docker-image) | สร้าง Docker image จาก Dockerfile |
| [ตรวจสอบ Docker Container](#ตรวจสอบ-docker-container) | รับข้อมูลรายละเอียดเกี่ยวกับ Docker container |
| [รับบันทึกคอนเทนเนอร์](#รับบันทึกคอนเทนเนอร์) | รับบันทึกจากคอนเทนเนอร์ Docker |
| [รายการคอนเทนเนอร์ Docker](#รายการคอนเทนเนอร์-docker) | รายการคอนเทนเนอร์ Docker |
| [รัน Docker Container](#รัน-docker-container) | รัน Docker container จาก image |
| [หยุด Docker Container](#หยุด-docker-container) | หยุด Docker container ที่กำลังรัน |

## Modules

### สร้าง Docker Image

`docker.build`

สร้าง Docker image จาก Dockerfile

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | เส้นทางไปยังไดเรกทอรีบริบทการสร้าง |
| `tag` | string | Yes | - | ตั้งชื่อและแท็กให้กับ image (เช่น myapp:latest) |
| `dockerfile` | string | No | - | เส้นทางไปยัง Dockerfile (สัมพันธ์กับบริบทการสร้าง) |
| `build_args` | object | No | - | ตัวแปรขณะสร้าง (เช่น {"NODE_ENV": "production"}) |
| `no_cache` | boolean | No | `False` | ไม่ใช้แคชเมื่อสร้าง image |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `image_id` | string | ID ของ image ที่สร้าง |
| `tag` | string | แท็กที่ใช้กับ image |
| `size` | string | ขนาดของ image ที่สร้าง |

**Example:** Build from current directory

```yaml
path: .
tag: myapp:latest
```

**Example:** Build with custom Dockerfile and args

```yaml
path: ./backend
tag: myapi:v1.0
dockerfile: Dockerfile.prod
build_args: {"NODE_ENV": "production"}
no_cache: true
```

### ตรวจสอบ Docker Container

`docker.inspect_container`

รับข้อมูลรายละเอียดเกี่ยวกับ Docker container

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID หรือชื่อของ container ที่จะตรวจสอบ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | ID สั้นของ container |
| `name` | string | ชื่อคอนเทนเนอร์ |
| `state` | object | สถานะของคอนเทนเนอร์ (สถานะ, กำลังทำงาน, pid, รหัสออก, ฯลฯ) |
| `image` | string | อิมเมจที่ใช้โดยคอนเทนเนอร์ |
| `network_settings` | object | การตั้งค่าเครือข่าย (IP, พอร์ต, เครือข่าย) |
| `mounts` | array | การติดตั้งโวลุ่มและการเชื่อมโยง |
| `config` | object | การตั้งค่าคอนเทนเนอร์ (env, cmd, labels, ฯลฯ) |

**Example:** Inspect a container by name

```yaml
container: my-nginx
```

**Example:** Inspect a container by ID

```yaml
container: a1b2c3d4e5f6
```

### รับบันทึกคอนเทนเนอร์

`docker.logs`

รับบันทึกจากคอนเทนเนอร์ Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID หรือชื่อคอนเทนเนอร์ |
| `tail` | number | No | `100` | จำนวนบรรทัดที่จะแสดงจากท้ายบันทึก |
| `follow` | boolean | No | `False` | ติดตามผลบันทึก (สตรีมจนกว่าจะหมดเวลา) |
| `timestamps` | boolean | No | `False` | แสดงเวลาประทับในผลบันทึก |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `logs` | string | ผลบันทึกของคอนเทนเนอร์ |
| `lines` | number | จำนวนบรรทัดบันทึกที่คืนค่า |

**Example:** Get last 50 lines

```yaml
container: my-nginx
tail: 50
```

**Example:** Get logs with timestamps

```yaml
container: my-app
tail: 100
timestamps: true
```

### รายการคอนเทนเนอร์ Docker

`docker.ps`

รายการคอนเทนเนอร์ Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `all` | boolean | No | `False` | แสดงคอนเทนเนอร์ทั้งหมด (ค่าเริ่มต้นแสดงเฉพาะที่กำลังทำงาน) |
| `filters` | object | No | - | กรองคอนเทนเนอร์ (เช่น {"name": "my-app", "status": "running"}) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `containers` | array | รายการคอนเทนเนอร์พร้อม id, ชื่อ, อิมเมจ, สถานะ, พอร์ต |
| `count` | number | จำนวนคอนเทนเนอร์ที่พบ |

**Example:** List running containers

```yaml
```

**Example:** List all containers

```yaml
all: true
```

**Example:** Filter by name

```yaml
filters: {"name": "nginx"}
```

### รัน Docker Container

`docker.run`

รัน Docker container จาก image

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | string | Yes | - | Docker image ที่จะรัน (เช่น nginx:latest) |
| `command` | string | No | - | คำสั่งที่จะรันใน container |
| `name` | string | No | - | ตั้งชื่อให้กับ container |
| `ports` | object | No | - | การแมปพอร์ตเป็น host:container (เช่น {"8080": "80"}) |
| `volumes` | object | No | - | การแมปโวลุ่มเป็น host_path:container_path |
| `env` | object | No | - | ตัวแปรสภาพแวดล้อมที่จะตั้งค่าใน container |
| `detach` | boolean | No | `True` | รัน container ในพื้นหลัง |
| `remove` | boolean | No | `False` | ลบ container อัตโนมัติเมื่อสิ้นสุดการทำงาน |
| `network` | string | No | - | เชื่อมต่อ container เข้ากับเครือข่าย |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | ID ของ container ที่สร้าง |
| `status` | string | สถานะของ container หลังจากรัน |

**Example:** Run Nginx web server

```yaml
image: nginx:latest
name: my-nginx
ports: {"8080": "80"}
detach: true
```

**Example:** Run a one-off command

```yaml
image: alpine:latest
command: echo hello world
remove: true
detach: false
```

### หยุด Docker Container

`docker.stop`

หยุด Docker container ที่กำลังรัน

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID หรือชื่อของ container ที่จะหยุด |
| `timeout` | number | No | `10` | จำนวนวินาทีที่จะรอก่อนหยุด container |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | ID หรือชื่อของ container ที่หยุด |
| `stopped` | boolean | container หยุดสำเร็จหรือไม่ |

**Example:** Stop a container by name

```yaml
container: my-nginx
```

**Example:** Stop with custom timeout

```yaml
container: my-app
timeout: 30
```
