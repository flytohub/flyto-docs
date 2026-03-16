# Browser Automation

Full web automation: navigation, interaction, data extraction, screenshots, and performance monitoring.

**39 modules**

| Module | Description |
|--------|-------------|
| [Öğeye Tıkla](#öğeye-tıkla) | Sayfadaki bir öğeye tıkla |
| [Tarayıcıyı Kapat](#tarayıcıyı-kapat) | Tarayıcı örneğini kapat ve kaynakları serbest bırak |
| [Konsolu Yakala](#konsolu-yakala) | Tarayıcı konsol günlüklerini yakala (hatalar, uyarılar, bilgi) |
| [Çerezleri Yönet](#çerezleri-yönet) | Tarayıcı çerezlerini al, ayarla veya temizle |
| [Smart Detect](#smart-detect) | Smart element detection with multi-strategy matching. Finds elements using text, selector, role, proximity, and fuzzy matching with automatic fallbacks. |
| [Diyaloğu İşle](#diyaloğu-i̇şle) | Uyarı, onay ve istem diyaloglarını işle |
| [Dosya İndir](#dosya-i̇ndir) | Tarayıcıdan dosya indir |
| [Sürükle ve Bırak](#sürükle-ve-bırak) | Öğeleri sürükle ve bırak |
| [Cihazı Taklit Et](#cihazı-taklit-et) | Bir cihazı taklit et veya özel görünüm ayarla |
| [Tarayıcıyı Sağla](#tarayıcıyı-sağla) | Bir tarayıcı oturumu olduğundan emin olun (yeniden kullan veya başlat) |
| [JavaScript Çalıştır](#javascript-çalıştır) | Sayfa bağlamında JavaScript kodu çalıştır |
| [Veri Çıkar](#veri-çıkar) | Sayfadan yapılandırılmış veri çıkar |
| [Öğeleri Bul](#öğeleri-bul) | Sayfada öğeleri bul ve öğe kimliği listesi döndür |
| [Formu Doldur](#formu-doldur) | Otomatik alan algılama ile akıllı form doldurma |
| [Çerçeve Değiştir](#çerçeve-değiştir) | iframe veya çerçeve bağlamına geç |
| [Konum Taklit Et](#konum-taklit-et) | Tarayıcı coğrafi konumunu taklit et |
| [URL'ye Git](#url'ye-git) | Belirli bir URL'ye git |
| [Öğe Üzerinde Bekle](#öğe-üzerinde-bekle) | Fareyi bir öğenin üzerine getir |
| [Tarayıcı Başlat](#tarayıcı-başlat) | Playwright ile yeni tarayıcı örneği başlat |
| [Geçmişte Gez](#geçmişte-gez) | Tarayıcı geçmişinde gezin (geri, ileri, yeniden yükle) |
| [Ağ İzleyici](#ağ-i̇zleyici) | Ağ isteklerini izle ve engelle |
| [Sayfaları Listele](#sayfaları-listele) | Açık tarayıcı sayfalarını/sekmesini listele |
| [Sayfalandır & Çıkar](#sayfalandır--çıkar) | Sayfaları otomatik olarak gez ve verileri çıkar |
| [PDF Oluştur](#pdf-oluştur) | Mevcut sayfadan PDF oluştur |
| [Performans Metrikleri](#performans-metrikleri) | Tarayıcı performans metriklerini topla |
| [Tuşa Bas](#tuşa-bas) | Klavye tuşuna bas |
| [Eylemleri Kaydet](#eylemleri-kaydet) | Kullanıcı eylemlerini iş akışı olarak kaydet |
| [Tarayıcıyı Serbest Bırak](#tarayıcıyı-serbest-bırak) | Tarayıcı oturumunu serbest bırak (sadece sahip olunursa kapat) |
| [Ekran Görüntüsü Al](#ekran-görüntüsü-al) | Mevcut sayfanın ekran görüntüsünü al |
| [Sayfayı Kaydır](#sayfayı-kaydır) | Sayfayı öğeye, konuma veya yöne kaydır |
| [Seçenek Seç](#seçenek-seç) | Açılır öğeden seçenek seç |
| [DOM Anlık Görüntüsü](#dom-anlık-görüntüsü) | Geçerli sayfanın DOM anlık görüntüsünü al |
| [Tarayıcı Depolama](#tarayıcı-depolama) | localStorage ve sessionStorage'a eriş |
| [Sekmeleri Yönet](#sekmeleri-yönet) | Tarayıcı sekmelerini oluştur, değiştir ve kapat |
| [Tarayıcı İzi](#tarayıcı-i̇zi) | Tarayıcı performans izlerini başlat, durdur veya kaydet |
| [Metin Yaz](#metin-yaz) | Giriş alanına metin yaz |
| [Dosya Yükle](#dosya-yükle) | Dosya giriş öğesine dosya yükle |
| [Görünüm Alanını Ayarla](#görünüm-alanını-ayarla) | Tarayıcı görünüm alanı boyutunu al veya ayarla |
| [Bekle](#bekle) | Bir süre veya öğe görünene kadar bekle |

## Modules

### Öğeye Tıkla

`browser.click`

Sayfadaki bir öğeye tıkla

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
| `status` | string | İşlem durumu (başarılı/hata) |
| `selector` | string | İşlem durumu (başarılı/hata) |
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

### Tarayıcıyı Kapat

`browser.close`

Tarayıcı örneğini kapat ve kaynakları serbest bırak

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `_no_params` | boolean | No | `True` | This module requires no parameters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Tarayıcı örneğini kapat |
| `message` | string | Tarayıcı örneğini kapat |

**Example:** Example

```yaml
```

### Konsolu Yakala

`browser.console`

Tarayıcı konsol günlüklerini yakala (hatalar, uyarılar, bilgi)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `level` | select (`all`, `error`, `warning`, `info`, `log`) | No | `all` | Filter console messages by level |
| `timeout` | number | No | `5000` | Maximum time to wait in milliseconds |
| `clear_existing` | boolean | No | `False` | Clear existing messages before capturing |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | İşlem durumu (başarılı/hata) |
| `messages` | array | İşlem durumu (başarılı/hata) |
| `count` | number | İşlem durumu (başarılı/hata) |

**Example:** Example

```yaml
timeout: 3000
```

**Example:** Example

```yaml
level: error
timeout: 5000
```

### Çerezleri Yönet

`browser.cookies`

Tarayıcı çerezlerini al, ayarla veya temizle

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
| `status` | string | İşlem durumu (başarılı/hata) |
| `cookies` | array | İşlem durumu (başarılı/hata) |
| `count` | number | İşlem durumu (başarılı/hata) |

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

### Diyaloğu İşle

`browser.dialog`

Uyarı, onay ve istem diyaloglarını işle

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`accept`, `dismiss`, `listen`) | Yes | - | How to respond to the dialog |
| `prompt_text` | string | No | - | Text to enter in prompt dialog (for accept action) |
| `timeout` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | İşlem durumu (başarılı/hata) |
| `message` | string | İşlem durumu (başarılı/hata) |
| `type` | string | İşlem durumu (başarılı/hata) |
| `default_value` | string | Sonucu açıklayan sonuç mesajı |

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

### Dosya İndir

`browser.download`

Tarayıcıdan dosya indir

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `save_path` | string | Yes | - | Path where to save the downloaded file |
| `timeout_ms` | number | No | `60000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | İşlem durumu (başarılı/hata) |
| `path` | string | İşlem durumu (başarılı/hata) |
| `filename` | string | İşlem durumu (başarılı/hata) |
| `size` | number | Dosya veya kaynak yolu |

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

### Sürükle ve Bırak

`browser.drag`

Öğeleri sürükle ve bırak

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
| `status` | string | Hedef öğe içindeki konum {x, y} yüzdeler olarak |
| `source` | string | Hedef öğe içindeki konum {x, y} yüzdeler olarak |
| `target` | string | İşlem durumu (başarılı/hata) |

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

### Cihazı Taklit Et

`browser.emulate`

Bir cihazı taklit et veya özel görünüm ayarla

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `device` | select (`iphone_12`, `iphone_14`, `iphone_14_pro_max`, `iphone_se`, `pixel_7`, `pixel_5`, `galaxy_s21`, `galaxy_s23`, `ipad_pro`, `ipad_mini`, `galaxy_tab_s8`, `desktop_chrome`, `desktop_firefox`, `desktop_safari`, `desktop_edge`, `laptop`, `macbook_pro`, `custom`) | Yes | - | Taklit edilecek cihaz adı (ör. iPhone 13) |
| `width` | number | No | - | Görünüm genişliği piksel cinsinden |
| `height` | number | No | - | Görünüm yüksekliği piksel cinsinden |
| `user_agent` | string | No | - | Özel kullanıcı ajanı dizesi |
| `is_mobile` | boolean | No | - | Mobil cihazı taklit et |
| `has_touch` | boolean | No | - | Cihazın dokunmatik desteği olup olmadığı |
| `device_scale_factor` | number | No | - | Cihaz piksel oranı |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | İşlem durumu (başarılı/hata) |
| `device` | string | Taklit edilen cihaz adı |
| `viewport` | object | Mevcut görünüm boyutları |
| `is_mobile` | boolean | Mobil taklit aktif mi |

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

### Tarayıcıyı Sağla

`browser.ensure`

Bir tarayıcı oturumu olduğundan emin olun (yeniden kullan veya başlat)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Tarayıcının başlatılıp başlatılmadığı veya yeniden kullanılıp kullanılmadığı |
| `message` | string | Tarayıcının başlatılıp başlatılmadığı veya yeniden kullanılıp kullanılmadığı |
| `is_owner` | boolean | Tarayıcının başlatılıp başlatılmadığı veya yeniden kullanılıp kullanılmadığı |

**Example:** Example

```yaml
headless: false
```

**Example:** Example

```yaml
headless: true
```

### JavaScript Çalıştır

`browser.evaluate`

Sayfa bağlamında JavaScript kodu çalıştır

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `script` | string | Yes | - | JavaScript code to execute (can use return statement) |
| `args` | array | No | - | Arguments to pass to the script function |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | İşlem durumu (başarılı/hata) |
| `result` | any | İşlem durumu (başarılı/hata) |

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

### Veri Çıkar

`browser.extract`

Sayfadan yapılandırılmış veri çıkar

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |
| `fields` | object | No | - | Define fields to extract from each item |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | İşlem durumu (başarılı/hata) |
| `data` | array | İşlem durumu (başarılı/hata) |
| `count` | number | İşlem durumu (başarılı/hata) |

**Example:** Example

```yaml
selector: .g
limit: 10
fields: {"title": {"selector": "h3", "type": "text"}, "url": {"selector": "a", "type": "attribute", "attribute": "href"}}
```

### Öğeleri Bul

`browser.find`

Sayfada öğeleri bul ve öğe kimliği listesi döndür

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | İşlem durumu (başarılı/hata) |
| `count` | number | İşlem durumu (başarılı/hata) |
| `element_ids` | array | İşlem durumu (başarılı/hata) |

**Example:** Find search results

```yaml
selector: div.tF2Cxc
limit: 10
```

### Formu Doldur

`browser.form`

Otomatik alan algılama ile akıllı form doldurma

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
| `filled_fields` | array | Her alanı doldurma arasındaki gecikme (daha insansı davranış için) |
| `failed_fields` | array | Doldurulan alanların listesi |
| `submitted` | boolean | Doldurulan alanların listesi |

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

### Çerçeve Değiştir

`browser.frame`

iframe veya çerçeve bağlamına geç

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
| `status` | string | Çerçeve eylemi (çerçeveye geçmek için enter, tüm çerçeveleri listelemek için list) |
| `frame_url` | string | Çerçeve eylemi (çerçeveye geçmek için enter, tüm çerçeveleri listelemek için list) |
| `frame_name` | string | İşlem durumu (başarılı/hata) |
| `frames` | array | Çerçeve URL'si |

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

### Konum Taklit Et

`browser.geolocation`

Tarayıcı coğrafi konumunu taklit et

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `latitude` | number | Yes | - | Latitude coordinate (-90 to 90) |
| `longitude` | number | Yes | - | Longitude coordinate (-180 to 180) |
| `accuracy` | number | No | `100` | Position accuracy in meters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Metre cinsinden konum doğruluğu |
| `location` | object | Metre cinsinden konum doğruluğu |

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

### URL'ye Git

`browser.goto`

Belirli bir URL'ye git

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to navigate to |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | İşlem durumu (başarılı/hata) |
| `url` | string | Belirli bir URL'ye git |

**Example:** Example

```yaml
url: https://www.google.com
wait_until: domcontentloaded
```

### Öğe Üzerinde Bekle

`browser.hover`

Fareyi bir öğenin üzerine getir

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |
| `position` | object | No | - | Click position relative to element (0-1 range) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | İşlem durumu (başarılı/hata) |
| `selector` | string | İşlem durumu (başarılı/hata) |

**Example:** Example

```yaml
selector: .menu-item
```

**Example:** Example

```yaml
selector: #dropdown-trigger
timeout_ms: 5000
```

### Tarayıcı Başlat

`browser.launch`

Playwright ile yeni tarayıcı örneği başlat

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |
| `browser_type` | select (`chromium`, `firefox`, `webkit`) | No | `chromium` | Kullanılacak tarayıcı motoru (chromium, firefox, webkit) |
| `channel` | select (``, `chrome`, `msedge`) | No | - | Use system Chrome instead of bundled Chromium for better anti-detection bypass |
| `proxy` | string | No | - | Proxy sunucu URL'si |
| `user_agent` | string | No | - | Özel kullanıcı ajanı dizesi |
| `locale` | string | No | `en-US` | Browser locale (e.g. en-US, zh-TW, ja-JP) |
| `slow_mo` | number | No | `0` | İşlemleri belirtilen milisaniye kadar yavaşlat |
| `record_video_dir` | string | No | - | Directory to save recorded videos (enables Playwright video recording) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | İşlem durumu (başarılı/hata) |
| `message` | string | Yeni tarayıcı örneği başlat |
| `browser_type` | string | Başlatılan tarayıcı türü |
| `headless` | boolean | Tarayıcı başsız mı çalışıyor |
| `viewport` | object | Mevcut görünüm boyutları |

**Example:** Example

```yaml
headless: true
```

**Example:** Example

```yaml
headless: false
```

### Geçmişte Gez

`browser.navigation`

Tarayıcı geçmişinde gezin (geri, ileri, yeniden yükle)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`back`, `forward`, `reload`) | Yes | `reload` | Which navigation action to perform |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | İşlem durumu (başarılı/hata) |
| `action` | string | Gerçekleştirilen gezinme eylemi |
| `url` | string | Geçişten sonraki mevcut URL |

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

### Ağ İzleyici

`browser.network`

Ağ isteklerini izle ve engelle

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
| `status` | string | Engellenen istekler için döndürülecek yanıt |
| `requests` | array | Engellenen istekler için döndürülecek yanıt |
| `blocked_count` | number | İşlem durumu (başarılı/hata) |

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

### Sayfaları Listele

`browser.pages`

Açık tarayıcı sayfalarını/sekmesini listele

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `include_details` | boolean | No | `True` | Her sayfa için detaylı bilgi dahil et |
| `include_content_info` | boolean | No | `False` | Her sayfa için içerik türü bilgisini dahil et |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | İşlem durumu (başarılı/hata) |
| `pages` | array | Açık sayfaların listesi |
| `count` | number | Açık sayfa sayısı |
| `current_index` | number | Mevcut aktif sayfanın indeksi |

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

### Sayfalandır & Çıkar

`browser.pagination`

Sayfaları otomatik olarak gez ve verileri çıkar

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
| `items` | array | Daha fazla sayfa olmadığında görünen seçici (sayfalandırmayı durdurur) |
| `total_items` | integer | Tüm sayfalardan çıkarılan tüm öğeler |
| `pages_processed` | integer | Tüm sayfalardan çıkarılan tüm öğeler |
| `stopped_reason` | string | İşlenen sayfa sayısı |

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

### PDF Oluştur

`browser.pdf`

Mevcut sayfadan PDF oluştur

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
| `status` | string | Web sayfası işleme ölçeği (0.1-2) |
| `path` | string | İşlem durumu (başarılı/hata) |
| `size` | number | İşlem durumu (başarılı/hata) |

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

### Performans Metrikleri

`browser.performance`

Tarayıcı performans metriklerini topla

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | array | No | `['all']` | Toplanacak performans metrikleri |
| `timeout_ms` | number | No | `3000` | Milisaniye cinsinden zaman aşımı |
| `setup_observers` | boolean | No | `True` | Toplamadan önce performans gözlemcilerini ayarla |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | İşlem durumu (başarılı/hata) |
| `metrics` | object | Toplanan performans metrikleri |

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

### Tuşa Bas

`browser.press`

Klavye tuşuna bas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | The key to press (e.g., Enter, Escape, Tab) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | İşlem durumu (başarılı/hata) |
| `key` | string | Klavye tuşuna bas |

**Example:** Example

```yaml
key: Enter
```

**Example:** Example

```yaml
key: Escape
```

### Eylemleri Kaydet

`browser.record`

Kullanıcı eylemlerini iş akışı olarak kaydet

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Recording action to perform |
| `output_format` | string | No | `yaml` | Format for recorded workflow |
| `output_path` | string | No | - | Path where the output file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Kaydedilen iş akışı için format (yaml veya json) |
| `recording` | array | Kaydedilen iş akışı için format (yaml veya json) |
| `workflow` | string | İşlem durumu (başarılı/hata) |

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

### Tarayıcıyı Serbest Bırak

`browser.release`

Tarayıcı oturumunu serbest bırak (sadece sahip olunursa kapat)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `force` | boolean | No | `False` | Bu şablon tarafından sahip olunmasa bile tarayıcıyı kapat |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Bu şablon tarafından sahip olunmasa bile tarayıcıyı kapat |
| `message` | string | Hangi işlem yapıldı |
| `was_owner` | boolean | Hangi işlem yapıldı |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
force: true
```

### Ekran Görüntüsü Al

`browser.screenshot`

Mevcut sayfanın ekran görüntüsünü al

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
| `status` | string | İşlem durumu (başarılı/hata) |
| `filepath` | string | Mevcut sayfanın ekran görüntüsünü al |

**Example:** Example

```yaml
path: output/page.png
```

### Sayfayı Kaydır

`browser.scroll`

Sayfayı öğeye, konuma veya yöne kaydır

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
| `status` | string | İşlem durumu (başarılı/hata) |
| `scrolled_to` | object | İşlem durumu (başarılı/hata) |

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

### Seçenek Seç

`browser.select`

Açılır öğeden seçenek seç

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
| `status` | string | İşlem durumu (başarılı/hata) |
| `selected` | array | İşlem durumu (başarılı/hata) |
| `selector` | string | İşlem durumu (başarılı/hata) |

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

### DOM Anlık Görüntüsü

`browser.snapshot`

Geçerli sayfanın DOM anlık görüntüsünü al

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`html`, `mhtml`, `text`) | No | `html` | Çıktı formatı (html veya metin) |
| `selector` | string | No | - | Belirli bir elementi anlık görüntülemek için CSS seçici |
| `path` | string | No | - | Anlık görüntüyü kaydetme yolu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | İşlem durumu (başarılı/hata) |
| `format` | string | Anlık görüntü formatı |
| `content` | string | Anlık görüntü içeriği |
| `path` | string | Anlık görüntünün kaydedildiği yol |
| `size_bytes` | number | Anlık görüntünün boyutu (bayt cinsinden) |

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

### Tarayıcı Depolama

`browser.storage`

localStorage ve sessionStorage'a eriş

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
| `status` | string | İşlem durumu (başarılı/hata) |
| `value` | any | İşlem durumu (başarılı/hata) |
| `keys` | array | İşlem durumu (başarılı/hata) |
| `length` | number | Döndürülen değer |

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

### Sekmeleri Yönet

`browser.tab`

Tarayıcı sekmelerini oluştur, değiştir ve kapat

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Tab action to perform |
| `url` | string | No | - | URL to navigate to |
| `index` | number | No | - | Tab index to switch to or close (0-based) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Geçilecek veya kapatılacak sekme indeksi (0 tabanlı) |
| `tab_count` | number | Geçilecek veya kapatılacak sekme indeksi (0 tabanlı) |
| `current_index` | number | İşlem durumu (başarılı/hata) |
| `tabs` | array | Sekme sayısı |

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

### Tarayıcı İzi

`browser.trace`

Tarayıcı performans izlerini başlat, durdur veya kaydet

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | İzleme eylemi (başlat, durdur, kaydet) |
| `categories` | array | No | `['devtools.timeline']` | Yakalanacak izleme kategorileri |
| `screenshots` | boolean | No | `True` | İzlemeye ekran görüntüleri dahil et |
| `path` | string | No | - | İz dosyasını kaydetme yolu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | İşlem durumu (başarılı/hata) |
| `tracing` | boolean | İzleme şu anda aktif mi |
| `path` | string | İzin kaydedildiği yol |
| `size_bytes` | number | İz dosyasının boyutu (bayt cinsinden) |

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

### Metin Yaz

`browser.type`

Giriş alanına metin yaz

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
| `status` | string | İşlem durumu (başarılı/hata) |
| `selector` | string | Giriş alanına metin yaz |
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

### Dosya Yükle

`browser.upload`

Dosya giriş öğesine dosya yükle

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `file_path` | string | Yes | - | Local path to the file to upload |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | İşlem durumu (başarılı/hata) |
| `filename` | string | İşlem durumu (başarılı/hata) |
| `size` | number | İşlem durumu (başarılı/hata) |
| `selector` | string | Dosya adı |

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

### Görünüm Alanını Ayarla

`browser.viewport`

Tarayıcı görünüm alanı boyutunu al veya ayarla

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `width` | number | Yes | `1280` | Görünüm alanı genişliği (piksel) |
| `height` | number | Yes | `720` | Görünüm alanı yüksekliği (piksel) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | İşlem durumu (başarılı/hata) |
| `viewport` | object | Mevcut görünüm alanı boyutları |
| `previous_viewport` | object | Önceki görünüm alanı boyutları |

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

### Bekle

`browser.wait`

Bir süre veya öğe görünene kadar bekle

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Duration of the operation in milliseconds |
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `state` | select (`visible`, `hidden`, `attached`, `detached`) | No | `visible` | Beklenecek durum (görünür, gizli, bağlı, ayrılmış) |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | İşlem durumu (başarılı/hata) |
| `selector` | string | İşlem durumu (başarılı/hata) |
| `duration_ms` | number | Bir süre veya öğe görünümünü bekle |

**Example:** Example

```yaml
duration_ms: 2000
```

**Example:** Example

```yaml
selector: #loading-complete
timeout_ms: 5000
```
