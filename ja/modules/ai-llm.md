# AI & LLM

AI model integration, text generation, embeddings, and autonomous agents.

**18 modules**

| Module | Description |
|--------|-------------|
| [自律型エージェント](#自律型エージェント) | メモリと目標指向の動作を持つ自律型AIエージェント |
| [チェーンエージェント](#チェーンエージェント) | 複数のステップを持つ順次AI処理チェーン |
| [ツール使用エージェント](#ツール使用エージェント) | ツールや関数を呼び出せるAIエージェント |
| [テキスト埋め込み](#テキスト埋め込み) | AIモデルを使ってテキストからベクトル埋め込みを生成 |
| [AI抽出](#ai抽出) | AIを使ってテキストから構造化データを抽出 |
| [ローカルOllamaチャット](#ローカルollamaチャット) | Ollama経由でローカルLLMとチャットする（完全オフライン） |
| [AIメモリ](#aiメモリ) | AIエージェント用の会話メモリ |
| [エンティティメモリ](#エンティティメモリ) | 会話からエンティティ（人、場所、概念）を抽出して追跡する |
| [Redisメモリ](#redisメモリ) | Redisストレージを使用した永続的な会話メモリ |
| [ベクターメモリ](#ベクターメモリ) | 関連コンテキスト取得のためのベクター埋め込みを使用したセマンティックメモリ |
| [AIモデル](#aiモデル) | AIエージェント用のLLMモデル設定 |
| [AI Tool](#ai-tool) | Expose a module as a tool for AI Agent |
| [ビジョン分析](#ビジョン分析) | AIビジョンモデルを使って画像を分析 |
| [Claudeチャット](#claudeチャット) | Anthropic Claude AIにチャットメッセージを送信して応答を取得する |
| [Google Geminiチャット](#google-geminiチャット) | Google Gemini AIにチャットメッセージを送信して応答を取得する |
| [OpenAIチャット](#openaiチャット) | OpenAI GPTモデルにチャットメッセージを送信する |
| [DALL-E画像生成](#dall-e画像生成) | DALL-Eを使用して画像を生成する |
| [AIエージェント](#aiエージェント) | マルチポート接続（モデル、メモリ、ツール）を持つ自律型AIエージェント |

## Modules

### 自律型エージェント

`agent.autonomous`

メモリと目標指向の動作を持つ自律型AIエージェント

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `goal` | string | Yes | - | エージェントが達成する目標 |
| `context` | string | No | - | エージェントが達成する目標 |
| `max_iterations` | number | No | `5` | 追加のコンテキストまたは制約 |
| `llm_provider` | select (`openai`, `ollama`) | No | `openai` | 最大推論ステップ数 |
| `model` | string | No | `gpt-4-turbo-preview` | モデル名（例: gpt-4, llama2, mistral） |
| `ollama_url` | string | No | `http://localhost:11434` | モデル名（例: gpt-4, llama2, mistral） |
| `temperature` | number | No | `0.7` | OllamaサーバーURL（ollamaプロバイダーのみ） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 創造性レベル（0-2） |
| `thoughts` | array | 操作結果 |
| `iterations` | number | 操作結果 |
| `goal_achieved` | boolean | エージェントの推論ステップ |

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

### チェーンエージェント

`agent.chain`

複数のステップを持つ順次AI処理チェーン

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | string | Yes | - | チェーンの初期入力 |
| `chain_steps` | array | Yes | - | チェーンの初期入力 |
| `llm_provider` | select (`openai`, `ollama`) | No | `openai` | 処理ステップの配列（各ステップはプロンプトテンプレート） |
| `model` | string | No | `gpt-4-turbo-preview` | モデル名（例: gpt-4, llama2, mistral） |
| `ollama_url` | string | No | `http://localhost:11434` | モデル名（例: gpt-4, llama2, mistral） |
| `temperature` | number | No | `0.7` | OllamaサーバーURL（ollamaプロバイダーのみ） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | 創造性レベル（0-2） |
| `intermediate_results` | array | 操作結果 |
| `steps_completed` | number | 操作結果 |

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

### ツール使用エージェント

`agent.tool_use`

ツールや関数を呼び出せるAIエージェント

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | エージェントの目標やタスク |
| `tools` | array | Yes | - | ツール定義のリスト [{name, description, parameters}] |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | エージェントのLLMプロバイダー |
| `model` | string | No | `gpt-4o` | 使用するモデル |
| `api_key` | string | No | - | APIキー（環境変数にフォールバック） |
| `max_iterations` | number | No | `10` | ツール呼び出しラウンドの最大数 |
| `system_prompt` | string | No | - | エージェントを導くためのオプションのシステムプロンプト |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | エージェントの最終応答 |
| `tool_calls` | array | 実行中に行われたすべてのツール呼び出し |
| `iterations` | number | 完了したイテレーション数 |
| `model` | string | 使用されたモデル |

**Example:** File Processing Agent

```yaml
prompt: Read the config file and update the version number
tools: [{"name": "read_file", "description": "Read contents of a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}}, "required": ["path"]}}, {"name": "write_file", "description": "Write contents to a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}, "content": {"type": "string", "description": "File content"}}, "required": ["path", "content"]}}]
provider: openai
model: gpt-4o
max_iterations: 5
```

### テキスト埋め込み

`ai.embed`

AIモデルを使ってテキストからベクトル埋め込みを生成

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 埋め込み対象のテキスト |
| `provider` | select (`openai`, `local`) | No | `openai` | 埋め込み用AIプロバイダー |
| `model` | string | No | `text-embedding-3-small` | 使用する埋め込みモデル |
| `api_key` | string | No | - | APIキー（環境変数にフォールバック） |
| `dimensions` | number | No | - | 埋め込み次元（対応モデルのみ） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `embeddings` | array | ベクトル埋め込み配列 |
| `model` | string | 埋め込みに使用されたモデル |
| `dimensions` | number | 埋め込みベクトルの次元数 |
| `token_count` | number | 処理されたトークン数 |

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

### AI抽出

`ai.extract`

AIを使ってテキストから構造化データを抽出

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | データを抽出するテキスト |
| `schema` | object | Yes | - | 抽出するフィールドを定義するJSONスキーマ |
| `instructions` | string | No | - | 追加の抽出指示 |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | 使用するAIプロバイダー |
| `model` | string | No | `gpt-4o-mini` | 抽出に使用するモデル |
| `api_key` | string | No | - | APIキー（環境変数にフォールバック） |
| `temperature` | number | No | `0` | サンプリング温度（0-2） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | 抽出された構造化データ |
| `model` | string | 抽出に使用されたモデル |
| `raw_response` | string | 生のモデル応答 |

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

### ローカルOllamaチャット

`ai.local_ollama.chat`

Ollama経由でローカルLLMとチャットする（完全オフライン）

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | ローカルLLMに送信するメッセージ |
| `model` | select (`llama2`, `llama2:13b`, `llama2:70b`, `mistral`, `mixtral`, `codellama`, `codellama:13b`, `phi`, `neural-chat`, `starling-lm`) | No | `llama2` | 使用するモデル名 |
| `temperature` | number | No | `0.7` | サンプリング温度（0-2） |
| `system_message` | string | No | - | システムロールメッセージ（任意） |
| `ollama_url` | string | No | `http://localhost:11434` | OllamaサーバーURL |
| `max_tokens` | number | No | - | 応答の最大トークン数（任意、モデルに依存） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | LLMからの応答 |
| `model` | string | 使用されたモデル |
| `context` | array | フォローアップリクエスト用の会話コンテキスト |
| `total_duration` | number | 合計処理時間 |
| `load_duration` | number | モデル読み込み時間 |
| `prompt_eval_count` | number | プロンプト評価トークン数 |
| `eval_count` | number | 評価トークン数 |

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

### AIメモリ

`ai.memory`

AIエージェント用の会話メモリ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `memory_type` | select (`buffer`, `window`, `summary`) | Yes | `buffer` | メモリストレージのタイプ |
| `window_size` | number | No | `10` | 保持する直近のメッセージ数（ウィンドウメモリ用） |
| `session_id` | string | No | - | この会話セッションの一意識別子 |
| `initial_messages` | array | No | `[]` | プリロードされた会話履歴 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `memory_type` | string | メモリタイプ |
| `session_id` | string | セッション識別子 |
| `messages` | array | プリロードされた会話履歴 |
| `config` | object | 設定情報 |

**Example:** Simple Buffer Memory

```yaml
memory_type: buffer
```

**Example:** Window Memory (last 5 messages)

```yaml
memory_type: window
window_size: 5
```

### エンティティメモリ

`ai.memory.entity`

会話からエンティティ（人、場所、概念）を抽出して追跡する

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
| `memory_type` | string | メモリタイプ（entity） |
| `session_id` | string | セッション識別子 |
| `entities` | object | タイプ別の追跡されたエンティティ |
| `relationships` | array | エンティティ間の関係 |
| `config` | object | 設定情報 |

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

### Redisメモリ

`ai.memory.redis`

Redisストレージを使用した永続的な会話メモリ

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
| `memory_type` | string | メモリタイプ（redis） |
| `session_id` | string | セッション識別子 |
| `messages` | array | 読み込まれたメッセージ履歴 |
| `connected` | boolean | Redis接続状態 |
| `config` | object | 設定情報 |

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

### ベクターメモリ

`ai.memory.vector`

関連コンテキスト取得のためのベクター埋め込みを使用したセマンティックメモリ

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
| `memory_type` | string | メモリタイプ（vector） |
| `session_id` | string | セッション識別子 |
| `embedding_model` | string | 使用された埋め込みモデル |
| `config` | object | 設定情報 |

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

### AIモデル

`ai.model`

AIエージェント用のLLMモデル設定

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.7` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |
| `max_tokens` | number | No | `4096` | 応答の最大トークン数 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `provider` | string | LLMプロバイダー名 |
| `model` | string | モデル名 |
| `config` | object | 設定情報 |

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

### ビジョン分析

`ai.vision.analyze`

AIビジョンモデルを使って画像を分析

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | No | - | 画像ファイルのローカルパス |
| `image_url` | string | No | - | 分析する画像のURL |
| `prompt` | string | No | `Describe this image in detail` | 画像について分析する内容や質問 |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | ビジョン分析のAIプロバイダー |
| `model` | string | No | `gpt-4o` | 使用するビジョンモデル |
| `api_key` | string | No | - | APIキー（環境変数にフォールバック） |
| `max_tokens` | number | No | `1000` | 応答の最大トークン数 |
| `detail` | select (`low`, `high`, `auto`) | No | `auto` | 画像の詳細レベル（低/高/自動） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `analysis` | string | 画像のAI分析 |
| `model` | string | 分析に使用されたモデル |
| `provider` | string | 分析に使用されたプロバイダー |
| `tokens_used` | number | 使用されたトークン数 |

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

### Claudeチャット

`api.anthropic.chat`

Anthropic Claude AIにチャットメッセージを送信して応答を取得する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Anthropic APIキー（デフォルト: env.ANTHROPIC_API_KEY） |
| `model` | string | No | `claude-3-5-sonnet-20241022` | 使用するClaudeモデル |
| `messages` | array | Yes | - | roleとcontentを持つメッセージオブジェクトの配列 |
| `max_tokens` | number | No | `1024` | 応答の最大トークン数 |
| `temperature` | number | No | `1.0` | サンプリング温度（0-1）。高い値ほど出力がランダムになる |
| `system` | string | No | - | Claudeの動作を導くシステムプロンプト |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Claudeの応答テキスト |
| `model` | string | 応答に使用されたモデル |
| `stop_reason` | string | モデルが生成を停止した理由（end_turn、max_tokensなど） |
| `usage` | object | トークン使用統計 |

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

### Google Geminiチャット

`api.google_gemini.chat`

Google Gemini AIにチャットメッセージを送信して応答を取得する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Google AI APIキー（デフォルト: env.GOOGLE_AI_API_KEY） |
| `model` | string | No | `gemini-1.5-pro` | 使用するGeminiモデル |
| `prompt` | string | Yes | - | Geminiに送信するテキストプロンプト |
| `temperature` | number | No | `1.0` | ランダム性の制御（0-2）。高い値ほど出力がランダムになる |
| `max_output_tokens` | number | No | `2048` | 応答の最大トークン数 |

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

### OpenAIチャット

`api.openai.chat`

OpenAI GPTモデルにチャットメッセージを送信する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | GPTに送信するメッセージ |
| `model` | select (`gpt-4-turbo-preview`, `gpt-4`, `gpt-3.5-turbo`) | No | `gpt-4-turbo-preview` | 使用するGPTモデル |
| `temperature` | number | No | `0.7` | サンプリング温度（0-2） |
| `max_tokens` | number | No | `1000` | 応答の最大トークン数 |
| `system_message` | string | No | - | システムロールメッセージ（任意） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | GPTからの応答 |
| `model` | string | 使用されたモデル |
| `usage` | object | トークン使用統計 |

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

### DALL-E画像生成

`api.openai.image`

DALL-Eを使用して画像を生成する

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | 生成する画像の説明 |
| `size` | select (`256x256`, `512x512`, `1024x1024`, `1792x1024`, `1024x1792`) | No | `1024x1024` | 画像サイズ |
| `model` | select (`dall-e-3`, `dall-e-2`) | No | `dall-e-3` | DALL-Eモデルバージョン |
| `quality` | select (`standard`, `hd`) | No | `standard` | 画像品質（DALL-E 3のみ） |
| `n` | number | No | `1` | 生成する画像の数（1-10） |

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

### AIエージェント

`llm.agent`

マルチポート接続（モデル、メモリ、ツール）を持つ自律型AIエージェント

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt_source` | select (`manual`, `auto`) | No | `manual` | タスクプロンプトの取得元 |
| `task` | string | No | - | エージェントが完了するタスク。上流データを参照するには{<!-- -->{input}<!-- -->}を使用。 |
| `prompt_path` | string | No | `{<!-- -->{input}<!-- -->}` | 入力からプロンプトを抽出するパス（例: {<!-- -->{input.message}<!-- -->}） |
| `join_strategy` | select (`first`, `newline`, `separator`, `json`) | No | `first` | 配列入力の処理方法 |
| `join_separator` | string | No | `

---

` | 配列項目を結合するセパレータ |
| `max_input_size` | number | No | `10000` | プロンプトの最大文字数（オーバーフロー防止） |
| `system_prompt` | string | No | `You are a helpful AI agent. Use the available tools to complete the task. Think step by step.` | エージェントの動作に関する指示 |
| `tools` | array | No | `[]` | モジュールIDのリスト（ツールノード接続の代替） |
| `context` | object | No | `{}` | モジュールIDのリスト（ツールノード接続の代替） |
| `max_iterations` | number | No | `10` | エージェント用の追加コンテキストデータ |
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.3` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | エージェントが正常に完了したかどうか |
| `result` | string | エージェントが正常に完了したかどうか |
| `steps` | array | エージェントが正常に完了したかどうか |
| `tool_calls` | number | エージェントからの最終結果 |
| `tokens_used` | number | エージェントが実行したステップのリスト |

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
