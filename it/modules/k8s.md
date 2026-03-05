# Kubernetes

Apply manifests, describe resources, get pods, logs, and scale deployments.

**5 modules**

| Module | Description |
|--------|-------------|
| [Applica Manifesto](#applica-manifesto) | Applica un manifesto Kubernetes tramite kubectl apply |
| [Descrivi Risorsa](#descrivi-risorsa) | Descrivi in dettaglio una risorsa Kubernetes |
| [Ottieni Pod](#ottieni-pod) | Elenca i pod di Kubernetes in un namespace |
| [Ottieni Log Pod](#ottieni-log-pod) | Recupera i log da un pod di Kubernetes |
| [Scala Deployment](#scala-deployment) | Scala un deployment di Kubernetes a un numero specificato di repliche |

## Modules

### Applica Manifesto

`k8s.apply`

Applica un manifesto Kubernetes tramite kubectl apply

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `manifest` | string | Yes | - | Kubernetes manifest as YAML string or JSON object |
| `namespace` | string | No | - | Override namespace for the resource (optional) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `kind` | string | Tipo di risorsa (es. Deployment, Service) |
| `name` | string | Nome della risorsa |
| `namespace` | string | Namespace della risorsa |
| `action` | string | Azione intrapresa (creato, configurato, invariato) |

### Descrivi Risorsa

`k8s.describe`

Descrivi in dettaglio una risorsa Kubernetes

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
| `resource_type` | string | Tipo di risorsa descritta |
| `name` | string | Nome della risorsa |
| `namespace` | string | Namespace di Kubernetes |
| `description` | string | Testo completo dell'output di kubectl describe |

### Ottieni Pod

`k8s.get_pods`

Elenca i pod di Kubernetes in un namespace

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | No | `default` | Kubernetes namespace to list pods from |
| `label_selector` | string | No | - | Filter pods by label selector (e.g. app=nginx) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `pods` | array | Elenco dei pod con informazioni sullo stato |
| `count` | number | Numero totale di pod trovati |

### Ottieni Log Pod

`k8s.logs`

Recupera i log da un pod di Kubernetes

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
| `pod` | string | Nome del pod |
| `logs` | string | Testo dell'output del log |
| `lines` | number | Numero di righe di log restituite |

### Scala Deployment

`k8s.scale`

Scala un deployment di Kubernetes a un numero specificato di repliche

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
| `deployment` | string | Nome del deployment |
| `replicas` | number | Numero di repliche richieste |
| `namespace` | string | Namespace di Kubernetes |
| `scaled` | boolean | Se l'operazione di scala è riuscita |
