# Meta

Module generation, listing, testing, and documentation.

**2 modules**

| Module | Description |
|--------|-------------|
| [사용 가능한 모듈 나열](#사용-가능한-모듈-나열) | 레지스트리의 모든 사용 가능한 모듈 나열 |
| [모듈 문서 업데이트](#모듈-문서-업데이트) | 레지스트리에서 MODULES.md 문서 생성 또는 업데이트 |

## Modules

### 사용 가능한 모듈 나열

`meta.modules.list`

레지스트리의 모든 사용 가능한 모듈 나열

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `category` | string | No | - | 카테고리별 모듈 필터링 (예: browser, data, ai) |
| `tags` | array | No | - | 카테고리별 모듈 필터링 (예: browser, data, ai) |
| `include_params` | boolean | No | `True` | 태그별 모듈 필터링 |
| `include_output` | boolean | No | `True` | 출력에 매개변수 스키마 포함 |
| `format` | select (`json`, `markdown`, `compact`) | No | `json` | 응답에 출력 스키마 포함 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `modules` | array | 등록된 모듈 목록 |
| `count` | number | 매개변수 스키마 |
| `formatted` | string | 출력 스키마 |

**Example:** List all modules

```yaml
```

**Example:** List browser modules only

```yaml
category: browser
include_params: true
```

**Example:** List AI modules as markdown

```yaml
tags: ["ai", "llm"]
format: markdown
```

**Example:** Compact list for AI prompts

```yaml
format: compact
```

### 모듈 문서 업데이트

`meta.modules.update_docs`

레지스트리에서 MODULES.md 문서 생성 또는 업데이트

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | No | `docs/MODULES.md` | MODULES.md 파일을 작성할 경로 |
| `include_examples` | boolean | No | `True` | 문서에 사용 예제 포함 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `file_path` | string | 문서에 사용 예제 포함 |
| `modules_count` | number | 파일 경로 |
| `categories` | array | 파일 경로 |

**Example:** Update module documentation

```yaml
output_path: docs/MODULES.md
```
