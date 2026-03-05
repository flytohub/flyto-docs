# Prompt System

flyto-ai uses a three-layer system prompt architecture designed for safety and reliability.

## Three-Layer Design

```
┌─────────────────────────────┐
│  Layer A: Policy            │  ← Unbreakable rules
│  Module whitelist/denylist  │
│  SSRF protection            │
│  Injection detection        │
├─────────────────────────────┤
│  Layer B: Behavior          │  ← Mode-specific instructions
│  Execute mode vs YAML mode  │
│  Language detection         │
│  Tool usage guidelines      │
├─────────────────────────────┤
│  Layer C: Gates             │  ← Quality fallback
│  Always at bottom           │
│  Final safety net           │
└─────────────────────────────┘
```

### Layer A — Policy (Unbreakable)

- Module whitelist and denylist enforcement
- SSRF protection rules
- Injection detection patterns
- Cannot be overridden by user input

### Layer B — Behavior (Mode-specific)

- Execute mode: run modules and return results
- YAML mode: generate workflow definition only
- Language detection (CJK/JP/KR regex + langdetect fallback)
- Tool usage guidelines and best practices

### Layer C — Gates (Quality)

- Always placed at the bottom of the prompt
- Acts as a fallback safety net
- Catches edge cases not covered by Layer A/B

## Injection Detection

The prompt system includes an injection scanner that:

1. Scans user input for known injection patterns
2. Scans tool outputs for injection attempts
3. Warns the LLM when suspicious patterns are detected
4. Logs incidents for audit

## Prompt Evolution

flyto-ai includes a genetic algorithm for system prompt optimization:

```bash
# Evaluate current prompt against test cases
flyto-ai prompt-lab eval --cases cases.yaml --rubric rubric.yaml

# Evolve prompt over multiple generations
flyto-ai prompt-lab evolve --generations 5 --population 10
```

The evolution system:
- Generates candidate mutations (crossover, insertion, deletion)
- Multi-round evaluation (quick screen → full eval → adversarial)
- Regression detection
- Archives all results with diffs
- Never auto-applies changes (safe by design)
