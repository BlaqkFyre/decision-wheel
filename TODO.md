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
- [x] "Labels & churches" renamed "Labels"; new **Churches** tab after Bios: 20 church families, with branches shown like topic options, people here with status (member / partial / left / multiple / background), usual teaching per topic (from confessions and statements, with sources), and views among people here. Church names on topic pages open a pop-up with a link to the church page
- [x] Churches: counts read "Premil: 1 of 2" per topic with an explanation; pop-ups on those list only that church's people; a bit more spacing in cards; bio cards link to their churches and groups (and church cards link to bios)
- [x] Belief tags link to their topic page and highlight the view (click on desktop; tap, then "topic page →" on phones)
- [x] Reading list: each book tagged Balanced / Argues for a view / History-survey (LEAN in index.html; multi-view titles count as balanced, books under an option argue for it)
- [x] Topic pages show "xx of 43 people have a recorded view" (all eras, survey users included)
- [ ] Simple view for Topics (preview shown to Luke; waiting for his OK before saving)
- [ ] Lean tags: check the hand-set ones (Alcorn Heaven, Cooper, Piper Let the Nations Be Glad!, McGinn) against reviews
- [ ] Churches: check each family's "usually teaches" line by line against its confession; add Calvary Chapel's own beliefs page (it timed out); confirm Ortlund's and Tripp's PCA ties, The Village Church's SBC status, Lennox's and McLaughlin's churches, and Parkside's affiliation
- [ ] Atonement checks: batch 1 placed 11 people. Still to place (more research to do): Chuck Smith, Tsarfati, Lennox, McLaughlin, Cahn, Comer (rejects penal substitution, 2025), Tripp, Ortlund, Skarsaune, Adeyemo, Gregg, Pinnock, Bruce. Lewis stays unplaced on purpose
- [x] Flesh-out round 1: Jeremiah +7, Tripp +3, Comer +2, Skarsaune +4 (16 placements)
- [ ] Flesh-out round 2+ (still thin): Cahn, McLaughlin, Lennox, Begg, Ortlund, Bray, Adeyemo, Athas. Leads are in RESEARCH_LOG.md
- [ ] (ongoing) Next stage (Luke chose): flesh out the 12 people with 14+ gaps: Cahn, Comer, McLaughlin, Tripp, Skarsaune, Lennox, Begg, Ortlund, Bray, Adeyemo, Jeremiah, Athas
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
- [x] "＋ Add a person" only adds people, never books: if the name is a book title (e.g. Africa Bible Commentary) it asks for the author, saves the person under the author's name, and keeps the book as a source ("Wikipedia (book)")
- [x] No double ups: names are compared loosely ("J.I. Packer" = "Dr J I Packer"), plus matching Wikipedia/Open Library records. Someone already researched isn't added again; someone already in the queue gets the new book/notes merged into their one entry. Old book-title and duplicate queue entries are tidied automatically on load (the old "Africa Bible Commentary" entry folds into Tokunboh Adeyemo)
- [ ] Each session: Claude checks the research queue (`added` in index.html) and researches those people properly (then they become full entries)
- [ ] Sync added people from phone to PC automatically (now: they save on the phone; Export all on phone → Import on PC). Later: GitHub sync
- [ ] LATER (Luke's idea): in-app auto-check for added people. The app fetches basic sources it can reach from the browser (Wikipedia article text, Wikidata, Open Library, and maybe church "what we believe" pages that allow it), scans for clear view terms (e.g. "premillennial", "cessationist", "complementarian", "believer's baptism"), and only places a view when 2 independent sources agree. Auto-found views marked "auto-found — check" (like inferred), with source links, for Luke to approve; everything else stays in the research queue for Claude. Watch for: many sites block browser requests, and keyword matches can be wrong (e.g. an article describing a view the person argues against)
- [x] Added Steve Gregg (Why Hell?) and voices his book names: Augustine of Hippo, John Calvin, Irenaeus of Lyon, Origen, George MacDonald, Clark Pinnock, F.F. Bruce (see RESEARCH_LOG.md / CHANGELOG.md)
- [ ] Luke: confirm which hell view Why Hell? assigns to Irenaeus (and anyone else), since the publisher pages don't list names. Gregg and Bruce are left unplaced on Final judgment (both undecided)
- [ ] Follow-ups for the new people: Origen's millennium (De Principiis 2.11), Augustine's Antichrist (City of God 20.19), Gregg on Israel & the church, Pinnock on women in ministry
- [ ] Add more pre-1900 voices (now: Darby, Augustine, Calvin, Irenaeus, Origen, MacDonald). Still to add: e.g. Luther, Wesley, Spurgeon — needs research
- [x] Change log: CHANGELOG.md records every commit and every people/topic/data change; git history is the backup of index.html and its saved answers
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
