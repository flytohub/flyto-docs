# AI & LLM

AI model integration, text generation, embeddings, and autonomous agents.

**18 modules**

| Module | Description |
|--------|-------------|
| [Autonomer Agent](#autonomer-agent) | Selbstgesteuerter KI-Agent mit Gedächtnis und zielorientiertem Verhalten |
| [Ketten-Agent](#ketten-agent) | Sequentielle KI-Verarbeitungskette mit mehreren Schritten |
| [Werkzeugnutzungs-Agent](#werkzeugnutzungs-agent) | AI-Agent, der Tools/Funktionen aufrufen kann |
| [Texteinbettungen](#texteinbettungen) | Erstellen Sie Vektoreinbettungen aus Text mit KI-Modellen |
| [KI-Extraktion](#ki-extraktion) | Strukturierte Daten aus Text mit KI extrahieren |
| [Lokaler Ollama-Chat](#lokaler-ollama-chat) | Chat mit lokalem LLM über Ollama (komplett offline) |
| [KI-Gedächtnis](#ki-gedächtnis) | Konversationsgedächtnis für KI-Agent |
| [Entitätsgedächtnis](#entitätsgedächtnis) | Entitäten (Personen, Orte, Konzepte) aus Gesprächen extrahieren und verfolgen |
| [Redis-Gedächtnis](#redis-gedächtnis) | Persistentes Konversationsgedächtnis mit Redis-Speicher |
| [Vektor-Gedächtnis](#vektor-gedächtnis) | Semantisches Gedächtnis mit Vektor-Embeddings für relevanten Kontextabruf |
| [KI-Modell](#ki-modell) | LLM-Modellkonfiguration für KI-Agent |
| [AI Tool](#ai-tool) | Expose a module as a tool for AI Agent |
| [Vision-Analyse](#vision-analyse) | Bilder mit KI-Vision-Modellen analysieren |
| [Claude-Chat](#claude-chat) | Chatnachricht an Anthropic Claude KI senden und Antwort erhalten |
| [Google Gemini-Chat](#google-gemini-chat) | Chatnachricht an Google Gemini KI senden und Antwort erhalten |
| [OpenAI-Chat](#openai-chat) | Chatnachricht an OpenAI-GPT-Modelle senden |
| [DALL-E-Bildgenerierung](#dall-e-bildgenerierung) | Bilder mit DALL-E generieren |
| [KI-Agent](#ki-agent) | Autonomer KI-Agent mit Multi-Port-Verbindungen (Modell, Gedächtnis, Tools) |

## Modules

### Autonomer Agent

`agent.autonomous`

Selbstgesteuerter KI-Agent mit Gedächtnis und zielorientiertem Verhalten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `goal` | string | Yes | - | Das Ziel, das der Agent erreichen soll |
| `context` | string | No | - | Das Ziel, das der Agent erreichen soll |
| `max_iterations` | number | No | `5` | Zusätzlicher Kontext oder Einschränkungen |
| `llm_provider` | select (`openai`, `anthropic`, `gemini`, `ollama`) | No | `openai` | Maximale Denkschritte |
| `model` | string | No | `gpt-4o` | Modellname (z.B. gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | Modellname (z.B. gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | Ollama-Server-URL (nur für Ollama-Provider) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Kreativitätslevel (0-2) |
| `thoughts` | array | Das Operationsergebnis |
| `iterations` | number | Das Operationsergebnis |
| `goal_achieved` | boolean | Agent-Denkschritte |

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

### Ketten-Agent

`agent.chain`

Sequentielle KI-Verarbeitungskette mit mehreren Schritten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | string | Yes | - | Anfangseingabe für die Kette |
| `chain_steps` | array | Yes | - | Anfangseingabe für die Kette |
| `llm_provider` | select (`openai`, `anthropic`, `gemini`, `ollama`) | No | `openai` | Array von Verarbeitungsschritten (jeder ist eine Prompt-Vorlage) |
| `model` | string | No | `gpt-4o` | Modellname (z.B. gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | Modellname (z.B. gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | Ollama-Server-URL (nur für Ollama-Provider) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Kreativitätslevel (0-2) |
| `intermediate_results` | array | Das Operationsergebnis |
| `steps_completed` | number | Das Operationsergebnis |

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

### Werkzeugnutzungs-Agent

`agent.tool_use`

AI-Agent, der Tools/Funktionen aufrufen kann

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Das Ziel oder die Aufgabe für den Agenten |
| `tools` | array | Yes | - | Liste der Tool-Definitionen [{name, description, parameters}] |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | LLM-Anbieter für den Agenten |
| `model` | string | No | `gpt-4o` | Zu verwendendes Modell |
| `api_key` | string | No | - | API-Schlüssel (fällt auf Umgebungsvariable zurück) |
| `max_iterations` | number | No | `10` | Maximale Anzahl von Tool-Aufrufrunden |
| `system_prompt` | string | No | - | Optionale Systemaufforderung zur Anleitung des Agenten |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Die endgültige Antwort des Agenten |
| `tool_calls` | array | Alle während der Ausführung getätigten Tool-Aufrufe |
| `iterations` | number | Anzahl der abgeschlossenen Iterationen |
| `model` | string | Verwendetes Modell |

**Example:** File Processing Agent

```yaml
prompt: Read the config file and update the version number
tools: [{"name": "read_file", "description": "Read contents of a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}}, "required": ["path"]}}, {"name": "write_file", "description": "Write contents to a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}, "content": {"type": "string", "description": "File content"}}, "required": ["path", "content"]}}]
provider: openai
model: gpt-4o
max_iterations: 5
```

### Texteinbettungen

`ai.embed`

Erstellen Sie Vektoreinbettungen aus Text mit KI-Modellen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text zur Einbettung |
| `provider` | select (`openai`, `local`) | No | `openai` | KI-Anbieter für Einbettungen |
| `model` | string | No | `text-embedding-3-small` | Einbettungsmodell zur Verwendung |
| `api_key` | string | No | - | API-Schlüssel (fällt auf Umgebungsvariable zurück) |
| `dimensions` | number | No | - | Einbettungsdimensionen (für Modelle, die dies unterstützen) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `embeddings` | array | Vektor-Einbettungsarray |
| `model` | string | Modell, das für die Einbettung verwendet wird |
| `dimensions` | number | Anzahl der Dimensionen im Einbettungsvektor |
| `token_count` | number | Anzahl der verarbeiteten Tokens |

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

### KI-Extraktion

`ai.extract`

Strukturierte Daten aus Text mit KI extrahieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Text, aus dem Daten extrahiert werden sollen |
| `schema` | object | Yes | - | JSON-Schema, das die zu extrahierenden Felder definiert |
| `instructions` | string | No | - | Zusätzliche Extraktionsanweisungen |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Zu verwendender KI-Anbieter |
| `model` | string | No | `gpt-4o-mini` | Modell zur Verwendung für die Extraktion |
| `api_key` | string | No | - | API-Schlüssel (fällt auf Umgebungsvariable zurück) |
| `temperature` | number | No | `0` | Sampling-Temperatur (0-2) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | Extrahierte strukturierte Daten |
| `model` | string | Modell, das für die Extraktion verwendet wird |
| `raw_response` | string | Rohantwort des Modells |

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

### Lokaler Ollama-Chat

`ai.local_ollama.chat`

Chat mit lokalem LLM über Ollama (komplett offline)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Die Nachricht, die an das lokale LLM gesendet werden soll |
| `model` | select (`llama2`, `llama2:13b`, `llama2:70b`, `mistral`, `mixtral`, `codellama`, `codellama:13b`, `phi`, `neural-chat`, `starling-lm`) | No | `llama2` | Die Nachricht, die an das lokale LLM gesendet werden soll |
| `temperature` | number | No | `0.7` | Sampling-Temperatur (0-2) |
| `system_message` | string | No | - | System-Rollennachricht (optional) |
| `ollama_url` | string | No | `http://localhost:11434` | System-Rollennachricht (optional) |
| `max_tokens` | number | No | - | Ollama-Server-URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | Maximale Token in der Antwort (optional, modellabhängig) |
| `model` | string | Antwort von der Operation |
| `context` | array | Antwort von der Operation |
| `total_duration` | number | Modellname oder -kennung |
| `load_duration` | number | Konversationskontext für Folgeanfragen |
| `prompt_eval_count` | number | Gesamtverarbeitungsdauer |
| `eval_count` | number | Modellladezeit |

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

### KI-Gedächtnis

`ai.memory`

Konversationsgedächtnis für KI-Agent

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `memory_type` | select (`buffer`, `window`, `summary`) | Yes | `buffer` | Art der Gedächtnisspeicherung |
| `window_size` | number | No | `10` | Anzahl der beizubehaltenden letzten Nachrichten (für Fenstergedächtnis) |
| `session_id` | string | No | - | Eindeutige Kennung für diese Konversationssitzung |
| `initial_messages` | array | No | `[]` | Vorgeladener Konversationsverlauf |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `memory_type` | string | Vorgeladener Konversationsverlauf |
| `session_id` | string | Vorgeladener Konversationsverlauf |
| `messages` | array | Gedächtnistyp |
| `config` | object | Sitzungskennung |

**Example:** Simple Buffer Memory

```yaml
memory_type: buffer
```

**Example:** Window Memory (last 5 messages)

```yaml
memory_type: window
window_size: 5
```

### Entitätsgedächtnis

`ai.memory.entity`

Entitäten (Personen, Orte, Konzepte) aus Gesprächen extrahieren und verfolgen

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
| `memory_type` | string | Maximale Anzahl zu merkender Entitäten |
| `session_id` | string | Maximale Anzahl zu merkender Entitäten |
| `entities` | object | Gedächtnistyp (Entität) |
| `relationships` | array | Sitzungskennung |
| `config` | object | Verfolgte Entitäten nach Typ |

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

### Redis-Gedächtnis

`ai.memory.redis`

Persistentes Konversationsgedächtnis mit Redis-Speicher

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
| `memory_type` | string | Vorhandene Nachrichten aus Redis bei Initialisierung laden |
| `session_id` | string | Vorhandene Nachrichten aus Redis bei Initialisierung laden |
| `messages` | array | Gedächtnistyp (redis) |
| `connected` | boolean | Sitzungskennung |
| `config` | object | Geladener Nachrichtenverlauf |

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

### Vektor-Gedächtnis

`ai.memory.vector`

Semantisches Gedächtnis mit Vektor-Embeddings für relevanten Kontextabruf

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
| `memory_type` | string | Zeitstempel und andere Metadaten mit Erinnerungen einschließen |
| `session_id` | string | Zeitstempel und andere Metadaten mit Erinnerungen einschließen |
| `embedding_model` | string | Gedächtnistyp (Vektor) |
| `config` | object | Sitzungskennung |

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

### KI-Modell

`ai.model`

LLM-Modellkonfiguration für KI-Agent

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.7` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |
| `max_tokens` | number | No | `4096` | Maximale Token in der Antwort |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `provider` | string | Maximale Token in der Antwort |
| `model` | string | LLM-Provider-Name |
| `config` | object | LLM-Provider-Name |

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

### Vision-Analyse

`ai.vision.analyze`

Bilder mit KI-Vision-Modellen analysieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | No | - | Lokaler Pfad zur Bilddatei |
| `image_url` | string | No | - | URL des zu analysierenden Bildes |
| `prompt` | string | No | `Describe this image in detail` | Was soll analysiert oder zum Bild gefragt werden |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | AI-Anbieter für die Bildanalyse |
| `model` | string | No | `gpt-4o` | Zu verwendendes Vision-Modell |
| `api_key` | string | No | - | API-Schlüssel (fällt auf Umgebungsvariable zurück) |
| `max_tokens` | number | No | `1000` | Maximale Tokens in der Antwort |
| `detail` | select (`low`, `high`, `auto`) | No | `auto` | Bilddetailgrad (niedrig/hoch/auto) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `analysis` | string | KI-Analyse des Bildes |
| `model` | string | Modell, das für die Analyse verwendet wird |
| `provider` | string | Anbieter, der für die Analyse verwendet wird |
| `tokens_used` | number | Anzahl der verwendeten Tokens |

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

### Claude-Chat

`api.anthropic.chat`

Chatnachricht an Anthropic Claude KI senden und Antwort erhalten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Anthropic-API-Schlüssel (Standard: env.ANTHROPIC_API_KEY) |
| `model` | string | No | `claude-sonnet-4-6` | Zu verwendendes Claude-Modell |
| `messages` | array | Yes | - | Array von Nachrichtenobjekten mit Rolle und Inhalt |
| `max_tokens` | number | No | `1024` | Von der Operation zurückgegebener Inhalt |
| `temperature` | number | No | `1.0` | Sampling-Temperatur (0-1). Höhere Werte machen die Ausgabe zufälliger |
| `system` | string | No | - | System-Prompt zur Steuerung des Claude-Verhaltens |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | System-Prompt zur Steuerung des Claude-Verhaltens |
| `model` | string | Claude-Antworttext |
| `stop_reason` | string | Verwendetes Modell für die Antwort |
| `usage` | object | Warum das Modell aufgehört hat zu generieren (end_turn, max_tokens, etc.) |

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

### Google Gemini-Chat

`api.google_gemini.chat`

Chatnachricht an Google Gemini KI senden und Antwort erhalten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Google-AI-API-Schlüssel (Standard: env.GOOGLE_AI_API_KEY) |
| `model` | string | No | `gemini-2.5-pro` | Zu verwendendes Gemini-Modell |
| `prompt` | string | Yes | - | Der Text-Prompt, der an Gemini gesendet werden soll |
| `temperature` | number | No | `1.0` | Steuert Zufälligkeit (0-2). Höhere Werte machen die Ausgabe zufälliger |
| `max_output_tokens` | number | No | `2048` | Maximale Anzahl von Token in der Antwort |

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

### OpenAI-Chat

`api.openai.chat`

Chatnachricht an OpenAI-GPT-Modelle senden

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Die Nachricht, die an GPT gesendet werden soll |
| `model` | select (`gpt-4o`, `gpt-4o-mini`, `gpt-4.1`, `gpt-4.1-mini`, `o3`, `o3-mini`, `o4-mini`, `gpt-4-turbo-preview`) | No | `gpt-4o` | Die Nachricht, die an GPT gesendet werden soll |
| `temperature` | number | No | `0.7` | Sampling-Temperatur (0-2) |
| `max_tokens` | number | No | `1000` | Sampling-Temperatur (0-2) |
| `system_message` | string | No | - | Maximale Token in der Antwort |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | System-Rollennachricht (optional) |
| `model` | string | Antwort von der Operation |
| `usage` | object | Antwort von der Operation |

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

### DALL-E-Bildgenerierung

`api.openai.image`

Bilder mit DALL-E generieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Beschreibung des zu generierenden Bildes |
| `size` | select (`256x256`, `512x512`, `1024x1024`, `1792x1024`, `1024x1792`) | No | `1024x1024` | Beschreibung des zu generierenden Bildes |
| `model` | select (`dall-e-3`, `dall-e-2`) | No | `dall-e-3` | DALL-E-Modellversion |
| `quality` | select (`standard`, `hd`) | No | `standard` | Bildqualität (nur DALL-E 3) |
| `n` | number | No | `1` | Anzahl der zu generierenden Bilder (1-10) |

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

### KI-Agent

`llm.agent`

Autonomer KI-Agent mit Multi-Port-Verbindungen (Modell, Gedächtnis, Tools)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt_source` | select (`manual`, `auto`) | No | `manual` | Woher der Aufgaben-Prompt bezogen werden soll |
| `task` | string | No | - | Die Aufgabe, die der Agent erledigen soll. Verwenden Sie {<!-- -->{input}<!-- -->}, um auf vorgelagerte Daten zu verweisen. |
| `prompt_path` | string | No | `{<!-- -->{input}<!-- -->}` | Pfad zum Extrahieren des Prompts aus der Eingabe (z.B. {<!-- -->{input.message}<!-- -->}) |
| `join_strategy` | select (`first`, `newline`, `separator`, `json`) | No | `first` | Wie Array-Eingaben behandelt werden sollen |
| `join_separator` | string | No | `

---

` | Trennzeichen zum Verbinden von Array-Elementen |
| `max_input_size` | number | No | `10000` | Maximale Zeichen für Prompt (verhindert Überlauf) |
| `system_prompt` | string | No | `You are a helpful AI agent. Use the available tools to complete the task. Think step by step.` | Anweisungen für das Agent-Verhalten |
| `tools` | array | No | `[]` | Liste von Modul-IDs (Alternative zum Verbinden von Tool-Knoten) |
| `context` | object | No | `{}` | Liste von Modul-IDs (Alternative zum Verbinden von Tool-Knoten) |
| `max_iterations` | number | No | `10` | Zusätzliche Kontextdaten für den Agent |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Ob der Agent erfolgreich abgeschlossen hat |
| `result` | string | Ob der Agent erfolgreich abgeschlossen hat |
| `steps` | array | Ob der Agent erfolgreich abgeschlossen hat |
| `tool_calls` | number | Das Endergebnis vom Agent |
| `tokens_used` | number | Liste der Schritte, die der Agent unternommen hat |

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
