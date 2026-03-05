# Markdown

Parse frontmatter, convert to HTML, and generate table of contents.

**3 modules**

| Module | Description |
|--------|-------------|
| [フロントマターを解析](#フロントマターを解析) | MarkdownコンテンツからYAMLフロントマターを抽出 |
| [MarkdownをHTMLに変換](#markdownをhtmlに変換) | MarkdownテキストをHTMLに変換 |
| [目次を生成](#目次を生成) | Markdownの見出しから目次を生成 |

## Modules

### フロントマターを解析

`markdown.parse_frontmatter`

MarkdownコンテンツからYAMLフロントマターを抽出

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | フロントマター付きのMarkdownコンテンツ |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `frontmatter` | object | 辞書として解析されたフロントマター |
| `content` | string | フロントマターなしのMarkdownコンテンツ |

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

### MarkdownをHTMLに変換

`markdown.to_html`

MarkdownテキストをHTMLに変換

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 変換するMarkdownコンテンツ |
| `extensions` | array | No | - | 有効にするMarkdown拡張機能（markdownライブラリでのみ使用） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `html` | string | 変換されたHTMLコンテンツ |
| `word_count` | number | 入力テキストの単語数 |

**Example:** Convert markdown to HTML

```yaml
text: # Hello

This is **bold** and *italic*.
```

### 目次を生成

`markdown.toc`

Markdownの見出しから目次を生成

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | 見出しを抽出するMarkdownコンテンツ |
| `max_depth` | number | No | `3` | 含める見出しの最大深度（1-6） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `toc` | array | レベル、タイトル、スラッグ付きの見出しリスト |
| `toc_markdown` | string | フォーマット済みMarkdown目次 |

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
