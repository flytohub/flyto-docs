# Markdown

Parse frontmatter, convert to HTML, and generate table of contents.

**3 modules**

| Module | Description |
|--------|-------------|
| [解析 Frontmatter](#解析-frontmatter) | 從 Markdown 內容中提取 YAML frontmatter |
| [Markdown 轉 HTML](#markdown-轉-html) | 將 Markdown 文字轉換為 HTML |
| [生成目錄](#生成目錄) | 從 Markdown 標題生成目錄 |

## Modules

### 解析 Frontmatter

`markdown.parse_frontmatter`

從 Markdown 內容中提取 YAML frontmatter

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 包含 frontmatter 的 Markdown 內容 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `frontmatter` | object | 解析後的 frontmatter 字典 |
| `content` | string | 不含 frontmatter 的 Markdown 內容 |

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

### Markdown 轉 HTML

`markdown.to_html`

將 Markdown 文字轉換為 HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 要轉換的 Markdown 內容 |
| `extensions` | array | No | - | 要啟用的 Markdown 擴充功能（僅用於 markdown 函式庫） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `html` | string | 轉換後的 HTML 內容 |
| `word_count` | number | 輸入文字的字數 |

**Example:** Convert markdown to HTML

```yaml
text: # Hello

This is **bold** and *italic*.
```

### 生成目錄

`markdown.toc`

從 Markdown 標題生成目錄

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 要提取標題的 Markdown 內容 |
| `max_depth` | number | No | `3` | 要包含的最大標題深度 (1-6) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `toc` | array | 包含層級、標題和 slug 的標題列表 |
| `toc_markdown` | string | 格式化的 Markdown 目錄 |

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
