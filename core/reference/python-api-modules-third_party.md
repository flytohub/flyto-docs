<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Third Party

Source-backed signatures for **160 declarations** across **39 files** in the modules: third party area.

## `src/core/modules/third_party/ai/agents/autonomous.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class AutonomousAgentModule(LLMClientMixin, BaseModule)` | Autonomous AI Agent Module with memory and goal-oriented behavior | [`src/core/modules/third_party/ai/agents/autonomous.py:158`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/agents/autonomous.py#L158) |
| method | `def AutonomousAgentModule.validate_params(self) -> None` | Implements `AutonomousAgentModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/ai/agents/autonomous.py:161`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/agents/autonomous.py#L161) |
| method | `async def AutonomousAgentModule.execute(self) -> Any` | Implements `AutonomousAgentModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/ai/agents/autonomous.py:172`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/agents/autonomous.py#L172) |

## `src/core/modules/third_party/ai/agents/chain.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ChainAgentModule(LLMClientMixin, BaseModule)` | Chain Agent Module - Sequential AI processing | [`src/core/modules/third_party/ai/agents/chain.py:149`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/agents/chain.py#L149) |
| method | `def ChainAgentModule.validate_params(self) -> None` | Implements `ChainAgentModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/ai/agents/chain.py:152`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/agents/chain.py#L152) |
| method | `async def ChainAgentModule.execute(self) -> Any` | Implements `ChainAgentModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/ai/agents/chain.py:165`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/agents/chain.py#L165) |

## `src/core/modules/third_party/ai/agents/llm_client.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class LLMClientMixin` | Mixin providing LLM calling capabilities. | [`src/core/modules/third_party/ai/agents/llm_client.py:26`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/agents/llm_client.py#L26) |
| method | `def LLMClientMixin.validate_llm_params(self, params: dict) -> None` | Validate and set LLM parameters. | [`src/core/modules/third_party/ai/agents/llm_client.py:46`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/agents/llm_client.py#L46) |
| method | `async def LLMClientMixin._call_llm(self, messages: List&#91;Dict&#91;str, str&#93;&#93;) -> str` | Call LLM based on configured provider. | [`src/core/modules/third_party/ai/agents/llm_client.py:80`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/agents/llm_client.py#L80) |
| method | `async def LLMClientMixin._call_openai(self, messages: List&#91;Dict&#91;str, str&#93;&#93;) -> str` | Call OpenAI API. | [`src/core/modules/third_party/ai/agents/llm_client.py:93`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/agents/llm_client.py#L93) |
| method | `async def LLMClientMixin._call_anthropic(self, messages: List&#91;Dict&#91;str, str&#93;&#93;) -> str` | Call Anthropic Claude API via HTTP. | [`src/core/modules/third_party/ai/agents/llm_client.py:109`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/agents/llm_client.py#L109) |
| method | `async def LLMClientMixin._call_gemini(self, messages: List&#91;Dict&#91;str, str&#93;&#93;) -> str` | Call Google Gemini API via HTTP. | [`src/core/modules/third_party/ai/agents/llm_client.py:151`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/agents/llm_client.py#L151) |
| method | `async def LLMClientMixin._call_ollama(self, messages: List&#91;Dict&#91;str, str&#93;&#93;) -> str` | Call local Ollama API. | [`src/core/modules/third_party/ai/agents/llm_client.py:200`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/agents/llm_client.py#L200) |

## `src/core/modules/third_party/ai/agents/tool_use.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def agent_tool_use(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | AI Agent that can call tools/functions. | [`src/core/modules/third_party/ai/agents/tool_use.py:199`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/agents/tool_use.py#L199) |
| function | `def _format_openai_tools(tools: List&#91;Dict&#91;str, Any&#93;&#93;) -> List&#91;Dict&#91;str, Any&#93;&#93;` | Format tool definitions for OpenAI function calling. | [`src/core/modules/third_party/ai/agents/tool_use.py:249`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/agents/tool_use.py#L249) |
| function | `def _format_anthropic_tools(tools: List&#91;Dict&#91;str, Any&#93;&#93;) -> List&#91;Dict&#91;str, Any&#93;&#93;` | Format tool definitions for Anthropic tool use. | [`src/core/modules/third_party/ai/agents/tool_use.py:264`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/agents/tool_use.py#L264) |
| function | `async def _run_openai_agent(api_key: str, model: str, prompt: str, tools: List&#91;Dict&#91;str, Any&#93;&#93;, max_iterations: int, system_prompt: str, context: Dict&#91;str, Any&#93;=None) -> Dict&#91;str, Any&#93;` | Run the tool-use loop with OpenAI. | [`src/core/modules/third_party/ai/agents/tool_use.py:276`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/agents/tool_use.py#L276) |
| function | `async def _run_anthropic_agent(api_key: str, model: str, prompt: str, tools: List&#91;Dict&#91;str, Any&#93;&#93;, max_iterations: int, system_prompt: str, context: Dict&#91;str, Any&#93;=None) -> Dict&#91;str, Any&#93;` | Run the tool-use loop with Anthropic. | [`src/core/modules/third_party/ai/agents/tool_use.py:400`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/agents/tool_use.py#L400) |

## `src/core/modules/third_party/ai/local_ollama.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class LocalOllamaChatModule(BaseModule)` | Local Ollama Chat Module - Completely offline LLM | [`src/core/modules/third_party/ai/local_ollama.py:169`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/local_ollama.py#L169) |
| method | `def LocalOllamaChatModule.validate_params(self) -> None` | Implements `LocalOllamaChatModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/ai/local_ollama.py:172`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/local_ollama.py#L172) |
| method | `async def LocalOllamaChatModule.execute(self) -> Any` | Implements `LocalOllamaChatModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/ai/local_ollama.py:202`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/local_ollama.py#L202) |

## `src/core/modules/third_party/ai/openai_integration.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class OpenAIChatModule(BaseModule)` | OpenAI Chat Module | [`src/core/modules/third_party/ai/openai_integration.py:154`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/openai_integration.py#L154) |
| method | `def OpenAIChatModule.validate_params(self) -> None` | Implements `OpenAIChatModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/ai/openai_integration.py:157`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/openai_integration.py#L157) |
| method | `async def OpenAIChatModule.execute(self) -> Any` | Implements `OpenAIChatModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/ai/openai_integration.py:172`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/openai_integration.py#L172) |
| class | `class OpenAIImageModule(BaseModule)` | DALL-E Image Generation Module | [`src/core/modules/third_party/ai/openai_integration.py:352`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/openai_integration.py#L352) |
| method | `def OpenAIImageModule.validate_params(self) -> None` | Implements `OpenAIImageModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/ai/openai_integration.py:355`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/openai_integration.py#L355) |
| method | `async def OpenAIImageModule.execute(self) -> Any` | Implements `OpenAIImageModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/ai/openai_integration.py:370`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/openai_integration.py#L370) |

## `src/core/modules/third_party/ai/services.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def anthropic_chat(context)` | Send chat message to Anthropic Claude API | [`src/core/modules/third_party/ai/services.py:181`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/services.py#L181) |
| function | `async def google_gemini_chat(context)` | Send chat message to Google Gemini API | [`src/core/modules/third_party/ai/services.py:359`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/ai/services.py#L359) |

## `src/core/modules/third_party/cloud/aws/s3_delete.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def aws_s3_delete(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Delete an object from AWS S3. | [`src/core/modules/third_party/cloud/aws/s3_delete.py:81`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/aws/s3_delete.py#L81) |
| function | `def _make_s3_client(params: Dict&#91;str, Any&#93;)` | Build an S3 client from params or environment. | [`src/core/modules/third_party/cloud/aws/s3_delete.py:102`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/aws/s3_delete.py#L102) |
| function | `async def _delete_object(client, bucket: str, key: str)` | Run delete_object in executor. | [`src/core/modules/third_party/cloud/aws/s3_delete.py:127`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/aws/s3_delete.py#L127) |
| method | `def _delete_object._run()` | Implements `_delete_object._run`; linked source is authoritative. | [`src/core/modules/third_party/cloud/aws/s3_delete.py:129`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/aws/s3_delete.py#L129) |

## `src/core/modules/third_party/cloud/aws/s3_download.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def aws_s3_download(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Download a file from AWS S3. | [`src/core/modules/third_party/cloud/aws/s3_download.py:85`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/aws/s3_download.py#L85) |
| method | `def aws_s3_download._download()` | Implements `aws_s3_download._download`; linked source is authoritative. | [`src/core/modules/third_party/cloud/aws/s3_download.py:121`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/aws/s3_download.py#L121) |

## `src/core/modules/third_party/cloud/aws/s3_list.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def aws_s3_list(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | List objects in an S3 bucket. | [`src/core/modules/third_party/cloud/aws/s3_list.py:98`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/aws/s3_list.py#L98) |
| function | `def _make_s3_client(params: Dict&#91;str, Any&#93;)` | Build an S3 client from params or environment. | [`src/core/modules/third_party/cloud/aws/s3_list.py:117`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/aws/s3_list.py#L117) |
| function | `async def _list_objects(client, bucket: str, prefix: str, max_keys: int)` | Run list_objects_v2 in executor and return (objects, truncated). | [`src/core/modules/third_party/cloud/aws/s3_list.py:142`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/aws/s3_list.py#L142) |
| method | `def _list_objects._run()` | Implements `_list_objects._run`; linked source is authoritative. | [`src/core/modules/third_party/cloud/aws/s3_list.py:147`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/aws/s3_list.py#L147) |

## `src/core/modules/third_party/cloud/aws/s3_upload.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def aws_s3_upload(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Upload a local file to AWS S3. | [`src/core/modules/third_party/cloud/aws/s3_upload.py:90`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/aws/s3_upload.py#L90) |
| method | `def aws_s3_upload._upload()` | Implements `aws_s3_upload._upload`; linked source is authoritative. | [`src/core/modules/third_party/cloud/aws/s3_upload.py:129`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/aws/s3_upload.py#L129) |

## `src/core/modules/third_party/cloud/azure.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class AzureUploadModule(BaseModule)` | Azure Blob Storage Upload Module | [`src/core/modules/third_party/cloud/azure.py:129`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/azure.py#L129) |
| method | `def AzureUploadModule.validate_params(self) -> None` | Implements `AzureUploadModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/cloud/azure.py:132`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/azure.py#L132) |
| method | `async def AzureUploadModule.execute(self) -> Any` | Implements `AzureUploadModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/cloud/azure.py:157`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/azure.py#L157) |
| class | `class AzureDownloadModule(BaseModule)` | Azure Blob Storage Download Module | [`src/core/modules/third_party/cloud/azure.py:309`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/azure.py#L309) |
| method | `def AzureDownloadModule.validate_params(self) -> None` | Implements `AzureDownloadModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/cloud/azure.py:312`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/azure.py#L312) |
| method | `async def AzureDownloadModule.execute(self) -> Any` | Implements `AzureDownloadModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/cloud/azure.py:331`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/azure.py#L331) |

## `src/core/modules/third_party/cloud/gcs.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class GCSUploadModule(BaseModule)` | Google Cloud Storage Upload Module | [`src/core/modules/third_party/cloud/gcs.py:130`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/gcs.py#L130) |
| method | `def GCSUploadModule.validate_params(self) -> None` | Implements `GCSUploadModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/cloud/gcs.py:133`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/gcs.py#L133) |
| method | `async def GCSUploadModule.execute(self) -> Any` | Implements `GCSUploadModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/cloud/gcs.py:148`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/gcs.py#L148) |
| class | `class GCSDownloadModule(BaseModule)` | Google Cloud Storage Download Module | [`src/core/modules/third_party/cloud/gcs.py:288`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/gcs.py#L288) |
| method | `def GCSDownloadModule.validate_params(self) -> None` | Implements `GCSDownloadModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/cloud/gcs.py:291`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/gcs.py#L291) |
| method | `async def GCSDownloadModule.execute(self) -> Any` | Implements `GCSDownloadModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/cloud/gcs.py:299`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/gcs.py#L299) |

## `src/core/modules/third_party/cloud/google/calendar_create.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def google_calendar_create_event(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Create a Google Calendar event. | [`src/core/modules/third_party/cloud/google/calendar_create.py:101`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/google/calendar_create.py#L101) |
| function | `def _build_event_body(params: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Build Google Calendar event JSON body. | [`src/core/modules/third_party/cloud/google/calendar_create.py:132`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/google/calendar_create.py#L132) |
| function | `async def _post_calendar_event(access_token: str, event_body: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | POST event to Google Calendar API. | [`src/core/modules/third_party/cloud/google/calendar_create.py:152`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/google/calendar_create.py#L152) |

## `src/core/modules/third_party/cloud/google/calendar_list.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def google_calendar_list_events(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | List upcoming Google Calendar events. | [`src/core/modules/third_party/cloud/google/calendar_list.py:93`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/google/calendar_list.py#L93) |
| function | `async def _fetch_events(access_token: str, max_results: int, time_min: str, time_max: str) -> Dict&#91;str, Any&#93;` | GET events from Google Calendar API. | [`src/core/modules/third_party/cloud/google/calendar_list.py:114`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/google/calendar_list.py#L114) |
| function | `def _parse_events(resp_data: Dict&#91;str, Any&#93;) -> List&#91;Dict&#91;str, Any&#93;&#93;` | Parse event items from Calendar API response. | [`src/core/modules/third_party/cloud/google/calendar_list.py:146`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/google/calendar_list.py#L146) |

## `src/core/modules/third_party/cloud/google/gmail_search.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def google_gmail_search(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Search Gmail messages. | [`src/core/modules/third_party/cloud/google/gmail_search.py:92`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/google/gmail_search.py#L92) |
| function | `async def _search_messages(access_token: str, query: str, max_results: int) -> List&#91;Dict&#91;str, Any&#93;&#93;` | Search Gmail and fetch message metadata. | [`src/core/modules/third_party/cloud/google/gmail_search.py:113`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/google/gmail_search.py#L113) |
| function | `async def _fetch_message_metadata(session, headers: dict, msg_id: str) -> Optional&#91;Dict&#91;str, Any&#93;&#93;` | Fetch metadata for a single Gmail message. | [`src/core/modules/third_party/cloud/google/gmail_search.py:143`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/google/gmail_search.py#L143) |

## `src/core/modules/third_party/cloud/google/gmail_send.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def google_gmail_send(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Send an email via the Gmail API. | [`src/core/modules/third_party/cloud/google/gmail_send.py:96`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/google/gmail_send.py#L96) |
| function | `def _build_mime_message(params: Dict&#91;str, Any&#93;) -> str` | Build RFC 2822 MIME message and return base64url-encoded raw. | [`src/core/modules/third_party/cloud/google/gmail_send.py:127`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/google/gmail_send.py#L127) |
| function | `async def _send_message(access_token: str, raw_message: str) -> Dict&#91;str, Any&#93;` | POST the raw message to Gmail API. | [`src/core/modules/third_party/cloud/google/gmail_send.py:148`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/google/gmail_send.py#L148) |

## `src/core/modules/third_party/cloud/storage.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def aws_s3_upload(context)` | Upload file to AWS S3 | [`src/core/modules/third_party/cloud/storage.py:188`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/storage.py#L188) |
| function | `async def aws_s3_download(context)` | Download file from AWS S3 | [`src/core/modules/third_party/cloud/storage.py:380`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/cloud/storage.py#L380) |

## `src/core/modules/third_party/communication/messaging/discord.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class DiscordSendMessageModule(BaseModule)` | Send message to Discord via webhook | [`src/core/modules/third_party/communication/messaging/discord.py:106`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/messaging/discord.py#L106) |
| method | `def DiscordSendMessageModule.validate_params(self) -> None` | Implements `DiscordSendMessageModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/communication/messaging/discord.py:112`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/messaging/discord.py#L112) |
| method | `async def DiscordSendMessageModule.execute(self) -> Any` | Implements `DiscordSendMessageModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/communication/messaging/discord.py:131`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/messaging/discord.py#L131) |

## `src/core/modules/third_party/communication/messaging/email.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class EmailSendModule(BaseModule)` | Send email via SMTP | [`src/core/modules/third_party/communication/messaging/email.py:149`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/messaging/email.py#L149) |
| method | `def EmailSendModule.validate_params(self) -> None` | Implements `EmailSendModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/communication/messaging/email.py:155`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/messaging/email.py#L155) |
| method | `async def EmailSendModule.execute(self) -> Any` | Implements `EmailSendModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/communication/messaging/email.py:171`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/messaging/email.py#L171) |

## `src/core/modules/third_party/communication/messaging/slack.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class SlackSendMessageModule(BaseModule)` | Send message to Slack via webhook | [`src/core/modules/third_party/communication/messaging/slack.py:122`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/messaging/slack.py#L122) |
| method | `def SlackSendMessageModule.validate_params(self) -> None` | Implements `SlackSendMessageModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/communication/messaging/slack.py:128`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/messaging/slack.py#L128) |
| method | `async def SlackSendMessageModule.execute(self) -> Any` | Implements `SlackSendMessageModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/communication/messaging/slack.py:148`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/messaging/slack.py#L148) |

## `src/core/modules/third_party/communication/messaging/teams.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class TeamsSendMessageModule(BaseModule)` | Send message to Microsoft Teams via incoming webhook | [`src/core/modules/third_party/communication/messaging/teams.py:109`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/messaging/teams.py#L109) |
| method | `def TeamsSendMessageModule.validate_params(self) -> None` | Implements `TeamsSendMessageModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/communication/messaging/teams.py:115`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/messaging/teams.py#L115) |
| method | `async def TeamsSendMessageModule.execute(self) -> Any` | Implements `TeamsSendMessageModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/communication/messaging/teams.py:131`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/messaging/teams.py#L131) |

## `src/core/modules/third_party/communication/messaging/telegram.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class TelegramSendMessageModule(BaseModule)` | Send message via Telegram Bot API | [`src/core/modules/third_party/communication/messaging/telegram.py:116`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/messaging/telegram.py#L116) |
| method | `def TelegramSendMessageModule.validate_params(self) -> None` | Implements `TelegramSendMessageModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/communication/messaging/telegram.py:122`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/messaging/telegram.py#L122) |
| method | `async def TelegramSendMessageModule.execute(self) -> Any` | Implements `TelegramSendMessageModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/communication/messaging/telegram.py:145`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/messaging/telegram.py#L145) |

## `src/core/modules/third_party/communication/messaging/whatsapp.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class WhatsAppSendMessageModule(BaseModule)` | Send message via WhatsApp Business API | [`src/core/modules/third_party/communication/messaging/whatsapp.py:143`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/messaging/whatsapp.py#L143) |
| method | `def WhatsAppSendMessageModule.validate_params(self) -> None` | Implements `WhatsAppSendMessageModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/communication/messaging/whatsapp.py:151`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/messaging/whatsapp.py#L151) |
| method | `async def WhatsAppSendMessageModule.execute(self) -> Any` | Implements `WhatsAppSendMessageModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/communication/messaging/whatsapp.py:171`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/messaging/whatsapp.py#L171) |

## `src/core/modules/third_party/communication/twilio.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class TwilioSendSMSModule(BaseModule)` | Twilio Send SMS Module | [`src/core/modules/third_party/communication/twilio.py:137`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/twilio.py#L137) |
| method | `def TwilioSendSMSModule.validate_params(self) -> None` | Implements `TwilioSendSMSModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/communication/twilio.py:140`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/twilio.py#L140) |
| method | `async def TwilioSendSMSModule.execute(self) -> Any` | Implements `TwilioSendSMSModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/communication/twilio.py:157`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/twilio.py#L157) |
| class | `class TwilioMakeCallModule(BaseModule)` | Twilio Make Call Module | [`src/core/modules/third_party/communication/twilio.py:299`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/twilio.py#L299) |
| method | `def TwilioMakeCallModule.validate_params(self) -> None` | Implements `TwilioMakeCallModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/communication/twilio.py:302`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/twilio.py#L302) |
| method | `async def TwilioMakeCallModule.execute(self) -> Any` | Implements `TwilioMakeCallModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/communication/twilio.py:319`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/communication/twilio.py#L319) |

## `src/core/modules/third_party/database/connectors/mongodb_find.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def mongodb_find(context)` | Query MongoDB documents | [`src/core/modules/third_party/database/connectors/mongodb_find.py:92`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/database/connectors/mongodb_find.py#L92) |

## `src/core/modules/third_party/database/connectors/mongodb_insert.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def mongodb_insert(context)` | Insert documents into MongoDB | [`src/core/modules/third_party/database/connectors/mongodb_insert.py:92`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/database/connectors/mongodb_insert.py#L92) |

## `src/core/modules/third_party/database/connectors/mysql.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def mysql_query(context)` | Execute MySQL query | [`src/core/modules/third_party/database/connectors/mysql.py:90`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/database/connectors/mysql.py#L90) |

## `src/core/modules/third_party/database/connectors/postgresql.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def postgresql_query(context)` | Execute PostgreSQL query | [`src/core/modules/third_party/database/connectors/postgresql.py:86`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/database/connectors/postgresql.py#L86) |

## `src/core/modules/third_party/database/redis.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class RedisGetModule(BaseModule)` | Redis Get Module | [`src/core/modules/third_party/database/redis.py:80`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/database/redis.py#L80) |
| method | `def RedisGetModule.validate_params(self) -> None` | Implements `RedisGetModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/database/redis.py:83`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/database/redis.py#L83) |
| method | `async def RedisGetModule.execute(self) -> Any` | Implements `RedisGetModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/database/redis.py:100`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/database/redis.py#L100) |
| class | `class RedisSetModule(BaseModule)` | Redis Set Module | [`src/core/modules/third_party/database/redis.py:199`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/database/redis.py#L199) |
| method | `def RedisSetModule.validate_params(self) -> None` | Implements `RedisSetModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/database/redis.py:202`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/database/redis.py#L202) |
| method | `async def RedisSetModule.execute(self) -> Any` | Implements `RedisSetModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/database/redis.py:221`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/database/redis.py#L221) |

## `src/core/modules/third_party/developer/github.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _github_headers(token=None)` | Build common GitHub API headers. | [`src/core/modules/third_party/developer/github.py:21`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/github.py#L21) |
| function | `def _simplify_issues(data)` | Extract essential fields from GitHub issue list. | [`src/core/modules/third_party/developer/github.py:29`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/github.py#L29) |
| function | `def _simplify_repos(data)` | Extract essential fields from GitHub repo list. | [`src/core/modules/third_party/developer/github.py:40`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/github.py#L40) |
| class | `class GitHubGetRepoModule(BaseModule)` | Get GitHub repository information | [`src/core/modules/third_party/developer/github.py:139`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/github.py#L139) |
| method | `def GitHubGetRepoModule.validate_params(self) -> None` | Implements `GitHubGetRepoModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/developer/github.py:145`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/github.py#L145) |
| method | `async def GitHubGetRepoModule.execute(self) -> Any` | Implements `GitHubGetRepoModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/developer/github.py:155`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/github.py#L155) |
| class | `class GitHubListIssuesModule(BaseModule)` | List GitHub issues | [`src/core/modules/third_party/developer/github.py:287`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/github.py#L287) |
| method | `def GitHubListIssuesModule.validate_params(self) -> None` | Implements `GitHubListIssuesModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/developer/github.py:293`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/github.py#L293) |
| method | `async def GitHubListIssuesModule.execute(self) -> Any` | Implements `GitHubListIssuesModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/developer/github.py:306`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/github.py#L306) |
| class | `class GitHubCreateIssueModule(BaseModule)` | Create GitHub issue | [`src/core/modules/third_party/developer/github.py:426`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/github.py#L426) |
| method | `def GitHubCreateIssueModule.validate_params(self) -> None` | Implements `GitHubCreateIssueModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/developer/github.py:432`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/github.py#L432) |
| method | `async def GitHubCreateIssueModule.execute(self) -> Any` | Implements `GitHubCreateIssueModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/developer/github.py:453`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/github.py#L453) |
| class | `class GitHubCreatePRModule(BaseModule)` | Create GitHub pull request | [`src/core/modules/third_party/developer/github.py:603`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/github.py#L603) |
| method | `def GitHubCreatePRModule.validate_params(self) -> None` | Implements `GitHubCreatePRModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/developer/github.py:609`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/github.py#L609) |
| method | `async def GitHubCreatePRModule.execute(self) -> Any` | Implements `GitHubCreatePRModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/developer/github.py:631`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/github.py#L631) |
| class | `class GitHubListReposModule(BaseModule)` | List GitHub repositories | [`src/core/modules/third_party/developer/github.py:774`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/github.py#L774) |
| method | `def GitHubListReposModule.validate_params(self) -> None` | Implements `GitHubListReposModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/developer/github.py:780`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/github.py#L780) |
| method | `async def GitHubListReposModule.execute(self) -> Any` | Implements `GitHubListReposModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/developer/github.py:798`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/github.py#L798) |

## `src/core/modules/third_party/developer/http/requests.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class HTTPGetModule(BaseModule)` | Send HTTP GET request | [`src/core/modules/third_party/developer/http/requests.py:64`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/http/requests.py#L64) |
| method | `def HTTPGetModule.validate_params(self) -> None` | Implements `HTTPGetModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/developer/http/requests.py:70`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/http/requests.py#L70) |
| method | `async def HTTPGetModule.execute(self) -> Any` | Implements `HTTPGetModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/developer/http/requests.py:74`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/http/requests.py#L74) |
| class | `class HTTPPostModule(BaseModule)` | Send HTTP POST request | [`src/core/modules/third_party/developer/http/requests.py:162`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/http/requests.py#L162) |
| method | `def HTTPPostModule.validate_params(self) -> None` | Implements `HTTPPostModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/developer/http/requests.py:168`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/http/requests.py#L168) |
| method | `async def HTTPPostModule.execute(self) -> Any` | Implements `HTTPPostModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/developer/http/requests.py:172`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/http/requests.py#L172) |

## `src/core/modules/third_party/developer/http/search.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _google_search_setup_error()` | Implements `_google_search_setup_error`; linked source is authoritative. | [`src/core/modules/third_party/developer/http/search.py:20`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/http/search.py#L20) |
| function | `def _parse_search_results(items)` | Implements `_parse_search_results`; linked source is authoritative. | [`src/core/modules/third_party/developer/http/search.py:41`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/http/search.py#L41) |
| class | `class GoogleSearchAPIModule(BaseModule)` | Google Search API Module - Use official Custom Search API | [`src/core/modules/third_party/developer/http/search.py:93`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/http/search.py#L93) |
| method | `def GoogleSearchAPIModule.validate_params(self) -> None` | Implements `GoogleSearchAPIModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/developer/http/search.py:100`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/http/search.py#L100) |
| method | `async def GoogleSearchAPIModule.execute(self) -> Any` | Implements `GoogleSearchAPIModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/developer/http/search.py:106`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/http/search.py#L106) |
| class | `class SerpAPISearchModule(BaseModule)` | SerpAPI Search Module - Use third-party API (with free tier) | [`src/core/modules/third_party/developer/http/search.py:171`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/http/search.py#L171) |
| method | `def SerpAPISearchModule.validate_params(self) -> None` | Implements `SerpAPISearchModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/developer/http/search.py:178`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/http/search.py#L178) |
| method | `async def SerpAPISearchModule.execute(self) -> Any` | Implements `SerpAPISearchModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/developer/http/search.py:184`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/http/search.py#L184) |
| class | `class TavilySearchModule(BaseModule)` | Tavily Search Module - Use Tavily API for web search | [`src/core/modules/third_party/developer/http/search.py:277`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/http/search.py#L277) |
| method | `def TavilySearchModule.validate_params(self) -> None` | Implements `TavilySearchModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/developer/http/search.py:284`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/http/search.py#L284) |
| method | `async def TavilySearchModule.execute(self) -> Any` | Implements `TavilySearchModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/developer/http/search.py:290`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/developer/http/search.py#L290) |

## `src/core/modules/third_party/payment/stripe.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _simplify_charges(charges_data)` | Extract essential fields from Stripe charge list. | [`src/core/modules/third_party/payment/stripe.py:20`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/payment/stripe.py#L20) |
| class | `class StripeCreatePaymentModule(BaseModule)` | Stripe Create Payment Intent Module | [`src/core/modules/third_party/payment/stripe.py:147`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/payment/stripe.py#L147) |
| method | `def StripeCreatePaymentModule.validate_params(self) -> None` | Implements `StripeCreatePaymentModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/payment/stripe.py:150`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/payment/stripe.py#L150) |
| method | `async def StripeCreatePaymentModule.execute(self) -> Any` | Implements `StripeCreatePaymentModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/payment/stripe.py:165`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/payment/stripe.py#L165) |
| class | `class StripeGetCustomerModule(BaseModule)` | Stripe Get Customer Module | [`src/core/modules/third_party/payment/stripe.py:282`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/payment/stripe.py#L282) |
| method | `def StripeGetCustomerModule.validate_params(self) -> None` | Implements `StripeGetCustomerModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/payment/stripe.py:285`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/payment/stripe.py#L285) |
| method | `async def StripeGetCustomerModule.execute(self) -> Any` | Implements `StripeGetCustomerModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/payment/stripe.py:297`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/payment/stripe.py#L297) |
| class | `class StripeListChargesModule(BaseModule)` | Stripe List Charges Module | [`src/core/modules/third_party/payment/stripe.py:417`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/payment/stripe.py#L417) |
| method | `def StripeListChargesModule.validate_params(self) -> None` | Implements `StripeListChargesModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/payment/stripe.py:420`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/payment/stripe.py#L420) |
| method | `async def StripeListChargesModule.execute(self) -> Any` | Implements `StripeListChargesModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/payment/stripe.py:430`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/payment/stripe.py#L430) |

## `src/core/modules/third_party/productivity/airtable.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class AirtableReadModule(BaseModule)` | Airtable Read Records Module | [`src/core/modules/third_party/productivity/airtable.py:131`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/productivity/airtable.py#L131) |
| method | `def AirtableReadModule.validate_params(self) -> None` | Implements `AirtableReadModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/productivity/airtable.py:134`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/productivity/airtable.py#L134) |
| method | `async def AirtableReadModule.execute(self) -> Any` | Implements `AirtableReadModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/productivity/airtable.py:149`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/productivity/airtable.py#L149) |
| class | `class AirtableCreateModule(BaseModule)` | Airtable Create Record Module | [`src/core/modules/third_party/productivity/airtable.py:299`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/productivity/airtable.py#L299) |
| method | `def AirtableCreateModule.validate_params(self) -> None` | Implements `AirtableCreateModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/productivity/airtable.py:302`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/productivity/airtable.py#L302) |
| method | `async def AirtableCreateModule.execute(self) -> Any` | Implements `AirtableCreateModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/productivity/airtable.py:316`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/productivity/airtable.py#L316) |
| class | `class AirtableUpdateModule(BaseModule)` | Airtable Update Record Module | [`src/core/modules/third_party/productivity/airtable.py:463`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/productivity/airtable.py#L463) |
| method | `def AirtableUpdateModule.validate_params(self) -> None` | Implements `AirtableUpdateModule.validate_params`; linked source is authoritative. | [`src/core/modules/third_party/productivity/airtable.py:466`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/productivity/airtable.py#L466) |
| method | `async def AirtableUpdateModule.execute(self) -> Any` | Implements `AirtableUpdateModule.execute`; linked source is authoritative. | [`src/core/modules/third_party/productivity/airtable.py:481`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/productivity/airtable.py#L481) |

## `src/core/modules/third_party/productivity/tools/notion_create_page.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def notion_create_page(context)` | Create page in Notion database | [`src/core/modules/third_party/productivity/tools/notion_create_page.py:113`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/productivity/tools/notion_create_page.py#L113) |

## `src/core/modules/third_party/productivity/tools/notion_query.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def notion_query_database(context)` | Query Notion database | [`src/core/modules/third_party/productivity/tools/notion_query.py:126`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/productivity/tools/notion_query.py#L126) |

## `src/core/modules/third_party/productivity/tools/sheets_read.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def google_sheets_read(context)` | Read from Google Sheets | [`src/core/modules/third_party/productivity/tools/sheets_read.py:111`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/productivity/tools/sheets_read.py#L111) |
| function | `def _build_sheets_service(params)` | Build Google Sheets API service from credentials. | [`src/core/modules/third_party/productivity/tools/sheets_read.py:137`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/productivity/tools/sheets_read.py#L137) |

## `src/core/modules/third_party/productivity/tools/sheets_write.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def google_sheets_write(context)` | Write to Google Sheets | [`src/core/modules/third_party/productivity/tools/sheets_write.py:126`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/third_party/productivity/tools/sheets_write.py#L126) |
