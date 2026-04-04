# AI & LLM

AI model integration, text generation, embeddings, and autonomous agents.

**18 modules**

| Module | Description |
|--------|-------------|
| [Agente Autonomo](#agente-autonomo) | Agente AI auto-diretto con memoria e comportamento orientato agli obiettivi |
| [Agente Catena](#agente-catena) | Catena di elaborazione AI sequenziale con passaggi multipli |
| [Agente Uso Strumenti](#agente-uso-strumenti) | Agente AI che può chiamare strumenti/funzioni |
| [Incorporamenti Testuali](#incorporamenti-testuali) | Genera incorporamenti vettoriali dal testo usando modelli AI |
| [Estrazione AI](#estrazione-ai) | Estrai dati strutturati dal testo usando AI |
| [Chat Ollama Locale](#chat-ollama-locale) | Chatta con LLM locale tramite Ollama (completamente offline) |
| [Memoria AI](#memoria-ai) | Memoria conversazione per Agente AI |
| [Memoria Entita](#memoria-entita) | Estrai e traccia entita (persone, luoghi, concetti) dalle conversazioni |
| [Memoria Redis](#memoria-redis) | Memoria conversazione persistente usando archiviazione Redis |
| [Memoria Vettoriale](#memoria-vettoriale) | Memoria semantica usando embedding vettoriali per recupero contesto rilevante |
| [Modello AI](#modello-ai) | Configurazione modello LLM per Agente AI |
| [AI Tool](#ai-tool) | Expose a module as a tool for AI Agent |
| [Analisi Visione](#analisi-visione) | Analizza immagini usando modelli di visione AI |
| [Claude Chat](#claude-chat) | Invia messaggio chat a Anthropic Claude AI e ottieni risposta |
| [Google Gemini Chat](#google-gemini-chat) | Invia messaggio chat a Google Gemini AI e ottieni risposta |
| [OpenAI Chat](#openai-chat) | Invia messaggio chat a modelli OpenAI GPT |
| [DALL-E Generazione Immagini](#dall-e-generazione-immagini) | Genera immagini usando DALL-E |
| [Agente AI](#agente-ai) | Agente AI autonomo con connessioni multi-porta (modello, memoria, strumenti) |

## Modules

### Agente Autonomo

`agent.autonomous`

Agente AI auto-diretto con memoria e comportamento orientato agli obiettivi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `goal` | string | Yes | - | L'obiettivo per l'agente da raggiungere |
| `context` | string | No | - | L'obiettivo per l'agente da raggiungere |
| `max_iterations` | number | No | `5` | Contesto o vincoli aggiuntivi |
| `llm_provider` | select (`openai`, `anthropic`, `gemini`, `ollama`) | No | `openai` | Passaggi di ragionamento massimi |
| `model` | string | No | `gpt-4o` | Nome modello (es. gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | Nome modello (es. gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | URL server Ollama (solo per provider ollama) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Livello creativita (0-2) |
| `thoughts` | array | Il risultato operazione |
| `iterations` | number | Il risultato operazione |
| `goal_achieved` | boolean | Passaggi di ragionamento agente |

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

### Agente Catena

`agent.chain`

Catena di elaborazione AI sequenziale con passaggi multipli

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | string | Yes | - | Input iniziale per la catena |
| `chain_steps` | array | Yes | - | Input iniziale per la catena |
| `llm_provider` | select (`openai`, `anthropic`, `gemini`, `ollama`) | No | `openai` | Array di passaggi elaborazione (ogni passaggio e un template prompt) |
| `model` | string | No | `gpt-4o` | Nome modello (es. gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | Nome modello (es. gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | URL server Ollama (solo per provider ollama) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Livello creativita (0-2) |
| `intermediate_results` | array | Il risultato operazione |
| `steps_completed` | number | Il risultato operazione |

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

### Agente Uso Strumenti

`agent.tool_use`

Agente AI che può chiamare strumenti/funzioni

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | L'obiettivo o compito per l'agente |
| `tools` | array | Yes | - | Elenco delle definizioni degli strumenti [{nome, descrizione, parametri}] |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Fornitore LLM per l'agente |
| `model` | string | No | `gpt-4o` | Modello da utilizzare |
| `api_key` | string | No | - | Chiave API (predefinita alla variabile d'ambiente) |
| `max_iterations` | number | No | `10` | Numero massimo di round di chiamate agli strumenti |
| `system_prompt` | string | No | - | Prompt di sistema opzionale per guidare l'agente |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Risposta finale dell'agente |
| `tool_calls` | array | Tutte le chiamate agli strumenti effettuate durante l'esecuzione |
| `iterations` | number | Numero di iterazioni completate |
| `model` | string | Modello utilizzato |

**Example:** File Processing Agent

```yaml
prompt: Read the config file and update the version number
tools: [{"name": "read_file", "description": "Read contents of a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}}, "required": ["path"]}}, {"name": "write_file", "description": "Write contents to a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}, "content": {"type": "string", "description": "File content"}}, "required": ["path", "content"]}}]
provider: openai
model: gpt-4o
max_iterations: 5
```

### Incorporamenti Testuali

`ai.embed`

Genera incorporamenti vettoriali dal testo usando modelli AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Testo da incorporare |
| `provider` | select (`openai`, `local`) | No | `openai` | Fornitore AI per incorporamenti |
| `model` | string | No | `text-embedding-3-small` | Modello di incorporamento da usare |
| `api_key` | string | No | - | Chiave API (predefinito alla variabile d'ambiente) |
| `dimensions` | number | No | - | Dimensioni di incorporamento (per modelli che lo supportano) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `embeddings` | array | Array di incorporamenti vettoriali |
| `model` | string | Modello usato per l'incorporamento |
| `dimensions` | number | Numero di dimensioni nel vettore di incorporamento |
| `token_count` | number | Numero di token elaborati |

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

### Estrazione AI

`ai.extract`

Estrai dati strutturati dal testo usando AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Testo da cui estrarre dati |
| `schema` | object | Yes | - | Schema JSON che definisce i campi da estrarre |
| `instructions` | string | No | - | Istruzioni aggiuntive per l'estrazione |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Fornitore AI da usare |
| `model` | string | No | `gpt-4o-mini` | Modello da usare per l'estrazione |
| `api_key` | string | No | - | Chiave API (predefinito alla variabile d'ambiente) |
| `temperature` | number | No | `0` | Temperatura di campionamento (0-2) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | Dati strutturati estratti |
| `model` | string | Modello usato per l'estrazione |
| `raw_response` | string | Risposta grezza del modello |

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

### Chat Ollama Locale

`ai.local_ollama.chat`

Chatta con LLM locale tramite Ollama (completamente offline)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Il messaggio da inviare al LLM locale |
| `model` | select (`llama2`, `llama2:13b`, `llama2:70b`, `mistral`, `mixtral`, `codellama`, `codellama:13b`, `phi`, `neural-chat`, `starling-lm`) | No | `llama2` | Il messaggio da inviare al LLM locale |
| `temperature` | number | No | `0.7` | Temperatura di campionamento (0-2) |
| `system_message` | string | No | - | Messaggio ruolo sistema (opzionale) |
| `ollama_url` | string | No | `http://localhost:11434` | Messaggio ruolo sistema (opzionale) |
| `max_tokens` | number | No | - | URL server Ollama |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | Token massimi nella risposta (opzionale, dipende dal modello) |
| `model` | string | Risposta dall'operazione |
| `context` | array | Risposta dall'operazione |
| `total_duration` | number | Nome o identificatore modello |
| `load_duration` | number | Contesto conversazione per richieste successive |
| `prompt_eval_count` | number | Durata totale elaborazione |
| `eval_count` | number | Durata caricamento modello |

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

### Memoria AI

`ai.memory`

Memoria conversazione per Agente AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `memory_type` | select (`buffer`, `window`, `summary`) | Yes | `buffer` | Tipo di archiviazione memoria |
| `window_size` | number | No | `10` | Numero di messaggi recenti da mantenere (per memoria finestra) |
| `session_id` | string | No | - | Identificatore univoco per questa sessione di conversazione |
| `initial_messages` | array | No | `[]` | Cronologia conversazione precaricata |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `memory_type` | string | Cronologia conversazione precaricata |
| `session_id` | string | Cronologia conversazione precaricata |
| `messages` | array | Tipo di memoria |
| `config` | object | Identificatore sessione |

**Example:** Simple Buffer Memory

```yaml
memory_type: buffer
```

**Example:** Window Memory (last 5 messages)

```yaml
memory_type: window
window_size: 5
```

### Memoria Entita

`ai.memory.entity`

Estrai e traccia entita (persone, luoghi, concetti) dalle conversazioni

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
| `memory_type` | string | Numero massimo di entita da ricordare |
| `session_id` | string | Numero massimo di entita da ricordare |
| `entities` | object | Tipo di memoria (entita) |
| `relationships` | array | Identificatore sessione |
| `config` | object | Entita tracciate per tipo |

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

### Memoria Redis

`ai.memory.redis`

Memoria conversazione persistente usando archiviazione Redis

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
| `memory_type` | string | Carica messaggi esistenti da Redis all'inizializzazione |
| `session_id` | string | Carica messaggi esistenti da Redis all'inizializzazione |
| `messages` | array | Tipo di memoria (redis) |
| `connected` | boolean | Identificatore sessione |
| `config` | object | Cronologia messaggi caricata |

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

### Memoria Vettoriale

`ai.memory.vector`

Memoria semantica usando embedding vettoriali per recupero contesto rilevante

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
| `memory_type` | string | Includi timestamp e altri metadati con le memorie |
| `session_id` | string | Includi timestamp e altri metadati con le memorie |
| `embedding_model` | string | Tipo di memoria (vettoriale) |
| `config` | object | Identificatore sessione |

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

### Modello AI

`ai.model`

Configurazione modello LLM per Agente AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.7` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |
| `max_tokens` | number | No | `4096` | Token massimi nella risposta |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `provider` | string | Token massimi nella risposta |
| `model` | string | Nome provider LLM |
| `config` | object | Nome provider LLM |

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

### Analisi Visione

`ai.vision.analyze`

Analizza immagini usando modelli di visione AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | No | - | Percorso locale al file immagine |
| `image_url` | string | No | - | URL dell'immagine da analizzare |
| `prompt` | string | No | `Describe this image in detail` | Cosa analizzare o chiedere sull'immagine |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Fornitore AI per l'analisi visiva |
| `model` | string | No | `gpt-4o` | Modello di visione da usare |
| `api_key` | string | No | - | Chiave API (predefinito alla variabile d'ambiente) |
| `max_tokens` | number | No | `1000` | Massimo numero di token nella risposta |
| `detail` | select (`low`, `high`, `auto`) | No | `auto` | Livello di dettaglio dell'immagine (basso/alto/auto) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `analysis` | string | Analisi AI dell'immagine |
| `model` | string | Modello usato per l'analisi |
| `provider` | string | Fornitore usato per l'analisi |
| `tokens_used` | number | Numero di token usati |

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

Invia messaggio chat a Anthropic Claude AI e ottieni risposta

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Chiave API Anthropic (default env.ANTHROPIC_API_KEY) |
| `model` | string | No | `claude-sonnet-4-6` | Modello Claude da usare |
| `messages` | array | Yes | - | Array di oggetti messaggio con ruolo e contenuto |
| `max_tokens` | number | No | `1024` | Contenuto restituito dall'operazione |
| `temperature` | number | No | `1.0` | Temperatura campionamento (0-1). Valori piu alti rendono output piu casuale |
| `system` | string | No | - | Prompt di sistema per guidare comportamento Claude |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Prompt di sistema per guidare comportamento Claude |
| `model` | string | Testo risposta Claude |
| `stop_reason` | string | Modello usato per risposta |
| `usage` | object | Perche il modello ha smesso di generare (end_turn, max_tokens, ecc) |

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

Invia messaggio chat a Google Gemini AI e ottieni risposta

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Chiave API Google AI (default env.GOOGLE_AI_API_KEY) |
| `model` | string | No | `gemini-2.5-pro` | Modello Gemini da usare |
| `prompt` | string | Yes | - | Il prompt di testo da inviare a Gemini |
| `temperature` | number | No | `1.0` | Controlla casualita (0-2). Valori piu alti rendono output piu casuale |
| `max_output_tokens` | number | No | `2048` | Numero massimo token nella risposta |

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

Invia messaggio chat a modelli OpenAI GPT

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Il messaggio da inviare a GPT |
| `model` | select (`gpt-4o`, `gpt-4o-mini`, `gpt-4.1`, `gpt-4.1-mini`, `o3`, `o3-mini`, `o4-mini`, `gpt-4-turbo-preview`) | No | `gpt-4o` | Il messaggio da inviare a GPT |
| `temperature` | number | No | `0.7` | Temperatura campionamento (0-2) |
| `max_tokens` | number | No | `1000` | Temperatura campionamento (0-2) |
| `system_message` | string | No | - | Token massimi nella risposta |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | Messaggio ruolo sistema (opzionale) |
| `model` | string | Risposta dall'operazione |
| `usage` | object | Risposta dall'operazione |

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

### DALL-E Generazione Immagini

`api.openai.image`

Genera immagini usando DALL-E

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Descrizione dell'immagine da generare |
| `size` | select (`256x256`, `512x512`, `1024x1024`, `1792x1024`, `1024x1792`) | No | `1024x1024` | Descrizione dell'immagine da generare |
| `model` | select (`dall-e-3`, `dall-e-2`) | No | `dall-e-3` | Versione modello DALL-E |
| `quality` | select (`standard`, `hd`) | No | `standard` | Qualita immagine (solo DALL-E 3) |
| `n` | number | No | `1` | Numero di immagini da generare (1-10) |

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

### Agente AI

`llm.agent`

Agente AI autonomo con connessioni multi-porta (modello, memoria, strumenti)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt_source` | select (`manual`, `auto`) | No | `manual` | Da dove ottenere il prompt del task |
| `task` | string | No | - | Il task da completare per l'agente. Usa {<!-- -->{input}<!-- -->} per riferimento a dati upstream. |
| `prompt_path` | string | No | `{<!-- -->{input}<!-- -->}` | Percorso per estrarre prompt dall'input (es. {<!-- -->{input.message}<!-- -->}) |
| `join_strategy` | select (`first`, `newline`, `separator`, `json`) | No | `first` | Come gestire gli input array |
| `join_separator` | string | No | `

---

` | Separatore per unire elementi array |
| `max_input_size` | number | No | `10000` | Caratteri massimi per prompt (previene overflow) |
| `system_prompt` | string | No | `You are a helpful AI agent. Use the available tools to complete the task. Think step by step.` | Istruzioni per il comportamento dell'agente |
| `tools` | array | No | `[]` | Lista di ID modulo (alternativa alla connessione di nodi strumento) |
| `context` | object | No | `{}` | Lista di ID modulo (alternativa alla connessione di nodi strumento) |
| `max_iterations` | number | No | `10` | Dati di contesto aggiuntivi per l'agente |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se l'agente ha completato con successo |
| `result` | string | Se l'agente ha completato con successo |
| `steps` | array | Se l'agente ha completato con successo |
| `tool_calls` | number | Il risultato finale dell'agente |
| `tokens_used` | number | Lista dei passaggi eseguiti dall'agente |

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
