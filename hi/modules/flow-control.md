# Flow Control

Branching, loops, parallelism, subflows, triggers, and error handling.

**24 modules**

| Module | Description |
|--------|-------------|
| [बैच प्रोसेस](#बैच-प्रोसेस) | आइटम्स को बैच में प्रोसेस करें, जिसमें आकार को कॉन्फ़िगर किया जा सकता है |
| [ब्रांच](#ब्रांच) | एक्सप्रेशन मूल्यांकन के आधार पर सशर्त ब्रांचिंग |
| [ब्रेकपॉइंट](#ब्रेकपॉइंट) | मानवीय अनुमोदन या इनपुट के लिए वर्कफ़्लो निष्पादन रोकें |
| [सर्किट ब्रेकर](#सर्किट-ब्रेकर) | कैस्केडिंग विफलताओं को रोकने के लिए सर्किट ब्रेकर पैटर्न |
| [कंटेनर](#कंटेनर) | जटिल वर्कफ़्लो को व्यवस्थित करने के लिए एम्बेडेड सबफ्लो कंटेनर |
| [डिबाउंस](#डिबाउंस) | तेज़ी से दोहराए गए कॉल को रोकने के लिए डिबाउंस निष्पादन |
| [समाप्त](#समाप्त) | स्पष्ट वर्कफ़्लो समाप्ति नोड |
| [त्रुटि हैंडलर](#त्रुटि-हैंडलर) | उपरी नोड्स से त्रुटियों को पकड़ता और संभालता है |
| [त्रुटि वर्कफ़्लो ट्रिगर](#त्रुटि-वर्कफ़्लो-ट्रिगर) | त्रुटि वर्कफ़्लोज़ के लिए प्रवेश बिंदु - जब कोई अन्य वर्कफ़्लो विफल होता है तो ट्रिगर होता है |
| [प्रत्येक के लिए](#प्रत्येक-के-लिए) | सूची पर पुनरावृत्ति करें और प्रत्येक आइटम के लिए चरण निष्पादित करें |
| [फ़ोर्क](#फ़ोर्क) | समानांतर शाखाओं में निष्पादन विभाजित करें |
| [गोटो](#गोटो) | दूसरे चरण पर बिना शर्त छलांग |
| [वर्कफ़्लो बुलाएं](#वर्कफ़्लो-बुलाएं) | एक बाहरी वर्कफ़्लो फ़ाइल निष्पादित करें |
| [जॉइन](#जॉइन) | समानांतर शाखाओं के पूर्ण होने की प्रतीक्षा करें |
| [लूप](#लूप) | आउटपुट पोर्ट राउटिंग का उपयोग करके N बार चरण दोहराएं |
| [मर्ज](#मर्ज) | कई इनपुट को एक आउटपुट में मर्ज करें |
| [समानांतर](#समानांतर) | विभिन्न रणनीतियों के साथ समानांतर में कई कार्य निष्पादित करें |
| [दर सीमा](#दर-सीमा) | टोकन बकेट या स्लाइडिंग विंडो का उपयोग करके दर सीमा निष्पादन |
| [पुनः प्रयास करें](#पुनः-प्रयास-करें) | विफल ऑपरेशन्स को पुनः प्रयास करें, कॉन्फ़िगर करने योग्य बैकऑफ़ के साथ |
| [प्रारंभ](#प्रारंभ) | स्पष्ट वर्कफ़्लो प्रारंभ नोड |
| [सबफ्लो](#सबफ्लो) | बाहरी वर्कफ़्लो का संदर्भ लें और निष्पादित करें |
| [स्विच](#स्विच) | मान मिलान के आधार पर बहु-मार्ग ब्रांचिंग |
| [थ्रॉटल](#थ्रॉटल) | न्यूनतम अंतराल के साथ निष्पादन दर को थ्रॉटल करें |
| [ट्रिगर](#ट्रिगर) | वर्कफ़्लो प्रवेश बिंदु - मैनुअल, वेबहुक, शेड्यूल, या इवेंट |

## Modules

### बैच प्रोसेस

`flow.batch`

आइटम्स को बैच में प्रोसेस करें, जिसमें आकार को कॉन्फ़िगर किया जा सकता है

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | array | Yes | - | Array of items to process. Can be numbers, strings, or objects. |
| `batch_size` | number | Yes | `10` | प्रति बैच आइटम्स की संख्या |
| `delay_ms` | number | No | `0` | बैचों के बीच प्रतीक्षा करने के लिए मिलीसेकंड (दर सीमित करने के लिए) |
| `continue_on_error` | boolean | No | `False` | यदि एक विफल हो जाता है तो शेष बैचों को प्रोसेस करना जारी रखें |
| `parallel_batches` | number | No | `1` | यदि एक विफल हो जाता है तो शेष बैचों को प्रोसेस करना जारी रखें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | समानांतर में प्रोसेस करने के लिए बैचों की संख्या (क्रमिक के लिए 1) |
| `batch` | array | रूटिंग के लिए इवेंट (बैच/पूरा/त्रुटि) |
| `batch_index` | number | रूटिंग के लिए इवेंट (बैच/पूरा/त्रुटि) |
| `total_batches` | number | वर्तमान बैच आइटम्स |
| `total_items` | number | वर्तमान बैच इंडेक्स (0-आधारित) |
| `is_last_batch` | boolean | कुल बैचों की संख्या |
| `progress` | object | कुल आइटम्स की संख्या |

**Example:** Example

```yaml
items: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
batch_size: 10
```

**Example:** Example

```yaml
items: ${input.records}
batch_size: 100
delay_ms: 1000
```

**Example:** Example

```yaml
items: ${input.data}
batch_size: 50
parallel_batches: 3
continue_on_error: true
```

### ब्रांच

`flow.branch`

एक्सप्रेशन मूल्यांकन के आधार पर सशर्त ब्रांचिंग

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | string | Yes | - | Expression to evaluate (supports ==, !=, >, <, >=, <=, contains) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | राउटिंग इवेंट (true/false/error) |
| `outputs` | object | पोर्ट द्वारा आउटपुट मान |
| `result` | boolean | ब्रांच परिणाम |
| `condition` | string | शर्त मान |
| `resolved_condition` | string | शर्त मूल्यांकन परिणाम |

**Example:** Example

```yaml
condition: ${search_step.count} > 0
```

**Example:** Example

```yaml
condition: ${api_call.status} == success
```

### ब्रेकपॉइंट

`flow.breakpoint`

मानवीय अनुमोदन या इनपुट के लिए वर्कफ़्लो निष्पादन रोकें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | No | `Approval Required` | Title displayed to approvers |
| `description` | string | No | - | Optional description text |
| `timeout_seconds` | number | No | `0` | Maximum wait time (0 for no timeout) |
| `required_approvers` | array | Yes | - | Array of data items to process |
| `approval_mode` | select (`single`, `all`, `majority`, `first`) | No | `single` | How approvals are counted |
| `custom_fields` | array | Yes | - | Array of data items to process |
| `include_context` | boolean | No | `True` | Whether to include execution context |
| `auto_approve_condition` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | राउटिंग इवेंट (approved/rejected/timeout) |
| `breakpoint_id` | string | ब्रेकपॉइंट ID |
| `status` | string | स्थिति |
| `approved_by` | array | अनुमोदनकर्ता |
| `rejected_by` | array | अस्वीकृतकर्ता |
| `custom_inputs` | object | कस्टम इनपुट मान |
| `comments` | array | समीक्षा टिप्पणियां |
| `resolved_at` | string | हल किया गया समय |
| `wait_duration_ms` | integer | प्रतीक्षा अवधि (ms) |

**Example:** Example

```yaml
title: Approve data export
description: Please review and approve the data export
```

**Example:** Example

```yaml
title: Manager Approval Required
description: Large transaction requires manager approval
required_approvers: ["manager@example.com"]
timeout_seconds: 3600
```

**Example:** Example

```yaml
title: Adjustment Required
custom_fields: [{"name": "reason", "label": "Reason", "type": "text", "required": true}, {"name": "amount", "label": "Amount", "type": "number", "required": true}]
```

### सर्किट ब्रेकर

`flow.circuit_breaker`

कैस्केडिंग विफलताओं को रोकने के लिए सर्किट ब्रेकर पैटर्न

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `failure_threshold` | number | Yes | `5` | सर्किट खोलने से पहले विफलताओं की संख्या |
| `reset_timeout_ms` | number | No | `60000` | सर्किट के आधा खुला होने से पहले का समय मिलीसेकंड में |
| `half_open_max` | number | No | `1` | आधा खुले स्थिति में अनुमत अधिकतम अनुरोध |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | रूटिंग के लिए इवेंट (अनुमत/अस्वीकृत/आधा खुला) |
| `state` | string | सर्किट की स्थिति (बंद/खुला/आधा खुला) |
| `failure_count` | number | लगातार विफलताओं की संख्या |
| `last_failure_time_ms` | number | मिलीसेकंड में अंतिम विफलता का समय |
| `time_until_half_open_ms` | number | सर्किट के आधा खुला होने तक का समय मिलीसेकंड में |

**Example:** Example

```yaml
failure_threshold: 5
reset_timeout_ms: 60000
```

**Example:** Example

```yaml
failure_threshold: 2
reset_timeout_ms: 10000
half_open_max: 1
```

**Example:** Example

```yaml
failure_threshold: 20
reset_timeout_ms: 120000
half_open_max: 3
```

### कंटेनर

`flow.container`

जटिल वर्कफ़्लो को व्यवस्थित करने के लिए एम्बेडेड सबफ्लो कंटेनर

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `subflow` | object | No | `{'nodes': [], 'edges': []}` | Embedded workflow definition with nodes and edges |
| `inherit_context` | boolean | No | `True` | Whether to inherit variables from parent workflow |
| `isolated_variables` | array | Yes | - | Array of data items to process |
| `export_variables` | array | Yes | - | Array of data items to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | राउटिंग इवेंट (success/error) |
| `outputs` | object | पोर्ट द्वारा आउटपुट मान |
| `subflow_result` | object | सबफ्लो परिणाम |
| `exported_variables` | object | निर्यातित वेरिएबल्स |
| `node_count` | integer | नोड गणना |
| `execution_time_ms` | number | निष्पादन समय (ms) |

**Example:** Example

```yaml
subflow: {"nodes": [], "edges": []}
inherit_context: true
```

**Example:** Example

```yaml
subflow: {"nodes": [], "edges": []}
inherit_context: false
```

### डिबाउंस

`flow.debounce`

तेज़ी से दोहराए गए कॉल को रोकने के लिए डिबाउंस निष्पादन

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `delay_ms` | number | Yes | - | अंतिम कॉल के बाद निष्पादन से पहले प्रतीक्षा समय |
| `leading` | boolean | No | `False` | लीडिंग किनारे पर निष्पादित करें (पहला कॉल तुरंत ट्रिगर करता है) |
| `trailing` | boolean | No | `True` | ट्रेलिंग किनारे पर निष्पादित करें (विलंब समाप्त होने के बाद) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | रूटिंग के लिए इवेंट (निष्पादित/डिबाउंस) |
| `last_call_ms` | number | अंतिम कॉल का समय मिलीसेकंड में |
| `calls_debounced` | number | अंतिम निष्पादन के बाद डिबाउंस किए गए कॉल की संख्या |
| `time_since_last_ms` | number | अंतिम कॉल के बाद से बीता समय मिलीसेकंड में |
| `edge` | string | कौन सा किनारा निष्पादन को ट्रिगर करता है (लीडिंग/ट्रेलिंग) |

**Example:** Example

```yaml
delay_ms: 500
```

**Example:** Example

```yaml
delay_ms: 1000
leading: true
trailing: false
```

**Example:** Example

```yaml
delay_ms: 2000
leading: true
trailing: true
```

### समाप्त

`flow.end`

स्पष्ट वर्कफ़्लो समाप्ति नोड

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `success_message` | string | No | - | Text content to process |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | राउटिंग इवेंट (__end__) |
| `ended_at` | string | समाप्ति समय |
| `workflow_result` | object | वर्कफ़्लो परिणाम |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
output_mapping: {"result": "${process.output}", "status": "success"}
```

### त्रुटि हैंडलर

`flow.error_handle`

उपरी नोड्स से त्रुटियों को पकड़ता और संभालता है

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | `log_and_continue` | त्रुटि के साथ क्या करना है |
| `include_traceback` | boolean | No | `True` | आउटपुट में पूर्ण स्टैक ट्रेस शामिल करें |
| `error_code_mapping` | object | No | `{}` | आउटपुट में पूर्ण स्टैक ट्रेस शामिल करें |
| `fallback_value` | any | No | - | त्रुटि कोड्स को कस्टम क्रियाओं से मैप करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | जब त्रुटि को दबा दिया जाता है तो उपयोग करने के लिए मान |
| `outputs` | object | रूटिंग के लिए इवेंट (संभाला/बढ़ाना) |
| `error_info` | object | रूटिंग के लिए इवेंट (संभाला/बढ़ाना) |
| `action_taken` | string | कौन सी कार्रवाई की गई |

**Example:** Example

```yaml
action: log_and_continue
include_traceback: true
```

**Example:** Example

```yaml
action: suppress
fallback_value: {"status": "skipped", "reason": "upstream_error"}
```

**Example:** Example

```yaml
action: transform
error_code_mapping: {"TIMEOUT": {"retry": true, "delay": 5000}, "NOT_FOUND": {"skip": true}}
```

### त्रुटि वर्कफ़्लो ट्रिगर

`flow.error_workflow_trigger`

त्रुटि वर्कफ़्लोज़ के लिए प्रवेश बिंदु - जब कोई अन्य वर्कफ़्लो विफल होता है तो ट्रिगर होता है

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `description` | string | No | - | Description of this error workflow |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | इस त्रुटि वर्कफ़्लो का विवरण |
| `error_context` | object | रूटिंग के लिए इवेंट (ट्रिगर किया गया) |
| `triggered_at` | string | जब त्रुटि वर्कफ़्लो ट्रिगर किया गया था तब का ISO टाइमस्टैम्प |

**Example:** Example

```yaml
description: Send Slack notification on workflow failure
```

**Example:** Example

```yaml
description: Log all workflow errors to monitoring system
```

### प्रत्येक के लिए

`flow.foreach`

सूची पर पुनरावृत्ति करें और प्रत्येक आइटम के लिए चरण निष्पादित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `items` | string | Yes | - | पुनरावृत्ति के लिए आइटम की सूची (${variable} संदर्भ का समर्थन करता है) |
| `steps` | array | No | - | प्रत्येक आइटम के लिए निष्पादित करने के चरण |
| `item_var` | string | No | `item` | वर्तमान आइटम के लिए वेरिएबल नाम |
| `index_var` | string | No | `index` | वर्तमान इंडेक्स के लिए वेरिएबल नाम |
| `output_mode` | string | No | `collect` | परिणाम संग्रह मोड |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | राउटिंग इवेंट (iterate/done) |
| `__set_context` | object | संदर्भ सेट करें |
| `outputs` | object | पोर्ट द्वारा आउटपुट मान |
| `iteration` | number | वर्तमान पुनरावृत्ति इंडेक्स |
| `status` | string | ऑपरेशन स्थिति |
| `results` | array | एकत्रित परिणाम |
| `count` | number | कुल आइटम गणना |

**Example:** Example

```yaml
items: ${steps.csv.result.data}
```

**Example:** Example

```yaml
items: ${search_results}
item_var: element
steps: [{"module": "element.text", "params": {"element_id": "${element}"}, "output": "text"}]
```

### फ़ोर्क

`flow.fork`

समानांतर शाखाओं में निष्पादन विभाजित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `branch_count` | number | No | `2` | Number of parallel branches |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | राउटिंग इवेंट (fork/error) |
| `input_data` | any | इनपुट डेटा |
| `branch_count` | integer | शाखा गणना |

**Example:** Example

```yaml
branch_count: 2
```

**Example:** Example

```yaml
branch_count: 3
```

### गोटो

`flow.goto`

दूसरे चरण पर बिना शर्त छलांग

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `target` | string | Yes | - | Step ID to jump to |
| `max_iterations` | number | No | `100` | Maximum number of iterations (prevents infinite loops) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | राउटिंग इवेंट (goto) |
| `target` | string | लक्ष्य चरण |
| `iteration` | number | पुनरावृत्ति गणना |

**Example:** Example

```yaml
target: fetch_next_page
max_iterations: 10
```

**Example:** Example

```yaml
target: cleanup_step
```

### वर्कफ़्लो बुलाएं

`flow.invoke`

एक बाहरी वर्कफ़्लो फ़ाइल निष्पादित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `workflow_source` | string | Yes | - | File path to workflow YAML or inline YAML content |
| `workflow_params` | object | Yes | - | Parameters to pass to the invoked workflow |
| `timeout_seconds` | number | No | `300` | Maximum execution time in seconds |
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | बुलाए गए वर्कफ़्लो को पास करने के लिए पैरामीटर |
| `result` | any | अधिकतम निष्पादन समय सेकंड में |
| `workflow_id` | string | रूटिंग के लिए घटना (सफलता/त्रुटि) |
| `execution_time_ms` | number | वर्कफ़्लो निष्पादन परिणाम |

**Example:** Example

```yaml
workflow_source: workflows/validate_order.yaml
workflow_params: {"order_id": "${input.order_id}"}
timeout_seconds: 60
```

**Example:** Example

```yaml
workflow_source: workflows/process_data.yaml
workflow_params: {"data": "${input.data}"}
output_mapping: {"processed": "result.data"}
```

### जॉइन

`flow.join`

समानांतर शाखाओं के पूर्ण होने की प्रतीक्षा करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`all`, `any`, `first`) | No | `all` | How to handle multiple inputs |
| `input_count` | number | No | `2` | Number of ports |
| `timeout` | number | No | `60000` | Maximum time to wait in milliseconds |
| `cancel_pending` | boolean | No | `True` | Cancel pending branches when using first strategy |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | राउटिंग इवेंट (joined/timeout/error) |
| `joined_data` | array | जॉइन किया गया डेटा |
| `completed_count` | integer | पूर्ण शाखा गणना |
| `strategy` | string | जॉइन रणनीति |

**Example:** Example

```yaml
strategy: all
input_count: 2
timeout_ms: 30000
```

**Example:** Example

```yaml
strategy: first
input_count: 3
cancel_pending: true
```

### लूप

`flow.loop`

आउटपुट पोर्ट राउटिंग का उपयोग करके N बार चरण दोहराएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `times` | number | Yes | `1` | पुनरावृत्तियों की संख्या |
| `target` | string | No | - | लक्ष्य चरण (अप्रचलित) |
| `steps` | array | No | - | प्रत्येक पुनरावृत्ति के लिए निष्पादित करने के चरण |
| `index_var` | string | No | `index` | वर्तमान इंडेक्स के लिए वेरिएबल नाम |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | राउटिंग इवेंट (iterate/done) |
| `outputs` | object | पोर्ट द्वारा आउटपुट मान |
| `iteration` | number | वर्तमान पुनरावृत्ति |
| `status` | string | ऑपरेशन स्थिति |
| `results` | array | एकत्रित परिणाम |
| `count` | number | कुल पुनरावृत्तियां |

**Example:** Example

```yaml
times: 3
```

**Example:** Example

```yaml
times: 5
steps: [{"module": "browser.click", "params": {"selector": ".next"}}]
```

### मर्ज

`flow.merge`

कई इनपुट को एक आउटपुट में मर्ज करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`first`, `last`, `all`) | No | `all` | How to merge multiple inputs |
| `input_count` | number | No | `2` | Number of ports |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | राउटिंग इवेंट (merged/error) |
| `merged_data` | any | मर्ज किया गया डेटा |
| `input_count` | integer | इनपुट गणना |
| `strategy` | string | मर्ज रणनीति |

**Example:** Example

```yaml
strategy: all
input_count: 3
```

**Example:** Example

```yaml
strategy: first
input_count: 2
```

### समानांतर

`flow.parallel`

विभिन्न रणनीतियों के साथ समानांतर में कई कार्य निष्पादित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `tasks` | array | Yes | - | समानांतर में निष्पादित करने के लिए कार्य परिभाषाओं की सूची |
| `mode` | string | No | `all` | समानांतर में निष्पादित करने के लिए कार्य परिभाषाओं की सूची |
| `timeout_ms` | number | No | `60000` | Maximum wait time in milliseconds |
| `fail_fast` | boolean | No | `True` | पहली विफलता पर सभी कार्य रोकें (केवल mode=all के लिए) |
| `concurrency_limit` | number | No | `0` | पहली विफलता पर सभी कार्य रोकें (केवल mode=all के लिए) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | अधिकतम समवर्ती कार्यों की संख्या (असीमित के लिए 0) |
| `results` | array | रूटिंग के लिए इवेंट (पूरा/आंशिक/त्रुटि) |
| `completed_count` | number | रूटिंग के लिए इवेंट (पूरा/आंशिक/त्रुटि) |
| `failed_count` | number | सभी कार्यों के परिणाम |
| `total_count` | number | सफलतापूर्वक पूर्ण कार्यों की संख्या |
| `mode` | string | असफल कार्यों की संख्या |
| `duration_ms` | number | कुल कार्यों की संख्या |

**Example:** Example

```yaml
tasks: [{"module": "http.get", "params": {"url": "https://api1.example.com"}}, {"module": "http.get", "params": {"url": "https://api2.example.com"}}]
mode: all
timeout_ms: 30000
```

**Example:** Example

```yaml
tasks: [{"module": "http.get", "params": {"url": "https://mirror1.example.com"}}, {"module": "http.get", "params": {"url": "https://mirror2.example.com"}}]
mode: race
```

**Example:** Example

```yaml
tasks: [{"module": "http.get", "params": {"url": "https://api1.example.com"}}, {"module": "http.get", "params": {"url": "https://might-fail.example.com"}}]
mode: settle
```

### दर सीमा

`flow.rate_limit`

टोकन बकेट या स्लाइडिंग विंडो का उपयोग करके दर सीमा निष्पादन

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_requests` | number | Yes | - | प्रति विंडो अनुमत अधिकतम अनुरोधों की संख्या |
| `window_ms` | number | No | `60000` | मिलीसेकंड में समय विंडो |
| `strategy` | string | No | `token_bucket` | दर सीमित करने की रणनीति (टोकन बकेट या स्लाइडिंग विंडो) |
| `queue_overflow` | string | No | `wait` | जब कतार भरी हो तो व्यवहार (ड्रॉप या त्रुटि) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | रूटिंग के लिए इवेंट (अनुमत/सीमित) |
| `tokens_remaining` | number | बकेट में बचे हुए टोकन |
| `window_reset_ms` | number | विंडो रीसेट होने तक का समय मिलीसेकंड में |
| `requests_in_window` | number | वर्तमान विंडो में अनुरोधों की संख्या |
| `wait_ms` | number | अगले अनुमत अनुरोध से पहले प्रतीक्षा का समय मिलीसेकंड में |

**Example:** Example

```yaml
max_requests: 100
window_ms: 60000
strategy: token_bucket
```

**Example:** Example

```yaml
max_requests: 10
window_ms: 1000
strategy: fixed_window
queue_overflow: error
```

**Example:** Example

```yaml
max_requests: 50
window_ms: 30000
strategy: sliding_window
queue_overflow: wait
```

### पुनः प्रयास करें

`flow.retry`

विफल ऑपरेशन्स को पुनः प्रयास करें, कॉन्फ़िगर करने योग्य बैकऑफ़ के साथ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `max_retries` | number | Yes | `3` | पुनः प्रयासों की अधिकतम संख्या |
| `initial_delay_ms` | number | No | `1000` | पहले पुनः प्रयास से पहले प्रारंभिक विलंब (मिलीसेकंड में) |
| `backoff_multiplier` | number | No | `2.0` | घातीय बैकऑफ़ के लिए गुणक |
| `max_delay_ms` | number | No | `30000` | पुनः प्रयासों के बीच अधिकतम विलंब (मिलीसेकंड में) |
| `retry_on_errors` | array | No | `[]` | जिन त्रुटियों पर पुनः प्रयास करना है (खाली का अर्थ है सभी पर पुनः प्रयास) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | रूटिंग के लिए इवेंट (पुनः प्रयास/सफल/विफल) |
| `attempt` | number | वर्तमान प्रयास संख्या |
| `max_retries` | number | कॉन्फ़िगर की गई अधिकतम पुनः प्रयास संख्या |
| `delay_ms` | number | अगले पुनः प्रयास से पहले विलंब (मिलीसेकंड में) |
| `total_elapsed_ms` | number | कुल व्यतीत समय (मिलीसेकंड में) |
| `last_error` | object | अंतिम त्रुटि संदेश |

**Example:** Example

```yaml
max_retries: 3
```

**Example:** Example

```yaml
max_retries: 10
initial_delay_ms: 500
backoff_multiplier: 1.5
max_delay_ms: 10000
```

**Example:** Example

```yaml
max_retries: 5
initial_delay_ms: 2000
retry_on_errors: ["TIMEOUT", "RATE_LIMIT", "429", "503"]
```

### प्रारंभ

`flow.start`

स्पष्ट वर्कफ़्लो प्रारंभ नोड

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | राउटिंग इवेंट (start) |
| `started_at` | string | प्रारंभ समय |
| `workflow_id` | string | वर्कफ़्लो ID |

**Example:** Example

```yaml
```

### सबफ्लो

`flow.subflow`

बाहरी वर्कफ़्लो का संदर्भ लें और निष्पादित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `workflow_ref` | string | Yes | - | Text content to process |
| `execution_mode` | select (`inline`, `spawn`, `async`) | No | `inline` | Select an option |
| `input_mapping` | object | Yes | - | Data object to process |
| `output_mapping` | object | No | `{}` | Map internal variables to workflow output |
| `timeout` | number | No | `300000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | राउटिंग इवेंट (success/error) |
| `result` | any | निष्पादन परिणाम |
| `execution_id` | string | निष्पादन ID |
| `workflow_ref` | string | वर्कफ़्लो संदर्भ |

**Example:** Example

```yaml
workflow_ref: workflows/validate_order
execution_mode: inline
input_mapping: {"order_data": "${input.order}"}
output_mapping: {"validation_result": "result"}
```

**Example:** Example

```yaml
workflow_ref: workflows/send_notifications
execution_mode: spawn
```

### स्विच

`flow.switch`

मान मिलान के आधार पर बहु-मार्ग ब्रांचिंग

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Value to match against cases (supports variable reference) |
| `cases` | array | Yes | `[{'id': 'case_1', 'value': 'case1', 'label': 'Case 1'}]` | List of case definitions |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | राउटिंग इवेंट (case:value या default) |
| `outputs` | object | पोर्ट द्वारा आउटपुट मान |
| `matched_case` | string | मिलान किया गया केस |
| `value` | any | मिलान किया गया मान |

**Example:** Example

```yaml
expression: ${api_response.status}
cases: [{"id": "case-1", "value": "success", "label": "Success"}, {"id": "case-2", "value": "pending", "label": "Pending"}, {"id": "case-3", "value": "error", "label": "Error"}]
```

**Example:** Example

```yaml
expression: ${input.type}
cases: [{"id": "img", "value": "image", "label": "Image"}, {"id": "vid", "value": "video", "label": "Video"}, {"id": "txt", "value": "text", "label": "Text"}]
```

### थ्रॉटल

`flow.throttle`

न्यूनतम अंतराल के साथ निष्पादन दर को थ्रॉटल करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `interval_ms` | number | Yes | - | निष्पादनों के बीच न्यूनतम समय (मिलीसेकंड में) |
| `leading` | boolean | No | `True` | लीडिंग एज पर निष्पादित करें (पहली कॉल तुरंत पास होती है) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | रूटिंग के लिए इवेंट (निष्पादित/थ्रॉटल्ड) |
| `last_execution_ms` | number | अंतिम अनुमत निष्पादन का टाइमस्टैम्प |
| `calls_throttled` | number | पिछले निष्पादन के बाद से थ्रॉटल की गई कॉल की संख्या |
| `time_since_last_ms` | number | अंतिम निष्पादन के बाद से व्यतीत समय (मिलीसेकंड में) |
| `remaining_ms` | number | अगले निष्पादन की अनुमति तक शेष मिलीसेकंड |

**Example:** Example

```yaml
interval_ms: 1000
```

**Example:** Example

```yaml
interval_ms: 200
leading: true
```

**Example:** Example

```yaml
interval_ms: 5000
leading: false
```

### ट्रिगर

`flow.trigger`

वर्कफ़्लो प्रवेश बिंदु - मैनुअल, वेबहुक, शेड्यूल, या इवेंट

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `trigger_type` | select (`manual`, `webhook`, `schedule`, `event`, `mcp`, `polling`) | No | `manual` | Type of trigger event |
| `webhook_path` | string | No | - | URL path for webhook trigger |
| `schedule` | string | No | - | Cron expression for scheduled trigger |
| `event_name` | string | No | - | Event name to listen for |
| `tool_name` | string | No | - | MCP tool name exposed to AI agents |
| `tool_description` | string | No | - | Description shown to AI agents for this tool |
| `poll_url` | string | No | - | API endpoint to poll for changes |
| `poll_interval` | number | No | `300` | How often to check for changes (minimum 60 seconds) |
| `poll_method` | select (`GET`, `POST`) | No | `GET` | HTTP method for polling request |
| `poll_headers` | object | No | `{}` | Custom headers for polling request (e.g. API keys) |
| `poll_body` | object | No | `{}` | Request body for POST polling |
| `dedup_key` | string | No | - | JSON path to extract a unique value for deduplication |
| `config` | object | No | - | Custom trigger config (for composites: LINE BOT, Telegram, Slack, etc.) |
| `description` | string | No | - | Optional description text |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `__event__` | string | राउटिंग इवेंट (triggered/error) |
| `trigger_data` | object | ट्रिगर डेटा |
| `trigger_type` | string | ट्रिगर प्रकार |
| `triggered_at` | string | ट्रिगर समय |

**Example:** Example

```yaml
trigger_type: manual
```

**Example:** Example

```yaml
trigger_type: webhook
webhook_path: /api/webhooks/order-created
```

**Example:** Example

```yaml
trigger_type: schedule
schedule: 0 * * * *
```

**Example:** Example

```yaml
trigger_type: mcp
tool_name: send-report
tool_description: Send a weekly summary report
```

**Example:** Example

```yaml
trigger_type: polling
poll_url: https://api.example.com/items
poll_interval: 300
dedup_key: $.data[0].id
```
