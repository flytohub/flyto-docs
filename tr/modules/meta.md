# Meta

Module generation, listing, testing, and documentation.

**2 modules**

| Module | Description |
|--------|-------------|
| [Mevcut Modülleri Listele](#mevcut-modülleri-listele) | Kayıt defterindeki tüm mevcut modülleri listele |
| [Modül Dokümantasyonunu Güncelle](#modül-dokümantasyonunu-güncelle) | Kayıt defterinden MODULES.md dokümantasyonunu oluştur veya güncelle |

## Modules

### Mevcut Modülleri Listele

`meta.modules.list`

Kayıt defterindeki tüm mevcut modülleri listele

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `category` | string | No | - | Modülleri kategoriye göre filtrele (örn: browser, data, ai) |
| `tags` | array | No | - | Modülleri kategoriye göre filtrele (örn: browser, data, ai) |
| `include_params` | boolean | No | `True` | Modülleri etiketlere göre filtrele |
| `include_output` | boolean | No | `True` | Çıktıya parametre şemasını dahil et |
| `format` | select (`json`, `markdown`, `compact`) | No | `json` | Yanıta çıktı şemasını dahil et |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `modules` | array | Kayıtlı modüllerin listesi |
| `count` | number | Parametre şeması |
| `formatted` | string | Çıktı şeması |

**Example:** List all modules

```yaml
```

**Example:** List browser modules only

```yaml
category: browser
include_params: true
```

**Example:** List AI modules as markdown

```yaml
tags: ["ai", "llm"]
format: markdown
```

**Example:** Compact list for AI prompts

```yaml
format: compact
```

### Modül Dokümantasyonunu Güncelle

`meta.modules.update_docs`

Kayıt defterinden MODULES.md dokümantasyonunu oluştur veya güncelle

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `output_path` | string | No | `docs/MODULES.md` | MODULES.md dosyasının yazılacağı yol |
| `include_examples` | boolean | No | `True` | Dokümantasyona kullanım örnekleri dahil et |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `file_path` | string | Dokümantasyona kullanım örnekleri dahil et |
| `modules_count` | number | Dosya yolu |
| `categories` | array | Dosya yolu |

**Example:** Update module documentation

```yaml
output_path: docs/MODULES.md
```
