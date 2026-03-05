# Markdown

Parse frontmatter, convert to HTML, and generate table of contents.

**3 modules**

| Module | Description |
|--------|-------------|
| [Frontmatter 파싱](#frontmatter-파싱) | Markdown 내용에서 YAML frontmatter를 추출합니다 |
| [Markdown을 HTML로](#markdown을-html로) | Markdown 텍스트를 HTML로 변환합니다 |
| [목차 생성](#목차-생성) | Markdown 제목에서 목차를 생성합니다 |

## Modules

### Frontmatter 파싱

`markdown.parse_frontmatter`

Markdown 내용에서 YAML frontmatter를 추출합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | frontmatter가 포함된 Markdown 내용 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `frontmatter` | object | 사전 형식으로 파싱된 frontmatter |
| `content` | string | frontmatter가 제거된 Markdown 내용 |

**Example:** Parse YAML frontmatter

```yaml
text: ---
title: Hello World
date: 2024-01-01
tags:
  - python
  - markdown
---

# Hello World

Content here.
```

### Markdown을 HTML로

`markdown.to_html`

Markdown 텍스트를 HTML로 변환합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 변환할 Markdown 내용 |
| `extensions` | array | No | - | 활성화할 Markdown 확장 기능 (markdown 라이브러리에서만 사용) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `html` | string | 변환된 HTML 내용 |
| `word_count` | number | 입력 텍스트의 단어 수 |

**Example:** Convert markdown to HTML

```yaml
text: # Hello

This is **bold** and *italic*.
```

### 목차 생성

`markdown.toc`

Markdown 제목에서 목차를 생성합니다

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 제목을 추출할 Markdown 내용 |
| `max_depth` | number | No | `3` | 포함할 최대 제목 깊이 (1-6) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `toc` | array | 레벨, 제목, 슬러그가 포함된 제목 목록 |
| `toc_markdown` | string | 형식화된 Markdown 목차 |

**Example:** Generate TOC from markdown

```yaml
text: # Introduction

## Getting Started

### Installation

### Configuration

## Usage

## API Reference
max_depth: 3
```
