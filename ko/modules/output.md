# Output

Universal display and inspect node for debugging and workflow I/O.

**1 modules**

| Module | Description |
|--------|-------------|
| [Display Output](#display-output) | Universal inspect/display/IO node — debug data, render output, or define workflow I/O |

## Modules

### Display Output

`output.display`

Universal inspect/display/IO node — debug data, render output, or define workflow I/O

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `type` | select (`auto`, `image`, `text`, `json`, `html`, `pdf`, `file`) | No | `auto` | Display type (auto-detected if not specified) |
| `content` | string | Yes | - | Content to display (data URI, text, JSON, or HTML) |
| `title` | string | No | - | Optional title for the display item |
| `mode` | select (`display`, `output`, `input`) | No | `display` | Node mode: display for inspection, output for workflow results, input for receiving data |
| `output_key` | string | No | `result` | Key name when used as workflow output |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `type` | string | Resolved display type |
| `title` | string | Display title |
| `content` | ['string', 'object', 'array'] | Display content |
| `mode` | string | Node mode (display/output/input) |
| `validation_warning` | string | Content validation warning (if any) |

**Example:** Display an image

```yaml
type: image
content: data:image/png;base64,...
title: Generated Image
```

**Example:** Display text

```yaml
type: text
content: Hello World
title: Result
```

**Example:** Display JSON data

```yaml
type: json
content: {"name": "test", "value": 42}
title: API Response
```

**Example:** Workflow output

```yaml
type: auto
content: ${step.output}
mode: output
output_key: result
```
