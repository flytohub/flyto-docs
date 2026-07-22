<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Browser Runtime

Source-backed signatures for **101 declarations** across **7 files** in the browser runtime area.

## `src/core/browser/captcha.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class CaptchaSolver` | API-based captcha solver supporting 2Captcha, CapSolver, and CaptchaAI. | [`src/core/browser/captcha.py:168`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/captcha.py#L168) |
| method | `def CaptchaSolver.__init__(self, provider: str, api_key: str)` | Implements `CaptchaSolver.__init__`; linked source is authoritative. | [`src/core/browser/captcha.py:180`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/captcha.py#L180) |
| method | `def CaptchaSolver.stats(self) -> Dict&#91;str, Any&#93;` | Implements `CaptchaSolver.stats`; linked source is authoritative. | [`src/core/browser/captcha.py:190`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/captcha.py#L190) |
| method | `async def CaptchaSolver.detect(self, page) -> Dict&#91;str, Any&#93;` | Detect captcha type and extract sitekey from page. | [`src/core/browser/captcha.py:193`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/captcha.py#L193) |
| method | `async def CaptchaSolver.solve(self, page, captcha_info: Optional&#91;Dict&#93;=None) -> Dict&#91;str, Any&#93;` | Detect, solve, and inject captcha solution. | [`src/core/browser/captcha.py:201`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/captcha.py#L201) |
| method | `async def CaptchaSolver._submit_task(self, captcha_type: str, sitekey: str, page_url: str) -> Optional&#91;str&#93;` | Implements `CaptchaSolver._submit_task`; linked source is authoritative. | [`src/core/browser/captcha.py:276`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/captcha.py#L276) |
| method | `async def CaptchaSolver._poll_result(self, task_id: str) -> Optional&#91;str&#93;` | Implements `CaptchaSolver._poll_result`; linked source is authoritative. | [`src/core/browser/captcha.py:283`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/captcha.py#L283) |
| method | `async def CaptchaSolver._submit_2captcha(self, captcha_type, sitekey, page_url) -> Optional&#91;str&#93;` | Implements `CaptchaSolver._submit_2captcha`; linked source is authoritative. | [`src/core/browser/captcha.py:292`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/captcha.py#L292) |
| method | `async def CaptchaSolver._poll_2captcha(self, task_id: str, timeout: int=120) -> Optional&#91;str&#93;` | Implements `CaptchaSolver._poll_2captcha`; linked source is authoritative. | [`src/core/browser/captcha.py:329`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/captcha.py#L329) |
| method | `async def CaptchaSolver._submit_capsolver(self, captcha_type, sitekey, page_url) -> Optional&#91;str&#93;` | Implements `CaptchaSolver._submit_capsolver`; linked source is authoritative. | [`src/core/browser/captcha.py:354`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/captcha.py#L354) |
| method | `async def CaptchaSolver._poll_capsolver(self, task_id: str, timeout: int=120) -> Optional&#91;str&#93;` | Implements `CaptchaSolver._poll_capsolver`; linked source is authoritative. | [`src/core/browser/captcha.py:386`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/captcha.py#L386) |
| method | `def CaptchaSolver._http_get(url: str) -> Optional&#91;dict&#93;` | Implements `CaptchaSolver._http_get`; linked source is authoritative. | [`src/core/browser/captcha.py:413`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/captcha.py#L413) |
| method | `def CaptchaSolver._http_post(url: str, payload: dict, form_encoded: bool=False) -> Optional&#91;dict&#93;` | Implements `CaptchaSolver._http_post`; linked source is authoritative. | [`src/core/browser/captcha.py:423`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/captcha.py#L423) |

## `src/core/browser/checkpoint.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class PaginationCheckpoint` | Manages pagination checkpoint state on disk. | [`src/core/browser/checkpoint.py:22`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/checkpoint.py#L22) |
| method | `def PaginationCheckpoint.__init__(self, path: str, item_selector: str, mode: str)` | Implements `PaginationCheckpoint.__init__`; linked source is authoritative. | [`src/core/browser/checkpoint.py:45`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/checkpoint.py#L45) |
| method | `def PaginationCheckpoint.exists(self) -> bool` | Check if a compatible checkpoint exists. | [`src/core/browser/checkpoint.py:52`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/checkpoint.py#L52) |
| method | `def PaginationCheckpoint.load(self) -> Dict&#91;str, Any&#93;` | Load checkpoint state. | [`src/core/browser/checkpoint.py:66`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/checkpoint.py#L66) |
| method | `def PaginationCheckpoint.load_items(self) -> List&#91;Dict&#93;` | Load all items from the JSONL items file. | [`src/core/browser/checkpoint.py:78`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/checkpoint.py#L78) |
| method | `def PaginationCheckpoint.save(self, items: List&#91;Dict&#93;, pages_processed: int, last_url: Optional&#91;str&#93;=None, last_page_num: Optional&#91;int&#93;=None, stopped_reason: Optional&#91;str&#93;=None, retries_used: int=0)` | Save pagination state. | [`src/core/browser/checkpoint.py:93`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/checkpoint.py#L93) |
| method | `def PaginationCheckpoint.clear(self)` | Remove checkpoint and items files. | [`src/core/browser/checkpoint.py:142`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/checkpoint.py#L142) |
| method | `def PaginationCheckpoint._read(self) -> Dict` | Implements `PaginationCheckpoint._read`; linked source is authoritative. | [`src/core/browser/checkpoint.py:152`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/checkpoint.py#L152) |
| method | `def PaginationCheckpoint._empty_state(self) -> Dict&#91;str, Any&#93;` | Implements `PaginationCheckpoint._empty_state`; linked source is authoritative. | [`src/core/browser/checkpoint.py:155`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/checkpoint.py#L155) |

## `src/core/browser/driver.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def _find_external_node() -> Optional&#91;str&#93;` | Find a usable Node.js binary outside the PyInstaller temp dir. | [`src/core/browser/driver.py:30`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L30) |
| class | `class BrowserDriver` | Playwright-based browser automation driver | [`src/core/browser/driver.py:47`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L47) |
| method | `def BrowserDriver.__init__(self, headless: bool=True, viewport: Optional&#91;Dict&#91;str, int&#93;&#93;=None, browser_type: str='chromium')` | Initialize browser driver | [`src/core/browser/driver.py:59`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L59) |
| method | `async def BrowserDriver.launch(self, proxy: Optional&#91;str&#93;=None, user_agent: Optional&#91;str&#93;=None, locale: Optional&#91;str&#93;=None, slow_mo: int=0, record_video_dir: Optional&#91;str&#93;=None, record_video_size: Optional&#91;Dict&#91;str, int&#93;&#93;=None, channel: Optional&#91;str&#93;=None, stealth: bool=True) -> Dict&#91;str, Any&#93;` | Launch browser instance | [`src/core/browser/driver.py:99`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L99) |
| method | `async def BrowserDriver._install_egress_guard(self)` | Install network-level egress guard on the browser context. | [`src/core/browser/driver.py:508`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L508) |
| method | `async def BrowserDriver._install_egress_guard._egress_handler(route)` | Implements `BrowserDriver._install_egress_guard._egress_handler`; linked source is authoritative. | [`src/core/browser/driver.py:529`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L529) |
| method | `async def BrowserDriver._launch_persistent(self, launcher, args, context_kwargs, slow_mo=0, proxy=None, channel=None)` | Try launching with persistent context for cookie persistence (Cloudflare etc.). | [`src/core/browser/driver.py:558`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L558) |
| method | `async def BrowserDriver._launch_regular(self, launcher, args, context_kwargs, slow_mo=0, proxy=None, channel=None)` | Fallback: regular launch + new_context (no cookie persistence). | [`src/core/browser/driver.py:598`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L598) |
| method | `async def BrowserDriver.goto(self, url: str, wait_until: str='domcontentloaded', timeout_ms: int=DEFAULT_BROWSER_TIMEOUT_MS) -> Dict&#91;str, Any&#93;` | Navigate to URL | [`src/core/browser/driver.py:623`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L623) |
| method | `async def BrowserDriver.click(self, selector: str, timeout_ms: int=DEFAULT_BROWSER_TIMEOUT_MS, force: bool=False) -> Dict&#91;str, Any&#93;` | Click element by selector | [`src/core/browser/driver.py:743`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L743) |
| method | `async def BrowserDriver.type(self, selector: str, text: str, delay_ms: int=0, timeout_ms: int=DEFAULT_BROWSER_TIMEOUT_MS) -> Dict&#91;str, Any&#93;` | Type text into element | [`src/core/browser/driver.py:784`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L784) |
| method | `async def BrowserDriver.wait(self, selector: str, state: str='visible', timeout_ms: int=DEFAULT_BROWSER_TIMEOUT_MS) -> Dict&#91;str, Any&#93;` | Wait for element to reach specified state | [`src/core/browser/driver.py:831`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L831) |
| method | `async def BrowserDriver.extract(self, selector: str, fields: Dict&#91;str, str&#93;, multiple: bool=False) -> Dict&#91;str, Any&#93;` | Extract data from elements | [`src/core/browser/driver.py:869`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L869) |
| method | `async def BrowserDriver._extract_from_element(self, element: ElementHandle, fields: Dict&#91;str, str&#93;) -> Dict&#91;str, Any&#93;` | Extract fields from a single element | [`src/core/browser/driver.py:929`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L929) |
| method | `async def BrowserDriver.screenshot(self, path: Optional&#91;str&#93;=None, full_page: bool=False, type: Optional&#91;str&#93;=None, quality: Optional&#91;int&#93;=None) -> Dict&#91;str, Any&#93;` | Take screenshot | [`src/core/browser/driver.py:983`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L983) |
| method | `async def BrowserDriver.evaluate(self, script: str, arg=None) -> Any` | Execute JavaScript in page context | [`src/core/browser/driver.py:1037`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L1037) |
| method | `async def BrowserDriver.close(self) -> Dict&#91;str, Any&#93;` | Close browser instance | [`src/core/browser/driver.py:1062`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L1062) |
| method | `async def BrowserDriver.get_hints(self, force: bool=False) -> Dict&#91;str, Any&#93;` | Get interactive element hints for current page, with URL-based caching. | [`src/core/browser/driver.py:1114`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L1114) |
| method | `async def BrowserDriver.invalidate_hints(self, clear_stamps: bool=False)` | Clear cached hints. | [`src/core/browser/driver.py:1144`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L1144) |
| method | `async def BrowserDriver.block_resources(self, resource_types: list)` | Block specified resource types to speed up page loads. | [`src/core/browser/driver.py:1169`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L1169) |
| method | `async def BrowserDriver.block_resources._abort_blocked(route)` | Implements `BrowserDriver.block_resources._abort_blocked`; linked source is authoritative. | [`src/core/browser/driver.py:1183`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L1183) |
| method | `async def BrowserDriver.unblock_resources(self)` | Remove all resource blocking rules. | [`src/core/browser/driver.py:1192`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L1192) |
| method | `def BrowserDriver.human(self)` | Get HumanBehavior instance (or None if fast mode). | [`src/core/browser/driver.py:1200`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L1200) |
| method | `async def BrowserDriver.rotate_proxy(self) -> Optional&#91;str&#93;` | Rotate to next proxy from pool. | [`src/core/browser/driver.py:1204`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L1204) |
| method | `def BrowserDriver._ensure_page(self)` | Ensure page is available | [`src/core/browser/driver.py:1247`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L1247) |
| method | `def BrowserDriver._needs_locator_api(self, selector: str) -> bool` | Check if selector needs Playwright's locator API. | [`src/core/browser/driver.py:1252`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L1252) |
| method | `def BrowserDriver._parse_modifiers(self, selector: str) -> tuple` | Parse selector modifiers like :nth=N and :near=selector. | [`src/core/browser/driver.py:1273`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L1273) |
| method | `def BrowserDriver._normalize_selector(self, selector: str) -> str` | Normalize user-friendly selectors to CSS or locator format. | [`src/core/browser/driver.py:1306`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L1306) |
| method | `def BrowserDriver._get_locator_selector(self, selector: str) -> str` | Convert selector to Playwright locator format. | [`src/core/browser/driver.py:1334`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L1334) |
| method | `async def BrowserDriver._query_selector(self, selector: str) -> Optional&#91;ElementHandle&#93;` | Query single element with CSS, XPath, text, or shortcut selectors. | [`src/core/browser/driver.py:1350`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L1350) |
| method | `async def BrowserDriver._query_selector_all(self, selector: str) -> List&#91;ElementHandle&#93;` | Query all matching elements with CSS, XPath, text, or shortcut selectors. | [`src/core/browser/driver.py:1404`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L1404) |
| method | `async def BrowserDriver.new_page(self) -> Page` | Create a new page (or return existing if only one needed). | [`src/core/browser/driver.py:1455`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L1455) |
| method | `def BrowserDriver.page(self) -> Page` | Get current page instance | [`src/core/browser/driver.py:1472`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L1472) |
| method | `def BrowserDriver.real_page(self)` | Get the actual Page object, even when inside a frame context. | [`src/core/browser/driver.py:1478`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L1478) |
| method | `def BrowserDriver.browser(self) -> Browser` | Get browser instance | [`src/core/browser/driver.py:1487`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/driver.py#L1487) |

## `src/core/browser/humanize.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class HumanBehavior` | Simulates human-like browser behavior based on profile. | [`src/core/browser/humanize.py:59`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/humanize.py#L59) |
| method | `def HumanBehavior.__init__(self, profile: str='fast')` | Implements `HumanBehavior.__init__`; linked source is authoritative. | [`src/core/browser/humanize.py:64`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/humanize.py#L64) |
| method | `def HumanBehavior.is_fast(self) -> bool` | Implements `HumanBehavior.is_fast`; linked source is authoritative. | [`src/core/browser/humanize.py:71`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/humanize.py#L71) |
| method | `def HumanBehavior._rand_ms(self, key: str) -> float` | Implements `HumanBehavior._rand_ms`; linked source is authoritative. | [`src/core/browser/humanize.py:74`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/humanize.py#L74) |
| method | `async def HumanBehavior.before_click(self, page, selector=None)` | Simulate human behavior before clicking an element. | [`src/core/browser/humanize.py:80`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/humanize.py#L80) |
| method | `async def HumanBehavior.before_type(self, page)` | Simulate pause before typing (focus delay). | [`src/core/browser/humanize.py:104`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/humanize.py#L104) |
| method | `def HumanBehavior.get_type_delay(self) -> int` | Get per-character typing delay in ms. | [`src/core/browser/humanize.py:114`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/humanize.py#L114) |
| method | `def HumanBehavior.typo_rate(self) -> float` | Implements `HumanBehavior.typo_rate`; linked source is authoritative. | [`src/core/browser/humanize.py:119`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/humanize.py#L119) |
| method | `async def HumanBehavior.after_navigation(self, page)` | Simulate reading/thinking time after page load. | [`src/core/browser/humanize.py:122`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/humanize.py#L122) |
| method | `async def HumanBehavior.before_scroll(self, page)` | Simulate delay before scrolling. | [`src/core/browser/humanize.py:142`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/humanize.py#L142) |

## `src/core/browser/pool.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class PoolTaskError` | Structured error from a pool task, distinguishable from real results. | [`src/core/browser/pool.py:16`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/pool.py#L16) |
| method | `def PoolTaskError.__init__(self, error: str, retryable: bool=True)` | Implements `PoolTaskError.__init__`; linked source is authoritative. | [`src/core/browser/pool.py:19`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/pool.py#L19) |
| method | `def PoolTaskError.to_dict(self) -> dict` | Implements `PoolTaskError.to_dict`; linked source is authoritative. | [`src/core/browser/pool.py:23`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/pool.py#L23) |
| method | `def PoolTaskError.__repr__(self)` | Implements `PoolTaskError.__repr__`; linked source is authoritative. | [`src/core/browser/pool.py:26`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/pool.py#L26) |
| class | `class BrowserPool` | Manages a pool of BrowserDriver instances for concurrent operations. | [`src/core/browser/pool.py:30`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/pool.py#L30) |
| method | `def BrowserPool.__init__(self, size: int=1)` | Implements `BrowserPool.__init__`; linked source is authoritative. | [`src/core/browser/pool.py:51`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/pool.py#L51) |
| method | `async def BrowserPool.launch_all(self, headless: bool=True, viewport: Optional&#91;Dict&#91;str, int&#93;&#93;=None, browser_type: str='chromium', proxy_pool=None, user_agent: Optional&#91;str&#93;=None, locale: Optional&#91;str&#93;=None, slow_mo: int=0, channel: Optional&#91;str&#93;=None, stealth: bool=True, behavior: Optional&#91;str&#93;=None)` | Launch all browser instances in the pool. | [`src/core/browser/pool.py:60`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/pool.py#L60) |
| method | `async def BrowserPool._check_health(self, driver) -> bool` | Check if a browser driver is still alive. | [`src/core/browser/pool.py:120`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/pool.py#L120) |
| method | `async def BrowserPool._relaunch_driver(self, driver) -> Any` | Relaunch a dead browser driver with original params. | [`src/core/browser/pool.py:133`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/pool.py#L133) |
| method | `async def BrowserPool.acquire(self, timeout: float=30.0)` | Acquire a healthy browser from the pool. | [`src/core/browser/pool.py:176`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/pool.py#L176) |
| method | `async def BrowserPool.release(self, driver)` | Return a browser to the pool. | [`src/core/browser/pool.py:196`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/pool.py#L196) |
| method | `async def BrowserPool.map(self, items: list, fn, max_concurrency: int=0) -> List&#91;Any&#93;` | Execute fn(driver, item) for each item using pool browsers. | [`src/core/browser/pool.py:201`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/pool.py#L201) |
| method | `async def BrowserPool.map._worker(idx, item)` | Implements `BrowserPool.map._worker`; linked source is authoritative. | [`src/core/browser/pool.py:220`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/pool.py#L220) |
| method | `async def BrowserPool.close_all(self)` | Close all browser instances in the pool. | [`src/core/browser/pool.py:238`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/pool.py#L238) |
| method | `def BrowserPool.launched(self) -> bool` | Implements `BrowserPool.launched`; linked source is authoritative. | [`src/core/browser/pool.py:251`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/pool.py#L251) |
| method | `def BrowserPool.browsers(self) -> list` | Implements `BrowserPool.browsers`; linked source is authoritative. | [`src/core/browser/pool.py:255`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/pool.py#L255) |

## `src/core/browser/proxy_pool.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class ProxyPool` | Manages a pool of proxy servers with rotation strategies. | [`src/core/browser/proxy_pool.py:17`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/proxy_pool.py#L17) |
| method | `def ProxyPool.__init__(self, proxies: List&#91;str&#93;, strategy: str='round_robin')` | Implements `ProxyPool.__init__`; linked source is authoritative. | [`src/core/browser/proxy_pool.py:32`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/proxy_pool.py#L32) |
| method | `def ProxyPool.strategy(self) -> str` | Implements `ProxyPool.strategy`; linked source is authoritative. | [`src/core/browser/proxy_pool.py:44`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/proxy_pool.py#L44) |
| method | `def ProxyPool.size(self) -> int` | Implements `ProxyPool.size`; linked source is authoritative. | [`src/core/browser/proxy_pool.py:48`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/proxy_pool.py#L48) |
| method | `def ProxyPool.available(self) -> int` | Implements `ProxyPool.available`; linked source is authoritative. | [`src/core/browser/proxy_pool.py:52`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/proxy_pool.py#L52) |
| method | `def ProxyPool.next(self) -> Optional&#91;str&#93;` | Get next proxy according to strategy. | [`src/core/browser/proxy_pool.py:55`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/proxy_pool.py#L55) |
| method | `def ProxyPool.mark_failed(self, proxy: str)` | Mark a proxy as failed. | [`src/core/browser/proxy_pool.py:78`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/proxy_pool.py#L78) |
| method | `def ProxyPool.mark_alive(self, proxy: str)` | Mark a proxy as alive (recovered). | [`src/core/browser/proxy_pool.py:85`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/proxy_pool.py#L85) |
| method | `def ProxyPool.reset(self)` | Reset all failure states. | [`src/core/browser/proxy_pool.py:90`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/proxy_pool.py#L90) |

## `src/core/browser/rate_limiter.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class RateLimiter` | Adaptive rate limiter for browser automation. | [`src/core/browser/rate_limiter.py:19`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/rate_limiter.py#L19) |
| method | `def RateLimiter.__init__(self, strategy: str='fixed', min_delay_ms: int=500, max_delay_ms: int=5000, base_delay_ms: int=1000)` | Implements `RateLimiter.__init__`; linked source is authoritative. | [`src/core/browser/rate_limiter.py:24`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/rate_limiter.py#L24) |
| method | `async def RateLimiter.wait(self)` | Wait according to the current strategy and elapsed time. | [`src/core/browser/rate_limiter.py:41`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/rate_limiter.py#L41) |
| method | `def RateLimiter._compute_delay(self) -> float` | Implements `RateLimiter._compute_delay`; linked source is authoritative. | [`src/core/browser/rate_limiter.py:54`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/rate_limiter.py#L54) |
| method | `def RateLimiter._clamp(self, value: float) -> float` | Implements `RateLimiter._clamp`; linked source is authoritative. | [`src/core/browser/rate_limiter.py:73`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/rate_limiter.py#L73) |
| method | `def RateLimiter.on_success(self)` | Report successful request — gradually decreases delay for adaptive. | [`src/core/browser/rate_limiter.py:76`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/rate_limiter.py#L76) |
| method | `def RateLimiter.on_error(self, is_rate_limit: bool=False)` | Report error — increases delay for adaptive strategies. | [`src/core/browser/rate_limiter.py:86`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/rate_limiter.py#L86) |
| method | `def RateLimiter.current_delay_ms(self) -> int` | Implements `RateLimiter.current_delay_ms`; linked source is authoritative. | [`src/core/browser/rate_limiter.py:108`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/rate_limiter.py#L108) |
| method | `def RateLimiter.consecutive_errors(self) -> int` | Implements `RateLimiter.consecutive_errors`; linked source is authoritative. | [`src/core/browser/rate_limiter.py:112`](https://github.com/flytohub/flyto-core/blob/main/src/core/browser/rate_limiter.py#L112) |
