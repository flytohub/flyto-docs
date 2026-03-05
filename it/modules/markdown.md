# Markdown

Parse frontmatter, convert to HTML, and generate table of contents.

**3 modules**

| Module | Description |
|--------|-------------|
| [Analizza Frontmatter](#analizza-frontmatter) | Estrai frontmatter YAML dal contenuto Markdown |
| [Markdown a HTML](#markdown-a-html) | Converti testo Markdown in HTML |
| [Genera Indice](#genera-indice) | Genera un indice dai titoli Markdown |

## Modules

### Analizza Frontmatter

`markdown.parse_frontmatter`

Estrai frontmatter YAML dal contenuto Markdown

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Contenuto Markdown con frontmatter |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `frontmatter` | object | Frontmatter analizzato come dizionario |
| `content` | string | Contenuto Markdown senza frontmatter |

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

### Markdown a HTML

`markdown.to_html`

Converti testo Markdown in HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Contenuto Markdown da convertire |
| `extensions` | array | No | - | Estensioni Markdown da abilitare (usate solo con la libreria markdown) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `html` | string | Contenuto HTML convertito |
| `word_count` | number | Conteggio parole del testo di input |

**Example:** Convert markdown to HTML

```yaml
text: # Hello

This is **bold** and *italic*.
```

### Genera Indice

`markdown.toc`

Genera un indice dai titoli Markdown

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Contenuto Markdown da cui estrarre i titoli |
| `max_depth` | number | No | `3` | Profondità massima dei titoli da includere (1-6) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `toc` | array | Elenco di titoli con livello, titolo e slug |
| `toc_markdown` | string | Indice formattato in Markdown |

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
