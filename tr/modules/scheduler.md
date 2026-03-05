# Scheduler

Cron parsing, delay, and interval calculations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Cron İfadesini Ayrıştır](#cron-i̇fadesini-ayrıştır) | Cron ifadesini ayrıştır ve sonraki N çalıştırma zamanlarını hesapla |
| [Gecikme / Uyku](#gecikme--uyku) | Belirtilen süre boyunca yürütmeyi duraklat |
| [Aralığı Hesapla](#aralığı-hesapla) | Aralık zamanlamasını ve sonraki gerçekleşmeleri hesapla |

## Modules

### Cron İfadesini Ayrıştır

`scheduler.cron_parse`

Cron ifadesini ayrıştır ve sonraki N çalıştırma zamanlarını hesapla

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Standart 5 alanlı cron ifadesi (ör. "0 9 * * MON-FRI") |
| `count` | number | No | `5` | Hesaplanacak sonraki çalıştırma sayısı |
| `timezone` | string | No | `0` | Hesaplama için zaman dilimi (UTC ofseti "+8" veya "-5" gibi, varsayılan "0" UTC için) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `expression` | string | Ayrıştırılmış cron ifadesi |
| `description` | string | Programın insan tarafından okunabilir açıklaması |
| `next_runs` | array | Sonraki çalıştırma zamanlarının ISO tarih saat dizeleri listesi |
| `is_valid` | boolean | İfadenin geçerli olup olmadığı |

### Gecikme / Uyku

`scheduler.delay`

Belirtilen süre boyunca yürütmeyi duraklat

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | Gecikme süresi saniye cinsinden |
| `message` | string | No | - | Sonuçta dahil edilecek isteğe bağlı mesaj |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `delayed_seconds` | number | Gerçek gecikme süresi saniye cinsinden |
| `message` | string | Sağlanan mesaj veya varsayılan |

### Aralığı Hesapla

`scheduler.interval`

Aralık zamanlamasını ve sonraki gerçekleşmeleri hesapla

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | No | `0` | Aralık saniye bileşeni |
| `minutes` | number | No | `0` | Aralık dakika bileşeni |
| `hours` | number | No | `0` | Aralık saat bileşeni |
| `start_time` | string | No | - | ISO 8601 formatında başlangıç saati (varsayılan: şimdi) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `interval_seconds` | number | Toplam aralık süresi saniye cinsinden |
| `next_runs` | array | Sonraki 5 çalıştırma zamanının ISO tarih saat dizeleri listesi |
| `human_readable` | string | İnsan tarafından okunabilir aralık açıklaması |
