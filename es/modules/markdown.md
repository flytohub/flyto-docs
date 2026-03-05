# Markdown

Parse frontmatter, convert to HTML, and generate table of contents.

**3 modules**

| Module | Description |
|--------|-------------|
| [Analizar Frontmatter](#analizar-frontmatter) | Extrae frontmatter YAML del contenido Markdown |
| [Markdown a HTML](#markdown-a-html) | Convierte texto Markdown a HTML |
| [Generar tabla de contenidos](#generar-tabla-de-contenidos) | Genera una tabla de contenidos a partir de encabezados de Markdown |

## Modules

### Analizar Frontmatter

`markdown.parse_frontmatter`

Extrae frontmatter YAML del contenido Markdown

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Contenido Markdown con frontmatter |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `frontmatter` | object | Frontmatter analizado como un diccionario |
| `content` | string | Contenido Markdown sin frontmatter |

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

Convierte texto Markdown a HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Contenido Markdown para convertir |
| `extensions` | array | No | - | Extensiones de Markdown para habilitar (solo se usa con la biblioteca markdown) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `html` | string | Contenido HTML convertido |
| `word_count` | number | Conteo de palabras del texto de entrada |

**Example:** Convert markdown to HTML

```yaml
text: # Hello

This is **bold** and *italic*.
```

### Generar tabla de contenidos

`markdown.toc`

Genera una tabla de contenidos a partir de encabezados de Markdown

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Contenido Markdown para extraer encabezados |
| `max_depth` | number | No | `3` | Profundidad máxima de encabezado a incluir (1-6) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `toc` | array | Lista de encabezados con nivel, título y slug |
| `toc_markdown` | string | Tabla de contenidos en Markdown formateada |

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
