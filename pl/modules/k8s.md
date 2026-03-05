# Kubernetes

Apply manifests, describe resources, get pods, logs, and scale deployments.

**5 modules**

| Module | Description |
|--------|-------------|
| [Zastosuj manifest](#zastosuj-manifest) | Zastosuj manifest Kubernetes za pomocą kubectl apply |
| [Opisz zasób](#opisz-zasób) | Szczegółowy opis zasobu Kubernetes |
| [Pobierz pody](#pobierz-pody) | Wyświetl listę podów Kubernetes w przestrzeni nazw |
| [Pobierz logi poda](#pobierz-logi-poda) | Pobierz logi z poda Kubernetes |
| [Skaluj wdrożenie](#skaluj-wdrożenie) | Skaluj wdrożenie Kubernetes do określonej liczby replik |

## Modules

### Zastosuj manifest

`k8s.apply`

Zastosuj manifest Kubernetes za pomocą kubectl apply

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `manifest` | string | Yes | - | Kubernetes manifest as YAML string or JSON object |
| `namespace` | string | No | - | Override namespace for the resource (optional) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `kind` | string | Rodzaj zasobu (np. Deployment, Service) |
| `name` | string | Nazwa zasobu |
| `namespace` | string | Przestrzeń nazw zasobu |
| `action` | string | Podjęta akcja (utworzono, skonfigurowano, bez zmian) |

### Opisz zasób

`k8s.describe`

Szczegółowy opis zasobu Kubernetes

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
| `resource_type` | string | Typ opisanego zasobu |
| `name` | string | Nazwa zasobu |
| `namespace` | string | Przestrzeń nazw Kubernetes |
| `description` | string | Pełny tekst wyjściowy kubectl describe |

### Pobierz pody

`k8s.get_pods`

Wyświetl listę podów Kubernetes w przestrzeni nazw

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | No | `default` | Kubernetes namespace to list pods from |
| `label_selector` | string | No | - | Filter pods by label selector (e.g. app=nginx) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `pods` | array | Lista podów z informacjami o statusie |
| `count` | number | Łączna liczba znalezionych podów |

### Pobierz logi poda

`k8s.logs`

Pobierz logi z poda Kubernetes

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
| `pod` | string | Nazwa poda |
| `logs` | string | Tekst wyjściowy logów |
| `lines` | number | Liczba zwróconych linii logów |

### Skaluj wdrożenie

`k8s.scale`

Skaluj wdrożenie Kubernetes do określonej liczby replik

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
| `deployment` | string | Nazwa wdrożenia |
| `replicas` | number | Żądana liczba replik |
| `namespace` | string | Przestrzeń nazw Kubernetes |
| `scaled` | boolean | Czy operacja skalowania się powiodła |
