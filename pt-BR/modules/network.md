# Network

Ping, port scan, traceroute, and WHOIS lookup.

**4 modules**

| Module | Description |
|--------|-------------|
| [Ping](#ping) | Ping em um host para verificar conectividade e medir latência |
| [Varredura de Portas](#varredura-de-portas) | Verificar portas em um host para ver quais estão abertas |
| [Rastreamento de Rota](#rastreamento-de-rota) | Rastrear a rota que os pacotes percorrem para chegar a um host de destino |
| [Consulta WHOIS](#consulta-whois) | Realizar consulta WHOIS para um domínio e obter informações de registro |

## Modules

### Ping

`network.ping`

Ping em um host para verificar conectividade e medir latência

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nome do host ou endereço IP para ping |
| `count` | number | No | `4` | Número de pacotes de ping para enviar |
| `timeout` | number | No | `5` | Tempo limite em segundos para cada pacote |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | O host pingado |
| `alive` | boolean | Se o host respondeu |
| `packets_sent` | number | Número de pacotes enviados |
| `packets_received` | number | Número de pacotes recebidos |
| `packet_loss_pct` | number | Porcentagem de perda de pacotes |
| `latency_ms` | object | Estatísticas de latência em milissegundos (mín, média, máx) |

**Example:** Ping a host

```yaml
host: google.com
count: 4
timeout: 5
```

### Varredura de Portas

`network.port_scan`

Verificar portas em um host para ver quais estão abertas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nome do host ou endereço IP para verificar |
| `ports` | string | No | - | Portas para verificar: separadas por vírgula (80,443), intervalo (80-443), ou deixe vazio para portas comuns |
| `timeout` | number | No | `1.0` | Tempo limite de conexão em segundos por porta |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | O host verificado |
| `open_ports` | array | Lista de números de portas abertas |
| `closed_ports` | array | Lista de números de portas fechadas |
| `scan_time_ms` | number | Tempo total de verificação em milissegundos |

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

### Rastreamento de Rota

`network.traceroute`

Rastrear a rota que os pacotes percorrem para chegar a um host de destino

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nome do host ou endereço IP para rastrear a rota |
| `max_hops` | number | No | `30` | Número máximo de saltos para rastrear |
| `timeout` | number | No | `5` | Tempo limite em segundos para cada sonda |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | O host de destino |
| `hops` | array | Lista de saltos ao longo da rota |
| `total_hops` | number | Número total de saltos para chegar ao destino |

**Example:** Trace route to host

```yaml
host: google.com
max_hops: 30
```

### Consulta WHOIS

`network.whois`

Realizar consulta WHOIS para um domínio e obter informações de registro

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | Nome do domínio para consulta |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `domain` | string | O domínio consultado |
| `registrar` | string | Registrador do domínio |
| `creation_date` | string | Data de criação do domínio |
| `expiration_date` | string | Data de expiração do domínio |
| `name_servers` | array | Lista de servidores de nomes |
| `raw` | string | Saída completa do WHOIS bruto |

**Example:** WHOIS lookup

```yaml
domain: example.com
```
