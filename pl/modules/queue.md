# Queue

In-memory and Redis message queue operations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Usuń z kolejki](#usuń-z-kolejki) | Usuń i zwróć element z kolejki |
| [Dodaj do kolejki](#dodaj-do-kolejki) | Dodaj element do kolejki w pamięci lub Redis |
| [Rozmiar kolejki](#rozmiar-kolejki) | Pobierz aktualny rozmiar kolejki |

## Modules

### Usuń z kolejki

`queue.dequeue`

Usuń i zwróć element z kolejki

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Nazwa kolejki, z której usunąć element |
| `backend` | string | No | `memory` | Backend kolejki do użycia |
| `redis_url` | string | No | `redis://localhost:6379` | URL połączenia Redis |
| `timeout` | number | No | `0` | Limit czasu w sekundach (0 = nieblokujący) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | any | Usunięty element (null, jeśli kolejka jest pusta) |
| `queue_name` | string | Nazwa kolejki |
| `remaining` | number | Pozostałe elementy w kolejce |
| `empty` | boolean | Czy kolejka była pusta |

### Dodaj do kolejki

`queue.enqueue`

Dodaj element do kolejki w pamięci lub Redis

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Nazwa kolejki, do której dodać element |
| `data` | string | Yes | - | Dane do dodania do kolejki (dowolna wartość serializowalna JSON) |
| `backend` | string | No | `memory` | Backend kolejki do użycia |
| `redis_url` | string | No | `redis://localhost:6379` | URL połączenia Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | Nazwa kolejki |
| `position` | number | Pozycja elementu w kolejce |
| `queue_size` | number | Aktualny rozmiar kolejki po dodaniu |

### Rozmiar kolejki

`queue.size`

Pobierz aktualny rozmiar kolejki

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Nazwa kolejki do sprawdzenia |
| `backend` | string | No | `memory` | Backend kolejki do użycia |
| `redis_url` | string | No | `redis://localhost:6379` | URL połączenia Redis |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | Nazwa kolejki |
| `size` | number | Aktualna liczba elementów w kolejce |
