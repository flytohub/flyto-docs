# Environment

Environment variable management and .env file loading.

**3 modules**

| Module | Description |
|--------|-------------|
| [Ortam Değişkenini Al](#ortam-değişkenini-al) | Bir ortam değişkeninin değerini al |
| [.env Dosyasını Yükle](#.env-dosyasını-yükle) | .env dosyasından ortam değişkenlerini yükle |
| [Ortam Değişkenini Ayarla](#ortam-değişkenini-ayarla) | Geçerli işlemde bir ortam değişkeni ayarla |

## Modules

### Ortam Değişkenini Al

`env.get`

Bir ortam değişkeninin değerini al

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | Ortam değişkeninin adı |
| `default` | string | No | - | Değişken ayarlanmamışsa varsayılan değer |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Değişken adı |
| `value` | string | Değişken değeri (ayarlanmamışsa varsayılan) |
| `exists` | boolean | Değişken ortamda mevcut mu |

**Example:** Get HOME variable

```yaml
name: HOME
```

**Example:** Get variable with default

```yaml
name: MY_APP_PORT
default: 8080
```

### .env Dosyasını Yükle

`env.load_dotenv`

.env dosyasından ortam değişkenlerini yükle

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | `.env` | .env dosyasının yolu |
| `override` | boolean | No | `False` | Mevcut ortam değişkenlerini geçersiz kılmak isteyip istemediğiniz |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `loaded_count` | number | Yüklenen değişken sayısı |
| `variables` | array | Yüklenen değişken adlarının listesi |

**Example:** Load .env file

```yaml
path: .env
override: false
```

### Ortam Değişkenini Ayarla

`env.set`

Geçerli işlemde bir ortam değişkeni ayarla

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | Ayarlanacak ortam değişkeninin adı |
| `value` | string | Yes | - | Ortam değişkenine atanacak değer |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Değişken adı |
| `value` | string | Ayarlanan yeni değer |
| `previous_value` | string | Önceki değer (daha önce ayarlanmamışsa null) |

**Example:** Set an environment variable

```yaml
name: MY_APP_PORT
value: 3000
```
