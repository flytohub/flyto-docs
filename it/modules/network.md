# Network

Ping, port scan, traceroute, and WHOIS lookup.

**4 modules**

| Module | Description |
|--------|-------------|
| [Ping](#ping) | Esegui un ping a un host per verificare la connettività e misurare la latenza |
| [Scansione Porte](#scansione-porte) | Scansiona le porte su un host per verificare quali sono aperte |
| [Traceroute](#traceroute) | Traccia il percorso che i pacchetti seguono per raggiungere un host di destinazione |
| [Ricerca WHOIS](#ricerca-whois) | Esegui una ricerca WHOIS per un dominio per ottenere informazioni di registrazione |

## Modules

### Ping

`network.ping`

Esegui un ping a un host per verificare la connettività e misurare la latenza

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nome host o indirizzo IP da pingare |
| `count` | number | No | `4` | Numero di pacchetti ping da inviare |
| `timeout` | number | No | `5` | Timeout in secondi per ogni pacchetto |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | L'host pingato |
| `alive` | boolean | Se l'host ha risposto |
| `packets_sent` | number | Numero di pacchetti inviati |
| `packets_received` | number | Numero di pacchetti ricevuti |
| `packet_loss_pct` | number | Percentuale di perdita pacchetti |
| `latency_ms` | object | Statistiche di latenza in millisecondi (min, media, max) |

**Example:** Ping a host

```yaml
host: google.com
count: 4
timeout: 5
```

### Scansione Porte

`network.port_scan`

Scansiona le porte su un host per verificare quali sono aperte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nome host o indirizzo IP da scansionare |
| `ports` | string | No | - | Porte da scansionare: separate da virgola (80,443), intervallo (80-443), o lasciare vuoto per porte comuni |
| `timeout` | number | No | `1.0` | Timeout di connessione in secondi per porta |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | L'host scansionato |
| `open_ports` | array | Elenco dei numeri di porta aperti |
| `closed_ports` | array | Elenco dei numeri di porta chiusi |
| `scan_time_ms` | number | Tempo totale di scansione in millisecondi |

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

Traccia il percorso che i pacchetti seguono per raggiungere un host di destinazione

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nome host o indirizzo IP per tracciare il percorso |
| `max_hops` | number | No | `30` | Numero massimo di salti da tracciare |
| `timeout` | number | No | `5` | Timeout in secondi per ogni sonda |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | L'host di destinazione |
| `hops` | array | Elenco dei salti lungo il percorso |
| `total_hops` | number | Numero totale di salti per raggiungere la destinazione |

**Example:** Trace route to host

```yaml
host: google.com
max_hops: 30
```

### Ricerca WHOIS

`network.whois`

Esegui una ricerca WHOIS per un dominio per ottenere informazioni di registrazione

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | Nome del dominio da cercare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `domain` | string | Il dominio interrogato |
| `registrar` | string | Registrar del dominio |
| `creation_date` | string | Data di creazione del dominio |
| `expiration_date` | string | Data di scadenza del dominio |
| `name_servers` | array | Elenco dei name server |
| `raw` | string | Risultato completo e grezzo del WHOIS |

**Example:** WHOIS lookup

```yaml
domain: example.com
```
