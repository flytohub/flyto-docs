# Markdown

Parse frontmatter, convert to HTML, and generate table of contents.

**3 modules**

| Module | Description |
|--------|-------------|
| [Analyser le Frontmatter](#analyser-le-frontmatter) | Extraire le frontmatter YAML du contenu Markdown |
| [Markdown en HTML](#markdown-en-html) | Convertir le texte Markdown en HTML |
| [Générer la table des matières](#générer-la-table-des-matières) | Générer une table des matières à partir des titres Markdown |

## Modules

### Analyser le Frontmatter

`markdown.parse_frontmatter`

Extraire le frontmatter YAML du contenu Markdown

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Contenu Markdown avec frontmatter |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `frontmatter` | object | Frontmatter analysé sous forme de dictionnaire |
| `content` | string | Contenu Markdown sans frontmatter |

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

### Markdown en HTML

`markdown.to_html`

Convertir le texte Markdown en HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Contenu Markdown à convertir |
| `extensions` | array | No | - | Extensions Markdown à activer (utilisées uniquement avec la bibliothèque markdown) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `html` | string | Contenu HTML converti |
| `word_count` | number | Nombre de mots du texte d'entrée |

**Example:** Convert markdown to HTML

```yaml
text: # Hello

This is **bold** and *italic*.
```

### Générer la table des matières

`markdown.toc`

Générer une table des matières à partir des titres Markdown

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Contenu Markdown pour extraire les titres |
| `max_depth` | number | No | `3` | Profondeur maximale des titres à inclure (1-6) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `toc` | array | Liste des titres avec niveau, titre et identifiant |
| `toc_markdown` | string | Table des matières formatée en Markdown |

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
