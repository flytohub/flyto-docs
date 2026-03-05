# Markdown

Parse frontmatter, convert to HTML, and generate table of contents.

**3 modules**

| Module | Description |
|--------|-------------|
| [Analisar Frontmatter](#analisar-frontmatter) | Extrair frontmatter YAML do conteúdo Markdown |
| [Markdown para HTML](#markdown-para-html) | Converter texto Markdown para HTML |
| [Gerar Sumário](#gerar-sumário) | Gerar um sumário a partir dos cabeçalhos do Markdown |

## Modules

### Analisar Frontmatter

`markdown.parse_frontmatter`

Extrair frontmatter YAML do conteúdo Markdown

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Conteúdo Markdown com frontmatter |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `frontmatter` | object | Frontmatter analisado como um dicionário |
| `content` | string | Conteúdo Markdown sem frontmatter |

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

### Markdown para HTML

`markdown.to_html`

Converter texto Markdown para HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Conteúdo Markdown para converter |
| `extensions` | array | No | - | Extensões Markdown para habilitar (usadas apenas com a biblioteca markdown) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `html` | string | Conteúdo HTML convertido |
| `word_count` | number | Contagem de palavras do texto de entrada |

**Example:** Convert markdown to HTML

```yaml
text: # Hello

This is **bold** and *italic*.
```

### Gerar Sumário

`markdown.toc`

Gerar um sumário a partir dos cabeçalhos do Markdown

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Conteúdo Markdown para extrair cabeçalhos |
| `max_depth` | number | No | `3` | Profundidade máxima do cabeçalho a incluir (1-6) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `toc` | array | Lista de cabeçalhos com nível, título e slug |
| `toc_markdown` | string | Sumário formatado em Markdown |

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
