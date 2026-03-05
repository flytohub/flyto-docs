# Docker

Build, run, inspect, and manage Docker containers.

**6 modules**

| Module | Description |
|--------|-------------|
| [Bangun Gambar Docker](#bangun-gambar-docker) | Bangun gambar Docker dari Dockerfile |
| [Periksa Kontainer Docker](#periksa-kontainer-docker) | Dapatkan informasi detail tentang kontainer Docker |
| [Dapatkan Log Container](#dapatkan-log-container) | Dapatkan log dari container Docker |
| [Daftar Container Docker](#daftar-container-docker) | Daftar container Docker |
| [Jalankan Kontainer Docker](#jalankan-kontainer-docker) | Jalankan kontainer Docker dari gambar |
| [Hentikan Kontainer Docker](#hentikan-kontainer-docker) | Hentikan kontainer Docker yang sedang berjalan |

## Modules

### Bangun Gambar Docker

`docker.build`

Bangun gambar Docker dari Dockerfile

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path ke direktori konteks build |
| `tag` | string | Yes | - | Nama dan opsional tag gambar (mis. myapp:latest) |
| `dockerfile` | string | No | - | Path ke Dockerfile (relatif terhadap konteks build) |
| `build_args` | object | No | - | Variabel waktu build (mis. {"NODE_ENV": "production"}) |
| `no_cache` | boolean | No | `False` | Jangan gunakan cache saat membangun gambar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `image_id` | string | ID gambar yang dibangun |
| `tag` | string | Tag yang diterapkan pada gambar |
| `size` | string | Ukuran gambar yang dibangun |

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

### Periksa Kontainer Docker

`docker.inspect_container`

Dapatkan informasi detail tentang kontainer Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID atau nama kontainer untuk diperiksa |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | ID kontainer pendek |
| `name` | string | Nama Container |
| `state` | object | Status Container (status, berjalan, pid, exit_code, dll.) |
| `image` | string | Image yang digunakan oleh container |
| `network_settings` | object | Konfigurasi jaringan (IP, port, jaringan) |
| `mounts` | array | Volume dan bind mounts |
| `config` | object | Konfigurasi container (env, cmd, label, dll.) |

**Example:** Inspect a container by name

```yaml
container: my-nginx
```

**Example:** Inspect a container by ID

```yaml
container: a1b2c3d4e5f6
```

### Dapatkan Log Container

`docker.logs`

Dapatkan log dari container Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID atau nama Container |
| `tail` | number | No | `100` | Jumlah baris yang ditampilkan dari akhir log |
| `follow` | boolean | No | `False` | Ikuti keluaran log (streaming hingga timeout) |
| `timestamps` | boolean | No | `False` | Tampilkan timestamp dalam keluaran log |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `logs` | string | Keluaran log container |
| `lines` | number | Jumlah baris log yang dikembalikan |

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

### Daftar Container Docker

`docker.ps`

Daftar container Docker

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `all` | boolean | No | `False` | Tampilkan semua container (default hanya yang berjalan) |
| `filters` | object | No | - | Filter container (mis. {"name": "my-app", "status": "running"}) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `containers` | array | Daftar container dengan id, nama, image, status, port |
| `count` | number | Jumlah container yang ditemukan |

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

### Jalankan Kontainer Docker

`docker.run`

Jalankan kontainer Docker dari gambar

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | string | Yes | - | Gambar Docker yang akan dijalankan (mis. nginx:latest) |
| `command` | string | No | - | Perintah untuk dijalankan di dalam kontainer |
| `name` | string | No | - | Beri nama pada kontainer |
| `ports` | object | No | - | Pemetaan port sebagai host:kontainer (mis. {"8080": "80"}) |
| `volumes` | object | No | - | Pemetaan volume sebagai host_path:container_path |
| `env` | object | No | - | Variabel lingkungan untuk diatur di dalam kontainer |
| `detach` | boolean | No | `True` | Jalankan kontainer di latar belakang |
| `remove` | boolean | No | `False` | Hapus kontainer secara otomatis saat keluar |
| `network` | string | No | - | Hubungkan kontainer ke jaringan |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | ID kontainer yang dibuat |
| `status` | string | Status kontainer setelah dijalankan |

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

### Hentikan Kontainer Docker

`docker.stop`

Hentikan kontainer Docker yang sedang berjalan

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | ID atau nama kontainer untuk dihentikan |
| `timeout` | number | No | `10` | Detik untuk menunggu sebelum mematikan kontainer |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | ID atau nama kontainer yang dihentikan |
| `stopped` | boolean | Apakah kontainer berhasil dihentikan |

**Example:** Stop a container by name

```yaml
container: my-nginx
```

**Example:** Stop with custom timeout

```yaml
container: my-app
timeout: 30
```
