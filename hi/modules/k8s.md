# Kubernetes

Apply manifests, describe resources, get pods, logs, and scale deployments.

**5 modules**

| Module | Description |
|--------|-------------|
| [मैनिफेस्ट लागू करें](#मैनिफेस्ट-लागू-करें) | kubectl apply के माध्यम से Kubernetes मैनिफेस्ट लागू करें |
| [संसाधन का वर्णन करें](#संसाधन-का-वर्णन-करें) | Kubernetes संसाधन का विस्तार से वर्णन करें |
| [पॉड्स प्राप्त करें](#पॉड्स-प्राप्त-करें) | एक नामस्थान में Kubernetes पॉड्स की सूची बनाएं |
| [पॉड लॉग्स प्राप्त करें](#पॉड-लॉग्स-प्राप्त-करें) | Kubernetes पॉड से लॉग्स प्राप्त करें |
| [डिप्लॉयमेंट स्केल करें](#डिप्लॉयमेंट-स्केल-करें) | Kubernetes डिप्लॉयमेंट को निर्दिष्ट प्रतिकृति संख्या तक स्केल करें |

## Modules

### मैनिफेस्ट लागू करें

`k8s.apply`

kubectl apply के माध्यम से Kubernetes मैनिफेस्ट लागू करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `manifest` | string | Yes | - | Kubernetes manifest as YAML string or JSON object |
| `namespace` | string | No | - | Override namespace for the resource (optional) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `kind` | string | संसाधन प्रकार (जैसे Deployment, Service) |
| `name` | string | संसाधन नाम |
| `namespace` | string | संसाधन नामस्थान |
| `action` | string | किया गया कार्य (बनाया गया, कॉन्फ़िगर किया गया, अपरिवर्तित) |

### संसाधन का वर्णन करें

`k8s.describe`

Kubernetes संसाधन का विस्तार से वर्णन करें

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
| `resource_type` | string | वर्णित संसाधन प्रकार |
| `name` | string | संसाधन नाम |
| `namespace` | string | Kubernetes नामस्थान |
| `description` | string | पूर्ण kubectl वर्णन आउटपुट पाठ |

### पॉड्स प्राप्त करें

`k8s.get_pods`

एक नामस्थान में Kubernetes पॉड्स की सूची बनाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `namespace` | string | No | `default` | Kubernetes namespace to list pods from |
| `label_selector` | string | No | - | Filter pods by label selector (e.g. app=nginx) |
| `kubeconfig` | string | No | - | Path to kubeconfig file (uses default if not set) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `pods` | array | स्थिति जानकारी के साथ पॉड्स की सूची |
| `count` | number | कुल पॉड्स की संख्या |

### पॉड लॉग्स प्राप्त करें

`k8s.logs`

Kubernetes पॉड से लॉग्स प्राप्त करें

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
| `pod` | string | पॉड नाम |
| `logs` | string | लॉग आउटपुट पाठ |
| `lines` | number | वापस किए गए लॉग लाइनों की संख्या |

### डिप्लॉयमेंट स्केल करें

`k8s.scale`

Kubernetes डिप्लॉयमेंट को निर्दिष्ट प्रतिकृति संख्या तक स्केल करें

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
| `deployment` | string | डिप्लॉयमेंट नाम |
| `replicas` | number | अनुरोधित प्रतिकृति संख्या |
| `namespace` | string | Kubernetes नामस्थान |
| `scaled` | boolean | क्या स्केल ऑपरेशन सफल रहा |
