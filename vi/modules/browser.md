# Browser Automation

Full web automation: navigation, interaction, data extraction, screenshots, and performance monitoring.

**39 modules**

| Module | Description |
|--------|-------------|
| [Nhấp phần tử](#nhấp-phần-tử) | Nhấp vào một phần tử trên trang |
| [Đóng trình duyệt](#đóng-trình-duyệt) | Đóng phiên trình duyệt và giải phóng tài nguyên |
| [Chụp Console](#chụp-console) | Chụp nhật ký console trình duyệt (lỗi, cảnh báo, thông tin) |
| [Quản lý Cookies](#quản-lý-cookies) | Lấy, đặt hoặc xóa cookie trình duyệt |
| [Smart Detect](#smart-detect) | Smart element detection with multi-strategy matching. Finds elements using text, selector, role, proximity, and fuzzy matching with automatic fallbacks. |
| [Xử lý hộp thoại](#xử-lý-hộp-thoại) | Xử lý hộp thoại alert, confirm và prompt |
| [Tải tệp](#tải-tệp) | Tải tệp từ trình duyệt |
| [Kéo và thả](#kéo-và-thả) | Kéo và thả các phần tử |
| [Mô phỏng thiết bị](#mô-phỏng-thiết-bị) | Mô phỏng thiết bị hoặc đặt khung nhìn tùy chỉnh |
| [Đảm bảo Trình duyệt](#đảm-bảo-trình-duyệt) | Đảm bảo phiên trình duyệt tồn tại (tái sử dụng hoặc khởi chạy) |
| [Thực thi JavaScript](#thực-thi-javascript) | Thực thi mã JavaScript trong ngữ cảnh trang |
| [Trích xuất dữ liệu](#trích-xuất-dữ-liệu) | Trích xuất dữ liệu có cấu trúc từ trang |
| [Tìm phần tử](#tìm-phần-tử) | Tìm các phần tử trong trang và trả về danh sách ID phần tử |
| [Điền Biểu mẫu](#điền-biểu-mẫu) | Điền biểu mẫu thông minh với phát hiện trường tự động |
| [Chuyển Frame](#chuyển-frame) | Chuyển sang ngữ cảnh iframe hoặc frame |
| [Giả lập vị trí địa lý](#giả-lập-vị-trí-địa-lý) | Giả lập vị trí địa lý trình duyệt |
| [Đi đến URL](#đi-đến-url) | Điều hướng đến một URL cụ thể |
| [Di chuột qua phần tử](#di-chuột-qua-phần-tử) | Di chuột qua một phần tử |
| [Khởi chạy trình duyệt](#khởi-chạy-trình-duyệt) | Khởi chạy phiên trình duyệt mới với Playwright |
| [Điều hướng lịch sử](#điều-hướng-lịch-sử) | Điều hướng lịch sử trình duyệt (quay lại, tiến tới, tải lại) |
| [Giám sát mạng](#giám-sát-mạng) | Giám sát và chặn các yêu cầu mạng |
| [Danh sách Trang](#danh-sách-trang) | Liệt kê tất cả các trang/tab trình duyệt đang mở |
| [Phân trang & Trích xuất](#phân-trang--trích-xuất) | Tự động phân trang và trích xuất dữ liệu |
| [Tạo PDF](#tạo-pdf) | Tạo PDF từ trang hiện tại |
| [Chỉ số Hiệu suất](#chỉ-số-hiệu-suất) | Thu thập các chỉ số hiệu suất trình duyệt |
| [Nhấn phím](#nhấn-phím) | Nhấn một phím bàn phím |
| [Ghi hành động](#ghi-hành-động) | Ghi lại các hành động người dùng dưới dạng workflow |
| [Giải phóng Trình duyệt](#giải-phóng-trình-duyệt) | Giải phóng phiên trình duyệt (chỉ đóng nếu sở hữu) |
| [Chụp màn hình](#chụp-màn-hình) | Chụp ảnh màn hình của trang hiện tại |
| [Cuộn trang](#cuộn-trang) | Cuộn trang đến phần tử, vị trí hoặc hướng |
| [Chọn tùy chọn](#chọn-tùy-chọn) | Chọn tùy chọn từ phần tử dropdown |
| [Ảnh chụp DOM](#ảnh-chụp-dom) | Chụp ảnh DOM của trang hiện tại |
| [Lưu trữ trình duyệt](#lưu-trữ-trình-duyệt) | Truy cập localStorage và sessionStorage |
| [Quản lý Tab](#quản-lý-tab) | Tạo, chuyển và đóng các tab trình duyệt |
| [Dấu vết Trình duyệt](#dấu-vết-trình-duyệt) | Bắt đầu, dừng hoặc lưu dấu vết hiệu suất trình duyệt |
| [Gõ văn bản](#gõ-văn-bản) | Gõ văn bản vào trường input |
| [Tải tệp lên](#tải-tệp-lên) | Tải tệp lên phần tử input file |
| [Đặt khung nhìn](#đặt-khung-nhìn) | Lấy hoặc đặt kích thước khung nhìn trình duyệt |
| [Chờ](#chờ) | Chờ một khoảng thời gian hoặc cho đến khi một phần tử xuất hiện |

## Modules

### Nhấp phần tử

`browser.click`

Nhấp vào một phần tử trên trang

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
| `status` | string | Trạng thái thao tác (success/error) |
| `selector` | string | Trạng thái thao tác (success/error) |
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

### Đóng trình duyệt

`browser.close`

Đóng phiên trình duyệt và giải phóng tài nguyên

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `_no_params` | boolean | No | `True` | This module requires no parameters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Đóng phiên trình duyệt |
| `message` | string | Đóng phiên trình duyệt |

**Example:** Example

```yaml
```

### Chụp Console

`browser.console`

Chụp nhật ký console trình duyệt (lỗi, cảnh báo, thông tin)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `level` | select (`all`, `error`, `warning`, `info`, `log`) | No | `all` | Filter console messages by level |
| `timeout` | number | No | `5000` | Maximum time to wait in milliseconds |
| `clear_existing` | boolean | No | `False` | Clear existing messages before capturing |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái thao tác (success/error) |
| `messages` | array | Trạng thái thao tác (success/error) |
| `count` | number | Trạng thái thao tác (success/error) |

**Example:** Example

```yaml
timeout: 3000
```

**Example:** Example

```yaml
level: error
timeout: 5000
```

### Quản lý Cookies

`browser.cookies`

Lấy, đặt hoặc xóa cookie trình duyệt

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
| `status` | string | Trạng thái thao tác (success/error) |
| `cookies` | array | Trạng thái thao tác (success/error) |
| `count` | number | Trạng thái thao tác (success/error) |

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

### Xử lý hộp thoại

`browser.dialog`

Xử lý hộp thoại alert, confirm và prompt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`accept`, `dismiss`, `listen`) | Yes | - | How to respond to the dialog |
| `prompt_text` | string | No | - | Text to enter in prompt dialog (for accept action) |
| `timeout` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái thao tác (success/error) |
| `message` | string | Trạng thái thao tác (success/error) |
| `type` | string | Trạng thái thao tác (success/error) |
| `default_value` | string | Tin nhắn kết quả mô tả kết quả |

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

### Tải tệp

`browser.download`

Tải tệp từ trình duyệt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `save_path` | string | Yes | - | Path where to save the downloaded file |
| `timeout_ms` | number | No | `60000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái thao tác (success/error) |
| `path` | string | Trạng thái thao tác (success/error) |
| `filename` | string | Trạng thái thao tác (success/error) |
| `size` | number | Đường dẫn tệp hoặc tài nguyên |

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

### Kéo và thả

`browser.drag`

Kéo và thả các phần tử

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
| `status` | string | Vị trí trong phần tử đích {x, y} theo phần trăm |
| `source` | string | Vị trí trong phần tử đích {x, y} theo phần trăm |
| `target` | string | Trạng thái thao tác (success/error) |

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

### Mô phỏng thiết bị

`browser.emulate`

Mô phỏng thiết bị hoặc đặt khung nhìn tùy chỉnh

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `device` | select (`iphone_12`, `iphone_14`, `iphone_14_pro_max`, `iphone_se`, `pixel_7`, `pixel_5`, `galaxy_s21`, `galaxy_s23`, `ipad_pro`, `ipad_mini`, `galaxy_tab_s8`, `desktop_chrome`, `desktop_firefox`, `desktop_safari`, `desktop_edge`, `laptop`, `macbook_pro`, `custom`) | Yes | - | Tên thiết bị để mô phỏng (ví dụ: iPhone 13) |
| `width` | number | No | - | Chiều rộng khung nhìn tính bằng pixel |
| `height` | number | No | - | Chiều cao khung nhìn tính bằng pixel |
| `user_agent` | string | No | - | Chuỗi user agent tùy chỉnh |
| `is_mobile` | boolean | No | - | Có mô phỏng thiết bị di động không |
| `has_touch` | boolean | No | - | Thiết bị có hỗ trợ cảm ứng không |
| `device_scale_factor` | number | No | - | Tỷ lệ điểm ảnh của thiết bị |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái hoạt động (thành công/lỗi) |
| `device` | string | Tên thiết bị đã được mô phỏng |
| `viewport` | object | Kích thước khung nhìn hiện tại |
| `is_mobile` | boolean | Mô phỏng di động có đang hoạt động không |

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

### Đảm bảo Trình duyệt

`browser.ensure`

Đảm bảo phiên trình duyệt tồn tại (tái sử dụng hoặc khởi chạy)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trình duyệt đã được khởi chạy hay tái sử dụng |
| `message` | string | Trình duyệt đã được khởi chạy hay tái sử dụng |
| `is_owner` | boolean | Trình duyệt đã được khởi chạy hay tái sử dụng |

**Example:** Example

```yaml
headless: false
```

**Example:** Example

```yaml
headless: true
```

### Thực thi JavaScript

`browser.evaluate`

Thực thi mã JavaScript trong ngữ cảnh trang

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `script` | string | Yes | - | JavaScript code to execute (can use return statement) |
| `args` | array | No | - | Arguments to pass to the script function |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái thao tác (success/error) |
| `result` | any | Trạng thái thao tác (success/error) |

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

### Trích xuất dữ liệu

`browser.extract`

Trích xuất dữ liệu có cấu trúc từ trang

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |
| `fields` | object | No | - | Define fields to extract from each item |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái thao tác (success/error) |
| `data` | array | Trạng thái thao tác (success/error) |
| `count` | number | Trạng thái thao tác (success/error) |

**Example:** Example

```yaml
selector: .g
limit: 10
fields: {"title": {"selector": "h3", "type": "text"}, "url": {"selector": "a", "type": "attribute", "attribute": "href"}}
```

### Tìm phần tử

`browser.find`

Tìm các phần tử trong trang và trả về danh sách ID phần tử

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái thao tác (success/error) |
| `count` | number | Trạng thái thao tác (success/error) |
| `element_ids` | array | Trạng thái thao tác (success/error) |

**Example:** Find search results

```yaml
selector: div.tF2Cxc
limit: 10
```

### Điền Biểu mẫu

`browser.form`

Điền biểu mẫu thông minh với phát hiện trường tự động

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
| `filled_fields` | array | Độ trễ giữa việc điền mỗi trường (để giống hành vi con người hơn) |
| `failed_fields` | array | Danh sách các trường đã được điền |
| `submitted` | boolean | Danh sách các trường đã được điền |

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

### Chuyển Frame

`browser.frame`

Chuyển sang ngữ cảnh iframe hoặc frame

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
| `status` | string | Hành động frame (enter để chuyển sang frame, list để liệt kê tất cả frames) |
| `frame_url` | string | Hành động frame (enter để chuyển sang frame, list để liệt kê tất cả frames) |
| `frame_name` | string | Trạng thái thao tác (success/error) |
| `frames` | array | URL Frame |

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

### Giả lập vị trí địa lý

`browser.geolocation`

Giả lập vị trí địa lý trình duyệt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `latitude` | number | Yes | - | Latitude coordinate (-90 to 90) |
| `longitude` | number | Yes | - | Longitude coordinate (-180 to 180) |
| `accuracy` | number | No | `100` | Position accuracy in meters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Độ chính xác vị trí tính bằng mét |
| `location` | object | Độ chính xác vị trí tính bằng mét |

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

### Đi đến URL

`browser.goto`

Điều hướng đến một URL cụ thể

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to navigate to |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái thao tác (success/error) |
| `url` | string | Điều hướng đến một URL cụ thể |

**Example:** Example

```yaml
url: https://www.google.com
wait_until: domcontentloaded
```

### Di chuột qua phần tử

`browser.hover`

Di chuột qua một phần tử

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |
| `position` | object | No | - | Click position relative to element (0-1 range) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái thao tác (success/error) |
| `selector` | string | Trạng thái thao tác (success/error) |

**Example:** Example

```yaml
selector: .menu-item
```

**Example:** Example

```yaml
selector: #dropdown-trigger
timeout_ms: 5000
```

### Khởi chạy trình duyệt

`browser.launch`

Khởi chạy phiên trình duyệt mới với Playwright

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |
| `browser_type` | select (`chromium`, `firefox`, `webkit`) | No | `chromium` | Công cụ trình duyệt để sử dụng (chromium, firefox, webkit) |
| `proxy` | string | No | - | URL máy chủ proxy |
| `user_agent` | string | No | - | Chuỗi user agent tùy chỉnh |
| `locale` | string | No | `en-US` | Browser locale (e.g. en-US, zh-TW, ja-JP) |
| `slow_mo` | number | No | `0` | Làm chậm hoạt động theo mili giây chỉ định |
| `record_video_dir` | string | No | - | Directory to save recorded videos (enables Playwright video recording) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái thao tác (success/error) |
| `message` | string | Khởi chạy phiên trình duyệt mới |
| `browser_type` | string | Loại trình duyệt đã khởi chạy |
| `headless` | boolean | Trình duyệt có đang chạy chế độ không đầu không |
| `viewport` | object | Kích thước khung nhìn hiện tại |

**Example:** Example

```yaml
headless: true
```

**Example:** Example

```yaml
headless: false
```

### Điều hướng lịch sử

`browser.navigation`

Điều hướng lịch sử trình duyệt (quay lại, tiến tới, tải lại)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`back`, `forward`, `reload`) | Yes | `reload` | Which navigation action to perform |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái hoạt động (thành công/lỗi) |
| `action` | string | Hành động điều hướng đã thực hiện |
| `url` | string | URL hiện tại sau khi điều hướng |

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

### Giám sát mạng

`browser.network`

Giám sát và chặn các yêu cầu mạng

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
| `status` | string | Phản hồi trả về cho các yêu cầu bị chặn |
| `requests` | array | Phản hồi trả về cho các yêu cầu bị chặn |
| `blocked_count` | number | Trạng thái thao tác (success/error) |

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

### Danh sách Trang

`browser.pages`

Liệt kê tất cả các trang/tab trình duyệt đang mở

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `include_details` | boolean | No | `True` | Bao gồm thông tin chi tiết cho mỗi trang |
| `include_content_info` | boolean | No | `False` | Bao gồm thông tin loại nội dung cho mỗi trang |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái hoạt động (thành công/lỗi) |
| `pages` | array | Danh sách các trang đang mở |
| `count` | number | Số lượng trang đang mở |
| `current_index` | number | Chỉ số của trang hiện tại đang hoạt động |

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

### Phân trang & Trích xuất

`browser.pagination`

Tự động phân trang và trích xuất dữ liệu

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
| `items` | array | Chọn xuất hiện khi không còn trang nào nữa (dừng phân trang) |
| `total_items` | integer | Tất cả các mục đã trích xuất từ tất cả các trang |
| `pages_processed` | integer | Tất cả các mục đã trích xuất từ tất cả các trang |
| `stopped_reason` | string | Số trang đã xử lý |

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

### Tạo PDF

`browser.pdf`

Tạo PDF từ trang hiện tại

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
| `status` | string | Tỷ lệ hiển thị trang web (0.1-2) |
| `path` | string | Trạng thái thao tác (success/error) |
| `size` | number | Trạng thái thao tác (success/error) |

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

### Chỉ số Hiệu suất

`browser.performance`

Thu thập các chỉ số hiệu suất trình duyệt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | array | No | `['all']` | Chỉ số hiệu suất cần thu thập |
| `timeout_ms` | number | No | `3000` | Thời gian chờ tính bằng mili giây |
| `setup_observers` | boolean | No | `True` | Thiết lập quan sát hiệu suất trước khi thu thập |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái hoạt động (thành công/lỗi) |
| `metrics` | object | Các chỉ số hiệu suất đã thu thập |

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

### Nhấn phím

`browser.press`

Nhấn một phím bàn phím

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | The key to press (e.g., Enter, Escape, Tab) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái thao tác (success/error) |
| `key` | string | Nhấn một phím bàn phím |

**Example:** Example

```yaml
key: Enter
```

**Example:** Example

```yaml
key: Escape
```

### Ghi hành động

`browser.record`

Ghi lại các hành động người dùng dưới dạng workflow

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Recording action to perform |
| `output_format` | string | No | `yaml` | Format for recorded workflow |
| `output_path` | string | No | - | Path where the output file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Định dạng cho workflow đã ghi (yaml hoặc json) |
| `recording` | array | Định dạng cho workflow đã ghi (yaml hoặc json) |
| `workflow` | string | Trạng thái thao tác (success/error) |

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

### Giải phóng Trình duyệt

`browser.release`

Giải phóng phiên trình duyệt (chỉ đóng nếu sở hữu)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `force` | boolean | No | `False` | Đóng trình duyệt ngay cả khi không thuộc mẫu này |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Đóng trình duyệt ngay cả khi không thuộc mẫu này |
| `message` | string | Hành động đã thực hiện |
| `was_owner` | boolean | Hành động đã thực hiện |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
force: true
```

### Chụp màn hình

`browser.screenshot`

Chụp ảnh màn hình của trang hiện tại

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
| `status` | string | Trạng thái thao tác (success/error) |
| `filepath` | string | Chụp ảnh màn hình của trang hiện tại |

**Example:** Example

```yaml
path: output/page.png
```

### Cuộn trang

`browser.scroll`

Cuộn trang đến phần tử, vị trí hoặc hướng

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
| `status` | string | Trạng thái thao tác (success/error) |
| `scrolled_to` | object | Trạng thái thao tác (success/error) |

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

### Chọn tùy chọn

`browser.select`

Chọn tùy chọn từ phần tử dropdown

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
| `status` | string | Trạng thái thao tác (success/error) |
| `selected` | array | Trạng thái thao tác (success/error) |
| `selector` | string | Trạng thái thao tác (success/error) |

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

### Ảnh chụp DOM

`browser.snapshot`

Chụp ảnh DOM của trang hiện tại

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`html`, `mhtml`, `text`) | No | `html` | Định dạng đầu ra (html hoặc văn bản) |
| `selector` | string | No | - | Bộ chọn CSS để chụp một phần tử cụ thể |
| `path` | string | No | - | Đường dẫn để lưu ảnh chụp |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái hoạt động (thành công/lỗi) |
| `format` | string | Định dạng của ảnh chụp |
| `content` | string | Nội dung ảnh chụp |
| `path` | string | Đường dẫn nơi lưu ảnh chụp |
| `size_bytes` | number | Kích thước của ảnh chụp tính bằng byte |

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

### Lưu trữ trình duyệt

`browser.storage`

Truy cập localStorage và sessionStorage

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
| `status` | string | Trạng thái thao tác (success/error) |
| `value` | any | Trạng thái thao tác (success/error) |
| `keys` | array | Trạng thái thao tác (success/error) |
| `length` | number | Giá trị trả về |

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

### Quản lý Tab

`browser.tab`

Tạo, chuyển và đóng các tab trình duyệt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Tab action to perform |
| `url` | string | No | - | URL to navigate to |
| `index` | number | No | - | Tab index to switch to or close (0-based) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Chỉ số tab để chuyển đến hoặc đóng (bắt đầu từ 0) |
| `tab_count` | number | Chỉ số tab để chuyển đến hoặc đóng (bắt đầu từ 0) |
| `current_index` | number | Trạng thái thao tác (success/error) |
| `tabs` | array | Số lượng tab |

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

### Dấu vết Trình duyệt

`browser.trace`

Bắt đầu, dừng hoặc lưu dấu vết hiệu suất trình duyệt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Hành động dấu vết (bắt đầu, dừng, lưu) |
| `categories` | array | No | `['devtools.timeline']` | Danh mục dấu vết cần chụp |
| `screenshots` | boolean | No | `True` | Bao gồm ảnh chụp màn hình trong dấu vết |
| `path` | string | No | - | Đường dẫn để lưu tệp dấu vết |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái hoạt động (thành công/lỗi) |
| `tracing` | boolean | Dấu vết hiện có đang hoạt động hay không |
| `path` | string | Đường dẫn nơi lưu dấu vết |
| `size_bytes` | number | Kích thước của tệp dấu vết tính bằng byte |

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

### Gõ văn bản

`browser.type`

Gõ văn bản vào trường input

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
| `status` | string | Trạng thái thao tác (success/error) |
| `selector` | string | Gõ văn bản vào trường input |
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

### Tải tệp lên

`browser.upload`

Tải tệp lên phần tử input file

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `file_path` | string | Yes | - | Local path to the file to upload |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái thao tác (success/error) |
| `filename` | string | Trạng thái thao tác (success/error) |
| `size` | number | Trạng thái thao tác (success/error) |
| `selector` | string | Tên tệp |

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

### Đặt khung nhìn

`browser.viewport`

Lấy hoặc đặt kích thước khung nhìn trình duyệt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `width` | number | Yes | `1280` | Chiều rộng khung nhìn tính bằng pixel |
| `height` | number | Yes | `720` | Chiều cao khung nhìn tính bằng pixel |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái hoạt động (thành công/lỗi) |
| `viewport` | object | Kích thước khung nhìn hiện tại |
| `previous_viewport` | object | Kích thước khung nhìn trước đó |

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

### Chờ

`browser.wait`

Chờ một khoảng thời gian hoặc cho đến khi một phần tử xuất hiện

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Duration of the operation in milliseconds |
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `state` | select (`visible`, `hidden`, `attached`, `detached`) | No | `visible` | Trạng thái cần chờ (hiển thị, ẩn, đính kèm, tách rời) |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái thao tác (success/error) |
| `selector` | string | Trạng thái thao tác (success/error) |
| `duration_ms` | number | Chờ một khoảng thời gian hoặc phần tử xuất hiện |

**Example:** Example

```yaml
duration_ms: 2000
```

**Example:** Example

```yaml
selector: #loading-complete
timeout_ms: 5000
```
