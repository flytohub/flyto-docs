# Browser Modules

Browser modules provide web automation capabilities: navigation, interaction, and data extraction.

## Modules

### browser.goto

Navigate to a URL.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `url` | string | Yes | URL to navigate to |

**Returns:**
```json
{
  "status": "success",
  "data": {
    "url": "https://example.com",
    "title": "Example Domain"
  }
}
```

### browser.click

Click an element on the page.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `selector` | string | Yes | CSS selector or text content |

### browser.type

Type text into an input field.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `selector` | string | Yes | CSS selector of the input |
| `text` | string | Yes | Text to type |

### browser.snapshot

Capture the current page state.

**Returns:**
```json
{
  "status": "success",
  "data": {
    "url": "https://example.com",
    "title": "Example Domain",
    "text": "Page text content...",
    "inputs": [...],
    "buttons": [...],
    "links": [...]
  }
}
```

### browser.scroll

Scroll the page.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `direction` | string | No | `up` or `down` (default: `down`) |
| `amount` | number | No | Pixels to scroll |

### browser.select

Select an option from a dropdown.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `selector` | string | Yes | CSS selector of the select element |
| `value` | string | Yes | Value to select |

### browser.wait

Wait for an element or condition.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `selector` | string | No | Wait for element to appear |
| `timeout` | number | No | Max wait time in ms (default: 30000) |
