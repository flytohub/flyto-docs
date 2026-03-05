# Kubernetes

Apply manifests, describe resources, get pods, logs, and scale deployments.

**5 modules**

| Module | Description |
|--------|-------------|
| [マニフェストを適用](#マニフェストを適用) | kubectl applyでKubernetesマニフェストを適用 |
| [リソースを説明](#リソースを説明) | Kubernetesリソースを詳細に説明 |
| [ポッドを取得](#ポッドを取得) | ネームスペース内のKubernetesポッドを一覧表示 |
| [ポッドログを取得](#ポッドログを取得) | Kubernetesポッドからログを取得 |
| [デプロイメントをスケール](#デプロイメントをスケール) | 指定されたレプリカ数にKubernetesデプロイメントをスケール |

## Modules

### マニフェストを適用

`k8s.apply`

kubectl applyでKubernetesマニフェストを適用

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `manifest` | string | Yes | - | Kubernetes manifest as YAML string or JSON object |
| `namespace` | string | No | - | Override namespace for the resource (optional) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `kind` | string | リソースの種類（例：Deployment, Service） |
| `name` | string | リソース名 |
| `namespace` | string | リソースのネームスペース |
| `action` | string | 実行されたアクション（作成, 設定, 変更なし） |

### リソースを説明

`k8s.describe`

Kubernetesリソースを詳細に説明

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
| `resource_type` | string | 説明されたリソースの種類 |
| `name` | string | リソース名 |
| `namespace` | string | Kubernetesネームスペース |
| `description` | string | kubectl describeの完全な出力テキスト |

### ポッドを取得

`k8s.get_pods`

ネームスペース内のKubernetesポッドを一覧表示

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | No | `default` | Kubernetes namespace to list pods from |
| `label_selector` | string | No | - | Filter pods by label selector (e.g. app=nginx) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `pods` | array | ステータス情報を含むポッドの一覧 |
| `count` | number | 見つかったポッドの総数 |

### ポッドログを取得

`k8s.logs`

Kubernetesポッドからログを取得

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
| `pod` | string | ポッド名 |
| `logs` | string | ログ出力テキスト |
| `lines` | number | 返されたログ行数 |

### デプロイメントをスケール

`k8s.scale`

指定されたレプリカ数にKubernetesデプロイメントをスケール

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
| `deployment` | string | デプロイメント名 |
| `replicas` | number | 要求されたレプリカ数 |
| `namespace` | string | Kubernetesネームスペース |
| `scaled` | boolean | スケール操作が成功したかどうか |
