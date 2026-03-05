# Error Handling

Retry, fallback, and circuit breaker patterns.

**3 modules**

| Module | Description |
|--------|-------------|
| [Devre Kesici](#devre-kesici) | Devre kesici deseni ile zincirleme hataları önleyin |
| [Yedek](#yedek) | İşlem başarısız olduğunda yedek değer sağlayın |
| [Yeniden Dene](#yeniden-dene) | Yeniden deneme mantığıyla işlemleri sarın |

## Modules

### Devre Kesici

`error.circuit_breaker`

Devre kesici deseni ile zincirleme hataları önleyin

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | object | Yes | - | Devre kesici ile korunacak eylem |
| `circuit_id` | string | Yes | - | Devre kesici ile korunacak eylem |
| `failure_threshold` | number | No | `5` | Bu devre için benzersiz kimlik (durum takibi için) |
| `failure_window_ms` | number | No | `60000` | Hataları saymak için zaman penceresi |
| `recovery_timeout_ms` | number | No | `30000` | Kurtarma denemesi öncesi süre (yarı açık durum) |
| `success_threshold` | number | No | `3` | Devrenin kapanması için yarı açık durumda gereken başarılı istekler |
| `fallback` | object | No | - | Devre açıkken alternatif eylem |
| `fallback_value` | any | No | - | Devre açıkken alternatif eylem |
| `track_errors` | array | No | `[]` | Devre açıkken döndürülecek statik değer |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Yalnızca bu hata kodlarını eşik için say (boş = hepsi) |
| `result` | any | Yönlendirme için olay (başarı/devre açık/yedek) |
| `circuit_state` | string | Eylem veya yedek sonuç |
| `failure_count` | number | Devrenin mevcut durumu (kapalı/açık/yarı açık) |
| `last_failure_time` | string | Pencere içindeki mevcut hata sayısı |
| `circuit_opened_at` | string | Son hatanın zaman damgası |

**Example:** Example

```yaml
action: {"module": "http.post", "params": {"url": "https://api.example.com/submit"}}
circuit_id: example-api
failure_threshold: 5
failure_window_ms: 60000
recovery_timeout_ms: 30000
```

**Example:** Example

```yaml
action: {"module": "http.get", "params": {"url": "https://api.example.com/data"}}
circuit_id: data-api
failure_threshold: 3
fallback: {"module": "cache.get", "params": {"key": "data_cache"}}
```

**Example:** Example

```yaml
action: {"module": "database.query", "params": {"query": "SELECT * FROM users"}}
circuit_id: database
failure_threshold: 3
fallback_value: {"users": [], "from_cache": false}
```

### Yedek

`error.fallback`

İşlem başarısız olduğunda yedek değer sağlayın

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | No | - | Denenecek birincil işlem |
| `fallback_value` | any | No | - | Denenecek birincil işlem |
| `fallback_operation` | object | No | - | Başarısızlıkta döndürülecek statik değer |
| `fallback_on` | array | No | `[]` | Başarısızlıkta yürütülecek alternatif işlem |
| `include_error_info` | boolean | No | `True` | Yedeği tetikleyen hata kodları (boş = tüm hatalar) |
| `log_fallback` | boolean | No | `True` | Çıkışa orijinal hata bilgisini dahil et |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | any | Yedek kullanıldığında kaydedin |
| `used_fallback` | boolean | Birincil işlemden veya yedekten sonuç |
| `source` | string | Yedek kullanılıp kullanılmadığı |
| `original_error` | object | Sonucun kaynağı (birincil/yedek değer/yedek işlem) |

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/items"}}
fallback_value: []
```

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/config"}}
fallback_operation: {"module": "cache.get", "params": {"key": "config_cache"}}
```

**Example:** Example

```yaml
operation: {"module": "api.call", "params": {"endpoint": "/data"}}
fallback_value: {"status": "unavailable"}
fallback_on: ["NETWORK_ERROR", "TIMEOUT_ERROR"]
```

### Yeniden Dene

`error.retry`

Yeniden deneme mantığıyla işlemleri sarın

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `operation` | object | Yes | - | Yeniden denenecek işlem (modül ID ve parametreler) |
| `max_retries` | number | No | `3` | Yeniden denenecek işlem (modül ID ve parametreler) |
| `initial_delay_ms` | number | No | `1000` | Maksimum yeniden deneme sayısı |
| `max_delay_ms` | number | No | `30000` | İlk yeniden denemeden önceki başlangıç gecikmesi |
| `backoff_multiplier` | number | No | `2.0` | Üstel geri çekilme çarpanı (örneğin, 2 her denemede gecikmeyi iki katına çıkarır) |
| `jitter` | boolean | No | `True` | Kalabalık etkisini önlemek için gecikmeye rastgele oynama ekleyin |
| `retry_on` | array | No | `[]` | Kalabalık etkisini önlemek için gecikmeye rastgele oynama ekleyin |
| `timeout_per_attempt_ms` | number | No | `0` | Yeniden denenecek hata kodlarının listesi (boş = tümünü dene) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Her deneme için zaman aşımı (0 zaman aşımı yok) |
| `result` | any | Yönlendirme için olay (başarı/tükenmiş) |
| `attempts` | number | Yönlendirme için olay (başarı/tükenmiş) |
| `total_delay_ms` | number | Başarılı denemenin sonucu |
| `errors` | array | Yapılan deneme sayısı |

**Example:** Example

```yaml
operation: {"module": "http.get", "params": {"url": "https://api.example.com/data"}}
max_retries: 3
```

**Example:** Example

```yaml
operation: {"module": "database.query", "params": {"query": "SELECT * FROM users"}}
max_retries: 5
initial_delay_ms: 2000
backoff_multiplier: 2.0
jitter: true
```

**Example:** Example

```yaml
operation: {"module": "api.call", "params": {"endpoint": "/submit"}}
max_retries: 3
retry_on: ["NETWORK_ERROR", "TIMEOUT_ERROR", "SERVICE_UNAVAILABLE"]
```
