<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Scheduler

Source-backed signatures for **10 declarations** across **3 files** in the modules: atomic / scheduler area.

## `src/core/modules/atomic/scheduler/cron_parse.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _replace_names(value: str, field_index: int) -> str` | Replace named values (MON, JAN, etc.) with their numeric equivalents. | [`src/core/modules/atomic/scheduler/cron_parse.py:50`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/scheduler/cron_parse.py#L50) |
| function | `def _parse_field(value: str, field_index: int) -> Set&#91;int&#93;` | Parse a single cron field into a set of valid integer values. | [`src/core/modules/atomic/scheduler/cron_parse.py:62`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/scheduler/cron_parse.py#L62) |
| function | `def _parse_expression(expression: str) -> Tuple&#91;Set&#91;int&#93;, Set&#91;int&#93;, Set&#91;int&#93;, Set&#91;int&#93;, Set&#91;int&#93;&#93;` | Parse a full 5-field cron expression into sets of valid values. | [`src/core/modules/atomic/scheduler/cron_parse.py:138`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/scheduler/cron_parse.py#L138) |
| function | `def _datetime_weekday_to_cron(weekday: int) -> int` | Convert Python datetime.weekday() (0=Monday) to cron day_of_week (0=Sunday). | [`src/core/modules/atomic/scheduler/cron_parse.py:158`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/scheduler/cron_parse.py#L158) |
| function | `def _calculate_next_runs(expression: str, count: int, tz_offset_hours: int=0) -> List&#91;str&#93;` | Calculate the next N run times for a cron expression. | [`src/core/modules/atomic/scheduler/cron_parse.py:163`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/scheduler/cron_parse.py#L163) |
| function | `def _describe_expression(expression: str) -> str` | Generate a human-readable description of a cron expression. | [`src/core/modules/atomic/scheduler/cron_parse.py:243`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/scheduler/cron_parse.py#L243) |
| function | `async def scheduler_cron_parse(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Parse cron expression and calculate next N run times. | [`src/core/modules/atomic/scheduler/cron_parse.py:413`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/scheduler/cron_parse.py#L413) |

## `src/core/modules/atomic/scheduler/delay.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def scheduler_delay(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Pause execution for a specified duration. | [`src/core/modules/atomic/scheduler/delay.py:83`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/scheduler/delay.py#L83) |

## `src/core/modules/atomic/scheduler/interval.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _human_readable_interval(total_seconds: int) -> str` | Convert total seconds into a human-readable interval string. | [`src/core/modules/atomic/scheduler/interval.py:20`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/scheduler/interval.py#L20) |
| function | `async def scheduler_interval(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Calculate interval timing and next occurrences. | [`src/core/modules/atomic/scheduler/interval.py:133`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/scheduler/interval.py#L133) |
