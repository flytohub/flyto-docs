# Environment

Environment variable management and .env file loading.

**3 modules**

| Module | Description |
|--------|-------------|
| [Pobierz zmienną środowiskową](#pobierz-zmienną-środowiskową) | Pobierz wartość zmiennej środowiskowej |
| [Załaduj plik .env](#załaduj-plik-.env) | Załaduj zmienne środowiskowe z pliku .env |
| [Ustaw zmienną środowiskową](#ustaw-zmienną-środowiskową) | Ustaw zmienną środowiskową w bieżącym procesie |

## Modules

### Pobierz zmienną środowiskową

`env.get`

Pobierz wartość zmiennej środowiskowej

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | Nazwa zmiennej środowiskowej |
| `default` | string | No | - | Wartość domyślna, jeśli zmienna nie jest ustawiona |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Nazwa zmiennej |
| `value` | string | Wartość zmiennej (lub domyślna, jeśli nie ustawiona) |
| `exists` | boolean | Czy zmienna istnieje w środowisku |

**Example:** Get HOME variable

```yaml
name: HOME
```

**Example:** Get variable with default

```yaml
name: MY_APP_PORT
default: 8080
```

### Załaduj plik .env

`env.load_dotenv`

Załaduj zmienne środowiskowe z pliku .env

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `path` | string | Yes | `.env` | Ścieżka do pliku .env |
| `override` | boolean | No | `False` | Czy nadpisać istniejące zmienne środowiskowe |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `loaded_count` | number | Liczba załadowanych zmiennych |
| `variables` | array | Lista nazw załadowanych zmiennych |

**Example:** Load .env file

```yaml
path: .env
override: false
```

### Ustaw zmienną środowiskową

`env.set`

Ustaw zmienną środowiskową w bieżącym procesie

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `name` | string | Yes | - | Nazwa zmiennej środowiskowej do ustawienia |
| `value` | string | Yes | - | Wartość do przypisania zmiennej środowiskowej |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Nazwa zmiennej |
| `value` | string | Nowa wartość, która została ustawiona |
| `previous_value` | string | Poprzednia wartość (null, jeśli nie była wcześniej ustawiona) |

**Example:** Set an environment variable

```yaml
name: MY_APP_PORT
value: 3000
```
