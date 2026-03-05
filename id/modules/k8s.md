# Kubernetes

Apply manifests, describe resources, get pods, logs, and scale deployments.

**5 modules**

| Module | Description |
|--------|-------------|
| [Terapkan Manifest](#terapkan-manifest) | Terapkan manifest Kubernetes melalui kubectl apply |
| [Deskripsikan Sumber Daya](#deskripsikan-sumber-daya) | Deskripsikan sumber daya Kubernetes secara detail |
| [Dapatkan Pod](#dapatkan-pod) | Daftar pod Kubernetes dalam sebuah namespace |
| [Dapatkan Log Pod](#dapatkan-log-pod) | Ambil log dari pod Kubernetes |
| [Skala Deployment](#skala-deployment) | Skala deployment Kubernetes ke jumlah replika yang ditentukan |

## Modules

### Terapkan Manifest

`k8s.apply`

Terapkan manifest Kubernetes melalui kubectl apply

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `manifest` | string | Yes | - | Kubernetes manifest as YAML string or JSON object |
| `namespace` | string | No | - | Override namespace for the resource (optional) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `kind` | string | Jenis sumber daya (mis. Deployment, Service) |
| `name` | string | Nama sumber daya |
| `namespace` | string | Namespace sumber daya |
| `action` | string | Tindakan yang diambil (dibuat, dikonfigurasi, tidak berubah) |

### Deskripsikan Sumber Daya

`k8s.describe`

Deskripsikan sumber daya Kubernetes secara detail

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `resource_type` | string | Yes | - | Kubernetes resource type (e.g. pod, deployment, service) |
| `name` | string | Yes | - | Name of the resource to describe |
| `namespace` | string | No | `default` | Kubernetes namespace (ignored for cluster-scoped resources) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `resource_type` | string | Jenis sumber daya yang dideskripsikan |
| `name` | string | Nama sumber daya |
| `namespace` | string | Namespace Kubernetes |
| `description` | string | Teks keluaran lengkap kubectl describe |

### Dapatkan Pod

`k8s.get_pods`

Daftar pod Kubernetes dalam sebuah namespace

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | No | `default` | Kubernetes namespace to list pods from |
| `label_selector` | string | No | - | Filter pods by label selector (e.g. app=nginx) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `pods` | array | Daftar pod dengan informasi status |
| `count` | number | Jumlah total pod yang ditemukan |

### Dapatkan Log Pod

`k8s.logs`

Ambil log dari pod Kubernetes

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `pod` | string | Yes | - | Name of the pod to retrieve logs from |
| `namespace` | string | No | `default` | Kubernetes namespace |
| `container` | string | No | - | Specific container name (for multi-container pods) |
| `tail` | number | No | `100` | Number of recent log lines to retrieve |
| `previous` | boolean | No | `False` | Get logs from the previous terminated container instance |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `pod` | string | Nama pod |
| `logs` | string | Teks keluaran log |
| `lines` | number | Jumlah baris log yang dikembalikan |

### Skala Deployment

`k8s.scale`

Skala deployment Kubernetes ke jumlah replika yang ditentukan

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `deployment` | string | Yes | - | Name of the deployment to scale |
| `replicas` | number | Yes | - | Desired number of replicas |
| `namespace` | string | No | `default` | Kubernetes namespace |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `deployment` | string | Nama deployment |
| `replicas` | number | Jumlah replika yang diminta |
| `namespace` | string | Namespace Kubernetes |
| `scaled` | boolean | Apakah operasi skala berhasil |
