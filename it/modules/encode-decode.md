# Encode / Decode

Base64, hex, URL, and HTML encoding and decoding.

**7 modules**

| Module | Description |
|--------|-------------|
| [Decodifica Base64](#decodifica-base64) | Decodifica testo codificato in Base64 |
| [Decodifica Hex](#decodifica-hex) | Decodifica esadecimale in testo |
| [Decodifica URL](#decodifica-url) | Decodifica testo codificato in URL |
| [Codifica Base64](#codifica-base64) | Codifica il testo in Base64 |
| [Codifica Esadecimale](#codifica-esadecimale) | Codifica il testo in esadecimale |
| [Codifica HTML](#codifica-html) | Codifica il testo in entità HTML |
| [Codifica URL](#codifica-url) | Codifica URL del testo (codifica percentuale) |

## Modules

### Decodifica Base64

`decode.base64`

Decodifica testo codificato in Base64

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Testo codificato in Base64 da decodificare |
| `encoding` | string | No | `utf-8` | Testo codificato in Base64 da decodificare |
| `url_safe` | boolean | No | `False` | Codifica dei caratteri per l'output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | L'input è Base64 sicuro per URL |
| `original` | string | Stringa decodificata |
| `valid` | boolean | Stringa decodificata |

### Decodifica Hex

`decode.hex`

Decodifica esadecimale in testo

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Testo esadecimale da decodificare |
| `encoding` | string | No | `utf-8` | Testo esadecimale da decodificare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Codifica dei caratteri per l'output |
| `original` | string | Stringa decodificata |
| `valid` | boolean | Stringa decodificata |

### Decodifica URL

`decode.url`

Decodifica testo codificato in URL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Testo codificato in URL da decodificare |
| `plus_spaces` | boolean | No | `False` | Testo codificato in URL da decodificare |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Tratta + come spazio (decodifica modulo) |
| `original` | string | Stringa decodificata |

### Codifica Base64

`encode.base64`

Codifica il testo in Base64

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Testo da codificare |
| `encoding` | string | No | `utf-8` | Testo da codificare |
| `url_safe` | boolean | No | `False` | Codifica dei caratteri |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Usa la codifica Base64 sicura per URL |
| `original` | string | Stringa codificata in Base64 |
| `length` | number | Stringa codificata in Base64 |

### Codifica Esadecimale

`encode.hex`

Codifica il testo in esadecimale

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Testo da codificare in esadecimale |
| `encoding` | string | No | `utf-8` | Testo da codificare in esadecimale |
| `uppercase` | boolean | No | `False` | Codifica dei caratteri |
| `separator` | string | No | - | Usa lettere esadecimali maiuscole |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Separatore tra byte esadecimali |
| `original` | string | Stringa codificata in esadecimale |
| `byte_count` | number | Stringa codificata in esadecimale |

### Codifica HTML

`encode.html`

Codifica il testo in entità HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Testo da codificare come entità HTML |
| `quote` | boolean | No | `True` | Testo da codificare come entità HTML |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Codifica anche i caratteri di citazione |
| `original` | string | Stringa codificata in HTML |

### Codifica URL

`encode.url`

Codifica URL del testo (codifica percentuale)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | text | Yes | - | Testo da codificare in URL |
| `plus_spaces` | boolean | No | `False` | Testo da codificare in URL |
| `safe` | string | No | - | Usa + invece di %20 per gli spazi (codifica modulo) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `result` | string | Caratteri che non devono essere codificati |
| `original` | string | Stringa codificata in URL |
