# Kubernetes

Apply manifests, describe resources, get pods, logs, and scale deployments.

**5 modules**

| Module | Description |
|--------|-------------|
| [Appliquer le Manifeste](#appliquer-le-manifeste) | Appliquer un manifeste Kubernetes via kubectl apply |
| [Décrire la Ressource](#décrire-la-ressource) | Décrire en détail une ressource Kubernetes |
| [Obtenir les Pods](#obtenir-les-pods) | Lister les pods Kubernetes dans un espace de noms |
| [Obtenir les Logs du Pod](#obtenir-les-logs-du-pod) | Récupérer les logs d'un pod Kubernetes |
| [Ajuster le Déploiement](#ajuster-le-déploiement) | Ajuster un déploiement Kubernetes à un nombre de répliques spécifié |

## Modules

### Appliquer le Manifeste

`k8s.apply`

Appliquer un manifeste Kubernetes via kubectl apply

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `manifest` | string | Yes | - | Kubernetes manifest as YAML string or JSON object |
| `namespace` | string | No | - | Override namespace for the resource (optional) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `kind` | string | Type de ressource (par ex. Deployment, Service) |
| `name` | string | Nom de la ressource |
| `namespace` | string | Espace de noms de la ressource |
| `action` | string | Action effectuée (créé, configuré, inchangé) |

### Décrire la Ressource

`k8s.describe`

Décrire en détail une ressource Kubernetes

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
| `resource_type` | string | Type de ressource décrite |
| `name` | string | Nom de la ressource |
| `namespace` | string | Espace de noms Kubernetes |
| `description` | string | Texte complet de la sortie kubectl describe |

### Obtenir les Pods

`k8s.get_pods`

Lister les pods Kubernetes dans un espace de noms

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | No | `default` | Kubernetes namespace to list pods from |
| `label_selector` | string | No | - | Filter pods by label selector (e.g. app=nginx) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `pods` | array | Liste des pods avec information de statut |
| `count` | number | Nombre total de pods trouvés |

### Obtenir les Logs du Pod

`k8s.logs`

Récupérer les logs d'un pod Kubernetes

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
| `pod` | string | Nom du pod |
| `logs` | string | Texte de la sortie des logs |
| `lines` | number | Nombre de lignes de logs retournées |

### Ajuster le Déploiement

`k8s.scale`

Ajuster un déploiement Kubernetes à un nombre de répliques spécifié

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
| `deployment` | string | Nom du déploiement |
| `replicas` | number | Nombre de répliques demandé |
| `namespace` | string | Espace de noms Kubernetes |
| `scaled` | boolean | Si l'opération d'ajustement a réussi |
