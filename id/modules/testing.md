# Testing

Assertion utilities: equal, contains, length, true, not null, greater than.

**8 modules**

| Module | Description |
|--------|-------------|
| [Assert Contains](#assert-contains) | Assert that a collection contains a value |
| [Assert Equal](#assert-equal) | Assert that two values are equal |
| [Assert Greater Than](#assert-greater-than) | Assert that a value is greater than another |
| [Assert Length](#assert-length) | Assert that a collection has expected length |
| [Assert Not Null](#assert-not-null) | Assert that a value is not null or undefined |
| [Assert Status](#assert-status) | Compare probe statuses to a baseline to derive exploitable/sanitized verdict |
| [Assert Timing](#assert-timing) | Compare probe duration to a baseline to detect time-based oracles |
| [Assert True](#assert-true) | Assert that a condition is true |

## Modules

### Assert Contains

`test.assert_contains`

Assert that a collection contains a value

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Collection to search in |
| `value` | ['string', 'number', 'boolean'] | Yes | - | Value to find |
| `message` | string | No | - | Custom error message |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Whether assertion passed |
| `collection` | ['array', 'string'] | Collection searched |
| `value` | ['string', 'number', 'boolean'] | Value searched for |
| `message` | string | Result message |

### Assert Equal

`test.assert_equal`

Assert that two values are equal

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Actual value |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Yes | - | Expected value |
| `message` | string | No | - | Custom error message |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Whether assertion passed |
| `actual` | ['string', 'number', 'boolean', 'object', 'array'] | Actual value received |
| `expected` | ['string', 'number', 'boolean', 'object', 'array'] | Expected value |
| `message` | string | Result message |

### Assert Greater Than

`test.assert_greater_than`

Assert that a value is greater than another

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `actual` | number | Yes | - | Actual value |
| `threshold` | number | Yes | - | Threshold value |
| `message` | string | No | - | Custom error message |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Whether assertion passed |
| `actual` | number | Actual value |
| `threshold` | number | Threshold value |
| `message` | string | Result message |

### Assert Length

`test.assert_length`

Assert that a collection has expected length

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `collection` | ['array', 'string'] | Yes | - | Collection to check |
| `expected_length` | number | Yes | - | Expected length |
| `message` | string | No | - | Custom error message |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Whether assertion passed |
| `actual_length` | number | Actual length |
| `expected_length` | number | Expected length |
| `message` | string | Result message |

### Assert Not Null

`test.assert_not_null`

Assert that a value is not null or undefined

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `value` | ['string', 'number', 'boolean', 'object', 'array', 'null'] | Yes | - | Value to check |
| `message` | string | No | - | Custom error message |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Whether assertion passed |
| `message` | string | Result message |

### Assert Status

`test.assert_status`

Compare probe statuses to a baseline to derive exploitable/sanitized verdict

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | ['array', 'object'] | Yes | - | Batch result data (array of {status,...} from http.batch) |
| `baseline_index` | number | No | `0` |  |
| `probe_indices` | array | No | - | Indices to compare against the baseline |
| `expected_blocked` | array | No | `[401, 403]` |  |
| `on_bypass` | string | No | `exploitable` |  |
| `on_blocked` | string | No | `sanitized` |  |
| `on_error` | string | No | `unreachable` |  |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | True when verdict != on_bypass |
| `verdict` | string | One of on_bypass/on_blocked/on_error values |
| `baseline` | object | Baseline probe summary |
| `probes` | array | Per-probe decision detail |

### Assert Timing

`test.assert_timing`

Compare probe duration to a baseline to detect time-based oracles

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `source` | ['array', 'object'] | Yes | - | Batch result data (array of {duration_ms,...} from http.batch) |
| `baseline_index` | number | No | `0` |  |
| `probe_index` | number | Yes | - |  |
| `threshold_ms` | number | No | `3000` | Minimum probe-vs-baseline delta to flag as exploitable |
| `on_slow` | string | No | `exploitable` |  |
| `on_normal` | string | No | `inconclusive` |  |
| `on_error` | string | No | `unreachable` |  |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | True when verdict != on_slow |
| `verdict` | string | on_slow/on_normal/on_error value |
| `baseline_ms` | number | Baseline duration in ms |
| `probe_ms` | number | Probe duration in ms |
| `delta_ms` | number | probe_ms - baseline_ms |
| `threshold_ms` | number | Threshold used |

### Assert True

`test.assert_true`

Assert that a condition is true

**Parameters:**

| Name | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `condition` | boolean | Yes | - | Condition to check |
| `message` | string | No | - | Custom error message |

**Output:**

| Field | Type | Description |
|-------|------|-------------|
| `passed` | boolean | Whether assertion passed |
| `message` | string | Result message |
