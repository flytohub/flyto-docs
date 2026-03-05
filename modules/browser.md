# Browser Automation

Modules for browser automation using headless or headed browsers. Provides full web interaction capabilities including navigation, form filling, data extraction, screenshots, and performance monitoring.

## Navigation

| Module | Description |
|--------|-------------|
| `browser.goto` | Navigate to URL |
| `browser.navigation` | Navigate back/forward/reload |
| `browser.scroll` | Scroll page |
| `browser.frame` | Switch to iframe/frame |
| `browser.tab` | Manage tabs |
| `browser.pages` | List open pages/tabs |

## Interaction

| Module | Description |
|--------|-------------|
| `browser.click` | Click an element |
| `browser.type` | Type text into input |
| `browser.press` | Press keyboard key |
| `browser.select` | Select dropdown option |
| `browser.hover` | Hover over element |
| `browser.drag` | Drag and drop elements |
| `browser.form` | Smart form filling |
| `browser.upload` | Upload file |
| `browser.download` | Download file from browser |
| `browser.dialog` | Handle alert/confirm/prompt dialogs |

## Data Extraction

| Module | Description |
|--------|-------------|
| `browser.snapshot` | DOM snapshot |
| `browser.extract` | Extract structured data |
| `browser.find` | Find elements in page |
| `browser.evaluate` | Execute JavaScript in page context |
| `browser.pagination` | Auto-paginate and extract |
| `browser.console` | Capture console logs |
| `browser.network` | Monitor network requests |
| `browser.cookies` | Manage cookies |
| `browser.storage` | Access localStorage/sessionStorage |

## Capture & Performance

| Module | Description |
|--------|-------------|
| `browser.screenshot` | Take screenshot |
| `browser.pdf` | Generate PDF from page |
| `browser.performance` | Collect Web Vitals |
| `browser.trace` | Performance tracing |
| `browser.record` | Record user actions |

## Session Management

| Module | Description |
|--------|-------------|
| `browser.launch` | Launch new browser instance |
| `browser.ensure` | Ensure browser session exists |
| `browser.close` | Close browser instance |
| `browser.release` | Release browser session |
| `browser.viewport` | Resize viewport |
| `browser.emulate` | Device emulation |
| `browser.geolocation` | Mock geolocation |
| `browser.wait` | Wait for duration/element |
