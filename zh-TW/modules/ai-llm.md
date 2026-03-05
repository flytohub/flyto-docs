# AI & LLM

AI model integration, text generation, embeddings, and autonomous agents.

**18 modules**

| Module | Description |
|--------|-------------|
| [自主代理](#自主代理) | 具備記憶和目標導向行為的自主 AI 代理 |
| [鏈式代理](#鏈式代理) | 具有多步驟的循序 AI 處理鏈 |
| [工具使用代理](#工具使用代理) | 可以調用工具/功能的 AI 代理 |
| [文字嵌入](#文字嵌入) | 使用 AI 模型從文字生成向量嵌入 |
| [AI 提取](#ai-提取) | 使用 AI 從文字提取結構化資料 |
| [本機 Ollama 對話](#本機-ollama-對話) | 透過 Ollama 與本機 LLM 對話（完全離線） |
| [AI 記憶](#ai-記憶) | AI Agent 的對話記憶 |
| [實體記憶](#實體記憶) | 從對話中擷取並追蹤實體（人物、地點、概念） |
| [Redis 記憶](#redis-記憶) | 使用 Redis 儲存的持久對話記憶 |
| [向量記憶](#向量記憶) | 使用向量嵌入的語意記憶，用於擷取相關上下文 |
| [AI 模型](#ai-模型) | AI Agent 的 LLM 模型配置 |
| [AI Tool](#ai-tool) | Expose a module as a tool for AI Agent |
| [視覺分析](#視覺分析) | 使用 AI 視覺模型分析影像 |
| [Claude 對話](#claude-對話) | 傳送聊天訊息給 Anthropic Claude AI 並取得回應 |
| [Google Gemini 對話](#google-gemini-對話) | 傳送聊天訊息給 Google Gemini AI 並取得回應 |
| [OpenAI 對話](#openai-對話) | 傳送聊天訊息給 OpenAI GPT 模型 |
| [DALL-E 圖片產生](#dall-e-圖片產生) | 使用 DALL-E 產生圖片 |
| [AI 代理](#ai-代理) | 自主 AI 代理，支援多埠連接（模型、記憶、工具） |

## Modules

### 自主代理

`agent.autonomous`

具備記憶和目標導向行為的自主 AI 代理

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `goal` | string | Yes | - | 代理要達成的目標 |
| `context` | string | No | - | 額外的上下文或限制條件 |
| `max_iterations` | number | No | `5` | 最大推理步驟數 |
| `llm_provider` | select (`openai`, `ollama`) | No | `openai` | LLM 提供者（openai 或 ollama） |
| `model` | string | No | `gpt-4-turbo-preview` | 模型名稱（例如 gpt-4、llama2、mistral） |
| `ollama_url` | string | No | `http://localhost:11434` | Ollama 伺服器網址（僅限 ollama 提供者） |
| `temperature` | number | No | `0.7` | 創造力等級（0-2） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 操作結果 |
| `thoughts` | array | 代理推理步驟 |
| `iterations` | number | 執行的迭代次數 |
| `goal_achieved` | boolean | 是否達成目標 |

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

### 鏈式代理

`agent.chain`

具有多步驟的循序 AI 處理鏈

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | string | Yes | - | 鏈式處理的初始輸入 |
| `chain_steps` | array | Yes | - | 處理步驟陣列（每個都是提示詞範本） |
| `llm_provider` | select (`openai`, `ollama`) | No | `openai` | LLM 提供者（openai 或 ollama） |
| `model` | string | No | `gpt-4-turbo-preview` | 模型名稱（例如 gpt-4、llama2、mistral） |
| `ollama_url` | string | No | `http://localhost:11434` | Ollama 伺服器網址（僅限 ollama 提供者） |
| `temperature` | number | No | `0.7` | 創造力等級（0-2） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 最終結果 |
| `intermediate_results` | array | 中間結果 |
| `steps_completed` | number | 已完成的步驟數 |

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

### 工具使用代理

`agent.tool_use`

可以調用工具/功能的 AI 代理

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | 代理的目標或任務 |
| `tools` | array | Yes | - | 工具定義列表 [{name, description, parameters}] |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | 代理的 LLM 提供者 |
| `model` | string | No | `gpt-4o` | 要使用的模型 |
| `api_key` | string | No | - | API 金鑰（可回退到環境變數） |
| `max_iterations` | number | No | `10` | 工具調用回合的最大次數 |
| `system_prompt` | string | No | - | 可選的系統提示以引導代理 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 代理的最終回應 |
| `tool_calls` | array | 執行期間所有的工具調用 |
| `iterations` | number | 已完成的回合數 |
| `model` | string | 使用的模型 |

**Example:** File Processing Agent

```yaml
prompt: Read the config file and update the version number
tools: [{"name": "read_file", "description": "Read contents of a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}}, "required": ["path"]}}, {"name": "write_file", "description": "Write contents to a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}, "content": {"type": "string", "description": "File content"}}, "required": ["path", "content"]}}]
provider: openai
model: gpt-4o
max_iterations: 5
```

### 文字嵌入

`ai.embed`

使用 AI 模型從文字生成向量嵌入

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 要嵌入的文字 |
| `provider` | select (`openai`, `local`) | No | `openai` | 嵌入的 AI 提供者 |
| `model` | string | No | `text-embedding-3-small` | 要使用的嵌入模型 |
| `api_key` | string | No | - | API 金鑰（可回退至環境變數） |
| `dimensions` | number | No | - | 嵌入維度（適用於支援的模型） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `embeddings` | array | 向量嵌入陣列 |
| `model` | string | 用於嵌入的模型 |
| `dimensions` | number | 嵌入向量的維度數 |
| `token_count` | number | 處理的標記數量 |

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

### AI 提取

`ai.extract`

使用 AI 從文字提取結構化資料

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 從中提取資料的文字 |
| `schema` | object | Yes | - | 定義要提取欄位的 JSON 架構 |
| `instructions` | string | No | - | 額外的提取指示 |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | 要使用的 AI 提供者 |
| `model` | string | No | `gpt-4o-mini` | 用於提取的模型 |
| `api_key` | string | No | - | API 金鑰（可回退至環境變數） |
| `temperature` | number | No | `0` | 取樣溫度（0-2） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | 提取的結構化資料 |
| `model` | string | 用於提取的模型 |
| `raw_response` | string | 模型的原始回應 |

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

### 本機 Ollama 對話

`ai.local_ollama.chat`

透過 Ollama 與本機 LLM 對話（完全離線）

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | 傳送給本機 LLM 的訊息 |
| `model` | select (`llama2`, `llama2:13b`, `llama2:70b`, `mistral`, `mixtral`, `codellama`, `codellama:13b`, `phi`, `neural-chat`, `starling-lm`) | No | `llama2` | 要使用的模型名稱 |
| `temperature` | number | No | `0.7` | 取樣溫度（0-2） |
| `system_message` | string | No | - | 系統角色訊息（選填） |
| `ollama_url` | string | No | `http://localhost:11434` | Ollama 伺服器網址 |
| `max_tokens` | number | No | - | 回應的最大 Token 數量 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | 模型回應內容 |
| `model` | string | 使用的模型 |
| `context` | array | 對話上下文 |
| `total_duration` | number | 總處理時間 |
| `load_duration` | number | 模型載入時間 |
| `prompt_eval_count` | number | 提示詞評估數量 |
| `eval_count` | number | 評估 Token 數量 |

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

### AI 記憶

`ai.memory`

AI Agent 的對話記憶

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `memory_type` | select (`buffer`, `window`, `summary`) | Yes | `buffer` | 記憶儲存類型 |
| `window_size` | number | No | `10` | 保留的最近訊息數量（用於視窗記憶） |
| `session_id` | string | No | - | 此對話會話的唯一識別碼 |
| `initial_messages` | array | No | `[]` | 預載的對話歷史 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `memory_type` | string | 記憶類型 |
| `session_id` | string | 會話識別碼 |
| `messages` | array | 對話訊息 |
| `config` | object | 記憶配置 |

**Example:** Simple Buffer Memory

```yaml
memory_type: buffer
```

**Example:** Window Memory (last 5 messages)

```yaml
memory_type: window
window_size: 5
```

### 實體記憶

`ai.memory.entity`

從對話中擷取並追蹤實體（人物、地點、概念）

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
| `memory_type` | string | 記憶類型（entity） |
| `session_id` | string | 會話識別碼 |
| `entities` | object | 追蹤的實體 |
| `relationships` | array | 實體關係 |
| `config` | object | 記憶配置 |

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

### Redis 記憶

`ai.memory.redis`

使用 Redis 儲存的持久對話記憶

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
| `memory_type` | string | 記憶類型（redis） |
| `session_id` | string | 會話識別碼 |
| `messages` | array | 載入的訊息歷史 |
| `connected` | boolean | 連線狀態 |
| `config` | object | 記憶配置 |

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

### 向量記憶

`ai.memory.vector`

使用向量嵌入的語意記憶，用於擷取相關上下文

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
| `memory_type` | string | 記憶類型（vector） |
| `session_id` | string | 會話識別碼 |
| `embedding_model` | string | 嵌入模型 |
| `config` | object | 記憶配置 |

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

### AI 模型

`ai.model`

AI Agent 的 LLM 模型配置

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.7` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |
| `max_tokens` | number | No | `4096` | 回應的最大 Token 數量 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `provider` | string | LLM 提供者 |
| `model` | string | 模型名稱 |
| `config` | object | 模型配置 |

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

### 視覺分析

`ai.vision.analyze`

使用 AI 視覺模型分析影像

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | No | - | 影像檔案的本地路徑 |
| `image_url` | string | No | - | 要分析的影像 URL |
| `prompt` | string | No | `Describe this image in detail` | 要分析或詢問圖片的內容 |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | 視覺分析的 AI 提供者 |
| `model` | string | No | `gpt-4o` | 要使用的視覺模型 |
| `api_key` | string | No | - | API 金鑰（可回退至環境變數） |
| `max_tokens` | number | No | `1000` | 回應中的最大標記數量 |
| `detail` | select (`low`, `high`, `auto`) | No | `auto` | 影像細節等級（低/高/自動） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `analysis` | string | 影像的 AI 分析 |
| `model` | string | 用於分析的模型 |
| `provider` | string | 用於分析的提供者 |
| `tokens_used` | number | 使用的標記數量 |

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

### Claude 對話

`api.anthropic.chat`

傳送聊天訊息給 Anthropic Claude AI 並取得回應

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Anthropic API 金鑰（預設使用 env.ANTHROPIC_API_KEY） |
| `model` | string | No | `claude-3-5-sonnet-20241022` | 要使用的 Claude 模型 |
| `messages` | array | Yes | - | 包含角色和內容的訊息物件陣列 |
| `max_tokens` | number | No | `1024` | 回應的最大 Token 數 |
| `temperature` | number | No | `1.0` | 取樣溫度（0-1），較高值使輸出更隨機 |
| `system` | string | No | - | 引導 Claude 行為的系統提示詞 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | 回應內容 |
| `model` | string | 使用的模型 |
| `stop_reason` | string | 停止原因 |
| `usage` | object | Token 使用統計 |

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

### Google Gemini 對話

`api.google_gemini.chat`

傳送聊天訊息給 Google Gemini AI 並取得回應

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Google AI API 金鑰（預設使用 env.GOOGLE_AI_API_KEY） |
| `model` | string | No | `gemini-1.5-pro` | 要使用的 Gemini 模型 |
| `prompt` | string | Yes | - | 傳送給 Gemini 的文字提示詞 |
| `temperature` | number | No | `1.0` | 控制隨機性（0-2），較高值使輸出更隨機 |
| `max_output_tokens` | number | No | `2048` | 回應的最大 Token 數 |

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

### OpenAI 對話

`api.openai.chat`

傳送聊天訊息給 OpenAI GPT 模型

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | 傳送給 GPT 的訊息 |
| `model` | select (`gpt-4-turbo-preview`, `gpt-4`, `gpt-3.5-turbo`) | No | `gpt-4-turbo-preview` | 要使用的 GPT 模型 |
| `temperature` | number | No | `0.7` | 取樣溫度（0-2） |
| `max_tokens` | number | No | `1000` | 回應的最大 Token 數 |
| `system_message` | string | No | - | 系統角色訊息（選填） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | 回應文字 |
| `model` | string | 使用的模型 |
| `usage` | object | Token 使用統計 |

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

### DALL-E 圖片產生

`api.openai.image`

使用 DALL-E 產生圖片

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | 要產生的圖片描述 |
| `size` | select (`256x256`, `512x512`, `1024x1024`, `1792x1024`, `1024x1792`) | No | `1024x1024` | 圖片尺寸 |
| `model` | select (`dall-e-3`, `dall-e-2`) | No | `dall-e-3` | DALL-E 模型版本 |
| `quality` | select (`standard`, `hd`) | No | `standard` | 圖片品質（僅限 DALL-E 3） |
| `n` | number | No | `1` | 要產生的圖片數量（1-10） |

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

### AI 代理

`llm.agent`

自主 AI 代理，支援多埠連接（模型、記憶、工具）

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt_source` | select (`manual`, `auto`) | No | `manual` | 取得任務提示詞的來源 |
| `task` | string | No | - | 代理要完成的任務。使用 {<!-- -->{input}<!-- -->} 參考上游資料。 |
| `prompt_path` | string | No | `{<!-- -->{input}<!-- -->}` | 從輸入擷取提示詞的路徑（例如 {<!-- -->{input.message}<!-- -->}） |
| `join_strategy` | select (`first`, `newline`, `separator`, `json`) | No | `first` | 如何處理陣列輸入 |
| `join_separator` | string | No | `

---

` | 合併陣列項目的分隔符 |
| `max_input_size` | number | No | `10000` | 提示詞的最大字元數（防止溢位） |
| `system_prompt` | string | No | `You are a helpful AI agent. Use the available tools to complete the task. Think step by step.` | 代理行為的指示說明 |
| `tools` | array | No | `[]` | 模組 ID 列表（可替代連接工具節點） |
| `context` | object | No | `{}` | 提供給代理的額外上下文資料 |
| `max_iterations` | number | No | `10` | 代理執行的最大迭代次數 |
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.3` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 代理是否成功完成 |
| `result` | string | 代理的最終結果 |
| `steps` | array | 代理執行的步驟列表 |
| `tool_calls` | number | 工具呼叫記錄 |
| `tokens_used` | number | 使用的 Token 數量 |

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
