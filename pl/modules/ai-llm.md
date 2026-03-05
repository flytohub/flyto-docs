# AI & LLM

AI model integration, text generation, embeddings, and autonomous agents.

**18 modules**

| Module | Description |
|--------|-------------|
| [Agent autonomiczny](#agent-autonomiczny) | Samodzielny agent AI z pamiecia i zachowaniem zorientowanym na cel |
| [Agent lancuchowy](#agent-lancuchowy) | Sekwencyjny lancuch przetwarzania AI z wieloma krokami |
| [Agent Użycia Narzędzi](#agent-użycia-narzędzi) | Agent AI, który może korzystać z narzędzi/funkcji |
| [Osadzanie Tekstu](#osadzanie-tekstu) | Generowanie wektorów osadzania z tekstu za pomocą modeli AI |
| [Wyodrębnianie AI](#wyodrębnianie-ai) | Wyodrębnianie danych strukturalnych z tekstu za pomocą AI |
| [Lokalny czat Ollama](#lokalny-czat-ollama) | Czat z lokalnym LLM przez Ollama (calkowicie offline) |
| [Pamiec AI](#pamiec-ai) | Pamiec rozmowy dla agenta AI |
| [Pamiec encji](#pamiec-encji) | Wyodrebniaj i sledz encje (osoby, miejsca, pojecia) z rozmow |
| [Pamiec Redis](#pamiec-redis) | Trwala pamiec rozmowy z uzyciem magazynu Redis |
| [Pamiec wektorowa](#pamiec-wektorowa) | Pamiec semantyczna z uzyciem embeddingow wektorowych do pobierania odpowiedniego kontekstu |
| [Model AI](#model-ai) | Konfiguracja modelu LLM dla agenta AI |
| [AI Tool](#ai-tool) | Expose a module as a tool for AI Agent |
| [Analiza Wizji](#analiza-wizji) | Analiza obrazów za pomocą modeli wizji AI |
| [Czat Claude](#czat-claude) | Wyslij wiadomosc czatu do Anthropic Claude AI i uzyskaj odpowiedz |
| [Czat Google Gemini](#czat-google-gemini) | Wyslij wiadomosc czatu do Google Gemini AI i uzyskaj odpowiedz |
| [Czat OpenAI](#czat-openai) | Wyslij wiadomosc czatu do modeli OpenAI GPT |
| [Generowanie obrazow DALL-E](#generowanie-obrazow-dall-e) | Generuj obrazy za pomoca DALL-E |
| [Agent AI](#agent-ai) | Autonomiczny agent AI z wieloportowymi polaczeniami (model, pamiec, narzedzia) |

## Modules

### Agent autonomiczny

`agent.autonomous`

Samodzielny agent AI z pamiecia i zachowaniem zorientowanym na cel

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `goal` | string | Yes | - | Cel do osiagniecia przez agenta |
| `context` | string | No | - | Cel do osiagniecia przez agenta |
| `max_iterations` | number | No | `5` | Dodatkowy kontekst lub ograniczenia |
| `llm_provider` | select (`openai`, `ollama`) | No | `openai` | Maksymalna liczba krokow rozumowania |
| `model` | string | No | `gpt-4-turbo-preview` | Nazwa modelu (np. gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | Nazwa modelu (np. gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | URL serwera Ollama (tylko dla dostawcy ollama) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Poziom kreatywnosci (0-2) |
| `thoughts` | array | Wynik operacji |
| `iterations` | number | Wynik operacji |
| `goal_achieved` | boolean | Kroki rozumowania agenta |

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

### Agent lancuchowy

`agent.chain`

Sekwencyjny lancuch przetwarzania AI z wieloma krokami

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | string | Yes | - | Poczatkowe dane wejsciowe dla lancucha |
| `chain_steps` | array | Yes | - | Poczatkowe dane wejsciowe dla lancucha |
| `llm_provider` | select (`openai`, `ollama`) | No | `openai` | Tablica krokow przetwarzania (kazdy jest szablonem promptu) |
| `model` | string | No | `gpt-4-turbo-preview` | Nazwa modelu (np. gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | Nazwa modelu (np. gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | URL serwera Ollama (tylko dla dostawcy ollama) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Poziom kreatywnosci (0-2) |
| `intermediate_results` | array | Wynik operacji |
| `steps_completed` | number | Wynik operacji |

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

### Agent Użycia Narzędzi

`agent.tool_use`

Agent AI, który może korzystać z narzędzi/funkcji

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Cel lub zadanie dla agenta |
| `tools` | array | Yes | - | Lista definicji narzędzi [{name, description, parameters}] |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Dostawca LLM dla agenta |
| `model` | string | No | `gpt-4o` | Model do użycia |
| `api_key` | string | No | - | Klucz API (domyślnie zmienna środowiskowa) |
| `max_iterations` | number | No | `10` | Maksymalna liczba rund wywołań narzędzi |
| `system_prompt` | string | No | - | Opcjonalna systemowa podpowiedź do kierowania agentem |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Ostateczna odpowiedź agenta |
| `tool_calls` | array | Wszystkie wywołania narzędzi wykonane podczas działania |
| `iterations` | number | Liczba ukończonych iteracji |
| `model` | string | Użyty model |

**Example:** File Processing Agent

```yaml
prompt: Read the config file and update the version number
tools: [{"name": "read_file", "description": "Read contents of a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}}, "required": ["path"]}}, {"name": "write_file", "description": "Write contents to a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}, "content": {"type": "string", "description": "File content"}}, "required": ["path", "content"]}}]
provider: openai
model: gpt-4o
max_iterations: 5
```

### Osadzanie Tekstu

`ai.embed`

Generowanie wektorów osadzania z tekstu za pomocą modeli AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Tekst do osadzenia |
| `provider` | select (`openai`, `local`) | No | `openai` | Dostawca AI dla osadzania |
| `model` | string | No | `text-embedding-3-small` | Model osadzania do użycia |
| `api_key` | string | No | - | Klucz API (domyślnie zmienna środowiskowa) |
| `dimensions` | number | No | - | Wymiary osadzania (dla modeli, które to obsługują) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `embeddings` | array | Tablica wektorów osadzania |
| `model` | string | Model używany do osadzania |
| `dimensions` | number | Liczba wymiarów wektora osadzania |
| `token_count` | number | Liczba przetworzonych tokenów |

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

### Wyodrębnianie AI

`ai.extract`

Wyodrębnianie danych strukturalnych z tekstu za pomocą AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Tekst, z którego wyodrębnia się dane |
| `schema` | object | Yes | - | Schemat JSON definiujący pola do wyodrębnienia |
| `instructions` | string | No | - | Dodatkowe instrukcje wyodrębniania |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Dostawca AI do użycia |
| `model` | string | No | `gpt-4o-mini` | Model do użycia do wyodrębniania |
| `api_key` | string | No | - | Klucz API (domyślnie zmienna środowiskowa) |
| `temperature` | number | No | `0` | Temperatura próbkowania (0-2) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | Wyodrębnione dane strukturalne |
| `model` | string | Model używany do wyodrębniania |
| `raw_response` | string | Surowa odpowiedź modelu |

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

### Lokalny czat Ollama

`ai.local_ollama.chat`

Czat z lokalnym LLM przez Ollama (calkowicie offline)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Wiadomosc do wyslania do lokalnego LLM |
| `model` | select (`llama2`, `llama2:13b`, `llama2:70b`, `mistral`, `mixtral`, `codellama`, `codellama:13b`, `phi`, `neural-chat`, `starling-lm`) | No | `llama2` | Wiadomosc do wyslania do lokalnego LLM |
| `temperature` | number | No | `0.7` | Temperatura probkowania (0-2) |
| `system_message` | string | No | - | Wiadomosc roli systemowej (opcjonalne) |
| `ollama_url` | string | No | `http://localhost:11434` | Wiadomosc roli systemowej (opcjonalne) |
| `max_tokens` | number | No | - | URL serwera Ollama |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | Maksymalna liczba tokenow w odpowiedzi (opcjonalne, zalezy od modelu) |
| `model` | string | Odpowiedz z operacji |
| `context` | array | Odpowiedz z operacji |
| `total_duration` | number | Nazwa lub identyfikator modelu |
| `load_duration` | number | Kontekst rozmowy dla kolejnych zapytan |
| `prompt_eval_count` | number | Calkowity czas przetwarzania |
| `eval_count` | number | Czas ladowania modelu |

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

### Pamiec AI

`ai.memory`

Pamiec rozmowy dla agenta AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `memory_type` | select (`buffer`, `window`, `summary`) | Yes | `buffer` | Typ przechowywania pamieci |
| `window_size` | number | No | `10` | Liczba ostatnich wiadomosci do zachowania (dla pamieci okna) |
| `session_id` | string | No | - | Unikalny identyfikator dla tej sesji rozmowy |
| `initial_messages` | array | No | `[]` | Wstepnie zaladowana historia rozmowy |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `memory_type` | string | Wstepnie zaladowana historia rozmowy |
| `session_id` | string | Wstepnie zaladowana historia rozmowy |
| `messages` | array | Typ pamieci |
| `config` | object | Identyfikator sesji |

**Example:** Simple Buffer Memory

```yaml
memory_type: buffer
```

**Example:** Window Memory (last 5 messages)

```yaml
memory_type: window
window_size: 5
```

### Pamiec encji

`ai.memory.entity`

Wyodrebniaj i sledz encje (osoby, miejsca, pojecia) z rozmow

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
| `memory_type` | string | Maksymalna liczba encji do zapamietania |
| `session_id` | string | Maksymalna liczba encji do zapamietania |
| `entities` | object | Typ pamieci (encja) |
| `relationships` | array | Identyfikator sesji |
| `config` | object | Sledzone encje wedlug typu |

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

### Pamiec Redis

`ai.memory.redis`

Trwala pamiec rozmowy z uzyciem magazynu Redis

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
| `memory_type` | string | Laduj istniejace wiadomosci z Redis przy inicjalizacji |
| `session_id` | string | Laduj istniejace wiadomosci z Redis przy inicjalizacji |
| `messages` | array | Typ pamieci (redis) |
| `connected` | boolean | Identyfikator sesji |
| `config` | object | Zaladowana historia wiadomosci |

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

### Pamiec wektorowa

`ai.memory.vector`

Pamiec semantyczna z uzyciem embeddingow wektorowych do pobierania odpowiedniego kontekstu

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
| `memory_type` | string | Dolacz znacznik czasu i inne metadane do wspomnien |
| `session_id` | string | Dolacz znacznik czasu i inne metadane do wspomnien |
| `embedding_model` | string | Typ pamieci (wektor) |
| `config` | object | Identyfikator sesji |

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

Konfiguracja modelu LLM dla agenta AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.7` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |
| `max_tokens` | number | No | `4096` | Maksymalna liczba tokenow w odpowiedzi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `provider` | string | Maksymalna liczba tokenow w odpowiedzi |
| `model` | string | Nazwa dostawcy LLM |
| `config` | object | Nazwa dostawcy LLM |

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

### Analiza Wizji

`ai.vision.analyze`

Analiza obrazów za pomocą modeli wizji AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | No | - | Lokalna ścieżka do pliku obrazu |
| `image_url` | string | No | - | URL obrazu do analizy |
| `prompt` | string | No | `Describe this image in detail` | Co analizować lub pytać o obraz |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Dostawca AI do analizy wizji |
| `model` | string | No | `gpt-4o` | Model wizji do użycia |
| `api_key` | string | No | - | Klucz API (domyślnie zmienna środowiskowa) |
| `max_tokens` | number | No | `1000` | Maksymalna liczba tokenów w odpowiedzi |
| `detail` | select (`low`, `high`, `auto`) | No | `auto` | Poziom szczegółowości obrazu (niski/wysoki/auto) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `analysis` | string | Analiza AI obrazu |
| `model` | string | Model używany do analizy |
| `provider` | string | Dostawca używany do analizy |
| `tokens_used` | number | Liczba użytych tokenów |

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

### Czat Claude

`api.anthropic.chat`

Wyslij wiadomosc czatu do Anthropic Claude AI i uzyskaj odpowiedz

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Klucz API Anthropic (domyslnie env.ANTHROPIC_API_KEY) |
| `model` | string | No | `claude-3-5-sonnet-20241022` | Model Claude do uzycia |
| `messages` | array | Yes | - | Tablica obiektow wiadomosci z rola i trescia |
| `max_tokens` | number | No | `1024` | Tresc zwrocona przez operacje |
| `temperature` | number | No | `1.0` | Temperatura probkowania (0-1). Wyzsze wartosci czynia wynik bardziej losowym |
| `system` | string | No | - | Prompt systemowy do kierowania zachowaniem Claude |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Prompt systemowy do kierowania zachowaniem Claude |
| `model` | string | Tekst odpowiedzi Claude |
| `stop_reason` | string | Model uzyty do odpowiedzi |
| `usage` | object | Dlaczego model przestal generowac (end_turn, max_tokens, itd.) |

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

### Czat Google Gemini

`api.google_gemini.chat`

Wyslij wiadomosc czatu do Google Gemini AI i uzyskaj odpowiedz

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Klucz API Google AI (domyslnie env.GOOGLE_AI_API_KEY) |
| `model` | string | No | `gemini-1.5-pro` | Model Gemini do uzycia |
| `prompt` | string | Yes | - | Tekstowy prompt do wyslania do Gemini |
| `temperature` | number | No | `1.0` | Kontroluje losowosc (0-2). Wyzsze wartosci czynia wynik bardziej losowym |
| `max_output_tokens` | number | No | `2048` | Maksymalna liczba tokenow w odpowiedzi |

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

### Czat OpenAI

`api.openai.chat`

Wyslij wiadomosc czatu do modeli OpenAI GPT

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Wiadomosc do wyslania do GPT |
| `model` | select (`gpt-4-turbo-preview`, `gpt-4`, `gpt-3.5-turbo`) | No | `gpt-4-turbo-preview` | Wiadomosc do wyslania do GPT |
| `temperature` | number | No | `0.7` | Temperatura probkowania (0-2) |
| `max_tokens` | number | No | `1000` | Temperatura probkowania (0-2) |
| `system_message` | string | No | - | Maksymalna liczba tokenow w odpowiedzi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | Wiadomosc roli systemowej (opcjonalne) |
| `model` | string | Odpowiedz z operacji |
| `usage` | object | Odpowiedz z operacji |

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

### Generowanie obrazow DALL-E

`api.openai.image`

Generuj obrazy za pomoca DALL-E

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Opis obrazu do wygenerowania |
| `size` | select (`256x256`, `512x512`, `1024x1024`, `1792x1024`, `1024x1792`) | No | `1024x1024` | Opis obrazu do wygenerowania |
| `model` | select (`dall-e-3`, `dall-e-2`) | No | `dall-e-3` | Wersja modelu DALL-E |
| `quality` | select (`standard`, `hd`) | No | `standard` | Jakosc obrazu (tylko DALL-E 3) |
| `n` | number | No | `1` | Liczba obrazow do wygenerowania (1-10) |

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

### Agent AI

`llm.agent`

Autonomiczny agent AI z wieloportowymi polaczeniami (model, pamiec, narzedzia)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt_source` | select (`manual`, `auto`) | No | `manual` | Skad pobrac prompt zadania |
| `task` | string | No | - | Zadanie do wykonania przez agenta. Uzyj {<!-- -->{input}<!-- -->} aby odwolac sie do danych upstream. |
| `prompt_path` | string | No | `{<!-- -->{input}<!-- -->}` | Sciezka do wyodrebnienia promptu z wejscia (np. {<!-- -->{input.message}<!-- -->}) |
| `join_strategy` | select (`first`, `newline`, `separator`, `json`) | No | `first` | Jak obslugiwac dane wejsciowe tablicy |
| `join_separator` | string | No | `

---

` | Separator do laczenia elementow tablicy |
| `max_input_size` | number | No | `10000` | Maksymalna liczba znakow dla promptu (zapobiega przepelnieniu) |
| `system_prompt` | string | No | `You are a helpful AI agent. Use the available tools to complete the task. Think step by step.` | Instrukcje dla zachowania agenta |
| `tools` | array | No | `[]` | Lista ID modulow (alternatywa dla laczenia wezlow narzedzi) |
| `context` | object | No | `{}` | Lista ID modulow (alternatywa dla laczenia wezlow narzedzi) |
| `max_iterations` | number | No | `10` | Dodatkowe dane kontekstowe dla agenta |
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.3` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Czy agent zakonczyl pomyslnie |
| `result` | string | Czy agent zakonczyl pomyslnie |
| `steps` | array | Czy agent zakonczyl pomyslnie |
| `tool_calls` | number | Koncowy wynik od agenta |
| `tokens_used` | number | Lista krokow wykonanych przez agenta |

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
