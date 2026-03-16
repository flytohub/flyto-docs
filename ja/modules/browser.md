# Browser Automation

Full web automation: navigation, interaction, data extraction, screenshots, and performance monitoring.

**39 modules**

| Module | Description |
|--------|-------------|
| [クリック](#クリック) | ページ上の要素をクリック |
| [ブラウザを閉じる](#ブラウザを閉じる) | ブラウザを閉じてリソースを解放 |
| [コンソール取得](#コンソール取得) | ブラウザコンソールログを取得 |
| [Cookie 管理](#cookie-管理) | Cookie の取得・設定・削除 |
| [Smart Detect](#smart-detect) | Smart element detection with multi-strategy matching. Finds elements using text, selector, role, proximity, and fuzzy matching with automatic fallbacks. |
| [ダイアログ処理](#ダイアログ処理) | alert・confirm・prompt ダイアログの処理 |
| [ダウンロード](#ダウンロード) | ブラウザからファイルをダウンロード |
| [ドラッグ＆ドロップ](#ドラッグ＆ドロップ) | 要素をドラッグ＆ドロップ |
| [デバイスエミュレート](#デバイスエミュレート) | デバイスをエミュレートまたはカスタムビューポートを設定 |
| [ブラウザ確認](#ブラウザ確認) | ブラウザセッションが存在することを確認（再利用または起動） |
| [JavaScript 実行](#javascript-実行) | ページ上でJavaScriptコードを実行 |
| [データ抽出](#データ抽出) | ページから構造化データを抽出 |
| [要素検索](#要素検索) | ページ内の要素を検索し要素ID一覧を返す |
| [フォーム入力](#フォーム入力) | 自動フィールド検出によるスマートフォーム入力 |
| [フレーム切替](#フレーム切替) | iframe またはフレームに切り替え |
| [位置情報シミュレート](#位置情報シミュレート) | ブラウザの位置情報をシミュレート |
| [URLに移動](#urlに移動) | 指定URLに移動 |
| [ホバー](#ホバー) | 要素にマウスオーバー |
| [ブラウザ起動](#ブラウザ起動) | Playwright で新しいブラウザを起動 |
| [履歴ナビゲート](#履歴ナビゲート) | ブラウザ履歴をナビゲート（戻る、進む、リロード） |
| [ネットワーク監視](#ネットワーク監視) | ネットワークリクエストの監視・傍受 |
| [ページ一覧](#ページ一覧) | 開いているすべてのブラウザページ/タブを一覧表示 |
| [ページネート＆抽出](#ページネート＆抽出) | ページを自動でページネートし、データを抽出 |
| [PDF生成](#pdf生成) | 現在のページからPDFを生成 |
| [パフォーマンス指標](#パフォーマンス指標) | ブラウザのパフォーマンス指標を収集 |
| [キー入力](#キー入力) | キーボードキーを押す |
| [操作記録](#操作記録) | ユーザー操作をワークフローとして記録 |
| [ブラウザを解放](#ブラウザを解放) | ブラウザセッションを解放（所有している場合のみ閉じる） |
| [スクリーンショット](#スクリーンショット) | 現在のページのスクリーンショットを撮影 |
| [スクロール](#スクロール) | 要素・位置・方向にスクロール |
| [選択](#選択) | ドロップダウンから選択 |
| [DOMスナップショット](#domスナップショット) | 現在のページのDOMスナップショットをキャプチャ |
| [ストレージ](#ストレージ) | localStorage・sessionStorage にアクセス |
| [タブ管理](#タブ管理) | タブの作成・切替・閉じる |
| [ブラウザトレース](#ブラウザトレース) | ブラウザのパフォーマンストレースを開始、停止、または保存 |
| [テキスト入力](#テキスト入力) | 入力フィールドにテキストを入力 |
| [ファイルアップロード](#ファイルアップロード) | ファイル入力要素にファイルをアップロード |
| [ビューポート設定](#ビューポート設定) | ブラウザのビューポートサイズを取得または設定 |
| [待機](#待機) | 一定時間または要素が表示されるまで待機 |

## Modules

### クリック

`browser.click`

ページ上の要素をクリック

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
| `status` | string | 操作ステータス |
| `selector` | string | クリックされたセレクター |
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

### ブラウザを閉じる

`browser.close`

ブラウザを閉じてリソースを解放

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `_no_params` | boolean | No | `True` | This module requires no parameters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `message` | string | 終了結果メッセージ |

**Example:** Example

```yaml
```

### コンソール取得

`browser.console`

ブラウザコンソールログを取得

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `level` | select (`all`, `error`, `warning`, `info`, `log`) | No | `all` | Filter console messages by level |
| `timeout` | number | No | `5000` | Maximum time to wait in milliseconds |
| `clear_existing` | boolean | No | `False` | Clear existing messages before capturing |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `messages` | array | コンソールメッセージ一覧 |
| `count` | number | ログ件数 |

**Example:** Example

```yaml
timeout: 3000
```

**Example:** Example

```yaml
level: error
timeout: 5000
```

### Cookie 管理

`browser.cookies`

Cookie の取得・設定・削除

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
| `status` | string | 操作ステータス |
| `cookies` | array | Cookie 一覧 |
| `count` | number | Cookie 件数 |

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

### ダイアログ処理

`browser.dialog`

alert・confirm・prompt ダイアログの処理

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`accept`, `dismiss`, `listen`) | Yes | - | How to respond to the dialog |
| `prompt_text` | string | No | - | Text to enter in prompt dialog (for accept action) |
| `timeout` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `message` | string | ダイアログメッセージ |
| `type` | string | ダイアログタイプ |
| `default_value` | string | ダイアログのデフォルト値 |

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

### ダウンロード

`browser.download`

ブラウザからファイルをダウンロード

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `save_path` | string | Yes | - | Path where to save the downloaded file |
| `timeout_ms` | number | No | `60000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `path` | string | ファイルパス |
| `filename` | string | ファイル名 |
| `size` | number | ファイルサイズ |

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

### ドラッグ＆ドロップ

`browser.drag`

要素をドラッグ＆ドロップ

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
| `status` | string | 操作ステータス |
| `source` | string | ソース要素位置 |
| `target` | string | ターゲット要素位置 |

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

### デバイスエミュレート

`browser.emulate`

デバイスをエミュレートまたはカスタムビューポートを設定

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `device` | select (`iphone_12`, `iphone_14`, `iphone_14_pro_max`, `iphone_se`, `pixel_7`, `pixel_5`, `galaxy_s21`, `galaxy_s23`, `ipad_pro`, `ipad_mini`, `galaxy_tab_s8`, `desktop_chrome`, `desktop_firefox`, `desktop_safari`, `desktop_edge`, `laptop`, `macbook_pro`, `custom`) | Yes | - | エミュレートするデバイス名（例：iPhone 13） |
| `width` | number | No | - | ビューポートの幅（ピクセル） |
| `height` | number | No | - | ビューポートの高さ（ピクセル） |
| `user_agent` | string | No | - | カスタムユーザーエージェント文字列 |
| `is_mobile` | boolean | No | - | モバイルデバイスをエミュレートするかどうか |
| `has_touch` | boolean | No | - | デバイスにタッチサポートがあるかどうか |
| `device_scale_factor` | number | No | - | デバイスピクセル比 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス（成功/エラー） |
| `device` | string | エミュレートされたデバイス名 |
| `viewport` | object | 現在のビューポート寸法 |
| `is_mobile` | boolean | モバイルエミュレーションが有効かどうか |

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

### ブラウザ確認

`browser.ensure`

ブラウザセッションが存在することを確認（再利用または起動）

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | ブラウザが起動または再利用されたかどうか |
| `message` | string | ブラウザが起動または再利用されたかどうか |
| `is_owner` | boolean | ブラウザが起動または再利用されたかどうか |

**Example:** Example

```yaml
headless: false
```

**Example:** Example

```yaml
headless: true
```

### JavaScript 実行

`browser.evaluate`

ページ上でJavaScriptコードを実行

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `script` | string | Yes | - | JavaScript code to execute (can use return statement) |
| `args` | array | No | - | Arguments to pass to the script function |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `result` | any | 実行結果 |

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

### データ抽出

`browser.extract`

ページから構造化データを抽出

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |
| `fields` | object | No | - | Define fields to extract from each item |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `data` | array | 抽出データ |
| `count` | number | 抽出件数 |

**Example:** Example

```yaml
selector: .g
limit: 10
fields: {"title": {"selector": "h3", "type": "text"}, "url": {"selector": "a", "type": "attribute", "attribute": "href"}}
```

### 要素検索

`browser.find`

ページ内の要素を検索し要素ID一覧を返す

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `count` | number | 見つかった要素数 |
| `element_ids` | array | 要素ID一覧 |

**Example:** Find search results

```yaml
selector: div.tF2Cxc
limit: 10
```

### フォーム入力

`browser.form`

自動フィールド検出によるスマートフォーム入力

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
| `filled_fields` | array | 各フィールド入力間の遅延（より人間らしい動作のため） |
| `failed_fields` | array | 入力されたフィールドのリスト |
| `submitted` | boolean | 入力されたフィールドのリスト |

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

### フレーム切替

`browser.frame`

iframe またはフレームに切り替え

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
| `status` | string | 操作ステータス |
| `frame_url` | string | フレームURL |
| `frame_name` | string | フレーム名 |
| `frames` | array | フレーム一覧 |

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

### 位置情報シミュレート

`browser.geolocation`

ブラウザの位置情報をシミュレート

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `latitude` | number | Yes | - | Latitude coordinate (-90 to 90) |
| `longitude` | number | Yes | - | Longitude coordinate (-180 to 180) |
| `accuracy` | number | No | `100` | Position accuracy in meters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `location` | object | 位置情報 |

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

### URLに移動

`browser.goto`

指定URLに移動

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to navigate to |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `url` | string | 実際に開いたURL |

**Example:** Example

```yaml
url: https://www.google.com
wait_until: domcontentloaded
```

### ホバー

`browser.hover`

要素にマウスオーバー

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |
| `position` | object | No | - | Click position relative to element (0-1 range) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `selector` | string | ホバーしたセレクター |

**Example:** Example

```yaml
selector: .menu-item
```

**Example:** Example

```yaml
selector: #dropdown-trigger
timeout_ms: 5000
```

### ブラウザ起動

`browser.launch`

Playwright で新しいブラウザを起動

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |
| `browser_type` | select (`chromium`, `firefox`, `webkit`) | No | `chromium` | 使用するブラウザエンジン（chromium、firefox、webkit） |
| `channel` | select (``, `chrome`, `msedge`) | No | - | Use system Chrome instead of bundled Chromium for better anti-detection bypass |
| `proxy` | string | No | - | プロキシサーバーのURL |
| `user_agent` | string | No | - | カスタムユーザーエージェント文字列 |
| `locale` | string | No | `en-US` | Browser locale (e.g. en-US, zh-TW, ja-JP) |
| `slow_mo` | number | No | `0` | 指定されたミリ秒で操作を遅くする |
| `record_video_dir` | string | No | - | Directory to save recorded videos (enables Playwright video recording) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `message` | string | 起動結果メッセージ |
| `browser_type` | string | 起動したブラウザのタイプ |
| `headless` | boolean | ブラウザがヘッドレスで実行されているかどうか |
| `viewport` | object | 現在のビューポート寸法 |

**Example:** Example

```yaml
headless: true
```

**Example:** Example

```yaml
headless: false
```

### 履歴ナビゲート

`browser.navigation`

ブラウザ履歴をナビゲート（戻る、進む、リロード）

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`back`, `forward`, `reload`) | Yes | `reload` | Which navigation action to perform |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス（成功/エラー） |
| `action` | string | 実行されたナビゲーションアクション |
| `url` | string | ナビゲーション後の現在のURL |

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

### ネットワーク監視

`browser.network`

ネットワークリクエストの監視・傍受

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
| `status` | string | 操作ステータス |
| `requests` | array | リクエスト一覧 |
| `blocked_count` | number | ブロック件数 |

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

### ページ一覧

`browser.pages`

開いているすべてのブラウザページ/タブを一覧表示

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `include_details` | boolean | No | `True` | 各ページの詳細情報を含める |
| `include_content_info` | boolean | No | `False` | 各ページのコンテンツタイプ情報を含める |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス（成功/エラー） |
| `pages` | array | 開いているページの一覧 |
| `count` | number | 開いているページの数 |
| `current_index` | number | 現在アクティブなページのインデックス |

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

### ページネート＆抽出

`browser.pagination`

ページを自動でページネートし、データを抽出

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
| `items` | array | ページがなくなったときに表示されるセレクタ（ページネーション停止） |
| `total_items` | integer | すべてのページから抽出されたアイテム |
| `pages_processed` | integer | すべてのページから抽出されたアイテム |
| `stopped_reason` | string | 処理されたページ数 |

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

### PDF生成

`browser.pdf`

現在のページからPDFを生成

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
| `status` | string | 操作ステータス |
| `path` | string | PDFファイルパス |
| `size` | number | PDFファイルサイズ |

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

### パフォーマンス指標

`browser.performance`

ブラウザのパフォーマンス指標を収集

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | array | No | `['all']` | 収集するパフォーマンス指標 |
| `timeout_ms` | number | No | `3000` | タイムアウト（ミリ秒） |
| `setup_observers` | boolean | No | `True` | 収集前にパフォーマンスオブザーバーを設定 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス（成功/エラー） |
| `metrics` | object | 収集されたパフォーマンス指標 |

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

### キー入力

`browser.press`

キーボードキーを押す

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | The key to press (e.g., Enter, Escape, Tab) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `key` | string | 押されたキー |

**Example:** Example

```yaml
key: Enter
```

**Example:** Example

```yaml
key: Escape
```

### 操作記録

`browser.record`

ユーザー操作をワークフローとして記録

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Recording action to perform |
| `output_format` | string | No | `yaml` | Format for recorded workflow |
| `output_path` | string | No | - | Path where the output file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `recording` | array | 記録状態 |
| `workflow` | string | 記録されたワークフロー |

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

### ブラウザを解放

`browser.release`

ブラウザセッションを解放（所有している場合のみ閉じる）

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `force` | boolean | No | `False` | このテンプレートが所有していなくてもブラウザを閉じる |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | このテンプレートが所有していなくてもブラウザを閉じる |
| `message` | string | 実行されたアクション |
| `was_owner` | boolean | 実行されたアクション |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
force: true
```

### スクリーンショット

`browser.screenshot`

現在のページのスクリーンショットを撮影

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
| `status` | string | 操作ステータス |
| `filepath` | string | ファイルパス |

**Example:** Example

```yaml
path: output/page.png
```

### スクロール

`browser.scroll`

要素・位置・方向にスクロール

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
| `status` | string | 操作ステータス |
| `scrolled_to` | object | スクロール位置 |

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

### 選択

`browser.select`

ドロップダウンから選択

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
| `status` | string | 操作ステータス |
| `selected` | array | 選択された値 |
| `selector` | string | セレクター |

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

### DOMスナップショット

`browser.snapshot`

現在のページのDOMスナップショットをキャプチャ

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`html`, `mhtml`, `text`) | No | `html` | 出力形式（htmlまたはtext） |
| `selector` | string | No | - | 特定の要素をスナップショットするためのCSSセレクタ |
| `path` | string | No | - | スナップショットを保存するパス |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス（成功/エラー） |
| `format` | string | スナップショットの形式 |
| `content` | string | スナップショットの内容 |
| `path` | string | スナップショットが保存されたパス |
| `size_bytes` | number | スナップショットのサイズ（バイト） |

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

### ストレージ

`browser.storage`

localStorage・sessionStorage にアクセス

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
| `status` | string | 操作ステータス |
| `value` | any | 取得した値 |
| `keys` | array | キー一覧 |
| `length` | number | 項目数 |

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

### タブ管理

`browser.tab`

タブの作成・切替・閉じる

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Tab action to perform |
| `url` | string | No | - | URL to navigate to |
| `index` | number | No | - | Tab index to switch to or close (0-based) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `tab_count` | number | タブ総数 |
| `current_index` | number | 現在のタブインデックス |
| `tabs` | array | タブ一覧 |

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

### ブラウザトレース

`browser.trace`

ブラウザのパフォーマンストレースを開始、停止、または保存

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | トレースアクション（開始、停止、保存） |
| `categories` | array | No | `['devtools.timeline']` | キャプチャするトレースカテゴリ |
| `screenshots` | boolean | No | `True` | トレースにスクリーンショットを含める |
| `path` | string | No | - | トレースファイルを保存するパス |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス（成功/エラー） |
| `tracing` | boolean | トレースが現在アクティブかどうか |
| `path` | string | トレースが保存されたパス |
| `size_bytes` | number | トレースファイルのサイズ（バイト） |

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

### テキスト入力

`browser.type`

入力フィールドにテキストを入力

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
| `status` | string | 操作ステータス |
| `selector` | string | 入力セレクター |
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

### ファイルアップロード

`browser.upload`

ファイル入力要素にファイルをアップロード

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `file_path` | string | Yes | - | Local path to the file to upload |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `filename` | string | ファイル名 |
| `size` | number | ファイルサイズ |
| `selector` | string | セレクター |

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

### ビューポート設定

`browser.viewport`

ブラウザのビューポートサイズを取得または設定

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `width` | number | Yes | `1280` | ビューポートの幅（ピクセル） |
| `height` | number | Yes | `720` | ビューポートの高さ（ピクセル） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス（成功/エラー） |
| `viewport` | object | 現在のビューポート寸法 |
| `previous_viewport` | object | 以前のビューポート寸法 |

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

### 待機

`browser.wait`

一定時間または要素が表示されるまで待機

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Duration of the operation in milliseconds |
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `state` | select (`visible`, `hidden`, `attached`, `detached`) | No | `visible` | 待機する状態（表示、非表示、付加、分離） |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | 操作ステータス |
| `selector` | string | 待機セレクター |
| `duration_ms` | number | 待機時間（ミリ秒） |

**Example:** Example

```yaml
duration_ms: 2000
```

**Example:** Example

```yaml
selector: #loading-complete
timeout_ms: 5000
```
