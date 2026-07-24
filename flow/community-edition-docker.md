# Flyto2 Flow Community Edition Docker

Flyto2 Flow Community Edition is the self-hosted visual workflow and MCP application. The reviewed container image bundles the Flow frontend and local API, [`flyto-core`](/core/), Playwright, and Chromium so a normal startup does not download runtime dependencies.

Flow CE is source-available under [PolyForm Shield 1.0.0](https://github.com/flytohub/flyto-flow/blob/main/LICENSE). The bundled `flyto-core` runtime remains open source under Apache 2.0.

## Requirements

- Docker Engine or Docker Desktop
- local storage for the application image, Chromium, workflows, and evidence
- port `9000` available on the loopback interface

The published `0.1.1` image supports Linux `amd64` and `arm64`.

## Start the reviewed image

Pull the exact release instead of an unpinned `latest` tag:

```bash
docker pull docker.io/flyto2/flow:0.1.1
```

Start Flow with persistent local storage:

```bash
docker run --detach \
  --name flyto-flow \
  --init \
  --restart unless-stopped \
  --shm-size=1g \
  --publish 127.0.0.1:9000:9000 \
  --volume flyto-flow-data:/data/flyto \
  docker.io/flyto2/flow:0.1.1
```

Open <http://127.0.0.1:9000>. The first local workspace starts without a Flyto2 account.

The `flyto-flow-data` volume stores the SQLite workspace, workflows, run history, evidence, and replay artifacts. Replacing the container does not remove that volume.

## Verify the local service

Confirm the API health endpoint before creating a workflow:

```bash
curl --fail http://127.0.0.1:9000/api/health
```

Inspect startup or runtime failures with:

```bash
docker logs flyto-flow
```

The container publishes only to `127.0.0.1` by default. A browser on another machine cannot reach it unless the operator deliberately adds a reviewed network boundary.

## Stop and restart

```bash
docker stop flyto-flow
docker start flyto-flow
```

Do not delete the `flyto-flow-data` volume unless the local workspace and its evidence are intentionally being discarded.

## Update Flow CE

Read the [Flow release notes](https://github.com/flytohub/flyto-flow/releases), pull the next exact version, and replace only the container:

```bash
docker pull docker.io/flyto2/flow:<version>
docker stop flyto-flow
docker rm flyto-flow
docker run --detach \
  --name flyto-flow \
  --init \
  --restart unless-stopped \
  --shm-size=1g \
  --publish 127.0.0.1:9000:9000 \
  --volume flyto-flow-data:/data/flyto \
  docker.io/flyto2/flow:<version>
```

Use the release digest when an environment requires an immutable deployment reference. Preserve the named volume and validate `/api/health` after replacement.

## Build the CE image from source

Git and Docker Compose are required for this path:

```bash
git clone https://github.com/flytohub/flyto-flow.git
cd flyto-flow
cp install/.env.ce.example install/.env.ce
docker compose --env-file install/.env.ce -f install/docker-compose.ce.yml up --build
```

The Compose contract uses the same loopback port, persistent volume, and health endpoint as the published image. Keep `install/.env.ce` local and never commit credentials.

## Network exposure

Do not change the host bind to `0.0.0.0` only to make MCP reachable. For non-loopback access, place Flow behind an operator-controlled reverse proxy with TLS, authentication, network policy, origin checks, request limits, and monitoring.

Configure `FLYTO_FLOW_MCP_TOKEN` for non-loopback MCP access and review `FLYTO_MCP_ALLOWED_ORIGINS` before allowing a browser client from another origin. The token is an operator access guard, not a hosted account system.

Continue with [Visual MCP Builder](/flow/mcp-builder) to publish a workflow as a tool, or [Browser Automation](/flow/browser-automation) to build a local browser workflow.

## Verified distribution links

- [Flyto2 Flow on Docker Hub](https://hub.docker.com/r/flyto2/flow)
- [Flyto2 Flow source](https://github.com/flytohub/flyto-flow)
- [Source deployment files](https://github.com/flytohub/flyto-flow/tree/main/install)
- [Security policy](https://github.com/flytohub/flyto-flow/blob/main/SECURITY.md)
