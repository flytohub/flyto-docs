# AI & LLM

AI model integration, text generation, embeddings, and autonomous agents.

**18 modules**

| Module | Description |
|--------|-------------|
| [Agen Otonom](#agen-otonom) | Agen AI mandiri dengan memori dan perilaku berorientasi tujuan |
| [Agen Rantai](#agen-rantai) | Rantai pemrosesan AI sekuensial dengan beberapa langkah |
| [Agen Penggunaan Alat](#agen-penggunaan-alat) | Agen AI yang dapat memanggil alat/fungsi |
| [Embedding Teks](#embedding-teks) | Menghasilkan vektor embedding dari teks menggunakan model AI |
| [Ekstrak AI](#ekstrak-ai) | Ekstrak data terstruktur dari teks menggunakan AI |
| [Chat Ollama Lokal](#chat-ollama-lokal) | Chat dengan LLM lokal via Ollama (sepenuhnya offline) |
| [Memori AI](#memori-ai) | Memori percakapan untuk Agen AI |
| [Memori Entitas](#memori-entitas) | Ekstrak dan lacak entitas (orang, tempat, konsep) dari percakapan |
| [Memori Redis](#memori-redis) | Memori percakapan persisten menggunakan penyimpanan Redis |
| [Memori Vektor](#memori-vektor) | Memori semantik menggunakan embedding vektor untuk pengambilan konteks yang relevan |
| [Model AI](#model-ai) | Konfigurasi model LLM untuk Agen AI |
| [AI Tool](#ai-tool) | Expose a module as a tool for AI Agent |
| [Analisis Visi](#analisis-visi) | Analisis gambar menggunakan model visi AI |
| [Chat Claude](#chat-claude) | Kirim pesan chat ke Anthropic Claude AI dan dapatkan respons |
| [Chat Google Gemini](#chat-google-gemini) | Kirim pesan chat ke Google Gemini AI dan dapatkan respons |
| [Chat OpenAI](#chat-openai) | Kirim pesan chat ke model OpenAI GPT |
| [Pembuatan Gambar DALL-E](#pembuatan-gambar-dall-e) | Hasilkan gambar menggunakan DALL-E |
| [Agen AI](#agen-ai) | Agen AI otonom dengan koneksi multi-port (model, memori, tools) |

## Modules

### Agen Otonom

`agent.autonomous`

Agen AI mandiri dengan memori dan perilaku berorientasi tujuan

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `goal` | string | Yes | - | Tujuan yang ingin dicapai agen |
| `context` | string | No | - | Tujuan yang ingin dicapai agen |
| `max_iterations` | number | No | `5` | Konteks atau batasan tambahan |
| `llm_provider` | select (`openai`, `ollama`) | No | `openai` | Langkah penalaran maksimum |
| `model` | string | No | `gpt-4-turbo-preview` | Nama model (mis., gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | Nama model (mis., gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | URL server Ollama (hanya untuk provider ollama) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Tingkat kreativitas (0-2) |
| `thoughts` | array | Hasil operasi |
| `iterations` | number | Hasil operasi |
| `goal_achieved` | boolean | Langkah penalaran agen |

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

### Agen Rantai

`agent.chain`

Rantai pemrosesan AI sekuensial dengan beberapa langkah

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | string | Yes | - | Input awal untuk rantai |
| `chain_steps` | array | Yes | - | Input awal untuk rantai |
| `llm_provider` | select (`openai`, `ollama`) | No | `openai` | Array langkah pemrosesan (setiap adalah template prompt) |
| `model` | string | No | `gpt-4-turbo-preview` | Nama model (mis., gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | Nama model (mis., gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | URL server Ollama (hanya untuk provider ollama) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Tingkat kreativitas (0-2) |
| `intermediate_results` | array | Hasil operasi |
| `steps_completed` | number | Hasil operasi |

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

### Agen Penggunaan Alat

`agent.tool_use`

Agen AI yang dapat memanggil alat/fungsi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Tujuan atau tugas untuk agen |
| `tools` | array | Yes | - | Daftar definisi alat [{name, description, parameters}] |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Penyedia LLM untuk agen |
| `model` | string | No | `gpt-4o` | Model yang akan digunakan |
| `api_key` | string | No | - | Kunci API (kembali ke variabel lingkungan) |
| `max_iterations` | number | No | `10` | Jumlah maksimum putaran panggilan alat |
| `system_prompt` | string | No | - | Prompt sistem opsional untuk membimbing agen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Respon akhir agen |
| `tool_calls` | array | Semua panggilan alat yang dilakukan selama eksekusi |
| `iterations` | number | Jumlah iterasi yang selesai |
| `model` | string | Model yang digunakan |

**Example:** File Processing Agent

```yaml
prompt: Read the config file and update the version number
tools: [{"name": "read_file", "description": "Read contents of a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}}, "required": ["path"]}}, {"name": "write_file", "description": "Write contents to a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}, "content": {"type": "string", "description": "File content"}}, "required": ["path", "content"]}}]
provider: openai
model: gpt-4o
max_iterations: 5
```

### Embedding Teks

`ai.embed`

Menghasilkan vektor embedding dari teks menggunakan model AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Teks untuk di-embed |
| `provider` | select (`openai`, `local`) | No | `openai` | Penyedia AI untuk embedding |
| `model` | string | No | `text-embedding-3-small` | Model embedding yang akan digunakan |
| `api_key` | string | No | - | Kunci API (kembali ke variabel lingkungan) |
| `dimensions` | number | No | - | Dimensi embedding (untuk model yang mendukungnya) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `embeddings` | array | Array vektor embedding |
| `model` | string | Model yang digunakan untuk embedding |
| `dimensions` | number | Jumlah dimensi dalam vektor embedding |
| `token_count` | number | Jumlah token yang diproses |

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

### Ekstrak AI

`ai.extract`

Ekstrak data terstruktur dari teks menggunakan AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Teks untuk diekstrak datanya |
| `schema` | object | Yes | - | Skema JSON yang mendefinisikan bidang yang akan diekstrak |
| `instructions` | string | No | - | Instruksi tambahan untuk ekstraksi |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Penyedia AI yang akan digunakan |
| `model` | string | No | `gpt-4o-mini` | Model yang akan digunakan untuk ekstraksi |
| `api_key` | string | No | - | Kunci API (kembali ke variabel lingkungan) |
| `temperature` | number | No | `0` | Suhu sampling (0-2) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | Data terstruktur yang diekstrak |
| `model` | string | Model yang digunakan untuk ekstraksi |
| `raw_response` | string | Respon model mentah |

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

### Chat Ollama Lokal

`ai.local_ollama.chat`

Chat dengan LLM lokal via Ollama (sepenuhnya offline)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Pesan untuk dikirim ke LLM lokal |
| `model` | select (`llama2`, `llama2:13b`, `llama2:70b`, `mistral`, `mixtral`, `codellama`, `codellama:13b`, `phi`, `neural-chat`, `starling-lm`) | No | `llama2` | Pesan untuk dikirim ke LLM lokal |
| `temperature` | number | No | `0.7` | Temperatur sampling (0-2) |
| `system_message` | string | No | - | Pesan peran sistem (opsional) |
| `ollama_url` | string | No | `http://localhost:11434` | Pesan peran sistem (opsional) |
| `max_tokens` | number | No | - | URL server Ollama |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | Token maksimum dalam respons (opsional, tergantung model) |
| `model` | string | Respons dari operasi |
| `context` | array | Respons dari operasi |
| `total_duration` | number | Nama atau pengenal model |
| `load_duration` | number | Konteks percakapan untuk permintaan lanjutan |
| `prompt_eval_count` | number | Total durasi pemrosesan |
| `eval_count` | number | Durasi pemuatan model |

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

### Memori AI

`ai.memory`

Memori percakapan untuk Agen AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `memory_type` | select (`buffer`, `window`, `summary`) | Yes | `buffer` | Tipe penyimpanan memori |
| `window_size` | number | No | `10` | Jumlah pesan terbaru untuk disimpan (untuk memori jendela) |
| `session_id` | string | No | - | Pengenal unik untuk sesi percakapan ini |
| `initial_messages` | array | No | `[]` | Riwayat percakapan yang dimuat sebelumnya |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `memory_type` | string | Riwayat percakapan yang dimuat sebelumnya |
| `session_id` | string | Riwayat percakapan yang dimuat sebelumnya |
| `messages` | array | Tipe memori |
| `config` | object | Pengenal sesi |

**Example:** Simple Buffer Memory

```yaml
memory_type: buffer
```

**Example:** Window Memory (last 5 messages)

```yaml
memory_type: window
window_size: 5
```

### Memori Entitas

`ai.memory.entity`

Ekstrak dan lacak entitas (orang, tempat, konsep) dari percakapan

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
| `memory_type` | string | Jumlah maksimum entitas untuk diingat |
| `session_id` | string | Jumlah maksimum entitas untuk diingat |
| `entities` | object | Tipe memori (entitas) |
| `relationships` | array | Pengenal sesi |
| `config` | object | Entitas yang dilacak berdasarkan tipe |

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

### Memori Redis

`ai.memory.redis`

Memori percakapan persisten menggunakan penyimpanan Redis

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
| `memory_type` | string | Muat pesan yang ada dari Redis saat inisialisasi |
| `session_id` | string | Muat pesan yang ada dari Redis saat inisialisasi |
| `messages` | array | Tipe memori (redis) |
| `connected` | boolean | Pengenal sesi |
| `config` | object | Riwayat pesan yang dimuat |

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

### Memori Vektor

`ai.memory.vector`

Memori semantik menggunakan embedding vektor untuk pengambilan konteks yang relevan

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
| `memory_type` | string | Sertakan timestamp dan metadata lainnya dengan memori |
| `session_id` | string | Sertakan timestamp dan metadata lainnya dengan memori |
| `embedding_model` | string | Tipe memori (vektor) |
| `config` | object | Pengenal sesi |

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

Konfigurasi model LLM untuk Agen AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.7` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |
| `max_tokens` | number | No | `4096` | Token maksimum dalam respons |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `provider` | string | Token maksimum dalam respons |
| `model` | string | Nama provider LLM |
| `config` | object | Nama provider LLM |

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

### Analisis Visi

`ai.vision.analyze`

Analisis gambar menggunakan model visi AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | No | - | Jalur lokal ke file gambar |
| `image_url` | string | No | - | URL gambar yang akan dianalisis |
| `prompt` | string | No | `Describe this image in detail` | Apa yang ingin dianalisis atau ditanyakan tentang gambar |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Penyedia AI untuk analisis vision |
| `model` | string | No | `gpt-4o` | Model vision yang digunakan |
| `api_key` | string | No | - | Kunci API (kembali ke variabel lingkungan) |
| `max_tokens` | number | No | `1000` | Maksimum token dalam respon |
| `detail` | select (`low`, `high`, `auto`) | No | `auto` | Tingkat detail gambar (rendah/tinggi/otomatis) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `analysis` | string | Analisis AI dari gambar |
| `model` | string | Model yang digunakan untuk analisis |
| `provider` | string | Penyedia yang digunakan untuk analisis |
| `tokens_used` | number | Jumlah token yang digunakan |

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

### Chat Claude

`api.anthropic.chat`

Kirim pesan chat ke Anthropic Claude AI dan dapatkan respons

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | API key Anthropic (default ke env.ANTHROPIC_API_KEY) |
| `model` | string | No | `claude-3-5-sonnet-20241022` | Model Claude yang digunakan |
| `messages` | array | Yes | - | Array objek pesan dengan role dan content |
| `max_tokens` | number | No | `1024` | Konten yang dikembalikan oleh operasi |
| `temperature` | number | No | `1.0` | Temperatur sampling (0-1). Nilai lebih tinggi membuat output lebih acak |
| `system` | string | No | - | Prompt sistem untuk memandu perilaku Claude |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Prompt sistem untuk memandu perilaku Claude |
| `model` | string | Teks respons Claude |
| `stop_reason` | string | Model yang digunakan untuk respons |
| `usage` | object | Mengapa model berhenti menghasilkan (end_turn, max_tokens, dll) |

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

### Chat Google Gemini

`api.google_gemini.chat`

Kirim pesan chat ke Google Gemini AI dan dapatkan respons

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | API key Google AI (default ke env.GOOGLE_AI_API_KEY) |
| `model` | string | No | `gemini-1.5-pro` | Model Gemini yang digunakan |
| `prompt` | string | Yes | - | Prompt teks untuk dikirim ke Gemini |
| `temperature` | number | No | `1.0` | Mengontrol keacakan (0-2). Nilai lebih tinggi membuat output lebih acak |
| `max_output_tokens` | number | No | `2048` | Jumlah maksimum token dalam respons |

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

### Chat OpenAI

`api.openai.chat`

Kirim pesan chat ke model OpenAI GPT

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Pesan untuk dikirim ke GPT |
| `model` | select (`gpt-4-turbo-preview`, `gpt-4`, `gpt-3.5-turbo`) | No | `gpt-4-turbo-preview` | Pesan untuk dikirim ke GPT |
| `temperature` | number | No | `0.7` | Temperatur sampling (0-2) |
| `max_tokens` | number | No | `1000` | Temperatur sampling (0-2) |
| `system_message` | string | No | - | Token maksimum dalam respons |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | Pesan peran sistem (opsional) |
| `model` | string | Respons dari operasi |
| `usage` | object | Respons dari operasi |

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

### Pembuatan Gambar DALL-E

`api.openai.image`

Hasilkan gambar menggunakan DALL-E

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Deskripsi gambar yang dihasilkan |
| `size` | select (`256x256`, `512x512`, `1024x1024`, `1792x1024`, `1024x1792`) | No | `1024x1024` | Deskripsi gambar yang dihasilkan |
| `model` | select (`dall-e-3`, `dall-e-2`) | No | `dall-e-3` | Versi model DALL-E |
| `quality` | select (`standard`, `hd`) | No | `standard` | Kualitas gambar (hanya DALL-E 3) |
| `n` | number | No | `1` | Jumlah gambar yang dihasilkan (1-10) |

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

### Agen AI

`llm.agent`

Agen AI otonom dengan koneksi multi-port (model, memori, tools)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt_source` | select (`manual`, `auto`) | No | `manual` | Dari mana mendapatkan prompt tugas |
| `task` | string | No | - | Tugas untuk diselesaikan agen. Gunakan {<!-- -->{input}<!-- -->} untuk mereferensikan data upstream. |
| `prompt_path` | string | No | `{<!-- -->{input}<!-- -->}` | Path untuk mengekstrak prompt dari input (mis., {<!-- -->{input.message}<!-- -->}) |
| `join_strategy` | select (`first`, `newline`, `separator`, `json`) | No | `first` | Cara menangani input array |
| `join_separator` | string | No | `

---

` | Pemisah untuk menggabungkan item array |
| `max_input_size` | number | No | `10000` | Karakter maksimum untuk prompt (mencegah overflow) |
| `system_prompt` | string | No | `You are a helpful AI agent. Use the available tools to complete the task. Think step by step.` | Instruksi untuk perilaku agen |
| `tools` | array | No | `[]` | Daftar ID modul (alternatif untuk menghubungkan node tool) |
| `context` | object | No | `{}` | Daftar ID modul (alternatif untuk menghubungkan node tool) |
| `max_iterations` | number | No | `10` | Data konteks tambahan untuk agen |
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.3` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Apakah agen berhasil menyelesaikan |
| `result` | string | Apakah agen berhasil menyelesaikan |
| `steps` | array | Apakah agen berhasil menyelesaikan |
| `tool_calls` | number | Hasil akhir dari agen |
| `tokens_used` | number | Daftar langkah yang diambil agen |

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
