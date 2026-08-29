# Cogisoft root page: the money-path redesign

Date: 2026-08-29. Status: approved by owner in-session (mockup v2), implemented
the same day. Supersedes the root-page composition from the single-page-era
spec (`2026-07-04-cogisoft-landing-design.md`); the signals offer page is
untouched.

## Why

The owner rejected the previous root page on four counts:

1. The hero "octopus" (the FUNNEL/APP/TOOL/OPTIMISATION brace diagram) read
   as generic and mechanical.
2. "Two phases, not one project" was framed as "how I invented this for
   myself", not as client value.
3. Offers on the landing felt out of place — they exist for targeted direct
   sends, not for the hub.
4. "Not for you if" argued against the owner's actual strengths (hourly work
   exists on vvbeliaev.dev; speed is an advantage, not a disclaimer).

## The job of the page

A **card for warm leads**. First contact is a direct message tuned to the
client's context; the site's job is to confirm seriousness and not get in the
way of replying. It is not a conversion funnel and not an offer. (Consistent
with `workspace/private/strategy/cogisoft-brief.md`: no vertical chosen, the
shell stays neutral, offers live on their own pages.)

Audience: owners / decision-makers without technical or marketing chops, with
an idea or a resource. Their language, not engineering language.

## Positioning

What is sold is **a single unit of responsibility across the whole money
path**, not breadth of skills. The reader's alternative is four contractors
plus themselves as the translator between contractors; every seam is their
risk. One team, one contract, nobody to pass blame to. Two guardrails:

- Ownership stays with the client — code, access, data. The hero says so.
- Team framing, not "one person" — "compact team: engineering core plus
  specialist contractors per job"; plural voice ("we build and run")
  everywhere. Vladimir stays named as the lead; the brands stay openly
  connected.

## Page structure

`RootHero → MoneyPath (rail: 4 zones + "one contract" node) → BuildRun →
Who/Boundaries → Contact`. Offers, NotFor and the SolutionLoop are gone from
the root; Cases stays (renders only once cases exist).

The **money rail** is the page signature: one vertical steel line, four
numbered zone nodes that ignite coral on scroll, ending in a solid coral
node at the "Four zones. One contract" block. The sequence 01-04 is honest —
the money path is a real order. No converging braces, no rising polyline.

Zone grammar (the "hybrid frame"): owner-language question as the heading →
one situation line the reader recognises ("— Clients arrive by accident…") →
artifact chips → a "We run:" line. The four zones:

1. How they find you (acquisition; content pipeline lives here)
2. What they pay for (product; the pain is retention, not shipping speed —
   shipping is commoditised by AI, speed stays as an artifact "MVP in weeks")
3. How it all runs (operations; LLM agents are the single coral spike chip)
4. What the numbers say (analytics — kept as its own zone: it is the
   owner-visible face of the run contract and a differentiator)

BuildRun reframes the two phases as client value: "Shipping is the middle,
not the end"; Run = "you don't have a CTO — on this perimeter, we are it".

Boundaries replace NotFor: not an agency, no branding/identity as a service,
no enterprise/on-site; hourly specialist work is routed to vvbeliaev.dev.

## Implementation notes

- Copy keys rewritten in `src/i18n/ui.ts` (voice comment updated: plural
  team voice is now deliberate). Removed key families: `loop.*`, `phases.*`,
  `phase1.*`, `phase2.*`, `build.*`, `run.*`, `offers.*`, `notfor.*`.
- Deleted components: `SolutionLoop`, `Phases`, `Offers`, `NotFor`. New:
  `MoneyPath.astro`, `BuildRun.astro`. `Contact` takes optional key props so
  the root and the signals page keep different copy.
- Reveal-on-scroll must degrade: without JS everything is visible.
- Mockup that was approved: session scratchpad `cogisoft-mock.html` (v2).
