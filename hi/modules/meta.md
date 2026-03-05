# Meta

Module generation, listing, testing, and documentation.

**2 modules**

| Module | Description |
|--------|-------------|
| [उपलब्ध मॉड्यूल सूचीबद्ध करें](#उपलब्ध-मॉड्यूल-सूचीबद्ध-करें) | रजिस्ट्री में सभी उपलब्ध मॉड्यूल सूचीबद्ध करें |
| [मॉड्यूल डॉक्यूमेंटेशन अपडेट करें](#मॉड्यूल-डॉक्यूमेंटेशन-अपडेट-करें) | रजिस्ट्री से MODULES.md डॉक्यूमेंटेशन जनरेट या अपडेट करें |

## Modules

### उपलब्ध मॉड्यूल सूचीबद्ध करें

`meta.modules.list`

रजिस्ट्री में सभी उपलब्ध मॉड्यूल सूचीबद्ध करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `category` | string | No | - | श्रेणी द्वारा मॉड्यूल फ़िल्टर करें (जैसे, browser, data, ai) |
| `tags` | array | No | - | श्रेणी द्वारा मॉड्यूल फ़िल्टर करें (जैसे, browser, data, ai) |
| `include_params` | boolean | No | `True` | टैग्स द्वारा मॉड्यूल फ़िल्टर करें |
| `include_output` | boolean | No | `True` | आउटपुट में पैरामीटर स्कीमा शामिल करें |
| `format` | select (`json`, `markdown`, `compact`) | No | `json` | प्रतिक्रिया में आउटपुट स्कीमा शामिल करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `modules` | array | पंजीकृत मॉड्यूल की सूची |
| `count` | number | पैराम्स स्कीमा |
| `formatted` | string | आउटपुट स्कीमा |

**Example:** List all modules

```yaml
```

**Example:** List browser modules only

```yaml
category: browser
include_params: true
```

**Example:** List AI modules as markdown

```yaml
tags: ["ai", "llm"]
format: markdown
```

**Example:** Compact list for AI prompts

```yaml
format: compact
```

### मॉड्यूल डॉक्यूमेंटेशन अपडेट करें

`meta.modules.update_docs`

रजिस्ट्री से MODULES.md डॉक्यूमेंटेशन जनरेट या अपडेट करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | No | `docs/MODULES.md` | MODULES.md फ़ाइल लिखने का पथ |
| `include_examples` | boolean | No | `True` | डॉक्यूमेंटेशन में उपयोग उदाहरण शामिल करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `file_path` | string | डॉक्यूमेंटेशन में उपयोग उदाहरण शामिल करें |
| `modules_count` | number | फ़ाइल पथ |
| `categories` | array | फ़ाइल पथ |

**Example:** Update module documentation

```yaml
output_path: docs/MODULES.md
```
