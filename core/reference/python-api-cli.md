<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: CLI

Source-backed signatures for **97 declarations** across **13 files** in the cli area.

## `src/cli/config.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class Colors` | Color codes for terminal output | [`src/cli/config.py:32`](https://github.com/flytohub/flyto-core/blob/main/src/cli/config.py#L32) |

## `src/cli/i18n.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class I18n` | Stub i18n class - returns key as-is. | [`src/cli/i18n.py:9`](https://github.com/flytohub/flyto-core/blob/main/src/cli/i18n.py#L9) |
| method | `def I18n.__init__(self, lang: str='en')` | Implements `I18n.__init__`; linked source is authoritative. | [`src/cli/i18n.py:16`](https://github.com/flytohub/flyto-core/blob/main/src/cli/i18n.py#L16) |
| method | `def I18n.t(self, key: str, **kwargs) -> str` | Get translated text. | [`src/cli/i18n.py:49`](https://github.com/flytohub/flyto-core/blob/main/src/cli/i18n.py#L49) |

## `src/cli/interactive.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class MenuAction(Enum)` | Menu action types | [`src/cli/interactive.py:15`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L15) |
| class | `class MenuItem` | Menu item configuration | [`src/cli/interactive.py:27`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L27) |
| class | `class Colors` | Terminal color codes | [`src/cli/interactive.py:35`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L35) |
| class | `class InteractiveMenu` | Interactive menu system for CLI. | [`src/cli/interactive.py:48`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L48) |
| method | `def InteractiveMenu.__init__(self, i18n: Any, config: Dict&#91;str, Any&#93;)` | Initialize interactive menu. | [`src/cli/interactive.py:71`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L71) |
| method | `def InteractiveMenu.register_handler(self, action: MenuAction, handler: Callable) -> None` | Register a handler for a menu action | [`src/cli/interactive.py:83`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L83) |
| method | `def InteractiveMenu.show_header(self, title: str) -> None` | Display section header | [`src/cli/interactive.py:87`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L87) |
| method | `def InteractiveMenu.show_separator(self) -> None` | Display separator line | [`src/cli/interactive.py:94`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L94) |
| method | `def InteractiveMenu.show_main_menu(self) -> Optional&#91;MenuAction&#93;` | Display main menu and get user selection. | [`src/cli/interactive.py:98`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L98) |
| method | `def InteractiveMenu.run(self) -> None` | Run the interactive menu loop | [`src/cli/interactive.py:135`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L135) |
| method | `def InteractiveMenu.show_workflow_categories(self, workflows: List&#91;Dict&#91;str, Any&#93;&#93;) -> Optional&#91;str&#93;` | Display workflows grouped by category. | [`src/cli/interactive.py:160`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L160) |
| method | `def InteractiveMenu.show_modules_list(self, modules: List&#91;Dict&#91;str, Any&#93;&#93;) -> None` | Display available modules. | [`src/cli/interactive.py:217`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L217) |
| method | `def InteractiveMenu.show_version_info(self, version: str, build_info: Dict&#91;str, Any&#93;) -> None` | Display version information. | [`src/cli/interactive.py:251`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L251) |
| method | `def InteractiveMenu.show_help(self) -> None` | Display help information | [`src/cli/interactive.py:272`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L272) |
| method | `def InteractiveMenu.show_settings(self, settings: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Display and modify settings. | [`src/cli/interactive.py:288`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L288) |
| method | `def InteractiveMenu.confirm(self, message: str) -> bool` | Show confirmation prompt. | [`src/cli/interactive.py:334`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L334) |
| method | `def InteractiveMenu.show_progress(self, current: int, total: int, message: str='') -> None` | Display progress indicator. | [`src/cli/interactive.py:347`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L347) |
| method | `def InteractiveMenu._t(self, key: str) -> str` | Get translated text | [`src/cli/interactive.py:367`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L367) |
| method | `def InteractiveMenu._get_localized(self, text: Any) -> str` | Get localized text from dict or string | [`src/cli/interactive.py:373`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L373) |
| method | `def InteractiveMenu._get_input(self, prompt: str) -> str` | Get user input with prompt | [`src/cli/interactive.py:380`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L380) |
| method | `def InteractiveMenu._wait_for_continue(self) -> None` | Wait for user to press enter | [`src/cli/interactive.py:387`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L387) |
| method | `def InteractiveMenu._handle_exit(self) -> None` | Handle exit action | [`src/cli/interactive.py:392`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L392) |
| function | `def create_menu(i18n: Any, config: Dict&#91;str, Any&#93;) -> InteractiveMenu` | Factory function to create an interactive menu. | [`src/cli/interactive.py:398`](https://github.com/flytohub/flyto-core/blob/main/src/cli/interactive.py#L398) |

## `src/cli/learn.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def run_learn(task: str, save_as: str, provider: str='openai', model: str='gpt-4o', api_key: Optional&#91;str&#93;=None, max_iterations: int=20, variables: Optional&#91;Dict&#91;str, str&#93;&#93;=None) -> int` | Run the learn command — AI explores, then compiles. | [`src/cli/learn.py:26`](https://github.com/flytohub/flyto-core/blob/main/src/cli/learn.py#L26) |
| function | `async def _learn_async(task: str, save_as: str, provider: str, model: str, api_key: Optional&#91;str&#93;, max_iterations: int, variables: Optional&#91;Dict&#91;str, str&#93;&#93;) -> bool` | Core learn logic — async. | [`src/cli/learn.py:66`](https://github.com/flytohub/flyto-core/blob/main/src/cli/learn.py#L66) |

## `src/cli/main.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def add_serve_parser(subparsers) -> None` | Add serve subcommand for HTTP Execution API server. | [`src/cli/main.py:52`](https://github.com/flytohub/flyto-core/blob/main/src/cli/main.py#L52) |
| function | `def run_serve_command(host: str='127.0.0.1', port: int=8333) -> int` | Start the HTTP Execution API server. | [`src/cli/main.py:65`](https://github.com/flytohub/flyto-core/blob/main/src/cli/main.py#L65) |
| function | `def add_run_parser(subparsers) -> None` | Add run subcommand for workflow execution. | [`src/cli/main.py:78`](https://github.com/flytohub/flyto-core/blob/main/src/cli/main.py#L78) |
| function | `def main() -> None` | Main CLI entry point | [`src/cli/main.py:99`](https://github.com/flytohub/flyto-core/blob/main/src/cli/main.py#L99) |

## `src/cli/modules.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def get_modules_list(env: str='production') -> Dict&#91;str, Any&#93;` | Get list of modules for specified environment. | [`src/cli/modules.py:16`](https://github.com/flytohub/flyto-core/blob/main/src/cli/modules.py#L16) |
| function | `def format_table(data: Dict&#91;str, Any&#93;) -> str` | Format modules as a table for terminal display. | [`src/cli/modules.py:74`](https://github.com/flytohub/flyto-core/blob/main/src/cli/modules.py#L74) |
| function | `def run_modules_command(env: str='production', format: str='table', output_file: Optional&#91;str&#93;=None) -> int` | Execute the modules command. | [`src/cli/modules.py:103`](https://github.com/flytohub/flyto-core/blob/main/src/cli/modules.py#L103) |
| function | `def add_modules_parser(subparsers) -> None` | Add modules subcommand to argument parser. | [`src/cli/modules.py:141`](https://github.com/flytohub/flyto-core/blob/main/src/cli/modules.py#L141) |

## `src/cli/params.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def auto_convert_type(value: str) -> Any` | Automatically convert string to appropriate type | [`src/cli/params.py:18`](https://github.com/flytohub/flyto-core/blob/main/src/cli/params.py#L18) |
| function | `def merge_params(workflow: Dict&#91;str, Any&#93;, args: Any) -> Dict&#91;str, Any&#93;` | Merge parameters from multiple sources with priority order: 1. | [`src/cli/params.py:44`](https://github.com/flytohub/flyto-core/blob/main/src/cli/params.py#L44) |

## `src/cli/plugin.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def add_plugin_parser(subparsers) -> None` | Add plugin subcommand to the CLI. | [`src/cli/plugin.py:19`](https://github.com/flytohub/flyto-core/blob/main/src/cli/plugin.py#L19) |
| function | `def run_plugin_command(args) -> int` | Execute a plugin subcommand. | [`src/cli/plugin.py:54`](https://github.com/flytohub/flyto-core/blob/main/src/cli/plugin.py#L54) |
| function | `def _plugin_list() -> int` | List installed plugins. | [`src/cli/plugin.py:80`](https://github.com/flytohub/flyto-core/blob/main/src/cli/plugin.py#L80) |
| function | `def _plugin_search(query: str) -> int` | Search the plugin registry. | [`src/cli/plugin.py:106`](https://github.com/flytohub/flyto-core/blob/main/src/cli/plugin.py#L106) |
| function | `def _plugin_install(name: str, version: str=None, upgrade: bool=False) -> int` | Install a plugin. | [`src/cli/plugin.py:135`](https://github.com/flytohub/flyto-core/blob/main/src/cli/plugin.py#L135) |
| function | `def _plugin_uninstall(name: str) -> int` | Uninstall a plugin. | [`src/cli/plugin.py:162`](https://github.com/flytohub/flyto-core/blob/main/src/cli/plugin.py#L162) |
| function | `def _plugin_info(name: str) -> int` | Show plugin details. | [`src/cli/plugin.py:181`](https://github.com/flytohub/flyto-core/blob/main/src/cli/plugin.py#L181) |
| function | `def _plugin_available() -> int` | List all available plugins from registry. | [`src/cli/plugin.py:236`](https://github.com/flytohub/flyto-core/blob/main/src/cli/plugin.py#L236) |
| function | `def _is_installed(name: str) -> bool` | Check if a plugin is installed. | [`src/cli/plugin.py:264`](https://github.com/flytohub/flyto-core/blob/main/src/cli/plugin.py#L264) |

## `src/cli/recipe.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _fmt_duration(ms: int) -> str` | Format milliseconds as a human-readable string with comma separators. | [`src/cli/recipe.py:32`](https://github.com/flytohub/flyto-core/blob/main/src/cli/recipe.py#L32) |
| function | `def _print_step_line(step_num: int, total: int, module_id: str, status: str, duration_ms: int=0, hint: str='') -> None` | Print a single step line with aligned columns. | [`src/cli/recipe.py:39`](https://github.com/flytohub/flyto-core/blob/main/src/cli/recipe.py#L39) |
| function | `def load_recipe(recipe_name: str) -> Optional&#91;Dict&#91;str, Any&#93;&#93;` | Load a recipe YAML file by name. | [`src/cli/recipe.py:66`](https://github.com/flytohub/flyto-core/blob/main/src/cli/recipe.py#L66) |
| function | `def list_all_recipes() -> List&#91;Dict&#91;str, Any&#93;&#93;` | List all available recipes with metadata. | [`src/cli/recipe.py:84`](https://github.com/flytohub/flyto-core/blob/main/src/cli/recipe.py#L84) |
| function | `def substitute_args(workflow: Dict&#91;str, Any&#93;, args: Dict&#91;str, str&#93;) -> Dict&#91;str, Any&#93;` | Replace &#123;&#123;arg&#125;&#125; placeholders in workflow with actual values. | [`src/cli/recipe.py:104`](https://github.com/flytohub/flyto-core/blob/main/src/cli/recipe.py#L104) |
| function | `def _substitute_deep(obj: Any, args: Dict&#91;str, str&#93;) -> Any` | Recursively substitute &#123;&#123;arg&#125;&#125; placeholders. | [`src/cli/recipe.py:109`](https://github.com/flytohub/flyto-core/blob/main/src/cli/recipe.py#L109) |
| function | `def _auto_type(value: str) -> Any` | Convert string to int/float/bool/json if possible. | [`src/cli/recipe.py:126`](https://github.com/flytohub/flyto-core/blob/main/src/cli/recipe.py#L126) |
| function | `def parse_recipe_args(raw_args: List&#91;str&#93;, recipe: Dict&#91;str, Any&#93;) -> Dict&#91;str, str&#93;` | Parse CLI args like --symbol AAPL --range 1mo into a dict. | [`src/cli/recipe.py:149`](https://github.com/flytohub/flyto-core/blob/main/src/cli/recipe.py#L149) |
| function | `def print_recipe_usage(recipe: Dict&#91;str, Any&#93;) -> None` | Print usage for a single recipe. | [`src/cli/recipe.py:190`](https://github.com/flytohub/flyto-core/blob/main/src/cli/recipe.py#L190) |
| function | `def run_recipes_list() -> int` | List all available recipes. | [`src/cli/recipe.py:218`](https://github.com/flytohub/flyto-core/blob/main/src/cli/recipe.py#L218) |
| function | `def _step_hint(step: Dict&#91;str, Any&#93;) -> str` | Generate a short hint for notable steps based on module type. | [`src/cli/recipe.py:245`](https://github.com/flytohub/flyto-core/blob/main/src/cli/recipe.py#L245) |
| function | `def run_recipe(recipe_name: str, raw_args: List&#91;str&#93;) -> int` | Load, substitute, and execute a recipe. | [`src/cli/recipe.py:267`](https://github.com/flytohub/flyto-core/blob/main/src/cli/recipe.py#L267) |
| method | `async def run_recipe._on_checkpoint(step_index, step_id, checkpoint_data, status)` | Implements `run_recipe._on_checkpoint`; linked source is authoritative. | [`src/cli/recipe.py:339`](https://github.com/flytohub/flyto-core/blob/main/src/cli/recipe.py#L339) |
| method | `async def run_recipe._run()` | Implements `run_recipe._run`; linked source is authoritative. | [`src/cli/recipe.py:363`](https://github.com/flytohub/flyto-core/blob/main/src/cli/recipe.py#L363) |
| function | `def _print_output_files(args: Dict&#91;str, str&#93;, engine) -> None` | Print sizes of any generated output files. | [`src/cli/recipe.py:418`](https://github.com/flytohub/flyto-core/blob/main/src/cli/recipe.py#L418) |
| function | `def _save_json(path: Path, data: Any) -> None` | Save JSON, silently skip non-serializable data. | [`src/cli/recipe.py:446`](https://github.com/flytohub/flyto-core/blob/main/src/cli/recipe.py#L446) |
| function | `def _save_checkpoint_snapshot(run_dir: Path, step_index: int, step_id: str, checkpoint_data: Dict&#91;str, Any&#93;, status: str) -> None` | Save a context snapshot after each step for replay. | [`src/cli/recipe.py:460`](https://github.com/flytohub/flyto-core/blob/main/src/cli/recipe.py#L460) |
| function | `def run_replay(from_step: str, run_dir_path: Optional&#91;str&#93;=None) -> int` | Replay a workflow from a specific step using saved state. | [`src/cli/recipe.py:489`](https://github.com/flytohub/flyto-core/blob/main/src/cli/recipe.py#L489) |
| method | `async def run_replay._on_checkpoint(si, sid, cp_data, status)` | Implements `run_replay._on_checkpoint`; linked source is authoritative. | [`src/cli/recipe.py:579`](https://github.com/flytohub/flyto-core/blob/main/src/cli/recipe.py#L579) |
| method | `async def run_replay._run()` | Implements `run_replay._run`; linked source is authoritative. | [`src/cli/recipe.py:595`](https://github.com/flytohub/flyto-core/blob/main/src/cli/recipe.py#L595) |

## `src/cli/runner.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _show_completion(execution_time: float, i18n: I18n) -> None` | Print the workflow-completed banner and execution time. | [`src/cli/runner.py:21`](https://github.com/flytohub/flyto-core/blob/main/src/cli/runner.py#L21) |
| function | `def _save_results(workflow: Dict&#91;str, Any&#93;, workflow_path: Path, params: Dict&#91;str, Any&#93;, results: list, execution_time: float, config: Dict&#91;str, Any&#93;, i18n: I18n) -> Path` | Save execution results to a JSON file and print the path. | [`src/cli/runner.py:31`](https://github.com/flytohub/flyto-core/blob/main/src/cli/runner.py#L31) |
| function | `def _handle_execution_error(exec_error: Exception, engine: Any, total_steps: int, i18n: I18n) -> None` | Print error details and execution summary, then exit. | [`src/cli/runner.py:64`](https://github.com/flytohub/flyto-core/blob/main/src/cli/runner.py#L64) |
| function | `def _print_step_progress(step_index: int, steps: list, total_steps: int, i18n: I18n) -> None` | Print progress line for a workflow step. | [`src/cli/runner.py:83`](https://github.com/flytohub/flyto-core/blob/main/src/cli/runner.py#L83) |
| function | `def run_workflow(workflow_path: Path, params: Dict&#91;str, Any&#93;, config: Dict&#91;str, Any&#93;, i18n: I18n) -> None` | Run a workflow | [`src/cli/runner.py:98`](https://github.com/flytohub/flyto-core/blob/main/src/cli/runner.py#L98) |
| method | `async def run_workflow.run_workflow_async()` | Implements `run_workflow.run_workflow_async`; linked source is authoritative. | [`src/cli/runner.py:129`](https://github.com/flytohub/flyto-core/blob/main/src/cli/runner.py#L129) |

## `src/cli/template.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _get_api_url() -> str` | Implements `_get_api_url`; linked source is authoritative. | [`src/cli/template.py:19`](https://github.com/flytohub/flyto-core/blob/main/src/cli/template.py#L19) |
| function | `def _get_auth_token() -> str` | Read auth token from env or ~/.flyto/token file. | [`src/cli/template.py:23`](https://github.com/flytohub/flyto-core/blob/main/src/cli/template.py#L23) |
| function | `def _request(method: str, path: str, *, data=None, params=None, token: str='') -> dict` | Make an HTTP request to the flyto-cloud API. | [`src/cli/template.py:34`](https://github.com/flytohub/flyto-core/blob/main/src/cli/template.py#L34) |
| function | `def _require_auth() -> str` | Implements `_require_auth`; linked source is authoritative. | [`src/cli/template.py:71`](https://github.com/flytohub/flyto-core/blob/main/src/cli/template.py#L71) |
| function | `def cmd_export(args) -> int` | Export a template as YAML file. | [`src/cli/template.py:84`](https://github.com/flytohub/flyto-core/blob/main/src/cli/template.py#L84) |
| function | `def cmd_import(args) -> int` | Import a YAML file to create a new template. | [`src/cli/template.py:107`](https://github.com/flytohub/flyto-core/blob/main/src/cli/template.py#L107) |
| function | `def cmd_push(args) -> int` | Push a YAML file to update an existing template. | [`src/cli/template.py:135`](https://github.com/flytohub/flyto-core/blob/main/src/cli/template.py#L135) |
| function | `def cmd_pull(args) -> int` | Pull latest template version as YAML. | [`src/cli/template.py:174`](https://github.com/flytohub/flyto-core/blob/main/src/cli/template.py#L174) |
| function | `def cmd_diff(args) -> int` | Compare a local YAML file against the cloud version. | [`src/cli/template.py:198`](https://github.com/flytohub/flyto-core/blob/main/src/cli/template.py#L198) |
| function | `def cmd_list(args) -> int` | List user's templates. | [`src/cli/template.py:243`](https://github.com/flytohub/flyto-core/blob/main/src/cli/template.py#L243) |
| function | `def cmd_search(args) -> int` | Search marketplace templates. | [`src/cli/template.py:278`](https://github.com/flytohub/flyto-core/blob/main/src/cli/template.py#L278) |
| function | `def cmd_info(args) -> int` | Show template details. | [`src/cli/template.py:306`](https://github.com/flytohub/flyto-core/blob/main/src/cli/template.py#L306) |
| function | `def cmd_history(args) -> int` | Show version history for a template. | [`src/cli/template.py:332`](https://github.com/flytohub/flyto-core/blob/main/src/cli/template.py#L332) |
| function | `def add_template_parser(subparsers) -> None` | Register the 'template' subcommand with all sub-actions. | [`src/cli/template.py:366`](https://github.com/flytohub/flyto-core/blob/main/src/cli/template.py#L366) |
| function | `def run_template_command(args) -> int` | Dispatch template sub-action. | [`src/cli/template.py:421`](https://github.com/flytohub/flyto-core/blob/main/src/cli/template.py#L421) |

## `src/cli/ui.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def clear_screen() -> None` | Clear terminal screen using ANSI escape codes | [`src/cli/ui.py:11`](https://github.com/flytohub/flyto-core/blob/main/src/cli/ui.py#L11) |
| function | `def print_logo(i18n: I18n) -> None` | Print ASCII logo | [`src/cli/ui.py:17`](https://github.com/flytohub/flyto-core/blob/main/src/cli/ui.py#L17) |
| function | `def select_language() -> str` | Interactive language selection | [`src/cli/ui.py:26`](https://github.com/flytohub/flyto-core/blob/main/src/cli/ui.py#L26) |

## `src/cli/workflow.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def load_config() -> Dict&#91;str, Any&#93;` | Load global configuration | [`src/cli/workflow.py:16`](https://github.com/flytohub/flyto-core/blob/main/src/cli/workflow.py#L16) |
| function | `def list_workflows() -> List&#91;Path&#93;` | List available workflows | [`src/cli/workflow.py:24`](https://github.com/flytohub/flyto-core/blob/main/src/cli/workflow.py#L24) |
| function | `def select_workflow(i18n: I18n) -> Optional&#91;Path&#93;` | Interactive workflow selection | [`src/cli/workflow.py:32`](https://github.com/flytohub/flyto-core/blob/main/src/cli/workflow.py#L32) |
| function | `def get_param_input(param: Dict&#91;str, Any&#93;, i18n: I18n) -> Any` | Get user input for a parameter | [`src/cli/workflow.py:83`](https://github.com/flytohub/flyto-core/blob/main/src/cli/workflow.py#L83) |
| function | `def collect_params(workflow: Dict&#91;str, Any&#93;, i18n: I18n) -> Dict&#91;str, Any&#93;` | Collect parameters from user | [`src/cli/workflow.py:160`](https://github.com/flytohub/flyto-core/blob/main/src/cli/workflow.py#L160) |
