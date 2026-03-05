# Kubernetes

Apply manifests, describe resources, get pods, logs, and scale deployments.

**5 modules**

| Module | Description |
|--------|-------------|
| [ใช้ Manifest](#ใช้-manifest) | ใช้ Kubernetes manifest ผ่าน kubectl apply |
| [อธิบายทรัพยากร](#อธิบายทรัพยากร) | อธิบายทรัพยากร Kubernetes อย่างละเอียด |
| [รับ Pods](#รับ-pods) | แสดงรายการ Kubernetes pods ใน namespace |
| [รับบันทึก Pod](#รับบันทึก-pod) | ดึงบันทึกจาก Kubernetes pod |
| [ปรับขนาด Deployment](#ปรับขนาด-deployment) | ปรับขนาด Kubernetes deployment ไปยังจำนวน replicas ที่ระบุ |

## Modules

### ใช้ Manifest

`k8s.apply`

ใช้ Kubernetes manifest ผ่าน kubectl apply

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `manifest` | string | Yes | - | Kubernetes manifest as YAML string or JSON object |
| `namespace` | string | No | - | Override namespace for the resource (optional) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `kind` | string | ประเภททรัพยากร (เช่น Deployment, Service) |
| `name` | string | ชื่อทรัพยากร |
| `namespace` | string | Namespace ของทรัพยากร |
| `action` | string | การกระทำที่ดำเนินการ (สร้าง, ตั้งค่า, ไม่เปลี่ยนแปลง) |

### อธิบายทรัพยากร

`k8s.describe`

อธิบายทรัพยากร Kubernetes อย่างละเอียด

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
| `resource_type` | string | ประเภททรัพยากรที่อธิบาย |
| `name` | string | ชื่อทรัพยากร |
| `namespace` | string | Namespace ของ Kubernetes |
| `description` | string | ข้อความผลลัพธ์เต็มของ kubectl describe |

### รับ Pods

`k8s.get_pods`

แสดงรายการ Kubernetes pods ใน namespace

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | No | `default` | Kubernetes namespace to list pods from |
| `label_selector` | string | No | - | Filter pods by label selector (e.g. app=nginx) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `pods` | array | รายการ pods พร้อมข้อมูลสถานะ |
| `count` | number | จำนวนรวมของ pods ที่พบ |

### รับบันทึก Pod

`k8s.logs`

ดึงบันทึกจาก Kubernetes pod

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
| `pod` | string | ชื่อ Pod |
| `logs` | string | ข้อความผลลัพธ์บันทึก |
| `lines` | number | จำนวนบรรทัดบันทึกที่คืนค่า |

### ปรับขนาด Deployment

`k8s.scale`

ปรับขนาด Kubernetes deployment ไปยังจำนวน replicas ที่ระบุ

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
| `deployment` | string | ชื่อ Deployment |
| `replicas` | number | จำนวน replicas ที่ร้องขอ |
| `namespace` | string | Namespace ของ Kubernetes |
| `scaled` | boolean | การดำเนินการปรับขนาดสำเร็จหรือไม่ |
