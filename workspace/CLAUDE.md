# workspace

The non-code side of the repository. Repo-wide rules are in the root
[CLAUDE.md](../CLAUDE.md); this is what governs writing files here.

## What belongs here

Texts, brand assets, strategy, CV — work that is made by hand and head but never
runs. Anything executable belongs in `labs/` (experiments) or `apps/` (ships).
The line is **code versus non-code**, not raw versus finished.

## The private rule

`workspace/private/` is gitignored and must never be tracked. Anything holding
contacts, phone numbers, internal assessments, raw thoughts, third-party data, or
client/employer detail beyond the public portfolio goes there. **When in doubt,
private.**

- Never move a file out of `private/` into a public path "temporarily".
- Need a public artifact derived from something private (a CV PDF, say)? Put a
  copy in `apps/vvbeliaev/public/`. Do not open the folder.
- `private/` exists only on the owner's machine and is backed up outside git —
  do not expect to find it in a clone, and do not assume a deletion here is
  recoverable.
- `guard.yml` fails a push on a tracked `workspace/private/` path, on a leaked
  secret, and on a phone number in a public file.

## The public half

`assets/` is published and actually consumed: the root profile `README.md` pulls
`assets/corona-bloom-banner.svg` by direct link, and the social masters are
uploaded to the channels by hand.

The generator for those masters lives in `labs/social-kit/` and writes into
`assets/social/`. Code in `labs/`, artifacts on the shelf here — do not move the
generator back.

Colors and fonts in any asset come from the design system
([DESIGN.md](../DESIGN.md)). Do not introduce new ones here.

## The backbone

`private/backbone.yaml` is the root source of truth about the person: the real
history with dates, metrics and context. Edit the biography only there.

Everything public that talks about the work — the site's project lists, the
profile README, a CV tailored to a vacancy — is a **judgment-derived** subset of
it. What to surface and how to phrase it is a choice, so no script can verify
the wording. What is verified is coverage: every public project carries a
`backboneId`, and `uv run labs/backbone-check/check.py` fails if it points at
nothing. The backbone is private, so that check is local by design and skips
itself when the file is absent.

## Articles

Drafts live in `private/drafts/`, published articles in
`apps/vvbeliaev/src/content/blog/`. The pipeline and the storefront conventions
are one document: [.claude/rules/blog.md](../.claude/rules/blog.md), which loads
by itself whenever either path is touched.
