# Kubernetes

Apply manifests, describe resources, get pods, logs, and scale deployments.

**5 modules**

| Module | Description |
|--------|-------------|
| [Aplicar Manifest](#aplicar-manifest) | Aplica un manifiesto de Kubernetes usando kubectl apply |
| [Describir Recurso](#describir-recurso) | Describe un recurso de Kubernetes en detalle |
| [Obtener Pods](#obtener-pods) | Lista de pods de Kubernetes en un espacio de nombres |
| [Obtener Logs de Pod](#obtener-logs-de-pod) | Recupera logs de un pod de Kubernetes |
| [Escalar Deployment](#escalar-deployment) | Escala un deployment de Kubernetes a un número especificado de réplicas |

## Modules

### Aplicar Manifest

`k8s.apply`

Aplica un manifiesto de Kubernetes usando kubectl apply

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `manifest` | string | Yes | - | Kubernetes manifest as YAML string or JSON object |
| `namespace` | string | No | - | Override namespace for the resource (optional) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `kind` | string | Tipo de recurso (por ejemplo, Deployment, Service) |
| `name` | string | Nombre del recurso |
| `namespace` | string | Espacio de nombres del recurso |
| `action` | string | Acción realizada (creado, configurado, sin cambios) |

### Describir Recurso

`k8s.describe`

Describe un recurso de Kubernetes en detalle

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
| `resource_type` | string | Tipo de recurso que se describió |
| `name` | string | Nombre del recurso |
| `namespace` | string | Espacio de nombres de Kubernetes |
| `description` | string | Texto completo de salida de kubectl describe |

### Obtener Pods

`k8s.get_pods`

Lista de pods de Kubernetes en un espacio de nombres

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | No | `default` | Kubernetes namespace to list pods from |
| `label_selector` | string | No | - | Filter pods by label selector (e.g. app=nginx) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `pods` | array | Lista de pods con información de estado |
| `count` | number | Número total de pods encontrados |

### Obtener Logs de Pod

`k8s.logs`

Recupera logs de un pod de Kubernetes

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
| `pod` | string | Nombre del pod |
| `logs` | string | Texto de salida de logs |
| `lines` | number | Número de líneas de log devueltas |

### Escalar Deployment

`k8s.scale`

Escala un deployment de Kubernetes a un número especificado de réplicas

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
| `deployment` | string | Nombre del deployment |
| `replicas` | number | Número de réplicas solicitado |
| `namespace` | string | Espacio de nombres de Kubernetes |
| `scaled` | boolean | Si la operación de escalado tuvo éxito |
