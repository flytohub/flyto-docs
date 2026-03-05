# Network

Ping, port scan, traceroute, and WHOIS lookup.

**4 modules**

| Module | Description |
|--------|-------------|
| [Ping](#ping) | Pinger un hôte pour vérifier la connectivité et mesurer la latence |
| [Analyse de ports](#analyse-de-ports) | Scanner les ports d'un hôte pour vérifier lesquels sont ouverts |
| [Traceroute](#traceroute) | Tracer le chemin des paquets pour atteindre un hôte de destination |
| [Recherche WHOIS](#recherche-whois) | Effectuer une recherche WHOIS pour un domaine afin d'obtenir des informations d'enregistrement |

## Modules

### Ping

`network.ping`

Pinger un hôte pour vérifier la connectivité et mesurer la latence

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nom d'hôte ou adresse IP à pinger |
| `count` | number | No | `4` | Nombre de paquets de ping à envoyer |
| `timeout` | number | No | `5` | Délai d'attente en secondes pour chaque paquet |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | L'hôte pingé |
| `alive` | boolean | Si l'hôte a répondu |
| `packets_sent` | number | Nombre de paquets envoyés |
| `packets_received` | number | Nombre de paquets reçus |
| `packet_loss_pct` | number | Pourcentage de perte de paquets |
| `latency_ms` | object | Statistiques de latence en millisecondes (min, moy, max) |

**Example:** Ping a host

```yaml
host: google.com
count: 4
timeout: 5
```

### Analyse de ports

`network.port_scan`

Scanner les ports d'un hôte pour vérifier lesquels sont ouverts

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nom d'hôte ou adresse IP à scanner |
| `ports` | string | No | - | Ports à scanner : séparés par des virgules (80,443), plage (80-443), ou laisser vide pour les ports courants |
| `timeout` | number | No | `1.0` | Délai d'attente de connexion en secondes par port |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | L'hôte scanné |
| `open_ports` | array | Liste des numéros de ports ouverts |
| `closed_ports` | array | Liste des numéros de ports fermés |
| `scan_time_ms` | number | Temps total de scan en millisecondes |

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

Tracer le chemin des paquets pour atteindre un hôte de destination

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `host` | string | Yes | - | Nom d'hôte ou adresse IP pour tracer le chemin |
| `max_hops` | number | No | `30` | Nombre maximum de sauts à tracer |
| `timeout` | number | No | `5` | Délai d'attente en secondes pour chaque sonde |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `host` | string | L'hôte cible |
| `hops` | array | Liste des sauts le long du chemin |
| `total_hops` | number | Nombre total de sauts pour atteindre la destination |

**Example:** Trace route to host

```yaml
host: google.com
max_hops: 30
```

### Recherche WHOIS

`network.whois`

Effectuer une recherche WHOIS pour un domaine afin d'obtenir des informations d'enregistrement

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `domain` | string | Yes | - | Nom de domaine à rechercher |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `domain` | string | Le domaine interrogé |
| `registrar` | string | Registraire du domaine |
| `creation_date` | string | Date de création du domaine |
| `expiration_date` | string | Date d'expiration du domaine |
| `name_servers` | array | Liste des serveurs de noms |
| `raw` | string | Sortie brute complète WHOIS |

**Example:** WHOIS lookup

```yaml
domain: example.com
```
