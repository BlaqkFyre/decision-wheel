# Decision Wheel: change log

Every commit gets a row here, with the people, topics and data it changed. Claude adds the entry with each change. The commit hash is filled in on the next update, once Luke has committed.

## Backups: where the data lives
- **Git history is the main backup.** Every commit stores a full copy of `index.html`, including the `dw-saved` block (Luke's and survey users' answers, the admin check value and the research queue). Any earlier version can be restored in GitHub Desktop (History, then right-click the commit and choose "Revert changes in commit", or check out the file from that commit). GitHub (BlaqkFyre/decision-wheel) holds a second copy once pushed.
- **Not backed up until it reaches the repo:** answers or added people saved only in a browser (the phone, or a PC tab without "Link this file"). To back them up, use Export all on that device, then Import on the PC (or send the export to Claude), and commit.
- Old copies in Downloads (`decision_wheel*.html`) are out of date, so don't import from them.

## Commits

| Date (Sydney) | Commit | Title | People / topics / data changed |
|---|---|---|---|
| 2026-10-06 16:48 | `f7fc97e` | Add Decision Wheel App | First version in the repo (moved from Downloads), with the people and answers from before |
| 2026-10-06 17:19 | `f75aa6c` | Mobile Features and passphrase | Admin passphrase |
| 2026-10-06 17:30 | `0155468` | Update index.html | — |
| 2026-10-06 17:31 | `c16ddba` | Update index.html | — |
| 2026-10-06 17:36 | `ef712e5` | Update TODO.md | — |
| 2026-10-06 17:51 | `98867e7` | Dark Mode and View Bios | Bios tab |
| 2026-10-06 17:55 | `eb6b4dc` | Update index.html | — |
| 2026-10-06 18:02 | `3a8c4c4` | Add dark mode and topic pages | Topic pages |
| 2026-10-06 18:20 | `3973223` | Add Atonement topic, Phil Bray and hosted survey | Topic 18 Atonement; person added: Phil Bray; survey.html |
| 2026-10-07 10:32 | `538a09a` | Topic cards: gold-bordered positions, verses moved to the bottom | — |
| 2026-10-07 10:36 | `005599a` | Compare page: views first, people in a collapsible list | — |
| 2026-10-07 15:36 | `a076a62` | NET Bible verses with pop-ups, Read-all-in-STEP, gold-bordered pills | Verse links |
| 2026-10-07 16:04 | `1949119` | Tidy Comparative analysis page; grey/teal pill borders | — |
| 2026-10-07 16:24 | `0feebe6` | People-first compare page, pill pop-ups, 5-view atonement, George Athas | Atonement options: added Satisfaction and Governmental; Luke's Atonement answer; person added: George Athas |
| 2026-10-07 16:49 | `3c52120` | Add Oskar Skarsaune | Person added: Oskar Skarsaune |
| 2026-10-07 16:58 | `7116145` | Add a person: look up, confirm and queue for research | Research queue (`added`) |
| 2026-10-07 17:31 | `0d03bff` | Add a person: keep typed name, rename in queue, keep possible sources | — |
| 2026-10-07 17:33 | `d98d189` | Add Tokunboh Adeyemo | Person added: Tokunboh Adeyemo (from the research queue) |
| 2026-10-07 17:44 | `f1821f0` | Note idea: in-app auto-check of sources for added people | TODO only |
| 2026-10-08 14:46 | `8f7051d` | Add CLAUDE.md guide for continuing the project | Docs only |
| 2026-10-08 14:48 | `df39e20` | Add new-chat starter prompt to CLAUDE.md | Docs only |
| 2026-10-08 15:05 | `733a2e7` | Add a person: books become their author, no duplicate people | Queue: the "Africa Bible Commentary" entry folds into Tokunboh Adeyemo; duplicates merge |
| 2026-10-08 | (next) | Add Steve Gregg and seven voices from Why Hell?; change log | People added: Steve Gregg, Augustine of Hippo, John Calvin, Irenaeus of Lyon, Origen, George MacDonald, Clark Pinnock, F.F. Bruce (43 people now). Reading list: Why Hell? added under Final judgment. New CHANGELOG.md. No answers or topics changed |

## People and topic changes in detail (from 8 Oct 2026)

### 2026-10-08: Add Steve Gregg and seven voices from Why Hell?
Inferred placements are marked *(inf.)*. All sources are listed in RESEARCH_LOG.md.
- **Steve Gregg**: Millennium Amillennial; Rapture Post-trib *(inf.)*; Revelation Preterist; Daniel's 70th Fulfilled; Election Arminian *(inf.)*; Gifts Continuationist. Final judgment not placed: he says he is still deciding between conditionalism and restoration.
- **Augustine of Hippo**: Millennium Amillennial; Judgment Eternal; After death Conscious; Election Calvinist; Baptism Infant; Security Perseverance.
- **John Calvin**: Millennium Amillennial; Israel One people; Judgment Eternal; After death Conscious; Election Calvinist; Gifts Cessationist *(inf.)*; Baptism Infant; Security Perseverance; Supper Spiritual presence; Atonement Penal substitution.
- **Irenaeus of Lyon**: Millennium Premillennial; Revelation Futurist *(inf.)*; Daniel's 70th Still future; Antichrist Future individual; New creation Renewal; Baptism Infant *(inf.)*; Supper Real presence; Atonement Christus Victor & restoration.
- **Origen**: Revelation Idealist *(inf.)*; Judgment Universal reconciliation; Election Arminian *(inf.)*; Baptism Infant; Atonement Christus Victor & restoration.
- **George MacDonald**: Judgment Universal reconciliation; Baptism Infant *(inf.)*; Atonement Christus Victor & restoration.
- **Clark Pinnock**: Judgment Annihilationism; Election Arminian; Gifts Continuationist; Baptism Believer's *(inf.)*; Missions Inclusivism.
- **F.F. Bruce**: Baptism Believer's *(inf.)*; Women Egalitarian; Supper Memorial *(inf.)*. Final judgment not placed ("neither a traditionalist nor a conditionalist").
