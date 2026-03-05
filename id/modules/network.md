# Network

Ping, port scan, traceroute, and WHOIS lookup.

**4 modules**

| Module | Description |
|--------|-------------|
| [Ping](#ping) | Ping host untuk memeriksa konektivitas dan mengukur latensi |
| [Pindai Port](#pindai-port) | Pindai port pada host untuk memeriksa mana yang terbuka |
| [Traceroute](#traceroute) | Lacak rute paket untuk mencapai host tujuan |
| [Pencarian WHOIS](#pencarian-whois) | Lakukan pencarian WHOIS untuk domain untuk mendapatkan informasi pendaftaran |

## Modules

### Ping

`network.ping`

Ping host untuk memeriksa konektivitas dan mengukur latensi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nama host atau alamat IP untuk diping |
| `count` | number | No | `4` | Jumlah paket ping untuk dikirim |
| `timeout` | number | No | `5` | Waktu habis dalam detik untuk setiap paket |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | Host yang diping |
| `alive` | boolean | Apakah host merespons |
| `packets_sent` | number | Jumlah paket yang dikirim |
| `packets_received` | number | Jumlah paket yang diterima |
| `packet_loss_pct` | number | Persentase kehilangan paket |
| `latency_ms` | object | Statistik latensi dalam milidetik (min, rata-rata, maks) |

**Example:** Ping a host

```yaml
host: google.com
count: 4
timeout: 5
```

### Pindai Port

`network.port_scan`

Pindai port pada host untuk memeriksa mana yang terbuka

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nama host atau alamat IP untuk dipindai |
| `ports` | string | No | - | Port untuk dipindai: pisahkan dengan koma (80,443), rentang (80-443), atau kosongkan untuk port umum |
| `timeout` | number | No | `1.0` | Waktu habis koneksi dalam detik per port |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | Host yang dipindai |
| `open_ports` | array | Daftar nomor port yang terbuka |
| `closed_ports` | array | Daftar nomor port yang tertutup |
| `scan_time_ms` | number | Total waktu pemindaian dalam milidetik |

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

Lacak rute paket untuk mencapai host tujuan

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nama host atau alamat IP untuk dilacak rutenya |
| `max_hops` | number | No | `30` | Jumlah maksimum lompatan untuk dilacak |
| `timeout` | number | No | `5` | Waktu habis dalam detik untuk setiap uji coba |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | Host tujuan |
| `hops` | array | Daftar lompatan sepanjang rute |
| `total_hops` | number | Jumlah total lompatan untuk mencapai tujuan |

**Example:** Trace route to host

```yaml
host: google.com
max_hops: 30
```

### Pencarian WHOIS

`network.whois`

Lakukan pencarian WHOIS untuk domain untuk mendapatkan informasi pendaftaran

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | Nama domain untuk dicari |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `domain` | string | Domain yang dicari |
| `registrar` | string | Pendaftar domain |
| `creation_date` | string | Tanggal pembuatan domain |
| `expiration_date` | string | Tanggal kedaluwarsa domain |
| `name_servers` | array | Daftar server nama |
| `raw` | string | Output WHOIS mentah lengkap |

**Example:** WHOIS lookup

```yaml
domain: example.com
```
