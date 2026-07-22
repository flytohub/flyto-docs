<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Verification

Source-backed signatures for **6 declarations** across **4 files** in the modules: atomic / verification area.

## `src/core/modules/atomic/verification/discover.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class VerificationDiscoverModule(WarroomDiscoverModule)` | Build a deterministic site graph. | [`src/core/modules/atomic/verification/discover.py:34`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verification/discover.py#L34) |

## `src/core/modules/atomic/verification/generate_scenarios.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class VerificationGenerateScenariosModule(BaseModule)` | Generate replayable scenarios from a deterministic graph. | [`src/core/modules/atomic/verification/generate_scenarios.py:37`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verification/generate_scenarios.py#L37) |
| method | `def VerificationGenerateScenariosModule.validate_params(self) -> None` | Implements `VerificationGenerateScenariosModule.validate_params`; linked source is authoritative. | [`src/core/modules/atomic/verification/generate_scenarios.py:43`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verification/generate_scenarios.py#L43) |
| method | `async def VerificationGenerateScenariosModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `VerificationGenerateScenariosModule.execute`; linked source is authoritative. | [`src/core/modules/atomic/verification/generate_scenarios.py:47`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verification/generate_scenarios.py#L47) |

## `src/core/modules/atomic/verification/report.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class VerificationReportModule(WarroomReportModule)` | Generate deterministic verification evidence report. | [`src/core/modules/atomic/verification/report.py:38`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verification/report.py#L38) |

## `src/core/modules/atomic/verification/run.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class VerificationRunModule(WarroomRunModule)` | Replay deterministic verification scenarios. | [`src/core/modules/atomic/verification/run.py:36`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/verification/run.py#L36) |
