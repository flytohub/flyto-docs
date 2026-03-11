# Browser Automation

Full web automation: navigation, interaction, data extraction, screenshots, and performance monitoring.

**39 modules**

| Module | Description |
|--------|-------------|
| [요소 클릭](#요소-클릭) | 페이지의 요소 클릭 |
| [브라우저 닫기](#브라우저-닫기) | 브라우저 인스턴스 닫기 및 리소스 해제 |
| [콘솔 캡처](#콘솔-캡처) | 브라우저 콘솔 로그 캡처 (오류, 경고, 정보) |
| [쿠키 관리](#쿠키-관리) | 브라우저 쿠키 가져오기, 설정 또는 지우기 |
| [Smart Detect](#smart-detect) | Smart element detection with multi-strategy matching. Finds elements using text, selector, role, proximity, and fuzzy matching with automatic fallbacks. |
| [대화상자 처리](#대화상자-처리) | 경고, 확인 및 프롬프트 대화상자 처리 |
| [파일 다운로드](#파일-다운로드) | 브라우저에서 파일 다운로드 |
| [드래그 앤 드롭](#드래그-앤-드롭) | 요소 드래그 앤 드롭 |
| [장치 에뮬레이트](#장치-에뮬레이트) | 장치를 에뮬레이트하거나 사용자 정의 뷰포트 설정 |
| [브라우저 확인](#브라우저-확인) | 브라우저 세션이 존재하는지 확인 (재사용 또는 실행) |
| [JavaScript 실행](#javascript-실행) | 페이지 컨텍스트에서 JavaScript 코드 실행 |
| [데이터 추출](#데이터-추출) | 페이지에서 구조화된 데이터 추출 |
| [요소 찾기](#요소-찾기) | 페이지에서 요소 찾기 및 요소 ID 목록 반환 |
| [양식 채우기](#양식-채우기) | 자동 필드 감지로 스마트하게 양식 채우기 |
| [프레임 전환](#프레임-전환) | iframe 또는 frame 컨텍스트로 전환 |
| [지오로케이션 모킹](#지오로케이션-모킹) | 브라우저 지오로케이션 모킹 |
| [URL로 이동](#url로-이동) | 특정 URL로 이동 |
| [요소 호버](#요소-호버) | 요소 위로 마우스 호버 |
| [브라우저 실행](#브라우저-실행) | Playwright로 새 브라우저 인스턴스 실행 |
| [기록 탐색](#기록-탐색) | 브라우저 기록 탐색 (뒤로, 앞으로, 새로고침) |
| [네트워크 모니터](#네트워크-모니터) | 네트워크 요청 모니터링 및 가로채기 |
| [페이지 목록](#페이지-목록) | 열려 있는 모든 브라우저 페이지/탭 목록 |
| [페이지 넘기기 및 추출](#페이지-넘기기-및-추출) | 페이지를 자동으로 넘기면서 데이터 추출 |
| [PDF 생성](#pdf-생성) | 현재 페이지에서 PDF 생성 |
| [성능 지표](#성능-지표) | 브라우저 성능 지표 수집 |
| [키 누르기](#키-누르기) | 키보드 키 누르기 |
| [작업 기록](#작업-기록) | 사용자 작업을 워크플로로 기록 |
| [브라우저 해제](#브라우저-해제) | 브라우저 세션 해제 (소유한 경우에만 닫기) |
| [스크린샷 촬영](#스크린샷-촬영) | 현재 페이지의 스크린샷 촬영 |
| [페이지 스크롤](#페이지-스크롤) | 페이지를 요소, 위치 또는 방향으로 스크롤 |
| [옵션 선택](#옵션-선택) | 드롭다운 요소에서 옵션 선택 |
| [DOM 스냅샷](#dom-스냅샷) | 현재 페이지의 DOM 스냅샷 캡처 |
| [브라우저 저장소](#브라우저-저장소) | localStorage 및 sessionStorage 접근 |
| [탭 관리](#탭-관리) | 브라우저 탭 생성, 전환 및 닫기 |
| [브라우저 추적](#브라우저-추적) | 브라우저 성능 추적 시작, 중지 또는 저장 |
| [텍스트 입력](#텍스트-입력) | 입력 필드에 텍스트 입력 |
| [파일 업로드](#파일-업로드) | 파일 입력 요소에 파일 업로드 |
| [뷰포트 설정](#뷰포트-설정) | 브라우저 뷰포트 크기 가져오기 또는 설정하기 |
| [대기](#대기) | 지정된 시간 동안 또는 요소가 나타날 때까지 대기 |

## Modules

### 요소 클릭

`browser.click`

페이지의 요소 클릭

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
| `status` | string | 작업 상태 (성공/오류) |
| `selector` | string | 작업 상태 (성공/오류) |
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

### 브라우저 닫기

`browser.close`

브라우저 인스턴스 닫기 및 리소스 해제

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `_no_params` | boolean | No | `True` | This module requires no parameters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 브라우저 인스턴스 닫기 |
| `message` | string | 브라우저 인스턴스 닫기 |

**Example:** Example

```yaml
```

### 콘솔 캡처

`browser.console`

브라우저 콘솔 로그 캡처 (오류, 경고, 정보)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `level` | select (`all`, `error`, `warning`, `info`, `log`) | No | `all` | Filter console messages by level |
| `timeout` | number | No | `5000` | Maximum time to wait in milliseconds |
| `clear_existing` | boolean | No | `False` | Clear existing messages before capturing |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 (성공/오류) |
| `messages` | array | 작업 상태 (성공/오류) |
| `count` | number | 작업 상태 (성공/오류) |

**Example:** Example

```yaml
timeout: 3000
```

**Example:** Example

```yaml
level: error
timeout: 5000
```

### 쿠키 관리

`browser.cookies`

브라우저 쿠키 가져오기, 설정 또는 지우기

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
| `status` | string | 작업 상태 (성공/오류) |
| `cookies` | array | 작업 상태 (성공/오류) |
| `count` | number | 작업 상태 (성공/오류) |

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

### 대화상자 처리

`browser.dialog`

경고, 확인 및 프롬프트 대화상자 처리

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`accept`, `dismiss`, `listen`) | Yes | - | How to respond to the dialog |
| `prompt_text` | string | No | - | Text to enter in prompt dialog (for accept action) |
| `timeout` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 (성공/오류) |
| `message` | string | 작업 상태 (성공/오류) |
| `type` | string | 작업 상태 (성공/오류) |
| `default_value` | string | 결과를 설명하는 메시지 |

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

### 파일 다운로드

`browser.download`

브라우저에서 파일 다운로드

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `save_path` | string | Yes | - | Path where to save the downloaded file |
| `timeout_ms` | number | No | `60000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 (성공/오류) |
| `path` | string | 작업 상태 (성공/오류) |
| `filename` | string | 작업 상태 (성공/오류) |
| `size` | number | 파일 또는 리소스 경로 |

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

### 드래그 앤 드롭

`browser.drag`

요소 드래그 앤 드롭

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
| `status` | string | 대상 요소 내 위치 {x, y} (백분율) |
| `source` | string | 대상 요소 내 위치 {x, y} (백분율) |
| `target` | string | 작업 상태 (성공/오류) |

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

### 장치 에뮬레이트

`browser.emulate`

장치를 에뮬레이트하거나 사용자 정의 뷰포트 설정

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `device` | select (`iphone_12`, `iphone_14`, `iphone_14_pro_max`, `iphone_se`, `pixel_7`, `pixel_5`, `galaxy_s21`, `galaxy_s23`, `ipad_pro`, `ipad_mini`, `galaxy_tab_s8`, `desktop_chrome`, `desktop_firefox`, `desktop_safari`, `desktop_edge`, `laptop`, `macbook_pro`, `custom`) | Yes | - | 에뮬레이트할 장치 이름 (예: iPhone 13) |
| `width` | number | No | - | 뷰포트 너비 (픽셀) |
| `height` | number | No | - | 뷰포트 높이 (픽셀) |
| `user_agent` | string | No | - | 사용자 정의 User Agent 문자열 |
| `is_mobile` | boolean | No | - | 모바일 장치 에뮬레이션 여부 |
| `has_touch` | boolean | No | - | 장치에 터치 지원 여부 |
| `device_scale_factor` | number | No | - | 장치 픽셀 비율 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 (성공/오류) |
| `device` | string | 에뮬레이트된 장치 이름 |
| `viewport` | object | 현재 뷰포트 크기 |
| `is_mobile` | boolean | 모바일 에뮬레이션 활성 여부 |

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

### 브라우저 확인

`browser.ensure`

브라우저 세션이 존재하는지 확인 (재사용 또는 실행)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 브라우저가 실행되었는지 또는 재사용되었는지 여부 |
| `message` | string | 브라우저가 실행되었는지 또는 재사용되었는지 여부 |
| `is_owner` | boolean | 브라우저가 실행되었는지 또는 재사용되었는지 여부 |

**Example:** Example

```yaml
headless: false
```

**Example:** Example

```yaml
headless: true
```

### JavaScript 실행

`browser.evaluate`

페이지 컨텍스트에서 JavaScript 코드 실행

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `script` | string | Yes | - | JavaScript code to execute (can use return statement) |
| `args` | array | No | - | Arguments to pass to the script function |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 (성공/오류) |
| `result` | any | 작업 상태 (성공/오류) |

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

### 데이터 추출

`browser.extract`

페이지에서 구조화된 데이터 추출

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |
| `fields` | object | No | - | Define fields to extract from each item |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 (성공/오류) |
| `data` | array | 작업 상태 (성공/오류) |
| `count` | number | 작업 상태 (성공/오류) |

**Example:** Example

```yaml
selector: .g
limit: 10
fields: {"title": {"selector": "h3", "type": "text"}, "url": {"selector": "a", "type": "attribute", "attribute": "href"}}
```

### 요소 찾기

`browser.find`

페이지에서 요소 찾기 및 요소 ID 목록 반환

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 (성공/오류) |
| `count` | number | 작업 상태 (성공/오류) |
| `element_ids` | array | 작업 상태 (성공/오류) |

**Example:** Find search results

```yaml
selector: div.tF2Cxc
limit: 10
```

### 양식 채우기

`browser.form`

자동 필드 감지로 스마트하게 양식 채우기

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
| `filled_fields` | array | 각 필드를 채우는 사이의 지연 시간 (더 자연스러운 동작을 위해) |
| `failed_fields` | array | 채워진 필드 목록 |
| `submitted` | boolean | 채워진 필드 목록 |

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

### 프레임 전환

`browser.frame`

iframe 또는 frame 컨텍스트로 전환

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
| `status` | string | 프레임 작업 (enter: 프레임 전환, list: 모든 프레임 나열) |
| `frame_url` | string | 프레임 작업 (enter: 프레임 전환, list: 모든 프레임 나열) |
| `frame_name` | string | 작업 상태 (성공/오류) |
| `frames` | array | 프레임 URL |

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

### 지오로케이션 모킹

`browser.geolocation`

브라우저 지오로케이션 모킹

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `latitude` | number | Yes | - | Latitude coordinate (-90 to 90) |
| `longitude` | number | Yes | - | Longitude coordinate (-180 to 180) |
| `accuracy` | number | No | `100` | Position accuracy in meters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 위치 정확도 (미터) |
| `location` | object | 위치 정확도 (미터) |

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

### URL로 이동

`browser.goto`

특정 URL로 이동

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to navigate to |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 (성공/오류) |
| `url` | string | 특정 URL로 이동 |

**Example:** Example

```yaml
url: https://www.google.com
wait_until: domcontentloaded
```

### 요소 호버

`browser.hover`

요소 위로 마우스 호버

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |
| `position` | object | No | - | Click position relative to element (0-1 range) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 (성공/오류) |
| `selector` | string | 작업 상태 (성공/오류) |

**Example:** Example

```yaml
selector: .menu-item
```

**Example:** Example

```yaml
selector: #dropdown-trigger
timeout_ms: 5000
```

### 브라우저 실행

`browser.launch`

Playwright로 새 브라우저 인스턴스 실행

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |
| `browser_type` | select (`chromium`, `firefox`, `webkit`) | No | `chromium` | 사용할 브라우저 엔진 (chromium, firefox, webkit) |
| `proxy` | string | No | - | 프록시 서버 URL |
| `user_agent` | string | No | - | 사용자 정의 User Agent 문자열 |
| `locale` | string | No | `en-US` | Browser locale (e.g. en-US, zh-TW, ja-JP) |
| `slow_mo` | number | No | `0` | 지정된 밀리초만큼 작업 속도 늦추기 |
| `record_video_dir` | string | No | - | Directory to save recorded videos (enables Playwright video recording) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 (성공/오류) |
| `message` | string | 새 브라우저 인스턴스 실행 |
| `browser_type` | string | 실행된 브라우저 유형 |
| `headless` | boolean | 브라우저가 헤드리스로 실행 중인지 여부 |
| `viewport` | object | 현재 뷰포트 크기 |

**Example:** Example

```yaml
headless: true
```

**Example:** Example

```yaml
headless: false
```

### 기록 탐색

`browser.navigation`

브라우저 기록 탐색 (뒤로, 앞으로, 새로고침)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`back`, `forward`, `reload`) | Yes | `reload` | Which navigation action to perform |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 (성공/오류) |
| `action` | string | 수행된 탐색 작업 |
| `url` | string | 탐색 후 현재 URL |

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

### 네트워크 모니터

`browser.network`

네트워크 요청 모니터링 및 가로채기

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
| `status` | string | 가로챈 요청에 반환할 응답 |
| `requests` | array | 가로챈 요청에 반환할 응답 |
| `blocked_count` | number | 작업 상태 (성공/오류) |

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

### 페이지 목록

`browser.pages`

열려 있는 모든 브라우저 페이지/탭 목록

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `include_details` | boolean | No | `True` | 각 페이지의 세부 정보 포함 |
| `include_content_info` | boolean | No | `False` | 각 페이지의 콘텐츠 유형 정보 포함 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 (성공/오류) |
| `pages` | array | 열려 있는 페이지 목록 |
| `count` | number | 열려 있는 페이지 수 |
| `current_index` | number | 현재 활성 페이지의 인덱스 |

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

### 페이지 넘기기 및 추출

`browser.pagination`

페이지를 자동으로 넘기면서 데이터 추출

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
| `items` | array | 더 이상 페이지가 없을 때 나타나는 선택자 (페이지 넘기기 중지) |
| `total_items` | integer | 모든 페이지에서 추출된 모든 항목 |
| `pages_processed` | integer | 모든 페이지에서 추출된 모든 항목 |
| `stopped_reason` | string | 처리된 페이지 수 |

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

### PDF 생성

`browser.pdf`

현재 페이지에서 PDF 생성

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
| `status` | string | 웹페이지 렌더링 스케일 (0.1-2) |
| `path` | string | 작업 상태 (성공/오류) |
| `size` | number | 작업 상태 (성공/오류) |

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

### 성능 지표

`browser.performance`

브라우저 성능 지표 수집

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | array | No | `['all']` | 수집할 성능 지표 |
| `timeout_ms` | number | No | `3000` | 밀리초 단위의 시간 초과 |
| `setup_observers` | boolean | No | `True` | 수집 전에 성능 관찰자 설정 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 (성공/오류) |
| `metrics` | object | 수집된 성능 지표 |

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

### 키 누르기

`browser.press`

키보드 키 누르기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | The key to press (e.g., Enter, Escape, Tab) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 (성공/오류) |
| `key` | string | 키보드 키 누르기 |

**Example:** Example

```yaml
key: Enter
```

**Example:** Example

```yaml
key: Escape
```

### 작업 기록

`browser.record`

사용자 작업을 워크플로로 기록

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Recording action to perform |
| `output_format` | string | No | `yaml` | Format for recorded workflow |
| `output_path` | string | No | - | Path where the output file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 기록된 워크플로 형식 (yaml 또는 json) |
| `recording` | array | 기록된 워크플로 형식 (yaml 또는 json) |
| `workflow` | string | 작업 상태 (성공/오류) |

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

### 브라우저 해제

`browser.release`

브라우저 세션 해제 (소유한 경우에만 닫기)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `force` | boolean | No | `False` | 이 템플릿이 소유하지 않은 경우에도 브라우저 닫기 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 이 템플릿이 소유하지 않은 경우에도 브라우저 닫기 |
| `message` | string | 수행된 작업 |
| `was_owner` | boolean | 수행된 작업 |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
force: true
```

### 스크린샷 촬영

`browser.screenshot`

현재 페이지의 스크린샷 촬영

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
| `status` | string | 작업 상태 (성공/오류) |
| `filepath` | string | 현재 페이지의 스크린샷 촬영 |

**Example:** Example

```yaml
path: output/page.png
```

### 페이지 스크롤

`browser.scroll`

페이지를 요소, 위치 또는 방향으로 스크롤

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
| `status` | string | 작업 상태 (성공/오류) |
| `scrolled_to` | object | 작업 상태 (성공/오류) |

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

### 옵션 선택

`browser.select`

드롭다운 요소에서 옵션 선택

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
| `status` | string | 작업 상태 (성공/오류) |
| `selected` | array | 작업 상태 (성공/오류) |
| `selector` | string | 작업 상태 (성공/오류) |

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

### DOM 스냅샷

`browser.snapshot`

현재 페이지의 DOM 스냅샷 캡처

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`html`, `mhtml`, `text`) | No | `html` | 출력 형식 (html 또는 text) |
| `selector` | string | No | - | 특정 요소를 스냅샷하기 위한 CSS 선택자 |
| `path` | string | No | - | 스냅샷을 저장할 경로 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 (성공/오류) |
| `format` | string | 스냅샷 형식 |
| `content` | string | 스냅샷 콘텐츠 |
| `path` | string | 스냅샷이 저장된 경로 |
| `size_bytes` | number | 바이트 단위의 스냅샷 크기 |

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

### 브라우저 저장소

`browser.storage`

localStorage 및 sessionStorage 접근

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
| `status` | string | 작업 상태 (성공/오류) |
| `value` | any | 작업 상태 (성공/오류) |
| `keys` | array | 작업 상태 (성공/오류) |
| `length` | number | 반환된 값 |

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

### 탭 관리

`browser.tab`

브라우저 탭 생성, 전환 및 닫기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Tab action to perform |
| `url` | string | No | - | URL to navigate to |
| `index` | number | No | - | Tab index to switch to or close (0-based) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 전환 또는 닫을 탭 인덱스 (0부터 시작) |
| `tab_count` | number | 전환 또는 닫을 탭 인덱스 (0부터 시작) |
| `current_index` | number | 작업 상태 (성공/오류) |
| `tabs` | array | 탭 수 |

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

### 브라우저 추적

`browser.trace`

브라우저 성능 추적 시작, 중지 또는 저장

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | 추적 작업 (시작, 중지, 저장) |
| `categories` | array | No | `['devtools.timeline']` | 캡처할 추적 카테고리 |
| `screenshots` | boolean | No | `True` | 추적에 스크린샷 포함 |
| `path` | string | No | - | 추적 파일을 저장할 경로 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 (성공/오류) |
| `tracing` | boolean | 현재 추적이 활성화되어 있는지 여부 |
| `path` | string | 추적이 저장된 경로 |
| `size_bytes` | number | 바이트 단위의 추적 파일 크기 |

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

### 텍스트 입력

`browser.type`

입력 필드에 텍스트 입력

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
| `status` | string | 작업 상태 (성공/오류) |
| `selector` | string | 입력 필드에 텍스트 입력 |
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

### 파일 업로드

`browser.upload`

파일 입력 요소에 파일 업로드

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `file_path` | string | Yes | - | Local path to the file to upload |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 (성공/오류) |
| `filename` | string | 작업 상태 (성공/오류) |
| `size` | number | 작업 상태 (성공/오류) |
| `selector` | string | 파일 이름 |

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

### 뷰포트 설정

`browser.viewport`

브라우저 뷰포트 크기 가져오기 또는 설정하기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `width` | number | Yes | `1280` | 뷰포트 너비 (픽셀) |
| `height` | number | Yes | `720` | 뷰포트 높이 (픽셀) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 (성공/오류) |
| `viewport` | object | 현재 뷰포트 크기 |
| `previous_viewport` | object | 이전 뷰포트 크기 |

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

### 대기

`browser.wait`

지정된 시간 동안 또는 요소가 나타날 때까지 대기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Duration of the operation in milliseconds |
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `state` | select (`visible`, `hidden`, `attached`, `detached`) | No | `visible` | 기다릴 상태 (보임, 숨김, 첨부됨, 분리됨) |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 작업 상태 (성공/오류) |
| `selector` | string | 작업 상태 (성공/오류) |
| `duration_ms` | number | 시간 동안 또는 요소가 나타날 때까지 대기 |

**Example:** Example

```yaml
duration_ms: 2000
```

**Example:** Example

```yaml
selector: #loading-complete
timeout_ms: 5000
```
