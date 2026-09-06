# profile-readme

**What** — renders the fact-bearing blocks of the repository's profile
`README.md` (channels, current work, reach-out lines) from the site's own
config and theme tokens.

**Why** — the profile README is the most visible page in the whole account, and
it was wrong: it advertised LLM-Агент as current work while the site had it
archived, and listed Quizbee as parked while the site called it archived. The
list of projects is a fact, and a fact has one home. This makes the README a
mechanical copy of that home instead of a second, slowly rotting opinion.
Badge colours come from `:root`, so the palette is not copied here either.

**Run**

```bash
node labs/profile-readme/generate.mjs           # rewrite the blocks
node labs/profile-readme/generate.mjs --check   # fail if they are stale (CI)
```

No dependencies — Node strips the TypeScript types when importing the config.

Only the regions between `facts:` markers are generated; the banner, the stack
badges and the stats widgets stay hand-written.
