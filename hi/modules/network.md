# Network

Ping, port scan, traceroute, and WHOIS lookup.

**4 modules**

| Module | Description |
|--------|-------------|
| [पिंग](#पिंग) | कनेक्टिविटी की जांच करने और विलंबता मापने के लिए मेज़बान को पिंग करें |
| [पोर्ट स्कैन](#पोर्ट-स्कैन) | मेज़बान पर पोर्ट स्कैन करें यह जांचने के लिए कि कौन से खुले हैं |
| [ट्रेसरूट](#ट्रेसरूट) | गंतव्य मेज़बान तक पहुँचने के लिए पैकेट्स द्वारा लिया गया मार्ग ट्रेस करें |
| [WHOIS लुकअप](#whois-लुकअप) | पंजीकरण जानकारी प्राप्त करने के लिए डोमेन के लिए WHOIS लुकअप करें |

## Modules

### पिंग

`network.ping`

कनेक्टिविटी की जांच करने और विलंबता मापने के लिए मेज़बान को पिंग करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | पिंग करने के लिए होस्टनाम या IP पता |
| `count` | number | No | `4` | भेजने के लिए पिंग पैकेट्स की संख्या |
| `timeout` | number | No | `5` | प्रत्येक पैकेट के लिए सेकंड में समय सीमा |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | पिंग किया गया मेज़बान |
| `alive` | boolean | क्या मेज़बान ने प्रतिक्रिया दी |
| `packets_sent` | number | भेजे गए पैकेट्स की संख्या |
| `packets_received` | number | प्राप्त पैकेट्स की संख्या |
| `packet_loss_pct` | number | पैकेट हानि प्रतिशत |
| `latency_ms` | object | विलंबता सांख्यिकी मिलीसेकंड में (न्यूनतम, औसत, अधिकतम) |

**Example:** Ping a host

```yaml
host: google.com
count: 4
timeout: 5
```

### पोर्ट स्कैन

`network.port_scan`

मेज़बान पर पोर्ट स्कैन करें यह जांचने के लिए कि कौन से खुले हैं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | स्कैन करने के लिए होस्टनाम या IP पता |
| `ports` | string | No | - | स्कैन करने के लिए पोर्ट्स: अल्पविराम से अलग (80,443), रेंज (80-443), या सामान्य पोर्ट्स के लिए खाली छोड़ें |
| `timeout` | number | No | `1.0` | प्रति पोर्ट सेकंड में कनेक्शन समय सीमा |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | स्कैन किया गया मेज़बान |
| `open_ports` | array | खुले पोर्ट नंबरों की सूची |
| `closed_ports` | array | बंद पोर्ट नंबरों की सूची |
| `scan_time_ms` | number | कुल स्कैन समय मिलीसेकंड में |

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

### ट्रेसरूट

`network.traceroute`

गंतव्य मेज़बान तक पहुँचने के लिए पैकेट्स द्वारा लिया गया मार्ग ट्रेस करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | मार्ग ट्रेस करने के लिए होस्टनाम या IP पता |
| `max_hops` | number | No | `30` | ट्रेस करने के लिए अधिकतम हॉप्स की संख्या |
| `timeout` | number | No | `5` | प्रत्येक प्रोब के लिए सेकंड में समय सीमा |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | लक्ष्य मेज़बान |
| `hops` | array | मार्ग के साथ हॉप्स की सूची |
| `total_hops` | number | गंतव्य तक पहुँचने के लिए कुल हॉप्स की संख्या |

**Example:** Trace route to host

```yaml
host: google.com
max_hops: 30
```

### WHOIS लुकअप

`network.whois`

पंजीकरण जानकारी प्राप्त करने के लिए डोमेन के लिए WHOIS लुकअप करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | लुकअप के लिए डोमेन नाम |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `domain` | string | पूछा गया डोमेन |
| `registrar` | string | डोमेन रजिस्ट्रार |
| `creation_date` | string | डोमेन निर्माण तिथि |
| `expiration_date` | string | डोमेन समाप्ति तिथि |
| `name_servers` | array | नाम सर्वरों की सूची |
| `raw` | string | पूर्ण कच्चा WHOIS आउटपुट |

**Example:** WHOIS lookup

```yaml
domain: example.com
```
