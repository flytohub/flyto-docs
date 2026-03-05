# Markdown

Parse frontmatter, convert to HTML, and generate table of contents.

**3 modules**

| Module | Description |
|--------|-------------|
| [Analizuj Frontmatter](#analizuj-frontmatter) | Wyodrębnij frontmatter YAML z treści Markdown |
| [Markdown na HTML](#markdown-na-html) | Konwertuj tekst Markdown na HTML |
| [Generuj spis treści](#generuj-spis-treści) | Generuj spis treści z nagłówków Markdown |

## Modules

### Analizuj Frontmatter

`markdown.parse_frontmatter`

Wyodrębnij frontmatter YAML z treści Markdown

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Treść Markdown z frontmatter |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `frontmatter` | object | Przeanalizowany frontmatter jako słownik |
| `content` | string | Treść Markdown bez frontmatter |

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

### Markdown na HTML

`markdown.to_html`

Konwertuj tekst Markdown na HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Treść Markdown do konwersji |
| `extensions` | array | No | - | Rozszerzenia Markdown do włączenia (używane tylko z biblioteką markdown) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `html` | string | Przekonwertowana treść HTML |
| `word_count` | number | Liczba słów w tekście wejściowym |

**Example:** Convert markdown to HTML

```yaml
text: # Hello

This is **bold** and *italic*.
```

### Generuj spis treści

`markdown.toc`

Generuj spis treści z nagłówków Markdown

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Treść Markdown do wyodrębnienia nagłówków |
| `max_depth` | number | No | `3` | Maksymalna głębokość nagłówka do uwzględnienia (1-6) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `toc` | array | Lista nagłówków z poziomem, tytułem i slugiem |
| `toc_markdown` | string | Sformatowany spis treści w Markdown |

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
