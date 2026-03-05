# Cache

In-memory key-value cache with TTL support.

**4 modules**

| Module | Description |
|--------|-------------|
| [Wyczyść pamięć podręczną](#wyczyść-pamięć-podręczną) | Wyczyść wszystkie wpisy z pamięci podręcznej lub filtruj według wzorca |
| [Usuń z pamięci podręcznej](#usuń-z-pamięci-podręcznej) | Usuń wpis z pamięci podręcznej za pomocą klucza |
| [Pobierz z pamięci podręcznej](#pobierz-z-pamięci-podręcznej) | Pobierz wartość z pamięci podręcznej za pomocą klucza |
| [Ustaw w pamięci podręcznej](#ustaw-w-pamięci-podręcznej) | Ustaw wartość w pamięci podręcznej z opcjonalnym TTL |

## Modules

### Wyczyść pamięć podręczną

`cache.clear`

Wyczyść wszystkie wpisy z pamięci podręcznej lub filtruj według wzorca

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `pattern` | string | No | `*` | Wzorzec glob do dopasowania kluczy (np. "user:*", domyślnie "*" usuwa wszystko) |
| `backend` | string | No | `memory` | Backend pamięci podręcznej do użycia |
| `redis_url` | string | No | `redis://localhost:6379` | URL połączenia Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `cleared_count` | number | Liczba usuniętych wpisów z pamięci podręcznej |
| `backend` | string | Używany backend |

### Usuń z pamięci podręcznej

`cache.delete`

Usuń wpis z pamięci podręcznej za pomocą klucza

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | Klucz pamięci podręcznej do usunięcia |
| `backend` | string | No | `memory` | Backend pamięci podręcznej do użycia |
| `redis_url` | string | No | `redis://localhost:6379` | URL połączenia Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | Klucz pamięci podręcznej |
| `deleted` | boolean | Czy klucz został znaleziony i usunięty |
| `backend` | string | Używany backend |

### Pobierz z pamięci podręcznej

`cache.get`

Pobierz wartość z pamięci podręcznej za pomocą klucza

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | Klucz pamięci podręcznej do wyszukania |
| `backend` | string | No | `memory` | Backend pamięci podręcznej do użycia |
| `redis_url` | string | No | `redis://localhost:6379` | URL połączenia Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | Klucz pamięci podręcznej |
| `value` | any | Wartość z pamięci podręcznej (null jeśli nie znaleziono) |
| `hit` | boolean | Czy klucz został znaleziony w pamięci podręcznej |
| `backend` | string | Używany backend |

### Ustaw w pamięci podręcznej

`cache.set`

Ustaw wartość w pamięci podręcznej z opcjonalnym TTL

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `key` | string | Yes | - | Klucz pamięci podręcznej do przechowywania wartości |
| `value` | string | Yes | - | Wartość do zapisania w pamięci podręcznej (dowolna wartość serializowalna do JSON) |
| `ttl` | number | No | `0` | Czas życia w sekundach (0 = bez wygaśnięcia) |
| `backend` | string | No | `memory` | Backend pamięci podręcznej do użycia |
| `redis_url` | string | No | `redis://localhost:6379` | URL połączenia Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `key` | string | Klucz pamięci podręcznej |
| `stored` | boolean | Czy wartość została pomyślnie zapisana |
| `ttl` | number | TTL w sekundach (0 = bez wygaśnięcia) |
| `backend` | string | Używany backend |
