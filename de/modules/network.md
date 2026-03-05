# Network

Ping, port scan, traceroute, and WHOIS lookup.

**4 modules**

| Module | Description |
|--------|-------------|
| [Ping](#ping) | Einen Host anpingen, um die Konnektivität zu prüfen und die Latenz zu messen |
| [Port-Scan](#port-scan) | Ports auf einem Host scannen, um zu prüfen, welche offen sind |
| [Traceroute](#traceroute) | Den Weg verfolgen, den Pakete nehmen, um einen Zielhost zu erreichen |
| [WHOIS-Abfrage](#whois-abfrage) | WHOIS-Abfrage für eine Domain durchführen, um Registrierungsinformationen abzurufen |

## Modules

### Ping

`network.ping`

Einen Host anpingen, um die Konnektivität zu prüfen und die Latenz zu messen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Hostname oder IP-Adresse zum Anpingen |
| `count` | number | No | `4` | Anzahl der zu sendenden Ping-Pakete |
| `timeout` | number | No | `5` | Timeout in Sekunden für jedes Paket |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | Der angepingte Host |
| `alive` | boolean | Ob der Host geantwortet hat |
| `packets_sent` | number | Anzahl der gesendeten Pakete |
| `packets_received` | number | Anzahl der empfangenen Pakete |
| `packet_loss_pct` | number | Paketverlust in Prozent |
| `latency_ms` | object | Latenzstatistiken in Millisekunden (min, avg, max) |

**Example:** Ping a host

```yaml
host: google.com
count: 4
timeout: 5
```

### Port-Scan

`network.port_scan`

Ports auf einem Host scannen, um zu prüfen, welche offen sind

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Hostname oder IP-Adresse zum Scannen |
| `ports` | string | No | - | Zu scannende Ports: kommagetrennt (80,443), Bereich (80-443) oder leer lassen für Standard-Ports |
| `timeout` | number | No | `1.0` | Verbindungstimeout in Sekunden pro Port |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | Der gescannte Host |
| `open_ports` | array | Liste der offenen Portnummern |
| `closed_ports` | array | Liste der geschlossenen Portnummern |
| `scan_time_ms` | number | Gesamte Scan-Zeit in Millisekunden |

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

Den Weg verfolgen, den Pakete nehmen, um einen Zielhost zu erreichen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Hostname oder IP-Adresse, zu der der Weg verfolgt werden soll |
| `max_hops` | number | No | `30` | Maximale Anzahl von Hops, die verfolgt werden sollen |
| `timeout` | number | No | `5` | Timeout in Sekunden für jede Abfrage |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | Der Zielhost |
| `hops` | array | Liste der Hops entlang des Weges |
| `total_hops` | number | Gesamtanzahl der Hops zum Ziel |

**Example:** Trace route to host

```yaml
host: google.com
max_hops: 30
```

### WHOIS-Abfrage

`network.whois`

WHOIS-Abfrage für eine Domain durchführen, um Registrierungsinformationen abzurufen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | Zu abfragender Domainname |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `domain` | string | Die abgefragte Domain |
| `registrar` | string | Domain-Registrar |
| `creation_date` | string | Erstellungsdatum der Domain |
| `expiration_date` | string | Ablaufdatum der Domain |
| `name_servers` | array | Liste der Nameserver |
| `raw` | string | Vollständige rohe WHOIS-Ausgabe |

**Example:** WHOIS lookup

```yaml
domain: example.com
```
