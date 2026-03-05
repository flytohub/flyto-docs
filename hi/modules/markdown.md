# Markdown

Parse frontmatter, convert to HTML, and generate table of contents.

**3 modules**

| Module | Description |
|--------|-------------|
| [फ्रंटमैटर पार्स करें](#फ्रंटमैटर-पार्स-करें) | Markdown सामग्री से YAML फ्रंटमैटर निकालें |
| [Markdown से HTML](#markdown-से-html) | Markdown पाठ को HTML में बदलें |
| [सामग्री की तालिका बनाएं](#सामग्री-की-तालिका-बनाएं) | Markdown शीर्षकों से सामग्री की तालिका बनाएं |

## Modules

### फ्रंटमैटर पार्स करें

`markdown.parse_frontmatter`

Markdown सामग्री से YAML फ्रंटमैटर निकालें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | फ्रंटमैटर के साथ Markdown सामग्री |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `frontmatter` | object | डिक्शनरी के रूप में पार्स किया गया फ्रंटमैटर |
| `content` | string | फ्रंटमैटर के बिना Markdown सामग्री |

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

### Markdown से HTML

`markdown.to_html`

Markdown पाठ को HTML में बदलें

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | बदलने के लिए Markdown सामग्री |
| `extensions` | array | No | - | Markdown विस्तार सक्षम करने के लिए (केवल markdown लाइब्रेरी के साथ उपयोग किया जाता है) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `html` | string | बदला हुआ HTML सामग्री |
| `word_count` | number | इनपुट पाठ की शब्द गणना |

**Example:** Convert markdown to HTML

```yaml
text: # Hello

This is **bold** and *italic*.
```

### सामग्री की तालिका बनाएं

`markdown.toc`

Markdown शीर्षकों से सामग्री की तालिका बनाएं

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | शीर्षक निकालने के लिए Markdown सामग्री |
| `max_depth` | number | No | `3` | शामिल करने के लिए अधिकतम शीर्षक गहराई (1-6) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `toc` | array | स्तर, शीर्षक, और स्लग के साथ शीर्षकों की सूची |
| `toc_markdown` | string | स्वरूपित Markdown सामग्री की तालिका |

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
