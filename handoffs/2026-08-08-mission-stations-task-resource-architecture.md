# Mission Stations documentation handoff

Date: 2026-08-08
Status: Public source-contract documentation added and locally verified

## Result

The public Docs surface now gives Flyto2 Cloud a product entry point and a
detailed portable Mission Stations architecture. The material covers the
fold-flat PP station kit, `Z1`-`Z4` plus `START` venue calibration, evaluator-
drawn physical cards, Task/Capability/Resource/Decision/Evidence ownership,
separate immutable plan and assignment revisions, approved capability binding,
robotics safety, and evidence-based completion.

## Invariant

The evaluator physically draws the cards. The operator records the pair with
`card_source=judge_draw`. Flyto2 does not draw or randomize cards. An action
receipt is auditable but cannot complete the task without the Objective card's
required evidence.

## Discovery

The Cloud pages are linked from VitePress navigation, the homepage, product
strategy, `public/llms.txt`, and `public/llms-full.txt`. Internal memory and
handoffs remain non-content and noindexed.

## Verification

`npm run verify` passes the documentation contract, syntax/lint, VitePress
production build, 92,884 internal links, SEO surface, SEO score, and SEO
management gates. Strict Flyto2 Indexer verification passes `19/19`. Desktop
1280x720 and mobile 390x844 visual checks show no horizontal overflow; the
mobile Cloud sidebar is keyboard/semantic-button accessible.

Authenticated browser and live calibrated robot evidence remain external
integration work and are not claimed by the pages.
