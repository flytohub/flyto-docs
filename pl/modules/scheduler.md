# Scheduler

Cron parsing, delay, and interval calculations.

**3 modules**

| Module | Description |
|--------|-------------|
| [Analizuj wyrażenie cron](#analizuj-wyrażenie-cron) | Analizuj wyrażenie cron i oblicz następne czasy uruchomienia |
| [Opóźnienie / Sen](#opóźnienie--sen) | Zatrzymaj wykonanie na określony czas |
| [Oblicz interwał](#oblicz-interwał) | Oblicz czas interwału i kolejne wystąpienia |

## Modules

### Analizuj wyrażenie cron

`scheduler.cron_parse`

Analizuj wyrażenie cron i oblicz następne czasy uruchomienia

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `expression` | string | Yes | - | Standardowe wyrażenie cron z 5 polami (np. "0 9 * * MON-FRI") |
| `count` | number | No | `5` | Liczba kolejnych czasów uruchomienia do obliczenia |
| `timezone` | string | No | `0` | Strefa czasowa do obliczeń (przesunięcie UTC jak "+8" lub "-5", domyślnie "0" dla UTC) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `expression` | string | Przeanalizowane wyrażenie cron |
| `description` | string | Opis harmonogramu w formie czytelnej dla człowieka |
| `next_runs` | array | Lista kolejnych czasów uruchomienia jako ciągi daty i czasu ISO |
| `is_valid` | boolean | Czy wyrażenie jest poprawne |

### Opóźnienie / Sen

`scheduler.delay`

Zatrzymaj wykonanie na określony czas

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | Yes | - | Liczba sekund opóźnienia |
| `message` | string | No | - | Opcjonalna wiadomość do uwzględnienia w wyniku |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `delayed_seconds` | number | Rzeczywista liczba sekund opóźnienia |
| `message` | string | Podana wiadomość lub domyślna |

### Oblicz interwał

`scheduler.interval`

Oblicz czas interwału i kolejne wystąpienia

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `seconds` | number | No | `0` | Składnik interwału w sekundach |
| `minutes` | number | No | `0` | Składnik interwału w minutach |
| `hours` | number | No | `0` | Składnik interwału w godzinach |
| `start_time` | string | No | - | Czas rozpoczęcia w formacie ISO 8601 (domyślnie: teraz) |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `interval_seconds` | number | Całkowity interwał w sekundach |
| `next_runs` | array | Lista kolejnych 5 czasów uruchomienia jako ciągi daty i czasu ISO |
| `human_readable` | string | Opis interwału w formie czytelnej dla człowieka |
