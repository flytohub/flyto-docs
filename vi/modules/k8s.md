# Kubernetes

Apply manifests, describe resources, get pods, logs, and scale deployments.

**5 modules**

| Module | Description |
|--------|-------------|
| [Áp dụng Manifest](#áp-dụng-manifest) | Áp dụng một manifest Kubernetes qua kubectl apply |
| [Mô tả Tài nguyên](#mô-tả-tài-nguyên) | Mô tả chi tiết một tài nguyên Kubernetes |
| [Lấy Pods](#lấy-pods) | Liệt kê các pod Kubernetes trong một không gian tên |
| [Lấy Nhật ký Pod](#lấy-nhật-ký-pod) | Lấy nhật ký từ một pod Kubernetes |
| [Thay đổi quy mô Triển khai](#thay-đổi-quy-mô-triển-khai) | Thay đổi quy mô triển khai Kubernetes đến số lượng bản sao chỉ định |

## Modules

### Áp dụng Manifest

`k8s.apply`

Áp dụng một manifest Kubernetes qua kubectl apply

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `manifest` | string | Yes | - | Kubernetes manifest as YAML string or JSON object |
| `namespace` | string | No | - | Override namespace for the resource (optional) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `kind` | string | Loại tài nguyên (ví dụ: Triển khai, Dịch vụ) |
| `name` | string | Tên tài nguyên |
| `namespace` | string | Không gian tên tài nguyên |
| `action` | string | Hành động thực hiện (đã tạo, đã cấu hình, không thay đổi) |

### Mô tả Tài nguyên

`k8s.describe`

Mô tả chi tiết một tài nguyên Kubernetes

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
| `resource_type` | string | Loại tài nguyên đã được mô tả |
| `name` | string | Tên tài nguyên |
| `namespace` | string | Không gian tên Kubernetes |
| `description` | string | Văn bản đầu ra đầy đủ của kubectl describe |

### Lấy Pods

`k8s.get_pods`

Liệt kê các pod Kubernetes trong một không gian tên

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | No | `default` | Kubernetes namespace to list pods from |
| `label_selector` | string | No | - | Filter pods by label selector (e.g. app=nginx) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `pods` | array | Danh sách các pod với thông tin trạng thái |
| `count` | number | Tổng số pod được tìm thấy |

### Lấy Nhật ký Pod

`k8s.logs`

Lấy nhật ký từ một pod Kubernetes

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
| `pod` | string | Tên pod |
| `logs` | string | Văn bản đầu ra nhật ký |
| `lines` | number | Số dòng nhật ký được trả về |

### Thay đổi quy mô Triển khai

`k8s.scale`

Thay đổi quy mô triển khai Kubernetes đến số lượng bản sao chỉ định

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
| `deployment` | string | Tên triển khai |
| `replicas` | number | Số lượng bản sao yêu cầu |
| `namespace` | string | Không gian tên Kubernetes |
| `scaled` | boolean | Thao tác thay đổi quy mô có thành công hay không |
