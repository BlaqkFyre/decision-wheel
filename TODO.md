# Decision Wheel — To do

Master file: `Documents\GitHub\decision-wheel\index.html` (git repo; Claude always starts from this file, keeps the answers saved in it, and writes back to the same place; Luke commits & pushes in GitHub Desktop)
This list: `Documents\GitHub\decision-wheel\TODO.md` (Claude reads and updates it as work happens)
Old copies in Downloads (`decision_wheel.html`, `decision_wheel_TODO.md`) are no longer used

## Next up — offline on PC and mobile (git repo)
- [x] Repo cloned with GitHub Desktop to `Documents\GitHub\decision-wheel`; Claude writes files there, Luke commits & pushes
- [x] Repo is public → hosting on GitHub Pages (Settings → Pages → main / root). If public, everyone's answers built into index.html (Luke's, Sarah's, etc.) are visible to anyone — ask respondents first
- [x] Decide hosting: GitHub Pages
- [ ] Add the live site link here once Pages is on
- [x] Move the master copy into the repo (`index.html`)
- [ ] In the app (Survey → Link this file), re-link to `index.html` instead of the old Downloads copy
- [x] Add offline support: `manifest.webmanifest` + `sw.js` + icons (works offline once opened from the website; PC file copy already works offline)
- [ ] Turn on hosting, open it on the phone once, Add to Home Screen
- [ ] Test on desktop (Chrome/Edge) and on mobile, online and offline

## Syncing answers between devices
- [x] Option 1 — move them by hand with export / "Paste a response" (already works)
- [ ] Option 3 — Claude builds the latest answers into the file and pushes it to the repo
- [ ] Option 2 (later) — "Save to GitHub" button: the app writes answers to the repo using a GitHub token entered once per device, and reads them on load
- Note: the "auto-save into the file" link works on desktop Chrome/Edge only, not on phones

## Bios
- [x] Mobile layout: tap-to-open pills on phones, cards on wider screens (style to be adjusted later)
- [x] Speciality and Critics say sections built in — they appear once text is added
- [ ] Research speciality and critics text for each person against sources (same rules as research)
- [ ] Restyle pills (Luke to give direction)

## Research still to do (agents stopped earlier)
- [ ] Group 0: Chuck Smith, John MacArthur, John Walvoord, Darrell Bock
- [ ] Group 3: Tim Keller, Sam Storms, Matt Chandler, David Jeremiah
- [ ] Group 5: Kevin DeYoung, Rick Warren, John Lennox, Rebecca McLaughlin
- [ ] Group 6: Jonathan Cahn, Alistair Begg, John Mark Comer, Paul David Tripp, Dane Ortlund
- Rules: 2 sources per claim where possible; new authors need at least 3 topics with views that can be cited; researched people's views are fixed and have no conviction scores (only users have them)

## Admin & security
- [x] Visitors: view everything, add/edit only their own answers (saved in their browser), send them to Luke by email/code
- [x] Admin (Luke): edit anyone, paste/import responses, delete, link file, export — unlocked per device with a passphrase
- [ ] Luke to set the admin passphrase on the PC (Survey → Set passphrase), then commit & push
- [ ] Sync admin changes made on the phone back to the master (now: Export on phone → Import on PC; later: GitHub sync)
- Note: the lock is on the app's screens; the real protection is that only Luke's PC / GitHub login can change the master file

## Done
- [x] Wheel (Stage 1 → 2, branch and inline styles, loop play)
- [x] Compare people: wheel compare, tendencies, heat map, grid, position map, family tree, unusual combos, labels & churches
- [x] Reading list with links to Koorong (AU), then Christianbook (US), plus free-to-read links
- [x] Bios tab, linked both ways with the reading list
- [x] Email survey (beliefs_survey.html) + "Paste a response" import
- [x] Answers built into the file; "Link this file" auto-saves into decision_wheel.html (desktop Chrome/Edge)
