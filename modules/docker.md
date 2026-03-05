# Docker Modules

Docker modules provide container management capabilities.

## Modules

### docker.run

Run a Docker container.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `image` | string | Yes | Docker image name |
| `command` | string | No | Command to run |
| `ports` | object | No | Port mappings |
| `volumes` | object | No | Volume mounts |
| `env` | object | No | Environment variables |

### docker.build

Build a Docker image.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `path` | string | Yes | Build context path |
| `tag` | string | Yes | Image tag |
| `dockerfile` | string | No | Dockerfile path |

### docker.exec

Execute a command in a running container.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `container` | string | Yes | Container ID or name |
| `command` | string | Yes | Command to execute |

### docker.logs

Get container logs.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `container` | string | Yes | Container ID or name |
| `tail` | number | No | Number of lines |

### docker.compose

Run Docker Compose commands.

**Parameters:**
| Name | Type | Required | Description |
|------|------|----------|-------------|
| `action` | string | Yes | Compose action (up, down, ps) |
| `file` | string | No | Compose file path |
