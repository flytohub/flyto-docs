<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Stats

Source-backed signatures for **9 declarations** across **8 files** in the modules: atomic / stats area.

## `src/core/modules/atomic/stats/mean.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def stats_mean(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Calculate arithmetic mean of numbers. | [`src/core/modules/atomic/stats/mean.py:84`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/stats/mean.py#L84) |

## `src/core/modules/atomic/stats/median.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def stats_median(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Calculate median of numbers. | [`src/core/modules/atomic/stats/median.py:67`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/stats/median.py#L67) |

## `src/core/modules/atomic/stats/min_max.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def stats_min_max(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Find minimum and maximum values. | [`src/core/modules/atomic/stats/min_max.py:82`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/stats/min_max.py#L82) |

## `src/core/modules/atomic/stats/mode.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def stats_mode(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Calculate mode of values. | [`src/core/modules/atomic/stats/mode.py:83`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/stats/mode.py#L83) |
| method | `def stats_mode.make_hashable(v)` | Implements `stats_mode.make_hashable`; linked source is authoritative. | [`src/core/modules/atomic/stats/mode.py:99`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/stats/mode.py#L99) |

## `src/core/modules/atomic/stats/percentile.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def stats_percentile(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Calculate percentile of numbers. | [`src/core/modules/atomic/stats/percentile.py:81`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/stats/percentile.py#L81) |

## `src/core/modules/atomic/stats/std_dev.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def stats_std_dev(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Calculate standard deviation of numbers. | [`src/core/modules/atomic/stats/std_dev.py:95`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/stats/std_dev.py#L95) |

## `src/core/modules/atomic/stats/sum.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def stats_sum(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Calculate sum of numbers. | [`src/core/modules/atomic/stats/sum.py:67`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/stats/sum.py#L67) |

## `src/core/modules/atomic/stats/variance.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def stats_variance(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Calculate variance of numbers. | [`src/core/modules/atomic/stats/variance.py:89`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/stats/variance.py#L89) |
