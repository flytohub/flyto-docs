# AI & LLM

AI model integration, text generation, embeddings, and autonomous agents.

**18 modules**

| Module | Description |
|--------|-------------|
| [Agent autonome](#agent-autonome) | Agent IA autodirige avec memoire et comportement oriente objectif |
| [Agent en chaine](#agent-en-chaine) | Chaine de traitement IA sequentielle avec plusieurs etapes |
| [Agent d'utilisation d'outils](#agent-d'utilisation-d'outils) | Agent AI qui peut appeler des outils/fonctions |
| [Embeddings de Texte](#embeddings-de-texte) | Générer des embeddings vectoriels à partir de texte en utilisant des modèles AI |
| [Extraction AI](#extraction-ai) | Extraire des données structurées à partir de texte en utilisant l'AI |
| [Chat Ollama local](#chat-ollama-local) | Discuter avec un LLM local via Ollama (completement hors ligne) |
| [Memoire IA](#memoire-ia) | Memoire de conversation pour l'agent IA |
| [Memoire d'entites](#memoire-d'entites) | Extraire et suivre les entites (personnes, lieux, concepts) des conversations |
| [Memoire Redis](#memoire-redis) | Memoire de conversation persistante utilisant le stockage Redis |
| [Memoire vectorielle](#memoire-vectorielle) | Memoire semantique utilisant des embeddings vectoriels pour la recuperation de contexte pertinent |
| [Modele IA](#modele-ia) | Configuration du modele LLM pour l'agent IA |
| [AI Tool](#ai-tool) | Expose a module as a tool for AI Agent |
| [Analyse de Vision](#analyse-de-vision) | Analyser des images en utilisant des modèles de vision AI |
| [Chat Claude](#chat-claude) | Envoyer un message de chat a Anthropic Claude AI et obtenir une reponse |
| [Chat Google Gemini](#chat-google-gemini) | Envoyer un message de chat a Google Gemini AI et obtenir une reponse |
| [Chat OpenAI](#chat-openai) | Envoyer un message de chat aux modeles OpenAI GPT |
| [Generation d'images DALL-E](#generation-d'images-dall-e) | Generer des images avec DALL-E |
| [Agent IA](#agent-ia) | Agent IA autonome avec connexions multi-ports (modele, memoire, outils) |

## Modules

### Agent autonome

`agent.autonomous`

Agent IA autodirige avec memoire et comportement oriente objectif

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `goal` | string | Yes | - | L'objectif a atteindre par l'agent |
| `context` | string | No | - | L'objectif a atteindre par l'agent |
| `max_iterations` | number | No | `5` | Contexte ou contraintes supplementaires |
| `llm_provider` | select (`openai`, `anthropic`, `gemini`, `ollama`) | No | `openai` | Etapes de raisonnement maximum |
| `model` | string | No | `gpt-4o` | Nom du modele (ex: gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | Nom du modele (ex: gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | URL du serveur Ollama (uniquement pour le fournisseur ollama) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Niveau de creativite (0-2) |
| `thoughts` | array | Resultat de l'operation |
| `iterations` | number | Resultat de l'operation |
| `goal_achieved` | boolean | Etapes de raisonnement de l'agent |

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

### Agent en chaine

`agent.chain`

Chaine de traitement IA sequentielle avec plusieurs etapes

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | string | Yes | - | Entree initiale pour la chaine |
| `chain_steps` | array | Yes | - | Entree initiale pour la chaine |
| `llm_provider` | select (`openai`, `anthropic`, `gemini`, `ollama`) | No | `openai` | Tableau d'etapes de traitement (chacune est un modele de prompt) |
| `model` | string | No | `gpt-4o` | Nom du modele (ex: gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | Nom du modele (ex: gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | URL du serveur Ollama (uniquement pour le fournisseur ollama) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Niveau de creativite (0-2) |
| `intermediate_results` | array | Resultat de l'operation |
| `steps_completed` | number | Resultat de l'operation |

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

### Agent d'utilisation d'outils

`agent.tool_use`

Agent AI qui peut appeler des outils/fonctions

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | L'objectif ou la tâche pour l'agent |
| `tools` | array | Yes | - | Liste des définitions d'outils [{nom, description, paramètres}] |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Fournisseur LLM pour l'agent |
| `model` | string | No | `gpt-4o` | Modèle à utiliser |
| `api_key` | string | No | - | Clé API (repli sur la variable d'environnement) |
| `max_iterations` | number | No | `10` | Nombre maximum de tours d'appel d'outils |
| `system_prompt` | string | No | - | Invite système optionnelle pour guider l'agent |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Réponse finale de l'agent |
| `tool_calls` | array | Tous les appels d'outils effectués pendant l'exécution |
| `iterations` | number | Nombre d'itérations complétées |
| `model` | string | Modèle utilisé |

**Example:** File Processing Agent

```yaml
prompt: Read the config file and update the version number
tools: [{"name": "read_file", "description": "Read contents of a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}}, "required": ["path"]}}, {"name": "write_file", "description": "Write contents to a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}, "content": {"type": "string", "description": "File content"}}, "required": ["path", "content"]}}]
provider: openai
model: gpt-4o
max_iterations: 5
```

### Embeddings de Texte

`ai.embed`

Générer des embeddings vectoriels à partir de texte en utilisant des modèles AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texte à embedder |
| `provider` | select (`openai`, `local`) | No | `openai` | Fournisseur AI pour les embeddings |
| `model` | string | No | `text-embedding-3-small` | Modèle d'embedding à utiliser |
| `api_key` | string | No | - | Clé API (utilise la variable d'environnement par défaut) |
| `dimensions` | number | No | - | Dimensions d'embedding (pour les modèles qui le supportent) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `embeddings` | array | Tableau d'embeddings vectoriels |
| `model` | string | Modèle utilisé pour l'embedding |
| `dimensions` | number | Nombre de dimensions dans le vecteur d'embedding |
| `token_count` | number | Nombre de tokens traités |

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

### Extraction AI

`ai.extract`

Extraire des données structurées à partir de texte en utilisant l'AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Texte à partir duquel extraire les données |
| `schema` | object | Yes | - | Schéma JSON définissant les champs à extraire |
| `instructions` | string | No | - | Instructions supplémentaires pour l'extraction |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Fournisseur AI à utiliser |
| `model` | string | No | `gpt-4o-mini` | Modèle à utiliser pour l'extraction |
| `api_key` | string | No | - | Clé API (utilise la variable d'environnement par défaut) |
| `temperature` | number | No | `0` | Température d'échantillonnage (0-2) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | Données structurées extraites |
| `model` | string | Modèle utilisé pour l'extraction |
| `raw_response` | string | Réponse brute du modèle |

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

### Chat Ollama local

`ai.local_ollama.chat`

Discuter avec un LLM local via Ollama (completement hors ligne)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Le message a envoyer au LLM local |
| `model` | select (`llama2`, `llama2:13b`, `llama2:70b`, `mistral`, `mixtral`, `codellama`, `codellama:13b`, `phi`, `neural-chat`, `starling-lm`) | No | `llama2` | Le message a envoyer au LLM local |
| `temperature` | number | No | `0.7` | Temperature d'echantillonnage (0-2) |
| `system_message` | string | No | - | Message de role systeme (optionnel) |
| `ollama_url` | string | No | `http://localhost:11434` | Message de role systeme (optionnel) |
| `max_tokens` | number | No | - | URL du serveur Ollama |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | Tokens maximum dans la reponse (optionnel, depend du modele) |
| `model` | string | Reponse de l'operation |
| `context` | array | Reponse de l'operation |
| `total_duration` | number | Nom ou identifiant du modele |
| `load_duration` | number | Contexte de conversation pour les requetes suivantes |
| `prompt_eval_count` | number | Duree totale de traitement |
| `eval_count` | number | Duree de chargement du modele |

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

### Memoire IA

`ai.memory`

Memoire de conversation pour l'agent IA

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `memory_type` | select (`buffer`, `window`, `summary`) | Yes | `buffer` | Type de stockage memoire |
| `window_size` | number | No | `10` | Nombre de messages recents a conserver (pour la memoire fenetre) |
| `session_id` | string | No | - | Identifiant unique pour cette session de conversation |
| `initial_messages` | array | No | `[]` | Historique de conversation prechargee |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `memory_type` | string | Historique de conversation prechargee |
| `session_id` | string | Historique de conversation prechargee |
| `messages` | array | Type de memoire |
| `config` | object | Identifiant de session |

**Example:** Simple Buffer Memory

```yaml
memory_type: buffer
```

**Example:** Window Memory (last 5 messages)

```yaml
memory_type: window
window_size: 5
```

### Memoire d'entites

`ai.memory.entity`

Extraire et suivre les entites (personnes, lieux, concepts) des conversations

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
| `memory_type` | string | Nombre maximum d'entites a retenir |
| `session_id` | string | Nombre maximum d'entites a retenir |
| `entities` | object | Type de memoire (entite) |
| `relationships` | array | Identifiant de session |
| `config` | object | Entites suivies par type |

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

### Memoire Redis

`ai.memory.redis`

Memoire de conversation persistante utilisant le stockage Redis

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
| `memory_type` | string | Charger les messages existants de Redis a l'initialisation |
| `session_id` | string | Charger les messages existants de Redis a l'initialisation |
| `messages` | array | Type de memoire (redis) |
| `connected` | boolean | Identifiant de session |
| `config` | object | Historique des messages charges |

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

### Memoire vectorielle

`ai.memory.vector`

Memoire semantique utilisant des embeddings vectoriels pour la recuperation de contexte pertinent

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
| `memory_type` | string | Inclure l'horodatage et autres metadonnees avec les memoires |
| `session_id` | string | Inclure l'horodatage et autres metadonnees avec les memoires |
| `embedding_model` | string | Type de memoire (vecteur) |
| `config` | object | Identifiant de session |

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

### Modele IA

`ai.model`

Configuration du modele LLM pour l'agent IA

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.7` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |
| `max_tokens` | number | No | `4096` | Tokens maximum dans la reponse |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `provider` | string | Tokens maximum dans la reponse |
| `model` | string | Nom du fournisseur LLM |
| `config` | object | Nom du fournisseur LLM |

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

### Analyse de Vision

`ai.vision.analyze`

Analyser des images en utilisant des modèles de vision AI

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | No | - | Chemin local vers le fichier image |
| `image_url` | string | No | - | URL de l'image à analyser |
| `prompt` | string | No | `Describe this image in detail` | Que voulez-vous analyser ou demander sur l'image |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | Fournisseur d'IA pour l'analyse visuelle |
| `model` | string | No | `gpt-4o` | Modèle de vision à utiliser |
| `api_key` | string | No | - | Clé API (utilise la variable d'environnement par défaut) |
| `max_tokens` | number | No | `1000` | Nombre maximum de tokens dans la réponse |
| `detail` | select (`low`, `high`, `auto`) | No | `auto` | Niveau de détail de l'image (bas/élevé/auto) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `analysis` | string | Analyse AI de l'image |
| `model` | string | Modèle utilisé pour l'analyse |
| `provider` | string | Fournisseur utilisé pour l'analyse |
| `tokens_used` | number | Nombre de tokens utilisés |

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

Envoyer un message de chat a Anthropic Claude AI et obtenir une reponse

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Cle API Anthropic (defaut: env.ANTHROPIC_API_KEY) |
| `model` | string | No | `claude-sonnet-4-6` | Modele Claude a utiliser |
| `messages` | array | Yes | - | Tableau d'objets message avec role et contenu |
| `max_tokens` | number | No | `1024` | Contenu retourne par l'operation |
| `temperature` | number | No | `1.0` | Temperature d'echantillonnage (0-1). Des valeurs plus elevees rendent la sortie plus aleatoire |
| `system` | string | No | - | Prompt systeme pour guider le comportement de Claude |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Prompt systeme pour guider le comportement de Claude |
| `model` | string | Texte de reponse de Claude |
| `stop_reason` | string | Modele utilise pour la reponse |
| `usage` | object | Pourquoi le modele a arrete de generer (end_turn, max_tokens, etc) |

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

Envoyer un message de chat a Google Gemini AI et obtenir une reponse

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Cle API Google AI (defaut: env.GOOGLE_AI_API_KEY) |
| `model` | string | No | `gemini-2.5-pro` | Modele Gemini a utiliser |
| `prompt` | string | Yes | - | Le prompt texte a envoyer a Gemini |
| `temperature` | number | No | `1.0` | Controle l'aleatoire (0-2). Des valeurs plus elevees rendent la sortie plus aleatoire |
| `max_output_tokens` | number | No | `2048` | Nombre maximum de tokens dans la reponse |

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

Envoyer un message de chat aux modeles OpenAI GPT

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Le message a envoyer a GPT |
| `model` | select (`gpt-4o`, `gpt-4o-mini`, `gpt-4.1`, `gpt-4.1-mini`, `o3`, `o3-mini`, `o4-mini`, `gpt-4-turbo-preview`) | No | `gpt-4o` | Le message a envoyer a GPT |
| `temperature` | number | No | `0.7` | Temperature d'echantillonnage (0-2) |
| `max_tokens` | number | No | `1000` | Temperature d'echantillonnage (0-2) |
| `system_message` | string | No | - | Tokens maximum dans la reponse |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | Message de role systeme (optionnel) |
| `model` | string | Reponse de l'operation |
| `usage` | object | Reponse de l'operation |

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

### Generation d'images DALL-E

`api.openai.image`

Generer des images avec DALL-E

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | Description de l'image a generer |
| `size` | select (`256x256`, `512x512`, `1024x1024`, `1792x1024`, `1024x1792`) | No | `1024x1024` | Description de l'image a generer |
| `model` | select (`dall-e-3`, `dall-e-2`) | No | `dall-e-3` | Version du modele DALL-E |
| `quality` | select (`standard`, `hd`) | No | `standard` | Qualite de l'image (DALL-E 3 uniquement) |
| `n` | number | No | `1` | Nombre d'images a generer (1-10) |

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

### Agent IA

`llm.agent`

Agent IA autonome avec connexions multi-ports (modele, memoire, outils)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt_source` | select (`manual`, `auto`) | No | `manual` | D'ou obtenir le prompt de tache |
| `task` | string | No | - | La tache pour l'agent a completer. Utilisez {<!-- -->{input}<!-- -->} pour referencer les donnees en amont. |
| `prompt_path` | string | No | `{<!-- -->{input}<!-- -->}` | Chemin pour extraire le prompt de l'entree (ex: {<!-- -->{input.message}<!-- -->}) |
| `join_strategy` | select (`first`, `newline`, `separator`, `json`) | No | `first` | Comment gerer les entrees de tableau |
| `join_separator` | string | No | `

---

` | Separateur pour joindre les elements de tableau |
| `max_input_size` | number | No | `10000` | Caracteres maximum pour le prompt (previent le debordement) |
| `system_prompt` | string | No | `You are a helpful AI agent. Use the available tools to complete the task. Think step by step.` | Instructions pour le comportement de l'agent |
| `tools` | array | No | `[]` | Liste des IDs de modules (alternative a la connexion de noeuds d'outils) |
| `context` | object | No | `{}` | Liste des IDs de modules (alternative a la connexion de noeuds d'outils) |
| `max_iterations` | number | No | `10` | Donnees de contexte supplementaires pour l'agent |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Si l'agent a termine avec succes |
| `result` | string | Si l'agent a termine avec succes |
| `steps` | array | Si l'agent a termine avec succes |
| `tool_calls` | number | Le resultat final de l'agent |
| `tokens_used` | number | Liste des etapes prises par l'agent |

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
