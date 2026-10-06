# Decision Wheel — To do

Master file: `Documents\GitHub\decision-wheel\index.html` (git repo; Claude always starts from this file, keeps the answers saved in it, and writes back to the same place; Luke commits & pushes in GitHub Desktop)
This list: `Documents\GitHub\decision-wheel\TODO.md` (Claude reads and updates it as work happens)
Old copies in Downloads (`decision_wheel.html`, `decision_wheel_TODO.md`) are no longer used

## Next up — offline on PC and mobile (git repo)
- [x] Repo cloned with GitHub Desktop to `Documents\GitHub\decision-wheel`; Claude writes files there, Luke commits & pushes
- [ ] Luke to confirm: repo public or private (decides hosting below)
- [ ] Decide hosting: GitHub Pages (needs a public repo on the free plan) or Netlify / Cloudflare Pages (works with a private repo)
- [x] Move the master copy into the repo (`index.html`)
- [ ] In the app (Survey → Link this file), re-link to `index.html` instead of the old Downloads copy
- [ ] Add offline support: `manifest.webmanifest` + service worker + icon, so the app works with no internet and can be added to the home screen
- [ ] Test on desktop (Chrome/Edge) and on mobile, online and offline

## Syncing answers between devices
- [x] Option 1 — move them by hand with export / "Paste a response" (already works)
- [ ] Option 3 — Claude builds the latest answers into the file and pushes it to the repo
- [ ] Option 2 (later) — "Save to GitHub" button: the app writes answers to the repo using a GitHub token entered once per device, and reads them on load
- Note: the "auto-save into the file" link works on desktop Chrome/Edge only, not on phones

## Bios — next increment (waiting on Luke's OK of the preview)
- [ ] Add **Speciality** and **Critics say** (separate from Controversies) to every bio
- [ ] Mobile layout: collapsed pills (initials, name, lifespan, speciality) that open into the full card (preview image: 9_bio_pill_mobile.png)
- [ ] Check speciality and critics text against sources (same rules as research)

## Research still to do (agents stopped earlier)
- [ ] Group 0: Chuck Smith, John MacArthur, John Walvoord, Darrell Bock
- [ ] Group 3: Tim Keller, Sam Storms, Matt Chandler, David Jeremiah
- [ ] Group 5: Kevin DeYoung, Rick Warren, John Lennox, Rebecca McLaughlin
- [ ] Group 6: Jonathan Cahn, Alistair Begg, John Mark Comer, Paul David Tripp, Dane Ortlund
- Rules: 2 sources per claim where possible; new authors need at least 3 topics with views that can be cited; researched people's views are fixed and have no conviction scores (only users have them)

## Done
- [x] Wheel (Stage 1 → 2, branch and inline styles, loop play)
- [x] Compare people: wheel compare, tendencies, heat map, grid, position map, family tree, unusual combos, labels & churches
- [x] Reading list with links to Koorong (AU), then Christianbook (US), plus free-to-read links
- [x] Bios tab, linked both ways with the reading list
- [x] Email survey (beliefs_survey.html) + "Paste a response" import
- [x] Answers built into the file; "Link this file" auto-saves into decision_wheel.html (desktop Chrome/Edge)
