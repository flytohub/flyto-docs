# Markdown

Parse frontmatter, convert to HTML, and generate table of contents.

**3 modules**

| Module | Description |
|--------|-------------|
| [Ön Maddeyi Ayrıştır](#ön-maddeyi-ayrıştır) | Markdown içeriğinden YAML ön maddeyi çıkar |
| [Markdown'dan HTML'ye](#markdown'dan-html'ye) | Markdown metnini HTML'ye dönüştür |
| [İçindekiler Tablosu Oluştur](#i̇çindekiler-tablosu-oluştur) | Markdown başlıklarından içindekiler tablosu oluştur |

## Modules

### Ön Maddeyi Ayrıştır

`markdown.parse_frontmatter`

Markdown içeriğinden YAML ön maddeyi çıkar

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Ön madde içeren Markdown içeriği |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `frontmatter` | object | Sözlük olarak ayrıştırılmış ön madde |
| `content` | string | Ön madde olmadan Markdown içeriği |

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

### Markdown'dan HTML'ye

`markdown.to_html`

Markdown metnini HTML'ye dönüştür

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Dönüştürülecek Markdown içeriği |
| `extensions` | array | No | - | Etkinleştirilecek Markdown uzantıları (sadece markdown kütüphanesi ile kullanılır) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `html` | string | Dönüştürülmüş HTML içeriği |
| `word_count` | number | Girdi metninin kelime sayısı |

**Example:** Convert markdown to HTML

```yaml
text: # Hello

This is **bold** and *italic*.
```

### İçindekiler Tablosu Oluştur

`markdown.toc`

Markdown başlıklarından içindekiler tablosu oluştur

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | Başlıkları çıkarmak için Markdown içeriği |
| `max_depth` | number | No | `3` | Dahil edilecek maksimum başlık derinliği (1-6) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `toc` | array | Seviye, başlık ve slug ile başlık listesi |
| `toc_markdown` | string | Biçimlendirilmiş Markdown içindekiler tablosu |

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
