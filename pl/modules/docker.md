# Docker

Build, run, inspect, and manage Docker containers.

**6 modules**

| Module | Description |
|--------|-------------|
| [Zbuduj obraz Dockera](#zbuduj-obraz-dockera) | Zbuduj obraz Dockera z pliku Dockerfile |
| [Sprawdź kontener Dockera](#sprawdź-kontener-dockera) | Uzyskaj szczegółowe informacje o kontenerze Dockera |
| [Pobierz logi kontenera](#pobierz-logi-kontenera) | Pobierz logi z kontenera Docker |
| [Lista kontenerów Docker](#lista-kontenerów-docker) | Lista kontenerów Docker |
| [Uruchom kontener Dockera](#uruchom-kontener-dockera) | Uruchom kontener Dockera z obrazu |
| [Zatrzymaj kontener Dockera](#zatrzymaj-kontener-dockera) | Zatrzymaj działający kontener Dockera |

## Modules

### Zbuduj obraz Dockera

`docker.build`

Zbuduj obraz Dockera z pliku Dockerfile

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Ścieżka do katalogu kontekstu budowy |
| `tag` | string | Yes | - | Nazwa i opcjonalnie tag obrazu (np. myapp:latest) |
| `dockerfile` | string | No | - | Ścieżka do pliku Dockerfile (względem kontekstu budowy) |
| `build_args` | object | No | - | Zmienne czasu budowy (np. {"NODE_ENV": "production"}) |
| `no_cache` | boolean | No | `False` | Nie używaj pamięci podręcznej podczas budowy obrazu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `image_id` | string | ID zbudowanego obrazu |
| `tag` | string | Tag przypisany do obrazu |
| `size` | string | Rozmiar zbudowanego obrazu |

**Example:** Build from current directory

```yaml
path: .
tag: myapp:latest
```

**Example:** Build with custom Dockerfile and args

```yaml
path: ./backend
tag: myapi:v1.0
dockerfile: Dockerfile.prod
build_args: {"NODE_ENV": "production"}
no_cache: true
```

### Sprawdź kontener Dockera

`docker.inspect_container`

Uzyskaj szczegółowe informacje o kontenerze Dockera

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID lub nazwa kontenera do sprawdzenia |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Krótki ID kontenera |
| `name` | string | Nazwa kontenera |
| `state` | object | Stan kontenera (status, uruchomiony, pid, kod wyjścia, itp.) |
| `image` | string | Obraz używany przez kontener |
| `network_settings` | object | Konfiguracja sieci (IP, porty, sieci) |
| `mounts` | array | Wolumeny i punkty montowania |
| `config` | object | Konfiguracja kontenera (env, cmd, etykiety, itp.) |

**Example:** Inspect a container by name

```yaml
container: my-nginx
```

**Example:** Inspect a container by ID

```yaml
container: a1b2c3d4e5f6
```

### Pobierz logi kontenera

`docker.logs`

Pobierz logi z kontenera Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID lub nazwa kontenera |
| `tail` | number | No | `100` | Liczba linii do pokazania od końca logów |
| `follow` | boolean | No | `False` | Śledź wyjście logów (strumień do czasu wygaśnięcia) |
| `timestamps` | boolean | No | `False` | Pokaż znaczniki czasu w wyjściu logów |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `logs` | string | Wyjście logów kontenera |
| `lines` | number | Liczba zwróconych linii logów |

**Example:** Get last 50 lines

```yaml
container: my-nginx
tail: 50
```

**Example:** Get logs with timestamps

```yaml
container: my-app
tail: 100
timestamps: true
```

### Lista kontenerów Docker

`docker.ps`

Lista kontenerów Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `all` | boolean | No | `False` | Pokaż wszystkie kontenery (domyślnie pokazuje tylko uruchomione) |
| `filters` | object | No | - | Filtruj kontenery (np. {"name": "my-app", "status": "running"}) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `containers` | array | Lista kontenerów z id, nazwą, obrazem, statusem, portami |
| `count` | number | Liczba znalezionych kontenerów |

**Example:** List running containers

```yaml
```

**Example:** List all containers

```yaml
all: true
```

**Example:** Filter by name

```yaml
filters: {"name": "nginx"}
```

### Uruchom kontener Dockera

`docker.run`

Uruchom kontener Dockera z obrazu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | string | Yes | - | Obraz Dockera do uruchomienia (np. nginx:latest) |
| `command` | string | No | - | Polecenie do uruchomienia wewnątrz kontenera |
| `name` | string | No | - | Przypisz nazwę kontenerowi |
| `ports` | object | No | - | Mapowanie portów jako host:kontener (np. {"8080": "80"}) |
| `volumes` | object | No | - | Mapowanie woluminów jako ścieżka_hosta:ścieżka_kontenera |
| `env` | object | No | - | Zmienne środowiskowe do ustawienia w kontenerze |
| `detach` | boolean | No | `True` | Uruchom kontener w tle |
| `remove` | boolean | No | `False` | Automatycznie usuń kontener po jego zakończeniu |
| `network` | string | No | - | Podłącz kontener do sieci |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | ID utworzonego kontenera |
| `status` | string | Status kontenera po uruchomieniu |

**Example:** Run Nginx web server

```yaml
image: nginx:latest
name: my-nginx
ports: {"8080": "80"}
detach: true
```

**Example:** Run a one-off command

```yaml
image: alpine:latest
command: echo hello world
remove: true
detach: false
```

### Zatrzymaj kontener Dockera

`docker.stop`

Zatrzymaj działający kontener Dockera

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID lub nazwa kontenera do zatrzymania |
| `timeout` | number | No | `10` | Sekundy oczekiwania przed zabiciem kontenera |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | ID lub nazwa zatrzymanego kontenera |
| `stopped` | boolean | Czy kontener został pomyślnie zatrzymany |

**Example:** Stop a container by name

```yaml
container: my-nginx
```

**Example:** Stop with custom timeout

```yaml
container: my-app
timeout: 30
```
