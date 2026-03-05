# Docker

Build, run, inspect, and manage Docker containers.

**6 modules**

| Module | Description |
|--------|-------------|
| [Docker इमेज बनाएं](#docker-इमेज-बनाएं) | Dockerfile से एक Docker इमेज बनाएं |
| [Docker कंटेनर निरीक्षण करें](#docker-कंटेनर-निरीक्षण-करें) | Docker कंटेनर के बारे में विस्तृत जानकारी प्राप्त करें |
| [कंटेनर लॉग प्राप्त करें](#कंटेनर-लॉग-प्राप्त-करें) | Docker कंटेनर से लॉग प्राप्त करें |
| [Docker कंटेनर सूचीबद्ध करें](#docker-कंटेनर-सूचीबद्ध-करें) | Docker कंटेनर सूचीबद्ध करें |
| [Docker कंटेनर चलाएं](#docker-कंटेनर-चलाएं) | इमेज से एक Docker कंटेनर चलाएं |
| [Docker कंटेनर रोकें](#docker-कंटेनर-रोकें) | चल रहे Docker कंटेनर को रोकें |

## Modules

### Docker इमेज बनाएं

`docker.build`

Dockerfile से एक Docker इमेज बनाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | बिल्ड संदर्भ डायरेक्टरी का पथ |
| `tag` | string | Yes | - | इमेज का नाम और टैग (जैसे myapp:latest) |
| `dockerfile` | string | No | - | Dockerfile का पथ (बिल्ड संदर्भ के सापेक्ष) |
| `build_args` | object | No | - | बिल्ड-टाइम वेरिएबल्स (जैसे {"NODE_ENV": "production"}) |
| `no_cache` | boolean | No | `False` | इमेज बनाते समय कैश का उपयोग न करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `image_id` | string | बनी हुई इमेज की ID |
| `tag` | string | इमेज पर लगाया गया टैग |
| `size` | string | बनी हुई इमेज का आकार |

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

### Docker कंटेनर निरीक्षण करें

`docker.inspect_container`

Docker कंटेनर के बारे में विस्तृत जानकारी प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | निरीक्षण के लिए कंटेनर ID या नाम |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | संक्षिप्त कंटेनर ID |
| `name` | string | कंटेनर का नाम |
| `state` | object | कंटेनर की स्थिति (स्थिति, चल रहा है, pid, exit_code, आदि) |
| `image` | string | कंटेनर द्वारा उपयोग की गई इमेज |
| `network_settings` | object | नेटवर्क कॉन्फ़िगरेशन (IP, पोर्ट्स, नेटवर्क्स) |
| `mounts` | array | वॉल्यूम और बाइंड माउंट्स |
| `config` | object | कंटेनर कॉन्फ़िगरेशन (env, cmd, लेबल, आदि) |

**Example:** Inspect a container by name

```yaml
container: my-nginx
```

**Example:** Inspect a container by ID

```yaml
container: a1b2c3d4e5f6
```

### कंटेनर लॉग प्राप्त करें

`docker.logs`

Docker कंटेनर से लॉग प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | कंटेनर ID या नाम |
| `tail` | number | No | `100` | लॉग के अंत से दिखाने के लिए लाइनों की संख्या |
| `follow` | boolean | No | `False` | लॉग आउटपुट का अनुसरण करें (टाइमआउट तक स्ट्रीम करता है) |
| `timestamps` | boolean | No | `False` | लॉग आउटपुट में टाइमस्टैम्प दिखाएं |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `logs` | string | कंटेनर लॉग आउटपुट |
| `lines` | number | वापस की गई लॉग लाइनों की संख्या |

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

### Docker कंटेनर सूचीबद्ध करें

`docker.ps`

Docker कंटेनर सूचीबद्ध करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `all` | boolean | No | `False` | सभी कंटेनर दिखाएं (डिफ़ॉल्ट रूप से केवल चल रहे दिखाता है) |
| `filters` | object | No | - | कंटेनर फिल्टर करें (जैसे {"name": "my-app", "status": "running"}) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `containers` | array | कंटेनरों की सूची जिसमें id, नाम, इमेज, स्थिति, पोर्ट्स शामिल हैं |
| `count` | number | पाए गए कंटेनरों की संख्या |

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

### Docker कंटेनर चलाएं

`docker.run`

इमेज से एक Docker कंटेनर चलाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | string | Yes | - | चलाने के लिए Docker इमेज (जैसे nginx:latest) |
| `command` | string | No | - | कंटेनर के अंदर चलाने के लिए कमांड |
| `name` | string | No | - | कंटेनर को एक नाम दें |
| `ports` | object | No | - | पोर्ट मैपिंग्स होस्ट:कंटेनर के रूप में (जैसे {"8080": "80"}) |
| `volumes` | object | No | - | वॉल्यूम मैपिंग्स होस्ट_पथ:कंटेनर_पथ के रूप में |
| `env` | object | No | - | कंटेनर में सेट करने के लिए पर्यावरण वेरिएबल्स |
| `detach` | boolean | No | `True` | कंटेनर को बैकग्राउंड में चलाएं |
| `remove` | boolean | No | `False` | कंटेनर के बाहर निकलने पर उसे स्वचालित रूप से हटा दें |
| `network` | string | No | - | कंटेनर को एक नेटवर्क से जोड़ें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | बने हुए कंटेनर की ID |
| `status` | string | चलाने के बाद कंटेनर की स्थिति |

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

### Docker कंटेनर रोकें

`docker.stop`

चल रहे Docker कंटेनर को रोकें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | रोकने के लिए कंटेनर ID या नाम |
| `timeout` | number | No | `10` | कंटेनर को मारने से पहले सेकंड में प्रतीक्षा करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | रोके गए कंटेनर की ID या नाम |
| `stopped` | boolean | क्या कंटेनर सफलतापूर्वक रोका गया था |

**Example:** Stop a container by name

```yaml
container: my-nginx
```

**Example:** Stop with custom timeout

```yaml
container: my-app
timeout: 30
```
