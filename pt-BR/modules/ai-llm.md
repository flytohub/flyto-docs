# AI & LLM

AI model integration, text generation, embeddings, and autonomous agents.

**18 modules**

| Module | Description |
|--------|-------------|
| [Agente Autonomo](#agente-autonomo) | Agente de IA autodirigido com memoria e comportamento orientado a objetivos |
| [Agente de Cadeia](#agente-de-cadeia) | Cadeia de processamento de IA sequencial com multiplos passos |
| [Agente de Uso de Ferramentas](#agente-de-uso-de-ferramentas) | Agente de IA que pode chamar ferramentas/funções |
| [Embeddings de Texto](#embeddings-de-texto) | Gere embeddings vetoriais de texto usando modelos de IA |
| [Extração de IA](#extração-de-ia) | Extraia dados estruturados de texto usando IA |
| [Chat Ollama Local](#chat-ollama-local) | Conversar com LLM local via Ollama (completamente offline) |
| [Memoria de IA](#memoria-de-ia) | Memoria de conversa para Agente de IA |
| [Memoria de Entidades](#memoria-de-entidades) | Extrair e rastrear entidades (pessoas, lugares, conceitos) de conversas |
| [Memoria Redis](#memoria-redis) | Memoria de conversa persistente usando armazenamento Redis |
| [Memoria Vetorial](#memoria-vetorial) | Memoria semantica usando embeddings vetoriais para recuperacao de contexto relevante |
| [Modelo de IA](#modelo-de-ia) | Configuracao de modelo LLM para Agente de IA |
| [AI Tool](#ai-tool) | Expose a module as a tool for AI Agent |
| [Análise de Visão](#análise-de-visão) | Analise imagens usando modelos de visão de IA |
| [Chat Claude](#chat-claude) | Enviar mensagem de chat para Anthropic Claude AI e obter resposta |
| [Chat Google Gemini](#chat-google-gemini) | Enviar mensagem de chat para Google Gemini AI e obter resposta |
| [Chat OpenAI](#chat-openai) | Enviar mensagem de chat para modelos OpenAI GPT |
| [Geracao de Imagem DALL-E](#geracao-de-imagem-dall-e) | Gerar imagens usando DALL-E |
| [Agente de IA](#agente-de-ia) | Agente de IA autonomo com conexoes multi-porta (modelo, memoria, ferramentas) |

## Modules

### Agente Autonomo

`agent.autonomous`

Agente de IA autodirigido com memoria e comportamento orientado a objetivos

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `goal` | string | Yes | - | O objetivo para o agente alcancar |
| `context` | string | No | - | O objetivo para o agente alcancar |
| `max_iterations` | number | No | `5` | Contexto adicional ou restricoes |
| `llm_provider` | select (`openai`, `anthropic`, `gemini`, `ollama`) | No | `openai` | Maximo de passos de raciocinio |
| `model` | string | No | `gpt-4o` | Nome do modelo (ex: gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | Nome do modelo (ex: gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | URL do servidor Ollama (apenas para provedor ollama) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Nivel de criatividade (0-2) |
| `thoughts` | array | O resultado da operacao |
| `iterations` | number | O resultado da operacao |
| `goal_achieved` | boolean | Passos de raciocinio do agente |

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

### Agente de Cadeia

`agent.chain`

Cadeia de processamento de IA sequencial com multiplos passos

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | string | Yes | - | Entrada inicial para a cadeia |
| `chain_steps` | array | Yes | - | Entrada inicial para a cadeia |
| `llm_provider` | select (`openai`, `anthropic`, `gemini`, `ollama`) | No | `openai` | Array de passos de processamento (cada um e um template de prompt) |
| `model` | string | No | `gpt-4o` | Nome do modelo (ex: gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | Nome do modelo (ex: gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | URL do servidor Ollama (apenas para provedor ollama) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Nivel de criatividade (0-2) |
| `intermediate_results` | array | O resultado da operacao |
| `steps_completed` | number | O resultado da operacao |

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

### Agente de Uso de Ferramentas

`agent.tool_use`

Agente de IA que pode chamar ferramentas/funções

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | O objetivo ou tarefa para o agente |
| `tools` | array | Yes | - | Lista de definições de ferramentas [{nome, descrição, parâmetros}] |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Provedor LLM para o agente |
| `model` | string | No | `gpt-4o` | Modelo a ser usado |
| `api_key` | string | No | - | Chave de API (usa variável de ambiente como padrão) |
| `max_iterations` | number | No | `10` | Número máximo de rodadas de chamadas de ferramentas |
| `system_prompt` | string | No | - | Prompt do sistema opcional para guiar o agente |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Resposta final do agente |
| `tool_calls` | array | Todas as chamadas de ferramentas feitas durante a execução |
| `iterations` | number | Número de iterações concluídas |
| `model` | string | Modelo usado |

**Example:** File Processing Agent

```yaml
prompt: Read the config file and update the version number
tools: [{"name": "read_file", "description": "Read contents of a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}}, "required": ["path"]}}, {"name": "write_file", "description": "Write contents to a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}, "content": {"type": "string", "description": "File content"}}, "required": ["path", "content"]}}]
provider: openai
model: gpt-4o
max_iterations: 5
```

### Embeddings de Texto

`ai.embed`

Gere embeddings vetoriais de texto usando modelos de IA

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texto para embutir |
| `provider` | select (`openai`, `local`) | No | `openai` | Provedor de IA para embeddings |
| `model` | string | No | `text-embedding-3-small` | Modelo de embedding a ser usado |
| `api_key` | string | No | - | Chave de API (usa variável de ambiente como padrão) |
| `dimensions` | number | No | - | Dimensões de embedding (para modelos que suportam) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `embeddings` | array | Array de embedding vetorial |
| `model` | string | Modelo usado para embedding |
| `dimensions` | number | Número de dimensões no vetor de embedding |
| `token_count` | number | Número de tokens processados |

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

### Extração de IA

`ai.extract`

Extraia dados estruturados de texto usando IA

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texto do qual extrair dados |
| `schema` | object | Yes | - | Esquema JSON definindo os campos a serem extraídos |
| `instructions` | string | No | - | Instruções adicionais de extração |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Provedor de IA a ser usado |
| `model` | string | No | `gpt-4o-mini` | Modelo a ser usado para extração |
| `api_key` | string | No | - | Chave de API (usa variável de ambiente como padrão) |
| `temperature` | number | No | `0` | Temperatura de amostragem (0-2) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | Dados estruturados extraídos |
| `model` | string | Modelo usado para extração |
| `raw_response` | string | Resposta bruta do modelo |

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

### Chat Ollama Local

`ai.local_ollama.chat`

Conversar com LLM local via Ollama (completamente offline)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | A mensagem para enviar ao LLM local |
| `model` | select (`llama2`, `llama2:13b`, `llama2:70b`, `mistral`, `mixtral`, `codellama`, `codellama:13b`, `phi`, `neural-chat`, `starling-lm`) | No | `llama2` | A mensagem para enviar ao LLM local |
| `temperature` | number | No | `0.7` | Temperatura de amostragem (0-2) |
| `system_message` | string | No | - | Mensagem de role do sistema (opcional) |
| `ollama_url` | string | No | `http://localhost:11434` | Mensagem de role do sistema (opcional) |
| `max_tokens` | number | No | - | URL do servidor Ollama |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | Maximo de tokens na resposta (opcional, depende do modelo) |
| `model` | string | Resposta da operacao |
| `context` | array | Resposta da operacao |
| `total_duration` | number | Nome ou identificador do modelo |
| `load_duration` | number | Contexto da conversa para requisicoes de acompanhamento |
| `prompt_eval_count` | number | Duracao total do processamento |
| `eval_count` | number | Duracao do carregamento do modelo |

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

Memoria de conversa para Agente de IA

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `memory_type` | select (`buffer`, `window`, `summary`) | Yes | `buffer` | Tipo de armazenamento de memoria |
| `window_size` | number | No | `10` | Numero de mensagens recentes para manter (para memoria de janela) |
| `session_id` | string | No | - | Identificador unico para esta sessao de conversa |
| `initial_messages` | array | No | `[]` | Historico de conversa pre-carregado |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `memory_type` | string | Historico de conversa pre-carregado |
| `session_id` | string | Historico de conversa pre-carregado |
| `messages` | array | Tipo de memoria |
| `config` | object | Identificador da sessao |

**Example:** Simple Buffer Memory

```yaml
memory_type: buffer
```

**Example:** Window Memory (last 5 messages)

```yaml
memory_type: window
window_size: 5
```

### Memoria de Entidades

`ai.memory.entity`

Extrair e rastrear entidades (pessoas, lugares, conceitos) de conversas

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
| `memory_type` | string | Numero maximo de entidades para lembrar |
| `session_id` | string | Numero maximo de entidades para lembrar |
| `entities` | object | Tipo de memoria (entidade) |
| `relationships` | array | Identificador da sessao |
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

Memoria de conversa persistente usando armazenamento Redis

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
| `memory_type` | string | Carregar mensagens existentes do Redis na inicializacao |
| `session_id` | string | Carregar mensagens existentes do Redis na inicializacao |
| `messages` | array | Tipo de memoria (redis) |
| `connected` | boolean | Identificador da sessao |
| `config` | object | Historico de mensagens carregado |

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

### Memoria Vetorial

`ai.memory.vector`

Memoria semantica usando embeddings vetoriais para recuperacao de contexto relevante

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
| `memory_type` | string | Incluir timestamp e outros metadados com memorias |
| `session_id` | string | Incluir timestamp e outros metadados com memorias |
| `embedding_model` | string | Tipo de memoria (vetorial) |
| `config` | object | Identificador da sessao |

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

Configuracao de modelo LLM para Agente de IA

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `provider` | select (`openai`, `anthropic`, `google`, `groq`, `deepseek`, `ollama`, `custom`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.7` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (leave empty to use environment variable) |
| `base_url` | string | No | - | Custom API endpoint URL |
| `max_tokens` | number | No | `4096` | Maximo de tokens na resposta |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `provider` | string | Maximo de tokens na resposta |
| `model` | string | Nome do provedor LLM |
| `config` | object | Nome do provedor LLM |

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

### Análise de Visão

`ai.vision.analyze`

Analise imagens usando modelos de visão de IA

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | No | - | Caminho local para o arquivo de imagem |
| `image_url` | string | No | - | URL da imagem a ser analisada |
| `prompt` | string | No | `Describe this image in detail` | O que analisar ou perguntar sobre a imagem |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Provedor de IA para análise de visão |
| `model` | string | No | `gpt-4o` | Modelo de visão a ser usado |
| `api_key` | string | No | - | Chave de API (usa variável de ambiente como padrão) |
| `max_tokens` | number | No | `1000` | Máximo de tokens na resposta |
| `detail` | select (`low`, `high`, `auto`) | No | `auto` | Nível de detalhe da imagem (baixo/alto/auto) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `analysis` | string | Análise de IA da imagem |
| `model` | string | Modelo usado para análise |
| `provider` | string | Provedor usado para análise |
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

### Chat Claude

`api.anthropic.chat`

Enviar mensagem de chat para Anthropic Claude AI e obter resposta

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Chave API Anthropic (padrao para env.ANTHROPIC_API_KEY) |
| `model` | string | No | `claude-sonnet-4-6` | Modelo Claude a usar |
| `messages` | array | Yes | - | Array de objetos de mensagem com role e conteudo |
| `max_tokens` | number | No | `1024` | Conteudo retornado pela operacao |
| `temperature` | number | No | `1.0` | Temperatura de amostragem (0-1). Valores mais altos tornam a saida mais aleatoria |
| `system` | string | No | - | Prompt do sistema para guiar comportamento do Claude |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Prompt do sistema para guiar comportamento do Claude |
| `model` | string | Texto de resposta do Claude |
| `stop_reason` | string | Modelo usado para resposta |
| `usage` | object | Por que o modelo parou de gerar (end_turn, max_tokens, etc) |

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

Enviar mensagem de chat para Google Gemini AI e obter resposta

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Chave API Google AI (padrao para env.GOOGLE_AI_API_KEY) |
| `model` | string | No | `gemini-2.5-pro` | Modelo Gemini a usar |
| `prompt` | string | Yes | - | O prompt de texto para enviar ao Gemini |
| `temperature` | number | No | `1.0` | Controla aleatoriedade (0-2). Valores mais altos tornam a saida mais aleatoria |
| `max_output_tokens` | number | No | `2048` | Numero maximo de tokens na resposta |

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

Enviar mensagem de chat para modelos OpenAI GPT

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | A mensagem para enviar ao GPT |
| `model` | select (`gpt-4o`, `gpt-4o-mini`, `gpt-4.1`, `gpt-4.1-mini`, `o3`, `o3-mini`, `o4-mini`, `gpt-4-turbo-preview`) | No | `gpt-4o` | A mensagem para enviar ao GPT |
| `temperature` | number | No | `0.7` | Temperatura de amostragem (0-2) |
| `max_tokens` | number | No | `1000` | Temperatura de amostragem (0-2) |
| `system_message` | string | No | - | Maximo de tokens na resposta |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | Mensagem de role do sistema (opcional) |
| `model` | string | Resposta da operacao |
| `usage` | object | Resposta da operacao |

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

### Geracao de Imagem DALL-E

`api.openai.image`

Gerar imagens usando DALL-E

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Descricao da imagem a gerar |
| `size` | select (`256x256`, `512x512`, `1024x1024`, `1792x1024`, `1024x1792`) | No | `1024x1024` | Descricao da imagem a gerar |
| `model` | select (`dall-e-3`, `dall-e-2`) | No | `dall-e-3` | Versao do modelo DALL-E |
| `quality` | select (`standard`, `hd`) | No | `standard` | Qualidade da imagem (apenas DALL-E 3) |
| `n` | number | No | `1` | Numero de imagens para gerar (1-10) |

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

Agente de IA autonomo com conexoes multi-porta (modelo, memoria, ferramentas)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt_source` | select (`manual`, `auto`) | No | `manual` | De onde obter o prompt da tarefa |
| `task` | string | No | - | A tarefa para o agente completar. Use {<!-- -->{input}<!-- -->} para referenciar dados upstream. |
| `prompt_path` | string | No | `{<!-- -->{input}<!-- -->}` | Caminho para extrair prompt da entrada (ex: {<!-- -->{input.message}<!-- -->}) |
| `join_strategy` | select (`first`, `newline`, `separator`, `json`) | No | `first` | Como lidar com entradas de array |
| `join_separator` | string | No | `

---

` | Separador para juntar itens de array |
| `max_input_size` | number | No | `10000` | Maximo de caracteres para prompt (previne overflow) |
| `agent_type` | select (`tools`, `react`) | No | `tools` | Reasoning strategy for the agent |
| `system_prompt` | string | No | `You are a helpful AI agent. Use the available tools to complete the task. Think step by step.` | Instrucoes para o comportamento do agente |
| `response_format` | select (`text`, `json`, `json_schema`) | No | `text` | Expected format of the final answer |
| `output_schema` | object | No | `{}` | JSON Schema the final answer must match (for json_schema format) |
| `context` | object | No | `{}` | Lista de IDs de modulos (alternativa a conectar nos de ferramentas) |
| `max_iterations` | number | No | `10` | Dados de contexto adicionais para o agente |
| `provider` | select (`openai`, `anthropic`, `google`, `groq`, `deepseek`, `ollama`, `custom`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `api_key` | string | No | - | API key (leave empty to use environment variable) |
| `temperature` | number | No | `0.7` | Creativity level (0=deterministic, 1=creative) |
| `base_url` | string | No | - | Custom API endpoint URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Se o agente completou com sucesso |
| `result` | string | Se o agente completou com sucesso |
| `steps` | array | Se o agente completou com sucesso |
| `tool_calls` | number | O resultado final do agente |
| `tokens_used` | number | Lista de passos que o agente executou |

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
