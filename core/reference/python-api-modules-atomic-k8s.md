<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Kubernetes

Source-backed signatures for **17 declarations** across **5 files** in the modules: atomic / kubernetes area.

## `src/core/modules/atomic/k8s/apply.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _to_yaml_string(manifest: Any) -> str` | Convert a manifest (dict or string) to a YAML string suitable for kubectl. | [`src/core/modules/atomic/k8s/apply.py:24`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/k8s/apply.py#L24) |
| function | `def _parse_apply_output(output: str) -> Dict&#91;str, Any&#93;` | Parse the JSON output from kubectl apply to extract action details. | [`src/core/modules/atomic/k8s/apply.py:43`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/k8s/apply.py#L43) |
| function | `def _write_manifest_to_tempfile(manifest_str: str)` | Write manifest string to a temp file, returning (fd, path). | [`src/core/modules/atomic/k8s/apply.py:94`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/k8s/apply.py#L94) |
| function | `def _cleanup_tempfile(tmp_path: str) -> None` | Remove a temp file if it exists. | [`src/core/modules/atomic/k8s/apply.py:102`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/k8s/apply.py#L102) |
| function | `async def _run_kubectl_apply(tmp_path: str, namespace: str, kubeconfig: str) -> Dict&#91;str, Any&#93;` | Execute kubectl apply and return parsed result. | [`src/core/modules/atomic/k8s/apply.py:111`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/k8s/apply.py#L111) |
| function | `async def k8s_apply(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Apply a Kubernetes manifest via kubectl apply. | [`src/core/modules/atomic/k8s/apply.py:191`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/k8s/apply.py#L191) |

## `src/core/modules/atomic/k8s/describe.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def k8s_describe(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Describe a Kubernetes resource in detail. | [`src/core/modules/atomic/k8s/describe.py:104`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/k8s/describe.py#L104) |

## `src/core/modules/atomic/k8s/get_pods.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _parse_pod_status(pod: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Extract a concise pod summary from kubectl JSON output. | [`src/core/modules/atomic/k8s/get_pods.py:22`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/k8s/get_pods.py#L22) |
| function | `def _build_get_pods_cmd(namespace: str, label_selector: str, kubeconfig: str) -> list` | Build the kubectl get pods command. | [`src/core/modules/atomic/k8s/get_pods.py:69`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/k8s/get_pods.py#L69) |
| function | `async def _run_kubectl_get_pods(cmd: list) -> Dict&#91;str, Any&#93;` | Execute kubectl get pods and return parsed pod list. | [`src/core/modules/atomic/k8s/get_pods.py:79`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/k8s/get_pods.py#L79) |
| function | `async def k8s_get_pods(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | List Kubernetes pods in a namespace. | [`src/core/modules/atomic/k8s/get_pods.py:147`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/k8s/get_pods.py#L147) |

## `src/core/modules/atomic/k8s/logs.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _build_logs_cmd(pod: str, namespace: str, container: str, tail: int, previous: bool, kubeconfig: str) -> list` | Build the kubectl logs command. | [`src/core/modules/atomic/k8s/logs.py:21`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/k8s/logs.py#L21) |
| function | `async def _run_kubectl_logs(cmd: list, pod: str) -> Dict&#91;str, Any&#93;` | Execute kubectl logs and return parsed result. | [`src/core/modules/atomic/k8s/logs.py:34`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/k8s/logs.py#L34) |
| function | `async def k8s_logs(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Retrieve logs from a Kubernetes pod. | [`src/core/modules/atomic/k8s/logs.py:116`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/k8s/logs.py#L116) |

## `src/core/modules/atomic/k8s/scale.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _validate_scale_params(deployment: str, replicas) -> int` | Validate and return the integer replicas count. | [`src/core/modules/atomic/k8s/scale.py:21`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/k8s/scale.py#L21) |
| function | `async def _run_kubectl_scale(cmd: list, deployment: str) -> str` | Execute kubectl scale and return stdout text. | [`src/core/modules/atomic/k8s/scale.py:35`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/k8s/scale.py#L35) |
| function | `async def k8s_scale(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Scale a Kubernetes deployment to a specified replica count. | [`src/core/modules/atomic/k8s/scale.py:111`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/k8s/scale.py#L111) |
