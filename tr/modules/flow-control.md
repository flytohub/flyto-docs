# Flow Control

Branching, loops, parallelism, subflows, triggers, and error handling.

**24 modules**

| Module | Description |
|--------|-------------|
| [Grup İşlemi](#grup-i̇şlemi) | Öğeleri yapılandırılabilir boyutta gruplar halinde işleyin |
| [Dal](#dal) | İfade değerlendirmesine dayalı koşullu dallanma |
| [Kesme Noktası](#kesme-noktası) | İnsan onayı veya girişi için iş akışı yürütmesini duraklat |
| [Devre Kesici](#devre-kesici) | Kademeli hataları önlemek için devre kesici deseni |
| [Kapsayıcı](#kapsayıcı) | Karmaşık iş akışlarını düzenlemek için gömülü alt akış kapsayıcısı |
| [Gecikme](#gecikme) | Hızlı tekrarlanan çağrıları önlemek için yürütmeyi geciktir |
| [Bitiş](#bitiş) | Açık iş akışı bitiş düğümü |
| [Hata İşleyici](#hata-i̇şleyici) | Yukarı akış düğümlerinden gelen hataları yakalar ve işler |
| [Hata İş Akışı Tetikleyicisi](#hata-i̇ş-akışı-tetikleyicisi) | Hata iş akışları için giriş noktası - başka bir iş akışı başarısız olduğunda tetiklenir |
| [Her Biri İçin](#her-biri-i̇çin) | Bir liste üzerinde yinele ve her öğe için adımları yürüt |
| [Çatalla](#çatalla) | Yürütmeyi paralel dallara böl |
| [Git](#git) | Başka bir adıma koşulsuz atlama |
| [Invoke Workflow](#invoke-workflow) | Execute an external workflow file |
| [Birleştir](#birleştir) | Paralel dalların tamamlanmasını bekle |
| [Döngü](#döngü) | Çıktı port yönlendirmesi kullanarak adımları N kez tekrarla |
| [Birleştir](#birleştir) | Birden fazla girdiyi tek bir çıktıya birleştir |
| [Paralel](#paralel) | Farklı stratejilerle birden fazla görevi paralel olarak yürütün |
| [Hız Sınırı](#hız-sınırı) | Token bucket veya kayar pencere kullanarak yürütmeyi sınırla |
| [Yeniden Dene](#yeniden-dene) | Başarısız işlemleri yapılandırılabilir geri çekilme ile yeniden dene |
| [Başlangıç](#başlangıç) | Açık iş akışı başlangıç düğümü |
| [Alt Akış](#alt-akış) | Harici bir iş akışına başvur ve yürüt |
| [Anahtar](#anahtar) | Değer eşleşmesine dayalı çok yollu dallanma |
| [Sınırlama](#sınırlama) | Minimum aralıkla yürütme hızını sınırlayın |
| [Tetikleyici](#tetikleyici) | İş akışı giriş noktası - manuel, webhook, zamanlama veya olay |

## Modules

### Grup İşlemi

`flow.batch`

Öğeleri yapılandırılabilir boyutta gruplar halinde işleyin

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `batch_size` | number | Yes | `10` | Grup başına öğe sayısı |
| `delay_ms` | number | No | `0` | Gruplar arasında bekleme süresi (hız sınırlaması için) |
| `continue_on_error` | boolean | No | `False` | Bir hata oluşursa kalan grupları işlemeye devam et |
| `parallel_batches` | number | No | `1` | Bir hata oluşursa kalan grupları işlemeye devam et |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Paralel işlenecek grup sayısı (ardışık için 1) |
| `batch` | array | Yönlendirme için olay (grup/tamamlandı/hata) |
| `batch_index` | number | Yönlendirme için olay (grup/tamamlandı/hata) |
| `total_batches` | number | Mevcut grup öğeleri |
| `total_items` | number | Mevcut grup indeksi (0 tabanlı) |
| `is_last_batch` | boolean | Toplam grup sayısı |
| `progress` | object | Toplam öğe sayısı |

**Example:** Example

```yaml
items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
batch_size: 10
```

**Example:** Example

```yaml
items: ${input.records}
batch_size: 100
delay_ms: 1000
```

**Example:** Example

```yaml
items: ${input.data}
batch_size: 50
parallel_batches: 3
continue_on_error: true
```

### Dal

`flow.branch`

İfade değerlendirmesine dayalı koşullu dallanma

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | string | Yes | - | Expression to evaluate (supports ==, !=, >, <, >=, <=, contains) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Yönlendirme olayı (true/false/error) |
| `outputs` | object | Port bazında çıktı değerleri |
| `result` | boolean | Dal sonucu |
| `condition` | string | Koşul değeri |
| `resolved_condition` | string | Koşul değerlendirme sonucu |

**Example:** Example

```yaml
condition: ${search_step.count} > 0
```

**Example:** Example

```yaml
condition: ${api_call.status} == success
```

### Kesme Noktası

`flow.breakpoint`

İnsan onayı veya girişi için iş akışı yürütmesini duraklat

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | No | `Approval Required` | Title displayed to approvers |
| `description` | string | No | - | Optional description text |
| `timeout_seconds` | number | No | `0` | Maximum wait time (0 for no timeout) |
| `required_approvers` | array | Yes | - | Array of data items to process |
| `approval_mode` | select (`single`, `all`, `majority`, `first`) | No | `single` | How approvals are counted |
| `custom_fields` | array | Yes | - | Array of data items to process |
| `include_context` | boolean | No | `True` | Whether to include execution context |
| `auto_approve_condition` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Yönlendirme olayı (approved/rejected/timeout) |
| `breakpoint_id` | string | Kesme noktası kimliği |
| `status` | string | Durum |
| `approved_by` | array | Onaylayan |
| `rejected_by` | array | Reddeden |
| `custom_inputs` | object | Özel girdi değerleri |
| `comments` | array | İnceleme yorumları |
| `resolved_at` | string | Çözüm zamanı |
| `wait_duration_ms` | integer | Bekleme süresi (ms) |

**Example:** Example

```yaml
title: Approve data export
description: Please review and approve the data export
```

**Example:** Example

```yaml
title: Manager Approval Required
description: Large transaction requires manager approval
required_approvers: ["manager@example.com"]
timeout_seconds: 3600
```

**Example:** Example

```yaml
title: Adjustment Required
custom_fields: [{"name": "reason", "label": "Reason", "type": "text", "required": true}, {"name": "amount", "label": "Amount", "type": "number", "required": true}]
```

### Devre Kesici

`flow.circuit_breaker`

Kademeli hataları önlemek için devre kesici deseni

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `failure_threshold` | number | Yes | `5` | Devrenin açılmasından önceki hata sayısı |
| `reset_timeout_ms` | number | No | `60000` | Devrenin yarı açık duruma geçmesinden önceki süre (milisaniye) |
| `half_open_max` | number | No | `1` | Yarı açık durumda izin verilen maksimum istek |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Yönlendirme için etkinlik (izin verildi/reddedildi/yarı açık) |
| `state` | string | Devre durumu (kapalı/açık/yarı açık) |
| `failure_count` | number | Ardışık hata sayısı |
| `last_failure_time_ms` | number | Son hatanın zaman damgası (milisaniye) |
| `time_until_half_open_ms` | number | Devrenin yarı açık duruma geçmesine kadar geçen milisaniye |

**Example:** Example

```yaml
failure_threshold: 5
reset_timeout_ms: 60000
```

**Example:** Example

```yaml
failure_threshold: 2
reset_timeout_ms: 10000
half_open_max: 1
```

**Example:** Example

```yaml
failure_threshold: 20
reset_timeout_ms: 120000
half_open_max: 3
```

### Kapsayıcı

`flow.container`

Karmaşık iş akışlarını düzenlemek için gömülü alt akış kapsayıcısı

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `subflow` | object | No | `{'nodes': [], 'edges': []}` | Embedded workflow definition with nodes and edges |
| `inherit_context` | boolean | No | `True` | Whether to inherit variables from parent workflow |
| `isolated_variables` | array | Yes | - | Array of data items to process |
| `export_variables` | array | Yes | - | Array of data items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Yönlendirme olayı (success/error) |
| `outputs` | object | Port bazında çıktı değerleri |
| `subflow_result` | object | Alt akış sonucu |
| `exported_variables` | object | Dışa aktarılan değişkenler |
| `node_count` | integer | Düğüm sayısı |
| `execution_time_ms` | number | Yürütme süresi (ms) |

**Example:** Example

```yaml
subflow: {"nodes": [], "edges": []}
inherit_context: true
```

**Example:** Example

```yaml
subflow: {"nodes": [], "edges": []}
inherit_context: false
```

### Gecikme

`flow.debounce`

Hızlı tekrarlanan çağrıları önlemek için yürütmeyi geciktir

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `delay_ms` | number | Yes | - | Son çağrıdan sonra yürütme için bekleme süresi |
| `leading` | boolean | No | `False` | Öncü kenarda yürüt (ilk çağrı hemen tetikler) |
| `trailing` | boolean | No | `True` | Ardıl kenarda yürüt (gecikme süresi dolduktan sonra) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Yönlendirme için etkinlik (yürütüldü/geciktirildi) |
| `last_call_ms` | number | Son çağrının zaman damgası (milisaniye) |
| `calls_debounced` | number | Son yürütmeden bu yana geciktirilen çağrı sayısı |
| `time_since_last_ms` | number | Son çağrıdan bu yana geçen süre (milisaniye) |
| `edge` | string | Hangi kenarın yürütmeyi tetiklediği (öncü/ardıl) |

**Example:** Example

```yaml
delay_ms: 500
```

**Example:** Example

```yaml
delay_ms: 1000
leading: true
trailing: false
```

**Example:** Example

```yaml
delay_ms: 2000
leading: true
trailing: true
```

### Bitiş

`flow.end`

Açık iş akışı bitiş düğümü

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `success_message` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Yönlendirme olayı (__end__) |
| `ended_at` | string | Bitiş zamanı |
| `workflow_result` | object | İş akışı sonucu |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
output_mapping: {"result": "${process.output}", "status": "success"}
```

### Hata İşleyici

`flow.error_handle`

Yukarı akış düğümlerinden gelen hataları yakalar ve işler

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | `log_and_continue` | Hata ile ne yapılacağı |
| `include_traceback` | boolean | No | `True` | Çıkışa tam yığın izini dahil et |
| `error_code_mapping` | object | No | `{}` | Çıkışa tam yığın izini dahil et |
| `fallback_value` | any | No | - | Hata kodlarını özel eylemlerle eşle |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Hata bastırıldığında kullanılacak değer |
| `outputs` | object | Yönlendirme için olay (işlendi/yükselt) |
| `error_info` | object | Yönlendirme için olay (işlendi/yükselt) |
| `action_taken` | string | Alınan eylem |

**Example:** Example

```yaml
action: log_and_continue
include_traceback: true
```

**Example:** Example

```yaml
action: suppress
fallback_value: {"status": "skipped", "reason": "upstream_error"}
```

**Example:** Example

```yaml
action: transform
error_code_mapping: {"TIMEOUT": {"retry": true, "delay": 5000}, "NOT_FOUND": {"skip": true}}
```

### Hata İş Akışı Tetikleyicisi

`flow.error_workflow_trigger`

Hata iş akışları için giriş noktası - başka bir iş akışı başarısız olduğunda tetiklenir

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `description` | string | No | - | Description of this error workflow |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Bu hata iş akışının açıklaması |
| `error_context` | object | Yönlendirme için olay (tetiklendi) |
| `triggered_at` | string | Hata iş akışının tetiklendiği ISO zaman damgası |

**Example:** Example

```yaml
description: Send Slack notification on workflow failure
```

**Example:** Example

```yaml
description: Log all workflow errors to monitoring system
```

### Her Biri İçin

`flow.foreach`

Bir liste üzerinde yinele ve her öğe için adımları yürüt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | string | Yes | - | Üzerinde yinelenecek öğeler listesi (${variable} referansı destekler) |
| `steps` | array | No | - | Her öğe için yürütülecek adımlar |
| `item_var` | string | No | `item` | Geçerli öğe için değişken adı |
| `index_var` | string | No | `index` | Geçerli indeks için değişken adı |
| `output_mode` | string | No | `collect` | Sonuç toplama modu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Yönlendirme olayı (iterate/done) |
| `__set_context` | object | Bağlam ayarla |
| `outputs` | object | Port bazında çıktı değerleri |
| `iteration` | number | Geçerli yineleme indeksi |
| `status` | string | İşlem durumu |
| `results` | array | Toplanan sonuçlar |
| `count` | number | Toplam öğe sayısı |

**Example:** Example

```yaml
items: ${steps.csv.result.data}
```

**Example:** Example

```yaml
items: ${search_results}
item_var: element
steps: [{"module": "element.text", "params": {"element_id": "${element}"}, "output": "text"}]
```

### Çatalla

`flow.fork`

Yürütmeyi paralel dallara böl

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `branch_count` | number | No | `2` | Number of parallel branches |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Yönlendirme olayı (fork/error) |
| `input_data` | any | Girdi verileri |
| `branch_count` | integer | Dal sayısı |

**Example:** Example

```yaml
branch_count: 2
```

**Example:** Example

```yaml
branch_count: 3
```

### Git

`flow.goto`

Başka bir adıma koşulsuz atlama

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `target` | string | Yes | - | Step ID to jump to |
| `max_iterations` | number | No | `100` | Maximum number of iterations (prevents infinite loops) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Yönlendirme olayı (goto) |
| `target` | string | Hedef adım |
| `iteration` | number | Yineleme sayısı |

**Example:** Example

```yaml
target: fetch_next_page
max_iterations: 10
```

**Example:** Example

```yaml
target: cleanup_step
```

### Invoke Workflow

`flow.invoke`

Execute an external workflow file

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `workflow_source` | string | Yes | - | File path to workflow YAML or inline YAML content |
| `workflow_params` | object | Yes | - | Parameters to pass to the invoked workflow |
| `timeout_seconds` | number | No | `300` | Maximum execution time in seconds |
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Parameters to pass to the invoked workflow |
| `result` | any | Maximum execution time in seconds |
| `workflow_id` | string | Event for routing (success/error) |
| `execution_time_ms` | number | Workflow execution result |

**Example:** Example

```yaml
workflow_source: workflows/validate_order.yaml
workflow_params: {"order_id": "${input.order_id}"}
timeout_seconds: 60
```

**Example:** Example

```yaml
workflow_source: workflows/process_data.yaml
workflow_params: {"data": "${input.data}"}
output_mapping: {"processed": "result.data"}
```

### Birleştir

`flow.join`

Paralel dalların tamamlanmasını bekle

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`all`, `any`, `first`) | No | `all` | How to handle multiple inputs |
| `input_count` | number | No | `2` | Number of ports |
| `timeout` | number | No | `60000` | Maximum time to wait in milliseconds |
| `cancel_pending` | boolean | No | `True` | Cancel pending branches when using first strategy |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Yönlendirme olayı (joined/timeout/error) |
| `joined_data` | array | Birleştirilmiş veriler |
| `completed_count` | integer | Tamamlanan dal sayısı |
| `strategy` | string | Birleştirme stratejisi |

**Example:** Example

```yaml
strategy: all
input_count: 2
timeout_ms: 30000
```

**Example:** Example

```yaml
strategy: first
input_count: 3
cancel_pending: true
```

### Döngü

`flow.loop`

Çıktı port yönlendirmesi kullanarak adımları N kez tekrarla

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `times` | number | Yes | `1` | Tekrar sayısı |
| `target` | string | No | - | Hedef adım (kullanımdan kaldırıldı) |
| `steps` | array | No | - | Her yineleme için yürütülecek adımlar |
| `index_var` | string | No | `index` | Geçerli indeks için değişken adı |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Yönlendirme olayı (iterate/done) |
| `outputs` | object | Port bazında çıktı değerleri |
| `iteration` | number | Geçerli yineleme |
| `status` | string | İşlem durumu |
| `results` | array | Toplanan sonuçlar |
| `count` | number | Toplam yineleme |

**Example:** Example

```yaml
times: 3
```

**Example:** Example

```yaml
times: 5
steps: [{"module": "browser.click", "params": {"selector": ".next"}}]
```

### Birleştir

`flow.merge`

Birden fazla girdiyi tek bir çıktıya birleştir

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`first`, `last`, `all`) | No | `all` | How to merge multiple inputs |
| `input_count` | number | No | `2` | Number of ports |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Yönlendirme olayı (merged/error) |
| `merged_data` | any | Birleştirilmiş veriler |
| `input_count` | integer | Girdi sayısı |
| `strategy` | string | Birleştirme stratejisi |

**Example:** Example

```yaml
strategy: all
input_count: 3
```

**Example:** Example

```yaml
strategy: first
input_count: 2
```

### Paralel

`flow.parallel`

Farklı stratejilerle birden fazla görevi paralel olarak yürütün

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tasks` | array | Yes | - | Paralel olarak yürütülecek görev tanımlarının dizisi |
| `mode` | string | No | `all` | Paralel olarak yürütülecek görev tanımlarının dizisi |
| `timeout_ms` | number | No | `60000` | Maximum wait time in milliseconds |
| `fail_fast` | boolean | No | `True` | İlk hatada tüm görevleri durdur (sadece mode=all için) |
| `concurrency_limit` | number | No | `0` | İlk hatada tüm görevleri durdur (sadece mode=all için) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Maksimum eşzamanlı görev sayısı (sınırsız için 0) |
| `results` | array | Yönlendirme için olay (tamamlandı/kısmi/hata) |
| `completed_count` | number | Yönlendirme için olay (tamamlandı/kısmi/hata) |
| `failed_count` | number | Tüm görevlerin sonuçları |
| `total_count` | number | Başarıyla tamamlanan görev sayısı |
| `mode` | string | Başarısız görev sayısı |
| `duration_ms` | number | Toplam görev sayısı |

**Example:** Example

```yaml
tasks: [{"module": "http.get", "params": {"url": "https://api1.example.com"}}, {"module": "http.get", "params": {"url": "https://api2.example.com"}}]
mode: all
timeout_ms: 30000
```

**Example:** Example

```yaml
tasks: [{"module": "http.get", "params": {"url": "https://mirror1.example.com"}}, {"module": "http.get", "params": {"url": "https://mirror2.example.com"}}]
mode: race
```

**Example:** Example

```yaml
tasks: [{"module": "http.get", "params": {"url": "https://api1.example.com"}}, {"module": "http.get", "params": {"url": "https://might-fail.example.com"}}]
mode: settle
```

### Hız Sınırı

`flow.rate_limit`

Token bucket veya kayar pencere kullanarak yürütmeyi sınırla

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_requests` | number | Yes | - | Pencere başına izin verilen maksimum istek sayısı |
| `window_ms` | number | No | `60000` | Zaman penceresi (milisaniye) |
| `strategy` | string | No | `token_bucket` | Hız sınırlama stratejisi (token_bucket veya kayar_pencere) |
| `queue_overflow` | string | No | `wait` | Kuyruk dolduğunda davranış (bırak veya hata) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Yönlendirme için etkinlik (izin verildi/sınırlı) |
| `tokens_remaining` | number | Kovadaki kalan jetonlar |
| `window_reset_ms` | number | Pencerenin sıfırlanmasına kadar geçen milisaniye |
| `requests_in_window` | number | Mevcut penceredeki istek sayısı |
| `wait_ms` | number | Bir sonraki izin verilen istek için bekleme süresi (milisaniye) |

**Example:** Example

```yaml
max_requests: 100
window_ms: 60000
strategy: token_bucket
```

**Example:** Example

```yaml
max_requests: 10
window_ms: 1000
strategy: fixed_window
queue_overflow: error
```

**Example:** Example

```yaml
max_requests: 50
window_ms: 30000
strategy: sliding_window
queue_overflow: wait
```

### Yeniden Dene

`flow.retry`

Başarısız işlemleri yapılandırılabilir geri çekilme ile yeniden dene

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_retries` | number | Yes | `3` | Maksimum yeniden deneme deneme sayısı |
| `initial_delay_ms` | number | No | `1000` | İlk yeniden deneme öncesi başlangıç gecikmesi (milisaniye) |
| `backoff_multiplier` | number | No | `2.0` | Üstel geri çekilme için çarpan |
| `max_delay_ms` | number | No | `30000` | Yeniden denemeler arasındaki maksimum gecikme (milisaniye) |
| `retry_on_errors` | array | No | `[]` | Yeniden denenecek hata türleri (boşsa hepsi yeniden denenir) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Yönlendirme için olay (yeniden dene/başarılı/başarısız) |
| `attempt` | number | Mevcut deneme numarası |
| `max_retries` | number | Yapılandırılmış maksimum yeniden deneme sayısı |
| `delay_ms` | number | Sonraki yeniden deneme öncesi gecikme (milisaniye) |
| `total_elapsed_ms` | number | Toplam geçen süre (milisaniye) |
| `last_error` | object | Son hata mesajı |

**Example:** Example

```yaml
max_retries: 3
```

**Example:** Example

```yaml
max_retries: 10
initial_delay_ms: 500
backoff_multiplier: 1.5
max_delay_ms: 10000
```

**Example:** Example

```yaml
max_retries: 5
initial_delay_ms: 2000
retry_on_errors: ["TIMEOUT", "RATE_LIMIT", "429", "503"]
```

### Başlangıç

`flow.start`

Açık iş akışı başlangıç düğümü

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Yönlendirme olayı (start) |
| `started_at` | string | Başlangıç zamanı |
| `workflow_id` | string | İş akışı kimliği |

**Example:** Example

```yaml
```

### Alt Akış

`flow.subflow`

Harici bir iş akışına başvur ve yürüt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `workflow_ref` | string | Yes | - | Text content to process |
| `execution_mode` | select (`inline`, `spawn`, `async`) | No | `inline` | Select an option |
| `input_mapping` | object | Yes | - | Data object to process |
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `timeout` | number | No | `300000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Yönlendirme olayı (success/error) |
| `result` | any | Yürütme sonucu |
| `execution_id` | string | Yürütme kimliği |
| `workflow_ref` | string | İş akışı referansı |

**Example:** Example

```yaml
workflow_ref: workflows/validate_order
execution_mode: inline
input_mapping: {"order_data": "${input.order}"}
output_mapping: {"validation_result": "result"}
```

**Example:** Example

```yaml
workflow_ref: workflows/send_notifications
execution_mode: spawn
```

### Anahtar

`flow.switch`

Değer eşleşmesine dayalı çok yollu dallanma

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Value to match against cases (supports variable reference) |
| `cases` | array | Yes | `[{'id': 'case_1', 'value': 'case1', 'label': 'Case 1'}]` | List of case definitions |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Yönlendirme olayı (case:value veya default) |
| `outputs` | object | Port bazında çıktı değerleri |
| `matched_case` | string | Eşleşen durum |
| `value` | any | Eşleşen değer |

**Example:** Example

```yaml
expression: ${api_response.status}
cases: [{"id": "case-1", "value": "success", "label": "Success"}, {"id": "case-2", "value": "pending", "label": "Pending"}, {"id": "case-3", "value": "error", "label": "Error"}]
```

**Example:** Example

```yaml
expression: ${input.type}
cases: [{"id": "img", "value": "image", "label": "Image"}, {"id": "vid", "value": "video", "label": "Video"}, {"id": "txt", "value": "text", "label": "Text"}]
```

### Sınırlama

`flow.throttle`

Minimum aralıkla yürütme hızını sınırlayın

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `interval_ms` | number | Yes | - | Yürütmeler arasındaki minimum süre (milisaniye) |
| `leading` | boolean | No | `True` | Öncü kenarda yürüt (ilk çağrı hemen geçer) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Yönlendirme için olay (yürütüldü/sınırlı) |
| `last_execution_ms` | number | Son izin verilen yürütmenin zaman damgası |
| `calls_throttled` | number | Son yürütmeden bu yana sınırlanan çağrı sayısı |
| `time_since_last_ms` | number | Son yürütmeden bu yana geçen süre (milisaniye) |
| `remaining_ms` | number | Bir sonraki yürütmeye izin verilene kadar kalan milisaniye |

**Example:** Example

```yaml
interval_ms: 1000
```

**Example:** Example

```yaml
interval_ms: 200
leading: true
```

**Example:** Example

```yaml
interval_ms: 5000
leading: false
```

### Tetikleyici

`flow.trigger`

İş akışı giriş noktası - manuel, webhook, zamanlama veya olay

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `trigger_type` | select (`manual`, `webhook`, `schedule`, `event`, `mcp`, `polling`) | No | `manual` | Type of trigger event |
| `webhook_path` | string | No | - | URL path for webhook trigger |
| `schedule` | string | No | - | Cron expression for scheduled trigger |
| `event_name` | string | No | - | Event name to listen for |
| `tool_name` | string | No | - | MCP tool name exposed to AI agents |
| `tool_description` | string | No | - | Description shown to AI agents for this tool |
| `poll_url` | string | No | - | API endpoint to poll for changes |
| `poll_interval` | number | No | `300` | How often to check for changes (minimum 60 seconds) |
| `poll_method` | select (`GET`, `POST`) | No | `GET` | HTTP method for polling request |
| `poll_headers` | object | No | `{}` | Custom headers for polling request (e.g. API keys) |
| `poll_body` | object | No | `{}` | Request body for POST polling |
| `dedup_key` | string | No | - | JSON path to extract a unique value for deduplication |
| `config` | object | No | - | Custom trigger config (for composites: LINE BOT, Telegram, Slack, etc.) |
| `description` | string | No | - | Optional description text |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Yönlendirme olayı (triggered/error) |
| `trigger_data` | object | Tetikleyici verileri |
| `trigger_type` | string | Tetikleyici türü |
| `triggered_at` | string | Tetiklenme zamanı |

**Example:** Example

```yaml
trigger_type: manual
```

**Example:** Example

```yaml
trigger_type: webhook
webhook_path: /api/webhooks/order-created
```

**Example:** Example

```yaml
trigger_type: schedule
schedule: 0 * * * *
```

**Example:** Example

```yaml
trigger_type: mcp
tool_name: send-report
tool_description: Send a weekly summary report
```

**Example:** Example

```yaml
trigger_type: polling
poll_url: https://api.example.com/items
poll_interval: 300
dedup_key: $.data[0].id
```
