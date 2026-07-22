<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Docker

Source-backed signatures for **11 declarations** across **6 files** in the modules: atomic / docker area.

## `src/core/modules/atomic/docker/build.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _build_build_args(params: Dict&#91;str, Any&#93;) -> List&#91;str&#93;` | Build docker build CLI arguments from params. | [`src/core/modules/atomic/docker/build.py:22`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/docker/build.py#L22) |
| function | `def _parse_image_id(output: str) -> str` | Extract image ID from docker build output. | [`src/core/modules/atomic/docker/build.py:50`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/docker/build.py#L50) |
| function | `async def docker_build(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Build a Docker image from a Dockerfile. | [`src/core/modules/atomic/docker/build.py:182`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/docker/build.py#L182) |

## `src/core/modules/atomic/docker/inspect.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _extract_inspect_data(raw: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Extract relevant fields from docker inspect JSON output. | [`src/core/modules/atomic/docker/inspect.py:21`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/docker/inspect.py#L21) |
| function | `async def docker_inspect_container(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Get detailed information about a Docker container. | [`src/core/modules/atomic/docker/inspect.py:188`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/docker/inspect.py#L188) |

## `src/core/modules/atomic/docker/logs.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def docker_logs(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Get logs from a Docker container. | [`src/core/modules/atomic/docker/logs.py:120`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/docker/logs.py#L120) |

## `src/core/modules/atomic/docker/ps.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _parse_container_line(line: str) -> Dict&#91;str, Any&#93;` | Parse a single JSON line from docker ps --format json. | [`src/core/modules/atomic/docker/ps.py:21`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/docker/ps.py#L21) |
| function | `async def docker_ps(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | List Docker containers. | [`src/core/modules/atomic/docker/ps.py:112`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/docker/ps.py#L112) |

## `src/core/modules/atomic/docker/run.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _build_run_args(params: Dict&#91;str, Any&#93;) -> List&#91;str&#93;` | Build docker run CLI arguments from params. | [`src/core/modules/atomic/docker/run.py:21`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/docker/run.py#L21) |
| function | `async def docker_run(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Run a Docker container from an image. | [`src/core/modules/atomic/docker/run.py:220`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/docker/run.py#L220) |

## `src/core/modules/atomic/docker/stop.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def docker_stop(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Stop a running Docker container. | [`src/core/modules/atomic/docker/stop.py:98`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/docker/stop.py#L98) |
