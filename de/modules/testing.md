# Testing

Assertion utilities: equal, contains, length, true, not null, greater than.

**6 modules**

| Module | Description |
|--------|-------------|
| [Enthält bestätigen](#enthält-bestätigen) | Bestätigen, dass eine Sammlung einen Wert enthält |
| [Gleichheit bestätigen](#gleichheit-bestätigen) | Bestätigen, dass zwei Werte gleich sind |
| [Größer als bestätigen](#größer-als-bestätigen) | Bestätigen, dass ein Wert größer als ein anderer ist |
| [Länge bestätigen](#länge-bestätigen) | Bestätigen, dass eine Sammlung die erwartete Länge hat |
| [Nicht null bestätigen](#nicht-null-bestätigen) | Bestätigen, dass ein Wert nicht null oder undefiniert ist |
| [Wahr bestätigen](#wahr-bestätigen) | Bestätigen, dass eine Bedingung wahr ist |

## Modules

### Enthält bestätigen

`test.assert_contains`

Bestätigen, dass eine Sammlung einen Wert enthält

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Sammlung zum Durchsuchen |
| `value` | ['string', 'number', 'boolean'] | Yes | - | Sammlung zum Durchsuchen |
| `message` | string | No | - | Zu findender Wert |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Benutzerdefinierte Fehlermeldung |
| `collection` | ['array', 'string'] | Ob Bestätigung bestanden wurde |
| `value` | ['string', 'number', 'boolean'] | Bestätigen, dass eine Sammlung einen Wert enthält |
| `message` | string | Bestätigen, dass eine Sammlung einen Wert enthält |

### Gleichheit bestätigen

`test.assert_equal`

Bestätigen, dass zwei Werte gleich sind

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Tatsächlicher Wert |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Tatsächlicher Wert |
| `message` | string | No | - | Erwarteter Wert |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Benutzerdefinierte Fehlermeldung |
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Ob Bestätigung bestanden wurde |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Bestätigen, dass zwei Werte gleich sind |
| `message` | string | Bestätigen, dass zwei Werte gleich sind |

### Größer als bestätigen

`test.assert_greater_than`

Bestätigen, dass ein Wert größer als ein anderer ist

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | number | Yes | - | Tatsächlicher Wert |
| `threshold` | number | Yes | - | Tatsächlicher Wert |
| `message` | string | No | - | Schwellenwert |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Benutzerdefinierte Fehlermeldung |
| `actual` | number | Ob Bestätigung bestanden wurde |
| `threshold` | number | Bestätigen, dass ein Wert größer als ein anderer ist |
| `message` | string | Bestätigen, dass ein Wert größer als ein anderer ist |

### Länge bestätigen

`test.assert_length`

Bestätigen, dass eine Sammlung die erwartete Länge hat

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Zu prüfende Sammlung |
| `expected_length` | number | Yes | - | Zu prüfende Sammlung |
| `message` | string | No | - | Erwartete Länge |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Benutzerdefinierte Fehlermeldung |
| `actual_length` | number | Benutzerdefinierte Fehlermeldung |
| `expected_length` | number | Bestätigen, dass eine Sammlung die erwartete Länge hat |
| `message` | string | Bestätigen, dass eine Sammlung die erwartete Länge hat |

### Nicht null bestätigen

`test.assert_not_null`

Bestätigen, dass ein Wert nicht null oder undefiniert ist

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | ['string', 'number', 'boolean', 'object', 'array', 'null'] | Yes | - | Zu prüfender Wert |
| `message` | string | No | - | Zu prüfender Wert |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Bestätigen, dass ein Wert nicht null oder undefiniert ist |
| `message` | string | Bestätigen, dass ein Wert nicht null oder undefiniert ist |

### Wahr bestätigen

`test.assert_true`

Bestätigen, dass eine Bedingung wahr ist

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | boolean | Yes | - | Zu prüfende Bedingung |
| `message` | string | No | - | Zu prüfende Bedingung |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Bestätigen, dass eine Bedingung wahr ist |
| `message` | string | Bestätigen, dass eine Bedingung wahr ist |
