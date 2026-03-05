# Compare

Threshold-based change detection.

**1 modules**

| Module | Description |
|--------|-------------|
| [Deteksi Perubahan](#deteksi-perubahan) | Deteksi jika nilai telah berubah melebihi batas (berdasarkan jumlah atau persentase) |

## Modules

### Deteksi Perubahan

`compare.change`

Deteksi jika nilai telah berubah melebihi batas (berdasarkan jumlah atau persentase)

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `current_value` | number | Yes | - | The current/new value to compare |
| `previous_value` | number | Yes | - | The previous/old value to compare against |
| `mode` | select (`percent`, `absolute`, `any`) | No | `percent` | Nilai sebelumnya/lama untuk dibandingkan |
| `threshold` | number | No | `5` | Perubahan minimum untuk memicu (5 = 5% atau 5 unit) |
| `direction` | select (`both`, `up`, `down`) | No | `both` | Arah perubahan yang akan dideteksi |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `ok` | boolean | Apakah operasi berhasil |
| `changed` | boolean | Apakah operasi berhasil |
| `direction` | string | Apakah operasi berhasil |
| `change_percent` | number | Arah perubahan:  |
| `change_absolute` | number | Perubahan persentase (positif = naik, negatif = turun) |
| `current_value` | number | The current value |
| `previous_value` | number | The previous value |
| `summary` | string | Nilai saat ini |

**Example:** Crypto price alert (5% change)

```yaml
current_value: 44500
previous_value: 42000
mode: percent
threshold: 5
direction: both
```

**Example:** Stock drop alert

```yaml
current_value: 145.5
previous_value: 152.3
mode: percent
threshold: 3
direction: down
```

**Example:** Temperature change (absolute)

```yaml
current_value: 32
previous_value: 25
mode: absolute
threshold: 5
direction: up
```
