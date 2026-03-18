# Browser Automation

Full web automation: navigation, interaction, data extraction, screenshots, and performance monitoring.

**40 modules**

| Module | Description |
|--------|-------------|
| [Clicar Elemento](#clicar-elemento) | Clicar em um elemento na pagina |
| [Fechar Navegador](#fechar-navegador) | Fechar instancia do navegador e liberar recursos |
| [Capturar Console](#capturar-console) | Capturar logs do console do navegador (erros, avisos, info) |
| [Gerenciar Cookies](#gerenciar-cookies) | Obter, definir ou limpar cookies do navegador |
| [Smart Detect](#smart-detect) | Smart element detection with multi-strategy matching. Finds elements using text, selector, role, proximity, and fuzzy matching with automatic fallbacks. |
| [Lidar com Dialogo](#lidar-com-dialogo) | Lidar com dialogos de alerta, confirmacao e prompt |
| [Baixar Arquivo](#baixar-arquivo) | Baixar arquivo do navegador |
| [Arrastar e Soltar](#arrastar-e-soltar) | Arrastar e soltar elementos |
| [Emular Dispositivo](#emular-dispositivo) | Emular um dispositivo ou definir viewport personalizado |
| [Garantir Navegador](#garantir-navegador) | Garantir que uma sessão de navegador exista (reutilizar ou iniciar) |
| [Executar JavaScript](#executar-javascript) | Executar codigo JavaScript no contexto da pagina |
| [Extrair Dados](#extrair-dados) | Extrair dados estruturados da pagina |
| [Encontrar Elementos](#encontrar-elementos) | Encontrar elementos na pagina e retornar lista de IDs de elementos |
| [Preencher Formulário](#preencher-formulário) | Preenchimento inteligente de formulários com detecção automática de campos |
| [Alternar Frame](#alternar-frame) | Alternar para contexto de iframe ou frame |
| [Simular Geolocalizacao](#simular-geolocalizacao) | Simular geolocalizacao do navegador |
| [Ir para URL](#ir-para-url) | Navegar para URL especifica |
| [Passar Mouse sobre Elemento](#passar-mouse-sobre-elemento) | Passar mouse sobre um elemento |
| [Browser Interact](#browser-interact) | Pause for user to interact with the browser page. Shows page elements in a dialog for the user to choose an action. |
| [Iniciar Navegador](#iniciar-navegador) | Iniciar nova instancia de navegador com Playwright |
| [Navegar no Histórico](#navegar-no-histórico) | Navegar no histórico do navegador (voltar, avançar, recarregar) |
| [Monitor de Rede](#monitor-de-rede) | Monitorar e interceptar requisicoes de rede |
| [Listar Páginas](#listar-páginas) | Lista todas as páginas/abas abertas do navegador |
| [Paginar & Extrair](#paginar--extrair) | Paginação automática através de páginas e extração de dados |
| [Gerar PDF](#gerar-pdf) | Gerar PDF da pagina atual |
| [Métricas de Desempenho](#métricas-de-desempenho) | Coletar métricas de desempenho do navegador |
| [Pressionar Tecla](#pressionar-tecla) | Pressionar tecla do teclado |
| [Gravar Acoes](#gravar-acoes) | Gravar acoes do usuario como workflow |
| [Liberar Navegador](#liberar-navegador) | Liberar sessão do navegador (fechar apenas se for proprietário) |
| [Tirar Captura de Tela](#tirar-captura-de-tela) | Tirar captura de tela da pagina atual |
| [Rolar Pagina](#rolar-pagina) | Rolar pagina para elemento, posicao ou direcao |
| [Selecionar Opcao](#selecionar-opcao) | Selecionar opcao de elemento dropdown |
| [Instantâneo do DOM](#instantâneo-do-dom) | Capturar instantâneo do DOM da página atual |
| [Armazenamento do Navegador](#armazenamento-do-navegador) | Acessar localStorage e sessionStorage |
| [Gerenciar Abas](#gerenciar-abas) | Criar, alternar e fechar abas do navegador |
| [Rastreamento do Navegador](#rastreamento-do-navegador) | Iniciar, parar ou salvar rastreamentos de desempenho do navegador |
| [Digitar Texto](#digitar-texto) | Digitar texto em campo de entrada |
| [Fazer Upload de Arquivo](#fazer-upload-de-arquivo) | Fazer upload de arquivo para elemento de entrada de arquivo |
| [Definir Janela](#definir-janela) | Obter ou definir o tamanho da janela do navegador |
| [Aguardar](#aguardar) | Aguardar duracao ou ate elemento aparecer |

## Modules

### Clicar Elemento

`browser.click`

Clicar em um elemento na pagina

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
| `status` | string | Status da operacao (sucesso/erro) |
| `selector` | string | Status da operacao (sucesso/erro) |
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

### Fechar Navegador

`browser.close`

Fechar instancia do navegador e liberar recursos

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `_no_params` | boolean | No | `True` | This module requires no parameters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Fechar instancia do navegador |
| `message` | string | Fechar instancia do navegador |

**Example:** Example

```yaml
```

### Capturar Console

`browser.console`

Capturar logs do console do navegador (erros, avisos, info)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `level` | select (`all`, `error`, `warning`, `info`, `log`) | No | `all` | Filter console messages by level |
| `timeout` | number | No | `5000` | Maximum time to wait in milliseconds |
| `clear_existing` | boolean | No | `False` | Clear existing messages before capturing |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operacao (sucesso/erro) |
| `messages` | array | Status da operacao (sucesso/erro) |
| `count` | number | Status da operacao (sucesso/erro) |

**Example:** Example

```yaml
timeout: 3000
```

**Example:** Example

```yaml
level: error
timeout: 5000
```

### Gerenciar Cookies

`browser.cookies`

Obter, definir ou limpar cookies do navegador

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
| `status` | string | Status da operacao (sucesso/erro) |
| `cookies` | array | Status da operacao (sucesso/erro) |
| `count` | number | Status da operacao (sucesso/erro) |

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

### Lidar com Dialogo

`browser.dialog`

Lidar com dialogos de alerta, confirmacao e prompt

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`accept`, `dismiss`, `listen`) | Yes | - | How to respond to the dialog |
| `prompt_text` | string | No | - | Text to enter in prompt dialog (for accept action) |
| `timeout` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operacao (sucesso/erro) |
| `message` | string | Status da operacao (sucesso/erro) |
| `type` | string | Status da operacao (sucesso/erro) |
| `default_value` | string | Mensagem de resultado descrevendo o resultado |

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

### Baixar Arquivo

`browser.download`

Baixar arquivo do navegador

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `save_path` | string | Yes | - | Path where to save the downloaded file |
| `timeout_ms` | number | No | `60000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operacao (sucesso/erro) |
| `path` | string | Status da operacao (sucesso/erro) |
| `filename` | string | Status da operacao (sucesso/erro) |
| `size` | number | Caminho do arquivo ou recurso |

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

### Arrastar e Soltar

`browser.drag`

Arrastar e soltar elementos

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
| `status` | string | Posicao dentro do elemento alvo {x, y} como porcentagens |
| `source` | string | Posicao dentro do elemento alvo {x, y} como porcentagens |
| `target` | string | Status da operacao (sucesso/erro) |

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

Emular um dispositivo ou definir viewport personalizado

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `device` | select (`iphone_12`, `iphone_14`, `iphone_14_pro_max`, `iphone_se`, `pixel_7`, `pixel_5`, `galaxy_s21`, `galaxy_s23`, `ipad_pro`, `ipad_mini`, `galaxy_tab_s8`, `desktop_chrome`, `desktop_firefox`, `desktop_safari`, `desktop_edge`, `laptop`, `macbook_pro`, `custom`) | Yes | - | Nome do dispositivo para emular (ex. iPhone 13) |
| `width` | number | No | - | Largura do viewport em pixels |
| `height` | number | No | - | Altura do viewport em pixels |
| `user_agent` | string | No | - | String de user agent personalizada |
| `is_mobile` | boolean | No | - | Se deve emular um dispositivo móvel |
| `has_touch` | boolean | No | - | Se o dispositivo tem suporte a toque |
| `device_scale_factor` | number | No | - | Proporção de pixels do dispositivo |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operação (sucesso/erro) |
| `device` | string | Nome do dispositivo que foi emulado |
| `viewport` | object | Dimensões atuais do viewport |
| `is_mobile` | boolean | Se a emulação móvel está ativa |

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

### Garantir Navegador

`browser.ensure`

Garantir que uma sessão de navegador exista (reutilizar ou iniciar)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Se o navegador foi iniciado ou reutilizado |
| `message` | string | Se o navegador foi iniciado ou reutilizado |
| `is_owner` | boolean | Se o navegador foi iniciado ou reutilizado |

**Example:** Example

```yaml
headless: false
```

**Example:** Example

```yaml
headless: true
```

### Executar JavaScript

`browser.evaluate`

Executar codigo JavaScript no contexto da pagina

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `script` | string | Yes | - | JavaScript code to execute (can use return statement) |
| `args` | array | No | - | Arguments to pass to the script function |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operacao (sucesso/erro) |
| `result` | any | Status da operacao (sucesso/erro) |

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

### Extrair Dados

`browser.extract`

Extrair dados estruturados da pagina

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |
| `fields` | object | No | - | Define fields to extract from each item |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operacao (sucesso/erro) |
| `data` | array | Status da operacao (sucesso/erro) |
| `count` | number | Status da operacao (sucesso/erro) |

**Example:** Example

```yaml
selector: .g
limit: 10
fields: {"title": {"selector": "h3", "type": "text"}, "url": {"selector": "a", "type": "attribute", "attribute": "href"}}
```

### Encontrar Elementos

`browser.find`

Encontrar elementos na pagina e retornar lista de IDs de elementos

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `limit` | number | No | - | Maximum number of items to extract |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operacao (sucesso/erro) |
| `count` | number | Status da operacao (sucesso/erro) |
| `element_ids` | array | Status da operacao (sucesso/erro) |

**Example:** Find search results

```yaml
selector: div.tF2Cxc
limit: 10
```

### Preencher Formulário

`browser.form`

Preenchimento inteligente de formulários com detecção automática de campos

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
| `filled_fields` | array | Atraso entre o preenchimento de cada campo (para um comportamento mais humano) |
| `failed_fields` | array | Lista de campos que foram preenchidos |
| `submitted` | boolean | Lista de campos que foram preenchidos |

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

### Alternar Frame

`browser.frame`

Alternar para contexto de iframe ou frame

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
| `status` | string | Acao do frame (enter para mudar para frame, list para listar todos os frames) |
| `frame_url` | string | Acao do frame (enter para mudar para frame, list para listar todos os frames) |
| `frame_name` | string | Status da operacao (sucesso/erro) |
| `frames` | array | URL do frame |

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

### Simular Geolocalizacao

`browser.geolocation`

Simular geolocalizacao do navegador

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `latitude` | number | Yes | - | Latitude coordinate (-90 to 90) |
| `longitude` | number | Yes | - | Longitude coordinate (-180 to 180) |
| `accuracy` | number | No | `100` | Position accuracy in meters |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Precisao da posicao em metros |
| `location` | object | Precisao da posicao em metros |

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

### Ir para URL

`browser.goto`

Navegar para URL especifica

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to navigate to |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operacao (sucesso/erro) |
| `url` | string | Navegar para URL especifica |

**Example:** Example

```yaml
url: https://www.google.com
wait_until: domcontentloaded
```

### Passar Mouse sobre Elemento

`browser.hover`

Passar mouse sobre um elemento

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |
| `position` | object | No | - | Click position relative to element (0-1 range) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operacao (sucesso/erro) |
| `selector` | string | Status da operacao (sucesso/erro) |

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

### Iniciar Navegador

`browser.launch`

Iniciar nova instancia de navegador com Playwright

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `headless` | boolean | No | `False` | Run browser without visible window |
| `width` | number | No | `1280` | Browser viewport width in pixels |
| `height` | number | No | `720` | Browser viewport height in pixels |
| `browser_type` | select (`chromium`, `firefox`, `webkit`) | No | `chromium` | Motor de navegador a usar (chromium, firefox, webkit) |
| `channel` | select (``, `chrome`, `msedge`) | No | - | Use system Chrome instead of bundled Chromium for better anti-detection bypass |
| `proxy` | string | No | - | URL do servidor proxy |
| `user_agent` | string | No | - | String de user agent personalizada |
| `locale` | string | No | `en-US` | Browser locale (e.g. en-US, zh-TW, ja-JP) |
| `slow_mo` | number | No | `0` | Desacelerar operações por milissegundos especificados |
| `record_video_dir` | string | No | - | Directory to save recorded videos (enables Playwright video recording) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operacao (sucesso/erro) |
| `message` | string | Iniciar nova instancia de navegador |
| `browser_type` | string | Tipo de navegador lançado |
| `headless` | boolean | Se o navegador está rodando em modo headless |
| `viewport` | object | Dimensões atuais do viewport |

**Example:** Example

```yaml
headless: true
```

**Example:** Example

```yaml
headless: false
```

### Navegar no Histórico

`browser.navigation`

Navegar no histórico do navegador (voltar, avançar, recarregar)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | select (`back`, `forward`, `reload`) | Yes | `reload` | Which navigation action to perform |
| `wait_until` | select (`load`, `domcontentloaded`, `networkidle`) | No | `domcontentloaded` | When to consider navigation complete |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operação (sucesso/erro) |
| `action` | string | Ação de navegação realizada |
| `url` | string | URL atual após a navegação |

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

### Monitor de Rede

`browser.network`

Monitorar e interceptar requisicoes de rede

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
| `status` | string | Resposta a retornar para requisicoes interceptadas |
| `requests` | array | Resposta a retornar para requisicoes interceptadas |
| `blocked_count` | number | Status da operacao (sucesso/erro) |

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

Lista todas as páginas/abas abertas do navegador

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `include_details` | boolean | No | `True` | Incluir informações detalhadas para cada página |
| `include_content_info` | boolean | No | `False` | Incluir informações do tipo de conteúdo para cada página |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operação (sucesso/erro) |
| `pages` | array | Lista de páginas abertas |
| `count` | number | Número de páginas abertas |
| `current_index` | number | Índice da página ativa atual |

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

### Paginar & Extrair

`browser.pagination`

Paginação automática através de páginas e extração de dados

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
| `items` | array | Seletor que aparece quando não há mais páginas (para a paginação) |
| `total_items` | integer | Todos os itens extraídos de todas as páginas |
| `pages_processed` | integer | Todos os itens extraídos de todas as páginas |
| `stopped_reason` | string | Número de páginas processadas |

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

### Gerar PDF

`browser.pdf`

Gerar PDF da pagina atual

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
| `status` | string | Escala da renderizacao da pagina web (0.1-2) |
| `path` | string | Status da operacao (sucesso/erro) |
| `size` | number | Status da operacao (sucesso/erro) |

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

### Métricas de Desempenho

`browser.performance`

Coletar métricas de desempenho do navegador

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `metrics` | array | No | `['all']` | Métricas de desempenho a coletar |
| `timeout_ms` | number | No | `3000` | Tempo limite em milissegundos |
| `setup_observers` | boolean | No | `True` | Configurar observadores de desempenho antes de coletar |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operação (sucesso/erro) |
| `metrics` | object | Métricas de desempenho coletadas |

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

### Pressionar Tecla

`browser.press`

Pressionar tecla do teclado

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | The key to press (e.g., Enter, Escape, Tab) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operacao (sucesso/erro) |
| `key` | string | Pressionar tecla do teclado |

**Example:** Example

```yaml
key: Enter
```

**Example:** Example

```yaml
key: Escape
```

### Gravar Acoes

`browser.record`

Gravar acoes do usuario como workflow

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Recording action to perform |
| `output_format` | string | No | `yaml` | Format for recorded workflow |
| `output_path` | string | No | - | Path where the output file will be saved |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Formato para workflow gravado (yaml ou json) |
| `recording` | array | Formato para workflow gravado (yaml ou json) |
| `workflow` | string | Status da operacao (sucesso/erro) |

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

Liberar sessão do navegador (fechar apenas se for proprietário)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `force` | boolean | No | `False` | Fechar navegador mesmo que não seja propriedade deste modelo |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Fechar navegador mesmo que não seja propriedade deste modelo |
| `message` | string | Qual ação foi tomada |
| `was_owner` | boolean | Qual ação foi tomada |

**Example:** Example

```yaml
```

**Example:** Example

```yaml
force: true
```

### Tirar Captura de Tela

`browser.screenshot`

Tirar captura de tela da pagina atual

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
| `status` | string | Status da operacao (sucesso/erro) |
| `filepath` | string | Tirar captura de tela da pagina atual |

**Example:** Example

```yaml
path: output/page.png
```

### Rolar Pagina

`browser.scroll`

Rolar pagina para elemento, posicao ou direcao

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
| `status` | string | Status da operacao (sucesso/erro) |
| `scrolled_to` | object | Status da operacao (sucesso/erro) |

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

### Selecionar Opcao

`browser.select`

Selecionar opcao de elemento dropdown

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
| `status` | string | Status da operacao (sucesso/erro) |
| `selected` | array | Status da operacao (sucesso/erro) |
| `selector` | string | Status da operacao (sucesso/erro) |

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

### Instantâneo do DOM

`browser.snapshot`

Capturar instantâneo do DOM da página atual

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `format` | select (`html`, `mhtml`, `text`) | No | `html` | Formato de saída (html ou texto) |
| `selector` | string | No | - | Seletor CSS para capturar um elemento específico |
| `path` | string | No | - | Caminho para salvar o instantâneo |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operação (sucesso/erro) |
| `format` | string | Formato do instantâneo |
| `content` | string | Conteúdo do instantâneo |
| `path` | string | Caminho onde o instantâneo foi salvo |
| `size_bytes` | number | Tamanho do instantâneo em bytes |

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

### Armazenamento do Navegador

`browser.storage`

Acessar localStorage e sessionStorage

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
| `status` | string | Status da operacao (sucesso/erro) |
| `value` | any | Status da operacao (sucesso/erro) |
| `keys` | array | Status da operacao (sucesso/erro) |
| `length` | number | O valor retornado |

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

### Gerenciar Abas

`browser.tab`

Criar, alternar e fechar abas do navegador

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Tab action to perform |
| `url` | string | No | - | URL to navigate to |
| `index` | number | No | - | Tab index to switch to or close (0-based) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Indice da aba para alternar ou fechar (base 0) |
| `tab_count` | number | Indice da aba para alternar ou fechar (base 0) |
| `current_index` | number | Status da operacao (sucesso/erro) |
| `tabs` | array | A contagem de abas |

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

### Rastreamento do Navegador

`browser.trace`

Iniciar, parar ou salvar rastreamentos de desempenho do navegador

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `action` | string | Yes | - | Ação de rastreamento (iniciar, parar, salvar) |
| `categories` | array | No | `['devtools.timeline']` | Categorias de rastreamento a capturar |
| `screenshots` | boolean | No | `True` | Incluir capturas de tela no rastreamento |
| `path` | string | No | - | Caminho para salvar o arquivo de rastreamento |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operação (sucesso/erro) |
| `tracing` | boolean | Se o rastreamento está ativo no momento |
| `path` | string | Caminho onde o rastreamento foi salvo |
| `size_bytes` | number | Tamanho do arquivo de rastreamento em bytes |

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

### Digitar Texto

`browser.type`

Digitar texto em campo de entrada

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
| `status` | string | Status da operacao (sucesso/erro) |
| `selector` | string | Digitar texto em campo de entrada |
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

### Fazer Upload de Arquivo

`browser.upload`

Fazer upload de arquivo para elemento de entrada de arquivo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `selector` | string | Yes | - | CSS selector, XPath, or text selector to find the element |
| `file_path` | string | Yes | - | Local path to the file to upload |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operacao (sucesso/erro) |
| `filename` | string | Status da operacao (sucesso/erro) |
| `size` | number | Status da operacao (sucesso/erro) |
| `selector` | string | Nome do arquivo |

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

### Definir Janela

`browser.viewport`

Obter ou definir o tamanho da janela do navegador

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `width` | number | Yes | `1280` | Largura da janela em pixels |
| `height` | number | Yes | `720` | Altura da janela em pixels |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operação (sucesso/erro) |
| `viewport` | object | Dimensões atuais da janela |
| `previous_viewport` | object | Dimensões anteriores da janela |

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

### Aguardar

`browser.wait`

Aguardar duracao ou ate elemento aparecer

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `duration_ms` | number | No | `1000` | Duration of the operation in milliseconds |
| `selector` | string | No | - | CSS selector, XPath, or text selector to find the element |
| `state` | select (`visible`, `hidden`, `attached`, `detached`) | No | `visible` | Estado para aguardar (visível, oculto, anexado, desanexado) |
| `timeout_ms` | number | No | `30000` | Maximum time to wait in milliseconds |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Status da operacao (sucesso/erro) |
| `selector` | string | Status da operacao (sucesso/erro) |
| `duration_ms` | number | Aguardar duracao ou elemento aparecer |

**Example:** Example

```yaml
duration_ms: 2000
```

**Example:** Example

```yaml
selector: #loading-complete
timeout_ms: 5000
```
