<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / AI

Source-backed signatures for **35 declarations** across **10 files** in the modules: atomic / ai area.

## `src/core/modules/atomic/ai/embed.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def ai_embed(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Generate embeddings from text. | [`src/core/modules/atomic/ai/embed.py:157`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/embed.py#L157) |
| function | `async def _call_openai_embed(api_key: str, model: str, texts: List&#91;str&#93;, dimensions: Optional&#91;int&#93;) -> Dict&#91;str, Any&#93;` | Call OpenAI Embeddings API. | [`src/core/modules/atomic/ai/embed.py:207`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/embed.py#L207) |

## `src/core/modules/atomic/ai/extract.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def ai_extract(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Extract structured data from text using LLM. | [`src/core/modules/atomic/ai/extract.py:191`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/extract.py#L191) |
| function | `def _parse_json_response(raw: str) -> dict` | Try to parse JSON from LLM response, handling common formats. | [`src/core/modules/atomic/ai/extract.py:259`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/extract.py#L259) |
| function | `async def _call_openai_extract(session: aiohttp.ClientSession, api_key: str, model: str, system_prompt: str, user_prompt: str, temperature: float) -> Dict&#91;str, Any&#93;` | Call OpenAI API for structured extraction. | [`src/core/modules/atomic/ai/extract.py:297`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/extract.py#L297) |
| function | `async def _call_anthropic_extract(session: aiohttp.ClientSession, api_key: str, model: str, system_prompt: str, user_prompt: str, temperature: float) -> Dict&#91;str, Any&#93;` | Call Anthropic API for structured extraction. | [`src/core/modules/atomic/ai/extract.py:345`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/extract.py#L345) |

## `src/core/modules/atomic/ai/memory.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def ai_memory(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Provide conversation memory for AI Agent. | [`src/core/modules/atomic/ai/memory.py:147`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory.py#L147) |
| function | `def _memory_add_message(memory_state: Dict, role: str, content: str) -> None` | Add a message to memory | [`src/core/modules/atomic/ai/memory.py:195`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory.py#L195) |
| function | `def _memory_get_messages(memory_state: Dict) -> List&#91;Dict&#93;` | Get all messages from memory | [`src/core/modules/atomic/ai/memory.py:209`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory.py#L209) |
| function | `def _memory_clear(memory_state: Dict) -> None` | Clear all messages from memory | [`src/core/modules/atomic/ai/memory.py:214`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory.py#L214) |

## `src/core/modules/atomic/ai/memory_entity.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def ai_memory_entity(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Entity-based memory for AI Agent. | [`src/core/modules/atomic/ai/memory_entity.py:154`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory_entity.py#L154) |
| function | `def _entity_add(memory_state: Dict, entity_type: str, name: str, attributes: Dict=None) -> Dict` | Add or update an entity | [`src/core/modules/atomic/ai/memory_entity.py:206`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory_entity.py#L206) |
| function | `def _entity_add_relationship(memory_state: Dict, entity1: str, relationship: str, entity2: str) -> Dict` | Add a relationship between two entities | [`src/core/modules/atomic/ai/memory_entity.py:251`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory_entity.py#L251) |
| function | `def _entity_get(memory_state: Dict, entity_type: str, name: str) -> Optional&#91;Dict&#93;` | Get an entity by type and name | [`src/core/modules/atomic/ai/memory_entity.py:276`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory_entity.py#L276) |
| function | `def _entity_get_context(memory_state: Dict, query: str=None) -> Dict` | Get entity context summary for the AI | [`src/core/modules/atomic/ai/memory_entity.py:286`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory_entity.py#L286) |
| function | `def _entity_search(memory_state: Dict, query: str) -> List&#91;Dict&#93;` | Search entities by name | [`src/core/modules/atomic/ai/memory_entity.py:309`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory_entity.py#L309) |
| function | `def _entity_clear(memory_state: Dict) -> None` | Clear all entity memory | [`src/core/modules/atomic/ai/memory_entity.py:323`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory_entity.py#L323) |
| function | `def _entity_enforce_limit(memory_state: Dict) -> None` | Remove least relevant entities if over limit | [`src/core/modules/atomic/ai/memory_entity.py:333`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory_entity.py#L333) |
| function | `def _entity_build_summary(entities: List&#91;Dict&#93;) -> str` | Build a text summary of known entities | [`src/core/modules/atomic/ai/memory_entity.py:358`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory_entity.py#L358) |

## `src/core/modules/atomic/ai/memory_redis.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def ai_memory_redis(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Redis-backed persistent memory for AI Agent. | [`src/core/modules/atomic/ai/memory_redis.py:157`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory_redis.py#L157) |
| function | `async def _redis_add_message(memory_state: Dict, role: str, content: str) -> None` | Add a message to Redis memory | [`src/core/modules/atomic/ai/memory_redis.py:232`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory_redis.py#L232) |
| function | `async def _redis_get_messages(memory_state: Dict, limit: int=None) -> List&#91;Dict&#93;` | Get messages from Redis memory | [`src/core/modules/atomic/ai/memory_redis.py:271`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory_redis.py#L271) |
| function | `async def _redis_clear(memory_state: Dict) -> None` | Clear all messages from Redis memory | [`src/core/modules/atomic/ai/memory_redis.py:295`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory_redis.py#L295) |
| function | `async def _redis_get_session_info(memory_state: Dict) -> Dict` | Get session info from Redis | [`src/core/modules/atomic/ai/memory_redis.py:309`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory_redis.py#L309) |

## `src/core/modules/atomic/ai/memory_vector.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def ai_memory_vector(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Vector-based semantic memory for AI Agent. | [`src/core/modules/atomic/ai/memory_vector.py:148`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory_vector.py#L148) |
| function | `async def _vector_add_message(memory_state: Dict, role: str, content: str, embedding: List&#91;float&#93;=None) -> None` | Add a message with its embedding to vector memory. | [`src/core/modules/atomic/ai/memory_vector.py:203`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory_vector.py#L203) |
| function | `def _vector_search(memory_state: Dict, query_embedding: List&#91;float&#93;, top_k: int=None) -> List&#91;Dict&#93;` | Search for similar messages using cosine similarity | [`src/core/modules/atomic/ai/memory_vector.py:239`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory_vector.py#L239) |
| function | `def _vector_get_relevant(memory_state: Dict, query: str) -> List&#91;Dict&#93;` | Get relevant messages for a query using semantic search. | [`src/core/modules/atomic/ai/memory_vector.py:274`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory_vector.py#L274) |
| function | `def _vector_clear(memory_state: Dict) -> None` | Clear all vector memory | [`src/core/modules/atomic/ai/memory_vector.py:292`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/memory_vector.py#L292) |

## `src/core/modules/atomic/ai/model.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def ai_model(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Provide LLM model configuration. | [`src/core/modules/atomic/ai/model.py:123`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/model.py#L123) |

## `src/core/modules/atomic/ai/tool.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def ai_tool(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Provide tool configuration for AI Agent. | [`src/core/modules/atomic/ai/tool.py:111`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/tool.py#L111) |

## `src/core/modules/atomic/ai/tool_template.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def ai_tool_template(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Provide a template as a tool for AI Agent. | [`src/core/modules/atomic/ai/tool_template.py:145`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/tool_template.py#L145) |

## `src/core/modules/atomic/ai/vision_analyze.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def ai_vision_analyze(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Analyze images using LLM vision capabilities. | [`src/core/modules/atomic/ai/vision_analyze.py:200`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/vision_analyze.py#L200) |
| function | `async def _call_openai_vision(session: aiohttp.ClientSession, api_key: str, model: str, prompt: str, max_tokens: int, detail: str, image_b64: Optional&#91;str&#93;, image_url: str, media_type: str) -> Dict&#91;str, Any&#93;` | Call OpenAI Vision API. | [`src/core/modules/atomic/ai/vision_analyze.py:271`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/vision_analyze.py#L271) |
| function | `async def _call_anthropic_vision(session: aiohttp.ClientSession, api_key: str, model: str, prompt: str, max_tokens: int, image_b64: Optional&#91;str&#93;, image_url: str, media_type: str) -> Dict&#91;str, Any&#93;` | Call Anthropic Vision API. | [`src/core/modules/atomic/ai/vision_analyze.py:345`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/ai/vision_analyze.py#L345) |
