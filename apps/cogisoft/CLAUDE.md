# apps/cogisoft

The Cogisoft site — **https://cogisoft.dev**. Cogisoft is the project and
contract side of the work: a technical partner for the whole money path, one team
that builds it and runs it. The personal site is for hiring; this one is for
project work, cases and offer pages. The two brands are linked openly, not
firewalled.

Repo-wide rules (tiers, publicity, toolchains, deploy) live in the root
[CLAUDE.md](../../CLAUDE.md). This file is only what is specific to this app.

## Stack

Astro 7 + Tailwind v4, static build (SSG), no Svelte. Deliberately **not** shared
with `apps/vvbeliaev` — different Astro major, zero cross-imports. That
independence is what keeps this app cheap to split out of the monorepo when it
moves to its own home.

## Design

Theme **Corona Signal** — [DESIGN.md](./DESIGN.md), the agency variant of Corona
Bloom (the root [DESIGN.md](../../DESIGN.md) is its parent). Same cosmic base,
fonts and glow language, inverted color grammar: steel-blue carries market noise
and structure, coral-clay is reserved for confirmed signals and the CTA.

Two page types: the root card for warm leads (`/`, `/ru/`) with the money rail as
its signature, and offer pages under `/offers/`. Pages come **after** cases, not
ahead of them.

## Planned move

This app is expected to leave for its own repository (a self-hosted GitLab), so
that access to it can be controlled separately once other people work on it. Do
not add coupling to the rest of the monorepo. Before the move, its `DESIGN.md`
has to stop inheriting from the root one — the `parent:` reference must be
inlined, or the design system leaves with a dangling pointer.
