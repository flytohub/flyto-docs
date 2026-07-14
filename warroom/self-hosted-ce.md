---
title: Self-hosted CE
description: Install and operate Flyto2 Warroom CE, the self-hosted open-core security war room, with GitHub, Docker Hub, local auth, local data, and Enterprise bridge boundaries.
---

# Self-hosted CE

Flyto2 Warroom CE is the self-hosted open-core edition of Flyto2 Warroom.
It gives teams a local security cockpit for code intelligence, CTEM posture,
external exposure, container and cloud posture inputs, automated security
testing evidence, scoring, reports, and compliance surfaces.

CE is designed to run without Flyto2 Cloud. Enterprise capabilities can be
attached later through documented capability gates and signed evidence
contracts.

## Official channels

| Channel | URL | Purpose |
| --- | --- | --- |
| Website | <https://flyto2.com/open-source/> | Product positioning and edition model |
| GitHub | <https://github.com/flytohub/flyto-warroom> | Public CE source, contracts, install files, governance |
| Docker Hub | <https://hub.docker.com/r/chesterhsu/flyto-warroom> | Published CE service images |
| Enterprise bridge | <https://github.com/flytohub/flyto-warroom/blob/main/docs/enterprise-cloud-bridge.md> | Premium job and signed evidence model |

## Quick start

```sh
git clone https://github.com/flytohub/flyto-warroom.git
cd flyto-warroom

python3 install/scripts/setup-ce.py --email admin@example.com
make preflight
make verify-images
make ce-up
```

Open:

```txt
http://localhost:8088
```

CE uses engine-issued local JWT auth. It does not require Firebase. The setup
script writes generated local secrets and stores only the initial admin password
hash.

## Docker image tags

The public Docker repository is:

```txt
docker.io/chesterhsu/flyto-warroom
```

Published service tags:

| Service | Tag |
| --- | --- |
| Engine API | `engine-ce` |
| Worker | `worker-ce` |
| Warroom UI | `code-ce` |
| Runner | `runner-ce` |
| Verification | `verification-ce` |
| Brand Vision | `brand-vision-ce` |
| PDF | `pdf-ce` |

Run `make verify-images` before starting a release-sensitive installation. The
verification script checks public image coordinates and expected digests from
`OPEN_CORE_MANIFEST.json`.

## Local boundaries

CE keeps these areas local:

- local users, local JWT auth, local database, and local evidence;
- code intelligence through `flyto-indexer`;
- YAML workflows and deterministic verification through `flyto-core`;
- self-hosted UI, score views, reports, scheduler ledger, and evidence timeline;
- user-provided connector credentials unless the user explicitly chooses a
  cloud-executed premium job.

## Enterprise bridge

The Enterprise bridge lets a CE deployment request entitled premium jobs while
keeping the local Warroom as the system of record.

Premium capabilities can include:

- commercial darkweb, stealer-log, phishing, actor, malware, and ransomware
  intelligence;
- managed DAST/browser runner fleets and red-team execution;
- cloud, container, runtime, and VM live remediation orchestration;
- commercial AI proposal, approval, promotion, and rollback workflows;
- SSO/SAML/SCIM, offline license, airgap packaging, legal hold, and support
  controls.

Premium actions must fail closed when any required gate fails: missing license,
unsupported edition, denied role, expired token, connector error, cloud service
unavailable, or invalid evidence signature.

## Reset local data

For local evaluation, reset the generated compose database with:

```sh
make ce-reset-db
```

This removes only the CE compose `pgdata` volume created by the public install.

## Promotion wording

Use this wording in public listings:

> Flyto2 Warroom CE is a self-hosted open-core security war room for code,
> CTEM, external attack surface, container, runtime, evidence, scoring, and
> compliance workflows. Enterprise unlocks cloud-backed intelligence, managed
> remediation, fleet execution, enterprise identity, governance, airgap
> packaging, and support.

Avoid claiming that CE is a full Enterprise source release or that Flyto2 fully
replaces every existing scanner. The correct positioning is that Flyto2
integrates, correlates, validates, and helps teams act on trusted security
signals.
