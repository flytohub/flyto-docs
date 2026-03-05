# Scheduler

Cron parsing, delay, and interval calculations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Parse Ekspresi Cron](#parse-ekspresi-cron) | Parse ekspresi cron dan hitung N waktu jalankan berikutnya |
| [Tunda / Tidur](#tunda--tidur) | Jeda eksekusi untuk durasi yang ditentukan |
| [Hitung Interval](#hitung-interval) | Hitung waktu interval dan kejadian berikutnya |

## Modules

### Parse Ekspresi Cron

`scheduler.cron_parse`

Parse ekspresi cron dan hitung N waktu jalankan berikutnya

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Ekspresi cron standar 5-bidang (mis. "0 9 * * MON-FRI") |
| `count` | number | No | `5` | Jumlah waktu jalankan berikutnya yang akan dihitung |
| `timezone` | string | No | `0` | Zona waktu untuk perhitungan (offset UTC seperti "+8" atau "-5", default "0" untuk UTC) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `expression` | string | Ekspresi cron yang telah di-parse |
| `description` | string | Deskripsi jadwal yang mudah dibaca |
| `next_runs` | array | Daftar waktu jalankan berikutnya sebagai string datetime ISO |
| `is_valid` | boolean | Apakah ekspresi valid |

### Tunda / Tidur

`scheduler.delay`

Jeda eksekusi untuk durasi yang ditentukan

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | Jumlah detik untuk ditunda |
| `message` | string | No | - | Pesan opsional untuk disertakan dalam hasil |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `delayed_seconds` | number | Jumlah detik yang sebenarnya ditunda |
| `message` | string | Pesan yang diberikan atau default |

### Hitung Interval

`scheduler.interval`

Hitung waktu interval dan kejadian berikutnya

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | No | `0` | Komponen detik interval |
| `minutes` | number | No | `0` | Komponen menit interval |
| `hours` | number | No | `0` | Komponen jam interval |
| `start_time` | string | No | - | Waktu mulai dalam format ISO 8601 (default: sekarang) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `interval_seconds` | number | Total interval dalam detik |
| `next_runs` | array | Daftar 5 waktu jalankan berikutnya sebagai string datetime ISO |
| `human_readable` | string | Deskripsi interval yang mudah dibaca |
