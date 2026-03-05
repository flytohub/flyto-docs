# Builtin Blueprints

flyto-blueprint ships with 11 pre-built blueprints for common automation tasks.

## Browser Blueprints

### browser_scrape

Open a website and extract content from a CSS selector.

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `url` | string | Yes | URL to scrape |
| `extract_selector` | string | Yes | CSS selector to extract |
| `extract_type` | string | No | Type of extraction |

### browser_scrape_list

Extract multiple elements from a page.

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `url` | string | Yes | URL to scrape |
| `extract_selector` | string | Yes | CSS selector for list items |

### browser_search

Type a search query, submit, and wait for results.

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `url` | string | Yes | Search engine URL |
| `query` | string | Yes | Search query |
| `search_selector` | string | Yes | Search input selector |

### browser_click_navigate

Click a link and navigate to a new page.

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `url` | string | Yes | Starting URL |
| `click_selector` | string | Yes | Element to click |

### browser_form_fill

Fill out and submit a form.

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `url` | string | Yes | Form page URL |
| `fields` | object | Yes | Field selectors and values |

### browser_screenshot

Take a screenshot of a page.

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `url` | string | Yes | URL to screenshot |
| `full_page` | boolean | No | Capture full page |

### browser_login

Log into a website with username and password.

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `url` | string | Yes | Login page URL |
| `username` | string | Yes | Username |
| `password` | string | Yes | Password |
| `username_selector` | string | Yes | Username input selector |
| `password_selector` | string | Yes | Password input selector |
| `submit_selector` | string | Yes | Submit button selector |

## API Blueprints

### api_get

Make an HTTP GET request.

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `url` | string | Yes | Request URL |
| `headers` | object | No | Request headers |

### api_post

Make an HTTP POST request with a JSON body.

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `url` | string | Yes | Request URL |
| `body` | object | Yes | JSON request body |
| `headers` | object | No | Request headers |

## File Blueprints

### file_transform

Read a file, transform its content, and write the result.

| Argument | Type | Required | Description |
|----------|------|----------|-------------|
| `input_path` | string | Yes | Source file path |
| `output_path` | string | Yes | Destination file path |

## Compose Blocks

Blueprints can include reusable multi-step blocks. Currently available:

### browser_init

Automatically prepended when a blueprint uses `compose: [browser_init]`:

1. `browser.launch` — Start browser
2. `browser.goto` — Navigate to URL
