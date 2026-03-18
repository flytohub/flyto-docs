# AI & LLM

AI model integration, text generation, embeddings, and autonomous agents.

**18 modules**

| Module | Description |
|--------|-------------|
| [Agent Tự động](#agent-tự-động) | Agent AI tự điều khiển với bộ nhớ và hành vi hướng mục tiêu |
| [Agent Chuỗi](#agent-chuỗi) | Chuỗi xử lý AI tuần tự với nhiều bước |
| [Agent Sử Dụng Công Cụ](#agent-sử-dụng-công-cụ) | AI Agent có thể gọi công cụ/chức năng |
| [Nhúng Văn Bản](#nhúng-văn-bản) | Tạo vector nhúng từ văn bản bằng mô hình AI |
| [Trích Xuất AI](#trích-xuất-ai) | Trích xuất dữ liệu có cấu trúc từ văn bản bằng AI |
| [Trò chuyện Ollama cục bộ](#trò-chuyện-ollama-cục-bộ) | Trò chuyện với LLM cục bộ qua Ollama (hoàn toàn ngoại tuyến) |
| [Bộ nhớ AI](#bộ-nhớ-ai) | Bộ nhớ hội thoại cho AI Agent |
| [Bộ nhớ thực thể](#bộ-nhớ-thực-thể) | Trích xuất và theo dõi thực thể (người, địa điểm, khái niệm) từ hội thoại |
| [Bộ nhớ Redis](#bộ-nhớ-redis) | Bộ nhớ hội thoại lâu dài sử dụng lưu trữ Redis |
| [Bộ nhớ Vector](#bộ-nhớ-vector) | Bộ nhớ ngữ nghĩa sử dụng vector embeddings để truy xuất ngữ cảnh liên quan |
| [Model AI](#model-ai) | Cấu hình model LLM cho AI Agent |
| [AI Tool](#ai-tool) | Expose a module as a tool for AI Agent |
| [Phân Tích Thị Giác](#phân-tích-thị-giác) | Phân tích hình ảnh bằng mô hình AI thị giác |
| [Trò chuyện Claude](#trò-chuyện-claude) | Gửi tin nhắn chat đến Anthropic Claude AI và nhận phản hồi |
| [Trò chuyện Google Gemini](#trò-chuyện-google-gemini) | Gửi tin nhắn chat đến Google Gemini AI và nhận phản hồi |
| [Trò chuyện OpenAI](#trò-chuyện-openai) | Gửi tin nhắn chat đến các model GPT OpenAI |
| [Tạo hình ảnh DALL-E](#tạo-hình-ảnh-dall-e) | Tạo hình ảnh sử dụng DALL-E |
| [AI Agent](#ai-agent) | Agent AI tự động với kết nối đa cổng (model, memory, tools) |

## Modules

### Agent Tự động

`agent.autonomous`

Agent AI tự điều khiển với bộ nhớ và hành vi hướng mục tiêu

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `goal` | string | Yes | - | Mục tiêu để agent đạt được |
| `context` | string | No | - | Mục tiêu để agent đạt được |
| `max_iterations` | number | No | `5` | Ngữ cảnh hoặc ràng buộc bổ sung |
| `llm_provider` | select (`openai`, `anthropic`, `gemini`, `ollama`) | No | `openai` | Số bước suy luận tối đa |
| `model` | string | No | `gpt-4o` | Tên model (ví dụ: gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | Tên model (ví dụ: gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | URL máy chủ Ollama (chỉ cho provider ollama) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Mức độ sáng tạo (0-2) |
| `thoughts` | array | Kết quả thao tác |
| `iterations` | number | Kết quả thao tác |
| `goal_achieved` | boolean | Các bước suy luận của Agent |

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

### Agent Chuỗi

`agent.chain`

Chuỗi xử lý AI tuần tự với nhiều bước

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | string | Yes | - | Đầu vào ban đầu cho chuỗi |
| `chain_steps` | array | Yes | - | Đầu vào ban đầu cho chuỗi |
| `llm_provider` | select (`openai`, `anthropic`, `gemini`, `ollama`) | No | `openai` | Mảng các bước xử lý (mỗi bước là một template prompt) |
| `model` | string | No | `gpt-4o` | Tên model (ví dụ: gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | Tên model (ví dụ: gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | URL máy chủ Ollama (chỉ cho provider ollama) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Mức độ sáng tạo (0-2) |
| `intermediate_results` | array | Kết quả thao tác |
| `steps_completed` | number | Kết quả thao tác |

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

### Agent Sử Dụng Công Cụ

`agent.tool_use`

AI Agent có thể gọi công cụ/chức năng

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Mục tiêu hoặc nhiệm vụ cho agent |
| `tools` | array | Yes | - | Danh sách định nghĩa công cụ [{name, description, parameters}] |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Nhà cung cấp LLM cho agent |
| `model` | string | No | `gpt-4o` | Mô hình sẽ sử dụng |
| `api_key` | string | No | - | Khóa API (sử dụng biến môi trường nếu không có) |
| `max_iterations` | number | No | `10` | Số vòng gọi công cụ tối đa |
| `system_prompt` | string | No | - | Lời nhắc hệ thống tùy chọn để hướng dẫn agent |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Phản hồi cuối cùng của agent |
| `tool_calls` | array | Tất cả các lần gọi công cụ trong quá trình thực thi |
| `iterations` | number | Số vòng lặp đã hoàn thành |
| `model` | string | Mô hình đã sử dụng |

**Example:** File Processing Agent

```yaml
prompt: Read the config file and update the version number
tools: [{"name": "read_file", "description": "Read contents of a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}}, "required": ["path"]}}, {"name": "write_file", "description": "Write contents to a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}, "content": {"type": "string", "description": "File content"}}, "required": ["path", "content"]}}]
provider: openai
model: gpt-4o
max_iterations: 5
```

### Nhúng Văn Bản

`ai.embed`

Tạo vector nhúng từ văn bản bằng mô hình AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Văn bản cần nhúng |
| `provider` | select (`openai`, `local`) | No | `openai` | Nhà cung cấp AI cho nhúng |
| `model` | string | No | `text-embedding-3-small` | Mô hình nhúng để sử dụng |
| `api_key` | string | No | - | Khóa API (sử dụng biến môi trường nếu không có) |
| `dimensions` | number | No | - | Số chiều nhúng (cho các mô hình hỗ trợ) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `embeddings` | array | Mảng vector nhúng |
| `model` | string | Mô hình sử dụng để nhúng |
| `dimensions` | number | Số chiều trong vector nhúng |
| `token_count` | number | Số lượng token đã xử lý |

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

### Trích Xuất AI

`ai.extract`

Trích xuất dữ liệu có cấu trúc từ văn bản bằng AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Văn bản cần trích xuất dữ liệu |
| `schema` | object | Yes | - | JSON schema định nghĩa các trường cần trích xuất |
| `instructions` | string | No | - | Hướng dẫn trích xuất bổ sung |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Nhà cung cấp AI để sử dụng |
| `model` | string | No | `gpt-4o-mini` | Mô hình sử dụng để trích xuất |
| `api_key` | string | No | - | Khóa API (sử dụng biến môi trường nếu không có) |
| `temperature` | number | No | `0` | Nhiệt độ mẫu (0-2) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | Dữ liệu có cấu trúc đã trích xuất |
| `model` | string | Mô hình sử dụng để trích xuất |
| `raw_response` | string | Phản hồi thô của mô hình |

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

### Trò chuyện Ollama cục bộ

`ai.local_ollama.chat`

Trò chuyện với LLM cục bộ qua Ollama (hoàn toàn ngoại tuyến)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Tin nhắn gửi đến LLM cục bộ |
| `model` | select (`llama2`, `llama2:13b`, `llama2:70b`, `mistral`, `mixtral`, `codellama`, `codellama:13b`, `phi`, `neural-chat`, `starling-lm`) | No | `llama2` | Tin nhắn gửi đến LLM cục bộ |
| `temperature` | number | No | `0.7` | Nhiệt độ lấy mẫu (0-2) |
| `system_message` | string | No | - | Tin nhắn vai trò hệ thống (tùy chọn) |
| `ollama_url` | string | No | `http://localhost:11434` | Tin nhắn vai trò hệ thống (tùy chọn) |
| `max_tokens` | number | No | - | URL máy chủ Ollama |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | Số token tối đa trong phản hồi (tùy chọn, phụ thuộc model) |
| `model` | string | Phản hồi từ thao tác |
| `context` | array | Phản hồi từ thao tác |
| `total_duration` | number | Tên hoặc định danh model |
| `load_duration` | number | Ngữ cảnh hội thoại cho các yêu cầu tiếp theo |
| `prompt_eval_count` | number | Tổng thời gian xử lý |
| `eval_count` | number | Thời gian tải model |

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

### Bộ nhớ AI

`ai.memory`

Bộ nhớ hội thoại cho AI Agent

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `memory_type` | select (`buffer`, `window`, `summary`) | Yes | `buffer` | Loại lưu trữ bộ nhớ |
| `window_size` | number | No | `10` | Số tin nhắn gần đây để giữ (cho bộ nhớ cửa sổ) |
| `session_id` | string | No | - | Định danh duy nhất cho phiên hội thoại này |
| `initial_messages` | array | No | `[]` | Lịch sử hội thoại đã tải sẵn |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `memory_type` | string | Lịch sử hội thoại đã tải sẵn |
| `session_id` | string | Lịch sử hội thoại đã tải sẵn |
| `messages` | array | Loại bộ nhớ |
| `config` | object | Định danh phiên |

**Example:** Simple Buffer Memory

```yaml
memory_type: buffer
```

**Example:** Window Memory (last 5 messages)

```yaml
memory_type: window
window_size: 5
```

### Bộ nhớ thực thể

`ai.memory.entity`

Trích xuất và theo dõi thực thể (người, địa điểm, khái niệm) từ hội thoại

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
| `memory_type` | string | Số lượng thực thể tối đa để nhớ |
| `session_id` | string | Số lượng thực thể tối đa để nhớ |
| `entities` | object | Loại bộ nhớ (entity) |
| `relationships` | array | Định danh phiên |
| `config` | object | Các thực thể được theo dõi theo loại |

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

### Bộ nhớ Redis

`ai.memory.redis`

Bộ nhớ hội thoại lâu dài sử dụng lưu trữ Redis

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
| `memory_type` | string | Tải tin nhắn hiện có từ Redis khi khởi tạo |
| `session_id` | string | Tải tin nhắn hiện có từ Redis khi khởi tạo |
| `messages` | array | Loại bộ nhớ (redis) |
| `connected` | boolean | Định danh phiên |
| `config` | object | Lịch sử tin nhắn đã tải |

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

### Bộ nhớ Vector

`ai.memory.vector`

Bộ nhớ ngữ nghĩa sử dụng vector embeddings để truy xuất ngữ cảnh liên quan

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
| `memory_type` | string | Bao gồm dấu thời gian và metadata khác với bộ nhớ |
| `session_id` | string | Bao gồm dấu thời gian và metadata khác với bộ nhớ |
| `embedding_model` | string | Loại bộ nhớ (vector) |
| `config` | object | Định danh phiên |

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

### Model AI

`ai.model`

Cấu hình model LLM cho AI Agent

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.7` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |
| `max_tokens` | number | No | `4096` | Số token tối đa trong phản hồi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `provider` | string | Số token tối đa trong phản hồi |
| `model` | string | Tên nhà cung cấp LLM |
| `config` | object | Tên nhà cung cấp LLM |

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

### Phân Tích Thị Giác

`ai.vision.analyze`

Phân tích hình ảnh bằng mô hình AI thị giác

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | No | - | Đường dẫn cục bộ đến tệp hình ảnh |
| `image_url` | string | No | - | URL của hình ảnh cần phân tích |
| `prompt` | string | No | `Describe this image in detail` | Nội dung cần phân tích hoặc hỏi về hình ảnh |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Nhà cung cấp AI cho phân tích thị giác |
| `model` | string | No | `gpt-4o` | Mô hình thị giác để sử dụng |
| `api_key` | string | No | - | Khóa API (sử dụng biến môi trường nếu không có) |
| `max_tokens` | number | No | `1000` | Số lượng token tối đa trong phản hồi |
| `detail` | select (`low`, `high`, `auto`) | No | `auto` | Mức độ chi tiết của hình ảnh (thấp/cao/tự động) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `analysis` | string | Phân tích AI của hình ảnh |
| `model` | string | Mô hình sử dụng để phân tích |
| `provider` | string | Nhà cung cấp sử dụng để phân tích |
| `tokens_used` | number | Số lượng token đã sử dụng |

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

### Trò chuyện Claude

`api.anthropic.chat`

Gửi tin nhắn chat đến Anthropic Claude AI và nhận phản hồi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Khóa API Anthropic (mặc định là env.ANTHROPIC_API_KEY) |
| `model` | string | No | `claude-sonnet-4-6` | Model Claude để sử dụng |
| `messages` | array | Yes | - | Mảng các đối tượng tin nhắn với role và content |
| `max_tokens` | number | No | `1024` | Nội dung trả về từ thao tác |
| `temperature` | number | No | `1.0` | Nhiệt độ lấy mẫu (0-1). Giá trị cao hơn làm đầu ra ngẫu nhiên hơn |
| `system` | string | No | - | Prompt hệ thống để hướng dẫn hành vi Claude |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Prompt hệ thống để hướng dẫn hành vi Claude |
| `model` | string | Văn bản phản hồi Claude |
| `stop_reason` | string | Model được sử dụng cho phản hồi |
| `usage` | object | Tại sao model ngừng tạo (end_turn, max_tokens, v.v.) |

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

### Trò chuyện Google Gemini

`api.google_gemini.chat`

Gửi tin nhắn chat đến Google Gemini AI và nhận phản hồi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Khóa API Google AI (mặc định là env.GOOGLE_AI_API_KEY) |
| `model` | string | No | `gemini-2.5-pro` | Model Gemini để sử dụng |
| `prompt` | string | Yes | - | Prompt văn bản gửi đến Gemini |
| `temperature` | number | No | `1.0` | Kiểm soát tính ngẫu nhiên (0-2). Giá trị cao hơn làm đầu ra ngẫu nhiên hơn |
| `max_output_tokens` | number | No | `2048` | Số token tối đa trong phản hồi |

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

### Trò chuyện OpenAI

`api.openai.chat`

Gửi tin nhắn chat đến các model GPT OpenAI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Tin nhắn gửi đến GPT |
| `model` | select (`gpt-4o`, `gpt-4o-mini`, `gpt-4.1`, `gpt-4.1-mini`, `o3`, `o3-mini`, `o4-mini`, `gpt-4-turbo-preview`) | No | `gpt-4o` | Tin nhắn gửi đến GPT |
| `temperature` | number | No | `0.7` | Nhiệt độ lấy mẫu (0-2) |
| `max_tokens` | number | No | `1000` | Nhiệt độ lấy mẫu (0-2) |
| `system_message` | string | No | - | Số token tối đa trong phản hồi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | Tin nhắn vai trò hệ thống (tùy chọn) |
| `model` | string | Phản hồi từ thao tác |
| `usage` | object | Phản hồi từ thao tác |

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

### Tạo hình ảnh DALL-E

`api.openai.image`

Tạo hình ảnh sử dụng DALL-E

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Mô tả hình ảnh cần tạo |
| `size` | select (`256x256`, `512x512`, `1024x1024`, `1792x1024`, `1024x1792`) | No | `1024x1024` | Mô tả hình ảnh cần tạo |
| `model` | select (`dall-e-3`, `dall-e-2`) | No | `dall-e-3` | Phiên bản model DALL-E |
| `quality` | select (`standard`, `hd`) | No | `standard` | Chất lượng hình ảnh (chỉ DALL-E 3) |
| `n` | number | No | `1` | Số hình ảnh tạo ra (1-10) |

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

Agent AI tự động với kết nối đa cổng (model, memory, tools)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt_source` | select (`manual`, `auto`) | No | `manual` | Lấy prompt nhiệm vụ từ đâu |
| `task` | string | No | - | Nhiệm vụ cho agent hoàn thành. Sử dụng {<!-- -->{input}<!-- -->} để tham chiếu dữ liệu upstream. |
| `prompt_path` | string | No | `{<!-- -->{input}<!-- -->}` | Đường dẫn để trích xuất prompt từ đầu vào (ví dụ: {<!-- -->{input.message}<!-- -->}) |
| `join_strategy` | select (`first`, `newline`, `separator`, `json`) | No | `first` | Cách xử lý đầu vào mảng |
| `join_separator` | string | No | `

---

` | Ký tự phân cách để nối các mục mảng |
| `max_input_size` | number | No | `10000` | Số ký tự tối đa cho prompt (ngăn tràn) |
| `system_prompt` | string | No | `You are a helpful AI agent. Use the available tools to complete the task. Think step by step.` | Hướng dẫn cho hành vi agent |
| `tools` | array | No | `[]` | Danh sách ID module (thay thế cho kết nối các node công cụ) |
| `context` | object | No | `{}` | Danh sách ID module (thay thế cho kết nối các node công cụ) |
| `max_iterations` | number | No | `10` | Dữ liệu ngữ cảnh bổ sung cho agent |
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.3` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Agent có hoàn thành thành công không |
| `result` | string | Agent có hoàn thành thành công không |
| `steps` | array | Agent có hoàn thành thành công không |
| `tool_calls` | number | Kết quả cuối cùng từ agent |
| `tokens_used` | number | Danh sách các bước agent đã thực hiện |

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
