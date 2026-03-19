# Browser Automation

Full web automation: navigation, interaction, data extraction, screenshots, and performance monitoring.

**54 modules**

| Module | Description |
|--------|-------------|
| [จัดการการท้าทาย](#จัดการการท้าทาย) | ตรวจจับและจัดการกับการท้าทายของระบบป้องกันบอทอัตโนมัติ (Cloudflare, CAPTCHA) |
| [คลิกองค์ประกอบ](#คลิกองค์ประกอบ) | คลิกองค์ประกอบบนหน้า |
| [ปิดเบราว์เซอร์](#ปิดเบราว์เซอร์) | ปิดอินสแตนซ์เบราว์เซอร์และปล่อยทรัพยากร |
| [เชื่อมต่อระยะไกล](#เชื่อมต่อระยะไกล) | เชื่อมต่อบริการเบราว์เซอร์ระยะไกล (Browserless, BrowserBase) Fingerprint จริง, ผ่าน Cloudflare |
| [จับคอนโซล](#จับคอนโซล) | จับบันทึกคอนโซลเบราว์เซอร์ (ข้อผิดพลาด คำเตือน ข้อมูล) |
| [จัดการคุกกี้](#จัดการคุกกี้) | รับ ตั้งค่า หรือล้างคุกกี้เบราว์เซอร์ |
| [ไฟล์คุกกี้](#ไฟล์คุกกี้) | นำเข้าหรือส่งออกคุกกี้เบราว์เซอร์จาก/ไปยังไฟล์ JSON |
| [Smart Detect](#smart-detect) | Smart element detection with multi-strategy matching. Finds elements using text, selector, role, proximity, and fuzzy matching with automatic fallbacks. |
| [ตรวจจับรายการ](#ตรวจจับรายการ) | ตรวจจับรายการซ้ำบนหน้าเว็บอัตโนมัติ (บทความ, สินค้า, ผลการค้นหา) |
| [จัดการ Dialog](#จัดการ-dialog) | จัดการกล่องโต้ตอบ alert, confirm และ prompt |
| [ดาวน์โหลดไฟล์](#ดาวน์โหลดไฟล์) | ดาวน์โหลดไฟล์จากเบราว์เซอร์ |
| [ลากและวาง](#ลากและวาง) | ลากและวางองค์ประกอบ |
| [จำลองอุปกรณ์](#จำลองอุปกรณ์) | จำลองอุปกรณ์หรือกำหนดขนาดหน้าต่างเอง |
| [ตรวจสอบเบราว์เซอร์](#ตรวจสอบเบราว์เซอร์) | ตรวจสอบให้แน่ใจว่ามีเซสชันเบราว์เซอร์อยู่ (ใช้ซ้ำหรือเปิดใหม่) |
| [รัน JavaScript](#รัน-javascript) | รันโค้ด JavaScript ในบริบทหน้า |
| [ดึงข้อมูล](#ดึงข้อมูล) | ดึงข้อมูลที่มีโครงสร้างจากหน้า |
| [ดึงข้อมูลซ้อน](#ดึงข้อมูลซ้อน) | ดึงข้อมูลแบบซ้อน/โครงสร้างต้นไม้ (ความคิดเห็น, เธรด, โฟลเดอร์) |
| [ค้นหาองค์ประกอบ](#ค้นหาองค์ประกอบ) | ค้นหาองค์ประกอบในหน้าและส่งคืนรายการ ID องค์ประกอบ |
| [กรอกฟอร์ม](#กรอกฟอร์ม) | กรอกฟอร์มอัตโนมัติด้วยการตรวจจับช่องกรอก |
| [สลับ Frame](#สลับ-frame) | สลับไปยังบริบท iframe หรือ frame |
| [จำลอง Geolocation](#จำลอง-geolocation) | จำลองตำแหน่งทางภูมิศาสตร์ของเบราว์เซอร์ |
| [ไปยัง URL](#ไปยัง-url) | นำทางไปยัง URL ที่ระบุ |
| [วางเมาส์เหนือองค์ประกอบ](#วางเมาส์เหนือองค์ประกอบ) | วางเมาส์เหนือองค์ประกอบ |
| [โต้ตอบเบราว์เซอร์](#โต้ตอบเบราว์เซอร์) | หยุดชั่วคราวเพื่อให้ผู้ใช้โต้ตอบกับหน้าเบราว์เซอร์ |
| [เปิดเบราว์เซอร์](#เปิดเบราว์เซอร์) | เปิดอินสแตนซ์เบราว์เซอร์ใหม่ด้วย Playwright |
| [เข้าสู่ระบบ](#เข้าสู่ระบบ) | ตรวจจับและกรอกฟอร์มเข้าสู่ระบบอัตโนมัติพร้อมการยืนยันหลังเข้าสู่ระบบ |
| [นำทางประวัติ](#นำทางประวัติ) | นำทางประวัติเบราว์เซอร์ (ย้อนกลับ, ไปข้างหน้า, โหลดซ้ำ) |
| [ตรวจสอบเครือข่าย](#ตรวจสอบเครือข่าย) | ติดตามและดักจับคำขอเครือข่าย |
| [รายการหน้า](#รายการหน้า) | แสดงรายการหน้า/แท็บเบราว์เซอร์ที่เปิดอยู่ทั้งหมด |
| [แบ่งหน้า & ดึงข้อมูล](#แบ่งหน้า--ดึงข้อมูล) | แบ่งหน้าอัตโนมัติและดึงข้อมูล |
| [สร้าง PDF](#สร้าง-pdf) | สร้าง PDF จากหน้าปัจจุบัน |
| [ข้อมูลประสิทธิภาพ](#ข้อมูลประสิทธิภาพ) | รวบรวมข้อมูลประสิทธิภาพของเบราว์เซอร์ |
| [กลุ่มเบราว์เซอร์](#กลุ่มเบราว์เซอร์) | จัดการเบราว์เซอร์หลายอินสแตนซ์สำหรับการทำงานอัตโนมัติแบบขนาน |
| [กดปุ่ม](#กดปุ่ม) | กดปุ่มแป้นพิมพ์ |
| [หมุนเวียนพร็อกซี](#หมุนเวียนพร็อกซี) | สลับรายการพร็อกซีพร้อมตรวจจับพร็อกซีที่ใช้ไม่ได้ |
| [ดึงบทความ](#ดึงบทความ) | ดึงบทความอัจฉริยะ — ดึงหัวข้อ, ผู้เขียน, วันที่ และเนื้อหาหลักจากทุกหน้าเว็บ |
| [บันทึกการกระทำ](#บันทึกการกระทำ) | บันทึกการกระทำของผู้ใช้เป็น workflow |
| [ปล่อยเบราว์เซอร์](#ปล่อยเบราว์เซอร์) | ปล่อยเซสชันเบราว์เซอร์ (ปิดเฉพาะถ้าเป็นเจ้าของ) |
| [จับการตอบกลับ](#จับการตอบกลับ) | จับเนื้อหาการตอบกลับ API (XHR/fetch) ดึง JSON จาก API บนหน้าเว็บ |
| [ตรวจสอบ Robots.txt](#ตรวจสอบ-robots.txt) | ตรวจสอบการปฏิบัติตาม robots.txt และค้นหา sitemap |
| [ถ่ายภาพหน้าจอ](#ถ่ายภาพหน้าจอ) | ถ่ายภาพหน้าจอของหน้าปัจจุบัน |
| [เลื่อนหน้า](#เลื่อนหน้า) | เลื่อนหน้าไปยังองค์ประกอบ ตำแหน่ง หรือทิศทาง |
| [เลือกตัวเลือก](#เลือกตัวเลือก) | เลือกตัวเลือกจากองค์ประกอบ dropdown |
| [แยกวิเคราะห์ Sitemap](#แยกวิเคราะห์-sitemap) | แยกวิเคราะห์ sitemap.xml และดึง URL พร้อม metadata |
| [ภาพ DOM](#ภาพ-dom) | จับภาพ DOM ของหน้าปัจจุบัน |
| [พื้นที่เก็บข้อมูลของเบราว์เซอร์](#พื้นที่เก็บข้อมูลของเบราว์เซอร์) | เข้าถึง localStorage และ sessionStorage |
| [จัดการแท็บ](#จัดการแท็บ) | สร้าง สลับ และปิดแท็บเบราว์เซอร์ |
| [ดึงตาราง](#ดึงตาราง) | ดึงตาราง HTML เป็นข้อมูลมีโครงสร้างพร้อมหัวตารางที่ตรวจจับอัตโนมัติ |
| [จำกัดความเร็ว](#จำกัดความเร็ว) | จำกัดอัตราตามโดเมน รอระหว่างคำขอเพื่อป้องกันการถูกบล็อก |
| [การติดตามเบราว์เซอร์](#การติดตามเบราว์เซอร์) | เริ่ม หยุด หรือบันทึกการติดตามประสิทธิภาพของเบราว์เซอร์ |
| [พิมพ์ข้อความ](#พิมพ์ข้อความ) | พิมพ์ข้อความลงในฟิลด์อินพุต |
| [อัปโหลดไฟล์](#อัปโหลดไฟล์) | อัปโหลดไฟล์ไปยังองค์ประกอบ file input |
| [ตั้งค่าหน้าต่าง](#ตั้งค่าหน้าต่าง) | รับหรือกำหนดขนาดหน้าต่างเบราว์เซอร์ |
| [รอ](#รอ) | รอระยะเวลาหรือจนกว่าองค์ประกอบจะปรากฏ |

## Modules

### จัดการการท้าทาย

`browser.challenge`

ตรวจจับและจัดการกับการท้าทายของระบบป้องกันบอทอัตโนมัติ (Cloudflare, CAPTCHA)

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

### คลิกองค์ประกอบ

`browser.click`

คลิกองค์ประกอบบนหน้า

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
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `selector` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
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

### ปิดเบราว์เซอร์

`browser.close`

ปิดอินสแตนซ์เบราว์เซอร์และปล่อยทรัพยากร

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `_no_params` | boolean | No | `True` | This module requires no parameters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ปิดอินสแตนซ์เบราว์เซอร์ |
| `message` | string | ปิดอินสแตนซ์เบราว์เซอร์ |

**Example:** Example

```yaml
```

### เชื่อมต่อระยะไกล

`browser.connect`

เชื่อมต่อบริการเบราว์เซอร์ระยะไกล (Browserless, BrowserBase) Fingerprint จริง, ผ่าน Cloudflare

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

### จับคอนโซล

`browser.console`

จับบันทึกคอนโซลเบราว์เซอร์ (ข้อผิดพลาด คำเตือน ข้อมูล)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `level` | select (`all`, `error`, `warning`, `info`, `log`) | No | `all` | Filter console messages by level |
| `timeout` | number | No | `5000` | Maximum time to wait in milliseconds |
| `clear_existing` | boolean | No | `False` | Clear existing messages before capturing |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `messages` | array | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `count` | number | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |

**Example:** Example

```yaml
timeout: 3000
```

**Example:** Example

```yaml
level: error
timeout: 5000
```

### จัดการคุกกี้

`browser.cookies`

รับ ตั้งค่า หรือล้างคุกกี้เบราว์เซอร์

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
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `cookies` | array | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `count` | number | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |

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

### ไฟล์คุกกี้

`browser.cookies_file`

นำเข้าหรือส่งออกคุกกี้เบราว์เซอร์จาก/ไปยังไฟล์ JSON

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

### ตรวจจับรายการ

`browser.detect_list`

ตรวจจับรายการซ้ำบนหน้าเว็บอัตโนมัติ (บทความ, สินค้า, ผลการค้นหา)

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

### จัดการ Dialog

`browser.dialog`

จัดการกล่องโต้ตอบ alert, confirm และ prompt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`accept`, `dismiss`, `listen`) | Yes | - | How to respond to the dialog |
| `prompt_text` | string | No | - | Text to enter in prompt dialog (for accept action) |
| `timeout` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `message` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `type` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `default_value` | string | ข้อความผลลัพธ์อธิบายผลลัพธ์ |

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

### ดาวน์โหลดไฟล์

`browser.download`

ดาวน์โหลดไฟล์จากเบราว์เซอร์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `save_path` | string | Yes | - | Path where to save the downloaded file |
| `timeout_ms` | number | No | `60000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `path` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `filename` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `size` | number | เส้นทางไฟล์หรือทรัพยากร |

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

### ลากและวาง

`browser.drag`

ลากและวางองค์ประกอบ

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
| `status` | string | ตำแหน่งภายในองค์ประกอบเป้าหมาย {x, y} เป็นเปอร์เซ็นต์ |
| `source` | string | ตำแหน่งภายในองค์ประกอบเป้าหมาย {x, y} เป็นเปอร์เซ็นต์ |
| `target` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |

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

### จำลองอุปกรณ์

`browser.emulate`

จำลองอุปกรณ์หรือกำหนดขนาดหน้าต่างเอง

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `device` | select (`iphone_12`, `iphone_14`, `iphone_14_pro_max`, `iphone_se`, `pixel_7`, `pixel_5`, `galaxy_s21`, `galaxy_s23`, `ipad_pro`, `ipad_mini`, `galaxy_tab_s8`, `desktop_chrome`, `desktop_firefox`, `desktop_safari`, `desktop_edge`, `laptop`, `macbook_pro`, `custom`) | Yes | - | ชื่ออุปกรณ์ที่จะจำลอง (เช่น iPhone 13) |
| `width` | number | No | - | ความกว้างของหน้าต่างในพิกเซล |
| `height` | number | No | - | ความสูงของหน้าต่างในพิกเซล |
| `user_agent` | string | No | - | สตริง user agent ที่กำหนดเอง |
| `device_scale_factor` | number | No | - | อัตราส่วนพิกเซลของอุปกรณ์ |
| `is_mobile` | boolean | No | - | จำลองอุปกรณ์มือถือหรือไม่ |
| `has_touch` | boolean | No | - | อุปกรณ์มีการรองรับการสัมผัสหรือไม่ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ผิดพลาด) |
| `device` | string | ชื่ออุปกรณ์ที่ถูกจำลอง |
| `viewport` | object | ขนาดหน้าต่างปัจจุบัน |
| `is_mobile` | boolean | การจำลองมือถือเปิดใช้งานหรือไม่ |

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

### ตรวจสอบเบราว์เซอร์

`browser.ensure`

ตรวจสอบให้แน่ใจว่ามีเซสชันเบราว์เซอร์อยู่ (ใช้ซ้ำหรือเปิดใหม่)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | เบราว์เซอร์ถูกเปิดใหม่หรือใช้ซ้ำ |
| `message` | string | เบราว์เซอร์ถูกเปิดใหม่หรือใช้ซ้ำ |
| `is_owner` | boolean | เบราว์เซอร์ถูกเปิดใหม่หรือใช้ซ้ำ |

**Example:** Example

```yaml
headless: false
```

**Example:** Example

```yaml
headless: true
```

### รัน JavaScript

`browser.evaluate`

รันโค้ด JavaScript ในบริบทหน้า

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `script` | string | Yes | - | JavaScript code to execute (can use return statement) |
| `args` | array | No | - | Arguments to pass to the script function |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `result` | any | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |

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

### ดึงข้อมูล

`browser.extract`

ดึงข้อมูลที่มีโครงสร้างจากหน้า

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |
| `fields` | object | No | - | Define fields to extract from each item |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `data` | array | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `count` | number | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |

**Example:** Example

```yaml
selector: .g
limit: 10
fields: {"title": {"selector": "h3", "type": "text"}, "url": {"selector": "a", "type": "attribute", "attribute": "href"}}
```

### ดึงข้อมูลซ้อน

`browser.extract_nested`

ดึงข้อมูลแบบซ้อน/โครงสร้างต้นไม้ (ความคิดเห็น, เธรด, โฟลเดอร์)

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

### ค้นหาองค์ประกอบ

`browser.find`

ค้นหาองค์ประกอบในหน้าและส่งคืนรายการ ID องค์ประกอบ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `count` | number | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `element_ids` | array | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |

**Example:** Find search results

```yaml
selector: div.tF2Cxc
limit: 10
```

### กรอกฟอร์ม

`browser.form`

กรอกฟอร์มอัตโนมัติด้วยการตรวจจับช่องกรอก

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
| `filled_fields` | array | หน่วงเวลาระหว่างการกรอกแต่ละช่อง (เพื่อให้ดูเป็นธรรมชาติ) |
| `failed_fields` | array | รายการช่องที่ถูกกรอกแล้ว |
| `submitted` | boolean | รายการช่องที่ถูกกรอกแล้ว |

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

### สลับ Frame

`browser.frame`

สลับไปยังบริบท iframe หรือ frame

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
| `status` | string | การดำเนินการ Frame (enter เพื่อสลับไป frame, list เพื่อแสดงรายการ frames ทั้งหมด) |
| `frame_url` | string | การดำเนินการ Frame (enter เพื่อสลับไป frame, list เพื่อแสดงรายการ frames ทั้งหมด) |
| `frame_name` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `frames` | array | URL ของ Frame |

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

### จำลอง Geolocation

`browser.geolocation`

จำลองตำแหน่งทางภูมิศาสตร์ของเบราว์เซอร์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `latitude` | number | Yes | - | Latitude coordinate (-90 to 90) |
| `longitude` | number | Yes | - | Longitude coordinate (-180 to 180) |
| `accuracy` | number | No | `100` | Position accuracy in meters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ความแม่นยำตำแหน่งเป็นเมตร |
| `location` | object | ความแม่นยำตำแหน่งเป็นเมตร |

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

### ไปยัง URL

`browser.goto`

นำทางไปยัง URL ที่ระบุ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to navigate to |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `url` | string | นำทางไปยัง URL ที่ระบุ |

**Example:** Example

```yaml
url: https://www.google.com
wait_until: domcontentloaded
```

### วางเมาส์เหนือองค์ประกอบ

`browser.hover`

วางเมาส์เหนือองค์ประกอบ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |
| `position` | object | No | - | Click position relative to element (0-1 range) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `selector` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |

**Example:** Example

```yaml
selector: .menu-item
```

**Example:** Example

```yaml
selector: #dropdown-trigger
timeout_ms: 5000
```

### โต้ตอบเบราว์เซอร์

`browser.interact`

หยุดชั่วคราวเพื่อให้ผู้ใช้โต้ตอบกับหน้าเบราว์เซอร์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | No | `Browser Interaction` | Title displayed to approvers |
| `description` | string | No | - | Optional description text |
| `timeout_seconds` | number | No | `0` | Maximum wait time (0 for no timeout) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการดำเนินการ |
| `action` | string | การดำเนินการที่ทำ (click/select/type/toggle) |
| `selector` | string | CSS selector ขององค์ประกอบที่โต้ตอบ |
| `value` | string | ค่าที่ใช้ (สำหรับการ select/type) |
| `url` | string | URL ของหน้าขณะโต้ตอบ |

**Example:** Example

```yaml
title: Choose a department
description: Select the department you want to register for
```

### เปิดเบราว์เซอร์

`browser.launch`

เปิดอินสแตนซ์เบราว์เซอร์ใหม่ด้วย Playwright

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |
| `browser_type` | select (`chromium`, `firefox`, `webkit`) | No | `chromium` | เอนจินเบราว์เซอร์ที่จะใช้ (chromium, firefox, webkit) |
| `channel` | select (``, `chrome`, `msedge`) | No | - | Use system Chrome instead of bundled Chromium for better anti-detection bypass |
| `behavior` | select (`fast`, `normal`, `careful`, `human_like`) | No | `fast` | How the browser interacts: fast (no delays), normal, careful (mouse movement), human_like (full simulation) |
| `stealth` | boolean | No | `True` | Anti-detection patches: WebGL fingerprint, canvas noise, navigator fixes. Always recommended. |
| `proxy` | string | No | - | URL ของเซิร์ฟเวอร์พร็อกซี |
| `user_agent` | string | No | - | สตริง user agent ที่กำหนดเอง |
| `locale` | string | No | `en-US` | Browser locale (e.g. en-US, zh-TW, ja-JP) |
| `slow_mo` | number | No | `0` | ชะลอการทำงานตามมิลลิวินาทีที่ระบุ |
| `record_video_dir` | string | No | - | Directory to save recorded videos (enables Playwright video recording) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `message` | string | เปิดอินสแตนซ์เบราว์เซอร์ใหม่ |
| `browser_type` | string | ประเภทของเบราว์เซอร์ที่เปิดใช้งาน |
| `headless` | boolean | เบราว์เซอร์ทำงานแบบไม่แสดงผลหรือไม่ |
| `viewport` | object | ขนาดหน้าต่างปัจจุบัน |
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

### เข้าสู่ระบบ

`browser.login`

ตรวจจับและกรอกฟอร์มเข้าสู่ระบบอัตโนมัติพร้อมการยืนยันหลังเข้าสู่ระบบ

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

### นำทางประวัติ

`browser.navigation`

นำทางประวัติเบราว์เซอร์ (ย้อนกลับ, ไปข้างหน้า, โหลดซ้ำ)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`back`, `forward`, `reload`) | Yes | `reload` | Which navigation action to perform |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ผิดพลาด) |
| `action` | string | การกระทำการนำทางที่ดำเนินการ |
| `url` | string | URL ปัจจุบันหลังการนำทาง |

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

### ตรวจสอบเครือข่าย

`browser.network`

ติดตามและดักจับคำขอเครือข่าย

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
| `status` | string | การตอบกลับที่จะส่งคืนสำหรับคำขอที่ดักจับ |
| `requests` | array | การตอบกลับที่จะส่งคืนสำหรับคำขอที่ดักจับ |
| `blocked_count` | number | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |

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

### รายการหน้า

`browser.pages`

แสดงรายการหน้า/แท็บเบราว์เซอร์ที่เปิดอยู่ทั้งหมด

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `include_details` | boolean | No | `True` | รวมข้อมูลรายละเอียดสำหรับแต่ละหน้า |
| `include_content_info` | boolean | No | `False` | รวมข้อมูลประเภทเนื้อหาสำหรับแต่ละหน้า |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการทำงาน (สำเร็จ/ผิดพลาด) |
| `pages` | array | รายการหน้าที่เปิดอยู่ |
| `count` | number | จำนวนหน้าที่เปิดอยู่ |
| `current_index` | number | ดัชนีของหน้าที่ใช้งานอยู่ในปัจจุบัน |

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

### แบ่งหน้า & ดึงข้อมูล

`browser.pagination`

แบ่งหน้าอัตโนมัติและดึงข้อมูล

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
| `items` | array | ตัวเลือกที่ปรากฏเมื่อไม่มีหน้าเพิ่มเติม (หยุดการแบ่งหน้า) |
| `total_items` | integer | รายการทั้งหมดที่ดึงจากทุกหน้า |
| `pages_processed` | integer | รายการทั้งหมดที่ดึงจากทุกหน้า |
| `stopped_reason` | string | จำนวนหน้าที่ประมวลผล |
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

### สร้าง PDF

`browser.pdf`

สร้าง PDF จากหน้าปัจจุบัน

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
| `status` | string | ขนาดการแสดงผลหน้าเว็บ (0.1-2) |
| `path` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `size` | number | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |

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

### ข้อมูลประสิทธิภาพ

`browser.performance`

รวบรวมข้อมูลประสิทธิภาพของเบราว์เซอร์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | array | No | `['all']` | ข้อมูลประสิทธิภาพที่ต้องการรวบรวม |
| `timeout_ms` | number | No | `3000` | เวลาหมดในหน่วยมิลลิวินาที |
| `setup_observers` | boolean | No | `True` | ตั้งค่าผู้สังเกตก่อนการรวบรวม |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการทำงาน (สำเร็จ/ผิดพลาด) |
| `metrics` | object | ข้อมูลประสิทธิภาพที่รวบรวมได้ |

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

### กลุ่มเบราว์เซอร์

`browser.pool`

จัดการเบราว์เซอร์หลายอินสแตนซ์สำหรับการทำงานอัตโนมัติแบบขนาน

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

### กดปุ่ม

`browser.press`

กดปุ่มแป้นพิมพ์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | The key to press (e.g., Enter, Escape, Tab) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `key` | string | กดปุ่มแป้นพิมพ์ |

**Example:** Example

```yaml
key: Enter
```

**Example:** Example

```yaml
key: Escape
```

### หมุนเวียนพร็อกซี

`browser.proxy_rotate`

สลับรายการพร็อกซีพร้อมตรวจจับพร็อกซีที่ใช้ไม่ได้

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

### ดึงบทความ

`browser.readability`

ดึงบทความอัจฉริยะ — ดึงหัวข้อ, ผู้เขียน, วันที่ และเนื้อหาหลักจากทุกหน้าเว็บ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `include_images` | boolean | No | `True` | Extract images from the article content. |
| `include_links` | boolean | No | `False` | Extract links from the article content. |
| `wait_ms` | number | No | `0` | Wait for dynamic content to load before extracting. 0 = no wait. |
| `selector` | string | No | - | CSS selector สำหรับพื้นที่เนื้อหา เว้นว่างเพื่อตรวจจับอัตโนมัติ |
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

### บันทึกการกระทำ

`browser.record`

บันทึกการกระทำของผู้ใช้เป็น workflow

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Recording action to perform |
| `output_format` | string | No | `yaml` | Format for recorded workflow |
| `output_path` | string | No | - | Path where the output file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | รูปแบบสำหรับ workflow ที่บันทึก (yaml หรือ json) |
| `recording` | array | รูปแบบสำหรับ workflow ที่บันทึก (yaml หรือ json) |
| `workflow` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |

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

### ปล่อยเบราว์เซอร์

`browser.release`

ปล่อยเซสชันเบราว์เซอร์ (ปิดเฉพาะถ้าเป็นเจ้าของ)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `force` | boolean | No | `False` | ปิดเบราว์เซอร์แม้ไม่ได้เป็นเจ้าของโดยเทมเพลตนี้ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ปิดเบราว์เซอร์แม้ไม่ได้เป็นเจ้าของโดยเทมเพลตนี้ |
| `message` | string | ดำเนินการอะไร |
| `was_owner` | boolean | ดำเนินการอะไร |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
force: true
```

### จับการตอบกลับ

`browser.response`

จับเนื้อหาการตอบกลับ API (XHR/fetch) ดึง JSON จาก API บนหน้าเว็บ

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

### ตรวจสอบ Robots.txt

`browser.robots`

ตรวจสอบการปฏิบัติตาม robots.txt และค้นหา sitemap

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

### ถ่ายภาพหน้าจอ

`browser.screenshot`

ถ่ายภาพหน้าจอของหน้าปัจจุบัน

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
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `filepath` | string | ถ่ายภาพหน้าจอของหน้าปัจจุบัน |

**Example:** Example

```yaml
path: output/page.png
```

### เลื่อนหน้า

`browser.scroll`

เลื่อนหน้าไปยังองค์ประกอบ ตำแหน่ง หรือทิศทาง

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
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `scrolled_to` | object | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |

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

### เลือกตัวเลือก

`browser.select`

เลือกตัวเลือกจากองค์ประกอบ dropdown

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
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `selected` | array | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `selector` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |

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

### แยกวิเคราะห์ Sitemap

`browser.sitemap`

แยกวิเคราะห์ sitemap.xml และดึง URL พร้อม metadata

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

### ภาพ DOM

`browser.snapshot`

จับภาพ DOM ของหน้าปัจจุบัน

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`html`, `mhtml`, `text`) | No | `html` | รูปแบบผลลัพธ์ (html หรือ text) |
| `selector` | string | No | - | ตัวเลือก CSS เพื่อจับภาพองค์ประกอบเฉพาะ |
| `path` | string | No | - | เส้นทางในการบันทึกภาพ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการทำงาน (สำเร็จ/ผิดพลาด) |
| `format` | string | รูปแบบของภาพ |
| `content` | string | เนื้อหาภาพ |
| `path` | string | เส้นทางที่บันทึกภาพ |
| `size_bytes` | number | ขนาดของภาพในหน่วยไบต์ |

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

### พื้นที่เก็บข้อมูลของเบราว์เซอร์

`browser.storage`

เข้าถึง localStorage และ sessionStorage

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
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `value` | any | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `keys` | array | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `length` | number | ค่าที่ส่งคืน |

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

### จัดการแท็บ

`browser.tab`

สร้าง สลับ และปิดแท็บเบราว์เซอร์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Tab action to perform |
| `url` | string | No | - | URL to navigate to |
| `index` | number | No | - | Tab index to switch to or close (0-based) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ดัชนีแท็บที่จะสลับไปหรือปิด (เริ่มจาก 0) |
| `tab_count` | number | ดัชนีแท็บที่จะสลับไปหรือปิด (เริ่มจาก 0) |
| `current_index` | number | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `tabs` | array | จำนวนแท็บ |

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

### ดึงตาราง

`browser.table`

ดึงตาราง HTML เป็นข้อมูลมีโครงสร้างพร้อมหัวตารางที่ตรวจจับอัตโนมัติ

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

### จำกัดความเร็ว

`browser.throttle`

จำกัดอัตราตามโดเมน รอระหว่างคำขอเพื่อป้องกันการถูกบล็อก

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

### การติดตามเบราว์เซอร์

`browser.trace`

เริ่ม หยุด หรือบันทึกการติดตามประสิทธิภาพของเบราว์เซอร์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | การกระทำการติดตาม (เริ่ม หยุด บันทึก) |
| `categories` | array | No | `['devtools.timeline']` | หมวดหมู่การติดตามที่ต้องการจับภาพ |
| `screenshots` | boolean | No | `True` | รวมภาพหน้าจอในการติดตาม |
| `path` | string | No | - | เส้นทางในการบันทึกไฟล์การติดตาม |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการทำงาน (สำเร็จ/ผิดพลาด) |
| `tracing` | boolean | การติดตามกำลังทำงานอยู่หรือไม่ |
| `path` | string | เส้นทางที่บันทึกการติดตาม |
| `size_bytes` | number | ขนาดของไฟล์การติดตามในหน่วยไบต์ |

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

### พิมพ์ข้อความ

`browser.type`

พิมพ์ข้อความลงในฟิลด์อินพุต

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
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `selector` | string | พิมพ์ข้อความลงในฟิลด์อินพุต |
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

### อัปโหลดไฟล์

`browser.upload`

อัปโหลดไฟล์ไปยังองค์ประกอบ file input

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `file_path` | string | Yes | - | Local path to the file to upload |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `filename` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `size` | number | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `selector` | string | ชื่อไฟล์ |

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

### ตั้งค่าหน้าต่าง

`browser.viewport`

รับหรือกำหนดขนาดหน้าต่างเบราว์เซอร์

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `width` | number | Yes | `1280` | ความกว้างของหน้าต่างเป็นพิกเซล |
| `height` | number | Yes | `720` | ความสูงของหน้าต่างเป็นพิกเซล |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ผิดพลาด) |
| `viewport` | object | ขนาดหน้าต่างปัจจุบัน |
| `previous_viewport` | object | ขนาดหน้าต่างก่อนหน้า |

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

### รอ

`browser.wait`

รอระยะเวลาหรือจนกว่าองค์ประกอบจะปรากฏ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Duration of the operation in milliseconds |
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `state` | select (`visible`, `hidden`, `attached`, `detached`) | No | `visible` | สถานะที่ต้องรอ (แสดง, ซ่อน, แนบ, ถอด) |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `selector` | string | สถานะการดำเนินการ (สำเร็จ/ข้อผิดพลาด) |
| `duration_ms` | number | รอระยะเวลาหรือองค์ประกอบจะปรากฏ |

**Example:** Example

```yaml
duration_ms: 2000
```

**Example:** Example

```yaml
selector: #loading-complete
timeout_ms: 5000
```
