# Markdown

Parse frontmatter, convert to HTML, and generate table of contents.

**3 modules**

| Module | Description |
|--------|-------------|
| [Phân tích Frontmatter](#phân-tích-frontmatter) | Trích xuất YAML frontmatter từ nội dung Markdown |
| [Markdown sang HTML](#markdown-sang-html) | Chuyển đổi văn bản Markdown sang HTML |
| [Tạo Mục lục](#tạo-mục-lục) | Tạo mục lục từ các tiêu đề trong Markdown |

## Modules

### Phân tích Frontmatter

`markdown.parse_frontmatter`

Trích xuất YAML frontmatter từ nội dung Markdown

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Nội dung Markdown có frontmatter |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `frontmatter` | object | Frontmatter đã phân tích dưới dạng từ điển |
| `content` | string | Nội dung Markdown không có frontmatter |

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

### Markdown sang HTML

`markdown.to_html`

Chuyển đổi văn bản Markdown sang HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Nội dung Markdown để chuyển đổi |
| `extensions` | array | No | - | Tiện ích mở rộng Markdown để kích hoạt (chỉ dùng với thư viện markdown) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `html` | string | Nội dung HTML đã chuyển đổi |
| `word_count` | number | Số từ của văn bản đầu vào |

**Example:** Convert markdown to HTML

```yaml
text: # Hello

This is **bold** and *italic*.
```

### Tạo Mục lục

`markdown.toc`

Tạo mục lục từ các tiêu đề trong Markdown

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Nội dung Markdown để trích xuất tiêu đề |
| `max_depth` | number | No | `3` | Độ sâu tiêu đề tối đa để bao gồm (1-6) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `toc` | array | Danh sách tiêu đề với cấp độ, tiêu đề và slug |
| `toc_markdown` | string | Mục lục Markdown đã định dạng |

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
