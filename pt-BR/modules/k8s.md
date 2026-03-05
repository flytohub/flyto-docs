# Kubernetes

Apply manifests, describe resources, get pods, logs, and scale deployments.

**5 modules**

| Module | Description |
|--------|-------------|
| [Aplicar Manifesto](#aplicar-manifesto) | Aplicar um manifesto Kubernetes via kubectl apply |
| [Descrever Recurso](#descrever-recurso) | Descrever um recurso Kubernetes em detalhe |
| [Obter Pods](#obter-pods) | Listar pods Kubernetes em um namespace |
| [Obter Logs do Pod](#obter-logs-do-pod) | Recuperar logs de um pod Kubernetes |
| [Escalar Deployment](#escalar-deployment) | Escalar um deployment Kubernetes para uma contagem de réplicas especificada |

## Modules

### Aplicar Manifesto

`k8s.apply`

Aplicar um manifesto Kubernetes via kubectl apply

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `manifest` | string | Yes | - | Kubernetes manifest as YAML string or JSON object |
| `namespace` | string | No | - | Override namespace for the resource (optional) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `kind` | string | Tipo de recurso (ex.: Deployment, Service) |
| `name` | string | Nome do recurso |
| `namespace` | string | Namespace do recurso |
| `action` | string | Ação tomada (criado, configurado, inalterado) |

### Descrever Recurso

`k8s.describe`

Descrever um recurso Kubernetes em detalhe

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
| `resource_type` | string | Tipo de recurso que foi descrito |
| `name` | string | Nome do recurso |
| `namespace` | string | Namespace do Kubernetes |
| `description` | string | Texto completo da saída do kubectl describe |

### Obter Pods

`k8s.get_pods`

Listar pods Kubernetes em um namespace

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | No | `default` | Kubernetes namespace to list pods from |
| `label_selector` | string | No | - | Filter pods by label selector (e.g. app=nginx) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `pods` | array | Lista de pods com informações de status |
| `count` | number | Número total de pods encontrados |

### Obter Logs do Pod

`k8s.logs`

Recuperar logs de um pod Kubernetes

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
| `pod` | string | Nome do pod |
| `logs` | string | Texto da saída do log |
| `lines` | number | Número de linhas de log retornadas |

### Escalar Deployment

`k8s.scale`

Escalar um deployment Kubernetes para uma contagem de réplicas especificada

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
| `deployment` | string | Nome do deployment |
| `replicas` | number | Contagem de réplicas solicitadas |
| `namespace` | string | Namespace do Kubernetes |
| `scaled` | boolean | Se a operação de escala foi bem-sucedida |
