# Utilities

Datetime operations, delay, MD5 hash, and random utilities.

**9 modules**

| Module | Description |
|--------|-------------|
| [Tambah Waktu](#tambah-waktu) | Tambah waktu ke datetime |
| [Format TanggalWaktu](#format-tanggalwaktu) | Format datetime ke string |
| [Ubah TanggalWaktu](#ubah-tanggalwaktu) | Parse string ke datetime |
| [Kurangi Waktu](#kurangi-waktu) | Kurangi waktu dari datetime |
| [Tanggal/Waktu Saat Ini](#tanggalwaktu-saat-ini) | Dapatkan tanggal dan waktu saat ini |
| [Tunda/Tidur](#tundatidur) | Jeda eksekusi workflow untuk durasi tertentu |
| [Hash MD5](#hash-md5) | Hitung hash MD5 dari teks |
| [Angka Acak](#angka-acak) | Hasilkan angka acak dalam rentang |
| [String Acak](#string-acak) | Hasilkan string acak atau UUID |

## Modules

### Tambah Waktu

`datetime.add`

Tambah waktu ke datetime

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `days` | number | No | `0` | Number of days to add (positive) or subtract (negative) |
| `hours` | number | No | `0` | Number of hours to add (positive) or subtract (negative) |
| `minutes` | number | No | `0` | Number of minutes to add (positive) or subtract (negative) |
| `seconds` | number | No | `0` | Number of seconds to add (positive) or subtract (negative) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Hasil operasi |
| `timestamp` | number | Hasil operasi |

**Example:** Add 7 days

```yaml
datetime: now
days: 7
```

**Example:** Add 2 hours 30 minutes

```yaml
datetime: 2024-01-15T10:00:00
hours: 2
minutes: 30
```

### Format TanggalWaktu

`datetime.format`

Format datetime ke string

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Hasil operasi |
| `timestamp` | number | Hasil operasi |

**Example:** Format current time

```yaml
datetime: now
format: %Y-%m-%d %H:%M:%S
```

**Example:** Custom date format

```yaml
datetime: 2024-01-15T10:30:00
format: %B %d, %Y
```

### Ubah TanggalWaktu

`datetime.parse`

Parse string ke datetime

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime_string` | string | Yes | - | DateTime string to parse (ISO 8601 format recommended) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Hasil operasi |
| `timestamp` | number | Hasil operasi |
| `year` | number | Hasil operasi |
| `month` | number | Timestamp Unix |
| `day` | number | Komponen tahun |
| `hour` | number | Komponen bulan |
| `minute` | number | Komponen hari |
| `second` | number | Komponen jam |

**Example:** Parse ISO format

```yaml
datetime_string: 2024-01-15T10:30:00
```

**Example:** Parse custom format

```yaml
datetime_string: January 15, 2024
format: %B %d, %Y
```

### Kurangi Waktu

`datetime.subtract`

Kurangi waktu dari datetime

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `days` | number | No | `0` | Number of days to add (positive) or subtract (negative) |
| `hours` | number | No | `0` | Number of hours to add (positive) or subtract (negative) |
| `minutes` | number | No | `0` | Number of minutes to add (positive) or subtract (negative) |
| `seconds` | number | No | `0` | Number of seconds to add (positive) or subtract (negative) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Hasil operasi |
| `timestamp` | number | Hasil operasi |

**Example:** Subtract 7 days

```yaml
datetime: now
days: 7
```

**Example:** Subtract 1 hour

```yaml
datetime: 2024-01-15T10:00:00
hours: 1
```

### Tanggal/Waktu Saat Ini

`utility.datetime.now`

Dapatkan tanggal dan waktu saat ini

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`iso`, `unix`, `unix_ms`, `date`, `time`, `custom`) | No | `iso` | Format output |
| `custom_format` | string | No | - | Format strftime Python (jika format=custom) |
| `timezone` | string | No | `UTC` | Format strftime Python (jika format=custom) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Zona waktu (default: UTC) |
| `datetime` | string | Status operasi (sukses/error) |
| `timestamp` | number | Status operasi (sukses/error) |
| `iso` | string | Tanggal/waktu terformat |

**Example:** Example

```yaml
format: iso
```

**Example:** Example

```yaml
format: unix
```

### Tunda/Tidur

`utility.delay`

Jeda eksekusi workflow untuk durasi tertentu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Berapa lama menunggu dalam milidetik |
| `duration_seconds` | number | No | - | Alternatif: durasi dalam detik |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Alternatif: durasi dalam detik |
| `waited_ms` | number | Status operasi (sukses/error) |

**Example:** Example

```yaml
duration_seconds: 2
```

**Example:** Example

```yaml
duration_ms: 500
```

### Hash MD5

`utility.hash.md5`

Hitung hash MD5 dari teks

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Teks untuk di-hash |
| `encoding` | string | No | `utf-8` | Teks untuk di-hash |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Encoding teks |
| `hash` | string | Encoding teks |

**Example:** Example

```yaml
text: Hello World
```

### Angka Acak

`utility.random.number`

Hasilkan angka acak dalam rentang

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | Nilai minimum (inklusif) |
| `max` | number | No | `100` | Nilai minimum (inklusif) |
| `decimals` | number | No | `0` | Nilai maksimum (inklusif) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Jumlah tempat desimal (0 untuk integer) |
| `value` | number | Status operasi (sukses/error) |

**Example:** Example

```yaml
min: 1
max: 100
decimals: 0
```

**Example:** Example

```yaml
min: 0
max: 1
decimals: 2
```

### String Acak

`utility.random.string`

Hasilkan string acak atau UUID

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | No | `16` | Panjang string |
| `charset` | select (`alphanumeric`, `letters`, `lowercase`, `uppercase`, `numbers`, `hex`, `uuid`) | No | `alphanumeric` | Panjang string |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operasi (sukses/error) |
| `value` | string | Status operasi (sukses/error) |

**Example:** Example

```yaml
length: 16
charset: alphanumeric
```

**Example:** Example

```yaml
charset: uuid
```
