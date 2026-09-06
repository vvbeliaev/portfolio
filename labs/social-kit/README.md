# social-kit

**What** — generates the Corona Bloom social image masters (YouTube banner,
9:16 vertical, 1:1 square, 1.9:1 OG card) as self-contained SVGs.

**Why** — the kit is one recipe with four crops; hand-editing four SVGs drifts.
Palette, layout and the seeded star field live in one file instead.

**Run**

```bash
uv run labs/social-kit/generate.py
```

Writes into `workspace/assets/social/`. PNG export from those SVGs is a separate
manual step — see [that folder's README](../../workspace/assets/social/README.md).
