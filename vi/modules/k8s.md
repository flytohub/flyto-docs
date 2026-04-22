# Kubernetes

Apply manifests, describe resources, get pods, logs, and scale deployments.

**5 modules**

| Module | Description |
|--------|-------------|
| [Apply Manifest](#apply-manifest) | Apply a Kubernetes manifest via kubectl apply |
| [Describe Resource](#describe-resource) | Describe a Kubernetes resource in detail |
| [Get Pods](#get-pods) | List Kubernetes pods in a namespace |
| [Get Pod Logs](#get-pod-logs) | Retrieve logs from a Kubernetes pod |
| [Scale Deployment](#scale-deployment) | Scale a Kubernetes deployment to a specified replica count |

## Modules

### Apply Manifest

`k8s.apply`

Apply a Kubernetes manifest via kubectl apply

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `manifest` | string | Yes | - | Kubernetes manifest as YAML string or JSON object |
| `namespace` | string | No | - | Override namespace for the resource (optional) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `kind` | string | Resource kind (e.g. Deployment, Service) |
| `name` | string | Resource name |
| `namespace` | string | Resource namespace |
| `action` | string | Action taken (created, configured, unchanged) |

### Describe Resource

`k8s.describe`

Describe a Kubernetes resource in detail

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
| `resource_type` | string | Resource type that was described |
| `name` | string | Resource name |
| `namespace` | string | Kubernetes namespace |
| `description` | string | Full kubectl describe output text |

### Get Pods

`k8s.get_pods`

List Kubernetes pods in a namespace

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | No | `default` | Kubernetes namespace to list pods from |
| `label_selector` | string | No | - | Filter pods by label selector (e.g. app=nginx) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `pods` | array | List of pods with status information |
| `count` | number | Total number of pods found |

### Get Pod Logs

`k8s.logs`

Retrieve logs from a Kubernetes pod

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
| `pod` | string | Pod name |
| `logs` | string | Log output text |
| `lines` | number | Number of log lines returned |

### Scale Deployment

`k8s.scale`

Scale a Kubernetes deployment to a specified replica count

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
| `deployment` | string | Deployment name |
| `replicas` | number | Requested replica count |
| `namespace` | string | Kubernetes namespace |
| `scaled` | boolean | Whether the scale operation succeeded |
