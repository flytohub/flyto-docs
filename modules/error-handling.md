# Error Handling

Modules for building resilient workflows. Implement retry logic, fallback strategies, and circuit breaker patterns.

## Modules

| Module | Description |
|--------|-------------|
| `error.circuit_breaker` | Circuit breaker pattern -- stop calling failing services |
| `error.fallback` | Execute fallback logic when primary step fails |
| `error.retry` | Retry failed operations with configurable backoff |
