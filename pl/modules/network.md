# Network

Ping, port scan, traceroute, and WHOIS lookup.

**4 modules**

| Module | Description |
|--------|-------------|
| [Ping](#ping) | Pinguj hosta, aby sprawdzić łączność i zmierzyć opóźnienie |
| [Skanowanie portów](#skanowanie-portów) | Skanuj porty na hoście, aby sprawdzić, które są otwarte |
| [Traceroute](#traceroute) | Śledź trasę pakietów do docelowego hosta |
| [Sprawdzenie WHOIS](#sprawdzenie-whois) | Wykonaj zapytanie WHOIS dla domeny, aby uzyskać informacje o rejestracji |

## Modules

### Ping

`network.ping`

Pinguj hosta, aby sprawdzić łączność i zmierzyć opóźnienie

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nazwa hosta lub adres IP do pingowania |
| `count` | number | No | `4` | Liczba pakietów ping do wysłania |
| `timeout` | number | No | `5` | Limit czasu w sekundach dla każdego pakietu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | Pingowany host |
| `alive` | boolean | Czy host odpowiedział |
| `packets_sent` | number | Liczba wysłanych pakietów |
| `packets_received` | number | Liczba odebranych pakietów |
| `packet_loss_pct` | number | Procent utraty pakietów |
| `latency_ms` | object | Statystyki opóźnień w milisekundach (min, średnia, max) |

**Example:** Ping a host

```yaml
host: google.com
count: 4
timeout: 5
```

### Skanowanie portów

`network.port_scan`

Skanuj porty na hoście, aby sprawdzić, które są otwarte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nazwa hosta lub adres IP do skanowania |
| `ports` | string | No | - | Porty do skanowania: oddzielone przecinkami (80,443), zakres (80-443) lub pozostaw puste dla popularnych portów |
| `timeout` | number | No | `1.0` | Limit czasu połączenia w sekundach na port |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | Skanowany host |
| `open_ports` | array | Lista numerów otwartych portów |
| `closed_ports` | array | Lista numerów zamkniętych portów |
| `scan_time_ms` | number | Całkowity czas skanowania w milisekundach |

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

Śledź trasę pakietów do docelowego hosta

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nazwa hosta lub adres IP do śledzenia trasy |
| `max_hops` | number | No | `30` | Maksymalna liczba przeskoków do śledzenia |
| `timeout` | number | No | `5` | Limit czasu w sekundach dla każdej sondy |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | Docelowy host |
| `hops` | array | Lista przeskoków na trasie |
| `total_hops` | number | Całkowita liczba przeskoków do celu |

**Example:** Trace route to host

```yaml
host: google.com
max_hops: 30
```

### Sprawdzenie WHOIS

`network.whois`

Wykonaj zapytanie WHOIS dla domeny, aby uzyskać informacje o rejestracji

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | Nazwa domeny do sprawdzenia |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `domain` | string | Zapytana domena |
| `registrar` | string | Rejestrator domeny |
| `creation_date` | string | Data utworzenia domeny |
| `expiration_date` | string | Data wygaśnięcia domeny |
| `name_servers` | array | Lista serwerów nazw |
| `raw` | string | Pełny surowy wynik WHOIS |

**Example:** WHOIS lookup

```yaml
domain: example.com
```
