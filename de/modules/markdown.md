# Markdown

Parse frontmatter, convert to HTML, and generate table of contents.

**3 modules**

| Module | Description |
|--------|-------------|
| [Frontmatter parsen](#frontmatter-parsen) | YAML-Frontmatter aus Markdown-Inhalt extrahieren |
| [Markdown zu HTML](#markdown-zu-html) | Markdown-Text in HTML umwandeln |
| [Inhaltsverzeichnis erstellen](#inhaltsverzeichnis-erstellen) | Ein Inhaltsverzeichnis aus Markdown-Überschriften erstellen |

## Modules

### Frontmatter parsen

`markdown.parse_frontmatter`

YAML-Frontmatter aus Markdown-Inhalt extrahieren

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Markdown-Inhalt mit Frontmatter |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `frontmatter` | object | Geparstes Frontmatter als Wörterbuch |
| `content` | string | Markdown-Inhalt ohne Frontmatter |

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

### Markdown zu HTML

`markdown.to_html`

Markdown-Text in HTML umwandeln

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Markdown-Inhalt zum Konvertieren |
| `extensions` | array | No | - | Markdown-Erweiterungen aktivieren (nur mit der Markdown-Bibliothek verwendet) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `html` | string | Konvertierter HTML-Inhalt |
| `word_count` | number | Wortanzahl des Eingabetextes |

**Example:** Convert markdown to HTML

```yaml
text: # Hello

This is **bold** and *italic*.
```

### Inhaltsverzeichnis erstellen

`markdown.toc`

Ein Inhaltsverzeichnis aus Markdown-Überschriften erstellen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Markdown-Inhalt, um Überschriften zu extrahieren |
| `max_depth` | number | No | `3` | Maximale Überschriftentiefe (1-6) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `toc` | array | Liste der Überschriften mit Ebene, Titel und Slug |
| `toc_markdown` | string | Formatiertes Markdown-Inhaltsverzeichnis |

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
