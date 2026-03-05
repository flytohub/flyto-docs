# Flow Control

Branching, loops, parallelism, subflows, triggers, and error handling.

**24 modules**

| Module | Description |
|--------|-------------|
| [Proses Batch](#proses-batch) | Proses item dalam batch dengan ukuran yang dapat dikonfigurasi |
| [Cabang](#cabang) | Percabangan bersyarat berdasarkan evaluasi ekspresi |
| [Breakpoint](#breakpoint) | Jeda eksekusi workflow untuk persetujuan atau input manusia |
| [Pemutus Sirkuit](#pemutus-sirkuit) | Pola pemutus sirkuit untuk mencegah kegagalan berantai |
| [Container](#container) | Container subflow tertanam untuk mengorganisir workflow kompleks |
| [Debounce](#debounce) | Menunda eksekusi untuk mencegah panggilan berulang cepat |
| [Akhir](#akhir) | Node akhir workflow eksplisit |
| [Penanganan Error](#penanganan-error) | Menangkap dan menangani error dari node hulu |
| [Pemicu Alur Kerja Error](#pemicu-alur-kerja-error) | Titik masuk untuk alur kerja error - dipicu saat alur kerja lain gagal |
| [Untuk Setiap](#untuk-setiap) | Iterasi daftar dan eksekusi langkah untuk setiap item |
| [Fork](#fork) | Pisahkan eksekusi ke cabang paralel |
| [Pergi Ke](#pergi-ke) | Lompat tanpa syarat ke langkah lain |
| [Panggil Alur Kerja](#panggil-alur-kerja) | Jalankan file alur kerja eksternal |
| [Gabung](#gabung) | Tunggu cabang paralel selesai |
| [Loop](#loop) | Ulangi langkah N kali menggunakan routing port output |
| [Gabung](#gabung) | Gabungkan beberapa input menjadi satu output |
| [Paralel](#paralel) | Eksekusi beberapa tugas secara paralel dengan strategi berbeda |
| [Batas Laju](#batas-laju) | Batas laju eksekusi menggunakan token bucket atau jendela geser |
| [Coba Ulang](#coba-ulang) | Coba ulang operasi yang gagal dengan jeda yang dapat diatur |
| [Mulai](#mulai) | Node awal workflow eksplisit |
| [Subflow](#subflow) | Referensi dan eksekusi workflow eksternal |
| [Saklar](#saklar) | Percabangan multi-arah berdasarkan pencocokan nilai |
| [Batasi](#batasi) | Batasi laju eksekusi dengan interval minimum |
| [Pemicu](#pemicu) | Titik masuk workflow - manual, webhook, jadwal, atau event |

## Modules

### Proses Batch

`flow.batch`

Proses item dalam batch dengan ukuran yang dapat dikonfigurasi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `batch_size` | number | Yes | `10` | Jumlah item per batch |
| `delay_ms` | number | No | `0` | Milidetik untuk menunggu antar batch (untuk pembatasan laju) |
| `continue_on_error` | boolean | No | `False` | Lanjutkan memproses batch yang tersisa jika ada yang gagal |
| `parallel_batches` | number | No | `1` | Lanjutkan memproses batch yang tersisa jika ada yang gagal |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Jumlah batch yang diproses secara paralel (1 untuk berurutan) |
| `batch` | array | Event untuk pengaturan rute (batch/selesai/error) |
| `batch_index` | number | Event untuk pengaturan rute (batch/selesai/error) |
| `total_batches` | number | Item batch saat ini |
| `total_items` | number | Indeks batch saat ini (berbasis 0) |
| `is_last_batch` | boolean | Jumlah total batch |
| `progress` | object | Jumlah total item |

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

### Cabang

`flow.branch`

Percabangan bersyarat berdasarkan evaluasi ekspresi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | string | Yes | - | Expression to evaluate (supports ==, !=, >, <, >=, <=, contains) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event routing (true/false/error) |
| `outputs` | object | Nilai output berdasarkan port |
| `result` | boolean | Hasil cabang |
| `condition` | string | Nilai kondisi |
| `resolved_condition` | string | Hasil evaluasi kondisi |

**Example:** Example

```yaml
condition: ${search_step.count} > 0
```

**Example:** Example

```yaml
condition: ${api_call.status} == success
```

### Breakpoint

`flow.breakpoint`

Jeda eksekusi workflow untuk persetujuan atau input manusia

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
| `__event__` | string | Event routing (approved/rejected/timeout) |
| `breakpoint_id` | string | ID Breakpoint |
| `status` | string | Status |
| `approved_by` | array | Disetujui oleh |
| `rejected_by` | array | Ditolak oleh |
| `custom_inputs` | object | Nilai input kustom |
| `comments` | array | Komentar tinjauan |
| `resolved_at` | string | Waktu resolusi |
| `wait_duration_ms` | integer | Durasi tunggu (ms) |

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

### Pemutus Sirkuit

`flow.circuit_breaker`

Pola pemutus sirkuit untuk mencegah kegagalan berantai

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `failure_threshold` | number | Yes | `5` | Jumlah kegagalan sebelum membuka sirkuit |
| `reset_timeout_ms` | number | No | `60000` | Waktu dalam milidetik sebelum sirkuit beralih ke setengah terbuka |
| `half_open_max` | number | No | `1` | Permintaan maksimum yang diizinkan dalam status setengah terbuka |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Acara untuk pengalihan (diizinkan/ditolak/setengah terbuka) |
| `state` | string | Status sirkuit (tertutup/terbuka/setengah terbuka) |
| `failure_count` | number | Jumlah kegagalan berturut-turut |
| `last_failure_time_ms` | number | Stempel waktu kegagalan terakhir dalam milidetik |
| `time_until_half_open_ms` | number | Milidetik hingga sirkuit beralih ke setengah terbuka |

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

### Container

`flow.container`

Container subflow tertanam untuk mengorganisir workflow kompleks

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
| `__event__` | string | Event routing (success/error) |
| `outputs` | object | Nilai output berdasarkan port |
| `subflow_result` | object | Hasil subflow |
| `exported_variables` | object | Variabel yang diekspor |
| `node_count` | integer | Jumlah node |
| `execution_time_ms` | number | Waktu eksekusi (ms) |

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

### Debounce

`flow.debounce`

Menunda eksekusi untuk mencegah panggilan berulang cepat

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `delay_ms` | number | Yes | - | Waktu tunggu setelah panggilan terakhir sebelum eksekusi |
| `leading` | boolean | No | `False` | Eksekusi pada tepi awal (panggilan pertama memicu segera) |
| `trailing` | boolean | No | `True` | Eksekusi pada tepi akhir (setelah penundaan berakhir) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Acara untuk pengalihan (dieksekusi/didebounce) |
| `last_call_ms` | number | Stempel waktu panggilan terakhir dalam milidetik |
| `calls_debounced` | number | Jumlah panggilan yang didebounce sejak eksekusi terakhir |
| `time_since_last_ms` | number | Waktu yang berlalu sejak panggilan terakhir dalam milidetik |
| `edge` | string | Tepi mana yang memicu eksekusi (awal/akhir) |

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

### Akhir

`flow.end`

Node akhir workflow eksplisit

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `success_message` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event routing (__end__) |
| `ended_at` | string | Waktu akhir |
| `workflow_result` | object | Hasil workflow |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
output_mapping: {"result": "${process.output}", "status": "success"}
```

### Penanganan Error

`flow.error_handle`

Menangkap dan menangani error dari node hulu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | `log_and_continue` | Apa yang harus dilakukan dengan error |
| `include_traceback` | boolean | No | `True` | Sertakan jejak tumpukan lengkap dalam output |
| `error_code_mapping` | object | No | `{}` | Sertakan jejak tumpukan lengkap dalam output |
| `fallback_value` | any | No | - | Peta kode error ke tindakan khusus |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Nilai yang digunakan saat error ditekan |
| `outputs` | object | Event untuk pengaturan rute (ditangani/eskalasi) |
| `error_info` | object | Event untuk pengaturan rute (ditangani/eskalasi) |
| `action_taken` | string | Tindakan yang diambil |

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

### Pemicu Alur Kerja Error

`flow.error_workflow_trigger`

Titik masuk untuk alur kerja error - dipicu saat alur kerja lain gagal

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `description` | string | No | - | Description of this error workflow |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Deskripsi alur kerja error ini |
| `error_context` | object | Event untuk pengaturan rute (dipicu) |
| `triggered_at` | string | Timestamp ISO saat alur kerja error dipicu |

**Example:** Example

```yaml
description: Send Slack notification on workflow failure
```

**Example:** Example

```yaml
description: Log all workflow errors to monitoring system
```

### Untuk Setiap

`flow.foreach`

Iterasi daftar dan eksekusi langkah untuk setiap item

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | string | Yes | - | Daftar item untuk diiterasi (mendukung referensi ${variabel}) |
| `steps` | array | No | - | Langkah untuk dieksekusi untuk setiap item |
| `item_var` | string | No | `item` | Nama variabel untuk item saat ini |
| `index_var` | string | No | `index` | Nama variabel untuk indeks saat ini |
| `output_mode` | string | No | `collect` | Mode pengumpulan hasil |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event routing (iterate/done) |
| `__set_context` | object | Atur konteks |
| `outputs` | object | Nilai output berdasarkan port |
| `iteration` | number | Indeks iterasi saat ini |
| `status` | string | Status operasi |
| `results` | array | Hasil yang dikumpulkan |
| `count` | number | Total jumlah item |

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

### Fork

`flow.fork`

Pisahkan eksekusi ke cabang paralel

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `branch_count` | number | No | `2` | Number of parallel branches |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event routing (fork/error) |
| `input_data` | any | Data input |
| `branch_count` | integer | Jumlah cabang |

**Example:** Example

```yaml
branch_count: 2
```

**Example:** Example

```yaml
branch_count: 3
```

### Pergi Ke

`flow.goto`

Lompat tanpa syarat ke langkah lain

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `target` | string | Yes | - | Step ID to jump to |
| `max_iterations` | number | No | `100` | Maximum number of iterations (prevents infinite loops) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event routing (goto) |
| `target` | string | Langkah target |
| `iteration` | number | Jumlah iterasi |

**Example:** Example

```yaml
target: fetch_next_page
max_iterations: 10
```

**Example:** Example

```yaml
target: cleanup_step
```

### Panggil Alur Kerja

`flow.invoke`

Jalankan file alur kerja eksternal

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
| `__event__` | string | Parameter untuk diteruskan ke alur kerja yang dipanggil |
| `result` | any | Waktu eksekusi maksimum dalam detik |
| `workflow_id` | string | Event untuk routing (berhasil/gagal) |
| `execution_time_ms` | number | Hasil eksekusi alur kerja |

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

### Gabung

`flow.join`

Tunggu cabang paralel selesai

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
| `__event__` | string | Event routing (joined/timeout/error) |
| `joined_data` | array | Data yang digabungkan |
| `completed_count` | integer | Jumlah cabang selesai |
| `strategy` | string | Strategi join |

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

### Loop

`flow.loop`

Ulangi langkah N kali menggunakan routing port output

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `times` | number | Yes | `1` | Jumlah pengulangan |
| `target` | string | No | - | Langkah target (deprecated) |
| `steps` | array | No | - | Langkah untuk dieksekusi untuk setiap iterasi |
| `index_var` | string | No | `index` | Nama variabel untuk indeks saat ini |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event routing (iterate/done) |
| `outputs` | object | Nilai output berdasarkan port |
| `iteration` | number | Iterasi saat ini |
| `status` | string | Status operasi |
| `results` | array | Hasil yang dikumpulkan |
| `count` | number | Total iterasi |

**Example:** Example

```yaml
times: 3
```

**Example:** Example

```yaml
times: 5
steps: [{"module": "browser.click", "params": {"selector": ".next"}}]
```

### Gabung

`flow.merge`

Gabungkan beberapa input menjadi satu output

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`first`, `last`, `all`) | No | `all` | How to merge multiple inputs |
| `input_count` | number | No | `2` | Number of ports |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event routing (merged/error) |
| `merged_data` | any | Data yang digabungkan |
| `input_count` | integer | Jumlah input |
| `strategy` | string | Strategi merge |

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

Eksekusi beberapa tugas secara paralel dengan strategi berbeda

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tasks` | array | Yes | - | Array definisi tugas untuk dieksekusi secara paralel |
| `mode` | string | No | `all` | Array definisi tugas untuk dieksekusi secara paralel |
| `timeout_ms` | number | No | `60000` | Maximum wait time in milliseconds |
| `fail_fast` | boolean | No | `True` | Hentikan semua tugas pada kegagalan pertama (hanya untuk mode=all) |
| `concurrency_limit` | number | No | `0` | Hentikan semua tugas pada kegagalan pertama (hanya untuk mode=all) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Jumlah maksimum tugas bersamaan (0 untuk tidak terbatas) |
| `results` | array | Event untuk pengalihan (selesai/parsial/error) |
| `completed_count` | number | Event untuk pengaturan rute (selesai/parsial/error) |
| `failed_count` | number | Hasil dari semua tugas |
| `total_count` | number | Jumlah tugas yang berhasil diselesaikan |
| `mode` | string | Jumlah tugas yang gagal |
| `duration_ms` | number | Jumlah total tugas |

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

### Batas Laju

`flow.rate_limit`

Batas laju eksekusi menggunakan token bucket atau jendela geser

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_requests` | number | Yes | - | Jumlah maksimum permintaan yang diizinkan per jendela |
| `window_ms` | number | No | `60000` | Jendela waktu dalam milidetik |
| `strategy` | string | No | `token_bucket` | Strategi pembatasan laju (token_bucket atau sliding_window) |
| `queue_overflow` | string | No | `wait` | Perilaku saat antrian penuh (buang atau kesalahan) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Acara untuk pengalihan (diizinkan/dibatasi) |
| `tokens_remaining` | number | Token yang tersisa dalam bucket |
| `window_reset_ms` | number | Milidetik hingga jendela direset |
| `requests_in_window` | number | Jumlah permintaan dalam jendela saat ini |
| `wait_ms` | number | Milidetik untuk menunggu sebelum permintaan berikutnya diizinkan |

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

### Coba Ulang

`flow.retry`

Coba ulang operasi yang gagal dengan jeda yang dapat diatur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_retries` | number | Yes | `3` | Jumlah maksimum percobaan ulang |
| `initial_delay_ms` | number | No | `1000` | Jeda awal sebelum percobaan ulang pertama dalam milidetik |
| `backoff_multiplier` | number | No | `2.0` | Pengali untuk jeda eksponensial |
| `max_delay_ms` | number | No | `30000` | Jeda maksimum antara percobaan ulang dalam milidetik |
| `retry_on_errors` | array | No | `[]` | Jenis kesalahan untuk dicoba ulang (kosong berarti coba ulang semua) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event untuk routing (coba ulang/sukses/gagal) |
| `attempt` | number | Nomor percobaan saat ini |
| `max_retries` | number | Jumlah maksimum percobaan ulang yang diatur |
| `delay_ms` | number | Jeda sebelum coba ulang berikutnya dalam milidetik |
| `total_elapsed_ms` | number | Total waktu yang berlalu dalam milidetik |
| `last_error` | object | Pesan kesalahan terakhir |

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

### Mulai

`flow.start`

Node awal workflow eksplisit

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event routing (start) |
| `started_at` | string | Waktu mulai |
| `workflow_id` | string | ID Workflow |

**Example:** Example

```yaml
```

### Subflow

`flow.subflow`

Referensi dan eksekusi workflow eksternal

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
| `__event__` | string | Event routing (success/error) |
| `result` | any | Hasil eksekusi |
| `execution_id` | string | ID Eksekusi |
| `workflow_ref` | string | Referensi workflow |

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

### Saklar

`flow.switch`

Percabangan multi-arah berdasarkan pencocokan nilai

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Value to match against cases (supports variable reference) |
| `cases` | array | Yes | `[{'id': 'case_1', 'value': 'case1', 'label': 'Case 1'}]` | List of case definitions |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event routing (case:value atau default) |
| `outputs` | object | Nilai output berdasarkan port |
| `matched_case` | string | Case yang cocok |
| `value` | any | Nilai yang cocok |

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

### Batasi

`flow.throttle`

Batasi laju eksekusi dengan interval minimum

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `interval_ms` | number | Yes | - | Waktu minimum antara eksekusi dalam milidetik |
| `leading` | boolean | No | `True` | Eksekusi pada tepi depan (panggilan pertama langsung lolos) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | Event untuk routing (dieksekusi/dibatasi) |
| `last_execution_ms` | number | Cap waktu eksekusi terakhir yang diizinkan |
| `calls_throttled` | number | Jumlah panggilan yang dibatasi sejak eksekusi terakhir |
| `time_since_last_ms` | number | Waktu yang berlalu sejak eksekusi terakhir dalam milidetik |
| `remaining_ms` | number | Milidetik tersisa hingga eksekusi berikutnya diizinkan |

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

### Pemicu

`flow.trigger`

Titik masuk workflow - manual, webhook, jadwal, atau event

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
| `__event__` | string | Event routing (triggered/error) |
| `trigger_data` | object | Data trigger |
| `trigger_type` | string | Jenis trigger |
| `triggered_at` | string | Waktu trigger |

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
