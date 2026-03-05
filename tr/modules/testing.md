# Testing

Assertion utilities: equal, contains, length, true, not null, greater than.

**6 modules**

| Module | Description |
|--------|-------------|
| [İçerme Doğrula](#i̇çerme-doğrula) | Koleksiyonun bir değer içerdiğini doğrula |
| [Eşitlik Doğrula](#eşitlik-doğrula) | İki değerin eşit olduğunu doğrula |
| [Büyüklük Doğrula](#büyüklük-doğrula) | Değerin başka bir değerden büyük olduğunu doğrula |
| [Uzunluk Doğrula](#uzunluk-doğrula) | Koleksiyonun beklenen uzunluğa sahip olduğunu doğrula |
| [Null Olmama Doğrula](#null-olmama-doğrula) | Değerin null veya undefined olmadığını doğrula |
| [Doğruluk Doğrula](#doğruluk-doğrula) | Koşulun doğru olduğunu doğrula |

## Modules

### İçerme Doğrula

`test.assert_contains`

Koleksiyonun bir değer içerdiğini doğrula

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Aranacak koleksiyon |
| `value` | ['string', 'number', 'boolean'] | Yes | - | Aranacak koleksiyon |
| `message` | string | No | - | Bulunacak değer |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Özel hata mesajı |
| `collection` | ['array', 'string'] | Doğrulama geçti mi |
| `value` | ['string', 'number', 'boolean'] | Koleksiyonun bir değer içerdiğini doğrula |
| `message` | string | Koleksiyonun bir değer içerdiğini doğrula |

### Eşitlik Doğrula

`test.assert_equal`

İki değerin eşit olduğunu doğrula

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Gerçek değer |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Gerçek değer |
| `message` | string | No | - | Beklenen değer |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Özel hata mesajı |
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Doğrulama geçti mi |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | İki değerin eşit olduğunu doğrula |
| `message` | string | İki değerin eşit olduğunu doğrula |

### Büyüklük Doğrula

`test.assert_greater_than`

Değerin başka bir değerden büyük olduğunu doğrula

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | number | Yes | - | Gerçek değer |
| `threshold` | number | Yes | - | Gerçek değer |
| `message` | string | No | - | Eşik değeri |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Özel hata mesajı |
| `actual` | number | Doğrulama geçti mi |
| `threshold` | number | Değerin başka bir değerden büyük olduğunu doğrula |
| `message` | string | Değerin başka bir değerden büyük olduğunu doğrula |

### Uzunluk Doğrula

`test.assert_length`

Koleksiyonun beklenen uzunluğa sahip olduğunu doğrula

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Kontrol edilecek koleksiyon |
| `expected_length` | number | Yes | - | Kontrol edilecek koleksiyon |
| `message` | string | No | - | Beklenen uzunluk |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Özel hata mesajı |
| `actual_length` | number | Özel hata mesajı |
| `expected_length` | number | Koleksiyonun beklenen uzunluğa sahip olduğunu doğrula |
| `message` | string | Koleksiyonun beklenen uzunluğa sahip olduğunu doğrula |

### Null Olmama Doğrula

`test.assert_not_null`

Değerin null veya undefined olmadığını doğrula

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | ['string', 'number', 'boolean', 'object', 'array', 'null'] | Yes | - | Kontrol edilecek değer |
| `message` | string | No | - | Kontrol edilecek değer |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Değerin null veya undefined olmadığını doğrula |
| `message` | string | Değerin null veya undefined olmadığını doğrula |

### Doğruluk Doğrula

`test.assert_true`

Koşulun doğru olduğunu doğrula

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | boolean | Yes | - | Kontrol edilecek koşul |
| `message` | string | No | - | Kontrol edilecek koşul |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Koşulun doğru olduğunu doğrula |
| `message` | string | Koşulun doğru olduğunu doğrula |
