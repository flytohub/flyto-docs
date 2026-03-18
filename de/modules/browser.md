# Browser Automation

Full web automation: navigation, interaction, data extraction, screenshots, and performance monitoring.

**40 modules**

| Module | Description |
|--------|-------------|
| [Element klicken](#element-klicken) | Element auf der Seite anklicken |
| [Browser schließen](#browser-schließen) | Browser-Instanz schließen und Ressourcen freigeben |
| [Konsole erfassen](#konsole-erfassen) | Browser-Konsolenprotokolle erfassen (Fehler, Warnungen, Info) |
| [Cookies verwalten](#cookies-verwalten) | Browser-Cookies abrufen, setzen oder löschen |
| [Smart Detect](#smart-detect) | Smart element detection with multi-strategy matching. Finds elements using text, selector, role, proximity, and fuzzy matching with automatic fallbacks. |
| [Dialog behandeln](#dialog-behandeln) | Alert-, Confirm- und Prompt-Dialoge behandeln |
| [Datei herunterladen](#datei-herunterladen) | Datei vom Browser herunterladen |
| [Drag & Drop](#drag--drop) | Elemente ziehen und ablegen |
| [Gerät emulieren](#gerät-emulieren) | Ein Gerät emulieren oder benutzerdefinierte Ansicht einstellen |
| [Browser sicherstellen](#browser-sicherstellen) | Stellt sicher, dass eine Browsersitzung existiert (wiederverwenden oder starten) |
| [JavaScript ausführen](#javascript-ausführen) | JavaScript-Code im Seitenkontext ausführen |
| [Daten extrahieren](#daten-extrahieren) | Strukturierte Daten von der Seite extrahieren |
| [Elemente finden](#elemente-finden) | Elemente auf der Seite finden und Element-ID-Liste zurückgeben |
| [Formular ausfüllen](#formular-ausfüllen) | Intelligentes Ausfüllen von Formularen mit automatischer Felderkennung |
| [Frame wechseln](#frame-wechseln) | Zu iframe- oder Frame-Kontext wechseln |
| [Geolocation simulieren](#geolocation-simulieren) | Browser-Geolocation simulieren |
| [Zu URL gehen](#zu-url-gehen) | Zu einer bestimmten URL navigieren |
| [Element überfahren](#element-überfahren) | Maus über ein Element bewegen |
| [Browser Interact](#browser-interact) | Pause for user to interact with the browser page. Shows page elements in a dialog for the user to choose an action. |
| [Browser starten](#browser-starten) | Neue Browser-Instanz mit Playwright starten |
| [Verlauf navigieren](#verlauf-navigieren) | Browser-Verlauf navigieren (zurück, vorwärts, neu laden) |
| [Netzwerk-Monitor](#netzwerk-monitor) | Netzwerkanfragen überwachen und abfangen |
| [Seiten auflisten](#seiten-auflisten) | Liste aller offenen Browser-Seiten/Tabs |
| [Paginieren & Extrahieren](#paginieren--extrahieren) | Automatisches Blättern durch Seiten und Extrahieren von Daten |
| [PDF generieren](#pdf-generieren) | PDF von aktueller Seite generieren |
| [Leistungsmetriken](#leistungsmetriken) | Erfassen von Browser-Leistungsmetriken |
| [Taste drücken](#taste-drücken) | Tastaturtaste drücken |
| [Aktionen aufzeichnen](#aktionen-aufzeichnen) | Benutzeraktionen als Workflow aufzeichnen |
| [Browser freigeben](#browser-freigeben) | Browser-Sitzung freigeben (nur schließen, wenn im Besitz) |
| [Screenshot erstellen](#screenshot-erstellen) | Screenshot der aktuellen Seite erstellen |
| [Seite scrollen](#seite-scrollen) | Seite zu Element, Position oder Richtung scrollen |
| [Option auswählen](#option-auswählen) | Option aus Dropdown-Element auswählen |
| [DOM-Snapshot](#dom-snapshot) | DOM-Snapshot der aktuellen Seite erfassen |
| [Browser-Speicher](#browser-speicher) | Auf localStorage und sessionStorage zugreifen |
| [Tabs verwalten](#tabs-verwalten) | Browser-Tabs erstellen, wechseln und schließen |
| [Browser-Trace](#browser-trace) | Browser-Leistungstraces starten, stoppen oder speichern |
| [Text eingeben](#text-eingeben) | Text in Eingabefeld eingeben |
| [Datei hochladen](#datei-hochladen) | Datei zum Datei-Eingabeelement hochladen |
| [Viewport festlegen](#viewport-festlegen) | Größe des Browser-Viewports abrufen oder festlegen |
| [Warten](#warten) | Auf eine Dauer oder bis ein Element erscheint warten |

## Modules

### Element klicken

`browser.click`

Element auf der Seite anklicken

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
| `status` | string | Operationsstatus (Erfolg/Fehler) |
| `selector` | string | Operationsstatus (Erfolg/Fehler) |
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

### Browser schließen

`browser.close`

Browser-Instanz schließen und Ressourcen freigeben

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `_no_params` | boolean | No | `True` | This module requires no parameters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Browser-Instanz schließen |
| `message` | string | Browser-Instanz schließen |

**Example:** Example

```yaml
```

### Konsole erfassen

`browser.console`

Browser-Konsolenprotokolle erfassen (Fehler, Warnungen, Info)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `level` | select (`all`, `error`, `warning`, `info`, `log`) | No | `all` | Filter console messages by level |
| `timeout` | number | No | `5000` | Maximum time to wait in milliseconds |
| `clear_existing` | boolean | No | `False` | Clear existing messages before capturing |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operationsstatus (Erfolg/Fehler) |
| `messages` | array | Operationsstatus (Erfolg/Fehler) |
| `count` | number | Operationsstatus (Erfolg/Fehler) |

**Example:** Example

```yaml
timeout: 3000
```

**Example:** Example

```yaml
level: error
timeout: 5000
```

### Cookies verwalten

`browser.cookies`

Browser-Cookies abrufen, setzen oder löschen

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
| `status` | string | Operationsstatus (Erfolg/Fehler) |
| `cookies` | array | Operationsstatus (Erfolg/Fehler) |
| `count` | number | Operationsstatus (Erfolg/Fehler) |

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

### Dialog behandeln

`browser.dialog`

Alert-, Confirm- und Prompt-Dialoge behandeln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`accept`, `dismiss`, `listen`) | Yes | - | How to respond to the dialog |
| `prompt_text` | string | No | - | Text to enter in prompt dialog (for accept action) |
| `timeout` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operationsstatus (Erfolg/Fehler) |
| `message` | string | Operationsstatus (Erfolg/Fehler) |
| `type` | string | Operationsstatus (Erfolg/Fehler) |
| `default_value` | string | Ergebnisnachricht, die das Ergebnis beschreibt |

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

### Datei herunterladen

`browser.download`

Datei vom Browser herunterladen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `save_path` | string | Yes | - | Path where to save the downloaded file |
| `timeout_ms` | number | No | `60000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operationsstatus (Erfolg/Fehler) |
| `path` | string | Operationsstatus (Erfolg/Fehler) |
| `filename` | string | Operationsstatus (Erfolg/Fehler) |
| `size` | number | Datei- oder Ressourcenpfad |

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

### Drag & Drop

`browser.drag`

Elemente ziehen und ablegen

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
| `status` | string | Position innerhalb des Zielelements {x, y} als Prozentsätze |
| `source` | string | Position innerhalb des Zielelements {x, y} als Prozentsätze |
| `target` | string | Operationsstatus (Erfolg/Fehler) |

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

### Gerät emulieren

`browser.emulate`

Ein Gerät emulieren oder benutzerdefinierte Ansicht einstellen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `device` | select (`iphone_12`, `iphone_14`, `iphone_14_pro_max`, `iphone_se`, `pixel_7`, `pixel_5`, `galaxy_s21`, `galaxy_s23`, `ipad_pro`, `ipad_mini`, `galaxy_tab_s8`, `desktop_chrome`, `desktop_firefox`, `desktop_safari`, `desktop_edge`, `laptop`, `macbook_pro`, `custom`) | Yes | - | Name des zu emulierenden Geräts (z.B. iPhone 13) |
| `width` | number | No | - | Ansichtsbreite in Pixel |
| `height` | number | No | - | Ansichtshöhe in Pixel |
| `user_agent` | string | No | - | Benutzerdefinierter User-Agent-String |
| `is_mobile` | boolean | No | - | Ob ein mobiles Gerät emuliert werden soll |
| `has_touch` | boolean | No | - | Ob das Gerät Touch-Unterstützung hat |
| `device_scale_factor` | number | No | - | Geräte-Pixel-Verhältnis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status der Operation (erfolgreich/Fehler) |
| `device` | string | Name des emulierten Geräts |
| `viewport` | object | Aktuelle Ansichtsgröße |
| `is_mobile` | boolean | Ob die mobile Emulation aktiv ist |

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

### Browser sicherstellen

`browser.ensure`

Stellt sicher, dass eine Browsersitzung existiert (wiederverwenden oder starten)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Ob der Browser gestartet oder wiederverwendet wurde |
| `message` | string | Ob der Browser gestartet oder wiederverwendet wurde |
| `is_owner` | boolean | Ob der Browser gestartet oder wiederverwendet wurde |

**Example:** Example

```yaml
headless: false
```

**Example:** Example

```yaml
headless: true
```

### JavaScript ausführen

`browser.evaluate`

JavaScript-Code im Seitenkontext ausführen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `script` | string | Yes | - | JavaScript code to execute (can use return statement) |
| `args` | array | No | - | Arguments to pass to the script function |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operationsstatus (Erfolg/Fehler) |
| `result` | any | Operationsstatus (Erfolg/Fehler) |

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

### Daten extrahieren

`browser.extract`

Strukturierte Daten von der Seite extrahieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |
| `fields` | object | No | - | Define fields to extract from each item |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operationsstatus (Erfolg/Fehler) |
| `data` | array | Operationsstatus (Erfolg/Fehler) |
| `count` | number | Operationsstatus (Erfolg/Fehler) |

**Example:** Example

```yaml
selector: .g
limit: 10
fields: {"title": {"selector": "h3", "type": "text"}, "url": {"selector": "a", "type": "attribute", "attribute": "href"}}
```

### Elemente finden

`browser.find`

Elemente auf der Seite finden und Element-ID-Liste zurückgeben

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operationsstatus (Erfolg/Fehler) |
| `count` | number | Operationsstatus (Erfolg/Fehler) |
| `element_ids` | array | Operationsstatus (Erfolg/Fehler) |

**Example:** Find search results

```yaml
selector: div.tF2Cxc
limit: 10
```

### Formular ausfüllen

`browser.form`

Intelligentes Ausfüllen von Formularen mit automatischer Felderkennung

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
| `filled_fields` | array | Verzögerung zwischen dem Ausfüllen der einzelnen Felder (für menschlicheres Verhalten) |
| `failed_fields` | array | Liste der ausgefüllten Felder |
| `submitted` | boolean | Liste der ausgefüllten Felder |

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

### Frame wechseln

`browser.frame`

Zu iframe- oder Frame-Kontext wechseln

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
| `status` | string | Frame-Aktion (enter zum Frame wechseln, list zum Auflisten aller Frames) |
| `frame_url` | string | Frame-Aktion (enter zum Frame wechseln, list zum Auflisten aller Frames) |
| `frame_name` | string | Operationsstatus (Erfolg/Fehler) |
| `frames` | array | Frame-URL |

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

### Geolocation simulieren

`browser.geolocation`

Browser-Geolocation simulieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `latitude` | number | Yes | - | Latitude coordinate (-90 to 90) |
| `longitude` | number | Yes | - | Longitude coordinate (-180 to 180) |
| `accuracy` | number | No | `100` | Position accuracy in meters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Positionsgenauigkeit in Metern |
| `location` | object | Positionsgenauigkeit in Metern |

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

### Zu URL gehen

`browser.goto`

Zu einer bestimmten URL navigieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to navigate to |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operationsstatus (Erfolg/Fehler) |
| `url` | string | Zu einer bestimmten URL navigieren |

**Example:** Example

```yaml
url: https://www.google.com
wait_until: domcontentloaded
```

### Element überfahren

`browser.hover`

Maus über ein Element bewegen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |
| `position` | object | No | - | Click position relative to element (0-1 range) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operationsstatus (Erfolg/Fehler) |
| `selector` | string | Operationsstatus (Erfolg/Fehler) |

**Example:** Example

```yaml
selector: .menu-item
```

**Example:** Example

```yaml
selector: #dropdown-trigger
timeout_ms: 5000
```

### Browser Interact

`browser.interact`

Pause for user to interact with the browser page. Shows page elements in a dialog for the user to choose an action.

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `title` | string | No | `Browser Interaction` | Title displayed to approvers |
| `description` | string | No | - | Optional description text |
| `timeout_seconds` | number | No | `0` | Maximum wait time (0 for no timeout) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operation status |
| `action` | string | Action executed (click/select/type/toggle) |
| `selector` | string | CSS selector of the interacted element |
| `value` | string | Value used (for select/type actions) |
| `url` | string | Page URL at time of interaction |

**Example:** Example

```yaml
title: Choose a department
description: Select the department you want to register for
```

### Browser starten

`browser.launch`

Neue Browser-Instanz mit Playwright starten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |
| `browser_type` | select (`chromium`, `firefox`, `webkit`) | No | `chromium` | Zu verwendende Browser-Engine (chromium, firefox, webkit) |
| `channel` | select (``, `chrome`, `msedge`) | No | - | Use system Chrome instead of bundled Chromium for better anti-detection bypass |
| `proxy` | string | No | - | Proxy-Server-URL |
| `user_agent` | string | No | - | Benutzerdefinierter User-Agent-String |
| `locale` | string | No | `en-US` | Browser locale (e.g. en-US, zh-TW, ja-JP) |
| `slow_mo` | number | No | `0` | Operationen um angegebene Millisekunden verlangsamen |
| `record_video_dir` | string | No | - | Directory to save recorded videos (enables Playwright video recording) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operationsstatus (Erfolg/Fehler) |
| `message` | string | Neue Browser-Instanz starten |
| `browser_type` | string | Typ des gestarteten Browsers |
| `headless` | boolean | Ob der Browser im Headless-Modus läuft |
| `viewport` | object | Aktuelle Ansichtsgröße |

**Example:** Example

```yaml
headless: true
```

**Example:** Example

```yaml
headless: false
```

### Verlauf navigieren

`browser.navigation`

Browser-Verlauf navigieren (zurück, vorwärts, neu laden)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`back`, `forward`, `reload`) | Yes | `reload` | Which navigation action to perform |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status der Operation (erfolgreich/Fehler) |
| `action` | string | Durchgeführte Navigationsaktion |
| `url` | string | Aktuelle URL nach der Navigation |

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

### Netzwerk-Monitor

`browser.network`

Netzwerkanfragen überwachen und abfangen

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
| `status` | string | Antwort für abgefangene Anfragen zurückgeben |
| `requests` | array | Antwort für abgefangene Anfragen zurückgeben |
| `blocked_count` | number | Operationsstatus (Erfolg/Fehler) |

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

### Seiten auflisten

`browser.pages`

Liste aller offenen Browser-Seiten/Tabs

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `include_details` | boolean | No | `True` | Detaillierte Informationen für jede Seite einbeziehen |
| `include_content_info` | boolean | No | `False` | Inhaltstyp-Informationen für jede Seite einbeziehen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Betriebsstatus (Erfolg/Fehler) |
| `pages` | array | Liste der offenen Seiten |
| `count` | number | Anzahl der offenen Seiten |
| `current_index` | number | Index der aktuell aktiven Seite |

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

### Paginieren & Extrahieren

`browser.pagination`

Automatisches Blättern durch Seiten und Extrahieren von Daten

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
| `items` | array | Selektor, der erscheint, wenn keine weiteren Seiten vorhanden sind (stoppt Paginierung) |
| `total_items` | integer | Alle extrahierten Elemente von allen Seiten |
| `pages_processed` | integer | Alle extrahierten Elemente von allen Seiten |
| `stopped_reason` | string | Anzahl der verarbeiteten Seiten |

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

### PDF generieren

`browser.pdf`

PDF von aktueller Seite generieren

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
| `status` | string | Skalierung der Webseiten-Darstellung (0.1-2) |
| `path` | string | Operationsstatus (Erfolg/Fehler) |
| `size` | number | Operationsstatus (Erfolg/Fehler) |

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

### Leistungsmetriken

`browser.performance`

Erfassen von Browser-Leistungsmetriken

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | array | No | `['all']` | Zu erfassende Leistungsmetriken |
| `timeout_ms` | number | No | `3000` | Timeout in Millisekunden |
| `setup_observers` | boolean | No | `True` | Leistungsbeobachter vor der Erfassung einrichten |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Betriebsstatus (Erfolg/Fehler) |
| `metrics` | object | Erfasste Leistungsmetriken |

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

### Taste drücken

`browser.press`

Tastaturtaste drücken

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | The key to press (e.g., Enter, Escape, Tab) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operationsstatus (Erfolg/Fehler) |
| `key` | string | Tastaturtaste drücken |

**Example:** Example

```yaml
key: Enter
```

**Example:** Example

```yaml
key: Escape
```

### Aktionen aufzeichnen

`browser.record`

Benutzeraktionen als Workflow aufzeichnen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Recording action to perform |
| `output_format` | string | No | `yaml` | Format for recorded workflow |
| `output_path` | string | No | - | Path where the output file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Format für aufgezeichneten Workflow (yaml oder json) |
| `recording` | array | Format für aufgezeichneten Workflow (yaml oder json) |
| `workflow` | string | Operationsstatus (Erfolg/Fehler) |

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

### Browser freigeben

`browser.release`

Browser-Sitzung freigeben (nur schließen, wenn im Besitz)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `force` | boolean | No | `False` | Browser schließen, auch wenn nicht von dieser Vorlage besessen |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Browser schließen, auch wenn nicht von dieser Vorlage besessen |
| `message` | string | Welche Aktion wurde durchgeführt |
| `was_owner` | boolean | Welche Aktion wurde durchgeführt |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
force: true
```

### Screenshot erstellen

`browser.screenshot`

Screenshot der aktuellen Seite erstellen

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
| `status` | string | Operationsstatus (Erfolg/Fehler) |
| `filepath` | string | Screenshot der aktuellen Seite erstellen |

**Example:** Example

```yaml
path: output/page.png
```

### Seite scrollen

`browser.scroll`

Seite zu Element, Position oder Richtung scrollen

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
| `status` | string | Operationsstatus (Erfolg/Fehler) |
| `scrolled_to` | object | Operationsstatus (Erfolg/Fehler) |

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

### Option auswählen

`browser.select`

Option aus Dropdown-Element auswählen

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
| `status` | string | Operationsstatus (Erfolg/Fehler) |
| `selected` | array | Operationsstatus (Erfolg/Fehler) |
| `selector` | string | Operationsstatus (Erfolg/Fehler) |

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

### DOM-Snapshot

`browser.snapshot`

DOM-Snapshot der aktuellen Seite erfassen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`html`, `mhtml`, `text`) | No | `html` | Ausgabeformat (html oder text) |
| `selector` | string | No | - | CSS-Selektor, um ein spezifisches Element zu snappen |
| `path` | string | No | - | Pfad zum Speichern des Snapshots |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Betriebsstatus (Erfolg/Fehler) |
| `format` | string | Format des Snapshots |
| `content` | string | Snapshot-Inhalt |
| `path` | string | Pfad, wo der Snapshot gespeichert wurde |
| `size_bytes` | number | Größe des Snapshots in Bytes |

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

### Browser-Speicher

`browser.storage`

Auf localStorage und sessionStorage zugreifen

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
| `status` | string | Operationsstatus (Erfolg/Fehler) |
| `value` | any | Operationsstatus (Erfolg/Fehler) |
| `keys` | array | Operationsstatus (Erfolg/Fehler) |
| `length` | number | Der zurückgegebene Wert |

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

### Tabs verwalten

`browser.tab`

Browser-Tabs erstellen, wechseln und schließen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Tab action to perform |
| `url` | string | No | - | URL to navigate to |
| `index` | number | No | - | Tab index to switch to or close (0-based) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Tab-Index zum Wechseln oder Schließen (0-basiert) |
| `tab_count` | number | Tab-Index zum Wechseln oder Schließen (0-basiert) |
| `current_index` | number | Operationsstatus (Erfolg/Fehler) |
| `tabs` | array | Die Tab-Anzahl |

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

### Browser-Trace

`browser.trace`

Browser-Leistungstraces starten, stoppen oder speichern

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Trace-Aktion (starten, stoppen, speichern) |
| `categories` | array | No | `['devtools.timeline']` | Zu erfassende Trace-Kategorien |
| `screenshots` | boolean | No | `True` | Screenshots im Trace einbeziehen |
| `path` | string | No | - | Pfad zum Speichern der Trace-Datei |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Betriebsstatus (Erfolg/Fehler) |
| `tracing` | boolean | Ob das Tracing derzeit aktiv ist |
| `path` | string | Pfad, wo der Trace gespeichert wurde |
| `size_bytes` | number | Größe der Trace-Datei in Bytes |

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

### Text eingeben

`browser.type`

Text in Eingabefeld eingeben

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
| `status` | string | Operationsstatus (Erfolg/Fehler) |
| `selector` | string | Text in Eingabefeld eingeben |
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

### Datei hochladen

`browser.upload`

Datei zum Datei-Eingabeelement hochladen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `file_path` | string | Yes | - | Local path to the file to upload |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operationsstatus (Erfolg/Fehler) |
| `filename` | string | Operationsstatus (Erfolg/Fehler) |
| `size` | number | Operationsstatus (Erfolg/Fehler) |
| `selector` | string | Name der Datei |

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

### Viewport festlegen

`browser.viewport`

Größe des Browser-Viewports abrufen oder festlegen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `width` | number | Yes | `1280` | Viewport-Breite in Pixel |
| `height` | number | Yes | `720` | Viewport-Höhe in Pixel |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status der Operation (Erfolg/Fehler) |
| `viewport` | object | Aktuelle Viewport-Abmessungen |
| `previous_viewport` | object | Vorherige Viewport-Abmessungen |

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

### Warten

`browser.wait`

Auf eine Dauer oder bis ein Element erscheint warten

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Duration of the operation in milliseconds |
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `state` | select (`visible`, `hidden`, `attached`, `detached`) | No | `visible` | Zustand, auf den gewartet werden soll (sichtbar, verborgen, angehängt, abgetrennt) |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Operationsstatus (Erfolg/Fehler) |
| `selector` | string | Operationsstatus (Erfolg/Fehler) |
| `duration_ms` | number | Auf eine Dauer oder Element warten |

**Example:** Example

```yaml
duration_ms: 2000
```

**Example:** Example

```yaml
selector: #loading-complete
timeout_ms: 5000
```
