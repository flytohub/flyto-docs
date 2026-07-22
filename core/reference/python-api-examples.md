<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Examples

Source-backed signatures for **23 declarations** across **8 files** in the examples area.

## `examples/agent_demo/planner.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class SimplePlanner` | Decomposes a task description into a flyto-core workflow. | [`examples/agent_demo/planner.py:17`](https://github.com/flytohub/flyto-core/blob/main/examples/agent_demo/planner.py#L17) |
| method | `def SimplePlanner.plan(self, task: str) -> Optional&#91;Dict&#91;str, Any&#93;&#93;` | Returns a workflow dict for the given task. | [`examples/agent_demo/planner.py:28`](https://github.com/flytohub/flyto-core/blob/main/examples/agent_demo/planner.py#L28) |
| method | `def SimplePlanner.list_capabilities(self) -> list` | List available pre-built workflows. | [`examples/agent_demo/planner.py:47`](https://github.com/flytohub/flyto-core/blob/main/examples/agent_demo/planner.py#L47) |

## `examples/agent_demo/run.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def print_header(text: str)` | Implements `print_header`; linked source is authoritative. | [`examples/agent_demo/run.py:35`](https://github.com/flytohub/flyto-core/blob/main/examples/agent_demo/run.py#L35) |
| function | `def print_step(index: int, step_id: str, module_id: str, status: str, duration_ms: int)` | Implements `print_step`; linked source is authoritative. | [`examples/agent_demo/run.py:43`](https://github.com/flytohub/flyto-core/blob/main/examples/agent_demo/run.py#L43) |
| function | `async def main()` | Implements `main`; linked source is authoritative. | [`examples/agent_demo/run.py:48`](https://github.com/flytohub/flyto-core/blob/main/examples/agent_demo/run.py#L48) |

## `examples/demo_video/record.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def typed(text: str, style: str='', speed: float=TYPE_SPEED)` | Implements `typed`; linked source is authoritative. | [`examples/demo_video/record.py:44`](https://github.com/flytohub/flyto-core/blob/main/examples/demo_video/record.py#L44) |
| function | `def pause(s: float=PAUSE_MED)` | Implements `pause`; linked source is authoritative. | [`examples/demo_video/record.py:51`](https://github.com/flytohub/flyto-core/blob/main/examples/demo_video/record.py#L51) |
| function | `def narrator(text: str, style: str='italic')` | Narrator voice — like subtitles. | [`examples/demo_video/record.py:55`](https://github.com/flytohub/flyto-core/blob/main/examples/demo_video/record.py#L55) |
| function | `def heading(title: str)` | Implements `heading`; linked source is authoritative. | [`examples/demo_video/record.py:62`](https://github.com/flytohub/flyto-core/blob/main/examples/demo_video/record.py#L62) |
| function | `def cmd(text: str)` | Show a shell command being typed. | [`examples/demo_video/record.py:69`](https://github.com/flytohub/flyto-core/blob/main/examples/demo_video/record.py#L69) |
| function | `async def main()` | Implements `main`; linked source is authoritative. | [`examples/demo_video/record.py:79`](https://github.com/flytohub/flyto-core/blob/main/examples/demo_video/record.py#L79) |

## `examples/demo_video/record_fast.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def typed(text, style='', speed=0.015)` | Implements `typed`; linked source is authoritative. | [`examples/demo_video/record_fast.py:36`](https://github.com/flytohub/flyto-core/blob/main/examples/demo_video/record_fast.py#L36) |
| function | `def narrator(text, style='italic')` | Implements `narrator`; linked source is authoritative. | [`examples/demo_video/record_fast.py:43`](https://github.com/flytohub/flyto-core/blob/main/examples/demo_video/record_fast.py#L43) |
| function | `def heading(title)` | Implements `heading`; linked source is authoritative. | [`examples/demo_video/record_fast.py:48`](https://github.com/flytohub/flyto-core/blob/main/examples/demo_video/record_fast.py#L48) |
| function | `def cmd(text)` | Implements `cmd`; linked source is authoritative. | [`examples/demo_video/record_fast.py:55`](https://github.com/flytohub/flyto-core/blob/main/examples/demo_video/record_fast.py#L55) |
| function | `async def main()` | Implements `main`; linked source is authoritative. | [`examples/demo_video/record_fast.py:60`](https://github.com/flytohub/flyto-core/blob/main/examples/demo_video/record_fast.py#L60) |

## `examples/demo_video/render.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def render(width: int, height: int, make_gif: bool)` | Implements `render`; linked source is authoritative. | [`examples/demo_video/render.py:25`](https://github.com/flytohub/flyto-core/blob/main/examples/demo_video/render.py#L25) |
| function | `def main()` | Implements `main`; linked source is authoritative. | [`examples/demo_video/render.py:118`](https://github.com/flytohub/flyto-core/blob/main/examples/demo_video/render.py#L118) |

## `examples/happy-test/test_figma.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def test_figma()` | Implements `test_figma`; linked source is authoritative. | [`examples/happy-test/test_figma.py:20`](https://github.com/flytohub/flyto-core/blob/main/examples/happy-test/test_figma.py#L20) |

## `examples/happy-test/test_spec_runner.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def test_dynamic_spec()` | 测试动态 spec 验证 | [`examples/happy-test/test_spec_runner.py:23`](https://github.com/flytohub/flyto-core/blob/main/examples/happy-test/test_spec_runner.py#L23) |
| function | `async def test_module_execution()` | 测试单独模组执行 | [`examples/happy-test/test_spec_runner.py:81`](https://github.com/flytohub/flyto-core/blob/main/examples/happy-test/test_spec_runner.py#L81) |

## `examples/happy-test/test_yaml_ruleset.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def main()` | Implements `main`; linked source is authoritative. | [`examples/happy-test/test_yaml_ruleset.py:22`](https://github.com/flytohub/flyto-core/blob/main/examples/happy-test/test_yaml_ruleset.py#L22) |
