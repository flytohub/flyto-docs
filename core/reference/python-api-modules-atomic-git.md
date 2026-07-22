<!-- Synced from flytohub/flyto-core@60881082b55d22ca915f3aa08f99f7cb822f17fb by scripts/sync-core-reference.py; do not edit here. -->

# Python Declarations: Modules: Atomic / Git

Source-backed signatures for **16 declarations** across **3 files** in the modules: atomic / git area.

## `src/core/modules/atomic/git/clone.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| class | `class UnsafeCloneURL(ValueError)` | Raised when a clone URL could trigger command execution or local access. | [`src/core/modules/atomic/git/clone.py:35`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/git/clone.py#L35) |
| function | `def _validate_clone_url(url: str) -> None` | Reject clone URLs that can run commands (ext::), read local files (file://), inject git options (leading '-'), or hit arbitrary local paths. | [`src/core/modules/atomic/git/clone.py:39`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/git/clone.py#L39) |
| function | `def _build_clone_env() -> Dict&#91;str, str&#93;` | Scrubbed environment for the git subprocess. | [`src/core/modules/atomic/git/clone.py:59`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/git/clone.py#L59) |
| function | `def _inject_token_into_url(url: str, token: str) -> str` | Inject access token into HTTPS URL for private repos. | [`src/core/modules/atomic/git/clone.py:74`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/git/clone.py#L74) |
| function | `def _build_clone_cmd(clone_url: str, destination: str, branch: str=None, depth: int=None) -> list` | Build git clone command list. | [`src/core/modules/atomic/git/clone.py:84`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/git/clone.py#L84) |
| function | `async def _get_repo_info(destination: str) -> tuple` | Get current branch and HEAD commit hash from cloned repo. | [`src/core/modules/atomic/git/clone.py:97`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/git/clone.py#L97) |
| function | `def _sanitize_error(error_msg: str, token: str=None) -> str` | Remove token from error messages. | [`src/core/modules/atomic/git/clone.py:117`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/git/clone.py#L117) |
| function | `async def git_clone(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Clone a git repository | [`src/core/modules/atomic/git/clone.py:207`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/git/clone.py#L207) |

## `src/core/modules/atomic/git/commit.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def _run_git(repo_path: str, *args: str) -> tuple` | Run a git command in the given repo and return (returncode, stdout, stderr). | [`src/core/modules/atomic/git/commit.py:22`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/git/commit.py#L22) |
| function | `async def _stage_files(repo_path: str, add_all: bool, files: List&#91;str&#93;)` | Stage files for commit. | [`src/core/modules/atomic/git/commit.py:33`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/git/commit.py#L33) |
| function | `def _parse_files_changed(stat_out: str) -> int` | Parse files changed count from git diff --stat output. | [`src/core/modules/atomic/git/commit.py:47`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/git/commit.py#L47) |
| function | `async def git_commit(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Create a git commit | [`src/core/modules/atomic/git/commit.py:146`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/git/commit.py#L146) |

## `src/core/modules/atomic/git/diff.py`

| Kind | Signature | Responsibility | Source |
|---|---|---|---|
| function | `async def _run_git(repo_path: str, *args: str) -> tuple` | Run a git command in the given repo and return (returncode, stdout, stderr). | [`src/core/modules/atomic/git/diff.py:22`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/git/diff.py#L22) |
| function | `def _build_diff_args(staged: bool, ref1: str, ref2: str=None, extra_flags: List&#91;str&#93;=None) -> List&#91;str&#93;` | Build git diff argument list. | [`src/core/modules/atomic/git/diff.py:33`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/git/diff.py#L33) |
| function | `def _parse_numstat(numstat_out: str) -> tuple` | Parse git diff --numstat output into (files_changed, insertions, deletions). | [`src/core/modules/atomic/git/diff.py:47`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/git/diff.py#L47) |
| function | `async def git_diff(context: Dict&#91;str, Any&#93;) -> Dict&#91;str, Any&#93;` | Get git diff | [`src/core/modules/atomic/git/diff.py:155`](https://github.com/flytohub/flyto-core/blob/main/src/core/modules/atomic/git/diff.py#L155) |
