# Queue

In-memory and Redis message queue operations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Öğe Kuyruktan Çıkar](#öğe-kuyruktan-çıkar) | Bir öğeyi kuyruktan çıkarın ve geri döndürün |
| [Öğe Kuyruğa Ekle](#öğe-kuyruğa-ekle) | Bir öğeyi bellek içi veya Redis kuyruğuna ekleyin |
| [Kuyruk Boyutu](#kuyruk-boyutu) | Bir kuyruğun mevcut boyutunu alın |

## Modules

### Öğe Kuyruktan Çıkar

`queue.dequeue`

Bir öğeyi kuyruktan çıkarın ve geri döndürün

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Öğeyi çıkaracağınız kuyruğun adı |
| `backend` | string | No | `memory` | Kullanılacak kuyruk arka planı |
| `redis_url` | string | No | `redis://localhost:6379` | Redis bağlantı URL'si |
| `timeout` | number | No | `0` | Zaman aşımı süresi saniye cinsinden (0 = engellemesiz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | any | Kuyruktan çıkarılan öğe (kuyruk boşsa null) |
| `queue_name` | string | Kuyruğun adı |
| `remaining` | number | Kuyrukta kalan öğeler |
| `empty` | boolean | Kuyruğun boş olup olmadığı |

### Öğe Kuyruğa Ekle

`queue.enqueue`

Bir öğeyi bellek içi veya Redis kuyruğuna ekleyin

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Öğeyi ekleyeceğiniz kuyruğun adı |
| `data` | string | Yes | - | Kuyruğa eklenecek veri (herhangi bir JSON-serializable değer) |
| `backend` | string | No | `memory` | Kullanılacak kuyruk arka planı |
| `redis_url` | string | No | `redis://localhost:6379` | Redis bağlantı URL'si |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | Kuyruğun adı |
| `position` | number | Öğenin kuyruktaki konumu |
| `queue_size` | number | Kuyruğa eklemeden sonra mevcut kuyruk boyutu |

### Kuyruk Boyutu

`queue.size`

Bir kuyruğun mevcut boyutunu alın

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Kontrol edilecek kuyruğun adı |
| `backend` | string | No | `memory` | Kullanılacak kuyruk arka planı |
| `redis_url` | string | No | `redis://localhost:6379` | Redis bağlantı URL'si |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | Kuyruğun adı |
| `size` | number | Kuyruktaki mevcut öğe sayısı |
