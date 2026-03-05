# Sandbox

Execute JavaScript, Python, or shell commands in isolated environments.

**3 modules**

| Module | Description |
|--------|-------------|
| [Executar JavaScript](#executar-javascript) | Executa código JavaScript via Node.js com tempo limite |
| [Executar Python](#executar-python) | Executa código Python em um subprocesso com tempo limite |
| [Executar Shell](#executar-shell) | Executa um comando shell com tempo limite e controle de ambiente |

## Modules

### Executar JavaScript

`sandbox.execute_js`

Executa código JavaScript via Node.js com tempo limite

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Código JavaScript para executar via Node.js |
| `timeout` | number | No | `10` | Tempo limite de execução em segundos |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Saída padrão do script |
| `stderr` | string | Erro padrão do script |
| `exit_code` | number | Código de saída do processo (0 = sucesso) |
| `execution_time_ms` | number | Tempo de execução em milissegundos |

**Example:** Simple console.log

```yaml
code: console.log("Hello, World!");
timeout: 10
```

**Example:** JSON processing

```yaml
code: const data = { name: "test", value: 42 };
console.log(JSON.stringify(data, null, 2));
```

### Executar Python

`sandbox.execute_python`

Executa código Python em um subprocesso com tempo limite

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `code` | string | Yes | - | Código Python para executar |
| `timeout` | number | No | `10` | Tempo limite de execução em segundos |
| `allowed_modules` | array | No | - | Lista de módulos importáveis permitidos (deixe vazio para permitir todos) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Saída padrão do script |
| `stderr` | string | Erro padrão do script |
| `exit_code` | number | Código de saída do processo (0 = sucesso) |
| `execution_time_ms` | number | Tempo de execução em milissegundos |

**Example:** Simple print

```yaml
code: print("Hello, World!")
timeout: 10
```

**Example:** Math calculation

```yaml
code: import math
print(math.pi)
allowed_modules: ["math"]
```

### Executar Shell

`sandbox.execute_shell`

Executa um comando shell com tempo limite e controle de ambiente

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `command` | string | Yes | - | Comando shell para executar |
| `timeout` | number | No | `10` | Tempo limite de execução em segundos |
| `working_dir` | string | No | - | Diretório de trabalho para o comando |
| `env` | object | No | - | Variáveis de ambiente adicionais para definir (mescladas com o ambiente atual) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `stdout` | string | Saída padrão do comando |
| `stderr` | string | Erro padrão do comando |
| `exit_code` | number | Código de saída do processo (0 = sucesso) |
| `execution_time_ms` | number | Tempo de execução em milissegundos |

**Example:** Simple echo

```yaml
command: echo "Hello, World!"
timeout: 10
```

**Example:** List files with custom working directory

```yaml
command: ls -la
working_dir: /tmp
```
