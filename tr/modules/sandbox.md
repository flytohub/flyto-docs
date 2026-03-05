# Sandbox

Execute JavaScript, Python, or shell commands in isolated environments.

**3 modules**

| Module | Description |
|--------|-------------|
| [JavaScript Çalıştır](#javascript-çalıştır) | JavaScript kodunu Node.js aracılığıyla zaman aşımı ile çalıştır |
| [Python Çalıştır](#python-çalıştır) | Python kodunu bir alt süreçte zaman aşımı ile çalıştır |
| [Kabuk Komutu Çalıştır](#kabuk-komutu-çalıştır) | Zaman aşımı ve ortam kontrolü ile bir kabuk komutu çalıştır |

## Modules

### JavaScript Çalıştır

`sandbox.execute_js`

JavaScript kodunu Node.js aracılığıyla zaman aşımı ile çalıştır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Node.js aracılığıyla çalıştırılacak JavaScript kodu |
| `timeout` | number | No | `10` | Çalıştırma zaman aşımı süresi (saniye cinsinden) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Skriptten standart çıktı |
| `stderr` | string | Skriptten standart hata |
| `exit_code` | number | İşlem çıkış kodu (0 = başarı) |
| `execution_time_ms` | number | Çalıştırma süresi (milisaniye cinsinden) |

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

### Python Çalıştır

`sandbox.execute_python`

Python kodunu bir alt süreçte zaman aşımı ile çalıştır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Çalıştırılacak Python kodu |
| `timeout` | number | No | `10` | Çalıştırma zaman aşımı süresi (saniye cinsinden) |
| `allowed_modules` | array | No | - | İçe aktarılabilir modüllerin beyaz listesi (hepsine izin vermek için boş bırakın) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Skriptten standart çıktı |
| `stderr` | string | Skriptten standart hata |
| `exit_code` | number | İşlem çıkış kodu (0 = başarı) |
| `execution_time_ms` | number | Çalıştırma süresi (milisaniye cinsinden) |

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

### Kabuk Komutu Çalıştır

`sandbox.execute_shell`

Zaman aşımı ve ortam kontrolü ile bir kabuk komutu çalıştır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `command` | string | Yes | - | Çalıştırılacak kabuk komutu |
| `timeout` | number | No | `10` | Çalıştırma zaman aşımı süresi (saniye cinsinden) |
| `working_dir` | string | No | - | Komut için çalışma dizini |
| `env` | object | No | - | Ayarlanacak ek ortam değişkenleri (mevcut ortamla birleştirilir) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Komuttan standart çıktı |
| `stderr` | string | Komuttan standart hata |
| `exit_code` | number | İşlem çıkış kodu (0 = başarı) |
| `execution_time_ms` | number | Çalıştırma süresi (milisaniye cinsinden) |

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
