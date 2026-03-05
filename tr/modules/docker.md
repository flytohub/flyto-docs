# Docker

Build, run, inspect, and manage Docker containers.

**6 modules**

| Module | Description |
|--------|-------------|
| [Docker İmajı Oluştur](#docker-i̇majı-oluştur) | Bir Dockerfile'dan Docker imajı oluştur |
| [Docker Konteynerını İncele](#docker-konteynerını-i̇ncele) | Bir Docker konteyneri hakkında detaylı bilgi al |
| [Konteyner Loglarını Al](#konteyner-loglarını-al) | Docker konteynerinden logları al |
| [Docker Konteynerlerini Listele](#docker-konteynerlerini-listele) | Docker konteynerlerini listele |
| [Docker Konteynerı Çalıştır](#docker-konteynerı-çalıştır) | Bir imajdan Docker konteynerı çalıştır |
| [Docker Konteynerı Durdur](#docker-konteynerı-durdur) | Çalışan bir Docker konteynerını durdur |

## Modules

### Docker İmajı Oluştur

`docker.build`

Bir Dockerfile'dan Docker imajı oluştur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Oluşturma bağlamı dizinine giden yol |
| `tag` | string | Yes | - | İmajın adı ve isteğe bağlı olarak etiketi (ör. myapp:latest) |
| `dockerfile` | string | No | - | Dockerfile'a giden yol (oluşturma bağlamına göre) |
| `build_args` | object | No | - | Oluşturma zamanı değişkenleri (ör. {"NODE_ENV": "production"}) |
| `no_cache` | boolean | No | `False` | İmajı oluştururken önbellek kullanma |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `image_id` | string | Oluşturulan imajın ID'si |
| `tag` | string | İmaja uygulanan etiket |
| `size` | string | Oluşturulan imajın boyutu |

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

### Docker Konteynerını İncele

`docker.inspect_container`

Bir Docker konteyneri hakkında detaylı bilgi al

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | İncelenecek konteyner ID'si veya adı |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | Kısa konteyner ID'si |
| `name` | string | Konteyner adı |
| `state` | object | Konteyner durumu (durum, çalışıyor, pid, çıkış kodu, vb.) |
| `image` | string | Konteynerin kullandığı imaj |
| `network_settings` | object | Ağ yapılandırması (IP, portlar, ağlar) |
| `mounts` | array | Hacim ve bağlama noktaları |
| `config` | object | Konteyner yapılandırması (env, cmd, etiketler, vb.) |

**Example:** Inspect a container by name

```yaml
container: my-nginx
```

**Example:** Inspect a container by ID

```yaml
container: a1b2c3d4e5f6
```

### Konteyner Loglarını Al

`docker.logs`

Docker konteynerinden logları al

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | Konteyner ID veya adı |
| `tail` | number | No | `100` | Logların sonundan gösterilecek satır sayısı |
| `follow` | boolean | No | `False` | Log çıktısını takip et (zaman aşımına kadar akış) |
| `timestamps` | boolean | No | `False` | Log çıktısında zaman damgalarını göster |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `logs` | string | Konteyner log çıktısı |
| `lines` | number | Dönen log satır sayısı |

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

### Docker Konteynerlerini Listele

`docker.ps`

Docker konteynerlerini listele

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `all` | boolean | No | `False` | Tüm konteynerleri göster (varsayılan sadece çalışanları gösterir) |
| `filters` | object | No | - | Konteynerleri filtrele (örn. {"name": "my-app", "status": "running"}) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `containers` | array | ID, ad, imaj, durum, portlar ile konteyner listesi |
| `count` | number | Bulunan konteyner sayısı |

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

### Docker Konteynerı Çalıştır

`docker.run`

Bir imajdan Docker konteynerı çalıştır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | string | Yes | - | Çalıştırılacak Docker imajı (ör. nginx:latest) |
| `command` | string | No | - | Konteyner içinde çalıştırılacak komut |
| `name` | string | No | - | Konteynere bir ad ver |
| `ports` | object | No | - | Port eşlemeleri host:konteyner olarak (ör. {"8080": "80"}) |
| `volumes` | object | No | - | Hacim eşlemeleri host_yolu:konteyner_yolu olarak |
| `env` | object | No | - | Konteynerde ayarlanacak ortam değişkenleri |
| `detach` | boolean | No | `True` | Konteyneri arka planda çalıştır |
| `remove` | boolean | No | `False` | Konteyner çıktığında otomatik olarak sil |
| `network` | string | No | - | Konteyneri bir ağa bağla |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | Oluşturulan konteynerin ID'si |
| `status` | string | Çalıştırma sonrası konteyner durumu |

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

### Docker Konteynerı Durdur

`docker.stop`

Çalışan bir Docker konteynerını durdur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | Durdurulacak konteyner ID'si veya adı |
| `timeout` | number | No | `10` | Konteyneri öldürmeden önce bekleme süresi (saniye) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | Durdurulan konteynerin ID'si veya adı |
| `stopped` | boolean | Konteynerin başarıyla durdurulup durdurulmadığı |

**Example:** Stop a container by name

```yaml
container: my-nginx
```

**Example:** Stop with custom timeout

```yaml
container: my-app
timeout: 30
```
