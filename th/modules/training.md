# Training



**4 modules**

| Module | Description |
|--------|-------------|
| [ฝึกวิเคราะห์](#ฝึกวิเคราะห์) | วิเคราะห์โครงสร้างเว็บไซต์สำหรับการฝึก |
| [ฝึกดำเนินการ](#ฝึกดำเนินการ) | ดำเนินการเซสชันฝึก |
| [ฝึกอนุมานสคีมา](#ฝึกอนุมานสคีมา) | อนุมานสคีมาข้อมูลจากเว็บไซต์ |
| [สถิติการฝึก](#สถิติการฝึก) | รับสถิติการฝึก |

## Modules

### ฝึกวิเคราะห์

`training.practice.analyze`

วิเคราะห์โครงสร้างเว็บไซต์สำหรับการฝึก

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | วิเคราะห์โครงสร้างเว็บไซต์ |
| `structure` | object | วิเคราะห์โครงสร้างเว็บไซต์ |

### ฝึกดำเนินการ

`training.practice.execute`

ดำเนินการเซสชันฝึก

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `max_items` | number | No | `10` | Maximum items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ดำเนินการเซสชันฝึก |
| `items_processed` | number | ดำเนินการเซสชันฝึก |

### ฝึกอนุมานสคีมา

`training.practice.infer_schema`

อนุมานสคีมาข้อมูลจากเว็บไซต์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | Target URL |
| `sample_size` | number | No | `5` | Number of samples to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | อนุมานสคีมาข้อมูล |
| `schema` | object | อนุมานสคีมาข้อมูล |

### สถิติการฝึก

`training.practice.stats`

รับสถิติการฝึก

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `total_sessions` | number | เซสชันทั้งหมด |
| `successful_sessions` | number | เซสชันทั้งหมด |
| `success_rate` | number | รับสถิติการฝึก |
| `history` | array | รับสถิติการฝึก |
