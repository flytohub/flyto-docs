# Verify

Visual verification, Figma comparison, style capture, and report generation.

**9 modules**

| Module | Description |
|--------|-------------|
| [스크린샷 주석 달기](#스크린샷-주석-달기) | 스크린샷에 라벨이 있는 경계 상자를 그려 차이점을 표시합니다 |
| [요소 스타일 캡처](#요소-스타일-캡처) | 브라우저 요소에서 계산된 스타일 캡처 |
| [스타일 비교](#스타일-비교) | 캡처한 스타일과 예상 값 비교 |
| [Figma 스타일 가져오기](#figma-스타일-가져오기) | Figma API에서 디자인 토큰 가져오기 (토큰은 로컬에 유지) |
| [보고서 생성](#보고서-생성) | HTML/JSON/Markdown 형식으로 검증 보고서 생성 |
| [규칙셋 불러오기](#규칙셋-불러오기) | YAML 파일에서 검증 규칙 불러오기 |
| [검증 실행](#검증-실행) | 전체 디자인 검증 실행: 캡처 → 비교 → 보고서 |
| [사양 검증 실행](#사양-검증-실행) | 동적 사양 검증 - YAML을 통해 모듈 구성 |
| [시각적 차이](#시각적-차이) | 참조 디자인과 개발 사이트를 시각적으로 비교하고 차이점을 주석으로 표시합니다 |

## Modules

### 스크린샷 주석 달기

`verify.annotate`

스크린샷에 라벨이 있는 경계 상자를 그려 차이점을 표시합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image_path` | string | Yes | - | 스크린샷 이미지 경로 |
| `annotations` | array | Yes | - | 주석 배열: [{label, x, y, width, height, color?, description?}] |
| `output_path` | string | No | - | 주석이 달린 이미지의 출력 경로 (기본값: _annotated 접미사 추가) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `output_path` | string | 주석이 달린 이미지 경로 |
| `annotation_count` | integer | 그려진 주석의 수 |

### 요소 스타일 캡처

`verify.capture`

브라우저 요소에서 계산된 스타일 캡처

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to capture from |
| `selector` | string | Yes | - | CSS selector |
| `wait_for` | string | No | - | Wait for selector before capture |
| `viewport_width` | number | No | `1280` | Viewport width |
| `viewport_height` | number | No | `800` | Viewport height |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `element` | object | Captured element with styles |
| `found` | boolean | Whether element was found |

### 스타일 비교

`verify.compare`

캡처한 스타일과 예상 값 비교

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | object | Yes | - | Captured element styles (from verify.capture) |
| `expected` | object | Yes | - | Expected styles to compare against |
| `selector` | string | No | - | Selector for reporting |
| `size_tolerance` | number | No | `2.0` | Tolerance for size (px) |
| `spacing_tolerance` | number | No | `2.0` | Tolerance for spacing (px) |
| `font_size_tolerance` | number | No | `1.0` | Tolerance for font size (px) |
| `color_tolerance` | number | No | `5` | Tolerance for color (0-255) |
| `check_typography` | boolean | No | `True` | Check typography |
| `check_colors` | boolean | No | `True` | Check colors |
| `check_spacing` | boolean | No | `True` | Check spacing |
| `check_sizing` | boolean | No | `False` | Check sizing |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Whether comparison passed |
| `violations` | array | List of violations found |
| `error_count` | number | Number of errors |
| `warning_count` | number | Number of warnings |

### Figma 스타일 가져오기

`verify.figma`

Figma API에서 디자인 토큰 가져오기 (토큰은 로컬에 유지)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `file_id` | string | Yes | - | Figma file key (from URL) |
| `node_id` | string | No | - | Specific node ID to fetch |
| `node_name` | string | No | - | Find node by name |
| `token` | string | No | - | Figma token (or use FIGMA_TOKEN env var) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `node` | object | Figma node data |
| `style` | object | Extracted style |

### 보고서 생성

`verify.report`

HTML/JSON/Markdown 형식으로 검증 보고서 생성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `results` | array | Yes | - | Comparison results from verify.compare |
| `name` | string | No | `verify-report` | Report name |
| `url` | string | No | - | URL that was verified |
| `format` | string | No | `html` | Output format (html, json, markdown, all) |
| `output_dir` | string | No | `./verify-reports` | Output directory |
| `screenshots` | array | No | - | Screenshot paths to include |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `report_path` | string | Path to generated report |
| `summary` | object | Summary statistics |

### 규칙셋 불러오기

`verify.ruleset`

YAML 파일에서 검증 규칙 불러오기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | Path to YAML ruleset file |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ruleset` | object | Parsed ruleset |
| `rules_count` | integer | Number of rules |

### 검증 실행

`verify.run`

전체 디자인 검증 실행: 캡처 → 비교 → 보고서

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `url` | string | Yes | - | URL to verify |
| `selectors` | array | No | - | CSS selectors to verify |
| `ruleset_path` | string | No | - | Path to YAML ruleset file |
| `expected_styles` | object | No | - | Expected styles per selector |
| `figma_file_id` | string | No | - | Figma file ID for comparison |
| `figma_token` | string | No | - | Figma token (or FIGMA_TOKEN env) |
| `figma_mapping` | object | No | - | Selector to Figma node mapping |
| `output_dir` | string | No | `./verify-reports` | Output directory |
| `report_format` | string | No | `html` | Report format |
| `take_screenshot` | boolean | No | `True` | Capture screenshot |
| `viewport_width` | number | No | `1280` | Viewport width |
| `viewport_height` | number | No | `800` | Viewport height |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Overall verification passed |
| `summary` | object | Summary statistics |
| `report_path` | string | Path to generated report |

**Example:** Example

```yaml
url: http://localhost:3000
selectors: ["button[type=\"submit\"]", "input[type=\"email\"]"]
```

**Example:** Example

```yaml
url: http://localhost:3000
selectors: ["button.primary"]
figma_file_id: abc123xyz
figma_mapping: {"button.primary": "Primary Button"}
```

**Example:** Example

```yaml
url: http://localhost:3000
ruleset_path: ./design-rules.yaml
```

### 사양 검증 실행

`verify.spec`

동적 사양 검증 - YAML을 통해 모듈 구성

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `ruleset_path` | string | No | - | Path to YAML ruleset file |
| `ruleset` | object | No | - | Inline ruleset object |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean |  |
| `summary` | object |  |
| `results` | array |  |

### 시각적 차이

`verify.visual_diff`

참조 디자인과 개발 사이트를 시각적으로 비교하고 차이점을 주석으로 표시합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `reference_url` | string | Yes | - | 참조 디자인의 URL 또는 로컬 이미지 경로 |
| `dev_url` | string | Yes | - | 비교할 개발 사이트의 URL |
| `output_dir` | string | No | `./verify-reports/visual-diff` | 보고서의 출력 디렉토리 |
| `focus_areas` | array | No | - | 집중할 영역 (예: ["헤더", "로그인 폼"]) |
| `viewport_width` | number | No | `1280` | 브라우저 뷰포트 너비 |
| `viewport_height` | number | No | `800` | 브라우저 뷰포트 높이 |
| `model` | string | No | `gpt-4o` | 사용할 비전 모델 |
| `api_key` | string | No | - | OpenAI API 키 (또는 OPENAI_API_KEY 환경 변수 사용) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `similarity_score` | number | 유사도 백분율 (0-100) |
| `annotations` | array | 주석이 달린 차이점 목록 |
| `annotated_image` | string | 주석이 달린 스크린샷 경로 |
| `report_path` | string | HTML 보고서 경로 |
| `summary` | string | 차이점 요약 |
