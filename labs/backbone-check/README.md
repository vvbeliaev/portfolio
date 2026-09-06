# backbone-check

**What** — verifies that every project the site claims publicly has an entry
behind it in the private backbone, and that links agree where both sides state
one.

**Why** — `workspace/private/backbone.yaml` is the root truth about the work.
Everything public is a subset chosen by judgment: what to show and how to phrase
it cannot be checked by a script. Coverage can. This catches the case where a
public page claims something the record does not know about, or points at a
different address than the record does.

**Run**

```bash
uv run labs/backbone-check/check.py
```

The backbone is private and absent from clones and CI, so this is a **local**
check by design — it reports and exits 0 when the file is missing. That is why
it is not wired into `guard.yml`.
