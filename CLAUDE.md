# Decision Wheel — guide for Claude (read this first)

Luke's personal single-file web app comparing evangelical and end-times beliefs with theologians, authors and survey users.
Live site: https://blaqkfyre.github.io/decision-wheel/ · Repo: BlaqkFyre/decision-wheel (public) · Local master: `C:\Users\Ruth\Documents\GitHub\decision-wheel`

Before starting any work, read this file, `TODO.md` (plans and progress) and the top of `RESEARCH_LOG.md` (research method). If anything here disagrees with what Luke says in the chat, Luke wins — then update this file.

## Files in the repo
| File | What it is |
|---|---|
| `index.html` | The whole app (HTML, CSS and JS inline). Also holds the saved answers in `<script id="dw-saved" type="application/json">` near the top |
| `survey.html` | Standalone survey Luke sends to people; they email back a `DW1:…:END` code that he pastes into the app |
| `manifest.webmanifest`, `sw.js`, `icon-*.png`, `apple-touch-icon.png` | Offline / home-screen support (service worker: network first, cached copy offline) |
| `TODO.md` | Plans, done list and open items. Update it with every change |
| `RESEARCH_LOG.md` | Research method plus every source used or tried, person by person |
| `README.md` | Short public description |

## How Luke works (always)
- Luke commits and pushes himself in GitHub Desktop. **Give a commit title plus a short summary with every change.**
- Ask clarifying questions in the chat. Show preview images before big UI changes. Do work in small steps when asked.
- Mobile-first, modern, uncluttered. Light and charcoal-grey dark mode. Teal accent. Equal-size rounded buttons that wrap (no sideways scrolling on phones).
- Pills: thin grey border when closed, teal when open. The views inside a topic page keep their gold border.

## Safe editing workflow (important — learned the hard way)
1. **Always start from the repo file.** Stage `index.html` (and anything else you'll change) from Luke's folder and note its modified time.
2. Edit a working copy. Keep the **`dw-saved` data block from the repo file** (Luke's and users' answers, the admin passphrase check value, and people added on the go). Only replace it deliberately, e.g. when Luke asks to change his own answers. Give that person a newer `saved` timestamp so the change wins over browser copies.
3. Check the scripts' syntax and test with Playwright on desktop and phone sizes, in light and dark mode: switch through every Compare tab and look for page errors. On `file://` with no passphrase the app runs in admin "setup mode". To test visitor mode, use a copy that has the passphrase check value.
4. **Write files into a fresh folder under `/mnt/user-data/outputs/`, send them with SendUserFile, and commit by `fileUuid`** using the modified time from step 1. Don't `cp` over an existing outputs file and commit by path. That once sent an older version and silently undid work.
5. **Stage the files again and byte-compare** with what you built. Only tell Luke it's saved once they match.
6. Remind Luke to reload any open Decision Wheel tabs after an update. "Link this file" saves only update the `dw-saved` block now, so an old tab can't undo code, but reloading avoids confusion.
- Never touch or try to guess the admin passphrase. Its check value lives in `dw-saved.admin`.

## Data model (inside `index.html` — search for these names)
- `TOPICS` — 18 topics, each `{name, q, pick, opts:[{s (short), n (name), d (description)}]}`. 2–5 options (Atonement has 5). `TSHORT` gives short names. `AXES` drives the Tendencies view and needs a value per option.
- `PEOPLE` — built with `V(...)`: one value per topic, either `null`, an option index, or `[optionIndex, "note"]`. **Notes starting `(inferred)` are shown in italics** — use that for views worked out from a church, school or statement of faith rather than the person's own words. Also: `trad`, `church`, `src`, `modern`.
- Later data layers applied on top: `NEWV` (topics 13–17 for older entries), `RESEARCH` (agent research), `ATONE` (atonement), `ATHAS_SRC` (extra sources for newly added people), `R3` (rotating research: `{name:{topicIndex:[option, note, [[title,url]…]]}}`).
- `VER` (source count per person and topic, shown as dots), `LINKS` (source links per person), `BOOKS` (per person: `[title, [topic indexes]]`), `READ` (reading list per topic and option), `KOORONG`/`FREE` book links.
- `BIO` — per person `{life, era, known, spec, crit?, contro:[[text,url]]}`. `ERA_OF` — era codes A (pre-1900), H (1900–2005), M (2005+); the default is H+M.
- Topic pages: `TINFO` (about, controversies `[text, [eras]]`, and per option `for`/`against` verses plus `who`), `ORGS` (Commonly held by chips), `heldWith()` (worked out from people).
- Verses: NET Bible. STEP links use `version=NET2full@reference=Rom.8.19-23`; several passages join with commas ("Read all in STEP"). Verse pop-ups fetch NET text from `labs.bible.org` and cache it on the device.
- Roles: admin (Luke) unlocks per device with a passphrase. Visitors edit only their own answers. Added people (`ADDED`, the "＋ Add a person" research queue) are saved in `dw-saved.added`.

## Adding or updating a person
- Add the `PEOPLE` entry (with `V(...)` for all 18 topics), `BIO`, `BOOKS`, `ERA_OF` if not H+M, and sources (`LINKS`/`VER`, e.g. via `R3` or a `*_SRC` block). Log everything in `RESEARCH_LOG.md`.
- Follow the research rules at the top of `RESEARCH_LOG.md`: 2 sources where possible; mark inferred views; the most recent source wins when sources conflict; check the research queue (`added`) first; confirming a person from one source doesn't rule out their other sources.
- Researched people's views are fixed and have no conviction scores. Only survey users (Luke, Sarah, others) have conviction.

## Luke's own answers
Stored in `dw-saved` (the person with `"self": true`). Example: Atonement = Christus Victor & restoration, conviction 4, also partly holds Penal substitution. Change them only when he asks.
