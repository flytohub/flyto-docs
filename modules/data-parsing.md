# Data Parsing Modules

Data parsing modules handle conversion and parsing across various data formats.

## Modules

### data.parse_json

Parse a JSON string.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `content` | string | Yes | JSON string to parse |

### data.parse_csv

Parse CSV data.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `content` | string | Yes | CSV string to parse |
| `delimiter` | string | No | Column delimiter (default: `,`) |
| `headers` | boolean | No | First row is headers (default: `true`) |

### data.parse_xml

Parse XML data.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `content` | string | Yes | XML string to parse |

### data.parse_yaml

Parse YAML data.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `content` | string | Yes | YAML string to parse |

### data.to_json

Convert data to JSON string.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `data` | any | Yes | Data to serialize |
| `indent` | number | No | Indentation level |

### data.to_csv

Convert data to CSV string.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `data` | array | Yes | Array of objects |
| `delimiter` | string | No | Column delimiter (default: `,`) |
