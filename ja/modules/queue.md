# Queue

In-memory and Redis message queue operations.

**3 modules**

| Module | Description |
|--------|-------------|
| [アイテムをデキュー](#アイテムをデキュー) | キューからアイテムを削除して返す |
| [アイテムをエンキュー](#アイテムをエンキュー) | アイテムをメモリまたはRedisキューに追加 |
| [キューサイズ](#キューサイズ) | キューの現在のサイズを取得 |

## Modules

### アイテムをデキュー

`queue.dequeue`

キューからアイテムを削除して返す

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | デキューするキューの名前 |
| `backend` | string | No | `memory` | 使用するキューバックエンド |
| `redis_url` | string | No | `redis://localhost:6379` | Redis接続URL |
| `timeout` | number | No | `0` | 秒単位のタイムアウト（0 = ノンブロッキング） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `data` | any | デキューされたアイテム（キューが空の場合はnull） |
| `queue_name` | string | キューの名前 |
| `remaining` | number | キュー内の残りのアイテム |
| `empty` | boolean | キューが空かどうか |

### アイテムをエンキュー

`queue.enqueue`

アイテムをメモリまたはRedisキューに追加

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | アイテムを追加するキューの名前 |
| `data` | string | Yes | - | エンキューするデータ（任意のJSONシリアライズ可能な値） |
| `backend` | string | No | `memory` | 使用するキューバックエンド |
| `redis_url` | string | No | `redis://localhost:6379` | Redis接続URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | キューの名前 |
| `position` | number | キュー内のアイテムの位置 |
| `queue_size` | number | エンキュー後のキューの現在のサイズ |

### キューサイズ

`queue.size`

キューの現在のサイズを取得

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `queue_name` | string | Yes | - | 確認するキューの名前 |
| `backend` | string | No | `memory` | 使用するキューバックエンド |
| `redis_url` | string | No | `redis://localhost:6379` | Redis接続URL |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `queue_name` | string | キューの名前 |
| `size` | number | キュー内の現在のアイテム数 |
