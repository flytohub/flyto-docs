# Analysis

HTML analysis modules for readability, forms, tables, and metadata extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [ความสามารถอ่าน HTML](#ความสามารถอ่าน-html) | วิเคราะห์ความสามารถในการอ่านเนื้อหา |
| [ดึงฟอร์ม](#ดึงฟอร์ม) | ดึงข้อมูลฟอร์มจาก HTML |
| [ดึง Metadata](#ดึง-metadata) | ดึง metadata จาก HTML |
| [ดึงตาราง](#ดึงตาราง) | ดึงข้อมูลตารางจาก HTML |
| [ค้นหารูปแบบ](#ค้นหารูปแบบ) | ค้นหารูปแบบข้อมูลที่ซ้ำใน HTML |
| [โครงสร้าง HTML](#โครงสร้าง-html) | วิเคราะห์โครงสร้าง DOM ของ HTML |

## Modules

### ความสามารถอ่าน HTML

`analysis.html.analyze_readability`

วิเคราะห์ความสามารถในการอ่านเนื้อหา

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### ดึงฟอร์ม

`analysis.html.extract_forms`

ดึงข้อมูลฟอร์มจาก HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### ดึง Metadata

`analysis.html.extract_metadata`

ดึง metadata จาก HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### ดึงตาราง

`analysis.html.extract_tables`

ดึงข้อมูลตารางจาก HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### ค้นหารูปแบบ

`analysis.html.find_patterns`

ค้นหารูปแบบข้อมูลที่ซ้ำใน HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### โครงสร้าง HTML

`analysis.html.structure`

วิเคราะห์โครงสร้าง DOM ของ HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |
