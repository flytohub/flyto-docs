# Browser Automation

Full web automation: navigation, interaction, data extraction, screenshots, and performance monitoring.

**40 modules**

| Module | Description |
|--------|-------------|
| [Clicca Elemento](#clicca-elemento) | Clicca un elemento sulla pagina |
| [Chiudi Browser](#chiudi-browser) | Chiudi l'istanza browser e rilascia risorse |
| [Cattura Console](#cattura-console) | Cattura log console browser (errori, avvisi, info) |
| [Gestisci Cookie](#gestisci-cookie) | Ottieni, imposta o cancella cookie browser |
| [Smart Detect](#smart-detect) | Smart element detection with multi-strategy matching. Finds elements using text, selector, role, proximity, and fuzzy matching with automatic fallbacks. |
| [Gestisci Dialog](#gestisci-dialog) | Gestisci dialog alert, confirm e prompt |
| [Scarica File](#scarica-file) | Scarica file dal browser |
| [Trascina e Rilascia](#trascina-e-rilascia) | Trascina e rilascia elementi |
| [Emula Dispositivo](#emula-dispositivo) | Emulare un dispositivo o impostare un viewport personalizzato |
| [Assicurarsi del Browser](#assicurarsi-del-browser) | Assicurarsi che esista una sessione del browser (riutilizzo o avvio) |
| [Esegui JavaScript](#esegui-javascript) | Esegui codice JavaScript nel contesto pagina |
| [Estrai Dati](#estrai-dati) | Estrai dati strutturati dalla pagina |
| [Trova Elementi](#trova-elementi) | Trova elementi nella pagina e restituisci lista ID elementi |
| [Compila Modulo](#compila-modulo) | Compilazione intelligente dei moduli con rilevamento automatico dei campi |
| [Cambia Frame](#cambia-frame) | Passa a contesto iframe o frame |
| [Simula Geolocalizzazione](#simula-geolocalizzazione) | Simula geolocalizzazione browser |
| [Vai a URL](#vai-a-url) | Naviga a URL specifico |
| [Hover Elemento](#hover-elemento) | Passa mouse sopra elemento |
| [Browser Interact](#browser-interact) | Pause for user to interact with the browser page. Shows page elements in a dialog for the user to choose an action. |
| [Avvia Browser](#avvia-browser) | Avvia nuova istanza browser con Playwright |
| [Naviga Cronologia](#naviga-cronologia) | Navigare nella cronologia del browser (indietro, avanti, ricarica) |
| [Monitor Rete](#monitor-rete) | Monitora e intercetta richieste di rete |
| [Elenca Pagine](#elenca-pagine) | Elenca tutte le pagine/schede del browser aperte |
| [Pagina & Estrai](#pagina--estrai) | Paginazione automatica tra le pagine ed estrazione dei dati |
| [Genera PDF](#genera-pdf) | Genera PDF dalla pagina corrente |
| [Metriche di Prestazione](#metriche-di-prestazione) | Raccogli metriche di prestazione del browser |
| [Premi Tasto](#premi-tasto) | Premi tasto tastiera |
| [Registra Azioni](#registra-azioni) | Registra azioni utente come workflow |
| [Rilascia Browser](#rilascia-browser) | Rilascia la sessione del browser (chiudi solo se posseduta) |
| [Cattura Screenshot](#cattura-screenshot) | Cattura screenshot della pagina corrente |
| [Scorri Pagina](#scorri-pagina) | Scorri pagina a elemento, posizione o direzione |
| [Seleziona Opzione](#seleziona-opzione) | Seleziona opzione da elemento dropdown |
| [Istantanea DOM](#istantanea-dom) | Cattura un'istantanea DOM della pagina corrente |
| [Storage Browser](#storage-browser) | Accedi localStorage e sessionStorage |
| [Gestisci Schede](#gestisci-schede) | Crea, cambia e chiudi schede browser |
| [Traccia Browser](#traccia-browser) | Avvia, ferma o salva tracce di prestazione del browser |
| [Digita Testo](#digita-testo) | Digita testo in campo input |
| [Carica File](#carica-file) | Carica file su elemento input file |
| [Imposta Viewport](#imposta-viewport) | Ottieni o imposta la dimensione del viewport del browser |
| [Attendi](#attendi) | Attendi una durata o finche un elemento appare |

## Modules

### Clicca Elemento

`browser.click`

Clicca un elemento sulla pagina

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
| `status` | string | Stato operazione (successo/errore) |
| `selector` | string | Stato operazione (successo/errore) |
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

### Chiudi Browser

`browser.close`

Chiudi l'istanza browser e rilascia risorse

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `_no_params` | boolean | No | `True` | This module requires no parameters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Chiudi l'istanza browser |
| `message` | string | Chiudi l'istanza browser |

**Example:** Example

```yaml
```

### Cattura Console

`browser.console`

Cattura log console browser (errori, avvisi, info)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `level` | select (`all`, `error`, `warning`, `info`, `log`) | No | `all` | Filter console messages by level |
| `timeout` | number | No | `5000` | Maximum time to wait in milliseconds |
| `clear_existing` | boolean | No | `False` | Clear existing messages before capturing |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato operazione (successo/errore) |
| `messages` | array | Stato operazione (successo/errore) |
| `count` | number | Stato operazione (successo/errore) |

**Example:** Example

```yaml
timeout: 3000
```

**Example:** Example

```yaml
level: error
timeout: 5000
```

### Gestisci Cookie

`browser.cookies`

Ottieni, imposta o cancella cookie browser

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
| `status` | string | Stato operazione (successo/errore) |
| `cookies` | array | Stato operazione (successo/errore) |
| `count` | number | Stato operazione (successo/errore) |

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

### Gestisci Dialog

`browser.dialog`

Gestisci dialog alert, confirm e prompt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`accept`, `dismiss`, `listen`) | Yes | - | How to respond to the dialog |
| `prompt_text` | string | No | - | Text to enter in prompt dialog (for accept action) |
| `timeout` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato operazione (successo/errore) |
| `message` | string | Stato operazione (successo/errore) |
| `type` | string | Stato operazione (successo/errore) |
| `default_value` | string | Messaggio risultato che descrive l'esito |

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

### Scarica File

`browser.download`

Scarica file dal browser

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `save_path` | string | Yes | - | Path where to save the downloaded file |
| `timeout_ms` | number | No | `60000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato operazione (successo/errore) |
| `path` | string | Stato operazione (successo/errore) |
| `filename` | string | Stato operazione (successo/errore) |
| `size` | number | Percorso file o risorsa |

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

### Trascina e Rilascia

`browser.drag`

Trascina e rilascia elementi

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
| `status` | string | Posizione all'interno dell'elemento target {x, y} come percentuali |
| `source` | string | Posizione all'interno dell'elemento target {x, y} come percentuali |
| `target` | string | Stato operazione (successo/errore) |

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

### Emula Dispositivo

`browser.emulate`

Emulare un dispositivo o impostare un viewport personalizzato

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `device` | select (`iphone_12`, `iphone_14`, `iphone_14_pro_max`, `iphone_se`, `pixel_7`, `pixel_5`, `galaxy_s21`, `galaxy_s23`, `ipad_pro`, `ipad_mini`, `galaxy_tab_s8`, `desktop_chrome`, `desktop_firefox`, `desktop_safari`, `desktop_edge`, `laptop`, `macbook_pro`, `custom`) | Yes | - | Nome del dispositivo da emulare (es. iPhone 13) |
| `width` | number | No | - | Larghezza del viewport in pixel |
| `height` | number | No | - | Altezza del viewport in pixel |
| `user_agent` | string | No | - | Stringa dell'user agent personalizzata |
| `is_mobile` | boolean | No | - | Se emulare un dispositivo mobile |
| `has_touch` | boolean | No | - | Se il dispositivo supporta il tocco |
| `device_scale_factor` | number | No | - | Rapporto pixel del dispositivo |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato dell'operazione (successo/errore) |
| `device` | string | Nome del dispositivo emulato |
| `viewport` | object | Dimensioni attuali del viewport |
| `is_mobile` | boolean | Se l'emulazione mobile è attiva |

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

### Assicurarsi del Browser

`browser.ensure`

Assicurarsi che esista una sessione del browser (riutilizzo o avvio)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Se il browser è stato avviato o riutilizzato |
| `message` | string | Se il browser è stato avviato o riutilizzato |
| `is_owner` | boolean | Se il browser è stato avviato o riutilizzato |

**Example:** Example

```yaml
headless: false
```

**Example:** Example

```yaml
headless: true
```

### Esegui JavaScript

`browser.evaluate`

Esegui codice JavaScript nel contesto pagina

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `script` | string | Yes | - | JavaScript code to execute (can use return statement) |
| `args` | array | No | - | Arguments to pass to the script function |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato operazione (successo/errore) |
| `result` | any | Stato operazione (successo/errore) |

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

### Estrai Dati

`browser.extract`

Estrai dati strutturati dalla pagina

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |
| `fields` | object | No | - | Define fields to extract from each item |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato operazione (successo/errore) |
| `data` | array | Stato operazione (successo/errore) |
| `count` | number | Stato operazione (successo/errore) |

**Example:** Example

```yaml
selector: .g
limit: 10
fields: {"title": {"selector": "h3", "type": "text"}, "url": {"selector": "a", "type": "attribute", "attribute": "href"}}
```

### Trova Elementi

`browser.find`

Trova elementi nella pagina e restituisci lista ID elementi

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato operazione (successo/errore) |
| `count` | number | Stato operazione (successo/errore) |
| `element_ids` | array | Stato operazione (successo/errore) |

**Example:** Find search results

```yaml
selector: div.tF2Cxc
limit: 10
```

### Compila Modulo

`browser.form`

Compilazione intelligente dei moduli con rilevamento automatico dei campi

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
| `filled_fields` | array | Ritardo tra la compilazione di ciascun campo (per un comportamento più umano) |
| `failed_fields` | array | Elenco dei campi compilati |
| `submitted` | boolean | Elenco dei campi compilati |

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

### Cambia Frame

`browser.frame`

Passa a contesto iframe o frame

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
| `status` | string | Azione frame (enter per passare a frame, list per elencare tutti i frame) |
| `frame_url` | string | Azione frame (enter per passare a frame, list per elencare tutti i frame) |
| `frame_name` | string | Stato operazione (successo/errore) |
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

### Simula Geolocalizzazione

`browser.geolocation`

Simula geolocalizzazione browser

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `latitude` | number | Yes | - | Latitude coordinate (-90 to 90) |
| `longitude` | number | Yes | - | Longitude coordinate (-180 to 180) |
| `accuracy` | number | No | `100` | Position accuracy in meters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Precisione posizione in metri |
| `location` | object | Precisione posizione in metri |

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

### Vai a URL

`browser.goto`

Naviga a URL specifico

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to navigate to |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato operazione (successo/errore) |
| `url` | string | Naviga a URL specifico |

**Example:** Example

```yaml
url: https://www.google.com
wait_until: domcontentloaded
```

### Hover Elemento

`browser.hover`

Passa mouse sopra elemento

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |
| `position` | object | No | - | Click position relative to element (0-1 range) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato operazione (successo/errore) |
| `selector` | string | Stato operazione (successo/errore) |

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

### Avvia Browser

`browser.launch`

Avvia nuova istanza browser con Playwright

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |
| `browser_type` | select (`chromium`, `firefox`, `webkit`) | No | `chromium` | Motore del browser da usare (chromium, firefox, webkit) |
| `channel` | select (``, `chrome`, `msedge`) | No | - | Use system Chrome instead of bundled Chromium for better anti-detection bypass |
| `proxy` | string | No | - | URL del server proxy |
| `user_agent` | string | No | - | Stringa dell'user agent personalizzata |
| `locale` | string | No | `en-US` | Browser locale (e.g. en-US, zh-TW, ja-JP) |
| `slow_mo` | number | No | `0` | Rallenta le operazioni di millisecondi specificati |
| `record_video_dir` | string | No | - | Directory to save recorded videos (enables Playwright video recording) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato operazione (successo/errore) |
| `message` | string | Avvia nuova istanza browser |
| `browser_type` | string | Tipo di browser avviato |
| `headless` | boolean | Se il browser è in esecuzione in modalità headless |
| `viewport` | object | Dimensioni attuali del viewport |

**Example:** Example

```yaml
headless: true
```

**Example:** Example

```yaml
headless: false
```

### Naviga Cronologia

`browser.navigation`

Navigare nella cronologia del browser (indietro, avanti, ricarica)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`back`, `forward`, `reload`) | Yes | `reload` | Which navigation action to perform |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato dell'operazione (successo/errore) |
| `action` | string | Azione di navigazione eseguita |
| `url` | string | URL corrente dopo la navigazione |

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

### Monitor Rete

`browser.network`

Monitora e intercetta richieste di rete

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
| `status` | string | Risposta da restituire per richieste intercettate |
| `requests` | array | Risposta da restituire per richieste intercettate |
| `blocked_count` | number | Stato operazione (successo/errore) |

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

### Elenca Pagine

`browser.pages`

Elenca tutte le pagine/schede del browser aperte

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `include_details` | boolean | No | `True` | Includi informazioni dettagliate per ogni pagina |
| `include_content_info` | boolean | No | `False` | Includi informazioni sul tipo di contenuto per ogni pagina |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato dell'operazione (successo/errore) |
| `pages` | array | Elenco delle pagine aperte |
| `count` | number | Numero di pagine aperte |
| `current_index` | number | Indice della pagina attiva corrente |

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

### Pagina & Estrai

`browser.pagination`

Paginazione automatica tra le pagine ed estrazione dei dati

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
| `items` | array | Selettore che appare quando non ci sono più pagine (ferma la paginazione) |
| `total_items` | integer | Tutti gli elementi estratti da tutte le pagine |
| `pages_processed` | integer | Tutti gli elementi estratti da tutte le pagine |
| `stopped_reason` | string | Numero di pagine processate |

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

### Genera PDF

`browser.pdf`

Genera PDF dalla pagina corrente

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
| `status` | string | Scala del rendering pagina web (0.1-2) |
| `path` | string | Stato operazione (successo/errore) |
| `size` | number | Stato operazione (successo/errore) |

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

### Metriche di Prestazione

`browser.performance`

Raccogli metriche di prestazione del browser

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | array | No | `['all']` | Metriche di prestazione da raccogliere |
| `timeout_ms` | number | No | `3000` | Timeout in millisecondi |
| `setup_observers` | boolean | No | `True` | Configura osservatori di prestazione prima di raccogliere |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato dell'operazione (successo/errore) |
| `metrics` | object | Metriche di prestazione raccolte |

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

### Premi Tasto

`browser.press`

Premi tasto tastiera

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | The key to press (e.g., Enter, Escape, Tab) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato operazione (successo/errore) |
| `key` | string | Premi tasto tastiera |

**Example:** Example

```yaml
key: Enter
```

**Example:** Example

```yaml
key: Escape
```

### Registra Azioni

`browser.record`

Registra azioni utente come workflow

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Recording action to perform |
| `output_format` | string | No | `yaml` | Format for recorded workflow |
| `output_path` | string | No | - | Path where the output file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Formato per workflow registrato (yaml o json) |
| `recording` | array | Formato per workflow registrato (yaml o json) |
| `workflow` | string | Stato operazione (successo/errore) |

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

### Rilascia Browser

`browser.release`

Rilascia la sessione del browser (chiudi solo se posseduta)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `force` | boolean | No | `False` | Chiudi il browser anche se non posseduto da questo modello |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Chiudi il browser anche se non posseduto da questo modello |
| `message` | string | Quale azione è stata intrapresa |
| `was_owner` | boolean | Quale azione è stata intrapresa |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
force: true
```

### Cattura Screenshot

`browser.screenshot`

Cattura screenshot della pagina corrente

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
| `status` | string | Stato operazione (successo/errore) |
| `filepath` | string | Cattura screenshot della pagina corrente |

**Example:** Example

```yaml
path: output/page.png
```

### Scorri Pagina

`browser.scroll`

Scorri pagina a elemento, posizione o direzione

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
| `status` | string | Stato operazione (successo/errore) |
| `scrolled_to` | object | Stato operazione (successo/errore) |

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

### Seleziona Opzione

`browser.select`

Seleziona opzione da elemento dropdown

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
| `status` | string | Stato operazione (successo/errore) |
| `selected` | array | Stato operazione (successo/errore) |
| `selector` | string | Stato operazione (successo/errore) |

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

### Istantanea DOM

`browser.snapshot`

Cattura un'istantanea DOM della pagina corrente

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`html`, `mhtml`, `text`) | No | `html` | Formato di output (html o testo) |
| `selector` | string | No | - | Selettore CSS per istantanea di un elemento specifico |
| `path` | string | No | - | Percorso per salvare l'istantanea |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato dell'operazione (successo/errore) |
| `format` | string | Formato dell'istantanea |
| `content` | string | Contenuto dell'istantanea |
| `path` | string | Percorso dove l'istantanea è stata salvata |
| `size_bytes` | number | Dimensione dell'istantanea in byte |

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

### Storage Browser

`browser.storage`

Accedi localStorage e sessionStorage

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
| `status` | string | Stato operazione (successo/errore) |
| `value` | any | Stato operazione (successo/errore) |
| `keys` | array | Stato operazione (successo/errore) |
| `length` | number | Il valore restituito |

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

### Gestisci Schede

`browser.tab`

Crea, cambia e chiudi schede browser

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Tab action to perform |
| `url` | string | No | - | URL to navigate to |
| `index` | number | No | - | Tab index to switch to or close (0-based) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Indice scheda da cambiare o chiudere (base 0) |
| `tab_count` | number | Indice scheda da cambiare o chiudere (base 0) |
| `current_index` | number | Stato operazione (successo/errore) |
| `tabs` | array | Il conteggio schede |

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

### Traccia Browser

`browser.trace`

Avvia, ferma o salva tracce di prestazione del browser

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Azione di tracciatura (avvia, ferma, salva) |
| `categories` | array | No | `['devtools.timeline']` | Categorie di tracciatura da catturare |
| `screenshots` | boolean | No | `True` | Includi screenshot nella traccia |
| `path` | string | No | - | Percorso per salvare il file di traccia |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato dell'operazione (successo/errore) |
| `tracing` | boolean | Se la tracciatura è attualmente attiva |
| `path` | string | Percorso dove la traccia è stata salvata |
| `size_bytes` | number | Dimensione del file di traccia in byte |

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

### Digita Testo

`browser.type`

Digita testo in campo input

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
| `status` | string | Stato operazione (successo/errore) |
| `selector` | string | Digita testo in campo input |
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

### Carica File

`browser.upload`

Carica file su elemento input file

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `file_path` | string | Yes | - | Local path to the file to upload |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato operazione (successo/errore) |
| `filename` | string | Stato operazione (successo/errore) |
| `size` | number | Stato operazione (successo/errore) |
| `selector` | string | Nome del file |

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

### Imposta Viewport

`browser.viewport`

Ottieni o imposta la dimensione del viewport del browser

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `width` | number | Yes | `1280` | Larghezza del viewport in pixel |
| `height` | number | Yes | `720` | Altezza del viewport in pixel |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato dell'operazione (successo/errore) |
| `viewport` | object | Dimensioni attuali del viewport |
| `previous_viewport` | object | Dimensioni del viewport precedente |

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

### Attendi

`browser.wait`

Attendi una durata o finche un elemento appare

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Duration of the operation in milliseconds |
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `state` | select (`visible`, `hidden`, `attached`, `detached`) | No | `visible` | Stato da attendere (visibile, nascosto, allegato, staccato) |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Stato operazione (successo/errore) |
| `selector` | string | Stato operazione (successo/errore) |
| `duration_ms` | number | Attendi durata o apparizione elemento |

**Example:** Example

```yaml
duration_ms: 2000
```

**Example:** Example

```yaml
selector: #loading-complete
timeout_ms: 5000
```
