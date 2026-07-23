# Visual MCP builder

Flyto2 Flow discovers saved workflows that contain an MCP trigger and exposes each one as a typed Model Context Protocol tool. The saved workflow remains the canonical source; the trigger defines the public tool name, description, and input schema.

## Define the tool contract

Add an MCP trigger to the workflow:

```yaml
- id: mcp_trigger
  module: flow.trigger
  params:
    trigger_type: mcp
    tool_name: collect_release_notes
    tool_description: Collect release notes for a repository
    config:
      input_fields:
        - name: repository
          type: string
          description: Repository owner and name
          required: true
```

The input fields become JSON Schema properties. Treat this trigger as a public API: changing the tool name, deleting a field, or making an optional field required can break agent prompts and connected clients.

## Connect a local client

With Flow running on `127.0.0.1:9000`, the Streamable HTTP endpoint is:

```text
http://127.0.0.1:9000/api/mcp
```

Check discovery and setup metadata:

```bash
curl --fail http://127.0.0.1:9000/api/mcp/status
```

MCP Studio also generates configuration for local stdio clients. The bridge requires an absolute backend working directory and refuses a non-loopback backend URL.

## Access model

- Loopback clients can use the local endpoint without a Flyto2 account.
- Non-loopback access fails closed unless `FLYTO_FLOW_MCP_TOKEN` is configured.
- Remote clients send `Authorization: Bearer <operator-token>`.
- Browser calls also enforce an origin check through `FLYTO_MCP_ALLOWED_ORIGINS`.

An operator token is one guard, not a complete public deployment design. Add TLS, an authenticated reverse proxy, network policy, rate limits, rotation, and log review before exposing MCP remotely.

## Audit behavior

Generated tools include additive Flyto2 metadata for the source workflow, contract version, schema fingerprint, risk level, approval policy, and evidence references. The fingerprint identifies contract drift; it is not a digital signature and does not prove authorship.

## Design checklist

1. Give the tool one clear outcome and an action-oriented name.
2. Keep inputs typed and make only truly mandatory values required.
3. Keep the returned result compact; leave verbose diagnostics in evidence.
4. Put destructive, financial, publishing, or permission-changing steps behind an operator checkpoint.
5. Test failure and timeout paths as well as the successful call.

Continue with [MCP transport reference](/mcp/) or [Flow evidence and replay](/flow/evidence-replay).
