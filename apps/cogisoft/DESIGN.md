---
name: Corona Signal
parent: Corona Bloom (../../DESIGN.md)
description: >-
  The agency variant of Corona Bloom for cogisoft.dev. Same somber cosmic
  base, fonts and glow language — but an inverted color grammar: steel-blue
  carries the market noise and structure, coral-clay is reserved for
  confirmed signals (evidence) and the CTA. The atmosphere is a signal field
  read like instruments, not a night sky read like a map.
mode: dark
---

# Corona Signal

The site for **Cogisoft — a technical partner for the whole money path: one
team builds it and runs it**. Two page types:

- **Root** (`/`, `/ru/`) — a card for warm leads: RootHero → MoneyPath →
  BuildRun → Cases → Who → Contact. Its signature is the **path instrument**
  (2026-08-30, evolved from the 08-29 money rail): a sticky gauge beside the
  four zones that behaves like the product being sold. Its vertical track
  fills with steel as the reader scrolls (structure), each node ignites coral
  once its zone is passed (evidence), and a mono readout names the current
  zone — "Зона 02 / 04 · Платят" — flipping to "Один договор" when the path
  completes. On mobile it folds into a thin sticky 4-segment progress strip.
  Scroll IS the money path; the page answers with numbers about itself. The
  four zones (How they find you / What they pay for / How it all runs / What
  the numbers say) follow the hybrid frame: owner-language question → one
  recognisable situation line → artifact chips → the "We run:" line. The
  LLM-agents chip is the only coral chip — the spike. The earlier SolutionLoop
  diagram, the Offers section and NotFor are gone from the root; offers live
  on their own pages for targeted direct sends.
- **Offer** (`/offers/<slug>`) — one offer, argued in full. Currently
  `signals` (the original landing, kept as a proto-offer): Hero → Manifesto →
  Funnel (5 stages) → Contact. Offer pages keep the original first-person
  voice; the root speaks as a team ("we build, and we run") — an owner
  decision of 2026-08-29.

`Cases` renders nothing until `CASES` has entries — pages follow cases, never
the other way round. Specs: root redesign —
`docs/superpowers/specs/2026-08-29-cogisoft-money-path-redesign.md`; original
single-page era — `docs/superpowers/specs/2026-07-04-cogisoft-landing-design.md`.

## 1. Relation to Corona Bloom

Inherited verbatim (do not fork): base palette (`#04050b` background,
`#0a0c14` card, `#e3e5ee` foreground, `#1a2034` border), the Sora / Hanken
Grotesk / JetBrains Mono triad, radius `0.5rem`, glow variables
(`--glow-blur: 24px`, `--glow-spread: -6px`), HUD discipline (mono uppercase
labels, wide tracking), card panels, the LED indicator ritual. The
blinking-cursor ritual is retired here (2026-08-29): the header wordmark is
bare typography — `cogisoft`, no cursor, no drawn full-stop.

Changed — the **color grammar is inverted**:

- **Steel-blue `#5f95c2` = market noise & structure.** Section eyebrows,
  stage labels, the signal field's ticks, the funnel rail's cold end. On the
  personal site blue is the counterpoint; here it is the working color.
- **Coral-clay `#f08a72` = evidence only.** The CTA, ignited constellation
  nodes, passed funnel gates, the "You get" (artifact) label. Coral is
  never ambient — it must always mean "the market said
  yes". The page-wide backdrop deliberately has **no warm core** (unlike
  Atmosphere): warmth exists only where evidence ignites.

## 2. Atmosphere: SignalField, not starfield

- `Backdrop.astro` — page-wide fixed layer: cold indigo/steel nebula depth,
  chthonic floor, vertical polarity, grain. No coral очаг — the cogisoft
  character is cold, the drama comes from steel. The ambient (2026-08-30,
  after two rejected passes) is **steel aurora + signal rain**: three blurred
  curtain-columns of banded indigo light breathing on a ~42s cycle (the
  market as northern lights made of noise), and a two-depth tick field that
  FALLS — far layer ~150s per screen, near layer (larger, softly blurred)
  ~85s, seamless two-copy loops, with two-speed scroll parallax on top.
  Ticks are dots + short vertical dashes (data points, not stars), never
  connected — linked density means evidence, the ambient layer is noise.
  Film dust over the floor; reduced motion stills everything. Rejected on
  the way: solid-blob aurora (unreadable at blur 70px — the banded curtain
  at blur 26px reads), a cold horizon glow line, and chart-paper baselines
  on the floor (owner: straight lines at the bottom felt wrong; the floor
  is now bare gradient + dust).
- `SignalField.astro` — the signature of the **offer** hero only (absolute
  within the hero, not fixed): ~170 seeded steel ticks (dots + short vertical
  dashes — data points, not stars), out of which one region turns out to be
  dense. 26 cluster points ignite coral from the centre outward (~1.5s), then
  a warm halo settles under them and the cluster breathes. The animation is
  the pitch: noise → density → evidence.
- **Never a line.** An earlier version drew a rising 8-node polyline; it read
  as a stock chart ("number go up") — the most generic startup visual there
  is, and the opposite of the thesis. The pattern is expressed as
  **concentration**: no axis, no trend, only "here is where the demand is".
  `Manifesto.astro` follows the same rule — its "edge" panel answers the
  uniform grid with a cluster, not a trend.
- The cluster sits near the viewBox centre so it survives the mobile crop
  (`preserveAspectRatio: xMidYMid slice`).
- A radial mask calms the field under the hero text (bottom-left).
- The hero is **not** full-viewport: `min-h-svh` left the top empty on tall
  windows and hid the next section. It now ends above the fold so the
  manifesto peeks.
- `prefers-reduced-motion`: fully static, cluster and halo pre-lit coral.

### Retired root signatures (kept so the dead ends are not re-walked)

`SolutionLoop.astro` (removed 2026-08-29) stated the business as a diagram:
four kinds of thing converging through a fan into a junction, and a coral
ring of verbs turning forever. The owner read the convergence fan as an
"octopus" — generic and mechanical — and the whole diagram as talking about
the model instead of the client. Its successors: first the money rail, then
the path instrument (see the Root description above). Dead ends that stay
dead regardless of signature:

- **A rising polyline.** Reads as a stock chart. Same rejection as
  SignalField: never a trend, never an axis.
- **A single funnel ring** (Traffic → Page → Lead → CRM). Too narrow for a
  business that builds any kind of tech, and it terminated on a handoff —
  the opposite of the build-and-run thesis.
- **Convergence diagrams** in general (braces, fans, funnels-into-a-point):
  after two attempts they keep reading as machinery, not as a promise.

## 3. Section grammar (root)

`Section.astro` pins the mono label in a narrow left gutter and runs content in
the wide column beside it, identically for every root section. It replaced a
stack of centred blocks that left the right half of a `max-w-6xl` container
empty — the page now reads as one annotated instrument, and quiet stops looking
like unfinished.

## 4. The funnel rail

The services/process section is one component (`Funnel.astro`): five stage
cards (`STAGE 00 · DISCOVERY` … `STAGE 04 · MVP`) on a vertical rail.

- Dim rail = `--border`; lit rail = blue→coral gradient whose height extends
  to the last ignited node (IntersectionObserver + height transition).
- Stage nodes ignite coral when the card enters the viewport (gate passed).
- Each card carries a **dot cluster** that densifies down the funnel
  (3 → 26 dots: the audience accumulates) with a growing coral share
  (evidence stacks up); the MVP stage gets a glowing coral core.
- Stage mono labels stay English in both locales — a brand ritual.
- Kill criteria strip closes the section (mono, coral prefix).

## 5. Voice

Market-first, operator-calm, zero agency-speak. **First person singular** —
there is no team, and "we" collapses on the first call; contractors get named
as contractors once they exist. The word "studio" is retired: it reads as a
competing organisation and it is not what this is.

Copy rules: every stage is a hypothesis with a method, an artifact and a gate
— never a "service"; every offer names an audience, a pain and a measurable
promise, and says out loud what it excludes; honesty as a differentiator ("an
honest stop that saves you months", plus an explicit "not for you if"
section). EN is primary, RU is a parallel voice, not a literal translation.

The **terminal mark** on display headlines is drawn, not typed: the
`full-stop` / `full-stop-accent` utilities in `global.css`. Sora's full stop
is squarish, and at display sizes the coral glyph stopped reading as
punctuation and no longer matched the white periods in the same headline.

The **site mark / favicon** (2026-08-29) is a solid coral chip: `cs` set in
JetBrains Mono 800, letters converted to paths, dark letters `#1a0d07` on
`#f08a72`, radius 14/64. It is one half of a two-brand system — the personal
site carries the mirror chip, `vb` in steel. The chip is the single allowed
exception to "coral is never ambient": it lives outside the page surface
(browser tab, avatars), where it has to win recognition, not obey the page's
grammar. The header wordmark stays bare typography. The previous favicon (a
rising polyline) violated §2's "never a line" rule and is gone.

## 6. Implementation

- Astro + Tailwind v4, static build, no Svelte islands in v1 — interaction
  is CSS animations plus two small vanilla scripts (funnel observer).
- Tokens: `src/styles/global.css` (`:root` + `@theme inline`) — a trimmed
  copy of the personal site's tokens. Extracting a shared theme package into
  `pkgs/ts` is deliberately deferred until this second theme stabilizes.
- i18n mirrors `apps/vvbeliaev`: EN at root, RU under `/ru/`, dictionaries in
  `src/i18n/ui.ts`. Offer/case copy is locale-keyed in `src/lib/config.ts`
  (`Record<Lang, string>`), since it is data rather than UI chrome.
- The primary CTA points at Telegram, not `hello@cogisoft.dev` — that mailbox
  is unverified (see the TODO in `config.ts`) and a dead CTA is worse than
  none.
