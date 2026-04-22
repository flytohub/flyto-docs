# Queue

In-memory and Redis message queue operations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Dequeue Item](#dequeue-item) | Remove and return an item from a queue |
| [Enqueue Item](#enqueue-item) | Add an item to an in-memory or Redis queue |
| [Queue Size](#queue-size) | Get the current size of a queue |

## Modules

### Dequeue Item

`queue.dequeue`

Remove and return an item from a queue

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Name of the queue to dequeue from |
| `backend` | string | No | `memory` | Queue backend to use |
| `redis_url` | string | No | `redis://localhost:6379` | Redis connection URL |
| `timeout` | number | No | `0` | Timeout in seconds (0 = non-blocking) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | any | The dequeued item (null if queue is empty) |
| `queue_name` | string | Name of the queue |
| `remaining` | number | Remaining items in the queue |
| `empty` | boolean | Whether the queue was empty |

### Enqueue Item

`queue.enqueue`

Add an item to an in-memory or Redis queue

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Name of the queue to add the item to |
| `data` | string | Yes | - | Data to enqueue (any JSON-serializable value) |
| `backend` | string | No | `memory` | Queue backend to use |
| `redis_url` | string | No | `redis://localhost:6379` | Redis connection URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | Name of the queue |
| `position` | number | Position of the item in the queue |
| `queue_size` | number | Current size of the queue after enqueue |

### Queue Size

`queue.size`

Get the current size of a queue

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | Name of the queue to check |
| `backend` | string | No | `memory` | Queue backend to use |
| `redis_url` | string | No | `redis://localhost:6379` | Redis connection URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | Name of the queue |
| `size` | number | Current number of items in the queue |
