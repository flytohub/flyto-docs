# Archive

Create and extract ZIP, TAR, and gzip archives.

**6 modules**

| Module | Description |
|--------|-------------|
| [Gunzip डीकंप्रेस](#gunzip-डीकंप्रेस) | gzip-संपीड़ित फ़ाइल को डीकंप्रेस करें |
| [Gzip संपीड़न](#gzip-संपीड़न) | एकल फ़ाइल को gzip से संपीड़ित करें |
| [TAR संग्रह बनाएं](#tar-संग्रह-बनाएं) | वैकल्पिक gzip/bz2/xz संपीड़न के साथ TAR संग्रह बनाएं |
| [TAR आर्काइव निकालें](#tar-आर्काइव-निकालें) | TAR आर्काइव से फाइलें निकालें (स्वतः संपीड़न पहचानता है) |
| [ZIP संग्रह बनाएं](#zip-संग्रह-बनाएं) | फ़ाइलों की सूची से ZIP संग्रह बनाएं |
| [ZIP संग्रह निकालें](#zip-संग्रह-निकालें) | ZIP संग्रह से फ़ाइलें निकालें |

## Modules

### Gunzip डीकंप्रेस

`archive.gunzip`

gzip-संपीड़ित फ़ाइल को डीकंप्रेस करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | gzip-संपीड़ित फ़ाइल का पथ |
| `output_path` | string | No | - | डीकंप्रेस्ड फ़ाइल के लिए पथ (डिफ़ॉल्ट इनपुट बिना .gz एक्सटेंशन के) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | डीकंप्रेस्ड फ़ाइल का पथ |
| `size` | number | डीकंप्रेस्ड फ़ाइल का आकार बाइट्स में |

**Example:** Decompress a gzip file

```yaml
input_path: /tmp/data.txt.gz
```

### Gzip संपीड़न

`archive.gzip`

एकल फ़ाइल को gzip से संपीड़ित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input_path` | string | Yes | - | संपीड़ित करने के लिए फ़ाइल का पथ |
| `output_path` | string | No | - | संपीड़ित फ़ाइल के लिए पथ (डिफ़ॉल्ट इनपुट पथ + .gz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | संपीड़ित फ़ाइल का पथ |
| `original_size` | number | मूल फ़ाइल का आकार बाइट्स में |
| `compressed_size` | number | संपीड़ित फ़ाइल का आकार बाइट्स में |
| `ratio` | number | संपीड़न अनुपात (संपीड़ित / मूल) |

**Example:** Compress a file with gzip

```yaml
input_path: /tmp/data.txt
```

### TAR संग्रह बनाएं

`archive.tar_create`

वैकल्पिक gzip/bz2/xz संपीड़न के साथ TAR संग्रह बनाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | आउटपुट TAR फ़ाइल के लिए पथ |
| `files` | array | Yes | - | संग्रह में शामिल करने के लिए फ़ाइल पथों की सूची |
| `compression` | select (`none`, `gzip`, `bz2`, `xz`) | No | `gzip` | संपीड़न विधि |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | बनी हुई TAR फ़ाइल का पथ |
| `size` | number | आर्काइव का आकार बाइट्स में |
| `file_count` | number | आर्काइव में फाइलों की संख्या |

**Example:** Create gzipped TAR archive

```yaml
output_path: /tmp/archive.tar.gz
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: gzip
```

### TAR आर्काइव निकालें

`archive.tar_extract`

TAR आर्काइव से फाइलें निकालें (स्वतः संपीड़न पहचानता है)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | निकालने के लिए TAR आर्काइव का पथ |
| `output_dir` | string | Yes | - | फाइलें निकालने के लिए डायरेक्टरी |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | निकाली गई फाइल पथों की सूची |
| `total_size` | number | निकाली गई फाइलों का कुल आकार बाइट्स में |

**Example:** Extract TAR.GZ archive

```yaml
archive_path: /tmp/archive.tar.gz
output_dir: /tmp/extracted/
```

### ZIP संग्रह बनाएं

`archive.zip_create`

फ़ाइलों की सूची से ZIP संग्रह बनाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | Yes | - | आउटपुट ZIP फ़ाइल के लिए पथ |
| `files` | array | Yes | - | संग्रह में शामिल करने के लिए फ़ाइल पथों की सूची |
| `compression` | select (`stored`, `deflated`, `bzip2`, `lzma`) | No | `deflated` | संपीड़न विधि |
| `password` | string | No | - | संग्रह को सुरक्षित करने के लिए वैकल्पिक पासवर्ड (केवल निष्कर्षण, सीमित समर्थन) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `path` | string | बनी हुई ZIP फ़ाइल का पथ |
| `size` | number | संग्रह का आकार बाइट्स में |
| `file_count` | number | संग्रह में फ़ाइलों की संख्या |

**Example:** Create ZIP from files

```yaml
output_path: /tmp/archive.zip
files: ["/tmp/file1.txt", "/tmp/file2.txt"]
compression: deflated
```

### ZIP संग्रह निकालें

`archive.zip_extract`

ZIP संग्रह से फ़ाइलें निकालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `archive_path` | string | Yes | - | निकालने के लिए ZIP संग्रह का पथ |
| `output_dir` | string | Yes | - | फ़ाइलों को निकालने के लिए निर्देशिका |
| `password` | string | No | - | एन्क्रिप्टेड संग्रहों के लिए पासवर्ड |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted_files` | array | निकाली गई फ़ाइल पथों की सूची |
| `total_size` | number | निकाली गई फ़ाइलों का कुल आकार बाइट्स में |

**Example:** Extract ZIP archive

```yaml
archive_path: /tmp/archive.zip
output_dir: /tmp/extracted/
```
