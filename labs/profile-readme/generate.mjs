#!/usr/bin/env node
/**
 * Renders the fact-bearing blocks of the profile README from the site's own
 * config, so the two cannot disagree.
 *
 * The README is the GitHub profile page — the most visible surface there is,
 * and until 2026-09-06 it claimed LLM-Агент was being built while the site had
 * it archived. Facts have one home (apps/vvbeliaev/src/lib/config.ts); this
 * script is the mechanical copy that keeps the shopfront honest.
 *
 *   node labs/profile-readme/generate.mjs           write the blocks
 *   node labs/profile-readme/generate.mjs --check    fail if they are stale
 *
 * No dependencies: Node strips the TypeScript types on import.
 */
import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const README = path.join(ROOT, "README.md");
const CONFIG = path.join(ROOT, "apps/vvbeliaev/src/lib/config.ts");
const CSS = path.join(ROOT, "apps/vvbeliaev/src/styles/global.css");

/** Palette straight from the theme, so badge colours are not a fourth copy. */
async function palette() {
  const css = await readFile(CSS, "utf8");
  const pick = (token) => {
    const m = css.match(new RegExp(`--${token}:\\s*#([0-9a-fA-F]{6})`));
    if (!m) throw new Error(`token --${token} not found in global.css`);
    return m[1].toUpperCase();
  };
  return {
    bg: pick("background"),
    ember: pick("primary"),
    steel: pick("accent"),
    fg: pick("foreground"),
  };
}

/** Presentation only: which shields.io logo a channel draws with. */
const LOGO = {
  Telegram: "telegram",
  YouTube: "youtube",
  Email: "gmail",
  GitHub: "github",
};

const badge = (label, colour, logo, logoColour, href) =>
  `<a href="${href}"><img src="https://img.shields.io/badge/${label}-${colour}?style=flat&logo=${logo}&logoColor=${logoColour}" alt="${label.replace(/_/g, " ").replace(/·/g, "·")}" /></a>`;

function renderChannels({ SITE, FOLLOW, CONNECT }, c) {
  const rows = [
    badge("vvbeliaev.dev", c.bg, "astro", c.ember, SITE.url),
    ...FOLLOW.map((ch) =>
      badge(
        ch.label === "Telegram" ? "Telegram_·_channel" : ch.label,
        c.bg,
        LOGO[ch.label],
        ch.label === "Telegram" ? c.steel : c.ember,
        ch.href,
      ),
    ),
    badge("Email", c.bg, LOGO.Email, c.ember, CONNECT.find((x) => x.label === "Email").href),
  ];
  return rows.join("\n");
}

function renderWork({ PROJECTS, PARKED_PROJECTS, ARCHIVED_PROJECTS }) {
  const head =
    "| Project | What it is |\n| :-- | :-- |";
  const rows = PROJECTS.map(
    (p) => `| **[${p.name}](${p.href})** · _${p.tag.en}_ | ${p.description.en} |`,
  );
  const names = (list) => list.map((p) => p.name).join(", ");
  const tail = [];
  if (PARKED_PROJECTS.length) tail.push(`Parked: ${names(PARKED_PROJECTS)}.`);
  if (ARCHIVED_PROJECTS.length) tail.push(`Archived: ${names(ARCHIVED_PROJECTS)}.`);
  return [head, ...rows, "", `<sub>${tail.join(" ")}</sub>`].join("\n");
}

function renderReach({ SITE, FOLLOW, CONNECT }) {
  const follow = FOLLOW.map(
    (ch) => `[${ch.label === "Telegram" ? "Telegram channel" : ch.label}](${ch.href})`,
  ).join(" · ");
  // GitHub is omitted: this page already is the GitHub profile.
  const reach = CONNECT.filter((ch) => ch.label !== "GitHub")
    .map((ch) => `[${ch.label === "Telegram" ? "Telegram DM" : ch.label}](${ch.href})`)
    .join(" · ");
  return [
    `**Read the work** → ${follow} · [${SITE.url.replace("https://", "")}](${SITE.url})`,
    `**Reach me** → ${reach}`,
  ].join("\n");
}

function splice(readme, key, body) {
  const open = `<!-- facts:${key} -->`;
  const close = `<!-- /facts:${key} -->`;
  const from = readme.indexOf(open);
  const to = readme.indexOf(close);
  if (from === -1 || to === -1) throw new Error(`README has no ${open} … ${close} block`);
  return readme.slice(0, from + open.length) + "\n" + body + "\n" + readme.slice(to);
}

const config = await import(CONFIG);
const colours = await palette();
const current = await readFile(README, "utf8");

let next = current;
next = splice(next, "channels", renderChannels(config, colours));
next = splice(next, "work", renderWork(config));
next = splice(next, "reach", renderReach(config));

const check = process.argv.includes("--check");
if (next === current) {
  console.log("README facts are in sync with config.ts");
} else if (check) {
  console.error("README facts are stale — run: node labs/profile-readme/generate.mjs");
  process.exit(1);
} else {
  await writeFile(README, next);
  console.log("README facts rewritten from config.ts");
}
