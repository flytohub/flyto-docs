# Analysis

HTML analysis modules for readability, forms, tables, and metadata extraction.

**6 modules**

| Module | Description |
|--------|-------------|
| [HTML 가독성](#html-가독성) | 콘텐츠 가독성 분석 |
| [폼 추출](#폼-추출) | HTML에서 폼 데이터 추출 |
| [메타데이터 추출](#메타데이터-추출) | HTML에서 메타데이터 추출 |
| [테이블 추출](#테이블-추출) | HTML에서 테이블 데이터 추출 |
| [패턴 찾기](#패턴-찾기) | HTML에서 반복되는 데이터 패턴 찾기 |
| [HTML 구조](#html-구조) | HTML DOM 구조 분석 |

## Modules

### HTML 가독성

`analysis.html.analyze_readability`

콘텐츠 가독성 분석

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### 폼 추출

`analysis.html.extract_forms`

HTML에서 폼 데이터 추출

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### 메타데이터 추출

`analysis.html.extract_metadata`

HTML에서 메타데이터 추출

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### 테이블 추출

`analysis.html.extract_tables`

HTML에서 테이블 데이터 추출

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### 패턴 찾기

`analysis.html.find_patterns`

HTML에서 반복되는 데이터 패턴 찾기

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |

### HTML 구조

`analysis.html.structure`

HTML DOM 구조 분석

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `html` | string | Yes | - | HTML content to analyze |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | any | object |
| `properties` | any |  |
