# Sandbox

Execute JavaScript, Python, or shell commands in isolated environments.

**3 modules**

| Module | Description |
|--------|-------------|
| [Jalankan JavaScript](#jalankan-javascript) | Jalankan kode JavaScript melalui Node.js dengan batas waktu |
| [Jalankan Python](#jalankan-python) | Jalankan kode Python dalam subprocess dengan batas waktu |
| [Jalankan Shell](#jalankan-shell) | Jalankan perintah shell dengan batas waktu dan kontrol lingkungan |

## Modules

### Jalankan JavaScript

`sandbox.execute_js`

Jalankan kode JavaScript melalui Node.js dengan batas waktu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Kode JavaScript untuk dijalankan melalui Node.js |
| `timeout` | number | No | `10` | Batas waktu eksekusi dalam detik |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Output standar dari skrip |
| `stderr` | string | Error standar dari skrip |
| `exit_code` | number | Kode keluar proses (0 = sukses) |
| `execution_time_ms` | number | Waktu eksekusi dalam milidetik |

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

### Jalankan Python

`sandbox.execute_python`

Jalankan kode Python dalam subprocess dengan batas waktu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Kode Python untuk dijalankan |
| `timeout` | number | No | `10` | Batas waktu eksekusi dalam detik |
| `allowed_modules` | array | No | - | Daftar putih modul yang dapat diimpor (biarkan kosong untuk mengizinkan semua) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Output standar dari skrip |
| `stderr` | string | Error standar dari skrip |
| `exit_code` | number | Kode keluar proses (0 = sukses) |
| `execution_time_ms` | number | Waktu eksekusi dalam milidetik |

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

### Jalankan Shell

`sandbox.execute_shell`

Jalankan perintah shell dengan batas waktu dan kontrol lingkungan

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `command` | string | Yes | - | Perintah shell untuk dijalankan |
| `timeout` | number | No | `10` | Batas waktu eksekusi dalam detik |
| `working_dir` | string | No | - | Direktori kerja untuk perintah |
| `env` | object | No | - | Variabel lingkungan tambahan untuk diatur (digabungkan dengan lingkungan saat ini) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Output standar dari perintah |
| `stderr` | string | Error standar dari perintah |
| `exit_code` | number | Kode keluar proses (0 = sukses) |
| `execution_time_ms` | number | Waktu eksekusi dalam milidetik |

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
