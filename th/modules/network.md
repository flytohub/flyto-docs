# Network

Ping, port scan, traceroute, and WHOIS lookup.

**4 modules**

| Module | Description |
|--------|-------------|
| [พิง](#พิง) | พิงโฮสต์เพื่อตรวจสอบการเชื่อมต่อและวัดความหน่วง |
| [สแกนพอร์ต](#สแกนพอร์ต) | สแกนพอร์ตบนโฮสต์เพื่อตรวจสอบว่าพอร์ตใดเปิดอยู่ |
| [เส้นทาง](#เส้นทาง) | ติดตามเส้นทางที่แพ็กเก็ตใช้เพื่อไปยังโฮสต์ปลายทาง |
| [ค้นหา WHOIS](#ค้นหา-whois) | ดำเนินการค้นหา WHOIS สำหรับโดเมนเพื่อดึงข้อมูลการลงทะเบียน |

## Modules

### พิง

`network.ping`

พิงโฮสต์เพื่อตรวจสอบการเชื่อมต่อและวัดความหน่วง

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | ชื่อโฮสต์หรือที่อยู่ IP ที่จะพิง |
| `count` | number | No | `4` | จำนวนแพ็กเก็ตพิงที่จะส่ง |
| `timeout` | number | No | `5` | เวลาหมดในวินาทีสำหรับแต่ละแพ็กเก็ต |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | โฮสต์ที่ถูกพิง |
| `alive` | boolean | โฮสต์ตอบสนองหรือไม่ |
| `packets_sent` | number | จำนวนแพ็กเก็ตที่ส่ง |
| `packets_received` | number | จำนวนแพ็กเก็ตที่ได้รับ |
| `packet_loss_pct` | number | เปอร์เซ็นต์การสูญเสียแพ็กเก็ต |
| `latency_ms` | object | สถิติความหน่วงเป็นมิลลิวินาที (ต่ำสุด, เฉลี่ย, สูงสุด) |

**Example:** Ping a host

```yaml
host: google.com
count: 4
timeout: 5
```

### สแกนพอร์ต

`network.port_scan`

สแกนพอร์ตบนโฮสต์เพื่อตรวจสอบว่าพอร์ตใดเปิดอยู่

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | ชื่อโฮสต์หรือที่อยู่ IP ที่จะสแกน |
| `ports` | string | No | - | พอร์ตที่จะสแกน: คั่นด้วยเครื่องหมายจุลภาค (80,443), ช่วง (80-443), หรือเว้นว่างไว้สำหรับพอร์ตทั่วไป |
| `timeout` | number | No | `1.0` | เวลาหมดการเชื่อมต่อเป็นวินาทีต่อพอร์ต |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | โฮสต์ที่ถูกสแกน |
| `open_ports` | array | รายการหมายเลขพอร์ตที่เปิด |
| `closed_ports` | array | รายการหมายเลขพอร์ตที่ปิด |
| `scan_time_ms` | number | เวลาสแกนทั้งหมดเป็นมิลลิวินาที |

**Example:** Scan common ports

```yaml
host: example.com
```

**Example:** Scan specific port range

```yaml
host: example.com
ports: 80-443
timeout: 2.0
```

### เส้นทาง

`network.traceroute`

ติดตามเส้นทางที่แพ็กเก็ตใช้เพื่อไปยังโฮสต์ปลายทาง

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | ชื่อโฮสต์หรือที่อยู่ IP ที่จะติดตามเส้นทางไป |
| `max_hops` | number | No | `30` | จำนวนฮอปสูงสุดที่จะติดตาม |
| `timeout` | number | No | `5` | เวลาหมดในวินาทีสำหรับแต่ละโพรบ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | โฮสต์เป้าหมาย |
| `hops` | array | รายการฮอปตามเส้นทาง |
| `total_hops` | number | จำนวนฮอปทั้งหมดเพื่อไปยังปลายทาง |

**Example:** Trace route to host

```yaml
host: google.com
max_hops: 30
```

### ค้นหา WHOIS

`network.whois`

ดำเนินการค้นหา WHOIS สำหรับโดเมนเพื่อดึงข้อมูลการลงทะเบียน

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | ชื่อโดเมนที่จะค้นหา |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `domain` | string | โดเมนที่ถูกค้นหา |
| `registrar` | string | ผู้รับจดทะเบียนโดเมน |
| `creation_date` | string | วันที่สร้างโดเมน |
| `expiration_date` | string | วันที่หมดอายุของโดเมน |
| `name_servers` | array | รายการเซิร์ฟเวอร์ชื่อ |
| `raw` | string | ผลลัพธ์ WHOIS แบบดิบทั้งหมด |

**Example:** WHOIS lookup

```yaml
domain: example.com
```
