# Encode / Decode

Base64, hex, URL, and HTML encoding and decoding.

**7 modules**

| Module | Description |
|--------|-------------|
| [Base64 डिकोड](#base64-डिकोड) | Base64 एन्कोडेड टेक्स्ट को डिकोड करें |
| [हेक्स डिकोड](#हेक्स-डिकोड) | हेक्साडेसिमल को टेक्स्ट में डिकोड करें |
| [URL डिकोड](#url-डिकोड) | URL एन्कोडेड टेक्स्ट को डिकोड करें |
| [Base64 एन्कोड](#base64-एन्कोड) | पाठ को Base64 में एन्कोड करें |
| [हेक्स एन्कोड](#हेक्स-एन्कोड) | पाठ को हेक्साडेसिमल में एन्कोड करें |
| [HTML एन्कोड](#html-एन्कोड) | पाठ को HTML एंटिटी में एन्कोड करें |
| [URL एन्कोड](#url-एन्कोड) | URL एन्कोड पाठ (प्रतिशत एन्कोडिंग) |

## Modules

### Base64 डिकोड

`decode.base64`

Base64 एन्कोडेड टेक्स्ट को डिकोड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | डिकोड करने के लिए Base64 एन्कोडेड टेक्स्ट |
| `encoding` | string | No | `utf-8` | डिकोड करने के लिए Base64 एन्कोडेड टेक्स्ट |
| `url_safe` | boolean | No | `False` | आउटपुट के लिए कैरेक्टर एन्कोडिंग |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | इनपुट URL-सुरक्षित Base64 है |
| `original` | string | डिकोड की गई स्ट्रिंग |
| `valid` | boolean | डिकोड की गई स्ट्रिंग |

### हेक्स डिकोड

`decode.hex`

हेक्साडेसिमल को टेक्स्ट में डिकोड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | डिकोड करने के लिए हेक्साडेसिमल टेक्स्ट |
| `encoding` | string | No | `utf-8` | डिकोड करने के लिए हेक्साडेसिमल टेक्स्ट |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | आउटपुट के लिए कैरेक्टर एन्कोडिंग |
| `original` | string | डिकोड की गई स्ट्रिंग |
| `valid` | boolean | डिकोड की गई स्ट्रिंग |

### URL डिकोड

`decode.url`

URL एन्कोडेड टेक्स्ट को डिकोड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | डिकोड करने के लिए URL एन्कोडेड टेक्स्ट |
| `plus_spaces` | boolean | No | `False` | डिकोड करने के लिए URL एन्कोडेड टेक्स्ट |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | + को स्पेस के रूप में ट्रीट करें (फॉर्म डिकोडिंग) |
| `original` | string | डिकोड की गई स्ट्रिंग |

### Base64 एन्कोड

`encode.base64`

पाठ को Base64 में एन्कोड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | एन्कोड करने के लिए पाठ |
| `encoding` | string | No | `utf-8` | एन्कोड करने के लिए पाठ |
| `url_safe` | boolean | No | `False` | वर्ण एन्कोडिंग |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | URL-सुरक्षित Base64 एन्कोडिंग का उपयोग करें |
| `original` | string | Base64 एन्कोड किया गया स्ट्रिंग |
| `length` | number | Base64 एन्कोड किया गया स्ट्रिंग |

### हेक्स एन्कोड

`encode.hex`

पाठ को हेक्साडेसिमल में एन्कोड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | पाठ को हेक्स में एन्कोड करने के लिए |
| `encoding` | string | No | `utf-8` | पाठ को हेक्स में एन्कोड करने के लिए |
| `uppercase` | boolean | No | `False` | वर्ण एन्कोडिंग |
| `separator` | string | No | - | बड़े अक्षरों में हेक्स अक्षरों का उपयोग करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | हेक्स बाइट्स के बीच विभाजक |
| `original` | string | हेक्स एन्कोड किया गया स्ट्रिंग |
| `byte_count` | number | हेक्स एन्कोड किया गया स्ट्रिंग |

### HTML एन्कोड

`encode.html`

पाठ को HTML एंटिटी में एन्कोड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | HTML एंटिटी के रूप में एन्कोड करने के लिए पाठ |
| `quote` | boolean | No | `True` | HTML एंटिटी के रूप में एन्कोड करने के लिए पाठ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | उद्धरण वर्णों को भी एन्कोड करें |
| `original` | string | HTML एन्कोड किया गया स्ट्रिंग |

### URL एन्कोड

`encode.url`

URL एन्कोड पाठ (प्रतिशत एन्कोडिंग)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | URL एन्कोड करने के लिए पाठ |
| `plus_spaces` | boolean | No | `False` | URL एन्कोड करने के लिए पाठ |
| `safe` | string | No | - | स्पेस के लिए %20 की बजाय + का उपयोग करें (फॉर्म एन्कोडिंग) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | वर्ण जो एन्कोड नहीं होने चाहिए |
| `original` | string | URL एन्कोड किया गया स्ट्रिंग |
