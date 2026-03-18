# AI & LLM

AI model integration, text generation, embeddings, and autonomous agents.

**18 modules**

| Module | Description |
|--------|-------------|
| [Autonomous Agent](#autonomous-agent) | Self-directed AI agent with memory and goal-oriented behavior |
| [Chain Agent](#chain-agent) | Sequential AI processing chain with multiple steps |
| [Tool Use Agent](#tool-use-agent) | AI Agent that can call tools/functions |
| [Text Embeddings](#text-embeddings) | Generate vector embeddings from text using AI models |
| [AI Extract](#ai-extract) | Extract structured data from text using AI |
| [Local Ollama Chat](#local-ollama-chat) | Chat with local LLM via Ollama (completely offline) |
| [AI Memory](#ai-memory) | Conversation memory for AI Agent |
| [Entity Memory](#entity-memory) | Extract and track entities (people, places, concepts) from conversations |
| [Redis Memory](#redis-memory) | Persistent conversation memory using Redis storage |
| [Vector Memory](#vector-memory) | Semantic memory using vector embeddings for relevant context retrieval |
| [AI Model](#ai-model) | LLM model configuration for AI Agent |
| [AI Tool](#ai-tool) | Expose a module as a tool for AI Agent |
| [Vision Analyze](#vision-analyze) | Analyze images using AI vision models |
| [Claude Chat](#claude-chat) | Send a chat message to Anthropic Claude AI and get a response |
| [Google Gemini Chat](#google-gemini-chat) | Send a chat message to Google Gemini AI and get a response |
| [OpenAI Chat](#openai-chat) | Send a chat message to OpenAI GPT models |
| [DALL-E Image Generation](#dall-e-image-generation) | Generate images using DALL-E |
| [AI Agent](#ai-agent) | Autonomous AI agent with multi-port connections (model, memory, tools) |

## Modules

### Autonomous Agent

`agent.autonomous`

Self-directed AI agent with memory and goal-oriented behavior

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `goal` | string | Yes | - | The goal for the agent to achieve |
| `context` | string | No | - | The goal for the agent to achieve |
| `max_iterations` | number | No | `5` | Additional context or constraints |
| `llm_provider` | select (`openai`, `anthropic`, `gemini`, `ollama`) | No | `openai` | Maximum reasoning steps |
| `model` | string | No | `gpt-4o` | Model name (e.g., gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | Model name (e.g., gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | Ollama server URL (only for ollama provider) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Creativity level (0-2) |
| `thoughts` | array | The operation result |
| `iterations` | number | The operation result |
| `goal_achieved` | boolean | Agent reasoning steps |

**Example:** Research task

```yaml
goal: Research the latest trends in AI and summarize the top 3
max_iterations: 5
model: gpt-4
```

**Example:** Problem solving

```yaml
goal: Find the best approach to optimize database queries
context: PostgreSQL database with 10M records
max_iterations: 10
```

### Chain Agent

`agent.chain`

Sequential AI processing chain with multiple steps

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | string | Yes | - | Initial input for the chain |
| `chain_steps` | array | Yes | - | Initial input for the chain |
| `llm_provider` | select (`openai`, `ollama`) | No | `openai` | Array of processing steps (each is a prompt template) |
| `model` | string | No | `gpt-4o` | Model name (e.g., gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | Model name (e.g., gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | Ollama server URL (only for ollama provider) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Creativity level (0-2) |
| `intermediate_results` | array | The operation result |
| `steps_completed` | number | The operation result |

**Example:** Content pipeline

```yaml
input: AI and machine learning trends
chain_steps: ["Generate 5 blog post ideas about: {input}", "Take the first idea and write a detailed outline: {previous}", "Write an introduction paragraph based on: {previous}"]
model: gpt-4
```

**Example:** Data analysis chain

```yaml
input: User behavior data shows 60% bounce rate
chain_steps: ["Analyze what might cause this issue: {input}", "Suggest 3 solutions based on: {previous}", "Create an action plan from: {previous}"]
```

### Tool Use Agent

`agent.tool_use`

AI Agent that can call tools/functions

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | The goal or task for the agent |
| `tools` | array | Yes | - | List of tool definitions [{name, description, parameters}] |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | LLM provider for the agent |
| `model` | string | No | `gpt-4o` | Model to use |
| `api_key` | string | No | - | API key (falls back to environment variable) |
| `max_iterations` | number | No | `10` | Maximum number of tool call rounds |
| `system_prompt` | string | No | - | Optional system prompt to guide the agent |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | The agent final response |
| `tool_calls` | array | All tool calls made during execution |
| `iterations` | number | Number of iterations completed |
| `model` | string | Model used |

**Example:** File Processing Agent

```yaml
prompt: Read the config file and update the version number
tools: [{"name": "read_file", "description": "Read contents of a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}}, "required": ["path"]}}, {"name": "write_file", "description": "Write contents to a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}, "content": {"type": "string", "description": "File content"}}, "required": ["path", "content"]}}]
provider: openai
model: gpt-4o
max_iterations: 5
```

### Text Embeddings

`ai.embed`

Generate vector embeddings from text using AI models

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to embed |
| `provider` | select (`openai`, `local`) | No | `openai` | AI provider for embeddings |
| `model` | string | No | `text-embedding-3-small` | Embedding model to use |
| `api_key` | string | No | - | API key (falls back to environment variable) |
| `dimensions` | number | No | - | Embedding dimensions (for models that support it) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `embeddings` | array | Vector embedding array |
| `model` | string | Model used for embedding |
| `dimensions` | number | Number of dimensions in the embedding vector |
| `token_count` | number | Number of tokens processed |

**Example:** Single Text Embedding

```yaml
text: The quick brown fox jumps over the lazy dog
provider: openai
model: text-embedding-3-small
```

**Example:** Reduced Dimensions

```yaml
text: Semantic search query
provider: openai
model: text-embedding-3-small
dimensions: 256
```

### AI Extract

`ai.extract`

Extract structured data from text using AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text to extract data from |
| `schema` | object | Yes | - | JSON schema defining the fields to extract |
| `instructions` | string | No | - | Additional extraction instructions |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | AI provider to use |
| `model` | string | No | `gpt-4o-mini` | Model to use for extraction |
| `api_key` | string | No | - | API key (falls back to environment variable) |
| `temperature` | number | No | `0` | Sampling temperature (0-2) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | Extracted structured data |
| `model` | string | Model used for extraction |
| `raw_response` | string | Raw model response |

**Example:** Extract Contact Info

```yaml
text: John Smith is a senior engineer at Acme Corp. Email: john@acme.com
schema: {"type": "object", "properties": {"name": {"type": "string"}, "title": {"type": "string"}, "company": {"type": "string"}, "email": {"type": "string"}}}
provider: openai
model: gpt-4o-mini
```

**Example:** Extract Invoice Data

```yaml
text: Invoice #1234 from Acme Corp. Total: $500.00. Due: 2024-03-01
schema: {"type": "object", "properties": {"invoice_number": {"type": "string"}, "vendor": {"type": "string"}, "total": {"type": "number"}, "due_date": {"type": "string"}}}
instructions: Extract all invoice fields. Parse amounts as numbers.
```

### Local Ollama Chat

`ai.local_ollama.chat`

Chat with local LLM via Ollama (completely offline)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | The message to send to the local LLM |
| `model` | select (`llama2`, `llama2:13b`, `llama2:70b`, `mistral`, `mixtral`, `codellama`, `codellama:13b`, `phi`, `neural-chat`, `starling-lm`) | No | `llama2` | The message to send to the local LLM |
| `temperature` | number | No | `0.7` | Sampling temperature (0-2) |
| `system_message` | string | No | - | System role message (optional) |
| `ollama_url` | string | No | `http://localhost:11434` | System role message (optional) |
| `max_tokens` | number | No | - | Ollama server URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | Maximum tokens in response (optional, depends on model) |
| `model` | string | Response from the operation |
| `context` | array | Response from the operation |
| `total_duration` | number | Model name or identifier |
| `load_duration` | number | Conversation context for follow-up requests |
| `prompt_eval_count` | number | Total processing duration |
| `eval_count` | number | Model loading duration |

**Example:** Simple local chat

```yaml
prompt: Explain quantum computing in 3 sentences
model: llama2
```

**Example:** Code generation with local model

```yaml
prompt: Write a Python function to calculate fibonacci numbers
model: codellama
temperature: 0.2
system_message: You are a Python programming expert. Write clean, efficient code.
```

**Example:** Local reasoning task

```yaml
prompt: What are the pros and cons of microservices architecture?
model: mistral
temperature: 0.7
```

### AI Memory

`ai.memory`

Conversation memory for AI Agent

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `memory_type` | select (`buffer`, `window`, `summary`) | Yes | `buffer` | Type of memory storage |
| `window_size` | number | No | `10` | Number of recent messages to keep (for window memory) |
| `session_id` | string | No | - | Unique identifier for this conversation session |
| `initial_messages` | array | No | `[]` | Pre-loaded conversation history |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `memory_type` | string | Pre-loaded conversation history |
| `session_id` | string | Pre-loaded conversation history |
| `messages` | array | Type of memory |
| `config` | object | Session identifier |

**Example:** Simple Buffer Memory

```yaml
memory_type: buffer
```

**Example:** Window Memory (last 5 messages)

```yaml
memory_type: window
window_size: 5
```

### Entity Memory

`ai.memory.entity`

Extract and track entities (people, places, concepts) from conversations

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `entity_types` | multiselect | No | `['person', 'organization', 'location']` | Types of entities to extract and track |
| `extraction_model` | select (`llm`, `spacy`, `regex`) | Yes | `llm` | Model for entity extraction |
| `session_id` | string | No | - | Unique identifier for this memory session |
| `track_relationships` | boolean | No | `True` | Track relationships between entities |
| `max_entities` | number | No | `100` | Maximum number of entities to remember |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `memory_type` | string | Maximum number of entities to remember |
| `session_id` | string | Maximum number of entities to remember |
| `entities` | object | Type of memory (entity) |
| `relationships` | array | Session identifier |
| `config` | object | Tracked entities by type |

**Example:** People & Organizations

```yaml
entity_types: ["person", "organization"]
extraction_model: llm
```

**Example:** Full Entity Tracking

```yaml
entity_types: ["person", "organization", "location", "concept"]
track_relationships: true
max_entities: 200
```

### Redis Memory

`ai.memory.redis`

Persistent conversation memory using Redis storage

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `redis_url` | string | Yes | `redis://localhost:6379` | Redis connection URL |
| `key_prefix` | string | No | `flyto:memory:` | Prefix for all Redis keys |
| `session_id` | string | Yes | - | Unique identifier for this memory session |
| `ttl_seconds` | number | No | `86400` | Time-to-live for memory entries (0 = no expiry) |
| `max_messages` | number | No | `100` | Maximum messages to store per session |
| `load_on_start` | boolean | No | `True` | Load existing messages from Redis on initialization |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `memory_type` | string | Load existing messages from Redis on initialization |
| `session_id` | string | Load existing messages from Redis on initialization |
| `messages` | array | Type of memory (redis) |
| `connected` | boolean | Session identifier |
| `config` | object | Loaded message history |

**Example:** Local Redis

```yaml
redis_url: redis://localhost:6379
session_id: my-session
ttl_seconds: 3600
```

**Example:** Cloud Redis with Auth

```yaml
redis_url: redis://:password@redis-cloud.example.com:6379
session_id: user-session
ttl_seconds: 86400
max_messages: 500
```

### Vector Memory

`ai.memory.vector`

Semantic memory using vector embeddings for relevant context retrieval

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `embedding_model` | select (`text-embedding-3-small`, `text-embedding-3-large`, `text-embedding-ada-002`, `local`) | Yes | `text-embedding-3-small` | Model to use for generating embeddings |
| `top_k` | number | No | `5` | Number of most relevant memories to retrieve |
| `similarity_threshold` | number | No | `0.7` | Minimum similarity score (0-1) for retrieval |
| `session_id` | string | No | - | Unique identifier for this memory session |
| `include_metadata` | boolean | No | `True` | Include timestamp and other metadata with memories |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `memory_type` | string | Include timestamp and other metadata with memories |
| `session_id` | string | Include timestamp and other metadata with memories |
| `embedding_model` | string | Type of memory (vector) |
| `config` | object | Session identifier |

**Example:** Default Vector Memory

```yaml
embedding_model: text-embedding-3-small
top_k: 5
```

**Example:** High Precision Memory

```yaml
embedding_model: text-embedding-3-large
top_k: 10
similarity_threshold: 0.85
```

### AI Model

`ai.model`

LLM model configuration for AI Agent

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.7` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |
| `max_tokens` | number | No | `4096` | Maximum tokens in response |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `provider` | string | Maximum tokens in response |
| `model` | string | LLM provider name |
| `config` | object | LLM provider name |

**Example:** OpenAI GPT-4

```yaml
provider: openai
model: gpt-4o
temperature: 0.7
```

**Example:** Anthropic Claude

```yaml
provider: anthropic
model: claude-3-5-sonnet-20241022
temperature: 0.5
```

### AI Tool

`ai.tool`

Expose a module as a tool for AI Agent

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `module_id` | string | Yes | - | Module ID to expose as tool (e.g. http.request, data.json_parse) |
| `tool_description` | string | No | - | Custom description for the agent (overrides module default) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `module_id` | string | Module ID exposed as tool |

**Example:** HTTP Request Tool

```yaml
module_id: http.request
```

**Example:** JSON Parse Tool

```yaml
module_id: data.json_parse
```

### Vision Analyze

`ai.vision.analyze`

Analyze images using AI vision models

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | No | - | Local path to image file |
| `image_url` | string | No | - | URL of the image to analyze |
| `prompt` | string | No | `Describe this image in detail` | What to analyze or ask about the image |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | AI provider for vision analysis |
| `model` | string | No | `gpt-4o` | Vision model to use |
| `api_key` | string | No | - | API key (falls back to environment variable) |
| `max_tokens` | number | No | `1000` | Maximum tokens in response |
| `detail` | select (`low`, `high`, `auto`) | No | `auto` | Image detail level (low/high/auto) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `analysis` | string | AI analysis of the image |
| `model` | string | Model used for analysis |
| `provider` | string | Provider used for analysis |
| `tokens_used` | number | Number of tokens used |

**Example:** Analyze Screenshot

```yaml
image_path: /tmp/screenshot.png
prompt: Describe what you see in this UI screenshot
provider: openai
model: gpt-4o
```

**Example:** Analyze from URL

```yaml
image_url: https://example.com/photo.jpg
prompt: What objects are in this image?
provider: anthropic
model: claude-sonnet-4-20250514
```

### Claude Chat

`api.anthropic.chat`

Send a chat message to Anthropic Claude AI and get a response

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Anthropic API key (defaults to env.ANTHROPIC_API_KEY) |
| `model` | string | No | `claude-sonnet-4-6` | Claude model to use |
| `messages` | array | Yes | - | Array of message objects with role and content |
| `max_tokens` | number | No | `1024` | Content returned by the operation |
| `temperature` | number | No | `1.0` | Sampling temperature (0-1). Higher values make output more random |
| `system` | string | No | - | System prompt to guide Claude behavior |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | System prompt to guide Claude behavior |
| `model` | string | Claude response text |
| `stop_reason` | string | Model used for response |
| `usage` | object | Why the model stopped generating (end_turn, max_tokens, etc) |

**Example:** Simple question

```yaml
messages: [{"role": "user", "content": "What is the capital of France?"}]
max_tokens: 100
```

**Example:** Text summarization

```yaml
system: You are a helpful assistant that summarizes text concisely.
messages: [{"role": "user", "content": "Summarize this article: ${article_text}"}]
max_tokens: 500
```

### Google Gemini Chat

`api.google_gemini.chat`

Send a chat message to Google Gemini AI and get a response

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Google AI API key (defaults to env.GOOGLE_AI_API_KEY) |
| `model` | string | No | `gemini-2.5-pro` | Gemini model to use |
| `prompt` | string | Yes | - | The text prompt to send to Gemini |
| `temperature` | number | No | `1.0` | Controls randomness (0-2). Higher values make output more random |
| `max_output_tokens` | number | No | `2048` | Maximum number of tokens in response |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `text` | string | Generated text response from Gemini |
| `model` | string | Model used for generation |
| `candidates` | array | All candidate responses |

**Example:** Simple question

```yaml
prompt: Explain quantum computing in simple terms
```

**Example:** Content generation

```yaml
prompt: Write a professional email about ${topic}
temperature: 0.7
max_output_tokens: 500
```

### OpenAI Chat

`api.openai.chat`

Send a chat message to OpenAI GPT models

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | The message to send to GPT |
| `model` | select (`gpt-4o`, `gpt-4o-mini`, `gpt-4.1`, `gpt-4.1-mini`, `o3`, `o3-mini`, `o4-mini`, `gpt-4-turbo-preview`) | No | `gpt-4o` | The message to send to GPT |
| `temperature` | number | No | `0.7` | Sampling temperature (0-2) |
| `max_tokens` | number | No | `1000` | Sampling temperature (0-2) |
| `system_message` | string | No | - | Maximum tokens in response |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | System role message (optional) |
| `model` | string | Response from the operation |
| `usage` | object | Response from the operation |

**Example:** Simple chat

```yaml
prompt: Explain quantum computing in 3 sentences
model: gpt-3.5-turbo
```

**Example:** Code generation

```yaml
prompt: Write a Python function to calculate fibonacci numbers
model: gpt-4
temperature: 0.2
system_message: You are a Python programming expert
```

### DALL-E Image Generation

`api.openai.image`

Generate images using DALL-E

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Description of the image to generate |
| `size` | select (`256x256`, `512x512`, `1024x1024`, `1792x1024`, `1024x1792`) | No | `1024x1024` | Description of the image to generate |
| `model` | select (`dall-e-3`, `dall-e-2`) | No | `dall-e-3` | DALL-E model version |
| `quality` | select (`standard`, `hd`) | No | `standard` | Image quality (DALL-E 3 only) |
| `n` | number | No | `1` | Number of images to generate (1-10) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `images` | array | List of generated images |
| `model` | string | Model name or identifier |

**Example:** Generate artwork

```yaml
prompt: A serene mountain landscape at sunset, digital art
size: 1024x1024
model: dall-e-3
quality: hd
```

**Example:** Create logo

```yaml
prompt: Modern tech startup logo with blue and green colors
size: 512x512
model: dall-e-2
n: 3
```

### AI Agent

`llm.agent`

Autonomous AI agent with multi-port connections (model, memory, tools)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt_source` | select (`manual`, `auto`) | No | `manual` | Where to get the task prompt from |
| `task` | string | No | - | The task for the agent to complete. Use {<!-- -->{input}<!-- -->} to reference upstream data. |
| `prompt_path` | string | No | `{<!-- -->{input}<!-- -->}` | Path to extract prompt from input (e.g., {<!-- -->{input.message}<!-- -->}) |
| `join_strategy` | select (`first`, `newline`, `separator`, `json`) | No | `first` | How to handle array inputs |
| `join_separator` | string | No | `

---

` | Separator for joining array items |
| `max_input_size` | number | No | `10000` | Maximum characters for prompt (prevents overflow) |
| `system_prompt` | string | No | `You are a helpful AI agent. Use the available tools to complete the task. Think step by step.` | Instructions for the agent behavior |
| `tools` | array | No | `[]` | List of module IDs (alternative to connecting tool nodes) |
| `context` | object | No | `{}` | List of module IDs (alternative to connecting tool nodes) |
| `max_iterations` | number | No | `10` | Additional context data for the agent |
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.3` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Whether the agent completed successfully |
| `result` | string | Whether the agent completed successfully |
| `steps` | array | Whether the agent completed successfully |
| `tool_calls` | number | The final result from the agent |
| `tokens_used` | number | List of steps the agent took |

**Example:** Web Research Agent

```yaml
task: Search for the latest news about AI and summarize the top 3 stories
tools: ["http.request", "data.json_parse"]
model: gpt-4o
```

**Example:** Data Processing Agent

```yaml
task: Read the CSV file, filter rows where status is "active", and count them
tools: ["file.read", "data.csv_parse", "array.filter"]
model: gpt-4o
```
