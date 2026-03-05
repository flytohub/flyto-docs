# Network

Ping, port scan, traceroute, and WHOIS lookup.

**4 modules**

| Module | Description |
|--------|-------------|
| [Ping](#ping) | Haz ping a un host para verificar la conectividad y medir la latencia |
| [Escaneo de Puertos](#escaneo-de-puertos) | Escanea puertos en un host para verificar cuáles están abiertos |
| [Rastreo de Ruta](#rastreo-de-ruta) | Rastrea la ruta que toman los paquetes para llegar a un host de destino |
| [Consulta WHOIS](#consulta-whois) | Realiza una consulta WHOIS para un dominio para obtener información de registro |

## Modules

### Ping

`network.ping`

Haz ping a un host para verificar la conectividad y medir la latencia

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nombre de host o dirección IP para hacer ping |
| `count` | number | No | `4` | Número de paquetes de ping a enviar |
| `timeout` | number | No | `5` | Tiempo de espera en segundos para cada paquete |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | El host al que se hizo ping |
| `alive` | boolean | Si el host respondió |
| `packets_sent` | number | Número de paquetes enviados |
| `packets_received` | number | Número de paquetes recibidos |
| `packet_loss_pct` | number | Porcentaje de pérdida de paquetes |
| `latency_ms` | object | Estadísticas de latencia en milisegundos (mín, prom, máx) |

**Example:** Ping a host

```yaml
host: google.com
count: 4
timeout: 5
```

### Escaneo de Puertos

`network.port_scan`

Escanea puertos en un host para verificar cuáles están abiertos

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nombre de host o dirección IP para escanear |
| `ports` | string | No | - | Puertos a escanear: separados por comas (80,443), rango (80-443), o deja vacío para puertos comunes |
| `timeout` | number | No | `1.0` | Tiempo de espera de conexión en segundos por puerto |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | El host escaneado |
| `open_ports` | array | Lista de números de puertos abiertos |
| `closed_ports` | array | Lista de números de puertos cerrados |
| `scan_time_ms` | number | Tiempo total de escaneo en milisegundos |

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

### Rastreo de Ruta

`network.traceroute`

Rastrea la ruta que toman los paquetes para llegar a un host de destino

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nombre de host o dirección IP para rastrear la ruta |
| `max_hops` | number | No | `30` | Número máximo de saltos a rastrear |
| `timeout` | number | No | `5` | Tiempo de espera en segundos para cada sondeo |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | El host de destino |
| `hops` | array | Lista de saltos a lo largo de la ruta |
| `total_hops` | number | Número total de saltos para llegar al destino |

**Example:** Trace route to host

```yaml
host: google.com
max_hops: 30
```

### Consulta WHOIS

`network.whois`

Realiza una consulta WHOIS para un dominio para obtener información de registro

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | Nombre de dominio a consultar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `domain` | string | El dominio consultado |
| `registrar` | string | Registrador del dominio |
| `creation_date` | string | Fecha de creación del dominio |
| `expiration_date` | string | Fecha de expiración del dominio |
| `name_servers` | array | Lista de servidores de nombres |
| `raw` | string | Salida completa de WHOIS sin procesar |

**Example:** WHOIS lookup

```yaml
domain: example.com
```
