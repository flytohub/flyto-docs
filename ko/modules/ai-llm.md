# AI & LLM

AI model integration, text generation, embeddings, and autonomous agents.

**18 modules**

| Module | Description |
|--------|-------------|
| [자율 에이전트](#자율-에이전트) | 메모리와 목표 지향 행동을 갖춘 자율 AI 에이전트 |
| [체인 에이전트](#체인-에이전트) | 여러 단계를 가진 순차적 AI 처리 체인 |
| [도구 사용 에이전트](#도구-사용-에이전트) | 도구/기능을 호출할 수 있는 AI 에이전트 |
| [텍스트 임베딩](#텍스트-임베딩) | AI 모델을 사용하여 텍스트에서 벡터 임베딩 생성 |
| [AI 추출](#ai-추출) | AI를 사용하여 텍스트에서 구조화된 데이터 추출 |
| [로컬 Ollama 채팅](#로컬-ollama-채팅) | Ollama를 통해 로컬 LLM과 채팅 (완전 오프라인) |
| [AI 메모리](#ai-메모리) | AI 에이전트용 대화 메모리 |
| [엔티티 메모리](#엔티티-메모리) | 대화에서 엔티티(사람, 장소, 개념) 추출 및 추적 |
| [Redis 메모리](#redis-메모리) | Redis 저장소를 사용한 영구 대화 메모리 |
| [벡터 메모리](#벡터-메모리) | 관련 컨텍스트 검색을 위한 벡터 임베딩을 사용한 의미 메모리 |
| [AI 모델](#ai-모델) | AI 에이전트용 LLM 모델 구성 |
| [AI Tool](#ai-tool) | Expose a module as a tool for AI Agent |
| [비전 분석](#비전-분석) | AI 비전 모델을 사용하여 이미지 분석 |
| [Claude 채팅](#claude-채팅) | Anthropic Claude AI에 채팅 메시지를 보내고 응답 받기 |
| [Google Gemini 채팅](#google-gemini-채팅) | Google Gemini AI에 채팅 메시지를 보내고 응답 받기 |
| [OpenAI 채팅](#openai-채팅) | OpenAI GPT 모델에 채팅 메시지 전송 |
| [DALL-E 이미지 생성](#dall-e-이미지-생성) | DALL-E를 사용하여 이미지 생성 |
| [AI 에이전트](#ai-에이전트) | 다중 포트 연결(모델, 메모리, 도구)이 있는 자율 AI 에이전트 |

## Modules

### 자율 에이전트

`agent.autonomous`

메모리와 목표 지향 행동을 갖춘 자율 AI 에이전트

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `goal` | string | Yes | - | 에이전트가 달성할 목표 |
| `context` | string | No | - | 에이전트가 달성할 목표 |
| `max_iterations` | number | No | `5` | 추가 컨텍스트 또는 제약 조건 |
| `llm_provider` | select (`openai`, `anthropic`, `gemini`, `ollama`) | No | `openai` | 최대 추론 단계 |
| `model` | string | No | `gpt-4o` | 모델 이름 (예: gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | 모델 이름 (예: gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | Ollama 서버 URL (ollama 제공자 전용) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 창의성 수준 (0-2) |
| `thoughts` | array | 작업 결과 |
| `iterations` | number | 작업 결과 |
| `goal_achieved` | boolean | 에이전트 추론 단계 |

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

### 체인 에이전트

`agent.chain`

여러 단계를 가진 순차적 AI 처리 체인

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | string | Yes | - | 체인의 초기 입력 |
| `chain_steps` | array | Yes | - | 체인의 초기 입력 |
| `llm_provider` | select (`openai`, `anthropic`, `gemini`, `ollama`) | No | `openai` | 처리 단계 배열 (각각 프롬프트 템플릿) |
| `model` | string | No | `gpt-4o` | 모델 이름 (예: gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | 모델 이름 (예: gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | Ollama 서버 URL (ollama 제공자 전용) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 창의성 수준 (0-2) |
| `intermediate_results` | array | 작업 결과 |
| `steps_completed` | number | 작업 결과 |

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

### 도구 사용 에이전트

`agent.tool_use`

도구/기능을 호출할 수 있는 AI 에이전트

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | 에이전트의 목표 또는 작업 |
| `tools` | array | Yes | - | 도구 정의 목록 [{name, description, parameters}] |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | 에이전트의 LLM 제공자 |
| `model` | string | No | `gpt-4o` | 사용할 모델 |
| `api_key` | string | No | - | API 키 (환경 변수로 대체 가능) |
| `max_iterations` | number | No | `10` | 최대 도구 호출 라운드 수 |
| `system_prompt` | string | No | - | 에이전트를 안내하기 위한 선택적 시스템 프롬프트 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 에이전트의 최종 응답 |
| `tool_calls` | array | 실행 중에 수행된 모든 도구 호출 |
| `iterations` | number | 완료된 반복 횟수 |
| `model` | string | 사용된 모델 |

**Example:** File Processing Agent

```yaml
prompt: Read the config file and update the version number
tools: [{"name": "read_file", "description": "Read contents of a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}}, "required": ["path"]}}, {"name": "write_file", "description": "Write contents to a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}, "content": {"type": "string", "description": "File content"}}, "required": ["path", "content"]}}]
provider: openai
model: gpt-4o
max_iterations: 5
```

### 텍스트 임베딩

`ai.embed`

AI 모델을 사용하여 텍스트에서 벡터 임베딩 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 임베딩할 텍스트 |
| `provider` | select (`openai`, `local`) | No | `openai` | 임베딩을 위한 AI 제공자 |
| `model` | string | No | `text-embedding-3-small` | 사용할 임베딩 모델 |
| `api_key` | string | No | - | API 키 (환경 변수로 대체 가능) |
| `dimensions` | number | No | - | 임베딩 차원 (지원하는 모델에 한함) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `embeddings` | array | 벡터 임베딩 배열 |
| `model` | string | 임베딩에 사용된 모델 |
| `dimensions` | number | 임베딩 벡터의 차원 수 |
| `token_count` | number | 처리된 토큰 수 |

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

### AI 추출

`ai.extract`

AI를 사용하여 텍스트에서 구조화된 데이터 추출

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 데이터를 추출할 텍스트 |
| `schema` | object | Yes | - | 추출할 필드를 정의하는 JSON 스키마 |
| `instructions` | string | No | - | 추가 추출 지침 |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | 사용할 AI 제공자 |
| `model` | string | No | `gpt-4o-mini` | 추출에 사용할 모델 |
| `api_key` | string | No | - | API 키 (환경 변수로 대체 가능) |
| `temperature` | number | No | `0` | 샘플링 온도 (0-2) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | 추출된 구조화된 데이터 |
| `model` | string | 추출에 사용된 모델 |
| `raw_response` | string | 원본 모델 응답 |

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

### 로컬 Ollama 채팅

`ai.local_ollama.chat`

Ollama를 통해 로컬 LLM과 채팅 (완전 오프라인)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | 로컬 LLM에 보낼 메시지 |
| `model` | select (`llama2`, `llama2:13b`, `llama2:70b`, `mistral`, `mixtral`, `codellama`, `codellama:13b`, `phi`, `neural-chat`, `starling-lm`) | No | `llama2` | 로컬 LLM에 보낼 메시지 |
| `temperature` | number | No | `0.7` | 샘플링 온도 (0-2) |
| `system_message` | string | No | - | 시스템 역할 메시지 (선택사항) |
| `ollama_url` | string | No | `http://localhost:11434` | 시스템 역할 메시지 (선택사항) |
| `max_tokens` | number | No | - | Ollama 서버 URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | 응답의 최대 토큰 (선택사항, 모델에 따라 다름) |
| `model` | string | 작업의 응답 |
| `context` | array | 작업의 응답 |
| `total_duration` | number | 모델 이름 또는 식별자 |
| `load_duration` | number | 후속 요청을 위한 대화 컨텍스트 |
| `prompt_eval_count` | number | 총 처리 시간 |
| `eval_count` | number | 모델 로딩 시간 |

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

### AI 메모리

`ai.memory`

AI 에이전트용 대화 메모리

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `memory_type` | select (`buffer`, `window`, `summary`) | Yes | `buffer` | 메모리 저장 유형 |
| `window_size` | number | No | `10` | 유지할 최근 메시지 수 (윈도우 메모리용) |
| `session_id` | string | No | - | 이 대화 세션의 고유 식별자 |
| `initial_messages` | array | No | `[]` | 사전 로드된 대화 기록 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `memory_type` | string | 사전 로드된 대화 기록 |
| `session_id` | string | 사전 로드된 대화 기록 |
| `messages` | array | 메모리 유형 |
| `config` | object | 세션 식별자 |

**Example:** Simple Buffer Memory

```yaml
memory_type: buffer
```

**Example:** Window Memory (last 5 messages)

```yaml
memory_type: window
window_size: 5
```

### 엔티티 메모리

`ai.memory.entity`

대화에서 엔티티(사람, 장소, 개념) 추출 및 추적

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
| `memory_type` | string | 기억할 최대 엔티티 수 |
| `session_id` | string | 기억할 최대 엔티티 수 |
| `entities` | object | 메모리 유형 (엔티티) |
| `relationships` | array | 세션 식별자 |
| `config` | object | 유형별 추적된 엔티티 |

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

### Redis 메모리

`ai.memory.redis`

Redis 저장소를 사용한 영구 대화 메모리

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
| `memory_type` | string | 초기화 시 Redis에서 기존 메시지 로드 |
| `session_id` | string | 초기화 시 Redis에서 기존 메시지 로드 |
| `messages` | array | 메모리 유형 (redis) |
| `connected` | boolean | 세션 식별자 |
| `config` | object | 로드된 메시지 기록 |

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

### 벡터 메모리

`ai.memory.vector`

관련 컨텍스트 검색을 위한 벡터 임베딩을 사용한 의미 메모리

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
| `memory_type` | string | 메모리에 타임스탬프 및 기타 메타데이터 포함 |
| `session_id` | string | 메모리에 타임스탬프 및 기타 메타데이터 포함 |
| `embedding_model` | string | 메모리 유형 (벡터) |
| `config` | object | 세션 식별자 |

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

### AI 모델

`ai.model`

AI 에이전트용 LLM 모델 구성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.7` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |
| `max_tokens` | number | No | `4096` | 응답의 최대 토큰 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `provider` | string | 응답의 최대 토큰 |
| `model` | string | LLM 제공자 이름 |
| `config` | object | LLM 제공자 이름 |

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

### 비전 분석

`ai.vision.analyze`

AI 비전 모델을 사용하여 이미지 분석

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | No | - | 이미지 파일의 로컬 경로 |
| `image_url` | string | No | - | 분석할 이미지의 URL |
| `prompt` | string | No | `Describe this image in detail` | 이미지에 대해 분석하거나 질문할 내용 |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | 비전 분석을 위한 AI 제공자 |
| `model` | string | No | `gpt-4o` | 사용할 비전 모델 |
| `api_key` | string | No | - | API 키 (환경 변수로 대체 가능) |
| `max_tokens` | number | No | `1000` | 응답의 최대 토큰 수 |
| `detail` | select (`low`, `high`, `auto`) | No | `auto` | 이미지 세부 수준 (낮음/높음/자동) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `analysis` | string | 이미지에 대한 AI 분석 |
| `model` | string | 분석에 사용된 모델 |
| `provider` | string | 분석에 사용된 제공자 |
| `tokens_used` | number | 사용된 토큰 수 |

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

### Claude 채팅

`api.anthropic.chat`

Anthropic Claude AI에 채팅 메시지를 보내고 응답 받기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Anthropic API 키 (기본값: env.ANTHROPIC_API_KEY) |
| `model` | string | No | `claude-sonnet-4-6` | 사용할 Claude 모델 |
| `messages` | array | Yes | - | role과 content가 포함된 메시지 객체 배열 |
| `max_tokens` | number | No | `1024` | 작업에서 반환된 콘텐츠 |
| `temperature` | number | No | `1.0` | 샘플링 온도 (0-1). 높을수록 출력이 더 무작위 |
| `system` | string | No | - | Claude 동작을 안내하는 시스템 프롬프트 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Claude 동작을 안내하는 시스템 프롬프트 |
| `model` | string | Claude 응답 텍스트 |
| `stop_reason` | string | 응답에 사용된 모델 |
| `usage` | object | 모델이 생성을 중단한 이유 (end_turn, max_tokens 등) |

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

### Google Gemini 채팅

`api.google_gemini.chat`

Google Gemini AI에 채팅 메시지를 보내고 응답 받기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Google AI API 키 (기본값: env.GOOGLE_AI_API_KEY) |
| `model` | string | No | `gemini-2.5-pro` | 사용할 Gemini 모델 |
| `prompt` | string | Yes | - | Gemini에 보낼 텍스트 프롬프트 |
| `temperature` | number | No | `1.0` | 무작위성 제어 (0-2). 높을수록 출력이 더 무작위 |
| `max_output_tokens` | number | No | `2048` | 응답의 최대 토큰 수 |

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

### OpenAI 채팅

`api.openai.chat`

OpenAI GPT 모델에 채팅 메시지 전송

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | GPT에 보낼 메시지 |
| `model` | select (`gpt-4o`, `gpt-4o-mini`, `gpt-4.1`, `gpt-4.1-mini`, `o3`, `o3-mini`, `o4-mini`, `gpt-4-turbo-preview`) | No | `gpt-4o` | GPT에 보낼 메시지 |
| `temperature` | number | No | `0.7` | 샘플링 온도 (0-2) |
| `max_tokens` | number | No | `1000` | 샘플링 온도 (0-2) |
| `system_message` | string | No | - | 응답의 최대 토큰 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | 시스템 역할 메시지 (선택사항) |
| `model` | string | 작업의 응답 |
| `usage` | object | 작업의 응답 |

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

### DALL-E 이미지 생성

`api.openai.image`

DALL-E를 사용하여 이미지 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | 생성할 이미지 설명 |
| `size` | select (`256x256`, `512x512`, `1024x1024`, `1792x1024`, `1024x1792`) | No | `1024x1024` | 생성할 이미지 설명 |
| `model` | select (`dall-e-3`, `dall-e-2`) | No | `dall-e-3` | DALL-E 모델 버전 |
| `quality` | select (`standard`, `hd`) | No | `standard` | 이미지 품질 (DALL-E 3 전용) |
| `n` | number | No | `1` | 생성할 이미지 수 (1-10) |

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

### AI 에이전트

`llm.agent`

다중 포트 연결(모델, 메모리, 도구)이 있는 자율 AI 에이전트

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt_source` | select (`manual`, `auto`) | No | `manual` | 작업 프롬프트를 가져올 위치 |
| `task` | string | No | - | 에이전트가 완료할 작업. 업스트림 데이터를 참조하려면 {<!-- -->{input}<!-- -->}을 사용하세요. |
| `prompt_path` | string | No | `{<!-- -->{input}<!-- -->}` | 입력에서 프롬프트를 추출할 경로 (예: {<!-- -->{input.message}<!-- -->}) |
| `join_strategy` | select (`first`, `newline`, `separator`, `json`) | No | `first` | 배열 입력 처리 방법 |
| `join_separator` | string | No | `

---

` | 배열 항목 결합을 위한 구분자 |
| `max_input_size` | number | No | `10000` | 프롬프트의 최대 문자 수 (오버플로 방지) |
| `system_prompt` | string | No | `You are a helpful AI agent. Use the available tools to complete the task. Think step by step.` | 에이전트 동작을 위한 지침 |
| `tools` | array | No | `[]` | 모듈 ID 목록 (도구 노드 연결 대안) |
| `context` | object | No | `{}` | 모듈 ID 목록 (도구 노드 연결 대안) |
| `max_iterations` | number | No | `10` | 에이전트를 위한 추가 컨텍스트 데이터 |
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.3` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | 에이전트가 성공적으로 완료되었는지 여부 |
| `result` | string | 에이전트가 성공적으로 완료되었는지 여부 |
| `steps` | array | 에이전트가 성공적으로 완료되었는지 여부 |
| `tool_calls` | number | 에이전트의 최종 결과 |
| `tokens_used` | number | 에이전트가 수행한 단계 목록 |

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
