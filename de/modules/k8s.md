# Kubernetes

Apply manifests, describe resources, get pods, logs, and scale deployments.

**5 modules**

| Module | Description |
|--------|-------------|
| [Manifest anwenden](#manifest-anwenden) | Ein Kubernetes-Manifest über kubectl apply anwenden |
| [Ressource beschreiben](#ressource-beschreiben) | Eine Kubernetes-Ressource im Detail beschreiben |
| [Pods abrufen](#pods-abrufen) | Kubernetes-Pods in einem Namespace auflisten |
| [Pod-Logs abrufen](#pod-logs-abrufen) | Logs von einem Kubernetes-Pod abrufen |
| [Deployment skalieren](#deployment-skalieren) | Ein Kubernetes-Deployment auf eine angegebene Replikazahl skalieren |

## Modules

### Manifest anwenden

`k8s.apply`

Ein Kubernetes-Manifest über kubectl apply anwenden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `manifest` | string | Yes | - | Kubernetes manifest as YAML string or JSON object |
| `namespace` | string | No | - | Override namespace for the resource (optional) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `kind` | string | Ressourcentyp (z.B. Deployment, Service) |
| `name` | string | Ressourcenname |
| `namespace` | string | Ressourcen-Namespace |
| `action` | string | Durchgeführte Aktion (erstellt, konfiguriert, unverändert) |

### Ressource beschreiben

`k8s.describe`

Eine Kubernetes-Ressource im Detail beschreiben

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
| `resource_type` | string | Beschriebener Ressourcentyp |
| `name` | string | Ressourcenname |
| `namespace` | string | Kubernetes-Namespace |
| `description` | string | Vollständiger kubectl describe Ausgabetext |

### Pods abrufen

`k8s.get_pods`

Kubernetes-Pods in einem Namespace auflisten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | No | `default` | Kubernetes namespace to list pods from |
| `label_selector` | string | No | - | Filter pods by label selector (e.g. app=nginx) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `pods` | array | Liste der Pods mit Statusinformationen |
| `count` | number | Gesamtanzahl der gefundenen Pods |

### Pod-Logs abrufen

`k8s.logs`

Logs von einem Kubernetes-Pod abrufen

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
| `pod` | string | Pod-Name |
| `logs` | string | Log-Ausgabetext |
| `lines` | number | Anzahl der zurückgegebenen Log-Zeilen |

### Deployment skalieren

`k8s.scale`

Ein Kubernetes-Deployment auf eine angegebene Replikazahl skalieren

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
| `deployment` | string | Name des Deployments |
| `replicas` | number | Angeforderte Replikazahl |
| `namespace` | string | Kubernetes-Namespace |
| `scaled` | boolean | Ob die Skalierungsoperation erfolgreich war |
