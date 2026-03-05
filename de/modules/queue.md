# Queue

In-memory and Redis message queue operations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Element ausreihen](#element-ausreihen) | Ein Element aus einer Warteschlange entfernen und zurückgeben |
| [Element einreihen](#element-einreihen) | Ein Element in eine In-Memory- oder Redis-Warteschlange einfügen |
| [Warteschlangengröße](#warteschlangengröße) | Die aktuelle Größe einer Warteschlange abrufen |

## Modules

### Element ausreihen

`queue.dequeue`

Ein Element aus einer Warteschlange entfernen und zurückgeben

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Name der Warteschlange, aus der das Element ausgereiht werden soll |
| `backend` | string | No | `memory` | Zu verwendendes Warteschlangen-Backend |
| `redis_url` | string | No | `redis://localhost:6379` | Redis-Verbindungs-URL |
| `timeout` | number | No | `0` | Timeout in Sekunden (0 = nicht blockierend) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | any | Das ausgereihte Element (null, wenn die Warteschlange leer ist) |
| `queue_name` | string | Name der Warteschlange |
| `remaining` | number | Verbleibende Elemente in der Warteschlange |
| `empty` | boolean | Ob die Warteschlange leer war |

### Element einreihen

`queue.enqueue`

Ein Element in eine In-Memory- oder Redis-Warteschlange einfügen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Name der Warteschlange, in die das Element eingefügt werden soll |
| `data` | string | Yes | - | Daten zum Einreihen (jeder JSON-serialisierbare Wert) |
| `backend` | string | No | `memory` | Zu verwendendes Warteschlangen-Backend |
| `redis_url` | string | No | `redis://localhost:6379` | Redis-Verbindungs-URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | Name der Warteschlange |
| `position` | number | Position des Elements in der Warteschlange |
| `queue_size` | number | Aktuelle Größe der Warteschlange nach dem Einreihen |

### Warteschlangengröße

`queue.size`

Die aktuelle Größe einer Warteschlange abrufen

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Name der Warteschlange, die überprüft werden soll |
| `backend` | string | No | `memory` | Zu verwendendes Warteschlangen-Backend |
| `redis_url` | string | No | `redis://localhost:6379` | Redis-Verbindungs-URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | Name der Warteschlange |
| `size` | number | Aktuelle Anzahl der Elemente in der Warteschlange |
