# Markdown

Parse frontmatter, convert to HTML, and generate table of contents.

**3 modules**

| Module | Description |
|--------|-------------|
| [Mengurai Frontmatter](#mengurai-frontmatter) | Ekstrak frontmatter YAML dari konten Markdown |
| [Markdown ke HTML](#markdown-ke-html) | Ubah teks Markdown ke HTML |
| [Buat Daftar Isi](#buat-daftar-isi) | Buat daftar isi dari judul-judul Markdown |

## Modules

### Mengurai Frontmatter

`markdown.parse_frontmatter`

Ekstrak frontmatter YAML dari konten Markdown

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Konten Markdown dengan frontmatter |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `frontmatter` | object | Frontmatter yang telah di-parse sebagai kamus |
| `content` | string | Konten Markdown tanpa frontmatter |

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

### Markdown ke HTML

`markdown.to_html`

Ubah teks Markdown ke HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Konten Markdown untuk diubah |
| `extensions` | array | No | - | Ekstensi Markdown yang diaktifkan (hanya digunakan dengan pustaka markdown) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `html` | string | Konten HTML yang telah diubah |
| `word_count` | number | Jumlah kata dari teks input |

**Example:** Convert markdown to HTML

```yaml
text: # Hello

This is **bold** and *italic*.
```

### Buat Daftar Isi

`markdown.toc`

Buat daftar isi dari judul-judul Markdown

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Konten Markdown untuk mengekstrak judul |
| `max_depth` | number | No | `3` | Kedalaman judul maksimum yang disertakan (1-6) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `toc` | array | Daftar judul dengan level, judul, dan slug |
| `toc_markdown` | string | Daftar isi Markdown yang diformat |

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
