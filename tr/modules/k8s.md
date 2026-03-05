# Kubernetes

Apply manifests, describe resources, get pods, logs, and scale deployments.

**5 modules**

| Module | Description |
|--------|-------------|
| [Manifest Uygula](#manifest-uygula) | kubectl apply ile bir Kubernetes manifesti uygula |
| [Kaynağı Tanımla](#kaynağı-tanımla) | Bir Kubernetes kaynağını detaylı olarak tanımla |
| [Podları Al](#podları-al) | Bir namespace içindeki Kubernetes podlarını listele |
| [Pod Loglarını Al](#pod-loglarını-al) | Bir Kubernetes podundan logları al |
| [Dağıtımı Ölçeklendir](#dağıtımı-ölçeklendir) | Bir Kubernetes dağıtımını belirtilen kopya sayısına ölçeklendir |

## Modules

### Manifest Uygula

`k8s.apply`

kubectl apply ile bir Kubernetes manifesti uygula

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `manifest` | string | Yes | - | Kubernetes manifest as YAML string or JSON object |
| `namespace` | string | No | - | Override namespace for the resource (optional) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `kind` | string | Kaynak türü (ör. Deployment, Service) |
| `name` | string | Kaynak adı |
| `namespace` | string | Kaynak namespace |
| `action` | string | Yapılan işlem (oluşturuldu, yapılandırıldı, değişmedi) |

### Kaynağı Tanımla

`k8s.describe`

Bir Kubernetes kaynağını detaylı olarak tanımla

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
| `resource_type` | string | Tanımlanan kaynak türü |
| `name` | string | Kaynak adı |
| `namespace` | string | Kubernetes namespace |
| `description` | string | Tam kubectl describe çıktı metni |

### Podları Al

`k8s.get_pods`

Bir namespace içindeki Kubernetes podlarını listele

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | No | `default` | Kubernetes namespace to list pods from |
| `label_selector` | string | No | - | Filter pods by label selector (e.g. app=nginx) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `pods` | array | Durum bilgisi ile pod listesi |
| `count` | number | Bulunan toplam pod sayısı |

### Pod Loglarını Al

`k8s.logs`

Bir Kubernetes podundan logları al

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
| `pod` | string | Pod adı |
| `logs` | string | Log çıktı metni |
| `lines` | number | Dönen log satır sayısı |

### Dağıtımı Ölçeklendir

`k8s.scale`

Bir Kubernetes dağıtımını belirtilen kopya sayısına ölçeklendir

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
| `deployment` | string | Dağıtım adı |
| `replicas` | number | İstenen kopya sayısı |
| `namespace` | string | Kubernetes namespace |
| `scaled` | boolean | Ölçeklendirme işleminin başarılı olup olmadığı |
