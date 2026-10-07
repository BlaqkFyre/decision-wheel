# Decision Wheel — To do

Master file: `Documents\GitHub\decision-wheel\index.html` (git repo; Claude always starts from this file, keeps the answers saved in it, and writes back to the same place; Luke commits & pushes in GitHub Desktop; Claude gives a commit title + short summary each time)
This list: `Documents\GitHub\decision-wheel\TODO.md` (Claude reads and updates it as work happens)
Old copies in Downloads (`decision_wheel.html`, `decision_wheel_TODO.md`) are no longer used

## Next up — offline on PC and mobile (git repo)
- [x] Repo cloned with GitHub Desktop to `Documents\GitHub\decision-wheel`; Claude writes files there, Luke commits & pushes
- [x] Repo is public (BlaqkFyre/decision-wheel). Everyone's answers built into index.html are visible to anyone — ask respondents first
- [x] Hosting: GitHub Pages (main / root) — live at https://blaqkfyre.github.io/decision-wheel/
- [x] Move the master copy into the repo (`index.html`)
- [x] In the app, linked to `index.html` (Survey → Link this file)
- [x] Add offline support: `manifest.webmanifest` + `sw.js` + icons (works offline once opened from the website; PC file copy already works offline)
- [x] Turn on hosting
- [ ] Open the site on the phone once, sign in as admin, Add to Home Screen
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

## Dark mode, topic pages & verse links
- [x] Colour mode button (◐ Auto / ☀ Light / ☾ Dark): charcoal dark theme, remembered per device; Auto follows the phone/PC setting
- [x] Topics tab: a page per topic (cards on PC, pills on phone) — overview, debates & controversies, and per view: who holds it here, churches & traditions, verses for, verses critics raise, often held with (worked out from people in the app); links to/from the reading list
- [x] Verse links open in STEP Bible by default; can switch to Bible Gateway or YouVersion (opens the Bible app on phones) — choice remembered per device
- [x] Era filter (Compare people): Ancient history (pre-1900) / Modern history (1900–2005) / Modern (2005+). Filters people in every tab, plus topic debates, "held by" and "often held with". People count in every era they were active in; survey users always show
- [x] Wheel: tapping a spoke only shows details; changing answers on the wheel needs "✎ Edit on wheel" switched on (admin, or a visitor on their own wheel)
- [x] Topic 18: Atonement (Penal substitution / Christus Victor & restoration / Moral influence) — wheel, survey, emailed survey, topic page, tendencies, reading list
- [ ] Research atonement views for everyone else (placed so far: Stott, Packer, Grudem, Piper, Sproul, MacArthur, Keller, Wright, Bray)
- [x] Added Phil Bray (Sydney; Leviticus on the Butcher's Block, 2025): Atonement (stated), Lord's Supper + New creation (inferred)
- [ ] Find a second source / clearer statements for Phil Bray's inferred views
- [x] Emailed survey now lives in the repo as `survey.html` (18 topics) — once pushed: https://blaqkfyre.github.io/decision-wheel/survey.html
- [x] Inferred placements shown in italics (dashed outline) in bios, heat map, topic pages, reading list and wheel tooltips
- [x] Topic pages: "Commonly held by" section listing churches, denominations & organisations for each view
- [ ] Rotating research on little-known people (pairs: Cahn+Begg, Comer+Tripp, Ortlund+McLaughlin, Lennox+Bray, Chandler+Jeremiah) — round 1 done. Round 2 on other low-info people (Bock+DeYoung, Warren+Stott, Lewis+Walvoord, Keller+Packer, Storms+Tsarfati) done. Round 3 (Hayford+Gentry, Darby+Wright, Smith+Laurie, Sproul+MacArthur, Grudem+Piper) and round 4 (round 1 again) done. Research PAUSED: see the method at the top of RESEARCH_LOG.md; ask Luke before resuming
- [x] Atonement now has 5 views (added Satisfaction/Anselm and Governmental/Grotius); wheel, grid, survey and survey.html support 4–5 options. Luke: Christus Victor & restoration (4/5), also partly holds Penal substitution
- [x] Added George Athas (Moore College; Bridging the Testaments): Daniel's 70th week fulfilled by 163 BC (stated); Baptism, Supper, Women inferred from Sydney Anglican ties
- [x] Pop-ups on pills: Commonly held by (people linked to that church/group), Often held with, bio beliefs and describing terms
- [ ] Research the new atonement options for people already in the app
- [x] "＋ Add a person" (admin, in People to Compare): look up on Wikipedia + Open Library, confirm the right person (book match helps), or save without checking when offline and "Check now" later. Saved people appear with a "to research" badge, their bio summary, books and source links, and travel in index.html / Export all / Import
- [ ] Each session: Claude checks the research queue (`added` in index.html) and researches those people properly (then they become full entries)
- [ ] Sync added people from phone to PC automatically (now: they save on the phone; Export all on phone → Import on PC). Later: GitHub sync
- [ ] Add more pre-1900 voices so that era isn't just Darby (e.g. Augustine, Luther, Calvin, Wesley, Spurgeon) — needs research
- [ ] Check topic summaries, verse lists and church lists against sources (currently general reference)
- [ ] Restyle (Luke to give direction)
- Note: "Link this file" now only updates the answers inside index.html and never its code, so an old open tab can't undo an update. After any update from Claude, reload every open Decision Wheel tab once.

## Research still to do (agents stopped earlier)
- [ ] Group 0: Chuck Smith, John MacArthur, John Walvoord, Darrell Bock
- [ ] Group 3: Tim Keller, Sam Storms, Matt Chandler, David Jeremiah
- [ ] Group 5: Kevin DeYoung, Rick Warren, John Lennox, Rebecca McLaughlin
- [ ] Group 6: Jonathan Cahn, Alistair Begg, John Mark Comer, Paul David Tripp, Dane Ortlund
- Rules: 2 sources per claim where possible; new authors need at least 3 topics with views that can be cited; researched people's views are fixed and have no conviction scores (only users have them)

## Admin & security
- [x] Visitors: view everything, add/edit only their own answers (saved in their browser), send them to Luke by email/code
- [x] Admin (Luke): edit anyone, paste/import responses, delete, link file, export — unlocked per device with a passphrase
- [x] Admin passphrase set on the PC and saved into index.html
- [x] Passphrase is on the live site
- [ ] Sync admin changes made on the phone back to the master (now: Export on phone → Import on PC; later: GitHub sync)
- Note: the lock is on the app's screens; the real protection is that only Luke's PC / GitHub login can change the master file

## Done
- [x] Wheel (Stage 1 → 2, branch and inline styles, loop play)
- [x] Compare people: wheel compare, tendencies, heat map, grid, position map, family tree, unusual combos, labels & churches
- [x] Reading list with links to Koorong (AU), then Christianbook (US), plus free-to-read links
- [x] Bios tab, linked both ways with the reading list
- [x] Email survey (beliefs_survey.html) + "Paste a response" import
- [x] Answers built into the file; "Link this file" auto-saves into decision_wheel.html (desktop Chrome/Edge)
