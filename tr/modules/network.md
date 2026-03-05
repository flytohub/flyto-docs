# Network

Ping, port scan, traceroute, and WHOIS lookup.

**4 modules**

| Module | Description |
|--------|-------------|
| [Ping](#ping) | Bağlantıyı kontrol etmek ve gecikmeyi ölçmek için bir hosta ping atın |
| [Port Tarama](#port-tarama) | Hangi portların açık olduğunu kontrol etmek için bir host üzerinde portları tarayın |
| [Traceroute](#traceroute) | Bir hedef hosta ulaşmak için paketlerin izlediği yolu izleyin |
| [WHOIS Sorgulama](#whois-sorgulama) | Bir alan adı için kayıt bilgilerini almak amacıyla WHOIS sorgulaması yapın |

## Modules

### Ping

`network.ping`

Bağlantıyı kontrol etmek ve gecikmeyi ölçmek için bir hosta ping atın

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Ping atılacak host adı veya IP adresi |
| `count` | number | No | `4` | Gönderilecek ping paketi sayısı |
| `timeout` | number | No | `5` | Her paket için saniye cinsinden zaman aşımı |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | Ping atılan host |
| `alive` | boolean | Hostun yanıt verip vermediği |
| `packets_sent` | number | Gönderilen paket sayısı |
| `packets_received` | number | Alınan paket sayısı |
| `packet_loss_pct` | number | Paket kaybı yüzdesi |
| `latency_ms` | object | Gecikme istatistikleri milisaniye cinsinden (min, ort, maks) |

**Example:** Ping a host

```yaml
host: google.com
count: 4
timeout: 5
```

### Port Tarama

`network.port_scan`

Hangi portların açık olduğunu kontrol etmek için bir host üzerinde portları tarayın

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Tarama yapılacak host adı veya IP adresi |
| `ports` | string | No | - | Tarama yapılacak portlar: virgülle ayrılmış (80,443), aralık (80-443) veya yaygın portlar için boş bırakın |
| `timeout` | number | No | `1.0` | Her port için saniye cinsinden bağlantı zaman aşımı |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | Taranan host |
| `open_ports` | array | Açık port numaralarının listesi |
| `closed_ports` | array | Kapalı port numaralarının listesi |
| `scan_time_ms` | number | Toplam tarama süresi milisaniye cinsinden |

**Example:** Scan common ports

```yaml
host: example.com
```

**Example:** Scan specific port range

```yaml
host: example.com
ports: 80-443
timeout: 2.0
```

### Traceroute

`network.traceroute`

Bir hedef hosta ulaşmak için paketlerin izlediği yolu izleyin

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Yolun izleneceği host adı veya IP adresi |
| `max_hops` | number | No | `30` | İzlenecek maksimum atlama sayısı |
| `timeout` | number | No | `5` | Her bir deneme için saniye cinsinden zaman aşımı |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | Hedef host |
| `hops` | array | Yol boyunca atlamaların listesi |
| `total_hops` | number | Hedefe ulaşmak için toplam atlama sayısı |

**Example:** Trace route to host

```yaml
host: google.com
max_hops: 30
```

### WHOIS Sorgulama

`network.whois`

Bir alan adı için kayıt bilgilerini almak amacıyla WHOIS sorgulaması yapın

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | Sorgulanacak alan adı |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `domain` | string | Sorgulanan alan adı |
| `registrar` | string | Alan adı kayıt kuruluşu |
| `creation_date` | string | Alan adının oluşturulma tarihi |
| `expiration_date` | string | Alan adının sona erme tarihi |
| `name_servers` | array | Ad sunucularının listesi |
| `raw` | string | Tam ham WHOIS çıktısı |

**Example:** WHOIS lookup

```yaml
domain: example.com
```
