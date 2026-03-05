# Sandbox

Execute JavaScript, Python, or shell commands in isolated environments.

**3 modules**

| Module | Description |
|--------|-------------|
| [JavaScript चलाएं](#javascript-चलाएं) | Node.js के माध्यम से टाइमआउट के साथ JavaScript कोड चलाएं |
| [Python चलाएं](#python-चलाएं) | सबप्रोसेस में टाइमआउट के साथ Python कोड चलाएं |
| [शेल चलाएं](#शेल-चलाएं) | टाइमआउट और पर्यावरण नियंत्रण के साथ शेल कमांड चलाएं |

## Modules

### JavaScript चलाएं

`sandbox.execute_js`

Node.js के माध्यम से टाइमआउट के साथ JavaScript कोड चलाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Node.js के माध्यम से चलाने के लिए JavaScript कोड |
| `timeout` | number | No | `10` | सेकंड में निष्पादन टाइमआउट |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | स्क्रिप्ट से मानक आउटपुट |
| `stderr` | string | स्क्रिप्ट से मानक त्रुटि |
| `exit_code` | number | प्रक्रिया निकास कोड (0 = सफलता) |
| `execution_time_ms` | number | मिलीसेकंड में निष्पादन समय |

**Example:** Simple console.log

```yaml
code: console.log("Hello, World!");
timeout: 10
```

**Example:** JSON processing

```yaml
code: const data = { name: "test", value: 42 };
console.log(JSON.stringify(data, null, 2));
```

### Python चलाएं

`sandbox.execute_python`

सबप्रोसेस में टाइमआउट के साथ Python कोड चलाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | चलाने के लिए Python कोड |
| `timeout` | number | No | `10` | सेकंड में निष्पादन टाइमआउट |
| `allowed_modules` | array | No | - | इम्पोर्ट करने योग्य मॉड्यूल की श्वेतसूची (सभी की अनुमति के लिए खाली छोड़ें) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | स्क्रिप्ट से मानक आउटपुट |
| `stderr` | string | स्क्रिप्ट से मानक त्रुटि |
| `exit_code` | number | प्रक्रिया निकास कोड (0 = सफलता) |
| `execution_time_ms` | number | मिलीसेकंड में निष्पादन समय |

**Example:** Simple print

```yaml
code: print("Hello, World!")
timeout: 10
```

**Example:** Math calculation

```yaml
code: import math
print(math.pi)
allowed_modules: ["math"]
```

### शेल चलाएं

`sandbox.execute_shell`

टाइमआउट और पर्यावरण नियंत्रण के साथ शेल कमांड चलाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `command` | string | Yes | - | चलाने के लिए शेल कमांड |
| `timeout` | number | No | `10` | सेकंड में निष्पादन टाइमआउट |
| `working_dir` | string | No | - | कमांड के लिए कार्य निर्देशिका |
| `env` | object | No | - | सेट करने के लिए अतिरिक्त पर्यावरण वेरिएबल्स (वर्तमान पर्यावरण के साथ मिलाए गए) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | कमांड से मानक आउटपुट |
| `stderr` | string | कमांड से मानक त्रुटि |
| `exit_code` | number | प्रक्रिया निकास कोड (0 = सफलता) |
| `execution_time_ms` | number | मिलीसेकंड में निष्पादन समय |

**Example:** Simple echo

```yaml
command: echo "Hello, World!"
timeout: 10
```

**Example:** List files with custom working directory

```yaml
command: ls -la
working_dir: /tmp
```
