# AI & LLM

AI model integration, text generation, embeddings, and autonomous agents.

**18 modules**

| Module | Description |
|--------|-------------|
| [Otonom Ajan](#otonom-ajan) | Bellek ve hedef odaklı davranışa sahip kendi kendine yönetilen AI ajanı |
| [Zincir Ajan](#zincir-ajan) | Birden fazla adımla sıralı AI işleme zinciri |
| [Araç Kullanım Ajanı](#araç-kullanım-ajanı) | Araçları/işlevleri çağırabilen AI Ajanı |
| [Metin Gömme](#metin-gömme) | AI modellerini kullanarak metinden vektör gömme oluştur |
| [AI Çıkarım](#ai-çıkarım) | AI kullanarak metinden yapılandırılmış veri çıkar |
| [Yerel Ollama Sohbet](#yerel-ollama-sohbet) | Ollama ile yerel LLM sohbeti (tamamen çevrimdışı) |
| [AI Belleği](#ai-belleği) | AI Ajanı için konuşma belleği |
| [Varlık Belleği](#varlık-belleği) | Konuşmalardan varlıkları (kişiler, yerler, kavramlar) çıkar ve takip et |
| [Redis Belleği](#redis-belleği) | Redis depolama kullanarak kalıcı konuşma belleği |
| [Vektör Belleği](#vektör-belleği) | İlgili bağlam alımı için vektör gömmeleri kullanan anlamsal bellek |
| [AI Modeli](#ai-modeli) | AI Ajanı için LLM model yapılandırması |
| [AI Tool](#ai-tool) | Expose a module as a tool for AI Agent |
| [Görsel Analiz](#görsel-analiz) | AI görsel modelleri kullanarak görüntüleri analiz et |
| [Claude Sohbet](#claude-sohbet) | Anthropic Claude AI'a sohbet mesajı gönder ve yanıt al |
| [Google Gemini Sohbet](#google-gemini-sohbet) | Google Gemini AI'a sohbet mesajı gönder ve yanıt al |
| [OpenAI Sohbet](#openai-sohbet) | OpenAI GPT modellerine sohbet mesajı gönder |
| [DALL-E Görüntü Oluşturma](#dall-e-görüntü-oluşturma) | DALL-E kullanarak görüntü oluştur |
| [AI Ajanı](#ai-ajanı) | Çoklu bağlantı noktalarıyla (model, bellek, araçlar) otonom AI ajanı |

## Modules

### Otonom Ajan

`agent.autonomous`

Bellek ve hedef odaklı davranışa sahip kendi kendine yönetilen AI ajanı

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `goal` | string | Yes | - | Ajanın ulaşması gereken hedef |
| `context` | string | No | - | Ajanın ulaşması gereken hedef |
| `max_iterations` | number | No | `5` | Ek bağlam veya kısıtlamalar |
| `llm_provider` | select (`openai`, `anthropic`, `gemini`, `ollama`) | No | `openai` | Maksimum akıl yürütme adımları |
| `model` | string | No | `gpt-4o` | Model adı (örn: gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | Model adı (örn: gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | Ollama sunucu URL'si (sadece ollama sağlayıcı için) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Yaratıcılık seviyesi (0-2) |
| `thoughts` | array | İşlem sonucu |
| `iterations` | number | İşlem sonucu |
| `goal_achieved` | boolean | Ajan akıl yürütme adımları |

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

### Zincir Ajan

`agent.chain`

Birden fazla adımla sıralı AI işleme zinciri

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | string | Yes | - | Zincir için başlangıç girdisi |
| `chain_steps` | array | Yes | - | Zincir için başlangıç girdisi |
| `llm_provider` | select (`openai`, `anthropic`, `gemini`, `ollama`) | No | `openai` | İşleme adımları dizisi (her biri bir istem şablonudur) |
| `model` | string | No | `gpt-4o` | Model adı (örn: gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | Model adı (örn: gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | Ollama sunucu URL'si (sadece ollama sağlayıcı için) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Yaratıcılık seviyesi (0-2) |
| `intermediate_results` | array | İşlem sonucu |
| `steps_completed` | number | İşlem sonucu |

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

### Araç Kullanım Ajanı

`agent.tool_use`

Araçları/işlevleri çağırabilen AI Ajanı

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Ajan için hedef veya görev |
| `tools` | array | Yes | - | Araç tanımlarının listesi [{isim, açıklama, parametreler}] |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Ajan için LLM sağlayıcısı |
| `model` | string | No | `gpt-4o` | Kullanılacak model |
| `api_key` | string | No | - | API anahtarı (çevre değişkenine geri döner) |
| `max_iterations` | number | No | `10` | Maksimum araç çağrı turu sayısı |
| `system_prompt` | string | No | - | Ajanı yönlendirmek için isteğe bağlı sistem istemi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Ajanın nihai yanıtı |
| `tool_calls` | array | Yürütme sırasında yapılan tüm araç çağrıları |
| `iterations` | number | Tamamlanan yineleme sayısı |
| `model` | string | Kullanılan model |

**Example:** File Processing Agent

```yaml
prompt: Read the config file and update the version number
tools: [{"name": "read_file", "description": "Read contents of a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}}, "required": ["path"]}}, {"name": "write_file", "description": "Write contents to a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}, "content": {"type": "string", "description": "File content"}}, "required": ["path", "content"]}}]
provider: openai
model: gpt-4o
max_iterations: 5
```

### Metin Gömme

`ai.embed`

AI modellerini kullanarak metinden vektör gömme oluştur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Gömme yapılacak metin |
| `provider` | select (`openai`, `local`) | No | `openai` | Gömme için AI sağlayıcısı |
| `model` | string | No | `text-embedding-3-small` | Kullanılacak gömme modeli |
| `api_key` | string | No | - | API anahtarı (çevre değişkenine geri döner) |
| `dimensions` | number | No | - | Gömme boyutları (destekleyen modeller için) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `embeddings` | array | Vektör gömme dizisi |
| `model` | string | Gömme için kullanılan model |
| `dimensions` | number | Gömme vektöründeki boyut sayısı |
| `token_count` | number | İşlenen token sayısı |

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

### AI Çıkarım

`ai.extract`

AI kullanarak metinden yapılandırılmış veri çıkar

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Veri çıkarılacak metin |
| `schema` | object | Yes | - | Çıkarılacak alanları tanımlayan JSON şeması |
| `instructions` | string | No | - | Ek çıkarım talimatları |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Kullanılacak AI sağlayıcısı |
| `model` | string | No | `gpt-4o-mini` | Çıkarım için kullanılacak model |
| `api_key` | string | No | - | API anahtarı (çevre değişkenine geri döner) |
| `temperature` | number | No | `0` | Örnekleme sıcaklığı (0-2) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | Çıkarılan yapılandırılmış veri |
| `model` | string | Çıkarım için kullanılan model |
| `raw_response` | string | Ham model yanıtı |

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

### Yerel Ollama Sohbet

`ai.local_ollama.chat`

Ollama ile yerel LLM sohbeti (tamamen çevrimdışı)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Yerel LLM'e gönderilecek mesaj |
| `model` | select (`llama2`, `llama2:13b`, `llama2:70b`, `mistral`, `mixtral`, `codellama`, `codellama:13b`, `phi`, `neural-chat`, `starling-lm`) | No | `llama2` | Yerel LLM'e gönderilecek mesaj |
| `temperature` | number | No | `0.7` | Örnekleme sıcaklığı (0-2) |
| `system_message` | string | No | - | Sistem rolü mesajı (isteğe bağlı) |
| `ollama_url` | string | No | `http://localhost:11434` | Sistem rolü mesajı (isteğe bağlı) |
| `max_tokens` | number | No | - | Ollama sunucu URL'si |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | Yanıtta maksimum token (isteğe bağlı, modele bağlı) |
| `model` | string | İşlemden gelen yanıt |
| `context` | array | İşlemden gelen yanıt |
| `total_duration` | number | Model adı veya tanımlayıcı |
| `load_duration` | number | Takip istekleri için konuşma bağlamı |
| `prompt_eval_count` | number | Toplam işleme süresi |
| `eval_count` | number | Model yükleme süresi |

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

### AI Belleği

`ai.memory`

AI Ajanı için konuşma belleği

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `memory_type` | select (`buffer`, `window`, `summary`) | Yes | `buffer` | Bellek depolama türü |
| `window_size` | number | No | `10` | Saklanacak son mesaj sayısı (pencere belleği için) |
| `session_id` | string | No | - | Bu konuşma oturumu için benzersiz tanımlayıcı |
| `initial_messages` | array | No | `[]` | Önceden yüklenmiş konuşma geçmişi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `memory_type` | string | Önceden yüklenmiş konuşma geçmişi |
| `session_id` | string | Önceden yüklenmiş konuşma geçmişi |
| `messages` | array | Bellek türü |
| `config` | object | Oturum tanımlayıcı |

**Example:** Simple Buffer Memory

```yaml
memory_type: buffer
```

**Example:** Window Memory (last 5 messages)

```yaml
memory_type: window
window_size: 5
```

### Varlık Belleği

`ai.memory.entity`

Konuşmalardan varlıkları (kişiler, yerler, kavramlar) çıkar ve takip et

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
| `memory_type` | string | Hatırlanacak maksimum varlık sayısı |
| `session_id` | string | Hatırlanacak maksimum varlık sayısı |
| `entities` | object | Bellek türü (varlık) |
| `relationships` | array | Oturum tanımlayıcı |
| `config` | object | Türe göre takip edilen varlıklar |

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

### Redis Belleği

`ai.memory.redis`

Redis depolama kullanarak kalıcı konuşma belleği

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
| `memory_type` | string | Başlatmada mevcut mesajları Redis'ten yükle |
| `session_id` | string | Başlatmada mevcut mesajları Redis'ten yükle |
| `messages` | array | Bellek türü (redis) |
| `connected` | boolean | Oturum tanımlayıcı |
| `config` | object | Yüklenmiş mesaj geçmişi |

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

### Vektör Belleği

`ai.memory.vector`

İlgili bağlam alımı için vektör gömmeleri kullanan anlamsal bellek

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
| `memory_type` | string | Belleklere zaman damgası ve diğer meta verileri ekle |
| `session_id` | string | Belleklere zaman damgası ve diğer meta verileri ekle |
| `embedding_model` | string | Bellek türü (vektör) |
| `config` | object | Oturum tanımlayıcı |

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

### AI Modeli

`ai.model`

AI Ajanı için LLM model yapılandırması

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `provider` | select (`openai`, `anthropic`, `google`, `groq`, `deepseek`, `ollama`, `custom`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.7` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (leave empty to use environment variable) |
| `base_url` | string | No | - | Custom API endpoint URL |
| `max_tokens` | number | No | `4096` | Yanıtta maksimum token |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `provider` | string | Yanıtta maksimum token |
| `model` | string | LLM sağlayıcı adı |
| `config` | object | LLM sağlayıcı adı |

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

### Görsel Analiz

`ai.vision.analyze`

AI görsel modelleri kullanarak görüntüleri analiz et

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | No | - | Görüntü dosyasının yerel yolu |
| `image_url` | string | No | - | Analiz edilecek görüntünün URL'si |
| `prompt` | string | No | `Describe this image in detail` | Görüntü hakkında analiz edilecek veya sorulacak şey |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Görsel analiz için AI sağlayıcısı |
| `model` | string | No | `gpt-4o` | Kullanılacak görsel model |
| `api_key` | string | No | - | API anahtarı (çevre değişkenine geri döner) |
| `max_tokens` | number | No | `1000` | Yanıttaki maksimum token sayısı |
| `detail` | select (`low`, `high`, `auto`) | No | `auto` | Görüntü detay seviyesi (düşük/yüksek/otomatik) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `analysis` | string | Görüntünün AI analizi |
| `model` | string | Analiz için kullanılan model |
| `provider` | string | Analiz için kullanılan sağlayıcı |
| `tokens_used` | number | Kullanılan token sayısı |

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

### Claude Sohbet

`api.anthropic.chat`

Anthropic Claude AI'a sohbet mesajı gönder ve yanıt al

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Anthropic API anahtarı (varsayılan: env.ANTHROPIC_API_KEY) |
| `model` | string | No | `claude-sonnet-4-6` | Kullanılacak Claude modeli |
| `messages` | array | Yes | - | Rol ve içerik içeren mesaj nesneleri dizisi |
| `max_tokens` | number | No | `1024` | İşlem tarafından döndürülen içerik |
| `temperature` | number | No | `1.0` | Örnekleme sıcaklığı (0-1). Yüksek değerler çıktıyı daha rastgele yapar |
| `system` | string | No | - | Claude davranışını yönlendiren sistem istemi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Claude davranışını yönlendiren sistem istemi |
| `model` | string | Claude yanıt metni |
| `stop_reason` | string | Yanıt için kullanılan model |
| `usage` | object | Modelin üretimi neden durdurduğu (end_turn, max_tokens, vb.) |

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

### Google Gemini Sohbet

`api.google_gemini.chat`

Google Gemini AI'a sohbet mesajı gönder ve yanıt al

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Google AI API anahtarı (varsayılan: env.GOOGLE_AI_API_KEY) |
| `model` | string | No | `gemini-2.5-pro` | Kullanılacak Gemini modeli |
| `prompt` | string | Yes | - | Gemini'ye gönderilecek metin istemi |
| `temperature` | number | No | `1.0` | Rastgeleliği kontrol eder (0-2). Yüksek değerler çıktıyı daha rastgele yapar |
| `max_output_tokens` | number | No | `2048` | Yanıttaki maksimum token sayısı |

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

### OpenAI Sohbet

`api.openai.chat`

OpenAI GPT modellerine sohbet mesajı gönder

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | GPT'ye gönderilecek mesaj |
| `model` | select (`gpt-4o`, `gpt-4o-mini`, `gpt-4.1`, `gpt-4.1-mini`, `o3`, `o3-mini`, `o4-mini`, `gpt-4-turbo-preview`) | No | `gpt-4o` | GPT'ye gönderilecek mesaj |
| `temperature` | number | No | `0.7` | Örnekleme sıcaklığı (0-2) |
| `max_tokens` | number | No | `1000` | Örnekleme sıcaklığı (0-2) |
| `system_message` | string | No | - | Yanıtta maksimum token |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | Sistem rolü mesajı (isteğe bağlı) |
| `model` | string | İşlemden gelen yanıt |
| `usage` | object | İşlemden gelen yanıt |

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

### DALL-E Görüntü Oluşturma

`api.openai.image`

DALL-E kullanarak görüntü oluştur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Oluşturulacak görüntünün açıklaması |
| `size` | select (`256x256`, `512x512`, `1024x1024`, `1792x1024`, `1024x1792`) | No | `1024x1024` | Oluşturulacak görüntünün açıklaması |
| `model` | select (`dall-e-3`, `dall-e-2`) | No | `dall-e-3` | DALL-E model versiyonu |
| `quality` | select (`standard`, `hd`) | No | `standard` | Görüntü kalitesi (sadece DALL-E 3) |
| `n` | number | No | `1` | Oluşturulacak görüntü sayısı (1-10) |

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

### AI Ajanı

`llm.agent`

Çoklu bağlantı noktalarıyla (model, bellek, araçlar) otonom AI ajanı

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt_source` | select (`manual`, `auto`) | No | `manual` | Görev isteminin nereden alınacağı |
| `task` | string | No | - | Ajanın tamamlaması gereken görev. Üst akış verisine referans için {<!-- -->{input}<!-- -->} kullanın. |
| `prompt_path` | string | No | `{<!-- -->{input}<!-- -->}` | Girdiden istemi çıkarmak için yol (örn: {<!-- -->{input.message}<!-- -->}) |
| `join_strategy` | select (`first`, `newline`, `separator`, `json`) | No | `first` | Dizi girdilerinin nasıl işleneceği |
| `join_separator` | string | No | `

---

` | Dizi öğelerini birleştirmek için ayraç |
| `max_input_size` | number | No | `10000` | İstem için maksimum karakter (taşmayı önler) |
| `agent_type` | select (`tools`, `react`) | No | `tools` | Reasoning strategy for the agent |
| `system_prompt` | string | No | `You are a helpful AI agent. Use the available tools to complete the task. Think step by step.` | Ajan davranışı için talimatlar |
| `response_format` | select (`text`, `json`, `json_schema`) | No | `text` | Expected format of the final answer |
| `output_schema` | object | No | `{}` | JSON Schema the final answer must match (for json_schema format) |
| `context` | object | No | `{}` | Modül kimliklerinin listesi (araç düğümlerini bağlamaya alternatif) |
| `max_iterations` | number | No | `10` | Ajan için ek bağlam verisi |
| `provider` | select (`openai`, `anthropic`, `google`, `groq`, `deepseek`, `ollama`, `custom`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `api_key` | string | No | - | API key (leave empty to use environment variable) |
| `temperature` | number | No | `0.7` | Creativity level (0=deterministic, 1=creative) |
| `base_url` | string | No | - | Custom API endpoint URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Ajan başarıyla tamamlandı mı |
| `result` | string | Ajan başarıyla tamamlandı mı |
| `steps` | array | Ajan başarıyla tamamlandı mı |
| `tool_calls` | number | Ajandan gelen son sonuç |
| `tokens_used` | number | Ajanın attığı adımların listesi |

**Example:** Web Research Agent

```yaml
task: Search for the latest news about AI and summarize the top 3 stories
provider: openai
model: gpt-4o
```

**Example:** Data Processing Agent

```yaml
task: Read the CSV file, filter rows where status is "active", and count them
provider: openai
model: gpt-4o
```
