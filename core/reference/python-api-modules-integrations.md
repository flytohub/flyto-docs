<!-- Synced from flytohub/flyto-core@df9a861d9e4addbf859ac07d03914d77b820c768 by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Integrations

Source-backed signatures for **134 declarations** across **20 files** in the modules: integrations area.

## `src/core/modules/integrations/base/client.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class BaseIntegration(ABC)` | Base class for building integrations. | [`src/core/modules/integrations/base/client.py:23`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/client.py#L23) |
| method | `def BaseIntegration.__init__(self, api_key: Optional&#91;str&#93;=None, access_token: Optional&#91;str&#93;=None, config: Optional&#91;IntegrationConfig&#93;=None)` | Initialize integration. | [`src/core/modules/integrations/base/client.py:50`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/client.py#L50) |
| method | `async def BaseIntegration.__aenter__(self)` | Context manager entry. | [`src/core/modules/integrations/base/client.py:80`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/client.py#L80) |
| method | `async def BaseIntegration.__aexit__(self, exc_type, exc_val, exc_tb)` | Context manager exit. | [`src/core/modules/integrations/base/client.py:85`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/client.py#L85) |
| method | `async def BaseIntegration._ensure_session(self) -> aiohttp.ClientSession` | Ensure HTTP session exists. | [`src/core/modules/integrations/base/client.py:89`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/client.py#L89) |
| method | `async def BaseIntegration.close(self) -> None` | Close HTTP session. | [`src/core/modules/integrations/base/client.py:99`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/client.py#L99) |
| method | `def BaseIntegration._default_headers(self) -> Dict&#91;str, str&#93;` | Get default headers. | [`src/core/modules/integrations/base/client.py:105`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/client.py#L105) |
| method | `def BaseIntegration._get_auth_header(self) -> Dict&#91;str, str&#93;` | Get authentication header. | [`src/core/modules/integrations/base/client.py:121`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/client.py#L121) |
| method | `def BaseIntegration._build_url(self, endpoint: str) -> str` | Build full URL for endpoint. | [`src/core/modules/integrations/base/client.py:129`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/client.py#L129) |
| method | `async def BaseIntegration._request(self, method: str, endpoint: str, **kwargs) -> APIResponse` | Make HTTP request with retry logic. | [`src/core/modules/integrations/base/client.py:133`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/client.py#L133) |
| method | `def BaseIntegration._extract_error(self, data: Any, status: int) -> str` | Extract error message from response. | [`src/core/modules/integrations/base/client.py:216`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/client.py#L216) |
| method | `async def BaseIntegration.get(self, endpoint: str, **kwargs) -> APIResponse` | Make GET request. | [`src/core/modules/integrations/base/client.py:229`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/client.py#L229) |
| method | `async def BaseIntegration.post(self, endpoint: str, **kwargs) -> APIResponse` | Make POST request. | [`src/core/modules/integrations/base/client.py:233`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/client.py#L233) |
| method | `async def BaseIntegration.put(self, endpoint: str, **kwargs) -> APIResponse` | Make PUT request. | [`src/core/modules/integrations/base/client.py:237`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/client.py#L237) |
| method | `async def BaseIntegration.patch(self, endpoint: str, **kwargs) -> APIResponse` | Make PATCH request. | [`src/core/modules/integrations/base/client.py:241`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/client.py#L241) |
| method | `async def BaseIntegration.delete(self, endpoint: str, **kwargs) -> APIResponse` | Make DELETE request. | [`src/core/modules/integrations/base/client.py:245`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/client.py#L245) |
| method | `async def BaseIntegration.health_check(self) -> bool` | Check if service is reachable. | [`src/core/modules/integrations/base/client.py:250`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/client.py#L250) |

## `src/core/modules/integrations/base/models.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class IntegrationConfig` | Configuration for an integration. | [`src/core/modules/integrations/base/models.py:15`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/models.py#L15) |
| method | `def IntegrationConfig.get_api_url(self, endpoint: str) -> str` | Build full API URL. | [`src/core/modules/integrations/base/models.py:28`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/models.py#L28) |
| class | `class APIResponse` | Standardized API response. | [`src/core/modules/integrations/base/models.py:38`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/models.py#L38) |
| method | `def APIResponse.to_dict(self) -> Dict&#91;str, Any&#93;` | Implements `APIResponse.to_dict`; linked source is authoritative. | [`src/core/modules/integrations/base/models.py:48`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/models.py#L48) |

## `src/core/modules/integrations/base/pagination.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class PaginatedIntegration(BaseIntegration)` | Base class for integrations with pagination support. | [`src/core/modules/integrations/base/pagination.py:17`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/pagination.py#L17) |
| method | `async def PaginatedIntegration.paginate(self, endpoint: str, params: Optional&#91;Dict&#91;str, Any&#93;&#93;=None, page_key: str='page', limit_key: str='per_page', limit: int=100, max_pages: Optional&#91;int&#93;=None, data_key: Optional&#91;str&#93;=None) -> List&#91;Any&#93;` | Fetch all pages of a paginated endpoint. | [`src/core/modules/integrations/base/pagination.py:24`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/pagination.py#L24) |
| method | `async def PaginatedIntegration.cursor_paginate(self, endpoint: str, params: Optional&#91;Dict&#91;str, Any&#93;&#93;=None, cursor_key: str='cursor', response_cursor_key: str='next_cursor', data_key: str='data', max_pages: Optional&#91;int&#93;=None) -> List&#91;Any&#93;` | Fetch all pages using cursor-based pagination. | [`src/core/modules/integrations/base/pagination.py:88`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/pagination.py#L88) |

## `src/core/modules/integrations/base/rate_limiter.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class RateLimiter` | Token bucket rate limiter. | [`src/core/modules/integrations/base/rate_limiter.py:16`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/rate_limiter.py#L16) |
| method | `def RateLimiter.__init__(self, calls: int=100, period: int=60)` | Initialize rate limiter. | [`src/core/modules/integrations/base/rate_limiter.py:25`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/rate_limiter.py#L25) |
| method | `async def RateLimiter.acquire(self) -> None` | Acquire a token, blocking if rate limited. | [`src/core/modules/integrations/base/rate_limiter.py:39`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/rate_limiter.py#L39) |
| method | `def RateLimiter.reset(self) -> None` | Reset rate limiter. | [`src/core/modules/integrations/base/rate_limiter.py:59`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/rate_limiter.py#L59) |

## `src/core/modules/integrations/base/webhook.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class WebhookHandler` | Webhook signature verification and handling. | [`src/core/modules/integrations/base/webhook.py:14`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/webhook.py#L14) |
| method | `def WebhookHandler.__init__(self, secret: str, signature_header: str='X-Signature', algorithm: str='sha256')` | Initialize webhook handler. | [`src/core/modules/integrations/base/webhook.py:24`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/webhook.py#L24) |
| method | `def WebhookHandler.compute_signature(self, payload: Union&#91;str, bytes&#93;) -> str` | Compute HMAC signature for payload. | [`src/core/modules/integrations/base/webhook.py:42`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/webhook.py#L42) |
| method | `def WebhookHandler.verify_signature(self, payload: Union&#91;str, bytes&#93;, signature: str) -> bool` | Verify webhook signature. | [`src/core/modules/integrations/base/webhook.py:56`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/webhook.py#L56) |
| method | `def WebhookHandler.parse(self, payload: Union&#91;str, bytes&#93;, content_type: str='application/json') -> Dict&#91;str, Any&#93;` | Parse webhook payload. | [`src/core/modules/integrations/base/webhook.py:80`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/base/webhook.py#L80) |

## `src/core/modules/integrations/jira/integration.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class JiraIntegration(PaginatedIntegration)` | Jira Cloud API integration. | [`src/core/modules/integrations/jira/integration.py:19`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/integration.py#L19) |
| method | `def JiraIntegration.__init__(self, domain: Optional&#91;str&#93;=None, email: Optional&#91;str&#93;=None, api_token: Optional&#91;str&#93;=None, access_token: Optional&#91;str&#93;=None)` | Initialize Jira integration. | [`src/core/modules/integrations/jira/integration.py:39`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/integration.py#L39) |
| method | `def JiraIntegration._get_auth_header(self) -> Dict&#91;str, str&#93;` | Get Jira authorization header. | [`src/core/modules/integrations/jira/integration.py:73`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/integration.py#L73) |
| method | `async def JiraIntegration.create_issue(self, project_key: str, summary: str, issue_type: str='Task', description: Optional&#91;str&#93;=None, priority: Optional&#91;str&#93;=None, assignee: Optional&#91;str&#93;=None, labels: Optional&#91;List&#91;str&#93;&#93;=None, components: Optional&#91;List&#91;str&#93;&#93;=None, custom_fields: Optional&#91;Dict&#91;str, Any&#93;&#93;=None) -> APIResponse` | Create a new Jira issue. | [`src/core/modules/integrations/jira/integration.py:83`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/integration.py#L83) |
| method | `async def JiraIntegration.get_issue(self, issue_key: str, fields: Optional&#91;List&#91;str&#93;&#93;=None, expand: Optional&#91;List&#91;str&#93;&#93;=None) -> APIResponse` | Get issue details. | [`src/core/modules/integrations/jira/integration.py:147`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/integration.py#L147) |
| method | `async def JiraIntegration.update_issue(self, issue_key: str, fields: Dict&#91;str, Any&#93;, notify_users: bool=True) -> APIResponse` | Update an issue. | [`src/core/modules/integrations/jira/integration.py:172`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/integration.py#L172) |
| method | `async def JiraIntegration.transition_issue(self, issue_key: str, transition_id: str, comment: Optional&#91;str&#93;=None, fields: Optional&#91;Dict&#91;str, Any&#93;&#93;=None) -> APIResponse` | Transition an issue to a new status. | [`src/core/modules/integrations/jira/integration.py:196`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/integration.py#L196) |
| method | `async def JiraIntegration.get_transitions(self, issue_key: str) -> APIResponse` | Get available transitions for an issue. | [`src/core/modules/integrations/jira/integration.py:244`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/integration.py#L244) |
| method | `async def JiraIntegration.add_comment(self, issue_key: str, body: str, visibility: Optional&#91;Dict&#91;str, str&#93;&#93;=None) -> APIResponse` | Add a comment to an issue. | [`src/core/modules/integrations/jira/integration.py:248`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/integration.py#L248) |
| method | `async def JiraIntegration.search_issues(self, jql: str, fields: Optional&#91;List&#91;str&#93;&#93;=None, max_results: int=50, start_at: int=0, expand: Optional&#91;List&#91;str&#93;&#93;=None) -> APIResponse` | Search issues using JQL. | [`src/core/modules/integrations/jira/integration.py:285`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/integration.py#L285) |
| method | `async def JiraIntegration.search_all_issues(self, jql: str, fields: Optional&#91;List&#91;str&#93;&#93;=None, max_results: int=1000) -> List&#91;Dict&#91;str, Any&#93;&#93;` | Search all issues matching JQL (handles pagination). | [`src/core/modules/integrations/jira/integration.py:319`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/integration.py#L319) |
| method | `async def JiraIntegration.list_projects(self) -> APIResponse` | List all accessible projects. | [`src/core/modules/integrations/jira/integration.py:364`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/integration.py#L364) |
| method | `async def JiraIntegration.get_project(self, project_key: str) -> APIResponse` | Get project details. | [`src/core/modules/integrations/jira/integration.py:368`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/integration.py#L368) |
| method | `async def JiraIntegration.assign_issue(self, issue_key: str, account_id: Optional&#91;str&#93;=None) -> APIResponse` | Assign issue to a user. | [`src/core/modules/integrations/jira/integration.py:372`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/integration.py#L372) |
| method | `async def JiraIntegration.get_user(self, account_id: str) -> APIResponse` | Get user details by account ID. | [`src/core/modules/integrations/jira/integration.py:389`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/integration.py#L389) |
| method | `async def JiraIntegration.search_users(self, query: str, max_results: int=50) -> APIResponse` | Search for users. | [`src/core/modules/integrations/jira/integration.py:393`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/integration.py#L393) |

## `src/core/modules/integrations/jira/modules/create_issue.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class JiraCreateIssueModule(BaseModule)` | Create Jira issue module. | [`src/core/modules/integrations/jira/modules/create_issue.py:122`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/modules/create_issue.py#L122) |
| method | `def JiraCreateIssueModule.validate_params(self) -> None` | Implements `JiraCreateIssueModule.validate_params`; linked source is authoritative. | [`src/core/modules/integrations/jira/modules/create_issue.py:128`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/modules/create_issue.py#L128) |
| method | `async def JiraCreateIssueModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `JiraCreateIssueModule.execute`; linked source is authoritative. | [`src/core/modules/integrations/jira/modules/create_issue.py:147`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/modules/create_issue.py#L147) |

## `src/core/modules/integrations/jira/modules/search_issues.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class JiraSearchIssuesModule(BaseModule)` | Search Jira issues module. | [`src/core/modules/integrations/jira/modules/search_issues.py:82`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/modules/search_issues.py#L82) |
| method | `def JiraSearchIssuesModule.validate_params(self) -> None` | Implements `JiraSearchIssuesModule.validate_params`; linked source is authoritative. | [`src/core/modules/integrations/jira/modules/search_issues.py:88`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/modules/search_issues.py#L88) |
| method | `async def JiraSearchIssuesModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `JiraSearchIssuesModule.execute`; linked source is authoritative. | [`src/core/modules/integrations/jira/modules/search_issues.py:100`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/jira/modules/search_issues.py#L100) |

## `src/core/modules/integrations/oauth/client.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class OAuthError(Exception)` | OAuth-related error. | [`src/core/modules/integrations/oauth/client.py:25`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/client.py#L25) |
| class | `class OAuthClient` | OAuth 2.0 client for handling authentication flows. | [`src/core/modules/integrations/oauth/client.py:30`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/client.py#L30) |
| method | `def OAuthClient.__init__(self, config: OAuthConfig)` | Initialize OAuth client. | [`src/core/modules/integrations/oauth/client.py:56`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/client.py#L56) |
| method | `def OAuthClient.set_token_callback(self, callback: Callable&#91;&#91;OAuthToken&#93;, None&#93;) -> None` | Set callback for token updates (for auto-refresh). | [`src/core/modules/integrations/oauth/client.py:63`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/client.py#L63) |
| method | `def OAuthClient.get_authorization_url(self, state: Optional&#91;str&#93;=None, extra_params: Optional&#91;Dict&#91;str, str&#93;&#93;=None) -> tuple&#91;str, str&#93;` | Get OAuth authorization URL. | [`src/core/modules/integrations/oauth/client.py:67`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/client.py#L67) |
| method | `async def OAuthClient.exchange_code(self, code: str, state: Optional&#91;str&#93;=None) -> OAuthToken` | Exchange authorization code for access token. | [`src/core/modules/integrations/oauth/client.py:110`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/client.py#L110) |
| method | `async def OAuthClient.refresh_token(self, token: OAuthToken) -> OAuthToken` | Refresh an expired token. | [`src/core/modules/integrations/oauth/client.py:141`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/client.py#L141) |
| method | `async def OAuthClient.get_client_credentials_token(self, scopes: Optional&#91;List&#91;str&#93;&#93;=None) -> OAuthToken` | Get token using client credentials flow. | [`src/core/modules/integrations/oauth/client.py:173`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/client.py#L173) |
| method | `async def OAuthClient.revoke_token(self, token: OAuthToken) -> bool` | Revoke an access token. | [`src/core/modules/integrations/oauth/client.py:199`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/client.py#L199) |
| method | `async def OAuthClient._token_request(self, data: Dict&#91;str, str&#93;) -> OAuthToken` | Make token request. | [`src/core/modules/integrations/oauth/client.py:220`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/client.py#L220) |
| method | `async def OAuthClient.ensure_valid_token(self, token: OAuthToken) -> OAuthToken` | Ensure token is valid, refreshing if needed. | [`src/core/modules/integrations/oauth/client.py:244`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/client.py#L244) |

## `src/core/modules/integrations/oauth/factories.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `def create_google_oauth(client_id: str, client_secret: str, redirect_uri: str, scopes: List&#91;str&#93;) -> OAuthClient` | Create Google OAuth client. | [`src/core/modules/integrations/oauth/factories.py:16`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/factories.py#L16) |
| function | `def create_slack_oauth(client_id: str, client_secret: str, redirect_uri: str, scopes: List&#91;str&#93;) -> OAuthClient` | Create Slack OAuth client. | [`src/core/modules/integrations/oauth/factories.py:46`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/factories.py#L46) |
| function | `def create_salesforce_oauth(client_id: str, client_secret: str, redirect_uri: str, scopes: Optional&#91;List&#91;str&#93;&#93;=None, sandbox: bool=False) -> OAuthClient` | Create Salesforce OAuth client. | [`src/core/modules/integrations/oauth/factories.py:74`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/factories.py#L74) |
| function | `def create_github_oauth(client_id: str, client_secret: str, redirect_uri: str, scopes: List&#91;str&#93;) -> OAuthClient` | Create GitHub OAuth client. | [`src/core/modules/integrations/oauth/factories.py:109`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/factories.py#L109) |
| function | `def create_microsoft_oauth(client_id: str, client_secret: str, redirect_uri: str, scopes: List&#91;str&#93;, tenant: str='common') -> OAuthClient` | Create Microsoft OAuth client. | [`src/core/modules/integrations/oauth/factories.py:137`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/factories.py#L137) |

## `src/core/modules/integrations/oauth/models.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class OAuthConfig` | OAuth configuration for a provider. | [`src/core/modules/integrations/oauth/models.py:17`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/models.py#L17) |
| method | `def OAuthConfig.__post_init__(self)` | Apply provider defaults. | [`src/core/modules/integrations/oauth/models.py:31`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/models.py#L31) |
| class | `class OAuthToken` | OAuth token storage with expiration tracking. | [`src/core/modules/integrations/oauth/models.py:46`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/models.py#L46) |
| method | `def OAuthToken.is_expired(self) -> bool` | Check if token is expired. | [`src/core/modules/integrations/oauth/models.py:56`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/models.py#L56) |
| method | `def OAuthToken.needs_refresh(self) -> bool` | Check if token should be refreshed (5 min buffer). | [`src/core/modules/integrations/oauth/models.py:63`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/models.py#L63) |
| method | `def OAuthToken.to_dict(self) -> Dict&#91;str, Any&#93;` | Convert to dictionary for storage. | [`src/core/modules/integrations/oauth/models.py:70`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/models.py#L70) |
| method | `def OAuthToken.from_dict(cls, data: Dict&#91;str, Any&#93;) -> 'OAuthToken'` | Create from dictionary. | [`src/core/modules/integrations/oauth/models.py:82`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/models.py#L82) |
| method | `def OAuthToken.from_response(cls, data: Dict&#91;str, Any&#93;) -> 'OAuthToken'` | Create from OAuth token response. | [`src/core/modules/integrations/oauth/models.py:98`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/models.py#L98) |

## `src/core/modules/integrations/oauth/pkce.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class PKCEChallenge` | PKCE challenge generator for OAuth 2.0. | [`src/core/modules/integrations/oauth/pkce.py:14`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/pkce.py#L14) |
| method | `def PKCEChallenge.__init__(self)` | Generate code verifier and challenge. | [`src/core/modules/integrations/oauth/pkce.py:27`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/pkce.py#L27) |
| method | `def PKCEChallenge.__repr__(self) -> str` | String representation. | [`src/core/modules/integrations/oauth/pkce.py:37`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/pkce.py#L37) |

## `src/core/modules/integrations/oauth/providers.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class OAuthProvider(str, Enum)` | Pre-configured OAuth providers. | [`src/core/modules/integrations/oauth/providers.py:13`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/oauth/providers.py#L13) |

## `src/core/modules/integrations/salesforce/integration.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class SalesforceIntegration(PaginatedIntegration)` | Salesforce REST API integration. | [`src/core/modules/integrations/salesforce/integration.py:18`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L18) |
| method | `def SalesforceIntegration.__init__(self, instance_url: Optional&#91;str&#93;=None, access_token: Optional&#91;str&#93;=None, refresh_token: Optional&#91;str&#93;=None, client_id: Optional&#91;str&#93;=None, client_secret: Optional&#91;str&#93;=None)` | Initialize Salesforce integration. | [`src/core/modules/integrations/salesforce/integration.py:41`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L41) |
| method | `def SalesforceIntegration._get_auth_header(self) -> Dict&#91;str, str&#93;` | Get Salesforce authorization header. | [`src/core/modules/integrations/salesforce/integration.py:81`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L81) |
| method | `async def SalesforceIntegration.create(self, sobject: str, data: Dict&#91;str, Any&#93;) -> APIResponse` | Create a new record. | [`src/core/modules/integrations/salesforce/integration.py:89`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L89) |
| method | `async def SalesforceIntegration.get(self, sobject: str, record_id: str, fields: Optional&#91;List&#91;str&#93;&#93;=None) -> APIResponse` | Get a record by ID. | [`src/core/modules/integrations/salesforce/integration.py:106`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L106) |
| method | `async def SalesforceIntegration.update(self, sobject: str, record_id: str, data: Dict&#91;str, Any&#93;) -> APIResponse` | Update a record. | [`src/core/modules/integrations/salesforce/integration.py:129`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L129) |
| method | `async def SalesforceIntegration.upsert(self, sobject: str, external_id_field: str, external_id: str, data: Dict&#91;str, Any&#93;) -> APIResponse` | Upsert a record using external ID. | [`src/core/modules/integrations/salesforce/integration.py:148`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L148) |
| method | `async def SalesforceIntegration.delete_record(self, sobject: str, record_id: str) -> APIResponse` | Delete a record. | [`src/core/modules/integrations/salesforce/integration.py:172`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L172) |
| method | `async def SalesforceIntegration.query(self, soql: str) -> APIResponse` | Execute SOQL query. | [`src/core/modules/integrations/salesforce/integration.py:191`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L191) |
| method | `async def SalesforceIntegration.query_all(self, soql: str, include_deleted: bool=False) -> List&#91;Dict&#91;str, Any&#93;&#93;` | Execute SOQL query and fetch all results (handles pagination). | [`src/core/modules/integrations/salesforce/integration.py:204`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L204) |
| method | `async def SalesforceIntegration.search(self, sosl: str) -> APIResponse` | Execute SOSL search. | [`src/core/modules/integrations/salesforce/integration.py:247`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L247) |
| method | `async def SalesforceIntegration.describe(self, sobject: str) -> APIResponse` | Describe an object's metadata. | [`src/core/modules/integrations/salesforce/integration.py:262`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L262) |
| method | `async def SalesforceIntegration.describe_global(self) -> APIResponse` | Get list of all available objects. | [`src/core/modules/integrations/salesforce/integration.py:274`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L274) |
| method | `async def SalesforceIntegration.composite(self, requests: List&#91;Dict&#91;str, Any&#93;&#93;, all_or_none: bool=False) -> APIResponse` | Execute composite request (multiple operations in one call). | [`src/core/modules/integrations/salesforce/integration.py:280`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L280) |
| method | `async def SalesforceIntegration.composite_batch(self, requests: List&#91;Dict&#91;str, Any&#93;&#93;, halt_on_error: bool=False) -> APIResponse` | Execute batch request (up to 25 subrequests). | [`src/core/modules/integrations/salesforce/integration.py:300`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L300) |
| method | `async def SalesforceIntegration.bulk_create(self, sobject: str, records: List&#91;Dict&#91;str, Any&#93;&#93;) -> APIResponse` | Create multiple records using Composite API. | [`src/core/modules/integrations/salesforce/integration.py:322`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L322) |
| method | `async def SalesforceIntegration.bulk_update(self, sobject: str, records: List&#91;Dict&#91;str, Any&#93;&#93;) -> APIResponse` | Update multiple records (each must have 'Id' field). | [`src/core/modules/integrations/salesforce/integration.py:342`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L342) |
| method | `async def SalesforceIntegration.bulk_delete(self, record_ids: List&#91;str&#93;, all_or_none: bool=False) -> APIResponse` | Delete multiple records. | [`src/core/modules/integrations/salesforce/integration.py:362`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L362) |
| method | `async def SalesforceIntegration.get_account(self, account_id: str) -> APIResponse` | Get Account record. | [`src/core/modules/integrations/salesforce/integration.py:385`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L385) |
| method | `async def SalesforceIntegration.get_contact(self, contact_id: str) -> APIResponse` | Get Contact record. | [`src/core/modules/integrations/salesforce/integration.py:389`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L389) |
| method | `async def SalesforceIntegration.get_lead(self, lead_id: str) -> APIResponse` | Get Lead record. | [`src/core/modules/integrations/salesforce/integration.py:393`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L393) |
| method | `async def SalesforceIntegration.get_opportunity(self, opp_id: str) -> APIResponse` | Get Opportunity record. | [`src/core/modules/integrations/salesforce/integration.py:397`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/integration.py#L397) |

## `src/core/modules/integrations/salesforce/modules/create_record.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class SalesforceCreateRecordModule(BaseModule)` | Create Salesforce record module. | [`src/core/modules/integrations/salesforce/modules/create_record.py:90`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/modules/create_record.py#L90) |
| method | `def SalesforceCreateRecordModule.validate_params(self) -> None` | Implements `SalesforceCreateRecordModule.validate_params`; linked source is authoritative. | [`src/core/modules/integrations/salesforce/modules/create_record.py:96`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/modules/create_record.py#L96) |
| method | `async def SalesforceCreateRecordModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `SalesforceCreateRecordModule.execute`; linked source is authoritative. | [`src/core/modules/integrations/salesforce/modules/create_record.py:115`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/modules/create_record.py#L115) |

## `src/core/modules/integrations/salesforce/modules/query.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class SalesforceQueryModule(BaseModule)` | Salesforce query module. | [`src/core/modules/integrations/salesforce/modules/query.py:92`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/modules/query.py#L92) |
| method | `def SalesforceQueryModule.validate_params(self) -> None` | Implements `SalesforceQueryModule.validate_params`; linked source is authoritative. | [`src/core/modules/integrations/salesforce/modules/query.py:98`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/modules/query.py#L98) |
| method | `async def SalesforceQueryModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `SalesforceQueryModule.execute`; linked source is authoritative. | [`src/core/modules/integrations/salesforce/modules/query.py:112`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/modules/query.py#L112) |

## `src/core/modules/integrations/salesforce/modules/update_record.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class SalesforceUpdateRecordModule(BaseModule)` | Update Salesforce record module. | [`src/core/modules/integrations/salesforce/modules/update_record.py:79`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/modules/update_record.py#L79) |
| method | `def SalesforceUpdateRecordModule.validate_params(self) -> None` | Implements `SalesforceUpdateRecordModule.validate_params`; linked source is authoritative. | [`src/core/modules/integrations/salesforce/modules/update_record.py:85`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/modules/update_record.py#L85) |
| method | `async def SalesforceUpdateRecordModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `SalesforceUpdateRecordModule.execute`; linked source is authoritative. | [`src/core/modules/integrations/salesforce/modules/update_record.py:100`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/salesforce/modules/update_record.py#L100) |

## `src/core/modules/integrations/slack/integration.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class SlackIntegration(BaseIntegration)` | Slack API integration. | [`src/core/modules/integrations/slack/integration.py:18`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/slack/integration.py#L18) |
| method | `def SlackIntegration.__init__(self, access_token: Optional&#91;str&#93;=None, bot_token: Optional&#91;str&#93;=None)` | Initialize Slack integration. | [`src/core/modules/integrations/slack/integration.py:31`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/slack/integration.py#L31) |
| method | `def SlackIntegration._get_auth_header(self) -> Dict&#91;str, str&#93;` | Get Slack authorization header. | [`src/core/modules/integrations/slack/integration.py:46`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/slack/integration.py#L46) |
| method | `async def SlackIntegration.send_message(self, channel: str, text: str, blocks: Optional&#91;List&#91;Dict&#93;&#93;=None, attachments: Optional&#91;List&#91;Dict&#93;&#93;=None, thread_ts: Optional&#91;str&#93;=None, reply_broadcast: bool=False, unfurl_links: bool=True, unfurl_media: bool=True) -> APIResponse` | Send message to a Slack channel. | [`src/core/modules/integrations/slack/integration.py:52`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/slack/integration.py#L52) |
| method | `async def SlackIntegration.update_message(self, channel: str, ts: str, text: str, blocks: Optional&#91;List&#91;Dict&#93;&#93;=None) -> APIResponse` | Update an existing message. | [`src/core/modules/integrations/slack/integration.py:96`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/slack/integration.py#L96) |
| method | `async def SlackIntegration.delete_message(self, channel: str, ts: str) -> APIResponse` | Delete a message. | [`src/core/modules/integrations/slack/integration.py:114`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/slack/integration.py#L114) |
| method | `async def SlackIntegration.add_reaction(self, channel: str, timestamp: str, name: str) -> APIResponse` | Add emoji reaction to a message. | [`src/core/modules/integrations/slack/integration.py:121`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/slack/integration.py#L121) |
| method | `async def SlackIntegration.upload_file(self, channels: List&#91;str&#93;, content: Optional&#91;str&#93;=None, file_path: Optional&#91;str&#93;=None, filename: str='file.txt', title: Optional&#91;str&#93;=None, initial_comment: Optional&#91;str&#93;=None) -> APIResponse` | Upload a file to Slack. | [`src/core/modules/integrations/slack/integration.py:134`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/slack/integration.py#L134) |
| method | `async def SlackIntegration.list_channels(self, types: str='public_channel,private_channel', limit: int=100) -> APIResponse` | List channels in workspace. | [`src/core/modules/integrations/slack/integration.py:190`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/slack/integration.py#L190) |
| method | `async def SlackIntegration.get_channel_info(self, channel: str) -> APIResponse` | Get channel information. | [`src/core/modules/integrations/slack/integration.py:201`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/slack/integration.py#L201) |
| method | `async def SlackIntegration.list_users(self, limit: int=100) -> APIResponse` | List users in workspace. | [`src/core/modules/integrations/slack/integration.py:207`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/slack/integration.py#L207) |
| method | `async def SlackIntegration.get_user_info(self, user: str) -> APIResponse` | Get user information. | [`src/core/modules/integrations/slack/integration.py:211`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/slack/integration.py#L211) |
| method | `async def SlackIntegration.open_dm(self, users: List&#91;str&#93;) -> APIResponse` | Open direct message channel with users. | [`src/core/modules/integrations/slack/integration.py:215`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/slack/integration.py#L215) |
| method | `async def SlackIntegration.post_ephemeral(self, channel: str, user: str, text: str, blocks: Optional&#91;List&#91;Dict&#93;&#93;=None) -> APIResponse` | Post ephemeral message visible only to specific user. | [`src/core/modules/integrations/slack/integration.py:221`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/slack/integration.py#L221) |

## `src/core/modules/integrations/slack/modules/list_channels.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class SlackListChannelsModule(BaseModule)` | List Slack channels module. | [`src/core/modules/integrations/slack/modules/list_channels.py:73`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/slack/modules/list_channels.py#L73) |
| method | `def SlackListChannelsModule.validate_params(self) -> None` | Implements `SlackListChannelsModule.validate_params`; linked source is authoritative. | [`src/core/modules/integrations/slack/modules/list_channels.py:79`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/slack/modules/list_channels.py#L79) |
| method | `async def SlackListChannelsModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `SlackListChannelsModule.execute`; linked source is authoritative. | [`src/core/modules/integrations/slack/modules/list_channels.py:87`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/slack/modules/list_channels.py#L87) |

## `src/core/modules/integrations/slack/modules/send_message.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class SlackSendMessageModule(BaseModule)` | Send Slack message module. | [`src/core/modules/integrations/slack/modules/send_message.py:99`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/slack/modules/send_message.py#L99) |
| method | `def SlackSendMessageModule.validate_params(self) -> None` | Implements `SlackSendMessageModule.validate_params`; linked source is authoritative. | [`src/core/modules/integrations/slack/modules/send_message.py:105`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/slack/modules/send_message.py#L105) |
| method | `async def SlackSendMessageModule.execute(self) -> Dict&#91;str, Any&#93;` | Implements `SlackSendMessageModule.execute`; linked source is authoritative. | [`src/core/modules/integrations/slack/modules/send_message.py:119`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/integrations/slack/modules/send_message.py#L119) |
