# Markdown

Parse frontmatter, convert to HTML, and generate table of contents.

**3 modules**

| Module | Description |
|--------|-------------|
| [แยกวิเคราะห์ Frontmatter](#แยกวิเคราะห์-frontmatter) | ดึง YAML frontmatter จากเนื้อหา Markdown |
| [Markdown เป็น HTML](#markdown-เป็น-html) | แปลงข้อความ Markdown เป็น HTML |
| [สร้างสารบัญ](#สร้างสารบัญ) | สร้างสารบัญจากหัวข้อใน Markdown |

## Modules

### แยกวิเคราะห์ Frontmatter

`markdown.parse_frontmatter`

ดึง YAML frontmatter จากเนื้อหา Markdown

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | เนื้อหา Markdown ที่มี frontmatter |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `frontmatter` | object | frontmatter ที่แยกวิเคราะห์แล้วในรูปแบบพจนานุกรม |
| `content` | string | เนื้อหา Markdown ที่ไม่มี frontmatter |

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

### Markdown เป็น HTML

`markdown.to_html`

แปลงข้อความ Markdown เป็น HTML

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | เนื้อหา Markdown ที่จะแปลง |
| `extensions` | array | No | - | ส่วนขยาย Markdown ที่จะเปิดใช้งาน (ใช้กับไลบรารี markdown เท่านั้น) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `html` | string | เนื้อหา HTML ที่แปลงแล้ว |
| `word_count` | number | จำนวนคำของข้อความที่ป้อน |

**Example:** Convert markdown to HTML

```yaml
text: # Hello

This is **bold** and *italic*.
```

### สร้างสารบัญ

`markdown.toc`

สร้างสารบัญจากหัวข้อใน Markdown

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `text` | string | Yes | - | เนื้อหา Markdown ที่จะดึงหัวข้อออกมา |
| `max_depth` | number | No | `3` | ความลึกของหัวข้อสูงสุดที่รวม (1-6) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `toc` | array | รายการหัวข้อพร้อมระดับ ชื่อ และ slug |
| `toc_markdown` | string | สารบัญในรูปแบบ Markdown |

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
