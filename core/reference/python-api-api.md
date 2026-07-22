<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Execution And MCP API

Source-backed signatures for **88 declarations** across **11 files** in the execution and mcp api area.

## `src/core/api/evidence_hooks.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class APIEvidenceHooks(ExecutorHooks)` | Collects context_before / context_after for every step and persists them via EvidenceStore. | [`src/core/api/evidence_hooks.py:21`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/evidence_hooks.py#L21) |
| method | `def APIEvidenceHooks.__init__(self, evidence_store: EvidenceStore, execution_id: str)` | Implements `APIEvidenceHooks.__init__`; linked source is authoritative. | [`src/core/api/evidence_hooks.py:29`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/evidence_hooks.py#L29) |
| method | `def APIEvidenceHooks.on_workflow_start(self, context: HookContext) -> HookResult` | Implements `APIEvidenceHooks.on_workflow_start`; linked source is authoritative. | [`src/core/api/evidence_hooks.py:38`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/evidence_hooks.py#L38) |
| method | `def APIEvidenceHooks.on_workflow_complete(self, context: HookContext) -> None` | Implements `APIEvidenceHooks.on_workflow_complete`; linked source is authoritative. | [`src/core/api/evidence_hooks.py:41`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/evidence_hooks.py#L41) |
| method | `def APIEvidenceHooks.on_workflow_failed(self, context: HookContext) -> None` | Implements `APIEvidenceHooks.on_workflow_failed`; linked source is authoritative. | [`src/core/api/evidence_hooks.py:44`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/evidence_hooks.py#L44) |
| method | `def APIEvidenceHooks.on_pre_execute(self, context: HookContext) -> HookResult` | Implements `APIEvidenceHooks.on_pre_execute`; linked source is authoritative. | [`src/core/api/evidence_hooks.py:51`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/evidence_hooks.py#L51) |
| method | `def APIEvidenceHooks.on_post_execute(self, context: HookContext) -> HookResult` | Implements `APIEvidenceHooks.on_post_execute`; linked source is authoritative. | [`src/core/api/evidence_hooks.py:61`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/evidence_hooks.py#L61) |
| method | `def APIEvidenceHooks.on_error(self, context: HookContext) -> HookResult` | Implements `APIEvidenceHooks.on_error`; linked source is authoritative. | [`src/core/api/evidence_hooks.py:93`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/evidence_hooks.py#L93) |
| method | `def APIEvidenceHooks.on_retry(self, context: HookContext) -> HookResult` | Implements `APIEvidenceHooks.on_retry`; linked source is authoritative. | [`src/core/api/evidence_hooks.py:125`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/evidence_hooks.py#L125) |
| method | `def APIEvidenceHooks.on_module_missing(self, context: HookContext) -> HookResult` | Implements `APIEvidenceHooks.on_module_missing`; linked source is authoritative. | [`src/core/api/evidence_hooks.py:128`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/evidence_hooks.py#L128) |
| function | `def _safe_copy(variables: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Shallow-copy variables, replacing non-serialisable objects with placeholders. | [`src/core/api/evidence_hooks.py:136`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/evidence_hooks.py#L136) |
| function | `def _result_to_dict(result: Any) -> Dict&#91;str, Any&#93;` | Coerce a step result to a JSON-safe dict. | [`src/core/api/evidence_hooks.py:154`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/evidence_hooks.py#L154) |

## `src/core/api/models.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ExecuteModuleRequest(BaseModel)` | Defines the ExecuteModuleRequest runtime contract. | [`src/core/api/models.py:16`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/models.py#L16) |
| class | `class RunWorkflowRequest(BaseModel)` | Defines the RunWorkflowRequest runtime contract. | [`src/core/api/models.py:22`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/models.py#L22) |
| class | `class ReplayRequest(BaseModel)` | Defines the ReplayRequest runtime contract. | [`src/core/api/models.py:29`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/models.py#L29) |
| class | `class ExecuteModuleResponse(BaseModel)` | Defines the ExecuteModuleResponse runtime contract. | [`src/core/api/models.py:38`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/models.py#L38) |
| class | `class WorkflowRunResponse(BaseModel)` | Defines the WorkflowRunResponse runtime contract. | [`src/core/api/models.py:46`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/models.py#L46) |
| class | `class ReplayResponse(BaseModel)` | Defines the ReplayResponse runtime contract. | [`src/core/api/models.py:57`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/models.py#L57) |
| class | `class StepEvidenceResponse(BaseModel)` | Defines the StepEvidenceResponse runtime contract. | [`src/core/api/models.py:67`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/models.py#L67) |
| class | `class ModuleInfo(BaseModel)` | Defines the ModuleInfo runtime contract. | [`src/core/api/models.py:78`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/models.py#L78) |
| class | `class CategoryInfo(BaseModel)` | Defines the CategoryInfo runtime contract. | [`src/core/api/models.py:84`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/models.py#L84) |
| class | `class ServerInfo(BaseModel)` | Defines the ServerInfo runtime contract. | [`src/core/api/models.py:92`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/models.py#L92) |

## `src/core/api/plugins/routes.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def create_plugin_router(plugin_service=None)` | Create plugin API router. | [`src/core/api/plugins/routes.py:24`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/routes.py#L24) |
| class | `class create_plugin_router.InstallRequest(BaseModel)` | Defines the InstallRequest runtime contract. | [`src/core/api/plugins/routes.py:52`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/routes.py#L52) |
| class | `class create_plugin_router.UninstallRequest(BaseModel)` | Defines the UninstallRequest runtime contract. | [`src/core/api/plugins/routes.py:55`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/routes.py#L55) |
| class | `class create_plugin_router.PluginResponse(BaseModel)` | Defines the PluginResponse runtime contract. | [`src/core/api/plugins/routes.py:58`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/routes.py#L58) |
| method | `async def create_plugin_router.get_catalog(response: Response, include_installed: bool=Query(True, description='Include installed plugins')) -> List&#91;Dict&#91;str, Any&#93;&#93;` | Get plugin catalog for marketplace. | [`src/core/api/plugins/routes.py:69`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/routes.py#L69) |
| method | `async def create_plugin_router.get_installed() -> List&#91;Dict&#91;str, Any&#93;&#93;` | Get installed plugins. | [`src/core/api/plugins/routes.py:89`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/routes.py#L89) |
| method | `async def create_plugin_router.get_installed_modules() -> List&#91;Dict&#91;str, Any&#93;&#93;` | Get modules from installed plugins. | [`src/core/api/plugins/routes.py:98`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/routes.py#L98) |
| method | `async def create_plugin_router.install_plugin(request: InstallRequest) -> PluginResponse` | Install a plugin. | [`src/core/api/plugins/routes.py:108`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/routes.py#L108) |
| method | `async def create_plugin_router.uninstall_plugin(request: UninstallRequest) -> PluginResponse` | Uninstall a plugin. | [`src/core/api/plugins/routes.py:127`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/routes.py#L127) |
| method | `async def create_plugin_router.load_plugin(plugin_id: str) -> PluginResponse` | Load (start) a plugin process. | [`src/core/api/plugins/routes.py:144`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/routes.py#L144) |
| method | `async def create_plugin_router.unload_plugin(plugin_id: str) -> PluginResponse` | Unload (stop) a plugin process. | [`src/core/api/plugins/routes.py:162`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/routes.py#L162) |
| method | `async def create_plugin_router.get_plugin_health() -> Dict&#91;str, Any&#93;` | Get health status of all plugins. | [`src/core/api/plugins/routes.py:180`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/routes.py#L180) |
| function | `def create_modules_tiered_extension(plugin_service=None)` | Create extension for /modules/tiered endpoint. | [`src/core/api/plugins/routes.py:202`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/routes.py#L202) |
| method | `def create_modules_tiered_extension.extend_tiered_response(core_modules: List&#91;Dict&#91;str, Any&#93;&#93;, tier: str='free') -> List&#91;Dict&#91;str, Any&#93;&#93;` | Merge plugin modules into core modules response. | [`src/core/api/plugins/routes.py:221`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/routes.py#L221) |

## `src/core/api/plugins/service.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class PluginCatalogItem` | Plugin item for marketplace catalog. | [`src/core/api/plugins/service.py:28`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/service.py#L28) |
| class | `class PluginServiceConfig` | Configuration for plugin service. | [`src/core/api/plugins/service.py:46`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/service.py#L46) |
| class | `class PluginService` | Service for plugin management operations. | [`src/core/api/plugins/service.py:53`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/service.py#L53) |
| method | `def PluginService.__init__(self, plugin_manager: Optional&#91;PluginManager&#93;=None, config: Optional&#91;PluginServiceConfig&#93;=None)` | Implements `PluginService.__init__`; linked source is authoritative. | [`src/core/api/plugins/service.py:64`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/service.py#L64) |
| method | `def PluginService.set_plugin_manager(self, manager: PluginManager)` | Set the plugin manager instance. | [`src/core/api/plugins/service.py:79`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/service.py#L79) |
| method | `def PluginService.get_catalog(self, include_installed: bool=True) -> List&#91;Dict&#91;str, Any&#93;&#93;` | Get plugin catalog for marketplace. | [`src/core/api/plugins/service.py:85`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/service.py#L85) |
| method | `def PluginService.get_catalog_etag(self) -> str` | Generate ETag for catalog caching. | [`src/core/api/plugins/service.py:125`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/service.py#L125) |
| method | `def PluginService.get_installed_plugins(self) -> List&#91;Dict&#91;str, Any&#93;&#93;` | Get list of installed plugins. | [`src/core/api/plugins/service.py:133`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/service.py#L133) |
| method | `def PluginService.get_installed_modules(self) -> List&#91;Dict&#91;str, Any&#93;&#93;` | Get modules from installed plugins in frontend format. | [`src/core/api/plugins/service.py:155`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/service.py#L155) |
| method | `def PluginService.install_plugin(self, plugin_id: str) -> Dict&#91;str, Any&#93;` | Install a plugin. | [`src/core/api/plugins/service.py:176`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/service.py#L176) |
| method | `def PluginService.uninstall_plugin(self, plugin_id: str) -> Dict&#91;str, Any&#93;` | Uninstall a plugin. | [`src/core/api/plugins/service.py:236`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/service.py#L236) |
| method | `def PluginService.load_plugin(self, plugin_id: str) -> Dict&#91;str, Any&#93;` | Load (start) a plugin process. | [`src/core/api/plugins/service.py:271`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/service.py#L271) |
| method | `def PluginService.unload_plugin(self, plugin_id: str) -> Dict&#91;str, Any&#93;` | Unload (stop) a plugin process. | [`src/core/api/plugins/service.py:331`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/service.py#L331) |
| method | `def PluginService.get_merged_modules(self, core_modules: List&#91;Dict&#91;str, Any&#93;&#93;, tier: str='free') -> List&#91;Dict&#91;str, Any&#93;&#93;` | Get merged core + plugin modules for /modules/tiered endpoint. | [`src/core/api/plugins/service.py:365`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/service.py#L365) |
| method | `def PluginService._manifest_to_catalog_item(self, manifest: Dict&#91;str, Any&#93;, installed: bool=False) -> Dict&#91;str, Any&#93;` | Convert manifest to catalog item format. | [`src/core/api/plugins/service.py:390`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/service.py#L390) |
| method | `def PluginService.discover_and_install_all(self)` | Discover and install all plugins from plugins directory. | [`src/core/api/plugins/service.py:421`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/service.py#L421) |
| function | `def get_plugin_service(plugin_manager: Optional&#91;PluginManager&#93;=None, config: Optional&#91;PluginServiceConfig&#93;=None) -> PluginService` | Get global plugin service instance. | [`src/core/api/plugins/service.py:456`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/plugins/service.py#L456) |

## `src/core/api/routes/mcp.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _validate_accept(request: Request) -> Optional&#91;Response&#93;` | Validate Accept header per MCP spec. | [`src/core/api/routes/mcp.py:36`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/routes/mcp.py#L36) |
| function | `def _validate_session(request: Request, required: bool=False) -> Optional&#91;Response&#93;` | Validate Mcp-Session-Id header. | [`src/core/api/routes/mcp.py:48`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/routes/mcp.py#L48) |
| function | `def _is_notification(item: dict) -> bool` | A JSON-RPC notification has no 'id' field. | [`src/core/api/routes/mcp.py:64`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/routes/mcp.py#L64) |
| function | `def _is_initialize(item: dict) -> bool` | Implements `_is_initialize`; linked source is authoritative. | [`src/core/api/routes/mcp.py:69`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/routes/mcp.py#L69) |
| function | `async def mcp_post(request: Request)` | Implements `mcp_post`; linked source is authoritative. | [`src/core/api/routes/mcp.py:74`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/routes/mcp.py#L74) |
| function | `async def mcp_get()` | Implements `mcp_get`; linked source is authoritative. | [`src/core/api/routes/mcp.py:138`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/routes/mcp.py#L138) |
| function | `async def mcp_delete(request: Request)` | Implements `mcp_delete`; linked source is authoritative. | [`src/core/api/routes/mcp.py:146`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/routes/mcp.py#L146) |

## `src/core/api/routes/modules.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def list_modules(category: Optional&#91;str&#93;=None)` | List all available modules, organized by category. | [`src/core/api/routes/modules.py:29`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/routes/modules.py#L29) |
| function | `async def get_module_info(module_id: str)` | Get detailed module information including params schema and examples. | [`src/core/api/routes/modules.py:79`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/routes/modules.py#L79) |
| function | `async def execute_module(body: ExecuteModuleRequest, request: Request)` | Execute a single module. | [`src/core/api/routes/modules.py:94`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/routes/modules.py#L94) |

## `src/core/api/routes/replay.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def replay_from_step(execution_id: str, step_id: str, body: ReplayRequest, request: Request)` | Replay workflow execution from a specific step. | [`src/core/api/routes/replay.py:22`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/routes/replay.py#L22) |
| method | `async def replay_from_step.workflow_executor(workflow, context, start_step, end_step, **kwargs)` | Implements `replay_from_step.workflow_executor`; linked source is authoritative. | [`src/core/api/routes/replay.py:52`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/routes/replay.py#L52) |

## `src/core/api/routes/workflows.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def run_workflow(body: RunWorkflowRequest, request: Request)` | Run a multi-step workflow with optional evidence collection and tracing. | [`src/core/api/routes/workflows.py:33`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/routes/workflows.py#L33) |
| function | `async def get_execution_info(execution_id: str, request: Request)` | Get execution info: steps, status, evidence summary. | [`src/core/api/routes/workflows.py:120`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/routes/workflows.py#L120) |
| function | `async def get_execution_evidence(execution_id: str, request: Request)` | Get step-by-step evidence for an execution. | [`src/core/api/routes/workflows.py:169`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/routes/workflows.py#L169) |
| function | `def _save_workflow_definition(state, execution_id: str, workflow: dict)` | Persist workflow.json for replay. | [`src/core/api/routes/workflows.py:203`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/routes/workflows.py#L203) |

## `src/core/api/security.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def get_cors_origins() -> List&#91;str&#93;` | Return allowed CORS origins from env or defaults. | [`src/core/api/security.py:38`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/security.py#L38) |
| function | `def generate_token() -> str` | Implements `generate_token`; linked source is authoritative. | [`src/core/api/security.py:59`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/security.py#L59) |
| function | `def _token_file_path(port: int) -> Path` | Implements `_token_file_path`; linked source is authoritative. | [`src/core/api/security.py:63`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/security.py#L63) |
| function | `def write_token_file(token: str, port: int) -> Path` | Write token to ~/.flyto/.api-token-{port}. | [`src/core/api/security.py:67`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/security.py#L67) |
| function | `def read_token_file(port: int) -> Optional&#91;str&#93;` | Read token from file. | [`src/core/api/security.py:76`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/security.py#L76) |
| function | `def init_auth(port: int) -> str` | Initialize auth token. | [`src/core/api/security.py:84`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/security.py#L84) |
| function | `async def require_auth(request: Request, credentials: Optional&#91;HTTPAuthorizationCredentials&#93;=Depends(_bearer_scheme))` | FastAPI dependency — validates Bearer token on protected endpoints. | [`src/core/api/security.py:121`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/security.py#L121) |
| function | `def is_auth_active() -> bool` | True once init_auth() has established a bearer token. | [`src/core/api/security.py:165`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/security.py#L165) |
| function | `def _is_loopback_host(host: str) -> bool` | Implements `_is_loopback_host`; linked source is authoritative. | [`src/core/api/security.py:170`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/security.py#L170) |
| function | `def enforce_bind_policy(host: str) -> None` | Fail-closed bind guard, called at startup before binding the socket. | [`src/core/api/security.py:177`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/security.py#L177) |

## `src/core/api/server.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _get_version() -> str` | Implements `_get_version`; linked source is authoritative. | [`src/core/api/server.py:32`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/server.py#L32) |
| function | `def create_app(evidence_path: Optional&#91;Path&#93;=None, port: int=8333) -> FastAPI` | Create and configure the FastAPI application. | [`src/core/api/server.py:48`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/server.py#L48) |
| method | `async def create_app.lifespan(_app: FastAPI)` | Implements `create_app.lifespan`; linked source is authoritative. | [`src/core/api/server.py:56`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/server.py#L56) |
| method | `async def create_app.health()` | Implements `create_app.health`; linked source is authoritative. | [`src/core/api/server.py:107`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/server.py#L107) |
| method | `async def create_app.info()` | Implements `create_app.info`; linked source is authoritative. | [`src/core/api/server.py:111`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/server.py#L111) |
| function | `def main(host: str='127.0.0.1', port: int=8333)` | Entry point: python -m core.api | [`src/core/api/server.py:132`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/server.py#L132) |

## `src/core/api/state.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ServerState` | Singleton-ish state shared across all API requests. | [`src/core/api/state.py:22`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/state.py#L22) |
| method | `def ServerState.__init__(self, evidence_path: Path=DEFAULT_EVIDENCE_PATH)` | Implements `ServerState.__init__`; linked source is authoritative. | [`src/core/api/state.py:25`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/state.py#L25) |
| method | `def ServerState.evidence_path(self) -> Path` | Implements `ServerState.evidence_path`; linked source is authoritative. | [`src/core/api/state.py:34`](https://github.com/flytohub/flyto-core/blob/main/src/core/api/state.py#L34) |
