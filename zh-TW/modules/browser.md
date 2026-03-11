# Browser Automation

Full web automation: navigation, interaction, data extraction, screenshots, and performance monitoring.

**39 modules**

| Module | Description |
|--------|-------------|
| [點擊元素](#點擊元素) | 點擊頁面上的元素 |
| [關閉瀏覽器](#關閉瀏覽器) | 關閉瀏覽器實例並釋放資源 |
| [擷取主控台](#擷取主控台) | 擷取瀏覽器主控台日誌（錯誤、警告、資訊） |
| [管理 Cookie](#管理-cookie) | 取得、設定或清除瀏覽器 Cookie |
| [Smart Detect](#smart-detect) | Smart element detection with multi-strategy matching. Finds elements using text, selector, role, proximity, and fuzzy matching with automatic fallbacks. |
| [處理對話框](#處理對話框) | 處理 alert、confirm 和 prompt 對話框 |
| [下載檔案](#下載檔案) | 從瀏覽器下載檔案 |
| [拖放](#拖放) | 拖放元素 |
| [模擬裝置](#模擬裝置) | 模擬裝置或設定自訂視窗大小 |
| [確保瀏覽器](#確保瀏覽器) | 確保存在瀏覽器工作階段（重用或啟動） |
| [執行 JavaScript](#執行-javascript) | 在頁面上下文中執行 JavaScript 程式碼 |
| [擷取資料](#擷取資料) | 從頁面擷取結構化資料 |
| [尋找元素](#尋找元素) | 在頁面中尋找元素並回傳元素 ID 列表 |
| [填寫表單](#填寫表單) | 智慧填表，自動偵測欄位 |
| [切換框架](#切換框架) | 切換到 iframe 或框架上下文 |
| [模擬地理位置](#模擬地理位置) | 模擬瀏覽器地理位置 |
| [前往網址](#前往網址) | 開啟指定的網址 |
| [懸停元素](#懸停元素) | 將滑鼠懸停在元素上 |
| [啟動瀏覽器](#啟動瀏覽器) | 使用 Playwright 啟動新的瀏覽器實例 |
| [導航歷史](#導航歷史) | 瀏覽器歷史記錄導航（返回、前進、重新載入） |
| [網路監控](#網路監控) | 監控和攔截網路請求 |
| [列出頁面](#列出頁面) | 列出所有開啟的瀏覽器頁面/分頁 |
| [翻頁與擷取](#翻頁與擷取) | 自動翻頁並擷取資料 |
| [產生 PDF](#產生-pdf) | 從目前頁面產生 PDF |
| [效能指標](#效能指標) | 收集瀏覽器效能指標 |
| [按鍵](#按鍵) | 按下鍵盤按鍵 |
| [錄製操作](#錄製操作) | 錄製使用者操作為工作流程 |
| [釋放瀏覽器](#釋放瀏覽器) | 釋放瀏覽器會話（僅在擁有時關閉） |
| [截圖](#截圖) | 擷取目前頁面的截圖 |
| [捲動頁面](#捲動頁面) | 捲動頁面到元素、位置或方向 |
| [選擇選項](#選擇選項) | 從下拉選單選擇選項 |
| [DOM 快照](#dom-快照) | 擷取當前頁面的 DOM 快照 |
| [瀏覽器儲存空間](#瀏覽器儲存空間) | 存取 localStorage 和 sessionStorage |
| [管理分頁](#管理分頁) | 建立、切換和關閉瀏覽器分頁 |
| [瀏覽器追蹤](#瀏覽器追蹤) | 開始、停止或儲存瀏覽器效能追蹤 |
| [輸入文字](#輸入文字) | 在輸入欄位中輸入文字 |
| [上傳檔案](#上傳檔案) | 上傳檔案到檔案輸入元素 |
| [設定視窗](#設定視窗) | 取得或設定瀏覽器視窗大小 |
| [等待](#等待) | 等待一段時間或直到元素出現 |

## Modules

### 點擊元素

`browser.click`

點擊頁面上的元素

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
| `status` | string | 操作狀態（成功/錯誤） |
| `selector` | string | 被點擊的選擇器 |
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

### 關閉瀏覽器

`browser.close`

關閉瀏覽器實例並釋放資源

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `_no_params` | boolean | No | `True` | This module requires no parameters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `message` | string | 關閉結果訊息 |

**Example:** Example

```yaml
```

### 擷取主控台

`browser.console`

擷取瀏覽器主控台日誌（錯誤、警告、資訊）

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `level` | select (`all`, `error`, `warning`, `info`, `log`) | No | `all` | Filter console messages by level |
| `timeout` | number | No | `5000` | Maximum time to wait in milliseconds |
| `clear_existing` | boolean | No | `False` | Clear existing messages before capturing |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `messages` | array | 主控台訊息列表 |
| `count` | number | 日誌數量 |

**Example:** Example

```yaml
timeout: 3000
```

**Example:** Example

```yaml
level: error
timeout: 5000
```

### 管理 Cookie

`browser.cookies`

取得、設定或清除瀏覽器 Cookie

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
| `status` | string | 操作狀態 |
| `cookies` | array | Cookie 列表 |
| `count` | number | Cookie 數量 |

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

### 處理對話框

`browser.dialog`

處理 alert、confirm 和 prompt 對話框

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`accept`, `dismiss`, `listen`) | Yes | - | How to respond to the dialog |
| `prompt_text` | string | No | - | Text to enter in prompt dialog (for accept action) |
| `timeout` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `message` | string | 對話框訊息 |
| `type` | string | 對話框類型 |
| `default_value` | string | 對話框預設值 |

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

### 下載檔案

`browser.download`

從瀏覽器下載檔案

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `save_path` | string | Yes | - | Path where to save the downloaded file |
| `timeout_ms` | number | No | `60000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `path` | string | 檔案路徑 |
| `filename` | string | 檔案名稱 |
| `size` | number | 檔案大小 |

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

### 拖放

`browser.drag`

拖放元素

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
| `status` | string | 操作狀態 |
| `source` | string | 來源元素位置 |
| `target` | string | 目標元素位置 |

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

### 模擬裝置

`browser.emulate`

模擬裝置或設定自訂視窗大小

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `device` | select (`iphone_12`, `iphone_14`, `iphone_14_pro_max`, `iphone_se`, `pixel_7`, `pixel_5`, `galaxy_s21`, `galaxy_s23`, `ipad_pro`, `ipad_mini`, `galaxy_tab_s8`, `desktop_chrome`, `desktop_firefox`, `desktop_safari`, `desktop_edge`, `laptop`, `macbook_pro`, `custom`) | Yes | - | 要模擬的裝置名稱（例如 iPhone 13） |
| `width` | number | No | - | 視窗寬度（像素） |
| `height` | number | No | - | 視窗高度（像素） |
| `user_agent` | string | No | - | 自訂使用者代理字串 |
| `is_mobile` | boolean | No | - | 是否模擬行動裝置 |
| `has_touch` | boolean | No | - | 裝置是否支援觸控 |
| `device_scale_factor` | number | No | - | 裝置像素比 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態（成功/錯誤） |
| `device` | string | 模擬的裝置名稱 |
| `viewport` | object | 目前的視窗尺寸 |
| `is_mobile` | boolean | 是否啟用行動裝置模擬 |

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

### 確保瀏覽器

`browser.ensure`

確保存在瀏覽器工作階段（重用或啟動）

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 瀏覽器是被啟動還是重用 |
| `message` | string | 瀏覽器是被啟動還是重用 |
| `is_owner` | boolean | 瀏覽器是被啟動還是重用 |

**Example:** Example

```yaml
headless: false
```

**Example:** Example

```yaml
headless: true
```

### 執行 JavaScript

`browser.evaluate`

在頁面上下文中執行 JavaScript 程式碼

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `script` | string | Yes | - | JavaScript code to execute (can use return statement) |
| `args` | array | No | - | Arguments to pass to the script function |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `result` | any | 執行結果 |

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

### 擷取資料

`browser.extract`

從頁面擷取結構化資料

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |
| `fields` | object | No | - | Define fields to extract from each item |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `data` | array | 擷取的資料 |
| `count` | number | 擷取的項目數量 |

**Example:** Example

```yaml
selector: .g
limit: 10
fields: {"title": {"selector": "h3", "type": "text"}, "url": {"selector": "a", "type": "attribute", "attribute": "href"}}
```

### 尋找元素

`browser.find`

在頁面中尋找元素並回傳元素 ID 列表

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `count` | number | 找到的元素數量 |
| `element_ids` | array | 元素 ID 列表 |

**Example:** Find search results

```yaml
selector: div.tF2Cxc
limit: 10
```

### 填寫表單

`browser.form`

智慧填表，自動偵測欄位

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
| `filled_fields` | array | 每個欄位填寫的延遲時間（模擬人類行為） |
| `failed_fields` | array | 已填寫欄位的清單 |
| `submitted` | boolean | 已填寫欄位的清單 |

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

### 切換框架

`browser.frame`

切換到 iframe 或框架上下文

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
| `status` | string | 操作狀態 |
| `frame_url` | string | 框架 URL |
| `frame_name` | string | 框架名稱 |
| `frames` | array | 框架列表 |

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

### 模擬地理位置

`browser.geolocation`

模擬瀏覽器地理位置

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `latitude` | number | Yes | - | Latitude coordinate (-90 to 90) |
| `longitude` | number | Yes | - | Longitude coordinate (-180 to 180) |
| `accuracy` | number | No | `100` | Position accuracy in meters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `location` | object | 位置資訊 |

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

### 前往網址

`browser.goto`

開啟指定的網址

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to navigate to |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `url` | string | 實際開啟的網址 |

**Example:** Example

```yaml
url: https://www.google.com
wait_until: domcontentloaded
```

### 懸停元素

`browser.hover`

將滑鼠懸停在元素上

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |
| `position` | object | No | - | Click position relative to element (0-1 range) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `selector` | string | 懸停的選擇器 |

**Example:** Example

```yaml
selector: .menu-item
```

**Example:** Example

```yaml
selector: #dropdown-trigger
timeout_ms: 5000
```

### 啟動瀏覽器

`browser.launch`

使用 Playwright 啟動新的瀏覽器實例

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |
| `browser_type` | select (`chromium`, `firefox`, `webkit`) | No | `chromium` | 要使用的瀏覽器引擎（chromium、firefox、webkit） |
| `proxy` | string | No | - | 代理伺服器 URL |
| `user_agent` | string | No | - | 自訂使用者代理字串 |
| `locale` | string | No | `en-US` | Browser locale (e.g. en-US, zh-TW, ja-JP) |
| `slow_mo` | number | No | `0` | 以指定毫秒數放慢操作 |
| `record_video_dir` | string | No | - | Directory to save recorded videos (enables Playwright video recording) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `message` | string | 啟動結果訊息 |
| `browser_type` | string | 啟動的瀏覽器類型 |
| `headless` | boolean | 瀏覽器是否以無頭模式運行 |
| `viewport` | object | 目前的視窗尺寸 |

**Example:** Example

```yaml
headless: true
```

**Example:** Example

```yaml
headless: false
```

### 導航歷史

`browser.navigation`

瀏覽器歷史記錄導航（返回、前進、重新載入）

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`back`, `forward`, `reload`) | Yes | `reload` | Which navigation action to perform |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態（成功/錯誤） |
| `action` | string | 執行的導航動作 |
| `url` | string | 導航後的當前 URL |

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

### 網路監控

`browser.network`

監控和攔截網路請求

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
| `status` | string | 操作狀態 |
| `requests` | array | 請求列表 |
| `blocked_count` | number | 被阻擋的請求數量 |

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

### 列出頁面

`browser.pages`

列出所有開啟的瀏覽器頁面/分頁

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `include_details` | boolean | No | `True` | 包含每個頁面的詳細資訊 |
| `include_content_info` | boolean | No | `False` | 包含每個頁面的內容類型資訊 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態（成功/錯誤） |
| `pages` | array | 開啟頁面的清單 |
| `count` | number | 開啟頁面的數量 |
| `current_index` | number | 目前使用中頁面的索引 |

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

### 翻頁與擷取

`browser.pagination`

自動翻頁並擷取資料

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
| `items` | array | 當沒有更多頁面時出現的選擇器（停止翻頁） |
| `total_items` | integer | 所有頁面中擷取的所有項目 |
| `pages_processed` | integer | 所有頁面中擷取的所有項目 |
| `stopped_reason` | string | 處理的頁數 |

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

### 產生 PDF

`browser.pdf`

從目前頁面產生 PDF

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
| `status` | string | 操作狀態 |
| `path` | string | PDF 檔案路徑 |
| `size` | number | PDF 檔案大小 |

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

### 效能指標

`browser.performance`

收集瀏覽器效能指標

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | array | No | `['all']` | 要收集的效能指標 |
| `timeout_ms` | number | No | `3000` | 超時時間（毫秒） |
| `setup_observers` | boolean | No | `True` | 在收集前設置效能觀察者 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態（成功/錯誤） |
| `metrics` | object | 收集到的效能指標 |

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

### 按鍵

`browser.press`

按下鍵盤按鍵

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | The key to press (e.g., Enter, Escape, Tab) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `key` | string | 按下的按鍵 |

**Example:** Example

```yaml
key: Enter
```

**Example:** Example

```yaml
key: Escape
```

### 錄製操作

`browser.record`

錄製使用者操作為工作流程

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Recording action to perform |
| `output_format` | string | No | `yaml` | Format for recorded workflow |
| `output_path` | string | No | - | Path where the output file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `recording` | array | 錄製狀態 |
| `workflow` | string | 錄製的工作流程 |

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

### 釋放瀏覽器

`browser.release`

釋放瀏覽器會話（僅在擁有時關閉）

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `force` | boolean | No | `False` | 即使此範本不擁有也關閉瀏覽器 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 即使此範本不擁有也關閉瀏覽器 |
| `message` | string | 執行的操作 |
| `was_owner` | boolean | 執行的操作 |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
force: true
```

### 截圖

`browser.screenshot`

擷取目前頁面的截圖

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
| `status` | string | 操作狀態 |
| `filepath` | string | 截圖檔案路徑 |

**Example:** Example

```yaml
path: output/page.png
```

### 捲動頁面

`browser.scroll`

捲動頁面到元素、位置或方向

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
| `status` | string | 操作狀態 |
| `scrolled_to` | object | 捲動到的位置 |

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

### 選擇選項

`browser.select`

從下拉選單選擇選項

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `select_method` | select (`value`, `label`, `index`) | No | `value` | How to identify which option to select |
| `target` | string | No | - | The option value or label text to select |
| `index` | number | No | - | Option index to select (0-based) |
| `timeout` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `selected` | array | 選擇的值 |
| `selector` | string | 選擇器 |

**Example:** Example

```yaml
selector: select#country
select_method: value
target: us
```

**Example:** Example

```yaml
selector: select#country
select_method: label
target: United States
```

**Example:** Example

```yaml
selector: select#country
select_method: index
index: 2
```

### DOM 快照

`browser.snapshot`

擷取當前頁面的 DOM 快照

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`html`, `mhtml`, `text`) | No | `html` | 輸出格式（html 或 text） |
| `selector` | string | No | - | 擷取特定元素的 CSS 選擇器 |
| `path` | string | No | - | 儲存快照的路徑 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態（成功/錯誤） |
| `format` | string | 快照的格式 |
| `content` | string | 快照內容 |
| `path` | string | 快照儲存的路徑 |
| `size_bytes` | number | 快照的大小（位元組） |

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

### 瀏覽器儲存空間

`browser.storage`

存取 localStorage 和 sessionStorage

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
| `status` | string | 操作狀態 |
| `value` | any | 取得的值 |
| `keys` | array | 儲存的鍵列表 |
| `length` | number | 儲存項目數量 |

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

### 管理分頁

`browser.tab`

建立、切換和關閉瀏覽器分頁

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Tab action to perform |
| `url` | string | No | - | URL to navigate to |
| `index` | number | No | - | Tab index to switch to or close (0-based) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `tab_count` | number | 分頁總數 |
| `current_index` | number | 目前分頁索引 |
| `tabs` | array | 分頁列表 |

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

### 瀏覽器追蹤

`browser.trace`

開始、停止或儲存瀏覽器效能追蹤

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | 追蹤動作（開始、停止、儲存） |
| `categories` | array | No | `['devtools.timeline']` | 要擷取的追蹤類別 |
| `screenshots` | boolean | No | `True` | 在追蹤中包含螢幕截圖 |
| `path` | string | No | - | 儲存追蹤檔案的路徑 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態（成功/錯誤） |
| `tracing` | boolean | 追蹤是否目前正在進行 |
| `path` | string | 追蹤儲存的路徑 |
| `size_bytes` | number | 追蹤檔案的大小（位元組） |

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

### 輸入文字

`browser.type`

在輸入欄位中輸入文字

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
| `status` | string | 操作狀態 |
| `selector` | string | 輸入的選擇器 |
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

### 上傳檔案

`browser.upload`

上傳檔案到檔案輸入元素

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `file_path` | string | Yes | - | Local path to the file to upload |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `filename` | string | 檔案名稱 |
| `size` | number | 檔案大小 |
| `selector` | string | 選擇器 |

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

### 設定視窗

`browser.viewport`

取得或設定瀏覽器視窗大小

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `width` | number | Yes | `1280` | 視窗寬度（像素） |
| `height` | number | Yes | `720` | 視窗高度（像素） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態（成功/錯誤） |
| `viewport` | object | 目前的視窗尺寸 |
| `previous_viewport` | object | 先前的視窗尺寸 |

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

### 等待

`browser.wait`

等待一段時間或直到元素出現

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Duration of the operation in milliseconds |
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `state` | select (`visible`, `hidden`, `attached`, `detached`) | No | `visible` | 等待的狀態（可見、隱藏、附加、分離） |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作狀態 |
| `selector` | string | 等待的選擇器 |
| `duration_ms` | number | 等待時間（毫秒） |

**Example:** Example

```yaml
duration_ms: 2000
```

**Example:** Example

```yaml
selector: #loading-complete
timeout_ms: 5000
```
