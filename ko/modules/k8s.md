# Kubernetes

Apply manifests, describe resources, get pods, logs, and scale deployments.

**5 modules**

| Module | Description |
|--------|-------------|
| [매니페스트 적용](#매니페스트-적용) | kubectl apply를 통해 Kubernetes 매니페스트 적용 |
| [자원 설명](#자원-설명) | Kubernetes 자원을 상세히 설명 |
| [Pod 가져오기](#pod-가져오기) | 네임스페이스 내 Kubernetes pod 목록 |
| [Pod 로그 가져오기](#pod-로그-가져오기) | Kubernetes pod에서 로그 가져오기 |
| [배포 확장](#배포-확장) | 지정된 복제본 수로 Kubernetes 배포 확장 |

## Modules

### 매니페스트 적용

`k8s.apply`

kubectl apply를 통해 Kubernetes 매니페스트 적용

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `manifest` | string | Yes | - | Kubernetes manifest as YAML string or JSON object |
| `namespace` | string | No | - | Override namespace for the resource (optional) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `kind` | string | 자원 종류 (예: Deployment, Service) |
| `name` | string | 자원 이름 |
| `namespace` | string | 자원 네임스페이스 |
| `action` | string | 수행된 작업 (생성됨, 구성됨, 변경 없음) |

### 자원 설명

`k8s.describe`

Kubernetes 자원을 상세히 설명

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
| `resource_type` | string | 설명된 자원 유형 |
| `name` | string | 자원 이름 |
| `namespace` | string | Kubernetes 네임스페이스 |
| `description` | string | 전체 kubectl describe 출력 텍스트 |

### Pod 가져오기

`k8s.get_pods`

네임스페이스 내 Kubernetes pod 목록

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | No | `default` | Kubernetes namespace to list pods from |
| `label_selector` | string | No | - | Filter pods by label selector (e.g. app=nginx) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `pods` | array | 상태 정보가 포함된 pod 목록 |
| `count` | number | 발견된 pod의 총 수 |

### Pod 로그 가져오기

`k8s.logs`

Kubernetes pod에서 로그 가져오기

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
| `pod` | string | Pod 이름 |
| `logs` | string | 로그 출력 텍스트 |
| `lines` | number | 반환된 로그 줄 수 |

### 배포 확장

`k8s.scale`

지정된 복제본 수로 Kubernetes 배포 확장

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
| `deployment` | string | 배포 이름 |
| `replicas` | number | 요청된 복제본 수 |
| `namespace` | string | Kubernetes 네임스페이스 |
| `scaled` | boolean | 확장 작업이 성공했는지 여부 |
