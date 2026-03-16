# Browser Automation

Full web automation: navigation, interaction, data extraction, screenshots, and performance monitoring.

**39 modules**

| Module | Description |
|--------|-------------|
| [Hacer clic en elemento](#hacer-clic-en-elemento) | Hacer clic en un elemento de la pagina |
| [Cerrar navegador](#cerrar-navegador) | Cerrar la instancia del navegador y liberar recursos |
| [Capturar consola](#capturar-consola) | Capturar logs de consola del navegador (errores, advertencias, info) |
| [Administrar cookies](#administrar-cookies) | Obtener, establecer o limpiar cookies del navegador |
| [Smart Detect](#smart-detect) | Smart element detection with multi-strategy matching. Finds elements using text, selector, role, proximity, and fuzzy matching with automatic fallbacks. |
| [Manejar dialogo](#manejar-dialogo) | Manejar dialogos de alerta, confirmar y prompt |
| [Descargar archivo](#descargar-archivo) | Descargar archivo desde navegador |
| [Arrastrar y soltar](#arrastrar-y-soltar) | Arrastrar y soltar elementos |
| [Emular Dispositivo](#emular-dispositivo) | Emular un dispositivo o establecer un viewport personalizado |
| [Asegurar Navegador](#asegurar-navegador) | Asegúrate de que exista una sesión de navegador (reutilizar o iniciar) |
| [Ejecutar JavaScript](#ejecutar-javascript) | Ejecutar codigo JavaScript en contexto de pagina |
| [Extraer datos](#extraer-datos) | Extraer datos estructurados de la pagina |
| [Encontrar elementos](#encontrar-elementos) | Encontrar elementos en pagina y devolver lista de IDs de elementos |
| [Rellenar Formulario](#rellenar-formulario) | Relleno inteligente de formularios con detección automática de campos |
| [Cambiar frame](#cambiar-frame) | Cambiar a contexto de iframe o frame |
| [Simular geolocalizacion](#simular-geolocalizacion) | Simular geolocalizacion del navegador |
| [Ir a URL](#ir-a-url) | Navegar a una URL especifica |
| [Hover sobre elemento](#hover-sobre-elemento) | Pasar el mouse sobre un elemento |
| [Lanzar navegador](#lanzar-navegador) | Lanzar una nueva instancia del navegador con Playwright |
| [Navegar Historial](#navegar-historial) | Navegar por el historial del navegador (atrás, adelante, recargar) |
| [Monitor de red](#monitor-de-red) | Monitorear e interceptar solicitudes de red |
| [Listar Páginas](#listar-páginas) | Lista todas las páginas/pestañas abiertas del navegador |
| [Paginar y Extraer](#paginar-y-extraer) | Paginar automáticamente a través de páginas y extraer datos |
| [Generar PDF](#generar-pdf) | Generar PDF de la pagina actual |
| [Métricas de Rendimiento](#métricas-de-rendimiento) | Recopilar métricas de rendimiento del navegador |
| [Presionar tecla](#presionar-tecla) | Presionar una tecla del teclado |
| [Grabar acciones](#grabar-acciones) | Grabar acciones del usuario como flujo de trabajo |
| [Liberar Navegador](#liberar-navegador) | Liberar sesión del navegador (cerrar solo si es propio) |
| [Tomar captura de pantalla](#tomar-captura-de-pantalla) | Tomar una captura de pantalla de la pagina actual |
| [Desplazar pagina](#desplazar-pagina) | Desplazar pagina a elemento, posicion o direccion |
| [Seleccionar opcion](#seleccionar-opcion) | Seleccionar opcion de elemento desplegable |
| [Instantánea del DOM](#instantánea-del-dom) | Capturar instantánea del DOM de la página actual |
| [Almacenamiento del navegador](#almacenamiento-del-navegador) | Acceder a localStorage y sessionStorage |
| [Administrar pestanas](#administrar-pestanas) | Crear, cambiar y cerrar pestanas del navegador |
| [Traza del Navegador](#traza-del-navegador) | Iniciar, detener o guardar trazas de rendimiento del navegador |
| [Escribir texto](#escribir-texto) | Escribir texto en un campo de entrada |
| [Subir archivo](#subir-archivo) | Subir archivo a elemento de entrada de archivo |
| [Establecer Viewport](#establecer-viewport) | Obtener o establecer el tamaño del viewport del navegador |
| [Esperar](#esperar) | Esperar una duracion o hasta que aparezca un elemento |

## Modules

### Hacer clic en elemento

`browser.click`

Hacer clic en un elemento de la pagina

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
| `status` | string | Estado de la operacion (exito/error) |
| `selector` | string | Estado de la operacion (exito/error) |
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

### Cerrar navegador

`browser.close`

Cerrar la instancia del navegador y liberar recursos

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `_no_params` | boolean | No | `True` | This module requires no parameters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Cerrar la instancia del navegador |
| `message` | string | Cerrar la instancia del navegador |

**Example:** Example

```yaml
```

### Capturar consola

`browser.console`

Capturar logs de consola del navegador (errores, advertencias, info)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `level` | select (`all`, `error`, `warning`, `info`, `log`) | No | `all` | Filter console messages by level |
| `timeout` | number | No | `5000` | Maximum time to wait in milliseconds |
| `clear_existing` | boolean | No | `False` | Clear existing messages before capturing |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operacion (exito/error) |
| `messages` | array | Estado de la operacion (exito/error) |
| `count` | number | Estado de la operacion (exito/error) |

**Example:** Example

```yaml
timeout: 3000
```

**Example:** Example

```yaml
level: error
timeout: 5000
```

### Administrar cookies

`browser.cookies`

Obtener, establecer o limpiar cookies del navegador

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
| `status` | string | Estado de la operacion (exito/error) |
| `cookies` | array | Estado de la operacion (exito/error) |
| `count` | number | Estado de la operacion (exito/error) |

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

### Manejar dialogo

`browser.dialog`

Manejar dialogos de alerta, confirmar y prompt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`accept`, `dismiss`, `listen`) | Yes | - | How to respond to the dialog |
| `prompt_text` | string | No | - | Text to enter in prompt dialog (for accept action) |
| `timeout` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operacion (exito/error) |
| `message` | string | Estado de la operacion (exito/error) |
| `type` | string | Estado de la operacion (exito/error) |
| `default_value` | string | Mensaje de resultado describiendo el resultado |

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

### Descargar archivo

`browser.download`

Descargar archivo desde navegador

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `save_path` | string | Yes | - | Path where to save the downloaded file |
| `timeout_ms` | number | No | `60000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operacion (exito/error) |
| `path` | string | Estado de la operacion (exito/error) |
| `filename` | string | Estado de la operacion (exito/error) |
| `size` | number | Ruta de archivo o recurso |

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

### Arrastrar y soltar

`browser.drag`

Arrastrar y soltar elementos

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
| `status` | string | Posicion dentro del elemento destino {x, y} como porcentajes |
| `source` | string | Posicion dentro del elemento destino {x, y} como porcentajes |
| `target` | string | Estado de la operacion (exito/error) |

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

### Emular Dispositivo

`browser.emulate`

Emular un dispositivo o establecer un viewport personalizado

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `device` | select (`iphone_12`, `iphone_14`, `iphone_14_pro_max`, `iphone_se`, `pixel_7`, `pixel_5`, `galaxy_s21`, `galaxy_s23`, `ipad_pro`, `ipad_mini`, `galaxy_tab_s8`, `desktop_chrome`, `desktop_firefox`, `desktop_safari`, `desktop_edge`, `laptop`, `macbook_pro`, `custom`) | Yes | - | Nombre del dispositivo a emular (ej. iPhone 13) |
| `width` | number | No | - | Ancho del viewport en píxeles |
| `height` | number | No | - | Altura del viewport en píxeles |
| `user_agent` | string | No | - | Cadena de agente de usuario personalizada |
| `is_mobile` | boolean | No | - | Si se debe emular un dispositivo móvil |
| `has_touch` | boolean | No | - | Si el dispositivo tiene soporte táctil |
| `device_scale_factor` | number | No | - | Relación de píxeles del dispositivo |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operación (éxito/error) |
| `device` | string | Nombre del dispositivo que fue emulado |
| `viewport` | object | Dimensiones actuales del viewport |
| `is_mobile` | boolean | Si la emulación móvil está activa |

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

### Asegurar Navegador

`browser.ensure`

Asegúrate de que exista una sesión de navegador (reutilizar o iniciar)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Si el navegador fue iniciado o reutilizado |
| `message` | string | Si el navegador fue iniciado o reutilizado |
| `is_owner` | boolean | Si el navegador fue iniciado o reutilizado |

**Example:** Example

```yaml
headless: false
```

**Example:** Example

```yaml
headless: true
```

### Ejecutar JavaScript

`browser.evaluate`

Ejecutar codigo JavaScript en contexto de pagina

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `script` | string | Yes | - | JavaScript code to execute (can use return statement) |
| `args` | array | No | - | Arguments to pass to the script function |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operacion (exito/error) |
| `result` | any | Estado de la operacion (exito/error) |

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

### Extraer datos

`browser.extract`

Extraer datos estructurados de la pagina

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |
| `fields` | object | No | - | Define fields to extract from each item |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operacion (exito/error) |
| `data` | array | Estado de la operacion (exito/error) |
| `count` | number | Estado de la operacion (exito/error) |

**Example:** Example

```yaml
selector: .g
limit: 10
fields: {"title": {"selector": "h3", "type": "text"}, "url": {"selector": "a", "type": "attribute", "attribute": "href"}}
```

### Encontrar elementos

`browser.find`

Encontrar elementos en pagina y devolver lista de IDs de elementos

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operacion (exito/error) |
| `count` | number | Estado de la operacion (exito/error) |
| `element_ids` | array | Estado de la operacion (exito/error) |

**Example:** Find search results

```yaml
selector: div.tF2Cxc
limit: 10
```

### Rellenar Formulario

`browser.form`

Relleno inteligente de formularios con detección automática de campos

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
| `filled_fields` | array | Retraso entre el llenado de cada campo (para un comportamiento más humano) |
| `failed_fields` | array | Lista de campos que fueron rellenados |
| `submitted` | boolean | Lista de campos que fueron rellenados |

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

### Cambiar frame

`browser.frame`

Cambiar a contexto de iframe o frame

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
| `status` | string | Accion de frame (enter para cambiar a frame, list para listar todos los frames) |
| `frame_url` | string | Accion de frame (enter para cambiar a frame, list para listar todos los frames) |
| `frame_name` | string | Estado de la operacion (exito/error) |
| `frames` | array | URL del frame |

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

### Simular geolocalizacion

`browser.geolocation`

Simular geolocalizacion del navegador

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `latitude` | number | Yes | - | Latitude coordinate (-90 to 90) |
| `longitude` | number | Yes | - | Longitude coordinate (-180 to 180) |
| `accuracy` | number | No | `100` | Position accuracy in meters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Precision de posicion en metros |
| `location` | object | Precision de posicion en metros |

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

### Ir a URL

`browser.goto`

Navegar a una URL especifica

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to navigate to |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operacion (exito/error) |
| `url` | string | Navegar a una URL especifica |

**Example:** Example

```yaml
url: https://www.google.com
wait_until: domcontentloaded
```

### Hover sobre elemento

`browser.hover`

Pasar el mouse sobre un elemento

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |
| `position` | object | No | - | Click position relative to element (0-1 range) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operacion (exito/error) |
| `selector` | string | Estado de la operacion (exito/error) |

**Example:** Example

```yaml
selector: .menu-item
```

**Example:** Example

```yaml
selector: #dropdown-trigger
timeout_ms: 5000
```

### Lanzar navegador

`browser.launch`

Lanzar una nueva instancia del navegador con Playwright

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |
| `browser_type` | select (`chromium`, `firefox`, `webkit`) | No | `chromium` | Motor de navegador a usar (chromium, firefox, webkit) |
| `channel` | select (``, `chrome`, `msedge`) | No | - | Use system Chrome instead of bundled Chromium for better anti-detection bypass |
| `proxy` | string | No | - | URL del servidor proxy |
| `user_agent` | string | No | - | Cadena de agente de usuario personalizada |
| `locale` | string | No | `en-US` | Browser locale (e.g. en-US, zh-TW, ja-JP) |
| `slow_mo` | number | No | `0` | Ralentizar operaciones por los milisegundos especificados |
| `record_video_dir` | string | No | - | Directory to save recorded videos (enables Playwright video recording) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operacion (exito/error) |
| `message` | string | Lanzar una nueva instancia del navegador |
| `browser_type` | string | Tipo de navegador lanzado |
| `headless` | boolean | Si el navegador está ejecutándose en modo headless |
| `viewport` | object | Dimensiones actuales del viewport |

**Example:** Example

```yaml
headless: true
```

**Example:** Example

```yaml
headless: false
```

### Navegar Historial

`browser.navigation`

Navegar por el historial del navegador (atrás, adelante, recargar)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`back`, `forward`, `reload`) | Yes | `reload` | Which navigation action to perform |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operación (éxito/error) |
| `action` | string | Acción de navegación realizada |
| `url` | string | URL actual después de la navegación |

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

### Monitor de red

`browser.network`

Monitorear e interceptar solicitudes de red

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
| `status` | string | Respuesta a devolver para solicitudes interceptadas |
| `requests` | array | Respuesta a devolver para solicitudes interceptadas |
| `blocked_count` | number | Estado de la operacion (exito/error) |

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

### Listar Páginas

`browser.pages`

Lista todas las páginas/pestañas abiertas del navegador

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `include_details` | boolean | No | `True` | Incluir información detallada para cada página |
| `include_content_info` | boolean | No | `False` | Incluir información del tipo de contenido para cada página |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operación (éxito/error) |
| `pages` | array | Lista de páginas abiertas |
| `count` | number | Número de páginas abiertas |
| `current_index` | number | Índice de la página activa actual |

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

### Paginar y Extraer

`browser.pagination`

Paginar automáticamente a través de páginas y extraer datos

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
| `items` | array | Selector que aparece cuando no hay más páginas (detiene la paginación) |
| `total_items` | integer | Todos los elementos extraídos de todas las páginas |
| `pages_processed` | integer | Todos los elementos extraídos de todas las páginas |
| `stopped_reason` | string | Número de páginas procesadas |

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

### Generar PDF

`browser.pdf`

Generar PDF de la pagina actual

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
| `status` | string | Escala del renderizado de pagina web (0.1-2) |
| `path` | string | Estado de la operacion (exito/error) |
| `size` | number | Estado de la operacion (exito/error) |

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

### Métricas de Rendimiento

`browser.performance`

Recopilar métricas de rendimiento del navegador

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | array | No | `['all']` | Métricas de rendimiento a recopilar |
| `timeout_ms` | number | No | `3000` | Tiempo de espera en milisegundos |
| `setup_observers` | boolean | No | `True` | Configurar observadores de rendimiento antes de recopilar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operación (éxito/error) |
| `metrics` | object | Métricas de rendimiento recopiladas |

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

### Presionar tecla

`browser.press`

Presionar una tecla del teclado

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | The key to press (e.g., Enter, Escape, Tab) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operacion (exito/error) |
| `key` | string | Presionar una tecla del teclado |

**Example:** Example

```yaml
key: Enter
```

**Example:** Example

```yaml
key: Escape
```

### Grabar acciones

`browser.record`

Grabar acciones del usuario como flujo de trabajo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Recording action to perform |
| `output_format` | string | No | `yaml` | Format for recorded workflow |
| `output_path` | string | No | - | Path where the output file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Formato para flujo de trabajo grabado (yaml o json) |
| `recording` | array | Formato para flujo de trabajo grabado (yaml o json) |
| `workflow` | string | Estado de la operacion (exito/error) |

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

### Liberar Navegador

`browser.release`

Liberar sesión del navegador (cerrar solo si es propio)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `force` | boolean | No | `False` | Cerrar navegador incluso si no es propio de esta plantilla |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Cerrar navegador incluso si no es propio de esta plantilla |
| `message` | string | Qué acción se tomó |
| `was_owner` | boolean | Qué acción se tomó |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
force: true
```

### Tomar captura de pantalla

`browser.screenshot`

Tomar una captura de pantalla de la pagina actual

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
| `status` | string | Estado de la operacion (exito/error) |
| `filepath` | string | Tomar una captura de pantalla de la pagina actual |

**Example:** Example

```yaml
path: output/page.png
```

### Desplazar pagina

`browser.scroll`

Desplazar pagina a elemento, posicion o direccion

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
| `status` | string | Estado de la operacion (exito/error) |
| `scrolled_to` | object | Estado de la operacion (exito/error) |

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

### Seleccionar opcion

`browser.select`

Seleccionar opcion de elemento desplegable

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
| `status` | string | Estado de la operacion (exito/error) |
| `selected` | array | Estado de la operacion (exito/error) |
| `selector` | string | Estado de la operacion (exito/error) |

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

### Instantánea del DOM

`browser.snapshot`

Capturar instantánea del DOM de la página actual

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`html`, `mhtml`, `text`) | No | `html` | Formato de salida (html o texto) |
| `selector` | string | No | - | Selector CSS para capturar un elemento específico |
| `path` | string | No | - | Ruta para guardar la instantánea |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operación (éxito/error) |
| `format` | string | Formato de la instantánea |
| `content` | string | Contenido de la instantánea |
| `path` | string | Ruta donde se guardó la instantánea |
| `size_bytes` | number | Tamaño de la instantánea en bytes |

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

### Almacenamiento del navegador

`browser.storage`

Acceder a localStorage y sessionStorage

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
| `status` | string | Estado de la operacion (exito/error) |
| `value` | any | Estado de la operacion (exito/error) |
| `keys` | array | Estado de la operacion (exito/error) |
| `length` | number | El valor devuelto |

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

### Administrar pestanas

`browser.tab`

Crear, cambiar y cerrar pestanas del navegador

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Tab action to perform |
| `url` | string | No | - | URL to navigate to |
| `index` | number | No | - | Tab index to switch to or close (0-based) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Indice de pestana a cambiar o cerrar (basado en 0) |
| `tab_count` | number | Indice de pestana a cambiar o cerrar (basado en 0) |
| `current_index` | number | Estado de la operacion (exito/error) |
| `tabs` | array | El conteo de pestanas |

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

### Traza del Navegador

`browser.trace`

Iniciar, detener o guardar trazas de rendimiento del navegador

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Acción de traza (iniciar, detener, guardar) |
| `categories` | array | No | `['devtools.timeline']` | Categorías de traza a capturar |
| `screenshots` | boolean | No | `True` | Incluir capturas de pantalla en la traza |
| `path` | string | No | - | Ruta para guardar el archivo de traza |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operación (éxito/error) |
| `tracing` | boolean | Si la traza está activa actualmente |
| `path` | string | Ruta donde se guardó la traza |
| `size_bytes` | number | Tamaño del archivo de traza en bytes |

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

### Escribir texto

`browser.type`

Escribir texto en un campo de entrada

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
| `status` | string | Estado de la operacion (exito/error) |
| `selector` | string | Escribir texto en un campo de entrada |
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

### Subir archivo

`browser.upload`

Subir archivo a elemento de entrada de archivo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `file_path` | string | Yes | - | Local path to the file to upload |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operacion (exito/error) |
| `filename` | string | Estado de la operacion (exito/error) |
| `size` | number | Estado de la operacion (exito/error) |
| `selector` | string | Nombre del archivo |

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

### Establecer Viewport

`browser.viewport`

Obtener o establecer el tamaño del viewport del navegador

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `width` | number | Yes | `1280` | Ancho del viewport en píxeles |
| `height` | number | Yes | `720` | Altura del viewport en píxeles |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operación (éxito/error) |
| `viewport` | object | Dimensiones actuales del viewport |
| `previous_viewport` | object | Dimensiones del viewport anterior |

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

### Esperar

`browser.wait`

Esperar una duracion o hasta que aparezca un elemento

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Duration of the operation in milliseconds |
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `state` | select (`visible`, `hidden`, `attached`, `detached`) | No | `visible` | Estado para esperar (visible, oculto, adjunto, separado) |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Estado de la operacion (exito/error) |
| `selector` | string | Estado de la operacion (exito/error) |
| `duration_ms` | number | Esperar una duracion o que aparezca un elemento |

**Example:** Example

```yaml
duration_ms: 2000
```

**Example:** Example

```yaml
selector: #loading-complete
timeout_ms: 5000
```
