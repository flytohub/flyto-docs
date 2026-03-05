# Storage Backends

flyto-blueprint uses a pluggable storage system. Three backends are available.

## Memory Backend

In-memory storage. Data is lost when the process exits.

```python
from flyto_blueprint import BlueprintEngine, MemoryBackend

engine = BlueprintEngine(storage=MemoryBackend())
```

Best for: testing, ephemeral use, CI pipelines.

## SQLite Backend

File-based persistent storage. Thread-safe.

```python
from flyto_blueprint.storage.sqlite import SQLiteBackend

engine = BlueprintEngine(storage=SQLiteBackend("~/.flyto/blueprints.db"))
```

Best for: local desktop applications, single-user use.

## Firestore Backend

Google Cloud Firestore with transaction support.

```python
from flyto_blueprint.storage.firestore import FirestoreBackend

engine = BlueprintEngine(storage=FirestoreBackend())
```

Best for: flyto-cloud backend, multi-user environments.

## Builtin-Only Mode

The engine can run without any storage backend. Only pre-built blueprints are available — no learning or scoring.

```python
engine = BlueprintEngine(storage=None)
```

## Storage Interface

All backends implement the same abstract interface:

```python
class StorageBackend:
    async def get(self, blueprint_id: str) -> dict | None: ...
    async def save(self, blueprint: dict) -> None: ...
    async def list_all(self) -> list[dict]: ...
    async def delete(self, blueprint_id: str) -> None: ...
```
