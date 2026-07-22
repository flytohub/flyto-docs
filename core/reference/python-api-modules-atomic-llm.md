<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / LLM

Source-backed signatures for **99 declarations** across **11 files** in the modules: atomic / llm area.

## `src/core/modules/atomic/llm/_agent_tool.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _get_registry()` | Lazy import to avoid circular dependencies. | [`src/core/modules/atomic/llm/_agent_tool.py:21`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_agent_tool.py#L21) |
| function | `def _params_to_json_schema(params_schema) -> Dict&#91;str, Any&#93;` | Convert flyto params_schema to JSON Schema for OpenAI function calling. | [`src/core/modules/atomic/llm/_agent_tool.py:45`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_agent_tool.py#L45) |
| class | `class ModuleAgentTool` | Wraps a flyto module as an AI Agent tool. | [`src/core/modules/atomic/llm/_agent_tool.py:126`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_agent_tool.py#L126) |
| method | `def ModuleAgentTool.__init__(self, module_id: str, description: str='', parent_context: Optional&#91;Dict&#91;str, Any&#93;&#93;=None)` | Implements `ModuleAgentTool.__init__`; linked source is authoritative. | [`src/core/modules/atomic/llm/_agent_tool.py:136`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_agent_tool.py#L136) |
| method | `def ModuleAgentTool._get_metadata(self) -> Dict&#91;str, Any&#93;` | Implements `ModuleAgentTool._get_metadata`; linked source is authoritative. | [`src/core/modules/atomic/llm/_agent_tool.py:147`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_agent_tool.py#L147) |
| method | `def ModuleAgentTool.name(self) -> str` | Implements `ModuleAgentTool.name`; linked source is authoritative. | [`src/core/modules/atomic/llm/_agent_tool.py:154`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_agent_tool.py#L154) |
| method | `def ModuleAgentTool.module_id(self) -> str` | Implements `ModuleAgentTool.module_id`; linked source is authoritative. | [`src/core/modules/atomic/llm/_agent_tool.py:158`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_agent_tool.py#L158) |
| method | `def ModuleAgentTool.description(self) -> str` | Implements `ModuleAgentTool.description`; linked source is authoritative. | [`src/core/modules/atomic/llm/_agent_tool.py:162`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_agent_tool.py#L162) |
| method | `def ModuleAgentTool.to_tool_call_request(self) -> ToolCallRequest` | Build tool definition for LLM function calling. | [`src/core/modules/atomic/llm/_agent_tool.py:168`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_agent_tool.py#L168) |
| method | `async def ModuleAgentTool.invoke(self, arguments: Dict&#91;str, Any&#93;, agent_context: Optional&#91;Dict&#91;str, Any&#93;&#93;=None) -> Dict&#91;str, Any&#93;` | Execute the wrapped module with given arguments. | [`src/core/modules/atomic/llm/_agent_tool.py:180`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_agent_tool.py#L180) |

## `src/core/modules/atomic/llm/_agent_tool_template.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class TemplateAgentTool` | Wraps a flyto template (workflow) as an AI Agent tool. | [`src/core/modules/atomic/llm/_agent_tool_template.py:22`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_agent_tool_template.py#L22) |
| method | `def TemplateAgentTool.__init__(self, template_id: str, tool_name: str, tool_description: str, input_schema: Optional&#91;Dict&#91;str, Any&#93;&#93;=None, timeout_seconds: int=120, parent_context: Optional&#91;Dict&#91;str, Any&#93;&#93;=None)` | Implements `TemplateAgentTool.__init__`; linked source is authoritative. | [`src/core/modules/atomic/llm/_agent_tool_template.py:28`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_agent_tool_template.py#L28) |
| method | `def TemplateAgentTool.name(self) -> str` | Implements `TemplateAgentTool.name`; linked source is authoritative. | [`src/core/modules/atomic/llm/_agent_tool_template.py:45`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_agent_tool_template.py#L45) |
| method | `def TemplateAgentTool.module_id(self) -> str` | Implements `TemplateAgentTool.module_id`; linked source is authoritative. | [`src/core/modules/atomic/llm/_agent_tool_template.py:49`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_agent_tool_template.py#L49) |
| method | `def TemplateAgentTool.description(self) -> str` | Implements `TemplateAgentTool.description`; linked source is authoritative. | [`src/core/modules/atomic/llm/_agent_tool_template.py:53`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_agent_tool_template.py#L53) |
| method | `def TemplateAgentTool.to_tool_call_request(self) -> ToolCallRequest` | Build tool definition for LLM function calling. | [`src/core/modules/atomic/llm/_agent_tool_template.py:56`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_agent_tool_template.py#L56) |
| method | `async def TemplateAgentTool.invoke(self, arguments: Dict&#91;str, Any&#93;, agent_context: Optional&#91;Dict&#91;str, Any&#93;&#93;=None) -> Dict&#91;str, Any&#93;` | Execute the template with given arguments. | [`src/core/modules/atomic/llm/_agent_tool_template.py:79`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_agent_tool_template.py#L79) |
| method | `async def TemplateAgentTool._load_template(self, ctx: Dict) -> Optional&#91;Dict&#93;` | Load template definition from context or registry. | [`src/core/modules/atomic/llm/_agent_tool_template.py:107`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_agent_tool_template.py#L107) |
| method | `async def TemplateAgentTool._execute_template(self, definition: Dict, arguments: Dict&#91;str, Any&#93;, ctx: Dict) -> Dict&#91;str, Any&#93;` | Execute template via WorkflowEngine. | [`src/core/modules/atomic/llm/_agent_tool_template.py:123`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_agent_tool_template.py#L123) |

## `src/core/modules/atomic/llm/_chat_models.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _tool_requests_to_openai(tools: List&#91;ToolCallRequest&#93;) -> List&#91;Dict&#93;` | Convert ToolCallRequest list to OpenAI function calling format. | [`src/core/modules/atomic/llm/_chat_models.py:22`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_chat_models.py#L22) |
| function | `def _tool_requests_to_anthropic(tools: List&#91;ToolCallRequest&#93;) -> List&#91;Dict&#93;` | Convert ToolCallRequest list to Anthropic tool format. | [`src/core/modules/atomic/llm/_chat_models.py:37`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_chat_models.py#L37) |
| function | `def _messages_to_anthropic(messages: List&#91;Dict&#93;) -> tuple` | Convert OpenAI-format messages to Anthropic format. | [`src/core/modules/atomic/llm/_chat_models.py:49`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_chat_models.py#L49) |
| function | `async def _http_post(url: str, headers: Dict, payload: Dict) -> Dict` | HTTP POST with httpx, aiohttp fallback. | [`src/core/modules/atomic/llm/_chat_models.py:97`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_chat_models.py#L97) |
| class | `class OpenAIChatModel` | ChatModel implementation for OpenAI-compatible APIs. | [`src/core/modules/atomic/llm/_chat_models.py:121`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_chat_models.py#L121) |
| method | `def OpenAIChatModel.__init__(self, api_key: str, model: str='gpt-4o', temperature: float=0.7, base_url: Optional&#91;str&#93;=None, max_tokens: int=4096)` | Implements `OpenAIChatModel.__init__`; linked source is authoritative. | [`src/core/modules/atomic/llm/_chat_models.py:124`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_chat_models.py#L124) |
| method | `def OpenAIChatModel.provider(self) -> str` | Implements `OpenAIChatModel.provider`; linked source is authoritative. | [`src/core/modules/atomic/llm/_chat_models.py:139`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_chat_models.py#L139) |
| method | `def OpenAIChatModel.model_name(self) -> str` | Implements `OpenAIChatModel.model_name`; linked source is authoritative. | [`src/core/modules/atomic/llm/_chat_models.py:143`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_chat_models.py#L143) |
| method | `async def OpenAIChatModel.chat(self, messages: List&#91;Dict&#91;str, Any&#93;&#93;, temperature: float=0.7, max_tokens: Optional&#91;int&#93;=None, tools: Optional&#91;List&#91;ToolCallRequest&#93;&#93;=None, tool_choice: Optional&#91;str&#93;=None) -> ChatResponse` | Implements `OpenAIChatModel.chat`; linked source is authoritative. | [`src/core/modules/atomic/llm/_chat_models.py:146`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_chat_models.py#L146) |
| class | `class AnthropicChatModel` | ChatModel implementation for Anthropic API. | [`src/core/modules/atomic/llm/_chat_models.py:215`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_chat_models.py#L215) |
| method | `def AnthropicChatModel.__init__(self, api_key: str, model: str='claude-sonnet-4-6', temperature: float=0.7, max_tokens: int=4096)` | Implements `AnthropicChatModel.__init__`; linked source is authoritative. | [`src/core/modules/atomic/llm/_chat_models.py:218`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_chat_models.py#L218) |
| method | `def AnthropicChatModel.provider(self) -> str` | Implements `AnthropicChatModel.provider`; linked source is authoritative. | [`src/core/modules/atomic/llm/_chat_models.py:231`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_chat_models.py#L231) |
| method | `def AnthropicChatModel.model_name(self) -> str` | Implements `AnthropicChatModel.model_name`; linked source is authoritative. | [`src/core/modules/atomic/llm/_chat_models.py:235`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_chat_models.py#L235) |
| method | `async def AnthropicChatModel.chat(self, messages: List&#91;Dict&#91;str, Any&#93;&#93;, temperature: float=0.7, max_tokens: Optional&#91;int&#93;=None, tools: Optional&#91;List&#91;ToolCallRequest&#93;&#93;=None, tool_choice: Optional&#91;str&#93;=None) -> ChatResponse` | Implements `AnthropicChatModel.chat`; linked source is authoritative. | [`src/core/modules/atomic/llm/_chat_models.py:238`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_chat_models.py#L238) |
| function | `def create_chat_model(provider: str, api_key: str, model: str, temperature: float=0.7, base_url: Optional&#91;str&#93;=None, max_tokens: int=4096) -> 'OpenAIChatModel \| AnthropicChatModel'` | Create a ChatModel from provider config. | [`src/core/modules/atomic/llm/_chat_models.py:309`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_chat_models.py#L309) |

## `src/core/modules/atomic/llm/_interfaces.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ToolCallRequest` | Tool definition passed to the LLM for function calling. | [`src/core/modules/atomic/llm/_interfaces.py:26`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_interfaces.py#L26) |
| class | `class ToolCall` | A tool invocation returned by the LLM. | [`src/core/modules/atomic/llm/_interfaces.py:37`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_interfaces.py#L37) |
| class | `class ChatResponse` | Standardized LLM chat response. | [`src/core/modules/atomic/llm/_interfaces.py:46`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_interfaces.py#L46) |
| class | `class ChatModel(Protocol)` | Protocol for LLM chat models. | [`src/core/modules/atomic/llm/_interfaces.py:71`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_interfaces.py#L71) |
| method | `async def ChatModel.chat(self, messages: List&#91;Dict&#91;str, Any&#93;&#93;, temperature: float=0.7, max_tokens: Optional&#91;int&#93;=None, tools: Optional&#91;List&#91;ToolCallRequest&#93;&#93;=None, tool_choice: Optional&#91;str&#93;=None) -> ChatResponse` | Implements `ChatModel.chat`; linked source is authoritative. | [`src/core/modules/atomic/llm/_interfaces.py:81`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_interfaces.py#L81) |
| method | `def ChatModel.provider(self) -> str` | Implements `ChatModel.provider`; linked source is authoritative. | [`src/core/modules/atomic/llm/_interfaces.py:91`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_interfaces.py#L91) |
| method | `def ChatModel.model_name(self) -> str` | Implements `ChatModel.model_name`; linked source is authoritative. | [`src/core/modules/atomic/llm/_interfaces.py:94`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_interfaces.py#L94) |
| class | `class AgentTool(Protocol)` | Protocol for tools available to the AI Agent. | [`src/core/modules/atomic/llm/_interfaces.py:98`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_interfaces.py#L98) |
| method | `def AgentTool.name(self) -> str` | Implements `AgentTool.name`; linked source is authoritative. | [`src/core/modules/atomic/llm/_interfaces.py:107`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_interfaces.py#L107) |
| method | `def AgentTool.description(self) -> str` | Implements `AgentTool.description`; linked source is authoritative. | [`src/core/modules/atomic/llm/_interfaces.py:110`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_interfaces.py#L110) |
| method | `def AgentTool.to_tool_call_request(self) -> ToolCallRequest` | Implements `AgentTool.to_tool_call_request`; linked source is authoritative. | [`src/core/modules/atomic/llm/_interfaces.py:112`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_interfaces.py#L112) |
| method | `async def AgentTool.invoke(self, arguments: Dict&#91;str, Any&#93;, agent_context: Optional&#91;Dict&#91;str, Any&#93;&#93;=None) -> Dict&#91;str, Any&#93;` | Implements `AgentTool.invoke`; linked source is authoritative. | [`src/core/modules/atomic/llm/_interfaces.py:114`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_interfaces.py#L114) |

## `src/core/modules/atomic/llm/_prompt.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def resolve_task_prompt(context: Dict&#91;str, Any&#93;, params: Dict&#91;str, Any&#93;, prompt_source: str, prompt_path: str, join_strategy: str, join_separator: str, max_input_size: int) -> str` | Resolve the task prompt based on source configuration. | [`src/core/modules/atomic/llm/_prompt.py:21`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_prompt.py#L21) |
| function | `def _resolve_from_input(context: Dict&#91;str, Any&#93;, prompt_path: str, join_strategy: str, join_separator: str, max_input_size: int) -> str` | Resolve prompt from input using path expression. | [`src/core/modules/atomic/llm/_prompt.py:60`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_prompt.py#L60) |
| function | `def simple_resolve(context: Dict&#91;str, Any&#93;, path: str) -> Any` | Simple variable resolution fallback. | [`src/core/modules/atomic/llm/_prompt.py:84`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_prompt.py#L84) |
| function | `def substitute_variables(template: str, context: Dict&#91;str, Any&#93;, max_input_size: int) -> str` | Substitute &#123;&#123;...&#125;&#125; variables in a template string. | [`src/core/modules/atomic/llm/_prompt.py:121`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_prompt.py#L121) |
| method | `def substitute_variables.replacer(match: re.Match) -> str` | Implements `substitute_variables.replacer`; linked source is authoritative. | [`src/core/modules/atomic/llm/_prompt.py:127`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_prompt.py#L127) |
| function | `def _join_array(arr: Union&#91;List, tuple&#93;, strategy: str, separator: str, max_size: int) -> str` | Join array elements based on strategy. | [`src/core/modules/atomic/llm/_prompt.py:137`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_prompt.py#L137) |
| function | `def stringify_value(value: Any, max_size: int) -> str` | Convert value to string with size limit. | [`src/core/modules/atomic/llm/_prompt.py:164`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_prompt.py#L164) |

## `src/core/modules/atomic/llm/_providers.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def call_openai_with_tools(messages: List&#91;Dict&#93;, tools: List&#91;Dict&#93;, model: str, temperature: float, api_key: str, base_url: Optional&#91;str&#93;) -> Dict&#91;str, Any&#93;` | Call OpenAI API with tool support. | [`src/core/modules/atomic/llm/_providers.py:22`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_providers.py#L22) |
| function | `async def _call_openai_aiohttp(messages: List&#91;Dict&#93;, tools: List&#91;Dict&#93;, model: str, temperature: float, api_key: str, base_url: Optional&#91;str&#93;) -> Dict&#91;str, Any&#93;` | Call OpenAI API using aiohttp fallback. | [`src/core/modules/atomic/llm/_providers.py:62`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_providers.py#L62) |
| function | `def _parse_openai_response(result: Dict) -> Dict&#91;str, Any&#93;` | Parse OpenAI API response into standardized format. | [`src/core/modules/atomic/llm/_providers.py:99`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_providers.py#L99) |
| function | `async def call_anthropic_with_tools(messages: List&#91;Dict&#93;, tools: List&#91;Dict&#93;, model: str, temperature: float, api_key: str) -> Dict&#91;str, Any&#93;` | Call Anthropic API with tool support. | [`src/core/modules/atomic/llm/_providers.py:129`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_providers.py#L129) |

## `src/core/modules/atomic/llm/_resilience.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def truncate_tool_result(result: Any, max_len: int=MAX_TOOL_RESULT_LEN) -> str` | Truncate tool result to prevent context overflow. | [`src/core/modules/atomic/llm/_resilience.py:66`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_resilience.py#L66) |
| class | `class SnapshotGuard` | Tracks whether the agent has seen the page before interacting. | [`src/core/modules/atomic/llm/_resilience.py:84`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_resilience.py#L84) |
| method | `def SnapshotGuard.__init__(self)` | Implements `SnapshotGuard.__init__`; linked source is authoritative. | [`src/core/modules/atomic/llm/_resilience.py:91`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_resilience.py#L91) |
| method | `def SnapshotGuard.on_tool_call(self, module_id: str) -> None` | Update state after a tool call. | [`src/core/modules/atomic/llm/_resilience.py:94`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_resilience.py#L94) |
| method | `def SnapshotGuard.needs_snapshot(self, module_id: str) -> bool` | Check if a snapshot should be auto-injected before this call. | [`src/core/modules/atomic/llm/_resilience.py:101`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_resilience.py#L101) |
| function | `def is_transient_error(error_msg: str) -> bool` | Check if error is transient (worth retrying). | [`src/core/modules/atomic/llm/_resilience.py:110`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_resilience.py#L110) |
| function | `def is_session_dead(error_msg: str) -> bool` | Check if browser session is dead (needs relaunch). | [`src/core/modules/atomic/llm/_resilience.py:116`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_resilience.py#L116) |
| class | `class CircuitBreaker` | Prevents infinite retry loops on failing tools. | [`src/core/modules/atomic/llm/_resilience.py:124`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_resilience.py#L124) |
| method | `def CircuitBreaker.__init__(self, max_goto_fails: int=3)` | Implements `CircuitBreaker.__init__`; linked source is authoritative. | [`src/core/modules/atomic/llm/_resilience.py:131`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_resilience.py#L131) |
| method | `def CircuitBreaker.check(self, module_id: str) -> Optional&#91;str&#93;` | Check if this tool call should be blocked. | [`src/core/modules/atomic/llm/_resilience.py:137`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_resilience.py#L137) |
| method | `def CircuitBreaker.record_result(self, module_id: str, success: bool, error: str='') -> None` | Record tool result for circuit breaker tracking. | [`src/core/modules/atomic/llm/_resilience.py:150`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_resilience.py#L150) |
| method | `def CircuitBreaker.reset(self) -> None` | Reset all breakers. | [`src/core/modules/atomic/llm/_resilience.py:166`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_resilience.py#L166) |
| function | `def scan_for_injection(text: str) -> Optional&#91;str&#93;` | Scan tool result for prompt injection patterns. | [`src/core/modules/atomic/llm/_resilience.py:175`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_resilience.py#L175) |

## `src/core/modules/atomic/llm/_tools.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def build_tool_definitions(tool_ids: List&#91;str&#93;) -> List&#91;Dict&#93;` | Build OpenAI-compatible tool definitions from module IDs. | [`src/core/modules/atomic/llm/_tools.py:21`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_tools.py#L21) |
| function | `def _schema_to_json_schema(params_schema: List&#91;Dict&#93;) -> Dict` | Convert flyto params schema to JSON Schema for OpenAI. | [`src/core/modules/atomic/llm/_tools.py:61`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_tools.py#L61) |
| function | `def _map_type(flyto_type: str) -> str` | Map flyto types to JSON Schema types. | [`src/core/modules/atomic/llm/_tools.py:112`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_tools.py#L112) |
| function | `async def execute_tool(tool_name: str, arguments: Dict, parent_context: Dict) -> Dict` | Execute a tool (module) and return results. | [`src/core/modules/atomic/llm/_tools.py:126`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_tools.py#L126) |
| function | `def build_agent_system_prompt(base_prompt: str, tools: List&#91;Dict&#93;) -> str` | Build the system prompt for the agent. | [`src/core/modules/atomic/llm/_tools.py:180`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_tools.py#L180) |
| function | `def build_task_prompt(task: str, context: Dict) -> str` | Build the task prompt with context. | [`src/core/modules/atomic/llm/_tools.py:196`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/_tools.py#L196) |

## `src/core/modules/atomic/llm/agent.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def llm_agent(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Run an autonomous AI agent with tool use. | [`src/core/modules/atomic/llm/agent.py:269`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/agent.py#L269) |
| function | `async def _run_tools_loop(chat_model, messages, tools, tool_defs, tool_map, max_iterations, steps, notify, context, response_format='text', output_schema=None, recorder=None)` | Standard Tools Agent loop (function calling) with resilience protections. | [`src/core/modules/atomic/llm/agent.py:409`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/agent.py#L409) |
| function | `async def _run_react_loop(chat_model, messages, tools, tool_defs, tool_map, max_iterations, steps, notify, context, response_format='text', output_schema=None, recorder=None)` | ReAct Agent loop — Thought → Action → Observation chain. | [`src/core/modules/atomic/llm/agent.py:592`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/agent.py#L592) |
| function | `def _parse_react_response(content: str)` | Parse ReAct-style response into (thought, action, final_answer). | [`src/core/modules/atomic/llm/agent.py:750`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/agent.py#L750) |
| function | `def _build_react_instructions() -> str` | Build ReAct-specific system prompt addition. | [`src/core/modules/atomic/llm/agent.py:791`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/agent.py#L791) |
| function | `def _build_output_format_instructions(response_format: str, output_schema: Optional&#91;Dict&#93;) -> str` | Build output format instructions for the system prompt. | [`src/core/modules/atomic/llm/agent.py:814`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/agent.py#L814) |
| function | `def _parse_output(content: str, response_format: str, output_schema: Optional&#91;Dict&#93;)` | Parse and validate the final output according to response_format. | [`src/core/modules/atomic/llm/agent.py:826`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/agent.py#L826) |
| function | `def _resolve_chat_model(context: Dict) -> Optional&#91;ChatModel&#93;` | Get ChatModel from connected ai.model sub-node, or build from inline params. | [`src/core/modules/atomic/llm/agent.py:858`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/agent.py#L858) |
| function | `def _resolve_memory(context: Dict) -> list` | Get conversation history from connected ai.memory. | [`src/core/modules/atomic/llm/agent.py:928`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/agent.py#L928) |
| function | `def _resolve_tools(context: Dict) -> List&#91;AgentTool&#93;` | Get AgentTool instances from connected ai.tool sub-nodes. | [`src/core/modules/atomic/llm/agent.py:938`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/agent.py#L938) |
| function | `def _summarize_tool_result(result: Any, max_len: int=500) -> Any` | Summarize tool result for steps log. | [`src/core/modules/atomic/llm/agent.py:961`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/agent.py#L961) |

## `src/core/modules/atomic/llm/chat.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def llm_chat(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Interact with LLM APIs | [`src/core/modules/atomic/llm/chat.py:140`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/chat.py#L140) |
| function | `async def _call_openai(messages: List&#91;Dict&#93;, model: str, temperature: float, max_tokens: int, api_key: str, base_url: Optional&#91;str&#93;, response_format: str) -> Dict&#91;str, Any&#93;` | Call OpenAI API | [`src/core/modules/atomic/llm/chat.py:270`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/chat.py#L270) |
| function | `async def _call_openai_aiohttp(messages: List&#91;Dict&#93;, model: str, temperature: float, max_tokens: int, api_key: str, base_url: Optional&#91;str&#93;, response_format: str) -> Dict&#91;str, Any&#93;` | Call OpenAI API using aiohttp | [`src/core/modules/atomic/llm/chat.py:319`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/chat.py#L319) |
| function | `async def _call_anthropic(messages: List&#91;Dict&#93;, model: str, temperature: float, max_tokens: int, api_key: str, base_url: str=None) -> Dict&#91;str, Any&#93;` | Call Anthropic Claude API | [`src/core/modules/atomic/llm/chat.py:369`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/chat.py#L369) |
| function | `async def _call_ollama(messages: List&#91;Dict&#93;, model: str, temperature: float, max_tokens: int, base_url: Optional&#91;str&#93;) -> Dict&#91;str, Any&#93;` | Call Ollama local API | [`src/core/modules/atomic/llm/chat.py:434`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/chat.py#L434) |
| function | `def _parse_json_response(text: str) -> Optional&#91;Any&#93;` | Try to parse JSON from response | [`src/core/modules/atomic/llm/chat.py:485`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/chat.py#L485) |

## `src/core/modules/atomic/llm/code_fix.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def llm_code_fix(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Generate and optionally apply code fixes using AI | [`src/core/modules/atomic/llm/code_fix.py:115`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/code_fix.py#L115) |
| function | `def _get_system_prompt() -> str` | Get system prompt for code fixing | [`src/core/modules/atomic/llm/code_fix.py:259`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/code_fix.py#L259) |
| function | `def _build_fix_prompt(issues: List&#91;Dict&#93;, files: Dict&#91;str, str&#93;, context: str) -> str` | Build the fix generation prompt | [`src/core/modules/atomic/llm/code_fix.py:287`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/code_fix.py#L287) |
| function | `def _parse_fixes(response: str, parsed: Optional&#91;Dict&#93;) -> List&#91;Dict&#93;` | Parse fixes from LLM response | [`src/core/modules/atomic/llm/code_fix.py:310`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/code_fix.py#L310) |
| function | `def _apply_fix(content: str, fix: Dict) -> str` | Apply a single fix to content | [`src/core/modules/atomic/llm/code_fix.py:331`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/code_fix.py#L331) |
| function | `def _generate_diff(original: str, new: str) -> str` | Generate a simple diff | [`src/core/modules/atomic/llm/code_fix.py:354`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/llm/code_fix.py#L354) |
