# Docker

Build, run, inspect, and manage Docker containers.

**6 modules**

| Module | Description |
|--------|-------------|
| [Docker イメージをビルド](#docker-イメージをビルド) | Dockerfile から Docker イメージをビルド |
| [Docker コンテナを検査](#docker-コンテナを検査) | Docker コンテナの詳細情報を取得 |
| [コンテナログ取得](#コンテナログ取得) | Dockerコンテナからログを取得 |
| [Dockerコンテナ一覧](#dockerコンテナ一覧) | Dockerコンテナを一覧表示 |
| [Docker コンテナを実行](#docker-コンテナを実行) | イメージから Docker コンテナを実行 |
| [Docker コンテナを停止](#docker-コンテナを停止) | 実行中の Docker コンテナを停止 |

## Modules

### Docker イメージをビルド

`docker.build`

Dockerfile から Docker イメージをビルド

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | - | ビルドコンテキストディレクトリへのパス |
| `tag` | string | Yes | - | イメージの名前とオプションでタグ（例: myapp:latest） |
| `dockerfile` | string | No | - | Dockerfile へのパス（ビルドコンテキストからの相対パス） |
| `build_args` | object | No | - | ビルド時の変数（例: {"NODE_ENV": "production"}） |
| `no_cache` | boolean | No | `False` | イメージをビルドする際にキャッシュを使用しない |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `image_id` | string | ビルドされたイメージのID |
| `tag` | string | イメージに適用されたタグ |
| `size` | string | ビルドされたイメージのサイズ |

**Example:** Build from current directory

```yaml
path: .
tag: myapp:latest
```

**Example:** Build with custom Dockerfile and args

```yaml
path: ./backend
tag: myapi:v1.0
dockerfile: Dockerfile.prod
build_args: {"NODE_ENV": "production"}
no_cache: true
```

### Docker コンテナを検査

`docker.inspect_container`

Docker コンテナの詳細情報を取得

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | 検査するコンテナのIDまたは名前 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `id` | string | 短縮コンテナID |
| `name` | string | コンテナ名 |
| `state` | object | コンテナの状態（ステータス、実行中、pid、終了コードなど） |
| `image` | string | コンテナで使用されるイメージ |
| `network_settings` | object | ネットワーク設定（IP、ポート、ネットワーク） |
| `mounts` | array | ボリュームとバインドマウント |
| `config` | object | コンテナ設定（環境変数、コマンド、ラベルなど） |

**Example:** Inspect a container by name

```yaml
container: my-nginx
```

**Example:** Inspect a container by ID

```yaml
container: a1b2c3d4e5f6
```

### コンテナログ取得

`docker.logs`

Dockerコンテナからログを取得

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | コンテナIDまたは名前 |
| `tail` | number | No | `100` | ログの末尾から表示する行数 |
| `follow` | boolean | No | `False` | ログ出力をフォロー（タイムアウトまでストリーム） |
| `timestamps` | boolean | No | `False` | ログ出力にタイムスタンプを表示 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `logs` | string | コンテナログ出力 |
| `lines` | number | 返されたログ行数 |

**Example:** Get last 50 lines

```yaml
container: my-nginx
tail: 50
```

**Example:** Get logs with timestamps

```yaml
container: my-app
tail: 100
timestamps: true
```

### Dockerコンテナ一覧

`docker.ps`

Dockerコンテナを一覧表示

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `all` | boolean | No | `False` | すべてのコンテナを表示（デフォルトは実行中のみ） |
| `filters` | object | No | - | コンテナをフィルター（例: {"name": "my-app", "status": "running"}） |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `containers` | array | ID、名前、イメージ、ステータス、ポートを含むコンテナ一覧 |
| `count` | number | 見つかったコンテナ数 |

**Example:** List running containers

```yaml
```

**Example:** List all containers

```yaml
all: true
```

**Example:** Filter by name

```yaml
filters: {"name": "nginx"}
```

### Docker コンテナを実行

`docker.run`

イメージから Docker コンテナを実行

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `image` | string | Yes | - | 実行する Docker イメージ（例: nginx:latest） |
| `command` | string | No | - | コンテナ内で実行するコマンド |
| `name` | string | No | - | コンテナに名前を付ける |
| `ports` | object | No | - | ホスト:コンテナとしてのポートマッピング（例: {"8080": "80"}） |
| `volumes` | object | No | - | ホストパス:コンテナパスとしてのボリュームマッピング |
| `env` | object | No | - | コンテナ内で設定する環境変数 |
| `detach` | boolean | No | `True` | バックグラウンドでコンテナを実行 |
| `remove` | boolean | No | `False` | コンテナが終了したときに自動的に削除 |
| `network` | string | No | - | コンテナをネットワークに接続 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | 作成されたコンテナのID |
| `status` | string | 実行後のコンテナのステータス |

**Example:** Run Nginx web server

```yaml
image: nginx:latest
name: my-nginx
ports: {"8080": "80"}
detach: true
```

**Example:** Run a one-off command

```yaml
image: alpine:latest
command: echo hello world
remove: true
detach: false
```

### Docker コンテナを停止

`docker.stop`

実行中の Docker コンテナを停止

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `container` | string | Yes | - | 停止するコンテナのIDまたは名前 |
| `timeout` | number | No | `10` | コンテナを強制終了するまでの待機秒数 |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `container_id` | string | 停止されたコンテナのIDまたは名前 |
| `stopped` | boolean | コンテナが正常に停止されたかどうか |

**Example:** Stop a container by name

```yaml
container: my-nginx
```

**Example:** Stop with custom timeout

```yaml
container: my-app
timeout: 30
```
