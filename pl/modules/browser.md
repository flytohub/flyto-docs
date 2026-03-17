# Browser Automation

Full web automation: navigation, interaction, data extraction, screenshots, and performance monitoring.

**40 modules**

| Module | Description |
|--------|-------------|
| [Kliknij element](#kliknij-element) | Kliknij element na stronie |
| [Zamknij przegladarke](#zamknij-przegladarke) | Zamknij instancje przegladarki i zwolnij zasoby |
| [Przechwytuj konsole](#przechwytuj-konsole) | Przechwytuj logi konsoli przegladarki (bledy, ostrzezenia, informacje) |
| [Zarzadzaj ciasteczkami](#zarzadzaj-ciasteczkami) | Pobierz, ustaw lub wyczysc ciasteczka przegladarki |
| [Smart Detect](#smart-detect) | Smart element detection with multi-strategy matching. Finds elements using text, selector, role, proximity, and fuzzy matching with automatic fallbacks. |
| [Obsluz okno dialogowe](#obsluz-okno-dialogowe) | Obsluguj okna dialogowe alert, confirm i prompt |
| [Pobierz plik](#pobierz-plik) | Pobierz plik z przegladarki |
| [Przeciagnij i upusc](#przeciagnij-i-upusc) | Przeciagnij i upusc elementy |
| [Symuluj Urządzenie](#symuluj-urządzenie) | Symuluj urządzenie lub ustaw niestandardowy widok |
| [Upewnij się, że przeglądarka](#upewnij-się,-że-przeglądarka) | Upewnij się, że istnieje sesja przeglądarki (ponowne użycie lub uruchomienie) |
| [Wykonaj JavaScript](#wykonaj-javascript) | Wykonaj kod JavaScript w kontekscie strony |
| [Wyodrebnij dane](#wyodrebnij-dane) | Wyodrebnij ustrukturyzowane dane ze strony |
| [Znajdz elementy](#znajdz-elementy) | Znajdz elementy na stronie i zwroc liste ID elementow |
| [Wypełnij formularz](#wypełnij-formularz) | Inteligentne wypełnianie formularzy z automatycznym wykrywaniem pól |
| [Przelacz ramke](#przelacz-ramke) | Przelacz na kontekst iframe lub frame |
| [Symuluj geolokalizacje](#symuluj-geolokalizacje) | Symuluj geolokalizacje przegladarki |
| [Przejdz do URL](#przejdz-do-url) | Przejdz do okreslonego URL |
| [Najedz na element](#najedz-na-element) | Najedz myszka na element |
| [Browser Interact](#browser-interact) | Pause for user to interact with the browser page. Shows page elements in a dialog for the user to choose an action. |
| [Uruchom przegladarke](#uruchom-przegladarke) | Uruchom nowa instancje przegladarki z Playwright |
| [Nawigacja w Historii](#nawigacja-w-historii) | Nawiguj w historii przeglądarki (wstecz, do przodu, odśwież) |
| [Monitor sieci](#monitor-sieci) | Monitoruj i przechwytuj zadania sieciowe |
| [Lista Stron](#lista-stron) | Wyświetl wszystkie otwarte strony/karty przeglądarki |
| [Paginuj i wyodrębnij](#paginuj-i-wyodrębnij) | Automatyczne paginowanie przez strony i wyodrębnianie danych |
| [Wygeneruj PDF](#wygeneruj-pdf) | Wygeneruj PDF z biezacej strony |
| [Metryki Wydajności](#metryki-wydajności) | Zbieraj metryki wydajności przeglądarki |
| [Nacisnij klawisz](#nacisnij-klawisz) | Nacisnij klawisz klawiatury |
| [Nagrywaj akcje](#nagrywaj-akcje) | Nagrywaj akcje uzytkownika jako przeplyw |
| [Zwolnij przeglądarkę](#zwolnij-przeglądarkę) | Zwolnij sesję przeglądarki (zamknij tylko, jeśli posiadasz) |
| [Zrob zrzut ekranu](#zrob-zrzut-ekranu) | Zrob zrzut ekranu biezacej strony |
| [Przewin strone](#przewin-strone) | Przewin strone do elementu, pozycji lub kierunku |
| [Wybierz opcje](#wybierz-opcje) | Wybierz opcje z elementu rozwijanego |
| [Zrzut DOM](#zrzut-dom) | Zrób zrzut DOM bieżącej strony |
| [Magazyn przegladarki](#magazyn-przegladarki) | Dostep do localStorage i sessionStorage |
| [Zarzadzaj kartami](#zarzadzaj-kartami) | Tworzenie, przelaczanie i zamykanie kart przegladarki |
| [Ślad Przeglądarki](#ślad-przeglądarki) | Rozpocznij, zatrzymaj lub zapisz ślady wydajności przeglądarki |
| [Wpisz tekst](#wpisz-tekst) | Wpisz tekst w pole wejsciowe |
| [Przeslij plik](#przeslij-plik) | Przeslij plik do elementu wejscia pliku |
| [Ustaw widok](#ustaw-widok) | Pobierz lub ustaw rozmiar widoku przeglądarki |
| [Czekaj](#czekaj) | Czekaj przez okreslony czas lub az pojawi sie element |

## Modules

### Kliknij element

`browser.click`

Kliknij element na stronie

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
| `status` | string | Status operacji (sukces/blad) |
| `selector` | string | Status operacji (sukces/blad) |
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

### Zamknij przegladarke

`browser.close`

Zamknij instancje przegladarki i zwolnij zasoby

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `_no_params` | boolean | No | `True` | This module requires no parameters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Zamknij instancje przegladarki |
| `message` | string | Zamknij instancje przegladarki |

**Example:** Example

```yaml
```

### Przechwytuj konsole

`browser.console`

Przechwytuj logi konsoli przegladarki (bledy, ostrzezenia, informacje)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `level` | select (`all`, `error`, `warning`, `info`, `log`) | No | `all` | Filter console messages by level |
| `timeout` | number | No | `5000` | Maximum time to wait in milliseconds |
| `clear_existing` | boolean | No | `False` | Clear existing messages before capturing |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji (sukces/blad) |
| `messages` | array | Status operacji (sukces/blad) |
| `count` | number | Status operacji (sukces/blad) |

**Example:** Example

```yaml
timeout: 3000
```

**Example:** Example

```yaml
level: error
timeout: 5000
```

### Zarzadzaj ciasteczkami

`browser.cookies`

Pobierz, ustaw lub wyczysc ciasteczka przegladarki

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
| `status` | string | Status operacji (sukces/blad) |
| `cookies` | array | Status operacji (sukces/blad) |
| `count` | number | Status operacji (sukces/blad) |

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

### Obsluz okno dialogowe

`browser.dialog`

Obsluguj okna dialogowe alert, confirm i prompt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`accept`, `dismiss`, `listen`) | Yes | - | How to respond to the dialog |
| `prompt_text` | string | No | - | Text to enter in prompt dialog (for accept action) |
| `timeout` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji (sukces/blad) |
| `message` | string | Status operacji (sukces/blad) |
| `type` | string | Status operacji (sukces/blad) |
| `default_value` | string | Wiadomosc wyniku opisujaca rezultat |

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

### Pobierz plik

`browser.download`

Pobierz plik z przegladarki

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `save_path` | string | Yes | - | Path where to save the downloaded file |
| `timeout_ms` | number | No | `60000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji (sukces/blad) |
| `path` | string | Status operacji (sukces/blad) |
| `filename` | string | Status operacji (sukces/blad) |
| `size` | number | Sciezka do pliku lub zasobu |

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

### Przeciagnij i upusc

`browser.drag`

Przeciagnij i upusc elementy

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
| `status` | string | Pozycja w elemencie docelowym {x, y} jako procenty |
| `source` | string | Pozycja w elemencie docelowym {x, y} jako procenty |
| `target` | string | Status operacji (sukces/blad) |

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

### Symuluj Urządzenie

`browser.emulate`

Symuluj urządzenie lub ustaw niestandardowy widok

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `device` | select (`iphone_12`, `iphone_14`, `iphone_14_pro_max`, `iphone_se`, `pixel_7`, `pixel_5`, `galaxy_s21`, `galaxy_s23`, `ipad_pro`, `ipad_mini`, `galaxy_tab_s8`, `desktop_chrome`, `desktop_firefox`, `desktop_safari`, `desktop_edge`, `laptop`, `macbook_pro`, `custom`) | Yes | - | Nazwa urządzenia do symulacji (np. iPhone 13) |
| `width` | number | No | - | Szerokość widoku w pikselach |
| `height` | number | No | - | Wysokość widoku w pikselach |
| `user_agent` | string | No | - | Niestandardowy ciąg agenta użytkownika |
| `is_mobile` | boolean | No | - | Czy symulować urządzenie mobilne |
| `has_touch` | boolean | No | - | Czy urządzenie obsługuje dotyk |
| `device_scale_factor` | number | No | - | Współczynnik skali pikseli urządzenia |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji (sukces/błąd) |
| `device` | string | Nazwa urządzenia, które było symulowane |
| `viewport` | object | Aktualne wymiary widoku |
| `is_mobile` | boolean | Czy symulacja mobilna jest aktywna |

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

### Upewnij się, że przeglądarka

`browser.ensure`

Upewnij się, że istnieje sesja przeglądarki (ponowne użycie lub uruchomienie)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Czy przeglądarka została uruchomiona lub ponownie użyta |
| `message` | string | Czy przeglądarka została uruchomiona lub ponownie użyta |
| `is_owner` | boolean | Czy przeglądarka została uruchomiona lub ponownie użyta |

**Example:** Example

```yaml
headless: false
```

**Example:** Example

```yaml
headless: true
```

### Wykonaj JavaScript

`browser.evaluate`

Wykonaj kod JavaScript w kontekscie strony

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `script` | string | Yes | - | JavaScript code to execute (can use return statement) |
| `args` | array | No | - | Arguments to pass to the script function |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji (sukces/blad) |
| `result` | any | Status operacji (sukces/blad) |

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

### Wyodrebnij dane

`browser.extract`

Wyodrebnij ustrukturyzowane dane ze strony

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |
| `fields` | object | No | - | Define fields to extract from each item |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji (sukces/blad) |
| `data` | array | Status operacji (sukces/blad) |
| `count` | number | Status operacji (sukces/blad) |

**Example:** Example

```yaml
selector: .g
limit: 10
fields: {"title": {"selector": "h3", "type": "text"}, "url": {"selector": "a", "type": "attribute", "attribute": "href"}}
```

### Znajdz elementy

`browser.find`

Znajdz elementy na stronie i zwroc liste ID elementow

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji (sukces/blad) |
| `count` | number | Status operacji (sukces/blad) |
| `element_ids` | array | Status operacji (sukces/blad) |

**Example:** Find search results

```yaml
selector: div.tF2Cxc
limit: 10
```

### Wypełnij formularz

`browser.form`

Inteligentne wypełnianie formularzy z automatycznym wykrywaniem pól

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
| `filled_fields` | array | Opóźnienie między wypełnianiem każdego pola (dla bardziej ludzkiego zachowania) |
| `failed_fields` | array | Lista pól, które zostały wypełnione |
| `submitted` | boolean | Lista pól, które zostały wypełnione |

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

### Przelacz ramke

`browser.frame`

Przelacz na kontekst iframe lub frame

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
| `status` | string | Akcja ramki (enter aby przelaeczyc na ramke, list aby wylistowac wszystkie ramki) |
| `frame_url` | string | Akcja ramki (enter aby przelaeczyc na ramke, list aby wylistowac wszystkie ramki) |
| `frame_name` | string | Status operacji (sukces/blad) |
| `frames` | array | URL ramki |

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

### Symuluj geolokalizacje

`browser.geolocation`

Symuluj geolokalizacje przegladarki

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `latitude` | number | Yes | - | Latitude coordinate (-90 to 90) |
| `longitude` | number | Yes | - | Longitude coordinate (-180 to 180) |
| `accuracy` | number | No | `100` | Position accuracy in meters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Dokladnosc pozycji w metrach |
| `location` | object | Dokladnosc pozycji w metrach |

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

### Przejdz do URL

`browser.goto`

Przejdz do okreslonego URL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to navigate to |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji (sukces/blad) |
| `url` | string | Przejdz do okreslonego URL |

**Example:** Example

```yaml
url: https://www.google.com
wait_until: domcontentloaded
```

### Najedz na element

`browser.hover`

Najedz myszka na element

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |
| `position` | object | No | - | Click position relative to element (0-1 range) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji (sukces/blad) |
| `selector` | string | Status operacji (sukces/blad) |

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
| `__event__` | string | Event for routing (approved/rejected/timeout) |
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

### Uruchom przegladarke

`browser.launch`

Uruchom nowa instancje przegladarki z Playwright

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |
| `browser_type` | select (`chromium`, `firefox`, `webkit`) | No | `chromium` | Silnik przeglądarki do użycia (chromium, firefox, webkit) |
| `channel` | select (``, `chrome`, `msedge`) | No | - | Use system Chrome instead of bundled Chromium for better anti-detection bypass |
| `proxy` | string | No | - | URL serwera proxy |
| `user_agent` | string | No | - | Niestandardowy ciąg agenta użytkownika |
| `locale` | string | No | `en-US` | Browser locale (e.g. en-US, zh-TW, ja-JP) |
| `slow_mo` | number | No | `0` | Spowolnij operacje o określoną liczbę milisekund |
| `record_video_dir` | string | No | - | Directory to save recorded videos (enables Playwright video recording) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji (sukces/blad) |
| `message` | string | Uruchom nowa instancje przegladarki |
| `browser_type` | string | Typ uruchomionej przeglądarki |
| `headless` | boolean | Czy przeglądarka działa w trybie bezgłowym |
| `viewport` | object | Aktualne wymiary widoku |

**Example:** Example

```yaml
headless: true
```

**Example:** Example

```yaml
headless: false
```

### Nawigacja w Historii

`browser.navigation`

Nawiguj w historii przeglądarki (wstecz, do przodu, odśwież)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`back`, `forward`, `reload`) | Yes | `reload` | Which navigation action to perform |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji (sukces/błąd) |
| `action` | string | Wykonana akcja nawigacji |
| `url` | string | Aktualny URL po nawigacji |

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

### Monitor sieci

`browser.network`

Monitoruj i przechwytuj zadania sieciowe

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
| `status` | string | Odpowiedz do zwrocenia dla przechwyconych zadan |
| `requests` | array | Odpowiedz do zwrocenia dla przechwyconych zadan |
| `blocked_count` | number | Status operacji (sukces/blad) |

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

### Lista Stron

`browser.pages`

Wyświetl wszystkie otwarte strony/karty przeglądarki

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `include_details` | boolean | No | `True` | Uwzględnij szczegółowe informacje dla każdej strony |
| `include_content_info` | boolean | No | `False` | Uwzględnij informacje o typie treści dla każdej strony |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji (sukces/błąd) |
| `pages` | array | Lista otwartych stron |
| `count` | number | Liczba otwartych stron |
| `current_index` | number | Indeks aktualnie aktywnej strony |

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

### Paginuj i wyodrębnij

`browser.pagination`

Automatyczne paginowanie przez strony i wyodrębnianie danych

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
| `items` | array | Selektor, który pojawia się, gdy nie ma więcej stron (zatrzymuje paginację) |
| `total_items` | integer | Wszystkie wyodrębnione elementy ze wszystkich stron |
| `pages_processed` | integer | Wszystkie wyodrębnione elementy ze wszystkich stron |
| `stopped_reason` | string | Liczba przetworzonych stron |

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

### Wygeneruj PDF

`browser.pdf`

Wygeneruj PDF z biezacej strony

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
| `status` | string | Skala renderowania strony (0.1-2) |
| `path` | string | Status operacji (sukces/blad) |
| `size` | number | Status operacji (sukces/blad) |

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

### Metryki Wydajności

`browser.performance`

Zbieraj metryki wydajności przeglądarki

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | array | No | `['all']` | Metryki wydajności do zebrania |
| `timeout_ms` | number | No | `3000` | Limit czasu w milisekundach |
| `setup_observers` | boolean | No | `True` | Skonfiguruj obserwatorów wydajności przed zebraniem |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji (sukces/błąd) |
| `metrics` | object | Zebrane metryki wydajności |

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

### Nacisnij klawisz

`browser.press`

Nacisnij klawisz klawiatury

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | The key to press (e.g., Enter, Escape, Tab) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji (sukces/blad) |
| `key` | string | Nacisnij klawisz klawiatury |

**Example:** Example

```yaml
key: Enter
```

**Example:** Example

```yaml
key: Escape
```

### Nagrywaj akcje

`browser.record`

Nagrywaj akcje uzytkownika jako przeplyw

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Recording action to perform |
| `output_format` | string | No | `yaml` | Format for recorded workflow |
| `output_path` | string | No | - | Path where the output file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Format dla nagranego przeplywu (yaml lub json) |
| `recording` | array | Format dla nagranego przeplywu (yaml lub json) |
| `workflow` | string | Status operacji (sukces/blad) |

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

### Zwolnij przeglądarkę

`browser.release`

Zwolnij sesję przeglądarki (zamknij tylko, jeśli posiadasz)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `force` | boolean | No | `False` | Zamknij przeglądarkę, nawet jeśli nie jest posiadana przez ten szablon |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Zamknij przeglądarkę, nawet jeśli nie jest posiadana przez ten szablon |
| `message` | string | Jakie działanie zostało podjęte |
| `was_owner` | boolean | Jakie działanie zostało podjęte |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
force: true
```

### Zrob zrzut ekranu

`browser.screenshot`

Zrob zrzut ekranu biezacej strony

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
| `status` | string | Status operacji (sukces/blad) |
| `filepath` | string | Zrob zrzut ekranu biezacej strony |

**Example:** Example

```yaml
path: output/page.png
```

### Przewin strone

`browser.scroll`

Przewin strone do elementu, pozycji lub kierunku

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
| `status` | string | Status operacji (sukces/blad) |
| `scrolled_to` | object | Status operacji (sukces/blad) |

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

### Wybierz opcje

`browser.select`

Wybierz opcje z elementu rozwijanego

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
| `status` | string | Status operacji (sukces/blad) |
| `selected` | array | Status operacji (sukces/blad) |
| `selector` | string | Status operacji (sukces/blad) |

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

### Zrzut DOM

`browser.snapshot`

Zrób zrzut DOM bieżącej strony

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`html`, `mhtml`, `text`) | No | `html` | Format wyjściowy (html lub tekst) |
| `selector` | string | No | - | Selektor CSS do zrzutu konkretnego elementu |
| `path` | string | No | - | Ścieżka do zapisania zrzutu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji (sukces/błąd) |
| `format` | string | Format zrzutu |
| `content` | string | Zawartość zrzutu |
| `path` | string | Ścieżka, gdzie zapisano zrzut |
| `size_bytes` | number | Rozmiar zrzutu w bajtach |

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

### Magazyn przegladarki

`browser.storage`

Dostep do localStorage i sessionStorage

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
| `status` | string | Status operacji (sukces/blad) |
| `value` | any | Status operacji (sukces/blad) |
| `keys` | array | Status operacji (sukces/blad) |
| `length` | number | Zwrocona wartosc |

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

### Zarzadzaj kartami

`browser.tab`

Tworzenie, przelaczanie i zamykanie kart przegladarki

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Tab action to perform |
| `url` | string | No | - | URL to navigate to |
| `index` | number | No | - | Tab index to switch to or close (0-based) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Indeks karty do przelaczenia lub zamkniecia (od 0) |
| `tab_count` | number | Indeks karty do przelaczenia lub zamkniecia (od 0) |
| `current_index` | number | Status operacji (sukces/blad) |
| `tabs` | array | Liczba kart |

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

### Ślad Przeglądarki

`browser.trace`

Rozpocznij, zatrzymaj lub zapisz ślady wydajności przeglądarki

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Akcja śledzenia (rozpocznij, zatrzymaj, zapisz) |
| `categories` | array | No | `['devtools.timeline']` | Kategorie śledzenia do uchwycenia |
| `screenshots` | boolean | No | `True` | Uwzględnij zrzuty ekranu w śladzie |
| `path` | string | No | - | Ścieżka do zapisania pliku śladu |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji (sukces/błąd) |
| `tracing` | boolean | Czy śledzenie jest obecnie aktywne |
| `path` | string | Ścieżka, gdzie zapisano ślad |
| `size_bytes` | number | Rozmiar pliku śladu w bajtach |

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

### Wpisz tekst

`browser.type`

Wpisz tekst w pole wejsciowe

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
| `status` | string | Status operacji (sukces/blad) |
| `selector` | string | Wpisz tekst w pole wejsciowe |
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

### Przeslij plik

`browser.upload`

Przeslij plik do elementu wejscia pliku

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `file_path` | string | Yes | - | Local path to the file to upload |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji (sukces/blad) |
| `filename` | string | Status operacji (sukces/blad) |
| `size` | number | Status operacji (sukces/blad) |
| `selector` | string | Nazwa pliku |

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

### Ustaw widok

`browser.viewport`

Pobierz lub ustaw rozmiar widoku przeglądarki

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `width` | number | Yes | `1280` | Szerokość widoku w pikselach |
| `height` | number | Yes | `720` | Wysokość widoku w pikselach |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji (sukces/błąd) |
| `viewport` | object | Aktualne wymiary widoku |
| `previous_viewport` | object | Poprzednie wymiary widoku |

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

### Czekaj

`browser.wait`

Czekaj przez okreslony czas lub az pojawi sie element

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Duration of the operation in milliseconds |
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `state` | select (`visible`, `hidden`, `attached`, `detached`) | No | `visible` | Stan do oczekiwania (widoczny, ukryty, dołączony, odłączony) |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status operacji (sukces/blad) |
| `selector` | string | Status operacji (sukces/blad) |
| `duration_ms` | number | Czekaj przez okreslony czas lub az pojawi sie element |

**Example:** Example

```yaml
duration_ms: 2000
```

**Example:** Example

```yaml
selector: #loading-complete
timeout_ms: 5000
```
