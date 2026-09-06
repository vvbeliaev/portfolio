# labs

Experiments. Repo-wide rules are in the root [CLAUDE.md](../CLAUDE.md); this is
the contract for the tier.

## Starting one

A lab is a folder with a `README.md` and nothing else required — no CI, no
Dockerfile, no deployment. The cost of starting one is zero on purpose. Do not
add build wiring "so it's ready"; add it at promotion, when it is actually
needed.

The README answers three things: what it is, why it exists, how to run it.

**Status lives in one place only** — the registry table in
[README.md](./README.md), one row per lab: `alive` · `parked` ·
`graduated → apps/<name>` · `exported → <url>`. Do not repeat it inside the
lab's own README; a status in two files is a status that will disagree with
itself. Add the row when a lab is created, edit it when the status changes.
`guard.yml` fails a push if a lab has no README, or no row with a recognizable
status.

## Toolchain

- Labs are **outside** the pnpm workspace globs (`apps/*` only). A JS lab carries
  its own `package.json` and its own lockfile.
- Python labs are members of the repo-root `uv` workspace and share the root
  `uv.lock`. Run them as `uv run labs/<name>/<script>.py`. Membership is an
  explicit list in the root `pyproject.toml`, not a glob — the tier is polyglot
  and uv demands a `pyproject.toml` from every member, so add the line when you
  add a Python lab.
- A Python lab with conflicting pins or a different Python goes into `exclude`
  in the root `pyproject.toml` and locks for itself. Reach for that instead of
  bending the shared resolution.
- Nothing here enters a Docker build context — `labs/` is in `.dockerignore`.
  Keep it that way.

## Leaving the tier

- **Promotion** `labs/x → apps/x` when it ships: `git mv`, add a Dockerfile, copy
  a workflow, create the Coolify app. The pnpm glob picks it up automatically.
- **Demotion** `apps/x → labs/x` is allowed and is not a failure.
- **Export** out of the repository: `git subtree split -P labs/x` carries the
  history out. Do not delete a lab that leaves — its registry row stays, with
  `exported → <url>`.
