# Kubernetes

Apply manifests, describe resources, get pods, logs, and scale deployments.

**5 modules**

| Module | Description |
|--------|-------------|
| [套用清單](#套用清單) | 透過 kubectl apply 套用 Kubernetes 清單 |
| [描述資源](#描述資源) | 詳細描述 Kubernetes 資源 |
| [取得 Pods](#取得-pods) | 列出命名空間中的 Kubernetes pods |
| [取得 Pod 日誌](#取得-pod-日誌) | 從 Kubernetes pod 獲取日誌 |
| [調整部署](#調整部署) | 將 Kubernetes 部署調整到指定的副本數量 |

## Modules

### 套用清單

`k8s.apply`

透過 kubectl apply 套用 Kubernetes 清單

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `manifest` | string | Yes | - | Kubernetes manifest as YAML string or JSON object |
| `namespace` | string | No | - | Override namespace for the resource (optional) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `kind` | string | 資源類型（例如 Deployment, Service） |
| `name` | string | 資源名稱 |
| `namespace` | string | 資源命名空間 |
| `action` | string | 執行的動作（已建立, 已配置, 未變更） |

### 描述資源

`k8s.describe`

詳細描述 Kubernetes 資源

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
| `resource_type` | string | 被描述的資源類型 |
| `name` | string | 資源名稱 |
| `namespace` | string | Kubernetes 命名空間 |
| `description` | string | 完整的 kubectl describe 輸出文字 |

### 取得 Pods

`k8s.get_pods`

列出命名空間中的 Kubernetes pods

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | No | `default` | Kubernetes namespace to list pods from |
| `label_selector` | string | No | - | Filter pods by label selector (e.g. app=nginx) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `pods` | array | 包含狀態資訊的 pods 清單 |
| `count` | number | 找到的 pods 總數 |

### 取得 Pod 日誌

`k8s.logs`

從 Kubernetes pod 獲取日誌

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
| `pod` | string | Pod 名稱 |
| `logs` | string | 日誌輸出文字 |
| `lines` | number | 返回的日誌行數 |

### 調整部署

`k8s.scale`

將 Kubernetes 部署調整到指定的副本數量

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
| `deployment` | string | 部署名稱 |
| `replicas` | number | 請求的副本數量 |
| `namespace` | string | Kubernetes 命名空間 |
| `scaled` | boolean | 調整操作是否成功 |
