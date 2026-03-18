# AI & LLM

AI model integration, text generation, embeddings, and autonomous agents.

**18 modules**

| Module | Description |
|--------|-------------|
| [Agente autonomo](#agente-autonomo) | Agente de IA auto-dirigido con memoria y comportamiento orientado a objetivos |
| [Agente de cadena](#agente-de-cadena) | Cadena de procesamiento de IA secuencial con multiples pasos |
| [Agente de Uso de Herramientas](#agente-de-uso-de-herramientas) | Agente de IA que puede llamar herramientas/funciones |
| [Incrustaciones de Texto](#incrustaciones-de-texto) | Generar incrustaciones vectoriales a partir de texto usando modelos de IA |
| [Extracción de IA](#extracción-de-ia) | Extraer datos estructurados del texto usando IA |
| [Chat local Ollama](#chat-local-ollama) | Chatear con LLM local via Ollama (completamente sin conexion) |
| [Memoria de IA](#memoria-de-ia) | Memoria de conversacion para agente de IA |
| [Memoria de entidades](#memoria-de-entidades) | Extraer y rastrear entidades (personas, lugares, conceptos) de conversaciones |
| [Memoria Redis](#memoria-redis) | Memoria de conversacion persistente usando almacenamiento Redis |
| [Memoria vectorial](#memoria-vectorial) | Memoria semantica usando embeddings vectoriales para recuperacion de contexto relevante |
| [Modelo de IA](#modelo-de-ia) | Configuracion de modelo LLM para agente de IA |
| [AI Tool](#ai-tool) | Expose a module as a tool for AI Agent |
| [Análisis de Visión](#análisis-de-visión) | Analizar imágenes usando modelos de visión de IA |
| [Chat de Claude](#chat-de-claude) | Enviar un mensaje de chat a Anthropic Claude AI y obtener una respuesta |
| [Chat de Google Gemini](#chat-de-google-gemini) | Enviar un mensaje de chat a Google Gemini AI y obtener una respuesta |
| [Chat de OpenAI](#chat-de-openai) | Enviar un mensaje de chat a modelos GPT de OpenAI |
| [Generacion de imagen DALL-E](#generacion-de-imagen-dall-e) | Generar imagenes usando DALL-E |
| [Agente de IA](#agente-de-ia) | Agente de IA autonomo con conexiones multi-puerto (modelo, memoria, herramientas) |

## Modules

### Agente autonomo

`agent.autonomous`

Agente de IA auto-dirigido con memoria y comportamiento orientado a objetivos

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `goal` | string | Yes | - | El objetivo para que el agente logre |
| `context` | string | No | - | El objetivo para que el agente logre |
| `max_iterations` | number | No | `5` | Contexto o restricciones adicionales |
| `llm_provider` | select (`openai`, `anthropic`, `gemini`, `ollama`) | No | `openai` | Maximo de pasos de razonamiento |
| `model` | string | No | `gpt-4o` | Nombre del modelo (ej., gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | Nombre del modelo (ej., gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | URL del servidor Ollama (solo para proveedor ollama) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Nivel de creatividad (0-2) |
| `thoughts` | array | El resultado de la operacion |
| `iterations` | number | El resultado de la operacion |
| `goal_achieved` | boolean | Pasos de razonamiento del agente |

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

### Agente de cadena

`agent.chain`

Cadena de procesamiento de IA secuencial con multiples pasos

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | string | Yes | - | Entrada inicial para la cadena |
| `chain_steps` | array | Yes | - | Entrada inicial para la cadena |
| `llm_provider` | select (`openai`, `ollama`) | No | `openai` | Array de pasos de procesamiento (cada uno es una plantilla de prompt) |
| `model` | string | No | `gpt-4o` | Nombre del modelo (ej., gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | Nombre del modelo (ej., gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | URL del servidor Ollama (solo para proveedor ollama) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Nivel de creatividad (0-2) |
| `intermediate_results` | array | El resultado de la operacion |
| `steps_completed` | number | El resultado de la operacion |

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

### Agente de Uso de Herramientas

`agent.tool_use`

Agente de IA que puede llamar herramientas/funciones

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | El objetivo o tarea para el agente |
| `tools` | array | Yes | - | Lista de definiciones de herramientas [{nombre, descripción, parámetros}] |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Proveedor de LLM para el agente |
| `model` | string | No | `gpt-4o` | Modelo a utilizar |
| `api_key` | string | No | - | Clave API (recurre a la variable de entorno) |
| `max_iterations` | number | No | `10` | Número máximo de rondas de llamadas a herramientas |
| `system_prompt` | string | No | - | Instrucción del sistema opcional para guiar al agente |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | La respuesta final del agente |
| `tool_calls` | array | Todas las llamadas a herramientas realizadas durante la ejecución |
| `iterations` | number | Número de iteraciones completadas |
| `model` | string | Modelo utilizado |

**Example:** File Processing Agent

```yaml
prompt: Read the config file and update the version number
tools: [{"name": "read_file", "description": "Read contents of a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}}, "required": ["path"]}}, {"name": "write_file", "description": "Write contents to a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}, "content": {"type": "string", "description": "File content"}}, "required": ["path", "content"]}}]
provider: openai
model: gpt-4o
max_iterations: 5
```

### Incrustaciones de Texto

`ai.embed`

Generar incrustaciones vectoriales a partir de texto usando modelos de IA

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texto a incrustar |
| `provider` | select (`openai`, `local`) | No | `openai` | Proveedor de IA para incrustaciones |
| `model` | string | No | `text-embedding-3-small` | Modelo de incrustación a usar |
| `api_key` | string | No | - | Clave API (usa la variable de entorno si no se proporciona) |
| `dimensions` | number | No | - | Dimensiones de incrustación (para modelos que lo soportan) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `embeddings` | array | Array de incrustación vectorial |
| `model` | string | Modelo usado para la incrustación |
| `dimensions` | number | Número de dimensiones en el vector de incrustación |
| `token_count` | number | Número de tokens procesados |

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

### Extracción de IA

`ai.extract`

Extraer datos estructurados del texto usando IA

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texto del cual extraer datos |
| `schema` | object | Yes | - | Esquema JSON que define los campos a extraer |
| `instructions` | string | No | - | Instrucciones adicionales de extracción |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Proveedor de IA a usar |
| `model` | string | No | `gpt-4o-mini` | Modelo a usar para la extracción |
| `api_key` | string | No | - | Clave API (usa la variable de entorno si no se proporciona) |
| `temperature` | number | No | `0` | Temperatura de muestreo (0-2) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | Datos estructurados extraídos |
| `model` | string | Modelo usado para la extracción |
| `raw_response` | string | Respuesta cruda del modelo |

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

### Chat local Ollama

`ai.local_ollama.chat`

Chatear con LLM local via Ollama (completamente sin conexion)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | El mensaje a enviar al LLM local |
| `model` | select (`llama2`, `llama2:13b`, `llama2:70b`, `mistral`, `mixtral`, `codellama`, `codellama:13b`, `phi`, `neural-chat`, `starling-lm`) | No | `llama2` | El mensaje a enviar al LLM local |
| `temperature` | number | No | `0.7` | Temperatura de muestreo (0-2) |
| `system_message` | string | No | - | Mensaje de rol del sistema (opcional) |
| `ollama_url` | string | No | `http://localhost:11434` | Mensaje de rol del sistema (opcional) |
| `max_tokens` | number | No | - | URL del servidor Ollama |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | Maximo de tokens en respuesta (opcional, depende del modelo) |
| `model` | string | Respuesta de la operacion |
| `context` | array | Respuesta de la operacion |
| `total_duration` | number | Nombre o identificador del modelo |
| `load_duration` | number | Contexto de conversacion para solicitudes de seguimiento |
| `prompt_eval_count` | number | Duracion total de procesamiento |
| `eval_count` | number | Duracion de carga del modelo |

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

### Memoria de IA

`ai.memory`

Memoria de conversacion para agente de IA

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `memory_type` | select (`buffer`, `window`, `summary`) | Yes | `buffer` | Tipo de almacenamiento de memoria |
| `window_size` | number | No | `10` | Numero de mensajes recientes a mantener (para memoria de ventana) |
| `session_id` | string | No | - | Identificador unico para esta sesion de conversacion |
| `initial_messages` | array | No | `[]` | Historial de conversacion precargado |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `memory_type` | string | Historial de conversacion precargado |
| `session_id` | string | Historial de conversacion precargado |
| `messages` | array | Tipo de memoria |
| `config` | object | Identificador de sesion |

**Example:** Simple Buffer Memory

```yaml
memory_type: buffer
```

**Example:** Window Memory (last 5 messages)

```yaml
memory_type: window
window_size: 5
```

### Memoria de entidades

`ai.memory.entity`

Extraer y rastrear entidades (personas, lugares, conceptos) de conversaciones

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
| `memory_type` | string | Maximo numero de entidades a recordar |
| `session_id` | string | Maximo numero de entidades a recordar |
| `entities` | object | Tipo de memoria (entidad) |
| `relationships` | array | Identificador de sesion |
| `config` | object | Entidades rastreadas por tipo |

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

Memoria de conversacion persistente usando almacenamiento Redis

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
| `memory_type` | string | Cargar mensajes existentes de Redis en inicializacion |
| `session_id` | string | Cargar mensajes existentes de Redis en inicializacion |
| `messages` | array | Tipo de memoria (redis) |
| `connected` | boolean | Identificador de sesion |
| `config` | object | Historial de mensajes cargado |

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

### Memoria vectorial

`ai.memory.vector`

Memoria semantica usando embeddings vectoriales para recuperacion de contexto relevante

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
| `memory_type` | string | Incluir marca de tiempo y otros metadatos con memorias |
| `session_id` | string | Incluir marca de tiempo y otros metadatos con memorias |
| `embedding_model` | string | Tipo de memoria (vector) |
| `config` | object | Identificador de sesion |

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

### Modelo de IA

`ai.model`

Configuracion de modelo LLM para agente de IA

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.7` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |
| `max_tokens` | number | No | `4096` | Maximo de tokens en respuesta |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `provider` | string | Maximo de tokens en respuesta |
| `model` | string | Nombre del proveedor de LLM |
| `config` | object | Nombre del proveedor de LLM |

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

### Análisis de Visión

`ai.vision.analyze`

Analizar imágenes usando modelos de visión de IA

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | No | - | Ruta local al archivo de imagen |
| `image_url` | string | No | - | URL de la imagen a analizar |
| `prompt` | string | No | `Describe this image in detail` | Qué analizar o preguntar sobre la imagen |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Proveedor de IA para análisis de visión |
| `model` | string | No | `gpt-4o` | Modelo de visión a usar |
| `api_key` | string | No | - | Clave API (usa la variable de entorno si no se proporciona) |
| `max_tokens` | number | No | `1000` | Máximo de tokens en la respuesta |
| `detail` | select (`low`, `high`, `auto`) | No | `auto` | Nivel de detalle de la imagen (bajo/alto/auto) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `analysis` | string | Análisis de IA de la imagen |
| `model` | string | Modelo usado para el análisis |
| `provider` | string | Proveedor usado para el análisis |
| `tokens_used` | number | Número de tokens usados |

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

### Chat de Claude

`api.anthropic.chat`

Enviar un mensaje de chat a Anthropic Claude AI y obtener una respuesta

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Clave API de Anthropic (por defecto env.ANTHROPIC_API_KEY) |
| `model` | string | No | `claude-sonnet-4-6` | Modelo de Claude a usar |
| `messages` | array | Yes | - | Array de objetos de mensaje con rol y contenido |
| `max_tokens` | number | No | `1024` | Contenido devuelto por la operacion |
| `temperature` | number | No | `1.0` | Temperatura de muestreo (0-1). Valores mas altos hacen la salida mas aleatoria |
| `system` | string | No | - | Prompt de sistema para guiar comportamiento de Claude |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Prompt de sistema para guiar comportamiento de Claude |
| `model` | string | Texto de respuesta de Claude |
| `stop_reason` | string | Modelo usado para respuesta |
| `usage` | object | Por que el modelo dejo de generar (end_turn, max_tokens, etc) |

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

### Chat de Google Gemini

`api.google_gemini.chat`

Enviar un mensaje de chat a Google Gemini AI y obtener una respuesta

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Clave API de Google AI (por defecto env.GOOGLE_AI_API_KEY) |
| `model` | string | No | `gemini-2.5-pro` | Modelo de Gemini a usar |
| `prompt` | string | Yes | - | El prompt de texto a enviar a Gemini |
| `temperature` | number | No | `1.0` | Controla aleatoriedad (0-2). Valores mas altos hacen la salida mas aleatoria |
| `max_output_tokens` | number | No | `2048` | Maximo numero de tokens en respuesta |

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

### Chat de OpenAI

`api.openai.chat`

Enviar un mensaje de chat a modelos GPT de OpenAI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | El mensaje a enviar a GPT |
| `model` | select (`gpt-4o`, `gpt-4o-mini`, `gpt-4.1`, `gpt-4.1-mini`, `o3`, `o3-mini`, `o4-mini`, `gpt-4-turbo-preview`) | No | `gpt-4o` | El mensaje a enviar a GPT |
| `temperature` | number | No | `0.7` | Temperatura de muestreo (0-2) |
| `max_tokens` | number | No | `1000` | Temperatura de muestreo (0-2) |
| `system_message` | string | No | - | Maximo de tokens en respuesta |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | Mensaje de rol del sistema (opcional) |
| `model` | string | Respuesta de la operacion |
| `usage` | object | Respuesta de la operacion |

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

### Generacion de imagen DALL-E

`api.openai.image`

Generar imagenes usando DALL-E

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Descripcion de la imagen a generar |
| `size` | select (`256x256`, `512x512`, `1024x1024`, `1792x1024`, `1024x1792`) | No | `1024x1024` | Descripcion de la imagen a generar |
| `model` | select (`dall-e-3`, `dall-e-2`) | No | `dall-e-3` | Version del modelo DALL-E |
| `quality` | select (`standard`, `hd`) | No | `standard` | Calidad de imagen (solo DALL-E 3) |
| `n` | number | No | `1` | Numero de imagenes a generar (1-10) |

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

### Agente de IA

`llm.agent`

Agente de IA autonomo con conexiones multi-puerto (modelo, memoria, herramientas)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt_source` | select (`manual`, `auto`) | No | `manual` | De donde obtener el prompt de la tarea |
| `task` | string | No | - | La tarea para que el agente complete. Usa {<!-- -->{input}<!-- -->} para referenciar datos anteriores. |
| `prompt_path` | string | No | `{<!-- -->{input}<!-- -->}` | Ruta para extraer prompt de entrada (ej., {<!-- -->{input.message}<!-- -->}) |
| `join_strategy` | select (`first`, `newline`, `separator`, `json`) | No | `first` | Como manejar entradas de array |
| `join_separator` | string | No | `

---

` | Separador para unir elementos de array |
| `max_input_size` | number | No | `10000` | Maximo de caracteres para prompt (previene desbordamiento) |
| `system_prompt` | string | No | `You are a helpful AI agent. Use the available tools to complete the task. Think step by step.` | Instrucciones para el comportamiento del agente |
| `tools` | array | No | `[]` | Lista de IDs de modulo (alternativa a conectar nodos de herramientas) |
| `context` | object | No | `{}` | Lista de IDs de modulo (alternativa a conectar nodos de herramientas) |
| `max_iterations` | number | No | `10` | Datos de contexto adicionales para el agente |
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.3` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si el agente completo exitosamente |
| `result` | string | Si el agente completo exitosamente |
| `steps` | array | Si el agente completo exitosamente |
| `tool_calls` | number | El resultado final del agente |
| `tokens_used` | number | Lista de pasos que tomo el agente |

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
