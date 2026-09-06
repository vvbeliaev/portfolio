#!/usr/bin/env python3
"""Every public project must be backed by an entry in the private backbone.

`workspace/private/backbone.yaml` is the root source of truth about the person:
the real history, with dates and metrics. Everything public — the site, the
profile README, a CV tailored to a vacancy — is a *judgment-derived* subset of
it: what to surface and how to phrase it is a choice, not a transformation, so
no script can verify the wording.

What a script *can* verify is coverage: that nothing is claimed publicly
without an entry behind it, and that links agree where both sides state one.
That is what this does.

    uv run labs/backbone-check/check.py

The backbone is private and absent from clones and CI, so this is a local
check by design. It reports and exits 0 when the backbone is missing.
"""
import json
import re
import subprocess
import sys
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[2]
BACKBONE = ROOT / "workspace" / "private" / "backbone.yaml"
CONFIG = ROOT / "apps" / "vvbeliaev" / "src" / "lib" / "config.ts"


def public_projects() -> list[dict]:
    """Read the site's project lists by executing the config, not parsing it."""
    script = f"""
    const m = await import({json.dumps(str(CONFIG))});
    const all = [...m.PROJECTS, ...m.PARKED_PROJECTS, ...m.ARCHIVED_PROJECTS];
    console.log(JSON.stringify(all.map(p => ({{
      name: p.name, href: p.href, backboneId: p.backboneId ?? null,
    }}))));
    """
    out = subprocess.run(
        ["node", "--input-type=module", "-e", script],
        capture_output=True, text=True, check=True,
    )
    return json.loads(out.stdout)


def backbone_ids(doc: dict) -> dict[str, dict]:
    entries = {}
    for section in ("experience", "projects", "education", "awards"):
        for item in doc.get(section) or []:
            if isinstance(item, dict) and "id" in item:
                entries[item["id"]] = item
    return entries


def main() -> int:
    if not BACKBONE.exists():
        print(f"backbone not found at {BACKBONE.relative_to(ROOT)} — skipping (private, local only)")
        return 0

    doc = yaml.safe_load(BACKBONE.read_text())
    entries = backbone_ids(doc)
    problems = []

    for project in public_projects():
        bid = project["backboneId"]
        if not bid:
            problems.append(f"{project['name']}: no backboneId — a public claim with nothing behind it")
            continue
        entry = entries.get(bid)
        if entry is None:
            problems.append(f"{project['name']}: backboneId '{bid}' is not in the backbone")
            continue
        known = {v for k, v in entry.items() if k in ("url", "href", "site") and isinstance(v, str)}
        if known and project["href"] not in known:
            problems.append(
                f"{project['name']}: site links {project['href']}, backbone says {' / '.join(sorted(known))}"
            )

    if problems:
        print("public claims not backed by the backbone:")
        for p in problems:
            print(f"  - {p}")
        return 1

    print(f"all public projects backed by the backbone ({len(entries)} entries)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
