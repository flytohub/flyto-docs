# Browser Automation

Full web automation: navigation, interaction, data extraction, screenshots, and performance monitoring.

**54 modules**

| Module | Description |
|--------|-------------|
| [Xử Lý Thử Thách](#xử-lý-thử-thách) | Tự động phát hiện và xử lý thử thách chống bot (Cloudflare, CAPTCHA) |
| [Nhấp phần tử](#nhấp-phần-tử) | Nhấp vào một phần tử trên trang |
| [Đóng trình duyệt](#đóng-trình-duyệt) | Đóng phiên trình duyệt và giải phóng tài nguyên |
| [Kết Nối Từ Xa](#kết-nối-từ-xa) | Kết nối dịch vụ trình duyệt từ xa (Browserless, BrowserBase). Fingerprint thật, vượt Cloudflare. |
| [Chụp Console](#chụp-console) | Chụp nhật ký console trình duyệt (lỗi, cảnh báo, thông tin) |
| [Quản lý Cookies](#quản-lý-cookies) | Lấy, đặt hoặc xóa cookie trình duyệt |
| [Tệp Cookie](#tệp-cookie) | Nhập hoặc xuất cookie trình duyệt từ/đến tệp JSON. |
| [Smart Detect](#smart-detect) | Smart element detection with multi-strategy matching. Finds elements using text, selector, role, proximity, and fuzzy matching with automatic fallbacks. |
| [Phát Hiện Danh Sách](#phát-hiện-danh-sách) | Tự động phát hiện mục lặp lại trên trang (bài viết, sản phẩm, kết quả tìm kiếm) |
| [Xử lý hộp thoại](#xử-lý-hộp-thoại) | Xử lý hộp thoại alert, confirm và prompt |
| [Tải tệp](#tải-tệp) | Tải tệp từ trình duyệt |
| [Kéo và thả](#kéo-và-thả) | Kéo và thả các phần tử |
| [Mô phỏng thiết bị](#mô-phỏng-thiết-bị) | Mô phỏng thiết bị hoặc đặt khung nhìn tùy chỉnh |
| [Đảm bảo Trình duyệt](#đảm-bảo-trình-duyệt) | Đảm bảo phiên trình duyệt tồn tại (tái sử dụng hoặc khởi chạy) |
| [Thực thi JavaScript](#thực-thi-javascript) | Thực thi mã JavaScript trong ngữ cảnh trang |
| [Trích xuất dữ liệu](#trích-xuất-dữ-liệu) | Trích xuất dữ liệu có cấu trúc từ trang |
| [Trích Xuất Lồng Nhau](#trích-xuất-lồng-nhau) | Trích xuất dữ liệu lồng nhau/dạng cây (bình luận, luồng, thư mục). |
| [Tìm phần tử](#tìm-phần-tử) | Tìm các phần tử trong trang và trả về danh sách ID phần tử |
| [Điền Biểu mẫu](#điền-biểu-mẫu) | Điền biểu mẫu thông minh với phát hiện trường tự động |
| [Chuyển Frame](#chuyển-frame) | Chuyển sang ngữ cảnh iframe hoặc frame |
| [Giả lập vị trí địa lý](#giả-lập-vị-trí-địa-lý) | Giả lập vị trí địa lý trình duyệt |
| [Đi đến URL](#đi-đến-url) | Điều hướng đến một URL cụ thể |
| [Di chuột qua phần tử](#di-chuột-qua-phần-tử) | Di chuột qua một phần tử |
| [Tương Tác Trình Duyệt](#tương-tác-trình-duyệt) | Tạm dừng để người dùng tương tác với trang trình duyệt |
| [Khởi chạy trình duyệt](#khởi-chạy-trình-duyệt) | Khởi chạy phiên trình duyệt mới với Playwright |
| [Đăng Nhập](#đăng-nhập) | Tự động phát hiện và điền form đăng nhập với xác minh sau đăng nhập. |
| [Điều hướng lịch sử](#điều-hướng-lịch-sử) | Điều hướng lịch sử trình duyệt (quay lại, tiến tới, tải lại) |
| [Giám sát mạng](#giám-sát-mạng) | Giám sát và chặn các yêu cầu mạng |
| [Danh sách Trang](#danh-sách-trang) | Liệt kê tất cả các trang/tab trình duyệt đang mở |
| [Phân trang & Trích xuất](#phân-trang--trích-xuất) | Tự động phân trang và trích xuất dữ liệu |
| [Tạo PDF](#tạo-pdf) | Tạo PDF từ trang hiện tại |
| [Chỉ số Hiệu suất](#chỉ-số-hiệu-suất) | Thu thập các chỉ số hiệu suất trình duyệt |
| [Nhóm Trình Duyệt](#nhóm-trình-duyệt) | Quản lý nhiều phiên trình duyệt cho tự động hóa song song. |
| [Nhấn phím](#nhấn-phím) | Nhấn một phím bàn phím |
| [Xoay Proxy](#xoay-proxy) | Luân chuyển danh sách proxy với phát hiện proxy lỗi. |
| [Trích Xuất Bài Viết](#trích-xuất-bài-viết) | Trích xuất bài viết thông minh — lấy tiêu đề, tác giả, ngày và nội dung chính từ mọi trang web |
| [Ghi hành động](#ghi-hành-động) | Ghi lại các hành động người dùng dưới dạng workflow |
| [Giải phóng Trình duyệt](#giải-phóng-trình-duyệt) | Giải phóng phiên trình duyệt (chỉ đóng nếu sở hữu) |
| [Bắt Phản Hồi](#bắt-phản-hồi) | Bắt nội dung phản hồi API (XHR/fetch). Trích xuất JSON từ lệnh gọi API trên trang. |
| [Kiểm Tra Robots.txt](#kiểm-tra-robots.txt) | Kiểm tra tuân thủ robots.txt và khám phá sitemap. |
| [Chụp màn hình](#chụp-màn-hình) | Chụp ảnh màn hình của trang hiện tại |
| [Cuộn trang](#cuộn-trang) | Cuộn trang đến phần tử, vị trí hoặc hướng |
| [Chọn tùy chọn](#chọn-tùy-chọn) | Chọn tùy chọn từ phần tử dropdown |
| [Phân Tích Sitemap](#phân-tích-sitemap) | Phân tích sitemap.xml và trích xuất URL kèm metadata. |
| [Ảnh chụp DOM](#ảnh-chụp-dom) | Chụp ảnh DOM của trang hiện tại |
| [Lưu trữ trình duyệt](#lưu-trữ-trình-duyệt) | Truy cập localStorage và sessionStorage |
| [Quản lý Tab](#quản-lý-tab) | Tạo, chuyển và đóng các tab trình duyệt |
| [Trích Xuất Bảng](#trích-xuất-bảng) | Trích xuất bảng HTML thành dữ liệu có cấu trúc với tiêu đề tự động phát hiện. |
| [Giới Hạn Tốc Độ](#giới-hạn-tốc-độ) | Giới hạn tốc độ theo tên miền. Chờ giữa các yêu cầu để tránh bị chặn. |
| [Dấu vết Trình duyệt](#dấu-vết-trình-duyệt) | Bắt đầu, dừng hoặc lưu dấu vết hiệu suất trình duyệt |
| [Gõ văn bản](#gõ-văn-bản) | Gõ văn bản vào trường input |
| [Tải tệp lên](#tải-tệp-lên) | Tải tệp lên phần tử input file |
| [Đặt khung nhìn](#đặt-khung-nhìn) | Lấy hoặc đặt kích thước khung nhìn trình duyệt |
| [Chờ](#chờ) | Chờ một khoảng thời gian hoặc cho đến khi một phần tử xuất hiện |

## Modules

### Xử Lý Thử Thách

`browser.challenge`

Tự động phát hiện và xử lý thử thách chống bot (Cloudflare, CAPTCHA)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `auto_wait_seconds` | number | No | `15` | How long to wait for the challenge to auto-resolve before trying API solver or human help. 0 = skip auto-wait. |
| `captcha_provider` | select (``, `2captcha`, `capsolver`) | No | - | Third-party API for automatic captcha solving. Leave empty to skip API solving. |
| `captcha_api_key` | string | No | - | API key for the captcha solving service |
| `human_fallback` | boolean | No | `True` | If auto-wait and API solver both fail, create a breakpoint for the user to solve manually. |
| `human_timeout_seconds` | number | No | `120` | How long to wait for human to solve the challenge. 0 = wait indefinitely. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Result: passed / no_challenge / auto_resolved / human_resolved / timeout |
| `challenge_type` | string | Type of challenge detected (cloudflare, hcaptcha, recaptcha, generic_verify, none) |
| `wait_seconds` | number | How long it took to resolve |
| `required_human` | boolean | Whether human intervention was needed |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
auto_wait_seconds: 0
human_fallback: true
```

**Example:** Example

```yaml
auto_wait_seconds: 30
human_fallback: false
```

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

### Kết Nối Từ Xa

`browser.connect`

Kết nối dịch vụ trình duyệt từ xa (Browserless, BrowserBase). Fingerprint thật, vượt Cloudflare.

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ws_endpoint` | string | Yes | - | CDP WebSocket URL (e.g., wss://chrome.browserless.io?token=xxx). |
| `viewport_width` | number | No | `1280` |  |
| `viewport_height` | number | No | `720` |  |
| `locale` | string | No | `en-US` |  |
| `timeout_ms` | number | No | `30000` |  |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `connected` | boolean | Whether connection succeeded |
| `browser_type` | string | Browser type (chromium) |
| `endpoint` | string | Connected endpoint (redacted) |

**Example:** Example

```yaml
ws_endpoint: wss://chrome.browserless.io?token=TOKEN
```

**Example:** Example

```yaml
ws_endpoint: wss://connect.browserbase.com?apiKey=KEY
```

**Example:** Example

```yaml
ws_endpoint: ws://localhost:3000
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

### Tệp Cookie

`browser.cookies_file`

Nhập hoặc xuất cookie trình duyệt từ/đến tệp JSON.

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`export`, `import`) | Yes | `export` | Export cookies to file or import from file. |
| `file_path` | string | Yes | - | Path to the JSON cookies file. |
| `domain_filter` | string | No | - | Only export/import cookies for this domain (e.g., ".github.com"). Empty = all. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `action` | string | Action performed (export/import) |
| `cookie_count` | number | Number of cookies exported/imported |
| `file_path` | string | Path to the cookies file |
| `domains` | array | Unique domains in the cookies |

**Example:** Example

```yaml
action: export
file_path: cookies.json
```

**Example:** Example

```yaml
action: import
file_path: cookies.json
```

**Example:** Example

```yaml
action: export
file_path: gh.json
domain_filter: .github.com
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

### Phát Hiện Danh Sách

`browser.detect_list`

Tự động phát hiện mục lặp lại trên trang (bài viết, sản phẩm, kết quả tìm kiếm)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `min_items` | number | No | `3` | Minimum items to consider a valid list. |
| `max_items` | number | No | `200` | Maximum items to return. |
| `include_text` | boolean | No | `True` | Include text content from each item (excluding links). |
| `selector` | string | No | - | CSS selector for list items. Leave empty for auto-detection. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `items` | array | Detected items [{title, url, image, text, date, _index}] |
| `count` | number | Number of items found |
| `selector` | string | CSS selector that matches the items (reusable for browser.extract or browser.pagination) |
| `auto_detected` | boolean | Whether items were auto-detected or from user selector |
| `content_found` | boolean | Whether enough items were found |
| `consistency` | number | Structural consistency score (0-1) |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
selector: .post-item
```

**Example:** Example

```yaml
min_items: 5
max_items: 50
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
| `device_scale_factor` | number | No | - | Tỷ lệ điểm ảnh của thiết bị |
| `is_mobile` | boolean | No | - | Có mô phỏng thiết bị di động không |
| `has_touch` | boolean | No | - | Thiết bị có hỗ trợ cảm ứng không |

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

### Trích Xuất Lồng Nhau

`browser.extract_nested`

Trích xuất dữ liệu lồng nhau/dạng cây (bình luận, luồng, thư mục).

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `root_selector` | string | Yes | - | CSS selector for each item (e.g., ".comment", "li.thread"). |
| `children_selector` | string | No | - | CSS selector for the container holding child items within each item. Leave empty for auto-detect. |
| `fields` | object | No | `{}` | Custom field extraction: {"name": {"selector": "CSS", "type": "text|html|attribute", "attribute": "href"}}. Leave empty for auto-extract. |
| `max_depth` | number | No | `10` | Maximum nesting depth to extract. |
| `limit` | number | No | `0` | Total items to extract (all depths combined). 0 = no limit. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `items` | array | Tree structure [{...fields, children: [{...}]}] |
| `count` | number | Number of root items |
| `total_nodes` | number | Total nodes across all depths |

**Example:** Example

```yaml
root_selector: .comment
children_selector: .replies
fields: {"author": {"selector": ".author"}, "text": {"selector": ".body"}, "date": {"selector": "time", "type": "attribute", "attribute": "datetime"}}
```

**Example:** Example

```yaml
root_selector: li.item
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

### Tương Tác Trình Duyệt

`browser.interact`

Tạm dừng để người dùng tương tác với trang trình duyệt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | No | `Browser Interaction` | Title displayed to approvers |
| `description` | string | No | - | Optional description text |
| `timeout_seconds` | number | No | `0` | Maximum wait time (0 for no timeout) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Trạng thái thao tác |
| `action` | string | Hành động đã thực hiện (click/select/type/toggle) |
| `selector` | string | CSS selector của phần tử tương tác |
| `value` | string | Giá trị sử dụng (cho hành động select/type) |
| `url` | string | URL trang tại thời điểm tương tác |

**Example:** Example

```yaml
title: Choose a department
description: Select the department you want to register for
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
| `channel` | select (``, `chrome`, `msedge`) | No | - | Use system Chrome instead of bundled Chromium for better anti-detection bypass |
| `behavior` | select (`fast`, `normal`, `careful`, `human_like`) | No | `fast` | How the browser interacts: fast (no delays), normal, careful (mouse movement), human_like (full simulation) |
| `stealth` | boolean | No | `True` | Anti-detection patches: WebGL fingerprint, canvas noise, navigator fixes. Always recommended. |
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
| `behavior` | string | Active behavior profile |

**Example:** Example

```yaml
headless: true
```

**Example:** Example

```yaml
headless: false
```

**Example:** Example

```yaml
headless: true
behavior: human_like
stealth: true
```

### Đăng Nhập

`browser.login`

Tự động phát hiện và điền form đăng nhập với xác minh sau đăng nhập.

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `username` | string | Yes | - | Login username or email. |
| `password` | string | Yes | - | Login password. |
| `success_indicator` | string | No | - | CSS selector or URL pattern to verify login succeeded. Leave empty for auto-detect (URL change). |
| `username_selector` | string | No | - | CSS selector for username input. Leave empty for auto-detect. |
| `password_selector` | string | No | - | CSS selector for password input. Leave empty for auto-detect. |
| `submit_selector` | string | No | - | CSS selector for submit button. Leave empty for auto-detect. |
| `wait_ms` | number | No | `5000` | Wait for redirect/page load after clicking submit. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `logged_in` | boolean | Whether login appears successful |
| `url_after` | string | URL after login attempt |
| `url_changed` | boolean | Whether URL changed after login |
| `fields_found` | object | Which form fields were auto-detected |

**Example:** Example

```yaml
username: user@example.com
password: secret
```

**Example:** Example

```yaml
username: admin
password: pass
username_selector: #user
password_selector: #pass
submit_selector: #login-btn
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
| `next_selector` | string | No | - | CSS selector for next page button |
| `load_more_selector` | string | No | - | CSS selector for load more button |
| `fields` | object | No | - | Field definitions {name: {selector, attribute?}} |
| `max_pages` | number | No | `10` | Maximum number of pages to process (0 = unlimited) |
| `max_items` | number | No | `0` | Stop after collecting this many items (0 = unlimited) |
| `wait_between_pages_ms` | number | No | `1000` | Fixed wait time between page navigations. For adaptive/human-like delays, use browser.throttle before this node. |
| `retry_on_error` | boolean | No | `True` | Retry failed page extractions before giving up |
| `max_retries` | number | No | `3` | Maximum retry attempts per failed page |
| `checkpoint_path` | string | No | - | Save progress to disk. Resumes from checkpoint on restart. Cleared on successful completion. |
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
| `retries_used` | integer | Total number of retries across all pages |
| `resumed` | boolean | Whether execution resumed from a checkpoint |

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
max_items: 100
no_more_indicator: .end-of-feed
checkpoint_path: /tmp/feed_checkpoint.json
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

### Nhóm Trình Duyệt

`browser.pool`

Quản lý nhiều phiên trình duyệt cho tự động hóa song song.

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`create`, `switch`, `close`, `list`, `close_all`) | Yes | `create` |  |
| `name` | string | No | `default` | Unique name for this browser instance. |
| `headless` | boolean | No | `True` | Run in headless mode (for create action). |
| `stealth` | boolean | No | `True` | Apply anti-detection patches (for create action). |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `action` | string | Action performed |
| `name` | string | Browser name |
| `pool` | array | All active browser names (for list action) |
| `count` | number | Number of active browsers |

**Example:** Example

```yaml
action: create
name: scraper1
```

**Example:** Example

```yaml
action: switch
name: scraper1
```

**Example:** Example

```yaml
action: list
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

### Xoay Proxy

`browser.proxy_rotate`

Luân chuyển danh sách proxy với phát hiện proxy lỗi.

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`init`, `rotate`, `mark_dead`, `status`) | Yes | `rotate` |  |
| `proxies` | array | No | `[]` | List of proxy URLs (for init action). e.g., ["http://proxy1:8080", "socks5://proxy2:1080"]. |
| `strategy` | select (`round_robin`, `random`, `failover`) | No | `round_robin` | How to cycle through proxies. |
| `provider_url` | string | No | - | Proxy provider API endpoint that returns proxy IPs (for init). Fetches fresh IPs from Bright Data, Oxylabs, etc. |
| `provider_token` | string | No | - | Bearer token for the proxy provider API. |
| `headless` | boolean | No | `True` | Run browser in headless mode after rotation. |
| `preserve_cookies` | boolean | No | `True` | Export cookies before rotation and import into the new browser. Keeps login sessions alive. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `action` | string | Action performed |
| `current_proxy` | string | Currently active proxy |
| `pool_size` | number | Total proxies in pool |
| `alive` | number | Alive proxies |
| `dead` | number | Dead proxies |

**Example:** Example

```yaml
action: init
proxies: ["http://p1:8080", "http://p2:8080"]
```

**Example:** Example

```yaml
action: rotate
```

### Trích Xuất Bài Viết

`browser.readability`

Trích xuất bài viết thông minh — lấy tiêu đề, tác giả, ngày và nội dung chính từ mọi trang web

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `include_images` | boolean | No | `True` | Extract images from the article content. |
| `include_links` | boolean | No | `False` | Extract links from the article content. |
| `wait_ms` | number | No | `0` | Wait for dynamic content to load before extracting. 0 = no wait. |
| `selector` | string | No | - | CSS selector cho vùng nội dung. Để trống để tự động phát hiện. |
| `title_selector` | string | No | - | CSS selector for the article title. Leave empty for auto-detection (og:title → h1 → document.title). |
| `min_content_length` | number | No | `80` | Minimum character count to consider content valid. |
| `clean_selectors` | array | No | `[]` | Additional CSS selectors to remove from content (e.g., site-specific ads or widgets). |
| `ai_fallback` | boolean | No | `False` | When heuristic extraction fails (content_found=false), fall back to LLM extraction. Requires AI provider configured. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `title` | string | Article title |
| `author` | string | Author name |
| `date` | string | Publication date (ISO 8601 or raw) |
| `content` | string | Clean article text (paragraphs separated by \n\n) |
| `html` | string | Cleaned HTML of the content area |
| `excerpt` | string | Short excerpt (first 300 chars or meta description) |
| `site_name` | string | Website name |
| `image` | string | Featured image URL |
| `images` | array | All images in content [{src, alt, width, height}] |
| `videos` | array | Embedded videos [{src, type}] |
| `links` | array | All links in content [{href, text}] |
| `word_count` | number | Word count of extracted content |
| `language` | string | Page language code |
| `url` | string | Page URL |
| `content_found` | boolean | Whether meaningful content was detected |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
selector: .entry-content
include_images: true
```

**Example:** Example

```yaml
clean_selectors: [".ad-wrapper", ".promo-box", ".paywall-overlay"]
wait_ms: 1000
```

**Example:** Example

```yaml
title_selector: .article-headline h1
selector: .article-body
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

### Bắt Phản Hồi

`browser.response`

Bắt nội dung phản hồi API (XHR/fetch). Trích xuất JSON từ lệnh gọi API trên trang.

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url_pattern` | string | Yes | - | Regex pattern to match response URLs (e.g., "/api/data", "graphql"). |
| `wait_ms` | number | No | `5000` | How long to listen for matching responses. 0 = capture during next navigation only. |
| `max_responses` | number | No | `0` | Stop after capturing this many responses. 0 = no limit. |
| `resource_types` | string | No | `xhr,fetch` | Comma-separated resource types to capture (xhr, fetch, document). Empty = all. |
| `include_headers` | boolean | No | `False` | Include response headers in output. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `responses` | array | Captured responses [{url, status, body, content_type, headers}] |
| `count` | number | Number of responses captured |

**Example:** Example

```yaml
url_pattern: /api/
wait_ms: 5000
```

**Example:** Example

```yaml
url_pattern: graphql
wait_ms: 3000
```

### Kiểm Tra Robots.txt

`browser.robots`

Kiểm tra tuân thủ robots.txt và khám phá sitemap.

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `check_url` | string | No | - | Specific URL to check if allowed. Empty = just parse robots.txt. |
| `user_agent` | string | No | `*` | Bot name to check rules for (e.g., "Googlebot", "*"). |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `exists` | boolean | Whether robots.txt exists |
| `allowed` | boolean | Whether the URL is allowed for scraping |
| `matched_rule` | string | The robots.txt rule that matched |
| `crawl_delay` | number | Crawl-delay in seconds (0 if not set) |
| `sitemaps` | array | Sitemap URLs found in robots.txt |
| `rule_count` | number | Total number of rules parsed |

**Example:** Example

```yaml
check_url: /api/data
```

**Example:** Example

```yaml
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
| `select_method` | select (`value`, `label`, `index`) | No | `value` | How to identify which option to select |
| `target` | string | No | - | The option value or label text to select |
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

### Phân Tích Sitemap

`browser.sitemap`

Phân tích sitemap.xml và trích xuất URL kèm metadata.

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `sitemap_url` | string | No | - | Full URL to sitemap.xml. Leave empty to use current site's /sitemap.xml. |
| `url_pattern` | string | No | - | Regex to filter URLs (e.g., "/blog/", "/products/"). Empty = all URLs. |
| `max_urls` | number | No | `0` | Maximum URLs to return. 0 = all. |
| `follow_index` | boolean | No | `True` | If sitemap is an index, automatically follow child sitemaps. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `urls` | array | URLs found [{url, lastmod, changefreq, priority}] |
| `count` | number | Number of URLs found |
| `is_index` | boolean | Whether the sitemap was an index file |
| `child_sitemaps` | number | Number of child sitemaps (if index) |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
url_pattern: /blog/
max_urls: 100
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

### Trích Xuất Bảng

`browser.table`

Trích xuất bảng HTML thành dữ liệu có cấu trúc với tiêu đề tự động phát hiện.

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | No | `table` | CSS selector for the table. Default: first <table> on page. |
| `table_index` | number | No | `0` | If multiple tables match, which one to extract (0-based). |
| `max_rows` | number | No | `0` | Maximum rows to extract. 0 = all rows. |
| `include_html` | boolean | No | `False` | Include raw HTML for each cell (as field_name_html). |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `rows` | array | Table rows as objects [{header: value, ...}] |
| `headers` | array | Column headers detected |
| `count` | number | Number of rows extracted |
| `tables_found` | number | Total tables matching selector |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
selector: #results-table
max_rows: 100
```

### Giới Hạn Tốc Độ

`browser.throttle`

Giới hạn tốc độ theo tên miền. Chờ giữa các yêu cầu để tránh bị chặn.

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `strategy` | select (`fixed`, `adaptive`, `human_like`) | No | `fixed` | Delay strategy: fixed, adaptive (auto-backoff on errors), human_like (random delays with reading pauses). |
| `min_interval_ms` | number | No | `2000` | Base delay (fixed) or minimum delay (adaptive/human_like). |
| `max_interval_ms` | number | No | `15000` | Maximum delay for adaptive/human_like strategies. |
| `url` | string | No | - | URL to throttle for. Empty = use current page URL. |
| `signal` | select (`none`, `success`, `error`, `rate_limit`) | No | `none` | Report success or error to update adaptive delay. |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `domain` | string | Domain that was throttled |
| `waited_ms` | number | Actual milliseconds waited (0 if no wait needed) |
| `interval_ms` | number | Current effective interval |
| `strategy` | string | Active strategy |

**Example:** Example

```yaml
min_interval_ms: 2000
```

**Example:** Example

```yaml
strategy: adaptive
min_interval_ms: 1000
max_interval_ms: 15000
```

**Example:** Example

```yaml
strategy: human_like
min_interval_ms: 1500
max_interval_ms: 8000
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
