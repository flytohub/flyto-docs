# Browser Automation

Full web automation: navigation, interaction, data extraction, screenshots, and performance monitoring.

**39 modules**

| Module | Description |
|--------|-------------|
| [एलिमेंट क्लिक करें](#एलिमेंट-क्लिक-करें) | पेज पर एलिमेंट पर क्लिक करें |
| [ब्राउज़र बंद करें](#ब्राउज़र-बंद-करें) | ब्राउज़र इंस्टेंस बंद करें और संसाधन मुक्त करें |
| [कंसोल कैप्चर करें](#कंसोल-कैप्चर-करें) | ब्राउज़र कंसोल लॉग्स कैप्चर करें (त्रुटियां, चेतावनियां, जानकारी) |
| [कुकीज़ प्रबंधित करें](#कुकीज़-प्रबंधित-करें) | ब्राउज़र कुकीज़ प्राप्त करें, सेट करें, या साफ़ करें |
| [Smart Detect](#smart-detect) | Smart element detection with multi-strategy matching. Finds elements using text, selector, role, proximity, and fuzzy matching with automatic fallbacks. |
| [डायलॉग संभालें](#डायलॉग-संभालें) | अलर्ट, कन्फर्म और प्रॉम्प्ट डायलॉग संभालें |
| [फ़ाइल डाउनलोड करें](#फ़ाइल-डाउनलोड-करें) | ब्राउज़र से फ़ाइल डाउनलोड करें |
| [ड्रैग और ड्रॉप](#ड्रैग-और-ड्रॉप) | एलिमेंट्स को ड्रैग और ड्रॉप करें |
| [डिवाइस अनुकरण करें](#डिवाइस-अनुकरण-करें) | डिवाइस का अनुकरण करें या कस्टम व्यूपोर्ट सेट करें |
| [ब्राउज़र सुनिश्चित करें](#ब्राउज़र-सुनिश्चित-करें) | यह सुनिश्चित करें कि ब्राउज़र सत्र मौजूद है (पुनः उपयोग या लॉन्च करें) |
| [JavaScript निष्पादित करें](#javascript-निष्पादित-करें) | पेज संदर्भ में JavaScript कोड निष्पादित करें |
| [डेटा निकालें](#डेटा-निकालें) | पेज से संरचित डेटा निकालें |
| [एलिमेंट्स खोजें](#एलिमेंट्स-खोजें) | पेज में एलिमेंट्स खोजें और एलिमेंट ID सूची लौटाएं |
| [फॉर्म भरें](#फॉर्म-भरें) | स्वचालित फ़ील्ड पहचान के साथ स्मार्ट फॉर्म भरना |
| [फ्रेम स्विच करें](#फ्रेम-स्विच-करें) | iframe या फ्रेम संदर्भ पर स्विच करें |
| [जियोलोकेशन मॉक करें](#जियोलोकेशन-मॉक-करें) | ब्राउज़र जियोलोकेशन मॉक करें |
| [URL पर जाएं](#url-पर-जाएं) | विशिष्ट URL पर नेविगेट करें |
| [एलिमेंट होवर करें](#एलिमेंट-होवर-करें) | एलिमेंट पर माउस होवर करें |
| [ब्राउज़र लॉन्च करें](#ब्राउज़र-लॉन्च-करें) | Playwright के साथ नया ब्राउज़र इंस्टेंस लॉन्च करें |
| [इतिहास नेविगेट करें](#इतिहास-नेविगेट-करें) | ब्राउज़र इतिहास में नेविगेट करें (पीछे, आगे, पुनः लोड) |
| [नेटवर्क मॉनिटर](#नेटवर्क-मॉनिटर) | नेटवर्क अनुरोधों की निगरानी और इंटरसेप्ट करें |
| [पृष्ठों की सूची](#पृष्ठों-की-सूची) | सभी खुले ब्राउज़र पृष्ठों/टैब की सूची |
| [पृष्ठांकन करें और निकालें](#पृष्ठांकन-करें-और-निकालें) | पृष्ठों के माध्यम से स्वचालित रूप से पृष्ठांकन करें और डेटा निकालें |
| [PDF जनरेट करें](#pdf-जनरेट-करें) | वर्तमान पेज से PDF जनरेट करें |
| [प्रदर्शन मेट्रिक्स](#प्रदर्शन-मेट्रिक्स) | ब्राउज़र प्रदर्शन मेट्रिक्स एकत्र करें |
| [कुंजी दबाएं](#कुंजी-दबाएं) | कीबोर्ड कुंजी दबाएं |
| [क्रियाएं रिकॉर्ड करें](#क्रियाएं-रिकॉर्ड-करें) | यूज़र क्रियाओं को वर्कफ़्लो के रूप में रिकॉर्ड करें |
| [ब्राउज़र जारी करें](#ब्राउज़र-जारी-करें) | ब्राउज़र सत्र जारी करें (केवल तभी बंद करें जब स्वामित्व में हो) |
| [स्क्रीनशॉट लें](#स्क्रीनशॉट-लें) | वर्तमान पेज का स्क्रीनशॉट लें |
| [पेज स्क्रॉल करें](#पेज-स्क्रॉल-करें) | पेज को एलिमेंट, स्थिति, या दिशा में स्क्रॉल करें |
| [विकल्प चुनें](#विकल्प-चुनें) | ड्रॉपडाउन एलिमेंट से विकल्प चुनें |
| [DOM स्नैपशॉट](#dom-स्नैपशॉट) | वर्तमान पृष्ठ का DOM स्नैपशॉट कैप्चर करें |
| [ब्राउज़र स्टोरेज](#ब्राउज़र-स्टोरेज) | localStorage और sessionStorage एक्सेस करें |
| [टैब्स प्रबंधित करें](#टैब्स-प्रबंधित-करें) | ब्राउज़र टैब बनाएं, स्विच करें, और बंद करें |
| [ब्राउज़र ट्रेस](#ब्राउज़र-ट्रेस) | ब्राउज़र प्रदर्शन ट्रेस शुरू, रोकें, या सहेजें |
| [टेक्स्ट टाइप करें](#टेक्स्ट-टाइप-करें) | इनपुट फ़ील्ड में टेक्स्ट टाइप करें |
| [फ़ाइल अपलोड करें](#फ़ाइल-अपलोड-करें) | फ़ाइल इनपुट एलिमेंट पर फ़ाइल अपलोड करें |
| [व्यूपोर्ट सेट करें](#व्यूपोर्ट-सेट-करें) | ब्राउज़र व्यूपोर्ट आकार प्राप्त करें या सेट करें |
| [प्रतीक्षा करें](#प्रतीक्षा-करें) | अवधि के लिए या एलिमेंट प्रकट होने तक प्रतीक्षा करें |

## Modules

### एलिमेंट क्लिक करें

`browser.click`

पेज पर एलिमेंट पर क्लिक करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `click_method` | select (`text`, `button`, `id`, `selector`) | No | `text` | Choose the easiest way to identify the element you want to click |
| `target` | string | No | - | e.g. "Submit", "Next Page", "Login" |
| `selector` | string | No | - | CSS selector, XPath, or text selector |
| `button` | select (`left`, `right`, `middle`) | No | `left` | Which mouse button to use for clicking |
| `click_count` | number | No | `1` | Number of clicks (2 for double-click, 3 for triple-click) |
| `force` | boolean | No | `False` | Force click even if element is not actionable (covered, invisible) |
| `modifiers` | array | No | - | Modifier keys to hold during click |
| `timeout` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `browser` | object | Browser session (pass-through for chaining) |
| `status` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `selector` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `method` | string | Click method used |

**Example:** Example

```yaml
click_method: text
target: Submit
```

**Example:** Example

```yaml
click_method: id
target: login-button
```

**Example:** Example

```yaml
click_method: selector
selector: #submit-button
```

### ब्राउज़र बंद करें

`browser.close`

ब्राउज़र इंस्टेंस बंद करें और संसाधन मुक्त करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `_no_params` | boolean | No | `True` | This module requires no parameters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ब्राउज़र इंस्टेंस बंद करें |
| `message` | string | ब्राउज़र इंस्टेंस बंद करें |

**Example:** Example

```yaml
```

### कंसोल कैप्चर करें

`browser.console`

ब्राउज़र कंसोल लॉग्स कैप्चर करें (त्रुटियां, चेतावनियां, जानकारी)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `level` | select (`all`, `error`, `warning`, `info`, `log`) | No | `all` | Filter console messages by level |
| `timeout` | number | No | `5000` | Maximum time to wait in milliseconds |
| `clear_existing` | boolean | No | `False` | Clear existing messages before capturing |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `messages` | array | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `count` | number | ऑपरेशन स्थिति (सफलता/त्रुटि) |

**Example:** Example

```yaml
timeout: 3000
```

**Example:** Example

```yaml
level: error
timeout: 5000
```

### कुकीज़ प्रबंधित करें

`browser.cookies`

ब्राउज़र कुकीज़ प्राप्त करें, सेट करें, या साफ़ करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`get`, `set`, `clear`, `delete`) | Yes | - | Action to perform on the storage |
| `name` | string | No | - | Name of the cookie |
| `value` | string | No | - | Value of the cookie |
| `domain` | string | No | - | Cookie domain |
| `path` | string | No | `/` | Cookie path |
| `secure` | boolean | No | `False` | Whether cookie is secure (HTTPS only) |
| `httpOnly` | boolean | No | `False` | Whether cookie is HTTP only |
| `expires` | number | No | - | Cookie expiration time (Unix timestamp) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `cookies` | array | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `count` | number | ऑपरेशन स्थिति (सफलता/त्रुटि) |

**Example:** Example

```yaml
action: get
```

**Example:** Example

```yaml
action: get
name: session_id
```

**Example:** Example

```yaml
action: set
name: user_pref
value: dark_mode
domain: example.com
```

**Example:** Example

```yaml
action: clear
```

### Smart Detect

`browser.detect`

Smart element detection with multi-strategy matching. Finds elements using text, selector, role, proximity, and fuzzy matching with automatic fallbacks.

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | No | - | Text content of the element to find (e.g. 'Login', 'Submit') |
| `selector` | string | No | - | CSS/XPath selector to try first. Falls back to text matching if not found. |
| `alternatives` | string | No | - | Comma-separated alternative texts to try (e.g. 'Sign In, 登入, Log In') |
| `role` | select (`any`, `button`, `link`, `textbox`, `combobox`, `checkbox`, `radio`, `heading`, `img`) | No | `any` | Expected ARIA role (narrows search) |
| `near_text` | string | No | - | Find element near this text (e.g. 'Password' to find nearby Submit button) |
| `match_mode` | select (`exact`, `contains`, `fuzzy`, `best`) | No | `best` | How strictly to match text |
| `action` | select (`none`, `click`, `type`) | No | `none` | Action to perform on the found element |
| `action_value` | string | No | - | Text to type into the element (when action is 'type') |
| `timeout` | number | No | `10000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status (success / not_found / ambiguous) |
| `found` | boolean | Whether an element was found |
| `selector` | string | Resolved CSS/Playwright selector of the matched element |
| `strategy` | string | Which detection strategy matched (selector / role / text / label / placeholder / fuzzy / proximity) |
| `confidence` | number | Match confidence 0-100 |
| `element` | object | Element info: tag, text, id, ariaLabel, href, etc. |
| `candidates` | array | Top alternative matches (for debugging) |
| `action_result` | string | Result of performed action (if any) |

**Example:** Example

```yaml
text: Login
alternatives: Sign In, 登入
role: button
```

**Example:** Example

```yaml
text: Submit
near_text: Password
action: click
```

**Example:** Example

```yaml
text: Enter your email
role: textbox
action: type
action_value: user@example.com
```

**Example:** Example

```yaml
selector: #old-login-btn
text: Login
match_mode: best
```

### डायलॉग संभालें

`browser.dialog`

अलर्ट, कन्फर्म और प्रॉम्प्ट डायलॉग संभालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`accept`, `dismiss`, `listen`) | Yes | - | How to respond to the dialog |
| `prompt_text` | string | No | - | Text to enter in prompt dialog (for accept action) |
| `timeout` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `message` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `type` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `default_value` | string | परिणाम का वर्णन करने वाला संदेश |

**Example:** Example

```yaml
action: accept
```

**Example:** Example

```yaml
action: dismiss
```

**Example:** Example

```yaml
action: accept
prompt_text: Hello World
```

**Example:** Example

```yaml
action: listen
timeout: 5000
```

### फ़ाइल डाउनलोड करें

`browser.download`

ब्राउज़र से फ़ाइल डाउनलोड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `save_path` | string | Yes | - | Path where to save the downloaded file |
| `timeout_ms` | number | No | `60000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `path` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `filename` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `size` | number | फ़ाइल या संसाधन पथ |

**Example:** Example

```yaml
selector: #download-btn
save_path: /downloads/report.pdf
```

**Example:** Example

```yaml
selector: a.download
save_path: /downloads/large-file.zip
timeout_ms: 120000
```

### ड्रैग और ड्रॉप

`browser.drag`

एलिमेंट्स को ड्रैग और ड्रॉप करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `target` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `source_position` | object | No | - | Position within source element {x, y} as percentages |
| `target_position` | object | No | - | Position within target element {x, y} as percentages |
| `timeout` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | लक्ष्य एलिमेंट में स्थिति {x, y} प्रतिशत के रूप में |
| `source` | string | लक्ष्य एलिमेंट में स्थिति {x, y} प्रतिशत के रूप में |
| `target` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |

**Example:** Example

```yaml
source: #item1
target: #dropzone
```

**Example:** Example

```yaml
source: .draggable
target: .container
target_position: {"x": 0.5, "y": 0.5}
```

### डिवाइस अनुकरण करें

`browser.emulate`

डिवाइस का अनुकरण करें या कस्टम व्यूपोर्ट सेट करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `device` | select (`iphone_12`, `iphone_14`, `iphone_14_pro_max`, `iphone_se`, `pixel_7`, `pixel_5`, `galaxy_s21`, `galaxy_s23`, `ipad_pro`, `ipad_mini`, `galaxy_tab_s8`, `desktop_chrome`, `desktop_firefox`, `desktop_safari`, `desktop_edge`, `laptop`, `macbook_pro`, `custom`) | Yes | - | अनुकरण करने के लिए डिवाइस नाम (जैसे iPhone 13) |
| `width` | number | No | - | पिक्सेल में व्यूपोर्ट चौड़ाई |
| `height` | number | No | - | पिक्सेल में व्यूपोर्ट ऊँचाई |
| `user_agent` | string | No | - | कस्टम यूज़र एजेंट स्ट्रिंग |
| `is_mobile` | boolean | No | - | क्या मोबाइल डिवाइस का अनुकरण करना है |
| `has_touch` | boolean | No | - | क्या डिवाइस में टच सपोर्ट है |
| `device_scale_factor` | number | No | - | डिवाइस पिक्सेल अनुपात |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन की स्थिति (सफलता/त्रुटि) |
| `device` | string | अनुकरण किया गया डिवाइस नाम |
| `viewport` | object | वर्तमान व्यूपोर्ट आयाम |
| `is_mobile` | boolean | क्या मोबाइल अनुकरण सक्रिय है |

**Example:** Example

```yaml
device: iphone_14
```

**Example:** Example

```yaml
device: ipad_pro
```

**Example:** Example

```yaml
device: custom
width: 400
height: 800
is_mobile: true
has_touch: true
device_scale_factor: 2
```

**Example:** Example

```yaml
device: desktop_chrome
user_agent: CustomBot/1.0
```

### ब्राउज़र सुनिश्चित करें

`browser.ensure`

यह सुनिश्चित करें कि ब्राउज़र सत्र मौजूद है (पुनः उपयोग या लॉन्च करें)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ब्राउज़र लॉन्च किया गया था या पुनः उपयोग किया गया था |
| `message` | string | ब्राउज़र लॉन्च किया गया था या पुनः उपयोग किया गया था |
| `is_owner` | boolean | ब्राउज़र लॉन्च किया गया था या पुनः उपयोग किया गया था |

**Example:** Example

```yaml
headless: false
```

**Example:** Example

```yaml
headless: true
```

### JavaScript निष्पादित करें

`browser.evaluate`

पेज संदर्भ में JavaScript कोड निष्पादित करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `script` | string | Yes | - | JavaScript code to execute (can use return statement) |
| `args` | array | No | - | Arguments to pass to the script function |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `result` | any | ऑपरेशन स्थिति (सफलता/त्रुटि) |

**Example:** Example

```yaml
script: return document.title
```

**Example:** Example

```yaml
script: return document.querySelectorAll("a").length
```

**Example:** Example

```yaml
script: (selector) => document.querySelector(selector)?.textContent
args: ["#header"]
```

**Example:** Example

```yaml
script: document.body.style.backgroundColor = "red"; return "done"
```

### डेटा निकालें

`browser.extract`

पेज से संरचित डेटा निकालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |
| `fields` | object | No | - | Define fields to extract from each item |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `data` | array | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `count` | number | ऑपरेशन स्थिति (सफलता/त्रुटि) |

**Example:** Example

```yaml
selector: .g
limit: 10
fields: {"title": {"selector": "h3", "type": "text"}, "url": {"selector": "a", "type": "attribute", "attribute": "href"}}
```

### एलिमेंट्स खोजें

`browser.find`

पेज में एलिमेंट्स खोजें और एलिमेंट ID सूची लौटाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `count` | number | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `element_ids` | array | ऑपरेशन स्थिति (सफलता/त्रुटि) |

**Example:** Find search results

```yaml
selector: div.tF2Cxc
limit: 10
```

### फॉर्म भरें

`browser.form`

स्वचालित फ़ील्ड पहचान के साथ स्मार्ट फॉर्म भरना

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `form_selector` | string | No | - | CSS selector for the form element (optional) |
| `data` | object | Yes | - | Key-value pairs to fill (key = field name/id, value = content) |
| `field_mapping` | object | No | - | Custom selector mapping {fieldName: selector} |
| `clear_before_fill` | boolean | No | `True` | Clear existing field values before filling |
| `submit` | boolean | No | `False` | Submit form after filling |
| `submit_selector` | string | No | - | CSS selector for submit button |
| `delay_between_fields_ms` | number | No | `100` | Delay between filling each field (for more human-like behavior) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `filled_fields` | array | प्रत्येक फ़ील्ड भरने के बीच की देरी (अधिक मानव-समान व्यवहार के लिए) |
| `failed_fields` | array | भरे गए फ़ील्ड की सूची |
| `submitted` | boolean | भरे गए फ़ील्ड की सूची |

**Example:** Example

```yaml
data: {"email": "user@example.com", "password": "secret123"}
submit: true
```

**Example:** Example

```yaml
data: {"username": "john_doe", "bio": "Hello world"}
field_mapping: {"username": "#user-name-input", "bio": "textarea.bio-field"}
```

### फ्रेम स्विच करें

`browser.frame`

iframe या फ्रेम संदर्भ पर स्विच करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `name` | string | No | - | Name attribute of the frame (alternative to selector) |
| `url` | string | No | - | URL pattern to match frame (alternative to selector) |
| `action` | string | No | `enter` | Frame action to perform |
| `timeout` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | फ्रेम क्रिया (फ्रेम में स्विच करने के लिए enter, सभी फ्रेम सूचीबद्ध करने के लिए list) |
| `frame_url` | string | फ्रेम क्रिया (फ्रेम में स्विच करने के लिए enter, सभी फ्रेम सूचीबद्ध करने के लिए list) |
| `frame_name` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `frames` | array | फ्रेम URL |

**Example:** Example

```yaml
selector: iframe#content-frame
```

**Example:** Example

```yaml
name: main-content
```

**Example:** Example

```yaml
action: exit
```

**Example:** Example

```yaml
action: list
```

### जियोलोकेशन मॉक करें

`browser.geolocation`

ब्राउज़र जियोलोकेशन मॉक करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `latitude` | number | Yes | - | Latitude coordinate (-90 to 90) |
| `longitude` | number | Yes | - | Longitude coordinate (-180 to 180) |
| `accuracy` | number | No | `100` | Position accuracy in meters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | मीटर में स्थिति सटीकता |
| `location` | object | मीटर में स्थिति सटीकता |

**Example:** Example

```yaml
latitude: 37.7749
longitude: -122.4194
```

**Example:** Example

```yaml
latitude: 51.5074
longitude: -0.1278
accuracy: 10
```

**Example:** Example

```yaml
latitude: 35.6762
longitude: 139.6503
```

### URL पर जाएं

`browser.goto`

विशिष्ट URL पर नेविगेट करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to navigate to |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `url` | string | विशिष्ट URL पर नेविगेट करें |

**Example:** Example

```yaml
url: https://www.google.com
wait_until: domcontentloaded
```

### एलिमेंट होवर करें

`browser.hover`

एलिमेंट पर माउस होवर करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |
| `position` | object | No | - | Click position relative to element (0-1 range) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `selector` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |

**Example:** Example

```yaml
selector: .menu-item
```

**Example:** Example

```yaml
selector: #dropdown-trigger
timeout_ms: 5000
```

### ब्राउज़र लॉन्च करें

`browser.launch`

Playwright के साथ नया ब्राउज़र इंस्टेंस लॉन्च करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |
| `browser_type` | select (`chromium`, `firefox`, `webkit`) | No | `chromium` | उपयोग करने के लिए ब्राउज़र इंजन (क्रोमियम, फायरफॉक्स, वेबकिट) |
| `proxy` | string | No | - | प्रॉक्सी सर्वर URL |
| `user_agent` | string | No | - | कस्टम यूज़र एजेंट स्ट्रिंग |
| `locale` | string | No | `en-US` | Browser locale (e.g. en-US, zh-TW, ja-JP) |
| `slow_mo` | number | No | `0` | निर्दिष्ट मिलीसेकंड द्वारा संचालन को धीमा करें |
| `record_video_dir` | string | No | - | Directory to save recorded videos (enables Playwright video recording) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `message` | string | नया ब्राउज़र इंस्टेंस लॉन्च करें |
| `browser_type` | string | लॉन्च किए गए ब्राउज़र का प्रकार |
| `headless` | boolean | क्या ब्राउज़र हेडलेस मोड में चल रहा है |
| `viewport` | object | वर्तमान व्यूपोर्ट आयाम |

**Example:** Example

```yaml
headless: true
```

**Example:** Example

```yaml
headless: false
```

### इतिहास नेविगेट करें

`browser.navigation`

ब्राउज़र इतिहास में नेविगेट करें (पीछे, आगे, पुनः लोड)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`back`, `forward`, `reload`) | Yes | `reload` | Which navigation action to perform |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन की स्थिति (सफलता/त्रुटि) |
| `action` | string | किया गया नेविगेशन कार्य |
| `url` | string | नेविगेशन के बाद वर्तमान URL |

**Example:** Example

```yaml
action: back
```

**Example:** Example

```yaml
action: forward
```

**Example:** Example

```yaml
action: reload
wait_until: networkidle
```

### नेटवर्क मॉनिटर

`browser.network`

नेटवर्क अनुरोधों की निगरानी और इंटरसेप्ट करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`monitor`, `block`, `intercept`) | Yes | - | Network action to perform |
| `url_pattern` | string | No | - | Regex pattern to match request URLs |
| `resource_type` | string | No | - | Filter by resource type (document, script, image, etc) |
| `timeout` | number | No | `30000` | Maximum time to wait in milliseconds |
| `mock_response` | object | No | - | Response to return for intercepted requests |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | इंटरसेप्ट किए गए अनुरोधों के लिए लौटाने के लिए प्रतिक्रिया |
| `requests` | array | इंटरसेप्ट किए गए अनुरोधों के लिए लौटाने के लिए प्रतिक्रिया |
| `blocked_count` | number | ऑपरेशन स्थिति (सफलता/त्रुटि) |

**Example:** Example

```yaml
action: monitor
url_pattern: .*api.*
timeout: 10000
```

**Example:** Example

```yaml
action: block
resource_type: image
```

**Example:** Example

```yaml
action: intercept
url_pattern: .*users.*
mock_response: {"status": 200, "body": "{\"users\": []}"}
```

### पृष्ठों की सूची

`browser.pages`

सभी खुले ब्राउज़र पृष्ठों/टैब की सूची

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `include_details` | boolean | No | `True` | प्रत्येक पृष्ठ के लिए विस्तृत जानकारी शामिल करें |
| `include_content_info` | boolean | No | `False` | प्रत्येक पृष्ठ के लिए सामग्री प्रकार की जानकारी शामिल करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन की स्थिति (सफलता/त्रुटि) |
| `pages` | array | खुले पृष्ठों की सूची |
| `count` | number | खुले पृष्ठों की संख्या |
| `current_index` | number | वर्तमान सक्रिय पृष्ठ का सूचकांक |

**Example:** Example

```yaml
include_details: true
```

**Example:** Example

```yaml
include_details: false
```

**Example:** Example

```yaml
include_details: true
include_content_info: true
```

### पृष्ठांकन करें और निकालें

`browser.pagination`

पृष्ठों के माध्यम से स्वचालित रूप से पृष्ठांकन करें और डेटा निकालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `mode` | select (`next_button`, `infinite_scroll`, `page_numbers`, `load_more`) | No | `next_button` | How to navigate between pages |
| `item_selector` | string | Yes | - | CSS selector for items to extract on each page |
| `fields` | object | No | - | Field definitions {name: {selector, attribute?}} |
| `next_selector` | string | No | - | CSS selector for next page button |
| `load_more_selector` | string | No | - | CSS selector for load more button |
| `max_pages` | number | No | `10` | Maximum number of pages to process (0 = unlimited) |
| `max_items` | number | No | `0` | Stop after collecting this many items (0 = unlimited) |
| `wait_between_pages_ms` | number | No | `1000` | Wait time between page navigations |
| `wait_for_selector` | string | No | - | Wait for this element after page change |
| `scroll_amount` | number | No | `1000` | Pixels to scroll for infinite scroll mode |
| `no_more_indicator` | string | No | - | Selector that appears when no more pages (stops pagination) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `items` | array | चयनकर्ता जो तब दिखाई देता है जब और अधिक पृष्ठ नहीं होते (पृष्ठांकन रोकता है) |
| `total_items` | integer | सभी पृष्ठों से निकाले गए सभी आइटम |
| `pages_processed` | integer | सभी पृष्ठों से निकाले गए सभी आइटम |
| `stopped_reason` | string | प्रसंस्कृत पृष्ठों की संख्या |

**Example:** Example

```yaml
mode: next_button
item_selector: .product-card
fields: {"title": {"selector": ".title"}, "price": {"selector": ".price"}, "link": {"selector": "a", "attribute": "href"}}
next_selector: .pagination .next
max_pages: 5
```

**Example:** Example

```yaml
mode: infinite_scroll
item_selector: .feed-item
fields: {"content": {"selector": ".content"}, "author": {"selector": ".author"}}
max_items: 100
no_more_indicator: .end-of-feed
```

**Example:** Example

```yaml
mode: load_more
item_selector: .list-item
load_more_selector: button.load-more
max_pages: 10
```

### PDF जनरेट करें

`browser.pdf`

वर्तमान पेज से PDF जनरेट करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | No | - | Path where the output file will be saved |
| `page_size` | select (`A4`, `Letter`, `Legal`, `A3`, `A5`) | No | `A4` | Page size format |
| `orientation` | select (`portrait`, `landscape`) | No | `portrait` | Page orientation |
| `print_background` | boolean | No | `True` | Include background graphics |
| `scale` | number | No | `1` | Scale of the webpage rendering (0.1-2) |
| `margin` | number | No | `20` | Page margin in millimeters |
| `header` | string | No | - | Header text for each page |
| `footer` | string | No | - | Footer text for each page |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | वेबपेज रेंडरिंग का स्केल (0.1-2) |
| `path` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `size` | number | ऑपरेशन स्थिति (सफलता/त्रुटि) |

**Example:** Example

```yaml
path: /output/page.pdf
```

**Example:** Example

```yaml
path: /output/landscape.pdf
landscape: true
```

**Example:** Example

```yaml
path: /output/custom.pdf
margin: {"top": "1cm", "bottom": "1cm", "left": "2cm", "right": "2cm"}
```

### प्रदर्शन मेट्रिक्स

`browser.performance`

ब्राउज़र प्रदर्शन मेट्रिक्स एकत्र करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | array | No | `['all']` | एकत्र करने के लिए प्रदर्शन मेट्रिक्स |
| `timeout_ms` | number | No | `3000` | मिलीसेकंड में समय सीमा |
| `setup_observers` | boolean | No | `True` | एकत्र करने से पहले प्रदर्शन पर्यवेक्षकों को सेट करें |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन की स्थिति (सफलता/त्रुटि) |
| `metrics` | object | एकत्रित प्रदर्शन मेट्रिक्स |

**Example:** Example

```yaml
metrics: ["all"]
timeout_ms: 5000
```

**Example:** Example

```yaml
metrics: ["lcp", "fcp", "cls"]
```

**Example:** Example

```yaml
metrics: ["ttfb", "domContentLoaded", "load"]
timeout_ms: 0
```

### कुंजी दबाएं

`browser.press`

कीबोर्ड कुंजी दबाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | The key to press (e.g., Enter, Escape, Tab) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `key` | string | कीबोर्ड कुंजी दबाएं |

**Example:** Example

```yaml
key: Enter
```

**Example:** Example

```yaml
key: Escape
```

### क्रियाएं रिकॉर्ड करें

`browser.record`

यूज़र क्रियाओं को वर्कफ़्लो के रूप में रिकॉर्ड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Recording action to perform |
| `output_format` | string | No | `yaml` | Format for recorded workflow |
| `output_path` | string | No | - | Path where the output file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | रिकॉर्ड किए गए वर्कफ़्लो के लिए फ़ॉर्मेट (yaml या json) |
| `recording` | array | रिकॉर्ड किए गए वर्कफ़्लो के लिए फ़ॉर्मेट (yaml या json) |
| `workflow` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |

**Example:** Example

```yaml
action: start
```

**Example:** Example

```yaml
action: stop
output_format: yaml
```

**Example:** Example

```yaml
action: get
```

### ब्राउज़र जारी करें

`browser.release`

ब्राउज़र सत्र जारी करें (केवल तभी बंद करें जब स्वामित्व में हो)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `force` | boolean | No | `False` | ब्राउज़र बंद करें भले ही इस टेम्पलेट द्वारा स्वामित्व में न हो |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ब्राउज़र बंद करें भले ही इस टेम्पलेट द्वारा स्वामित्व में न हो |
| `message` | string | कौन सी कार्रवाई की गई |
| `was_owner` | boolean | कौन सी कार्रवाई की गई |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
force: true
```

### स्क्रीनशॉट लें

`browser.screenshot`

वर्तमान पेज का स्क्रीनशॉट लें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | No | `screenshot.png` | Path where the output file will be saved |
| `full_page` | boolean | No | `False` | Capture the entire scrollable page |
| `format` | select (`png`, `jpeg`, `webp`) | No | `png` | Image format for the screenshot |
| `quality` | number | No | - | Quality for JPEG/WebP format (0-100) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `filepath` | string | वर्तमान पेज का स्क्रीनशॉट लें |

**Example:** Example

```yaml
path: output/page.png
```

### पेज स्क्रॉल करें

`browser.scroll`

पेज को एलिमेंट, स्थिति, या दिशा में स्क्रॉल करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `direction` | select (`down`, `up`, `left`, `right`) | No | `down` | Direction to scroll the page |
| `amount` | number | No | `500` | Pixels to scroll (ignored if selector is provided) |
| `behavior` | select (`smooth`, `instant`) | No | `smooth` | How the scroll animation behaves |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `scrolled_to` | object | ऑपरेशन स्थिति (सफलता/त्रुटि) |

**Example:** Example

```yaml
selector: #footer
```

**Example:** Example

```yaml
direction: down
amount: 500
```

**Example:** Example

```yaml
direction: up
amount: 10000
behavior: smooth
```

### विकल्प चुनें

`browser.select`

ड्रॉपडाउन एलिमेंट से विकल्प चुनें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `value` | string | No | - | Option value attribute to select |
| `label` | string | No | - | Option text content to select (alternative to value) |
| `index` | number | No | - | Option index to select (0-based) |
| `timeout` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `selected` | array | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `selector` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |

**Example:** Example

```yaml
selector: select#country
value: us
```

**Example:** Example

```yaml
selector: select#country
label: United States
```

**Example:** Example

```yaml
selector: select#country
index: 2
```

### DOM स्नैपशॉट

`browser.snapshot`

वर्तमान पृष्ठ का DOM स्नैपशॉट कैप्चर करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`html`, `mhtml`, `text`) | No | `html` | आउटपुट प्रारूप (html या टेक्स्ट) |
| `selector` | string | No | - | विशिष्ट तत्व का स्नैपशॉट लेने के लिए CSS चयनकर्ता |
| `path` | string | No | - | स्नैपशॉट सहेजने का पथ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन की स्थिति (सफलता/त्रुटि) |
| `format` | string | स्नैपशॉट का प्रारूप |
| `content` | string | स्नैपशॉट सामग्री |
| `path` | string | जहां स्नैपशॉट सहेजा गया था उसका पथ |
| `size_bytes` | number | बाइट्स में स्नैपशॉट का आकार |

**Example:** Example

```yaml
format: html
```

**Example:** Example

```yaml
format: mhtml
path: /tmp/page.mhtml
```

**Example:** Example

```yaml
format: text
selector: article.main-content
```

**Example:** Example

```yaml
format: html
selector: #main
path: /tmp/section.html
```

### ब्राउज़र स्टोरेज

`browser.storage`

localStorage और sessionStorage एक्सेस करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`get`, `set`, `remove`, `clear`, `keys`, `length`) | Yes | - | Action to perform on the storage |
| `type` | select (`local`, `session`) | No | `local` | Browser storage type to access |
| `key` | string | No | - | Storage key |
| `value` | string | No | - | Value to store |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `value` | any | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `keys` | array | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `length` | number | लौटाया गया मान |

**Example:** Example

```yaml
action: get
type: local
key: user_token
```

**Example:** Example

```yaml
action: set
type: session
key: temp_data
value: {"id": 123}
```

**Example:** Example

```yaml
action: clear
type: local
```

**Example:** Example

```yaml
action: keys
type: local
```

### टैब्स प्रबंधित करें

`browser.tab`

ब्राउज़र टैब बनाएं, स्विच करें, और बंद करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Tab action to perform |
| `url` | string | No | - | URL to navigate to |
| `index` | number | No | - | Tab index to switch to or close (0-based) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | स्विच करने या बंद करने के लिए टैब इंडेक्स (0-आधारित) |
| `tab_count` | number | स्विच करने या बंद करने के लिए टैब इंडेक्स (0-आधारित) |
| `current_index` | number | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `tabs` | array | टैब गणना |

**Example:** Example

```yaml
action: new
url: https://example.com
```

**Example:** Example

```yaml
action: switch
index: 0
```

**Example:** Example

```yaml
action: close
```

**Example:** Example

```yaml
action: list
```

### ब्राउज़र ट्रेस

`browser.trace`

ब्राउज़र प्रदर्शन ट्रेस शुरू, रोकें, या सहेजें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | ट्रेस क्रिया (शुरू, रोकें, सहेजें) |
| `categories` | array | No | `['devtools.timeline']` | कैप्चर करने के लिए ट्रेस श्रेणियाँ |
| `screenshots` | boolean | No | `True` | ट्रेस में स्क्रीनशॉट शामिल करें |
| `path` | string | No | - | ट्रेस फ़ाइल सहेजने का पथ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन की स्थिति (सफलता/त्रुटि) |
| `tracing` | boolean | क्या ट्रेसिंग वर्तमान में सक्रिय है |
| `path` | string | जहां ट्रेस सहेजा गया था उसका पथ |
| `size_bytes` | number | बाइट्स में ट्रेस फ़ाइल का आकार |

**Example:** Example

```yaml
action: start
screenshots: true
```

**Example:** Example

```yaml
action: start
categories: ["devtools.timeline", "v8.execute"]
screenshots: false
```

**Example:** Example

```yaml
action: stop
path: /tmp/performance-trace.json
```

### टेक्स्ट टाइप करें

`browser.type`

इनपुट फ़ील्ड में टेक्स्ट टाइप करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `type_method` | select (`placeholder`, `label`, `name`, `id`, `selector`) | No | `placeholder` | Choose the easiest way to identify the input field |
| `target` | string | No | - | e.g. "Enter your email", "Email", "username" |
| `selector` | string | No | - | CSS selector, XPath, or text selector |
| `input_type` | select (`text`, `password`, `email`) | No | `text` | Type of input field — use Password to mask the value in the builder |
| `text` | string | Yes | - |  |
| `sensitive_text` | string | Yes | - |  |
| `delay` | number | No | `0` | Delay between keystrokes in milliseconds |
| `clear` | boolean | No | `False` | Clear the input field before typing |
| `timeout` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `browser` | object | Browser session (pass-through for chaining) |
| `status` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `selector` | string | इनपुट फ़ील्ड में टेक्स्ट टाइप करें |
| `method` | string | Type method used |

**Example:** Example

```yaml
type_method: placeholder
target: Enter your email
text: user@example.com
```

**Example:** Example

```yaml
type_method: label
target: Email
text: user@example.com
```

**Example:** Example

```yaml
type_method: placeholder
target: Password
input_type: password
sensitive_text: ${env.LOGIN_PASSWORD}
```

**Example:** Example

```yaml
type_method: selector
selector: #email
text: user@example.com
```

### फ़ाइल अपलोड करें

`browser.upload`

फ़ाइल इनपुट एलिमेंट पर फ़ाइल अपलोड करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `file_path` | string | Yes | - | Local path to the file to upload |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `filename` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `size` | number | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `selector` | string | फ़ाइल का नाम |

**Example:** Example

```yaml
selector: input[type="file"]
file_path: /path/to/image.png
```

**Example:** Example

```yaml
selector: #file-upload
file_path: /path/to/document.pdf
```

### व्यूपोर्ट सेट करें

`browser.viewport`

ब्राउज़र व्यूपोर्ट आकार प्राप्त करें या सेट करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `width` | number | Yes | `1280` | पिक्सल में व्यूपोर्ट की चौड़ाई |
| `height` | number | Yes | `720` | पिक्सल में व्यूपोर्ट की ऊँचाई |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन की स्थिति (सफलता/त्रुटि) |
| `viewport` | object | वर्तमान व्यूपोर्ट के आयाम |
| `previous_viewport` | object | पिछले व्यूपोर्ट के आयाम |

**Example:** Example

```yaml
width: 375
height: 667
```

**Example:** Example

```yaml
width: 768
height: 1024
```

**Example:** Example

```yaml
width: 1920
height: 1080
```

**Example:** Example

```yaml
width: 1366
height: 768
```

### प्रतीक्षा करें

`browser.wait`

अवधि के लिए या एलिमेंट प्रकट होने तक प्रतीक्षा करें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Duration of the operation in milliseconds |
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `state` | select (`visible`, `hidden`, `attached`, `detached`) | No | `visible` | प्रतीक्षा करने के लिए स्थिति (दृश्य, छिपा हुआ, संलग्न, अलग) |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `selector` | string | ऑपरेशन स्थिति (सफलता/त्रुटि) |
| `duration_ms` | number | अवधि या एलिमेंट प्रकट होने की प्रतीक्षा करें |

**Example:** Example

```yaml
duration_ms: 2000
```

**Example:** Example

```yaml
selector: #loading-complete
timeout_ms: 5000
```
