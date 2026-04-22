# Markdown

Parse frontmatter, convert to HTML, and generate table of contents.

**3 modules**

| Module | Description |
|--------|-------------|
| [Parse Frontmatter](#parse-frontmatter) | Extract YAML frontmatter from Markdown content |
| [Markdown to HTML](#markdown-to-html) | Convert Markdown text to HTML |
| [Generate Table of Contents](#generate-table-of-contents) | Generate a table of contents from Markdown headings |

## Modules

### Parse Frontmatter

`markdown.parse_frontmatter`

Extract YAML frontmatter from Markdown content

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Markdown content with frontmatter |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `frontmatter` | object | Parsed frontmatter as a dictionary |
| `content` | string | Markdown content without frontmatter |

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

### Markdown to HTML

`markdown.to_html`

Convert Markdown text to HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Markdown content to convert |
| `extensions` | array | No | - | Markdown extensions to enable (only used with the markdown library) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `html` | string | Converted HTML content |
| `word_count` | number | Word count of the input text |

**Example:** Convert markdown to HTML

```yaml
text: # Hello

This is **bold** and *italic*.
```

### Generate Table of Contents

`markdown.toc`

Generate a table of contents from Markdown headings

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Markdown content to extract headings from |
| `max_depth` | number | No | `3` | Maximum heading depth to include (1-6) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `toc` | array | List of headings with level, title, and slug |
| `toc_markdown` | string | Formatted Markdown table of contents |

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
