# Architecture

## Overview

```
┌─────────────────────────────────────────┐
│              MCP Interface              │
│         (STDIO / HTTP Transport)        │
├─────────────────────────────────────────┤
│            Module Registry              │
│     (412+ modules, 78 categories)       │
├─────────────────────────────────────────┤
│           Execution Engine              │
│   (dispatch, validate, execute, trace)  │
├─────────────────────────────────────────┤
│           Evidence Store                │
│    (snapshots, traces, replay state)    │
└─────────────────────────────────────────┘
```

## Module Registry

The module registry discovers and loads all available modules at startup. Modules are organized by category and can be queried by name or capability.

## Execution Engine

The execution engine handles:
1. **Parameter validation** — Ensures inputs match the module's schema
2. **Dispatch** — Routes execution to the correct module
3. **Execution** — Runs the module with validated parameters
4. **Evidence capture** — Records inputs, outputs, timing, and status

## Evidence Store

The evidence store persists execution traces to disk. Each execution gets a unique ID and a complete record of what happened.

## MCP Interface

The MCP interface exposes the module registry as MCP tools. Each module becomes a callable tool with its parameters mapped to the MCP tool schema.
