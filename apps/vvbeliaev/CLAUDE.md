# apps/vvbeliaev

The personal site and blog — **https://vvbeliaev.dev**. The brand rests not on a
logo but on a consistent voice and a couple of rituals: numbered "notes", one
preview format, a "by the numbers" rubric.

Repo-wide rules (tiers, publicity, toolchains, deploy) live in the root
[CLAUDE.md](../../CLAUDE.md). This file is only what is specific to this app.

## Stack

Astro 6 + Svelte 5 + shadcn-svelte, Tailwind v4, content via Astro Content
Collections + MDX, static build (SSG). `pnpm build` here is the final source of
truth for correctness.

## Design

Theme **Corona Bloom** — the root [DESIGN.md](../../DESIGN.md). Read it before
touching anything visual.

- Tokens live in `:root` in `src/styles/global.css`, mapped to Tailwind via
  `@theme inline`.
- The atmosphere is `src/components/Atmosphere.astro`.
- The theme is single and fixed dark (`<html class="dark">`), no runtime toggle.
- A significant theme change updates `DESIGN.md` in lockstep and records the
  rationale as a new entry in the journal `docs/`.

## Articles

The storefront is `src/content/blog`; the kitchen is `workspace/private/drafts/`.
The pipeline and the storefront conventions live in one place —
[.claude/rules/blog.md](../../.claude/rules/blog.md) — and load by themselves
whenever either path is touched, so there is nothing to fetch here.

Schema: `src/content.config.ts`. The canonical slug strips the trailing language
segment — `src/lib/post.ts`.

## i18n

- Two locales: **English (default)** and **Russian**. English is served at the
  root (`/`, `/blog`), Russian is prefixed (`/ru/`, `/ru/blog`).
- UI strings live in `src/i18n/` (one dictionary per locale). Use
  `useTranslations(lang)` / `getLangFromUrl(url)` instead of hardcoding copy in
  components.
- Blog content carries a `lang` field. Keep posts paired across locales where it
  makes sense, but a post may exist in only one language.
