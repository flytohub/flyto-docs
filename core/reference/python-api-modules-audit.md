<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Audit

Source-backed signatures for **31 declarations** across **3 files** in the modules: audit area.

## `src/core/modules/audit/report_generator.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ReportGenerator` | Generates audit reports in various formats. | [`src/core/modules/audit/report_generator.py:19`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/report_generator.py#L19) |
| method | `def ReportGenerator.__init__(self, result: AuditResult)` | Initialize report generator. | [`src/core/modules/audit/report_generator.py:33`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/report_generator.py#L33) |
| method | `def ReportGenerator.generate_all(self, output_dir: str) -> None` | Generate all reports to output directory. | [`src/core/modules/audit/report_generator.py:42`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/report_generator.py#L42) |
| method | `def ReportGenerator._write_summary(self, path: str) -> None` | Write summary report. | [`src/core/modules/audit/report_generator.py:71`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/report_generator.py#L71) |
| method | `def ReportGenerator._write_category_report(self, path: str, category: str, modules: List&#91;ModuleAuditResult&#93;) -> None` | Write category-specific report. | [`src/core/modules/audit/report_generator.py:130`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/report_generator.py#L130) |
| method | `def ReportGenerator._write_issue_reports(self, output_dir: str) -> None` | Write JSON reports for each issue type. | [`src/core/modules/audit/report_generator.py:166`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/report_generator.py#L166) |
| method | `def ReportGenerator._write_suggested_fixes(self, path: str) -> None` | Write all suggested fixes to a JSON file. | [`src/core/modules/audit/report_generator.py:188`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/report_generator.py#L188) |
| method | `def ReportGenerator.get_summary_dict(self) -> Dict&#91;str, Any&#93;` | Get summary as a dictionary. | [`src/core/modules/audit/report_generator.py:236`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/report_generator.py#L236) |
| method | `def ReportGenerator.print_summary(self) -> None` | Print summary to console. | [`src/core/modules/audit/report_generator.py:253`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/report_generator.py#L253) |

## `src/core/modules/audit/schema_auditor.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class FieldIssue` | Represents a single schema field issue. | [`src/core/modules/audit/schema_auditor.py:30`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L30) |
| class | `class ModuleAuditResult` | Audit result for a single module. | [`src/core/modules/audit/schema_auditor.py:42`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L42) |
| method | `def ModuleAuditResult.critical_count(self) -> int` | Implements `ModuleAuditResult.critical_count`; linked source is authoritative. | [`src/core/modules/audit/schema_auditor.py:54`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L54) |
| method | `def ModuleAuditResult.warning_count(self) -> int` | Implements `ModuleAuditResult.warning_count`; linked source is authoritative. | [`src/core/modules/audit/schema_auditor.py:58`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L58) |
| method | `def ModuleAuditResult.info_count(self) -> int` | Implements `ModuleAuditResult.info_count`; linked source is authoritative. | [`src/core/modules/audit/schema_auditor.py:62`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L62) |
| method | `def ModuleAuditResult.has_issues(self) -> bool` | Implements `ModuleAuditResult.has_issues`; linked source is authoritative. | [`src/core/modules/audit/schema_auditor.py:66`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L66) |
| class | `class AuditResult` | Complete audit result across all modules. | [`src/core/modules/audit/schema_auditor.py:71`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L71) |
| method | `def AuditResult.add_module_result(self, result: ModuleAuditResult) -> None` | Add a module audit result. | [`src/core/modules/audit/schema_auditor.py:83`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L83) |
| class | `class SchemaAuditor` | Audits module schemas for quality issues. | [`src/core/modules/audit/schema_auditor.py:107`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L107) |
| method | `def SchemaAuditor.__init__(self, strict: bool=False)` | Initialize the auditor. | [`src/core/modules/audit/schema_auditor.py:119`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L119) |
| method | `def SchemaAuditor.audit_all(self) -> AuditResult` | Audit all registered modules. | [`src/core/modules/audit/schema_auditor.py:128`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L128) |
| method | `def SchemaAuditor.audit_module(self, module_id: str, metadata: Dict&#91;str, Any&#93;) -> ModuleAuditResult` | Audit a single module's schema. | [`src/core/modules/audit/schema_auditor.py:148`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L148) |
| method | `def SchemaAuditor._audit_params_schema(self, result: ModuleAuditResult) -> None` | Audit params_schema for quality issues. | [`src/core/modules/audit/schema_auditor.py:179`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L179) |
| method | `def SchemaAuditor._audit_output_schema(self, result: ModuleAuditResult) -> None` | Audit output_schema for quality issues. | [`src/core/modules/audit/schema_auditor.py:240`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L240) |
| method | `def SchemaAuditor._audit_types(self, result: ModuleAuditResult) -> None` | Audit input/output types. | [`src/core/modules/audit/schema_auditor.py:263`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L263) |
| method | `def SchemaAuditor._suggest_description(self, field_name: str, field_type: str) -> str` | Suggest a description for a field. | [`src/core/modules/audit/schema_auditor.py:298`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L298) |
| method | `def SchemaAuditor._suggest_label(self, field_name: str) -> str` | Suggest a label for a field. | [`src/core/modules/audit/schema_auditor.py:311`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L311) |
| method | `def SchemaAuditor._suggest_placeholder(self, field_name: str, field_type: str) -> str` | Suggest a placeholder for a field. | [`src/core/modules/audit/schema_auditor.py:315`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L315) |
| method | `def SchemaAuditor._suggest_input_types(self, module_id: str, category: str) -> str` | Suggest input types based on module/category. | [`src/core/modules/audit/schema_auditor.py:327`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L327) |
| method | `def SchemaAuditor._suggest_output_types(self, module_id: str, category: str) -> str` | Suggest output types based on module/category. | [`src/core/modules/audit/schema_auditor.py:343`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L343) |
| function | `def run_audit(strict: bool=False) -> AuditResult` | Convenience function to run a full audit. | [`src/core/modules/audit/schema_auditor.py:360`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/schema_auditor.py#L360) |

## `src/core/modules/audit/standards.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class QualityLevel(str, Enum)` | Quality level classification for issues. | [`src/core/modules/audit/standards.py:13`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/audit/standards.py#L13) |
