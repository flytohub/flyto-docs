# AI & LLM

AI model integration, text generation, embeddings, and autonomous agents.

**18 modules**

| Module | Description |
|--------|-------------|
| [स्वायत्त एजेंट](#स्वायत्त-एजेंट) | मेमोरी और लक्ष्य-उन्मुख व्यवहार वाला स्व-निर्देशित AI एजेंट |
| [चेन एजेंट](#चेन-एजेंट) | कई चरणों के साथ अनुक्रमिक AI प्रोसेसिंग चेन |
| [टूल उपयोग एजेंट](#टूल-उपयोग-एजेंट) | AI एजेंट जो टूल्स/फंक्शन्स को कॉल कर सकता है |
| [टेक्स्ट एम्बेडिंग](#टेक्स्ट-एम्बेडिंग) | AI मॉडल का उपयोग करके टेक्स्ट से वेक्टर एम्बेडिंग उत्पन्न करें |
| [AI एक्सट्रैक्ट](#ai-एक्सट्रैक्ट) | AI का उपयोग करके टेक्स्ट से संरचित डेटा निकालें |
| [लोकल Ollama चैट](#लोकल-ollama-चैट) | Ollama के माध्यम से लोकल LLM के साथ चैट करें (पूर्णतः ऑफ़लाइन) |
| [AI मेमोरी](#ai-मेमोरी) | AI एजेंट के लिए वार्तालाप मेमोरी |
| [एंटिटी मेमोरी](#एंटिटी-मेमोरी) | वार्तालाप से एंटिटी (लोग, स्थान, अवधारणाएं) निकालें और ट्रैक करें |
| [Redis मेमोरी](#redis-मेमोरी) | Redis स्टोरेज का उपयोग करके स्थायी वार्तालाप मेमोरी |
| [वेक्टर मेमोरी](#वेक्टर-मेमोरी) | प्रासंगिक संदर्भ पुनर्प्राप्ति के लिए वेक्टर एम्बेडिंग का उपयोग करते हुए सिमेंटिक मेमोरी |
| [AI मॉडल](#ai-मॉडल) | AI एजेंट के लिए LLM मॉडल कॉन्फ़िगरेशन |
| [AI Tool](#ai-tool) | Expose a module as a tool for AI Agent |
| [विज़न विश्लेषण](#विज़न-विश्लेषण) | AI विज़न मॉडल का उपयोग करके छवियों का विश्लेषण करें |
| [Claude चैट](#claude-चैट) | Anthropic Claude AI को चैट संदेश भेजें और प्रतिक्रिया प्राप्त करें |
| [Google Gemini चैट](#google-gemini-चैट) | Google Gemini AI को चैट संदेश भेजें और प्रतिक्रिया प्राप्त करें |
| [OpenAI चैट](#openai-चैट) | OpenAI GPT मॉडल्स को चैट संदेश भेजें |
| [DALL-E इमेज जनरेशन](#dall-e-इमेज-जनरेशन) | DALL-E का उपयोग करके इमेज जनरेट करें |
| [AI एजेंट](#ai-एजेंट) | मल्टी-पोर्ट कनेक्शन (मॉडल, मेमोरी, टूल्स) वाला स्वायत्त AI एजेंट |

## Modules

### स्वायत्त एजेंट

`agent.autonomous`

मेमोरी और लक्ष्य-उन्मुख व्यवहार वाला स्व-निर्देशित AI एजेंट

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `goal` | string | Yes | - | एजेंट के लिए प्राप्त करने का लक्ष्य |
| `context` | string | No | - | एजेंट के लिए प्राप्त करने का लक्ष्य |
| `max_iterations` | number | No | `5` | अतिरिक्त संदर्भ या प्रतिबंध |
| `llm_provider` | select (`openai`, `ollama`) | No | `openai` | अधिकतम तर्क चरण |
| `model` | string | No | `gpt-4-turbo-preview` | मॉडल नाम (जैसे, gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | मॉडल नाम (जैसे, gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | Ollama सर्वर URL (केवल ollama प्रदाता के लिए) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | रचनात्मकता स्तर (0-2) |
| `thoughts` | array | ऑपरेशन परिणाम |
| `iterations` | number | ऑपरेशन परिणाम |
| `goal_achieved` | boolean | एजेंट तर्क चरण |

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

### चेन एजेंट

`agent.chain`

कई चरणों के साथ अनुक्रमिक AI प्रोसेसिंग चेन

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `input` | string | Yes | - | चेन के लिए प्रारंभिक इनपुट |
| `chain_steps` | array | Yes | - | चेन के लिए प्रारंभिक इनपुट |
| `llm_provider` | select (`openai`, `ollama`) | No | `openai` | प्रोसेसिंग चरणों की सरणी (प्रत्येक एक प्रॉम्प्ट टेम्पलेट है) |
| `model` | string | No | `gpt-4-turbo-preview` | मॉडल नाम (जैसे, gpt-4, llama2, mistral) |
| `ollama_url` | string | No | `http://localhost:11434` | मॉडल नाम (जैसे, gpt-4, llama2, mistral) |
| `temperature` | number | No | `0.7` | Ollama सर्वर URL (केवल ollama प्रदाता के लिए) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | रचनात्मकता स्तर (0-2) |
| `intermediate_results` | array | ऑपरेशन परिणाम |
| `steps_completed` | number | ऑपरेशन परिणाम |

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

### टूल उपयोग एजेंट

`agent.tool_use`

AI एजेंट जो टूल्स/फंक्शन्स को कॉल कर सकता है

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | एजेंट के लिए लक्ष्य या कार्य |
| `tools` | array | Yes | - | टूल परिभाषाओं की सूची [{नाम, विवरण, पैरामीटर्स}] |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | एजेंट के लिए LLM प्रदाता |
| `model` | string | No | `gpt-4o` | उपयोग करने के लिए मॉडल |
| `api_key` | string | No | - | API कुंजी (पर्यावरण चर पर वापस गिरता है) |
| `max_iterations` | number | No | `10` | टूल कॉल राउंड्स की अधिकतम संख्या |
| `system_prompt` | string | No | - | एजेंट को मार्गदर्शन करने के लिए वैकल्पिक सिस्टम प्रॉम्प्ट |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | एजेंट का अंतिम उत्तर |
| `tool_calls` | array | निष्पादन के दौरान किए गए सभी टूल कॉल्स |
| `iterations` | number | पूर्ण किए गए पुनरावृत्तियों की संख्या |
| `model` | string | उपयोग किया गया मॉडल |

**Example:** File Processing Agent

```yaml
prompt: Read the config file and update the version number
tools: [{"name": "read_file", "description": "Read contents of a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}}, "required": ["path"]}}, {"name": "write_file", "description": "Write contents to a file", "parameters": {"type": "object", "properties": {"path": {"type": "string", "description": "File path"}, "content": {"type": "string", "description": "File content"}}, "required": ["path", "content"]}}]
provider: openai
model: gpt-4o
max_iterations: 5
```

### टेक्स्ट एम्बेडिंग

`ai.embed`

AI मॉडल का उपयोग करके टेक्स्ट से वेक्टर एम्बेडिंग उत्पन्न करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | एम्बेड करने के लिए टेक्स्ट |
| `provider` | select (`openai`, `local`) | No | `openai` | एम्बेडिंग के लिए AI प्रदाता |
| `model` | string | No | `text-embedding-3-small` | उपयोग करने के लिए एम्बेडिंग मॉडल |
| `api_key` | string | No | - | API कुंजी (पर्यावरण चर पर निर्भर) |
| `dimensions` | number | No | - | एम्बेडिंग आयाम (उन मॉडलों के लिए जो इसे समर्थन करते हैं) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `embeddings` | array | वेक्टर एम्बेडिंग ऐरे |
| `model` | string | एम्बेडिंग के लिए उपयोग किया गया मॉडल |
| `dimensions` | number | एम्बेडिंग वेक्टर में आयामों की संख्या |
| `token_count` | number | प्रोसेस किए गए टोकन की संख्या |

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

### AI एक्सट्रैक्ट

`ai.extract`

AI का उपयोग करके टेक्स्ट से संरचित डेटा निकालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | जिस टेक्स्ट से डेटा निकालना है |
| `schema` | object | Yes | - | निकालने के लिए फ़ील्ड को परिभाषित करने वाली JSON स्कीमा |
| `instructions` | string | No | - | अतिरिक्त निकालने के निर्देश |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | उपयोग करने के लिए AI प्रदाता |
| `model` | string | No | `gpt-4o-mini` | निकालने के लिए उपयोग करने के लिए मॉडल |
| `api_key` | string | No | - | API कुंजी (पर्यावरण चर पर निर्भर) |
| `temperature` | number | No | `0` | सैंपलिंग तापमान (0-2) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `extracted` | object | निकाला गया संरचित डेटा |
| `model` | string | निकालने के लिए उपयोग किया गया मॉडल |
| `raw_response` | string | कच्चा मॉडल प्रतिक्रिया |

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

### लोकल Ollama चैट

`ai.local_ollama.chat`

Ollama के माध्यम से लोकल LLM के साथ चैट करें (पूर्णतः ऑफ़लाइन)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | लोकल LLM को भेजने के लिए संदेश |
| `model` | select (`llama2`, `llama2:13b`, `llama2:70b`, `mistral`, `mixtral`, `codellama`, `codellama:13b`, `phi`, `neural-chat`, `starling-lm`) | No | `llama2` | लोकल LLM को भेजने के लिए संदेश |
| `temperature` | number | No | `0.7` | सैंपलिंग तापमान (0-2) |
| `system_message` | string | No | - | सिस्टम भूमिका संदेश (वैकल्पिक) |
| `ollama_url` | string | No | `http://localhost:11434` | सिस्टम भूमिका संदेश (वैकल्पिक) |
| `max_tokens` | number | No | - | Ollama सर्वर URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | प्रतिक्रिया में अधिकतम टोकन (वैकल्पिक, मॉडल पर निर्भर) |
| `model` | string | ऑपरेशन से प्रतिक्रिया |
| `context` | array | ऑपरेशन से प्रतिक्रिया |
| `total_duration` | number | मॉडल नाम या पहचानकर्ता |
| `load_duration` | number | फॉलो-अप अनुरोधों के लिए वार्तालाप संदर्भ |
| `prompt_eval_count` | number | कुल प्रोसेसिंग अवधि |
| `eval_count` | number | मॉडल लोडिंग अवधि |

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

### AI मेमोरी

`ai.memory`

AI एजेंट के लिए वार्तालाप मेमोरी

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `memory_type` | select (`buffer`, `window`, `summary`) | Yes | `buffer` | मेमोरी स्टोरेज का प्रकार |
| `window_size` | number | No | `10` | रखने के लिए हाल के संदेशों की संख्या (विंडो मेमोरी के लिए) |
| `session_id` | string | No | - | इस वार्तालाप सेशन के लिए अद्वितीय पहचानकर्ता |
| `initial_messages` | array | No | `[]` | पूर्व-लोडेड वार्तालाप इतिहास |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `memory_type` | string | पूर्व-लोडेड वार्तालाप इतिहास |
| `session_id` | string | पूर्व-लोडेड वार्तालाप इतिहास |
| `messages` | array | मेमोरी का प्रकार |
| `config` | object | सेशन पहचानकर्ता |

**Example:** Simple Buffer Memory

```yaml
memory_type: buffer
```

**Example:** Window Memory (last 5 messages)

```yaml
memory_type: window
window_size: 5
```

### एंटिटी मेमोरी

`ai.memory.entity`

वार्तालाप से एंटिटी (लोग, स्थान, अवधारणाएं) निकालें और ट्रैक करें

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
| `memory_type` | string | याद रखने के लिए अधिकतम एंटिटी संख्या |
| `session_id` | string | याद रखने के लिए अधिकतम एंटिटी संख्या |
| `entities` | object | मेमोरी का प्रकार (entity) |
| `relationships` | array | सेशन पहचानकर्ता |
| `config` | object | प्रकार के अनुसार ट्रैक की गई एंटिटी |

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

### Redis मेमोरी

`ai.memory.redis`

Redis स्टोरेज का उपयोग करके स्थायी वार्तालाप मेमोरी

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
| `memory_type` | string | प्रारंभ पर Redis से मौजूदा संदेश लोड करें |
| `session_id` | string | प्रारंभ पर Redis से मौजूदा संदेश लोड करें |
| `messages` | array | मेमोरी का प्रकार (redis) |
| `connected` | boolean | सेशन पहचानकर्ता |
| `config` | object | लोड किया गया संदेश इतिहास |

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

### वेक्टर मेमोरी

`ai.memory.vector`

प्रासंगिक संदर्भ पुनर्प्राप्ति के लिए वेक्टर एम्बेडिंग का उपयोग करते हुए सिमेंटिक मेमोरी

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
| `memory_type` | string | मेमोरी के साथ टाइमस्टैम्प और अन्य मेटाडेटा शामिल करें |
| `session_id` | string | मेमोरी के साथ टाइमस्टैम्प और अन्य मेटाडेटा शामिल करें |
| `embedding_model` | string | मेमोरी का प्रकार (vector) |
| `config` | object | सेशन पहचानकर्ता |

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

### AI मॉडल

`ai.model`

AI एजेंट के लिए LLM मॉडल कॉन्फ़िगरेशन

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.7` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |
| `max_tokens` | number | No | `4096` | प्रतिक्रिया में अधिकतम टोकन |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `provider` | string | प्रतिक्रिया में अधिकतम टोकन |
| `model` | string | LLM प्रदाता नाम |
| `config` | object | LLM प्रदाता नाम |

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

### विज़न विश्लेषण

`ai.vision.analyze`

AI विज़न मॉडल का उपयोग करके छवियों का विश्लेषण करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | No | - | छवि फ़ाइल का स्थानीय पथ |
| `image_url` | string | No | - | विश्लेषण के लिए छवि का URL |
| `prompt` | string | No | `Describe this image in detail` | छवि के बारे में क्या विश्लेषण या पूछना है |
| `provider` | select (`openai`, `anthropic`) | No | `openai` | विज़न विश्लेषण के लिए AI प्रदाता |
| `model` | string | No | `gpt-4o` | उपयोग करने के लिए विज़न मॉडल |
| `api_key` | string | No | - | API कुंजी (पर्यावरण चर पर निर्भर) |
| `max_tokens` | number | No | `1000` | प्रतिक्रिया में अधिकतम टोकन |
| `detail` | select (`low`, `high`, `auto`) | No | `auto` | छवि का विवरण स्तर (कम/उच्च/स्वचालित) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `analysis` | string | छवि का AI विश्लेषण |
| `model` | string | विश्लेषण के लिए उपयोग किया गया मॉडल |
| `provider` | string | विश्लेषण के लिए उपयोग किया गया प्रदाता |
| `tokens_used` | number | उपयोग किए गए टोकन की संख्या |

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

### Claude चैट

`api.anthropic.chat`

Anthropic Claude AI को चैट संदेश भेजें और प्रतिक्रिया प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Anthropic API कुंजी (डिफ़ॉल्ट env.ANTHROPIC_API_KEY) |
| `model` | string | No | `claude-3-5-sonnet-20241022` | उपयोग करने के लिए Claude मॉडल |
| `messages` | array | Yes | - | भूमिका और सामग्री के साथ संदेश ऑब्जेक्ट की सरणी |
| `max_tokens` | number | No | `1024` | ऑपरेशन द्वारा लौटाई गई सामग्री |
| `temperature` | number | No | `1.0` | सैंपलिंग तापमान (0-1)। उच्च मान आउटपुट को अधिक रैंडम बनाते हैं |
| `system` | string | No | - | Claude व्यवहार को निर्देशित करने के लिए सिस्टम प्रॉम्प्ट |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `content` | string | Claude व्यवहार को निर्देशित करने के लिए सिस्टम प्रॉम्प्ट |
| `model` | string | Claude प्रतिक्रिया टेक्स्ट |
| `stop_reason` | string | प्रतिक्रिया के लिए उपयोग किया गया मॉडल |
| `usage` | object | मॉडल ने जनरेट करना क्यों बंद किया (end_turn, max_tokens, आदि) |

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

### Google Gemini चैट

`api.google_gemini.chat`

Google Gemini AI को चैट संदेश भेजें और प्रतिक्रिया प्राप्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `api_key` | string | No | - | Google AI API कुंजी (डिफ़ॉल्ट env.GOOGLE_AI_API_KEY) |
| `model` | string | No | `gemini-1.5-pro` | उपयोग करने के लिए Gemini मॉडल |
| `prompt` | string | Yes | - | Gemini को भेजने के लिए टेक्स्ट प्रॉम्प्ट |
| `temperature` | number | No | `1.0` | रैंडमनेस नियंत्रित करता है (0-2)। उच्च मान आउटपुट को अधिक रैंडम बनाते हैं |
| `max_output_tokens` | number | No | `2048` | प्रतिक्रिया में अधिकतम टोकन संख्या |

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

### OpenAI चैट

`api.openai.chat`

OpenAI GPT मॉडल्स को चैट संदेश भेजें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | GPT को भेजने के लिए संदेश |
| `model` | select (`gpt-4-turbo-preview`, `gpt-4`, `gpt-3.5-turbo`) | No | `gpt-4-turbo-preview` | GPT को भेजने के लिए संदेश |
| `temperature` | number | No | `0.7` | सैंपलिंग तापमान (0-2) |
| `max_tokens` | number | No | `1000` | सैंपलिंग तापमान (0-2) |
| `system_message` | string | No | - | प्रतिक्रिया में अधिकतम टोकन |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `response` | string | सिस्टम भूमिका संदेश (वैकल्पिक) |
| `model` | string | ऑपरेशन से प्रतिक्रिया |
| `usage` | object | ऑपरेशन से प्रतिक्रिया |

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

### DALL-E इमेज जनरेशन

`api.openai.image`

DALL-E का उपयोग करके इमेज जनरेट करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt` | string | Yes | - | जनरेट करने के लिए इमेज का विवरण |
| `size` | select (`256x256`, `512x512`, `1024x1024`, `1792x1024`, `1024x1792`) | No | `1024x1024` | जनरेट करने के लिए इमेज का विवरण |
| `model` | select (`dall-e-3`, `dall-e-2`) | No | `dall-e-3` | DALL-E मॉडल संस्करण |
| `quality` | select (`standard`, `hd`) | No | `standard` | इमेज गुणवत्ता (केवल DALL-E 3) |
| `n` | number | No | `1` | जनरेट करने के लिए इमेज की संख्या (1-10) |

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

### AI एजेंट

`llm.agent`

मल्टी-पोर्ट कनेक्शन (मॉडल, मेमोरी, टूल्स) वाला स्वायत्त AI एजेंट

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `prompt_source` | select (`manual`, `auto`) | No | `manual` | कार्य प्रॉम्प्ट कहां से प्राप्त करें |
| `task` | string | No | - | एजेंट के लिए पूर्ण करने का कार्य। अपस्ट्रीम डेटा संदर्भित करने के लिए {<!-- -->{input}<!-- -->} उपयोग करें। |
| `prompt_path` | string | No | `{<!-- -->{input}<!-- -->}` | इनपुट से प्रॉम्प्ट निकालने का पथ (जैसे, {<!-- -->{input.message}<!-- -->}) |
| `join_strategy` | select (`first`, `newline`, `separator`, `json`) | No | `first` | सरणी इनपुट कैसे संभालें |
| `join_separator` | string | No | `

---

` | सरणी आइटम जॉइन करने के लिए सेपरेटर |
| `max_input_size` | number | No | `10000` | प्रॉम्प्ट के लिए अधिकतम अक्षर (ओवरफ्लो रोकता है) |
| `system_prompt` | string | No | `You are a helpful AI agent. Use the available tools to complete the task. Think step by step.` | एजेंट व्यवहार के लिए निर्देश |
| `tools` | array | No | `[]` | मॉड्यूल IDs की सूची (टूल नोड्स कनेक्ट करने का विकल्प) |
| `context` | object | No | `{}` | मॉड्यूल IDs की सूची (टूल नोड्स कनेक्ट करने का विकल्प) |
| `max_iterations` | number | No | `10` | एजेंट के लिए अतिरिक्त संदर्भ डेटा |
| `provider` | select (`openai`, `anthropic`, `ollama`) | No | `openai` | AI model provider |
| `model` | string | No | `gpt-4o` | Specific model to use |
| `temperature` | number | No | `0.3` | Creativity level (0=deterministic, 1=creative) |
| `api_key` | string | No | - | API key (defaults to provider env var) |
| `base_url` | string | No | - | Custom API base URL (for Ollama or proxies) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | क्या एजेंट सफलतापूर्वक पूर्ण हुआ |
| `result` | string | क्या एजेंट सफलतापूर्वक पूर्ण हुआ |
| `steps` | array | क्या एजेंट सफलतापूर्वक पूर्ण हुआ |
| `tool_calls` | number | एजेंट से अंतिम परिणाम |
| `tokens_used` | number | एजेंट द्वारा उठाए गए चरणों की सूची |

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
