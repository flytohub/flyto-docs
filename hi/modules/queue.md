# Queue

In-memory and Redis message queue operations.

**3 modules**

| Module | Description |
|--------|-------------|
| [आइटम हटाएं](#आइटम-हटाएं) | कतार से एक आइटम हटाएं और लौटाएं |
| [आइटम जोड़ें](#आइटम-जोड़ें) | एक आइटम को इन-मेमोरी या Redis कतार में जोड़ें |
| [कतार का आकार](#कतार-का-आकार) | कतार का वर्तमान आकार प्राप्त करें |

## Modules

### आइटम हटाएं

`queue.dequeue`

कतार से एक आइटम हटाएं और लौटाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | जिस कतार से आइटम हटाना है उसका नाम |
| `backend` | string | No | `memory` | उपयोग करने के लिए कतार बैकएंड |
| `redis_url` | string | No | `redis://localhost:6379` | Redis कनेक्शन URL |
| `timeout` | number | No | `0` | सेकंड में समय सीमा (0 = गैर-ब्लॉकिंग) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | any | हटाया गया आइटम (यदि कतार खाली है तो null) |
| `queue_name` | string | कतार का नाम |
| `remaining` | number | कतार में शेष आइटम |
| `empty` | boolean | क्या कतार खाली थी |

### आइटम जोड़ें

`queue.enqueue`

एक आइटम को इन-मेमोरी या Redis कतार में जोड़ें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | जिस कतार में आइटम जोड़ना है उसका नाम |
| `data` | string | Yes | - | जोड़ने के लिए डेटा (कोई भी JSON-सीरीयलाइज़ेबल मान) |
| `backend` | string | No | `memory` | उपयोग करने के लिए कतार बैकएंड |
| `redis_url` | string | No | `redis://localhost:6379` | Redis कनेक्शन URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | कतार का नाम |
| `position` | number | कतार में आइटम की स्थिति |
| `queue_size` | number | जोड़ने के बाद कतार का वर्तमान आकार |

### कतार का आकार

`queue.size`

कतार का वर्तमान आकार प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | जिस कतार का आकार जांचना है उसका नाम |
| `backend` | string | No | `memory` | उपयोग करने के लिए कतार बैकएंड |
| `redis_url` | string | No | `redis://localhost:6379` | Redis कनेक्शन URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | कतार का नाम |
| `size` | number | कतार में वर्तमान आइटम की संख्या |
