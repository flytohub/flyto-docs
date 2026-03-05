# Utilities

Datetime operations, delay, MD5 hash, and random utilities.

**9 modules**

| Module | Description |
|--------|-------------|
| [Zaman Ekle](#zaman-ekle) | Tarih saate zaman ekle |
| [Tarih Saat Biçimlendir](#tarih-saat-biçimlendir) | Tarih saati dizeye biçimlendir |
| [Tarih Saat Ayrıştır](#tarih-saat-ayrıştır) | Dizeyi tarih saate ayrıştır |
| [Zaman Çıkar](#zaman-çıkar) | Tarih saatten zaman çıkar |
| [Geçerli Tarih/Saat](#geçerli-tarihsaat) | Geçerli tarih ve saati al |
| [Gecikme/Uyku](#gecikmeuyku) | İş akışı yürütmesini belirtilen süre boyunca duraklat |
| [MD5 Hash](#md5-hash) | Metnin MD5 hash değerini hesapla |
| [Rastgele Sayı](#rastgele-sayı) | Aralıkta rastgele sayı üret |
| [Rastgele Dize](#rastgele-dize) | Rastgele dize veya UUID üret |

## Modules

### Zaman Ekle

`datetime.add`

Tarih saate zaman ekle

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
| `result` | string | İşlem sonucu |
| `timestamp` | number | İşlem sonucu |

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

### Tarih Saat Biçimlendir

`datetime.format`

Tarih saati dizeye biçimlendir

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime` | string | No | `now` | Enter "now" for current time, or ISO 8601 format (e.g., 2024-01-30T14:30:00) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | İşlem sonucu |
| `timestamp` | number | İşlem sonucu |

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

### Tarih Saat Ayrıştır

`datetime.parse`

Dizeyi tarih saate ayrıştır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `datetime_string` | string | Yes | - | DateTime string to parse (ISO 8601 format recommended) |
| `format` | select (`%Y-%m-%d`, `%Y-%m-%d %H:%M:%S`, `%Y/%m/%d`, `%d/%m/%Y`, `%m/%d/%Y`, `%Y年%m月%d日`, `%B %d, %Y`, `%d %b %Y`, `%H:%M:%S`, `%H:%M`, `%I:%M %p`, `%Y%m%d`, `%Y-%m-%dT%H:%M:%SZ`, `%a, %d %b %Y %H:%M:%S`) | No | `%Y-%m-%d %H:%M:%S` | Select a format or enter custom strftime pattern |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | İşlem sonucu |
| `timestamp` | number | İşlem sonucu |
| `year` | number | İşlem sonucu |
| `month` | number | Unix zaman damgası |
| `day` | number | Yıl bileşeni |
| `hour` | number | Ay bileşeni |
| `minute` | number | Gün bileşeni |
| `second` | number | Saat bileşeni |

**Example:** Parse ISO format

```yaml
datetime_string: 2024-01-15T10:30:00
```

**Example:** Parse custom format

```yaml
datetime_string: January 15, 2024
format: %B %d, %Y
```

### Zaman Çıkar

`datetime.subtract`

Tarih saatten zaman çıkar

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
| `result` | string | İşlem sonucu |
| `timestamp` | number | İşlem sonucu |

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

### Geçerli Tarih/Saat

`utility.datetime.now`

Geçerli tarih ve saati al

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`iso`, `unix`, `unix_ms`, `date`, `time`, `custom`) | No | `iso` | Çıktı biçimi |
| `custom_format` | string | No | - | Python strftime biçimi (format=custom ise) |
| `timezone` | string | No | `UTC` | Python strftime biçimi (format=custom ise) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Saat dilimi (varsayılan: UTC) |
| `datetime` | string | İşlem durumu (success/error) |
| `timestamp` | number | İşlem durumu (success/error) |
| `iso` | string | Biçimlendirilmiş tarih/saat |

**Example:** Example

```yaml
format: iso
```

**Example:** Example

```yaml
format: unix
```

### Gecikme/Uyku

`utility.delay`

İş akışı yürütmesini belirtilen süre boyunca duraklat

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Milisaniye cinsinden bekleme süresi |
| `duration_seconds` | number | No | - | Alternatif: saniye cinsinden süre |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Alternatif: saniye cinsinden süre |
| `waited_ms` | number | İşlem durumu (success/error) |

**Example:** Example

```yaml
duration_seconds: 2
```

**Example:** Example

```yaml
duration_ms: 500
```

### MD5 Hash

`utility.hash.md5`

Metnin MD5 hash değerini hesapla

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Hash'lenecek metin |
| `encoding` | string | No | `utf-8` | Hash'lenecek metin |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Metin kodlaması |
| `hash` | string | Metin kodlaması |

**Example:** Example

```yaml
text: Hello World
```

### Rastgele Sayı

`utility.random.number`

Aralıkta rastgele sayı üret

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min` | number | No | `0` | Minimum değer (dahil) |
| `max` | number | No | `100` | Minimum değer (dahil) |
| `decimals` | number | No | `0` | Maksimum değer (dahil) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Ondalık basamak sayısı (tam sayılar için 0) |
| `value` | number | İşlem durumu (success/error) |

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

### Rastgele Dize

`utility.random.string`

Rastgele dize veya UUID üret

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `length` | number | No | `16` | Dize uzunluğu |
| `charset` | select (`alphanumeric`, `letters`, `lowercase`, `uppercase`, `numbers`, `hex`, `uuid`) | No | `alphanumeric` | Dize uzunluğu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | İşlem durumu (success/error) |
| `value` | string | İşlem durumu (success/error) |

**Example:** Example

```yaml
length: 16
charset: alphanumeric
```

**Example:** Example

```yaml
charset: uuid
```
