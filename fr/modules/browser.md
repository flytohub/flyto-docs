# Browser Automation

Full web automation: navigation, interaction, data extraction, screenshots, and performance monitoring.

**39 modules**

| Module | Description |
|--------|-------------|
| [Cliquer sur l'element](#cliquer-sur-l'element) | Cliquer sur un element de la page |
| [Fermer le navigateur](#fermer-le-navigateur) | Fermer l'instance du navigateur et liberer les ressources |
| [Capturer la console](#capturer-la-console) | Capturer les journaux de la console du navigateur (erreurs, avertissements, infos) |
| [Gerer les cookies](#gerer-les-cookies) | Obtenir, definir ou effacer les cookies du navigateur |
| [Smart Detect](#smart-detect) | Smart element detection with multi-strategy matching. Finds elements using text, selector, role, proximity, and fuzzy matching with automatic fallbacks. |
| [Gerer le dialogue](#gerer-le-dialogue) | Gerer les dialogues alert, confirm et prompt |
| [Telecharger le fichier](#telecharger-le-fichier) | Telecharger un fichier depuis le navigateur |
| [Glisser-deposer](#glisser-deposer) | Glisser-deposer des elements |
| [Émuler un appareil](#émuler-un-appareil) | Émuler un appareil ou définir une fenêtre personnalisée |
| [Assurer le navigateur](#assurer-le-navigateur) | Assurez-vous qu'une session de navigateur existe (réutiliser ou lancer) |
| [Executer JavaScript](#executer-javascript) | Executer du code JavaScript dans le contexte de la page |
| [Extraire les donnees](#extraire-les-donnees) | Extraire des donnees structurees de la page |
| [Trouver des elements](#trouver-des-elements) | Trouver des elements dans la page et retourner la liste des ID |
| [Remplir le formulaire](#remplir-le-formulaire) | Remplissage intelligent de formulaires avec détection automatique des champs |
| [Changer de frame](#changer-de-frame) | Basculer vers le contexte iframe ou frame |
| [Simuler la geolocalisation](#simuler-la-geolocalisation) | Simuler la geolocalisation du navigateur |
| [Aller a l'URL](#aller-a-l'url) | Naviguer vers une URL specifique |
| [Survoler l'element](#survoler-l'element) | Survoler un element avec la souris |
| [Lancer le navigateur](#lancer-le-navigateur) | Lancer une nouvelle instance de navigateur avec Playwright |
| [Naviguer dans l'historique](#naviguer-dans-l'historique) | Naviguer dans l'historique du navigateur (retour, avant, recharger) |
| [Moniteur reseau](#moniteur-reseau) | Surveiller et intercepter les requetes reseau |
| [Lister les Pages](#lister-les-pages) | Lister toutes les pages/onglets ouverts du navigateur |
| [Paginer & Extraire](#paginer--extraire) | Pagination automatique à travers les pages et extraction de données |
| [Generer un PDF](#generer-un-pdf) | Generer un PDF de la page actuelle |
| [Métriques de Performance](#métriques-de-performance) | Collecter les métriques de performance du navigateur |
| [Appuyer sur une touche](#appuyer-sur-une-touche) | Appuyer sur une touche du clavier |
| [Enregistrer les actions](#enregistrer-les-actions) | Enregistrer les actions utilisateur comme workflow |
| [Libérer le navigateur](#libérer-le-navigateur) | Libérer la session du navigateur (fermer uniquement si possédé) |
| [Prendre une capture d'ecran](#prendre-une-capture-d'ecran) | Prendre une capture d'ecran de la page actuelle |
| [Faire defiler la page](#faire-defiler-la-page) | Faire defiler la page vers un element, une position ou une direction |
| [Selectionner une option](#selectionner-une-option) | Selectionner une option dans un element deroulant |
| [Instantané DOM](#instantané-dom) | Capturer un instantané DOM de la page actuelle |
| [Stockage du navigateur](#stockage-du-navigateur) | Acceder au localStorage et sessionStorage |
| [Gerer les onglets](#gerer-les-onglets) | Creer, basculer et fermer des onglets du navigateur |
| [Trace du Navigateur](#trace-du-navigateur) | Démarrer, arrêter ou enregistrer les traces de performance du navigateur |
| [Saisir du texte](#saisir-du-texte) | Saisir du texte dans un champ de saisie |
| [Telecharger un fichier](#telecharger-un-fichier) | Telecharger un fichier vers un element d'entree de fichier |
| [Définir la fenêtre](#définir-la-fenêtre) | Obtenez ou définissez la taille de la fenêtre du navigateur |
| [Attendre](#attendre) | Attendre une duree ou jusqu'a ce qu'un element apparaisse |

## Modules

### Cliquer sur l'element

`browser.click`

Cliquer sur un element de la page

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
| `status` | string | Statut de l'operation (succes/erreur) |
| `selector` | string | Statut de l'operation (succes/erreur) |
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

### Fermer le navigateur

`browser.close`

Fermer l'instance du navigateur et liberer les ressources

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `_no_params` | boolean | No | `True` | This module requires no parameters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Fermer l'instance du navigateur |
| `message` | string | Fermer l'instance du navigateur |

**Example:** Example

```yaml
```

### Capturer la console

`browser.console`

Capturer les journaux de la console du navigateur (erreurs, avertissements, infos)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `level` | select (`all`, `error`, `warning`, `info`, `log`) | No | `all` | Filter console messages by level |
| `timeout` | number | No | `5000` | Maximum time to wait in milliseconds |
| `clear_existing` | boolean | No | `False` | Clear existing messages before capturing |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'operation (succes/erreur) |
| `messages` | array | Statut de l'operation (succes/erreur) |
| `count` | number | Statut de l'operation (succes/erreur) |

**Example:** Example

```yaml
timeout: 3000
```

**Example:** Example

```yaml
level: error
timeout: 5000
```

### Gerer les cookies

`browser.cookies`

Obtenir, definir ou effacer les cookies du navigateur

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
| `status` | string | Statut de l'operation (succes/erreur) |
| `cookies` | array | Statut de l'operation (succes/erreur) |
| `count` | number | Statut de l'operation (succes/erreur) |

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

### Gerer le dialogue

`browser.dialog`

Gerer les dialogues alert, confirm et prompt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`accept`, `dismiss`, `listen`) | Yes | - | How to respond to the dialog |
| `prompt_text` | string | No | - | Text to enter in prompt dialog (for accept action) |
| `timeout` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'operation (succes/erreur) |
| `message` | string | Statut de l'operation (succes/erreur) |
| `type` | string | Statut de l'operation (succes/erreur) |
| `default_value` | string | Message de resultat decrivant l'issue |

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

### Telecharger le fichier

`browser.download`

Telecharger un fichier depuis le navigateur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `save_path` | string | Yes | - | Path where to save the downloaded file |
| `timeout_ms` | number | No | `60000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'operation (succes/erreur) |
| `path` | string | Statut de l'operation (succes/erreur) |
| `filename` | string | Statut de l'operation (succes/erreur) |
| `size` | number | Chemin du fichier ou de la ressource |

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

### Glisser-deposer

`browser.drag`

Glisser-deposer des elements

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
| `status` | string | Position dans l'element cible {x, y} en pourcentages |
| `source` | string | Position dans l'element cible {x, y} en pourcentages |
| `target` | string | Statut de l'operation (succes/erreur) |

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

### Émuler un appareil

`browser.emulate`

Émuler un appareil ou définir une fenêtre personnalisée

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `device` | select (`iphone_12`, `iphone_14`, `iphone_14_pro_max`, `iphone_se`, `pixel_7`, `pixel_5`, `galaxy_s21`, `galaxy_s23`, `ipad_pro`, `ipad_mini`, `galaxy_tab_s8`, `desktop_chrome`, `desktop_firefox`, `desktop_safari`, `desktop_edge`, `laptop`, `macbook_pro`, `custom`) | Yes | - | Nom de l'appareil à émuler (par ex. iPhone 13) |
| `width` | number | No | - | Largeur de la fenêtre en pixels |
| `height` | number | No | - | Hauteur de la fenêtre en pixels |
| `user_agent` | string | No | - | Chaîne d'agent utilisateur personnalisée |
| `is_mobile` | boolean | No | - | Si l'on doit émuler un appareil mobile |
| `has_touch` | boolean | No | - | Si l'appareil a un support tactile |
| `device_scale_factor` | number | No | - | Ratio de pixels de l'appareil |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'opération (succès/erreur) |
| `device` | string | Nom de l'appareil émulé |
| `viewport` | object | Dimensions actuelles de la fenêtre |
| `is_mobile` | boolean | Si l'émulation mobile est active |

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

### Assurer le navigateur

`browser.ensure`

Assurez-vous qu'une session de navigateur existe (réutiliser ou lancer)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Si le navigateur a été lancé ou réutilisé |
| `message` | string | Si le navigateur a été lancé ou réutilisé |
| `is_owner` | boolean | Si le navigateur a été lancé ou réutilisé |

**Example:** Example

```yaml
headless: false
```

**Example:** Example

```yaml
headless: true
```

### Executer JavaScript

`browser.evaluate`

Executer du code JavaScript dans le contexte de la page

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `script` | string | Yes | - | JavaScript code to execute (can use return statement) |
| `args` | array | No | - | Arguments to pass to the script function |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'operation (succes/erreur) |
| `result` | any | Statut de l'operation (succes/erreur) |

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

### Extraire les donnees

`browser.extract`

Extraire des donnees structurees de la page

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |
| `fields` | object | No | - | Define fields to extract from each item |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'operation (succes/erreur) |
| `data` | array | Statut de l'operation (succes/erreur) |
| `count` | number | Statut de l'operation (succes/erreur) |

**Example:** Example

```yaml
selector: .g
limit: 10
fields: {"title": {"selector": "h3", "type": "text"}, "url": {"selector": "a", "type": "attribute", "attribute": "href"}}
```

### Trouver des elements

`browser.find`

Trouver des elements dans la page et retourner la liste des ID

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'operation (succes/erreur) |
| `count` | number | Statut de l'operation (succes/erreur) |
| `element_ids` | array | Statut de l'operation (succes/erreur) |

**Example:** Find search results

```yaml
selector: div.tF2Cxc
limit: 10
```

### Remplir le formulaire

`browser.form`

Remplissage intelligent de formulaires avec détection automatique des champs

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
| `filled_fields` | array | Délai entre le remplissage de chaque champ (pour un comportement plus humain) |
| `failed_fields` | array | Liste des champs remplis |
| `submitted` | boolean | Liste des champs remplis |

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

### Changer de frame

`browser.frame`

Basculer vers le contexte iframe ou frame

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
| `status` | string | Action sur la frame (enter pour basculer, list pour lister) |
| `frame_url` | string | Action sur la frame (enter pour basculer, list pour lister) |
| `frame_name` | string | Statut de l'operation (succes/erreur) |
| `frames` | array | URL de la frame |

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

### Simuler la geolocalisation

`browser.geolocation`

Simuler la geolocalisation du navigateur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `latitude` | number | Yes | - | Latitude coordinate (-90 to 90) |
| `longitude` | number | Yes | - | Longitude coordinate (-180 to 180) |
| `accuracy` | number | No | `100` | Position accuracy in meters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Precision de la position en metres |
| `location` | object | Precision de la position en metres |

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

### Aller a l'URL

`browser.goto`

Naviguer vers une URL specifique

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to navigate to |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'operation (succes/erreur) |
| `url` | string | Naviguer vers une URL specifique |

**Example:** Example

```yaml
url: https://www.google.com
wait_until: domcontentloaded
```

### Survoler l'element

`browser.hover`

Survoler un element avec la souris

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |
| `position` | object | No | - | Click position relative to element (0-1 range) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'operation (succes/erreur) |
| `selector` | string | Statut de l'operation (succes/erreur) |

**Example:** Example

```yaml
selector: .menu-item
```

**Example:** Example

```yaml
selector: #dropdown-trigger
timeout_ms: 5000
```

### Lancer le navigateur

`browser.launch`

Lancer une nouvelle instance de navigateur avec Playwright

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |
| `browser_type` | select (`chromium`, `firefox`, `webkit`) | No | `chromium` | Moteur de navigateur à utiliser (chromium, firefox, webkit) |
| `channel` | select (``, `chrome`, `msedge`) | No | - | Use system Chrome instead of bundled Chromium for better anti-detection bypass |
| `proxy` | string | No | - | URL du serveur proxy |
| `user_agent` | string | No | - | Chaîne d'agent utilisateur personnalisée |
| `locale` | string | No | `en-US` | Browser locale (e.g. en-US, zh-TW, ja-JP) |
| `slow_mo` | number | No | `0` | Ralentir les opérations de la durée spécifiée en millisecondes |
| `record_video_dir` | string | No | - | Directory to save recorded videos (enables Playwright video recording) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'operation (succes/erreur) |
| `message` | string | Lancer une nouvelle instance de navigateur |
| `browser_type` | string | Type de navigateur lancé |
| `headless` | boolean | Si le navigateur fonctionne en mode sans tête |
| `viewport` | object | Dimensions actuelles de la fenêtre |

**Example:** Example

```yaml
headless: true
```

**Example:** Example

```yaml
headless: false
```

### Naviguer dans l'historique

`browser.navigation`

Naviguer dans l'historique du navigateur (retour, avant, recharger)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`back`, `forward`, `reload`) | Yes | `reload` | Which navigation action to perform |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'opération (succès/erreur) |
| `action` | string | Action de navigation effectuée |
| `url` | string | URL actuelle après navigation |

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

### Moniteur reseau

`browser.network`

Surveiller et intercepter les requetes reseau

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
| `status` | string | Reponse a retourner pour les requetes interceptees |
| `requests` | array | Reponse a retourner pour les requetes interceptees |
| `blocked_count` | number | Statut de l'operation (succes/erreur) |

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

### Lister les Pages

`browser.pages`

Lister toutes les pages/onglets ouverts du navigateur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `include_details` | boolean | No | `True` | Inclure des informations détaillées pour chaque page |
| `include_content_info` | boolean | No | `False` | Inclure les informations de type de contenu pour chaque page |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'opération (succès/erreur) |
| `pages` | array | Liste des pages ouvertes |
| `count` | number | Nombre de pages ouvertes |
| `current_index` | number | Index de la page active actuelle |

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

### Paginer & Extraire

`browser.pagination`

Pagination automatique à travers les pages et extraction de données

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
| `items` | array | Sélecteur qui apparaît quand il n'y a plus de pages (arrête la pagination) |
| `total_items` | integer | Tous les éléments extraits de toutes les pages |
| `pages_processed` | integer | Tous les éléments extraits de toutes les pages |
| `stopped_reason` | string | Nombre de pages traitées |

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

### Generer un PDF

`browser.pdf`

Generer un PDF de la page actuelle

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
| `status` | string | Echelle du rendu de la page web (0.1-2) |
| `path` | string | Statut de l'operation (succes/erreur) |
| `size` | number | Statut de l'operation (succes/erreur) |

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

### Métriques de Performance

`browser.performance`

Collecter les métriques de performance du navigateur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | array | No | `['all']` | Métriques de performance à collecter |
| `timeout_ms` | number | No | `3000` | Délai d'attente en millisecondes |
| `setup_observers` | boolean | No | `True` | Configurer les observateurs de performance avant de collecter |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'opération (succès/erreur) |
| `metrics` | object | Métriques de performance collectées |

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

### Appuyer sur une touche

`browser.press`

Appuyer sur une touche du clavier

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | The key to press (e.g., Enter, Escape, Tab) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'operation (succes/erreur) |
| `key` | string | Appuyer sur une touche du clavier |

**Example:** Example

```yaml
key: Enter
```

**Example:** Example

```yaml
key: Escape
```

### Enregistrer les actions

`browser.record`

Enregistrer les actions utilisateur comme workflow

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Recording action to perform |
| `output_format` | string | No | `yaml` | Format for recorded workflow |
| `output_path` | string | No | - | Path where the output file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Format du workflow enregistre (yaml ou json) |
| `recording` | array | Format du workflow enregistre (yaml ou json) |
| `workflow` | string | Statut de l'operation (succes/erreur) |

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

### Libérer le navigateur

`browser.release`

Libérer la session du navigateur (fermer uniquement si possédé)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `force` | boolean | No | `False` | Fermer le navigateur même s'il n'est pas possédé par ce modèle |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Fermer le navigateur même s'il n'est pas possédé par ce modèle |
| `message` | string | Quelle action a été prise |
| `was_owner` | boolean | Quelle action a été prise |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
force: true
```

### Prendre une capture d'ecran

`browser.screenshot`

Prendre une capture d'ecran de la page actuelle

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
| `status` | string | Statut de l'operation (succes/erreur) |
| `filepath` | string | Prendre une capture d'ecran de la page actuelle |

**Example:** Example

```yaml
path: output/page.png
```

### Faire defiler la page

`browser.scroll`

Faire defiler la page vers un element, une position ou une direction

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
| `status` | string | Statut de l'operation (succes/erreur) |
| `scrolled_to` | object | Statut de l'operation (succes/erreur) |

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

### Selectionner une option

`browser.select`

Selectionner une option dans un element deroulant

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
| `status` | string | Statut de l'operation (succes/erreur) |
| `selected` | array | Statut de l'operation (succes/erreur) |
| `selector` | string | Statut de l'operation (succes/erreur) |

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

### Instantané DOM

`browser.snapshot`

Capturer un instantané DOM de la page actuelle

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`html`, `mhtml`, `text`) | No | `html` | Format de sortie (html ou texte) |
| `selector` | string | No | - | Sélecteur CSS pour capturer un élément spécifique |
| `path` | string | No | - | Chemin pour enregistrer l'instantané |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'opération (succès/erreur) |
| `format` | string | Format de l'instantané |
| `content` | string | Contenu de l'instantané |
| `path` | string | Chemin où l'instantané a été enregistré |
| `size_bytes` | number | Taille de l'instantané en octets |

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

### Stockage du navigateur

`browser.storage`

Acceder au localStorage et sessionStorage

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
| `status` | string | Statut de l'operation (succes/erreur) |
| `value` | any | Statut de l'operation (succes/erreur) |
| `keys` | array | Statut de l'operation (succes/erreur) |
| `length` | number | La valeur retournee |

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

### Gerer les onglets

`browser.tab`

Creer, basculer et fermer des onglets du navigateur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Tab action to perform |
| `url` | string | No | - | URL to navigate to |
| `index` | number | No | - | Tab index to switch to or close (0-based) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Index de l'onglet a basculer ou fermer (base 0) |
| `tab_count` | number | Index de l'onglet a basculer ou fermer (base 0) |
| `current_index` | number | Statut de l'operation (succes/erreur) |
| `tabs` | array | Le nombre d'onglets |

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

### Trace du Navigateur

`browser.trace`

Démarrer, arrêter ou enregistrer les traces de performance du navigateur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Action de traçage (démarrer, arrêter, enregistrer) |
| `categories` | array | No | `['devtools.timeline']` | Catégories de traçage à capturer |
| `screenshots` | boolean | No | `True` | Inclure des captures d'écran dans la trace |
| `path` | string | No | - | Chemin pour enregistrer le fichier de trace |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'opération (succès/erreur) |
| `tracing` | boolean | Si la traçage est actuellement active |
| `path` | string | Chemin où la trace a été enregistrée |
| `size_bytes` | number | Taille du fichier de trace en octets |

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

### Saisir du texte

`browser.type`

Saisir du texte dans un champ de saisie

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
| `status` | string | Statut de l'operation (succes/erreur) |
| `selector` | string | Saisir du texte dans un champ de saisie |
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

### Telecharger un fichier

`browser.upload`

Telecharger un fichier vers un element d'entree de fichier

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `file_path` | string | Yes | - | Local path to the file to upload |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'operation (succes/erreur) |
| `filename` | string | Statut de l'operation (succes/erreur) |
| `size` | number | Statut de l'operation (succes/erreur) |
| `selector` | string | Nom du fichier |

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

### Définir la fenêtre

`browser.viewport`

Obtenez ou définissez la taille de la fenêtre du navigateur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `width` | number | Yes | `1280` | Largeur de la fenêtre en pixels |
| `height` | number | Yes | `720` | Hauteur de la fenêtre en pixels |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'opération (succès/erreur) |
| `viewport` | object | Dimensions actuelles de la fenêtre |
| `previous_viewport` | object | Dimensions précédentes de la fenêtre |

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

### Attendre

`browser.wait`

Attendre une duree ou jusqu'a ce qu'un element apparaisse

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Duration of the operation in milliseconds |
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `state` | select (`visible`, `hidden`, `attached`, `detached`) | No | `visible` | État à attendre (visible, caché, attaché, détaché) |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Statut de l'operation (succes/erreur) |
| `selector` | string | Statut de l'operation (succes/erreur) |
| `duration_ms` | number | Attendre une duree ou l'apparition d'un element |

**Example:** Example

```yaml
duration_ms: 2000
```

**Example:** Example

```yaml
selector: #loading-complete
timeout_ms: 5000
```
