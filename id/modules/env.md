# Environment

Environment variable management and .env file loading.

**3 modules**

| Module | Description |
|--------|-------------|
| [Dapatkan Variabel Lingkungan](#dapatkan-variabel-lingkungan) | Dapatkan nilai dari variabel lingkungan |
| [Muat File .env](#muat-file-.env) | Muat variabel lingkungan dari file .env |
| [Tetapkan Variabel Lingkungan](#tetapkan-variabel-lingkungan) | Tetapkan variabel lingkungan dalam proses saat ini |

## Modules

### Dapatkan Variabel Lingkungan

`env.get`

Dapatkan nilai dari variabel lingkungan

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | Nama variabel lingkungan |
| `default` | string | No | - | Nilai default jika variabel tidak ditetapkan |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Nama variabel |
| `value` | string | Nilai variabel (atau default jika tidak ditetapkan) |
| `exists` | boolean | Apakah variabel ada di lingkungan |

**Example:** Get HOME variable

```yaml
name: HOME
```

**Example:** Get variable with default

```yaml
name: MY_APP_PORT
default: 8080
```

### Muat File .env

`env.load_dotenv`

Muat variabel lingkungan dari file .env

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | `.env` | Jalur ke file .env |
| `override` | boolean | No | `False` | Apakah akan menimpa variabel lingkungan yang ada |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `loaded_count` | number | Jumlah variabel yang dimuat |
| `variables` | array | Daftar nama variabel yang dimuat |

**Example:** Load .env file

```yaml
path: .env
override: false
```

### Tetapkan Variabel Lingkungan

`env.set`

Tetapkan variabel lingkungan dalam proses saat ini

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | Nama variabel lingkungan yang akan ditetapkan |
| `value` | string | Yes | - | Nilai untuk diberikan kepada variabel lingkungan |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Nama variabel |
| `value` | string | Nilai baru yang ditetapkan |
| `previous_value` | string | Nilai sebelumnya (null jika belum pernah ditetapkan) |

**Example:** Set an environment variable

```yaml
name: MY_APP_PORT
value: 3000
```
