# Runbook — iliasmandalos.me

This repo is **public**. Private material lives one folder up, in `~/Desktop/JobSeek/`, and never comes in here.

## Change something
1. **Case study text or figures:** edit the private source in `../portfolio/case_studies/0N-*.md`, then
   `node ../tools/sync-site.mjs`. Never edit `src/content/work/` or `public/work/` by hand — the sync overwrites them.
   New case study: add it to `../tools/site-manifest.json`, then sync.
2. **About / CV:** edit `src/content/pages/about.md` or `cv.md`. After any CV change: `npm run cv:pdf`.
3. **Colours, fonts, spacing:** `src/styles/tokens.css` only. `npm run test:unit` checks contrast.
4. **Home label wording:** `src/pages/index.astro`.
5. **Link preview card:** `src/pages/og-card.astro`, then `npm run og`.

## Preview
`npm run dev` → http://localhost:4321 · or `npm run screens` → `../portfolio/site/screens/`.
Show Ilias; wait for his OK.

## Check and publish
```
npm test                              # unit + browser + accessibility
git add -A && git commit -m "…"       # end with the Co-Authored-By line
git push                              # pre-push hook builds and runs the guard; blocks on any problem
gh run watch                          # live about a minute later
```
If the guard blocks: read its list, fix the source, never bypass it (`--no-verify` is not allowed).
After a fresh clone, reinstall the hook: `../tools/install-hook.sh`.

If `astro preview` refuses to start ("already running"): `npx astro preview stop`.

## Undo
`git revert <commit>` then `git push`. `git log --oneline` lists every change.

## Launch switches (done once, on launch day)
`site.config.mjs`: `url` → `https://iliasmandalos.me`, `indexable` → `true`; add `public/CNAME` containing `iliasmandalos.me`.

## Facts
GitHub: IliasRhodes/IliasRhodes.github.io · Domain: Papaki, paid to 27 Jun 2027 · Contact: iliasmandalos@gmail.com
