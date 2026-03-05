# Core Engine

flyto-core is the deterministic execution engine that powers the Flyto2 platform. It provides a reliable, auditable runtime for executing workflows composed of modular steps.

## Key Properties

### Deterministic Execution
Given the same inputs and state, flyto-core produces the same outputs. This makes workflows predictable and testable.

### Evidence Trail
Every module execution is recorded with timestamps, inputs, outputs, and status. This provides a complete audit trail.

### Replay
You can replay any workflow from any step, using recorded evidence to restore state. This is invaluable for debugging and compliance.

### Modular Architecture
All functionality is delivered through self-contained modules. Each module has a clear interface: parameters in, results out.

## Components

- [Architecture](/core/architecture) — How the engine is structured
- [Execution Model](/core/execution-model) — How workflows run
- [Evidence & Replay](/core/evidence-replay) — How traces work
