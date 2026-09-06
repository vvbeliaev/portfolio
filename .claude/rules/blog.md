---
paths:
  - "apps/vvbeliaev/src/content/blog/**"
  - "workspace/private/drafts/**"
  - "apps/vvbeliaev/src/content.config.ts"
---

# Articles

The single description of the writing pipeline. It loads whenever a draft or a
published article is touched.

## Stages

```
1. workspace/private/drafts/ideas.md              one line, an idea
2. workspace/private/drafts/<slug>/main.md        loose Russian draft, no schema
3. blog/note-NN-slug/ru.mdx                       RU shaped into the schema, draft: true
4. blog/note-NN-slug/en.mdx                       EN translation, translatedFrom: "ru"
5. drop draft: true                               published
```

Steps 1–2 are the private kitchen, 3–5 the public storefront
(`apps/vvbeliaev/src/content/blog/`). **Publishing is a deliberate promotion into
the collection and its schema, not a flag flip.** The kitchen has no schema and
no constraints; the storefront is validated by `content.config.ts`.

## Conventions

- **Russian is written first; English is a translation of it.** Mark the EN file
  `translatedFrom: "ru"` — the UI renders a "Translated from Russian" note
  linking to the original.
- **A folder per article:** `note-NN-slug/ru.mdx` + `en.mdx`, with the cover and
  the article's assets in the same folder.
- **RU↔EN are linked by a shared `articleNumber`.** The numbering is a brand
  ritual anyway; it doubles as the translation key. Do not add a linking field.
- **Slug:** the canonical slug strips the trailing language segment
  (`note-NN-slug/ru` → `note-NN-slug`), so the locale lives only in the route
  prefix. The logic is `apps/vvbeliaev/src/lib/post.ts` (`postSlug`) and both
  `[...slug].astro` routes call it. Flat legacy notes pass through unchanged.
- A post may exist in one language only, but keep pairs where it makes sense.

## State of the machinery

Built and verified by the paired note `note-03-translation-demo` (still
`draft: true`): the `translatedFrom` field in the schema, the banner in
`PostLayout.astro`, the strings in `src/i18n/ui.ts`. Nothing here is pending.
