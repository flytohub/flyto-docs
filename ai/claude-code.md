# Claude Code Agent

The Claude Code Agent is a phase-based code fixing workflow that uses Claude to write code and automatically verifies the result.

## Usage

### CLI

```bash
# Basic code task
flyto-ai code "fix the login page" --dir ./project

# With screenshot verification
flyto-ai code "fix the login page" --dir ./project --verify screenshot

# With visual comparison
flyto-ai code "match the Figma design" --dir ./project --reference ./figma.png
```

### Python API

```python
from flyto_ai import ClaudeCodeAgent, AgentConfig
from flyto_ai.agents.models import CodeTaskRequest

config = AgentConfig.from_env()
agent = ClaudeCodeAgent(config=config)

result = await agent.run(
    CodeTaskRequest(
        message="fix the login page",
        working_dir="/path/to/project",
        verification_recipe="screenshot",
        reference_image="./figma.png",
    )
)

print(result.ok)              # True/False
print(result.attempts)        # Number of fix attempts
print(result.files_changed)   # List of modified files
```

## Execution Phases

```
Phase 1: Gather Context
  → flyto-indexer provides codebase context (symbols, dependencies, impact)

Phase 2: Code Generation
  → Claude Code writes/modifies code via Agent SDK
  → Guardian hook blocks dangerous operations (rm -rf, .env writes)
  → Evidence collector logs all tool calls

Phase 3: Verification
  → Run verification recipe (browser screenshot + extraction)

Phase 4: Visual Comparison
  → LLM compares actual vs reference image
  → If failed → feedback → back to Phase 2 (max 3 attempts)
```

## Safety Features

| Feature | Purpose |
|---------|---------|
| Guardian hook | Pre-execution check that blocks destructive operations |
| Evidence trail | Logs all tool calls for audit |
| Max attempts | Limits fix iterations (default: 3) |
| Budget cap | Maximum USD spend per task |

## Configuration

```python
AgentConfig(
    claude_code=ClaudeCodeConfig(
        max_budget_usd=5.0,     # Max spend per task
        max_turns=30,           # Max conversation turns
        max_fix_attempts=3,     # Max verification retries
    ),
)
```
