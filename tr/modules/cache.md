# Cache

In-memory key-value cache with TTL support.

**4 modules**

| Module | Description |
|--------|-------------|
| [Cache Clear](#cache-clear) | Tüm önbellek kayıtlarını temizle veya desene göre filtrele |
| [Cache Delete](#cache-delete) | Anahtara göre önbellek kaydını sil |
| [Cache Get](#cache-get) | Anahtara göre önbellekten bir değer al |
| [Cache Set](#cache-set) | Opsiyonel TTL ile önbelleğe bir değer ayarla |

## Modules

### Cache Clear

`cache.clear`

Tüm önbellek kayıtlarını temizle veya desene göre filtrele

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `pattern` | string | No | `*` | Anahtarları eşleştirmek için glob deseni (ör. "user:*", varsayılan "*" hepsini temizler) |
| `backend` | string | No | `memory` | Kullanılacak önbellek altyapısı |
| `redis_url` | string | No | `redis://localhost:6379` | Redis bağlantı URL'si |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `cleared_count` | number | Temizlenen önbellek kayıtlarının sayısı |
| `backend` | string | Kullanılan altyapı |

### Cache Delete

`cache.delete`

Anahtara göre önbellek kaydını sil

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | Silinecek önbellek anahtarı |
| `backend` | string | No | `memory` | Kullanılacak önbellek altyapısı |
| `redis_url` | string | No | `redis://localhost:6379` | Redis bağlantı URL'si |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | Önbellek anahtarı |
| `deleted` | boolean | Anahtar bulundu ve silindi mi |
| `backend` | string | Kullanılan altyapı |

### Cache Get

`cache.get`

Anahtara göre önbellekten bir değer al

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | Aranacak önbellek anahtarı |
| `backend` | string | No | `memory` | Kullanılacak önbellek altyapısı |
| `redis_url` | string | No | `redis://localhost:6379` | Redis bağlantı URL'si |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | Önbellek anahtarı |
| `value` | any | Önbellekteki değer (bulunamazsa null) |
| `hit` | boolean | Anahtar önbellekte bulundu mu |
| `backend` | string | Kullanılan altyapı |

### Cache Set

`cache.set`

Opsiyonel TTL ile önbelleğe bir değer ayarla

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | Değerin saklanacağı önbellek anahtarı |
| `value` | string | Yes | - | Önbelleğe alınacak değer (herhangi bir JSON-serializable değer) |
| `ttl` | number | No | `0` | Saniye cinsinden yaşam süresi (0 = süresiz) |
| `backend` | string | No | `memory` | Kullanılacak önbellek altyapısı |
| `redis_url` | string | No | `redis://localhost:6379` | Redis bağlantı URL'si |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | Önbellek anahtarı |
| `stored` | boolean | Değer başarıyla saklandı mı |
| `ttl` | number | Saniye cinsinden TTL (0 = süresiz) |
| `backend` | string | Kullanılan altyapı |
