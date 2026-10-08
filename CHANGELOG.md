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
| 2026-10-08 15:32 | `b2bb300` | Add Steve Gregg and seven voices from Why Hell?; add change log | People added: Steve Gregg, Augustine of Hippo, John Calvin, Irenaeus of Lyon, Origen, George MacDonald, Clark Pinnock, F.F. Bruce (43 people now). Reading list: Why Hell? added under Final judgment. New CHANGELOG.md. No answers or topics changed |
| 2026-10-08 16:50 | `8f8a1a8` | Churches tab, Labels rename, atonement checks (batch 1) | New Churches tab: 20 church families with branches, who here belongs (member / partial / left / multiple / background) and usual teaching. "Labels & churches" renamed "Labels". Atonement placed for 11 people (Darby, Hayford, Laurie, Chandler, Warren, Storms, Augustine, Gentry, DeYoung, Athas, Jeremiah). No answers changed |
| 2026-10-08 17:06 | `568c839` | Churches: clearer counts, more spacing, bio links to churches | Church cards: "Among people here" is grouped by topic, reads "Premil: 1 of 2" with an explanation, and its pop-ups list only that church's people. A bit more space in all cards. Bios get a "Churches & groups" row linking to church pages. No data changed |
| 2026-10-09 09:37 | `589664f` | Beliefs link to their topic page | Belief tags (bios, church cards, anywhere a view is shown) open that topic page and highlight the view: click on desktop, or tap and then "topic page →" on phones. No data changed |
| 2026-10-09 | (next) | Flesh out thin profiles, round 1 | 16 new placements: David Jeremiah +7, Paul David Tripp +3, John Mark Comer +2, Oskar Skarsaune +4. No answers changed |

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

### 2026-10-08: Churches tab and atonement checks (batch 1)
- **Atonement placed** (*inf.* = inferred from their church's statement): J.N. Darby Penal substitution; Jack Hayford Penal substitution *(inf., Foursquare)*; Greg Laurie Penal substitution *(inf., Harvest)*; Matt Chandler Penal substitution; Rick Warren Penal substitution; Sam Storms Penal substitution; Augustine of Hippo Christus Victor & restoration; Kenneth Gentry Penal substitution *(inf., WCF)*; Kevin DeYoung Penal substitution *(inf., WCF)*; George Athas Penal substitution *(inf., Article 31 / Sydney)*; David Jeremiah Penal substitution *(inf., BF&M)*.
- **Checked, not placed yet (more research to do):** Chuck Smith, Amir Tsarfati, C.S. Lewis, John Lennox, Rebecca McLaughlin, Jonathan Cahn, John Mark Comer, Paul David Tripp, Dane Ortlund, Oskar Skarsaune, Tokunboh Adeyemo, Steve Gregg, Clark Pinnock, F.F. Bruce. RESEARCH_LOG.md has the reasons.
- **Church families added:** Roman Catholic, Eastern Orthodox, Early church, Lutheran, Anglican, Presbyterian & Reformed, Congregationalist, Baptist, Brethren, Methodist/Wesleyan/Holiness, Pentecostal, Charismatic & Third Wave, Calvary Chapel, Bible churches & dispensational, Messianic Jewish, Non-denominational, Anabaptist, Restorationist & Adventist, Mainline Protestant, Networks & ministries.
- **Status notes (sourced):** Laurie in more than one (Harvest joined the SBC in 2017; Calvary Chapel roots). Warren left (Saddleback disfellowshipped by the SBC, 2023). Packer left the Anglican Church of Canada (2008), then ACNA. Sproul in more than one (ordained PCA 1975–2017; St Andrew's Chapel joined the PCA only in 2023 and voted to leave in 2025). Gregg left Calvary Chapel. MacArthur in more than one (Bible church and non-denominational).

### 2026-10-09: Flesh out thin profiles, round 1
- **David Jeremiah**: Daniel's 70th Still future *(inf.)*; Antichrist Future individual; Judgment Eternal *(inf., BF&M)*; Baptism Believer's *(inf.)*; Security OSAS *(inf.)*; Women Complementarian *(inf.)*; Supper Memorial *(inf.)*.
- **Paul David Tripp**: Judgment Eternal; Security Perseverance; Atonement Penal substitution *(inf.)*.
- **John Mark Comer**: New creation Renewal; Atonement Christus Victor & restoration *(inf.)*.
- **Oskar Skarsaune** (all inferred from his Lutheran setting): Millennium Amillennial; Judgment Eternal; Security Conditional; Atonement Penal substitution.
- Searched, nothing placeable yet: Cahn, McLaughlin, Lennox, Begg, Ortlund, Bray, Adeyemo, Athas (see RESEARCH_LOG.md).
