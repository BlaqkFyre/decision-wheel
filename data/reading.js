// Decision Wheel data: Reading list: books per topic and view (READ), Koorong and Christianbook links (KOORONG), free-to-read links (FREE) and lean tags (LEAN).
// Loaded by index.html before the app script (plain JavaScript, so it also works when index.html is opened as a file).
// Edit the data only; keep each "const NAME=" line. After changing any data file, bump ?v= on the data script tags in index.html.

// Reading list: overview (multi-view book) + one book per option. From general knowledge — check editions before buying.
const READ=[
 {ov:"Three Views on the Millennium and Beyond — Darrell Bock (ed.)",o:["A Case for Historic Premillennialism — Blomberg & Chung (eds.); Things to Come — J. Dwight Pentecost","A Case for Amillennialism — Kim Riddlebarger; Kingdom Come — Sam Storms","Postmillennialism: An Eschatology of Hope — Keith Mathison"]},
 {ov:"Three Views on the Rapture — Alan Hultberg (ed.)",o:["The Rapture Question — John Walvoord","The Pre-Wrath Rapture of the Church — Marvin Rosenthal","The Church and the Tribulation — Robert Gundry"]},
 {ov:"Four Views on the Book of Revelation — C. Marvin Pate (ed.)",o:["Revelation (2 vols) — Robert L. Thomas","The Last Days According to Jesus — R.C. Sproul","More Than Conquerors — William Hendriksen"]},
 {ov:"Perspectives on Israel and the Church: 4 Views — Chad Brand (ed.)",o:["Dispensationalism — Charles Ryrie","Progressive Dispensationalism — Craig Blaising & Darrell Bock","The Israel of God — O. Palmer Robertson"]},
 {ov:"(Covered in most Daniel commentaries)",o:["Daniel's Prophecy of the 70 Weeks — Alva McClain","The Seventy Weeks and the Great Tribulation — Philip Mauro"]},
 {ov:"Antichrist: Two Thousand Years of the Human Fascination with Evil — Bernard McGinn (history)",o:["The Coming Prince — Robert Anderson","The Beast of Revelation — Kenneth Gentry","1, 2 & 3 John commentaries (e.g. John Stott, Tyndale)"]},
 {ov:"Four Views on Hell — Preston Sprinkle (ed.); Why Hell? Three Christian Views Critically Examined — Steve Gregg",o:["Hell Under Fire — Morgan & Peterson (eds.)","The Fire That Consumes — Edward Fudge","The Evangelical Universalist — Gregory MacDonald (Robin Parry)"]},
 {ov:"Body, Soul, and Life Everlasting — John W. Cooper",o:["Body, Soul, and Life Everlasting — John W. Cooper","Immortality or Resurrection? — Samuele Bacchiocchi"]},
 {ov:"Heaven — Randy Alcorn",o:["A New Heaven and a New Earth — J. Richard Middleton; Surprised by Hope — N.T. Wright","The Glory of Heaven — John MacArthur","Seeing God: The Beatific Vision in Christian Tradition — Hans Boersma"]},
 {ov:"Perspectives on Election: Five Views — Chad Brand (ed.)",o:["Chosen by God — R.C. Sproul","Against Calvinism — Roger Olson","Salvation and Sovereignty: A Molinist Approach — Kenneth Keathley"]},
 {ov:"Are Miraculous Gifts for Today? Four Views — Wayne Grudem (ed.)",o:["Practicing the Power — Sam Storms","Charisma vs. Charismania — Chuck Smith","Strange Fire — John MacArthur"]},
 {ov:"Understanding Four Views on Baptism — John Armstrong (ed.)",o:["Believer's Baptism — Schreiner & Wright (eds.)","The Case for Covenantal Infant Baptism — Gregg Strawbridge (ed.)"]},
 {ov:"What About Those Who Have Never Heard? — John Sanders (ed.); Let the Nations Be Glad! — John Piper (missions)",o:["Jesus: The Only Way to God — John Piper; Faith Comes by Hearing — Morgan & Peterson (eds.)","No Other Name — John Sanders","Four Views on Salvation in a Pluralistic World — Okholm & Phillips (eds.)"]},
 {ov:"Four Views on Eternal Security — J. Matthew Pinson (ed.)",o:["Eternal Security — Charles Stanley","The Race Set Before Us — Schreiner & Caneday","Life in the Son — Robert Shank"]},
 {ov:"Four Views on Creation, Evolution, and Intelligent Design — J.B. Stump (ed.)",o:["The Genesis Flood — Whitcomb & Morris","A Matter of Days — Hugh Ross","The Language of God — Francis Collins"]},
 {ov:"Two Views on Women in Ministry — James Beck (ed.)",o:["Recovering Biblical Manhood and Womanhood — Piper & Grudem (eds.)","(No standard book) — Sam Storms, \"A Complementarian Case for Women as Pastors\" (samstorms.org)","Discovering Biblical Equality — Pierce & Groothuis (eds.)"]},
 {ov:"Understanding Four Views on the Lord's Supper — John Armstrong (ed.)",o:["The Lord's Supper: Remembering and Proclaiming Christ — Schreiner & Crawford (eds.)","Given for You — Keith Mathison","This Is My Body — Hermann Sasse"]},
 {ov:"The Nature of the Atonement: Four Views — James Beilby & Paul Eddy (eds.)",o:["The Cross of Christ — John Stott; Pierced for Our Transgressions — Jeffery, Ovey & Sach","Christus Victor — Gustaf Aulén; Leviticus on the Butcher's Block — Phil Bray","(Abelard's view is mostly covered in multi-view books)","Why God Became Man (Cur Deus Homo) — Anselm","A Defence of the Catholic Faith concerning the Satisfaction of Christ — Hugo Grotius"]}
];
// ---- reading list ----
// Where to get each book. K = Koorong (Australia) product page, checked against Koorong's catalogue.
// Books not found at Koorong fall back to a Christianbook (US) search. F = free-to-read copies (legal, publisher/author or public domain).
const KOORONG={
"The Gospel According to Jesus":"the-gospel-according-to-jesus-271779","Strange Fire":"strange-fire-378695","The Battle for the Beginning":"the-battle-for-the-beginning-223378",
"Because the Time Is Near":"because-the-time-is-near-john-macarthur-explains-the-book-of-revelation-259145","The Glory of Heaven":"the-glory-of-heaven-the-truth-about-heaven-angels-and-eternal-life-2nd-edition-619448",
"The Millennial Kingdom":"the-millennial-kingdom-23929","Systematic Theology":"systematic-theology-an-introduction-to-biblical-doctrine-second-edition-564544",
"Recovering Biblical Manhood and Womanhood":"recovering-biblical-manhood-and-womanhood-a-response-to-evangelical-feminism-586250","Desiring God":"desiring-god-2025-edition-meditations-of-a-christian-hedonist-666369",
"Don't Waste Your Life":"dont-waste-your-life-2nd-edition-644129","Let the Nations Be Glad!":"let-the-nations-be-glad-30th-anniversay-edition-the-supremacy-of-god-in-missions-654887",
"Future Grace":"future-grace-2026-edition-the-purifying-power-of-the-promises-of-god-674373","Surprised by Hope":"surprised-by-hope-re-thinking-heaven-resurrection-and-the-mission-of-the-church-335535",
"The New Testament in Its World":"the-new-testament-in-its-world-an-introduction-to-the-history-literature-and-theology-of-the-first-christians-541320",
"The Cross of Christ":"the-cross-of-christ-with-study-guide-252641","Basic Christianity":"basic-christianity-centenary-edition-582705","Baptism and Fullness":"baptism-and-fullness-the-work-of-the-holy-spirit-today-577171",
"The Holiness of God":"the-holiness-of-god-644655","Chosen by God":"chosen-by-god-know-gods-perfect-plan-for-his-glory-and-his-children-72970",
"The Last Days According to Jesus":"the-last-days-according-to-jesus-when-did-jesus-say-he-would-return-420988","The Reason for God":"the-reason-for-god-belief-in-an-age-of-scepticism-292004",
"Prayer":"prayer-experiencing-awe-and-intimacy-with-god-428019","The Way of Wisdom":"the-way-of-wisdom-a-year-of-daily-devotions-in-the-book-of-proverbs-539222",
"What Is Wrong with the World?":"what-is-wrong-with-the-world-the-surprising-hopeful-answer-to-the-question-we-cannot-avoid-667691","The Prodigal God":"the-prodigal-god-recovering-the-heart-of-the-christian-faith-292018",
"Kingdom Come: The Amillennial Alternative":"kingdom-come-the-amillennial-alternative-374011","Kingdom Come":"kingdom-come-the-amillennial-alternative-374011",
"Practicing the Power":"practicing-the-power-welcoming-the-gifts-of-the-holy-spirit-in-your-life-457133","Understanding Spiritual Gifts":"understanding-spiritual-gifts-a-comprehensive-guide-559936",
"Recovering Redemption":"recovering-redemption-bible-study-book-with-video-access-663653","What in the World Is Going On?":"what-in-the-world-is-going-on-300959",
"Agents of the Apocalypse":"agents-of-the-apocalypse-433766","The Book of Signs":"the-book-of-signs-31-undeniable-prophecies-of-the-apocalypse-548394",
"Jesus Revolution":"jesus-revolution-how-god-transformed-an-unlikely-generation-and-how-he-can-do-it-again-today-549849","The Last Hour":"the-last-hour-an-israeli-insider-looks-at-the-end-times-511098",
"Israel and the Church":"israel-and-the-church-an-israeli-examines-gods-unfolding-plans-for-his-chosen-peoples-570218","The Day Approaching":"the-day-approaching-an-israelis-message-of-warning-and-hope-for-the-last-days-73710",
"The Elijah Mandate":"the-elijah-mandate-a-call-to-courageous-faith-in-a-hostile-world-675225","Mere Christianity":"mere-christianity-351213","The Screwtape Letters":"the-screwtape-letters-351216",
"The Great Divorce":"the-great-divorce-351219","The Problem of Pain":"the-problem-of-pain-351221","Miracles":"miracles-351218","Knowing God":"knowing-god-with-study-guide-224202",
"Concise Theology":"concise-theology-gift-edition-572215","Daily Doctrine":"daily-doctrine-a-one-year-guide-to-systematic-theology-659579","The Hole in Our Holiness":"the-hole-in-our-holiness-400824",
"Taking God at His Word":"taking-god-at-his-word-why-the-bible-is-knowable-necessary-and-enough-442857","Things to Come":"things-to-come-23783",
"A Case for Amillennialism":"a-case-for-amillennialism-understanding-the-end-times-368530","Three Views on the Rapture":"three-views-on-the-rapture-counterpoints-series-311434",
"More Than Conquerors":"more-than-conquerors-an-interpretation-of-the-book-of-revelation-75th-anniversary-edition-428323","Perspectives on Israel and the Church: 4 Views":"perspectives-on-israel-and-the-church-411932",
"Daniel's Prophecy of the 70 Weeks":"daniels-prophecy-of-the-70-weeks-292842","The Coming Prince":"the-coming-prince-robert-anderson-classic-library-series-284917",
"Four Views on Hell":"four-views-on-hell-2nd-edition-counterpoints-series-438109","Hell Under Fire":"hell-under-fire-218285","The Evangelical Universalist":"the-evangelical-universalist-second-edition-363782",
"Heaven":"heaven-237954","A New Heaven and a New Earth":"a-new-heaven-and-a-new-earth-reclaiming-biblical-eschatology-359760","Against Calvinism":"against-calvinism-320205",
"Believer's Baptism":"believers-baptism-02-in-new-american-commentary-studies-in-bible-and-theology-series-256389",
"What About Those Who Have Never Heard?":"what-about-those-who-have-never-heard-three-views-spectrum-multiview-series-81496","No Other Name":"no-other-name-an-investigation-into-the-destiny-of-the-unevangelized-33293",
"Eternal Security":"eternal-security-charles-stanley-discipleship-series-182748","The Language of God":"the-language-of-god-262927","Given for You":"given-for-you-186943",
"The Purpose Driven Life":"what-on-earth-am-i-here-for-the-purpose-driven-life-series-359741","The Purpose Driven Church":"the-purpose-driven-church-the-purpose-driven-church-series-93607"};
const FREE={
"Calvary Chapel Distinctives":[["Internet Archive (full text)","https://archive.org/details/2000BookCalvaryChapelDistinctivesDigEd"]],
"Charisma vs. Charismania":[["Internet Archive (full text)","https://archive.org/details/1992BookCHARISMAVs.CHARISMANIADigEd"]],
"Why Grace Changes Everything":[["Internet Archive (full text)","https://archive.org/details/1994BookWhyGraceChangesEverythingDigEd"]],
"Don't Waste Your Life":[["Desiring God (free PDF/ePub)","https://www.desiringgod.org/books/dont-waste-your-life"]],
"Recovering Biblical Manhood and Womanhood":[["Desiring God (free PDF)","https://www.desiringgod.org/books/recovering-biblical-manhood-and-womanhood"]],
"Desiring God":[["Desiring God (free sample chapters)","https://www.desiringgod.org/books/desiring-god"]],
"Let the Nations Be Glad!":[["Desiring God (free sample chapters)","https://www.desiringgod.org/books/let-the-nations-be-glad"]],
"Jesus: The Only Way to God":[["Desiring God (free sample chapter)","https://www.desiringgod.org/books/jesus-the-only-way-to-god"]],
"Unlocking the End-Book":[["Jack Hayford Ministries (free PDF)","https://www.jackhayford.org/wp-content/uploads/2019/02/Unlocking_The_End_Book.pdf"]],
"Synopsis of the Books of the Bible":[["STEM Publishing (full text)","https://www.stempublishing.com/authors/darby/synopsis/"]],
"Lectures on the Second Coming":[["Bible Truth Library: Darby, The Second Coming of Christ","https://bibletruthpublishers.com/the-second-coming-of-christ/john-nelson-darby-jnd/collected-writings-of-j-n-darby-prophetic-1/page-share/lxps-la-62219"]],
"The Coming Prince":[["What Saith the Scripture (full text, public domain)","https://www.whatsaiththescripture.com/Voice/The.Coming.Prince.html"]],
"The Seventy Weeks and the Great Tribulation":[["Internet Archive (1923 edition, public domain)","https://archive.org/details/seventyweeksgrea00maur"]]};
// Does a reading-list book argue for one view, or set out several? [kind, topic option it leans to (or null), note]
// bal = balanced / multi-view, arg = argues for a view, sur = history or survey. Books not listed: multi-view titles are "balanced"; books under an option argue for that option.
const LEAN={"why hell? three christian views critically examined":["bal",null,"Sets out all three views 'without advocating for any one' (publisher). Some reviewers sense it leans away from eternal torment."],
 "antichrist: two thousand years of the human fascination with evil":["sur",null,"A history of the idea, not an argument for one view."],
 "body, soul, and life everlasting":["arg",0,"Defends 'holistic dualism': the person lives on consciously between death and resurrection."],
 "heaven":["arg",0,"Argues for a renewed, physical New Earth."],
 "let the nations be glad!":["arg",0,"Argues that conscious faith in Christ is needed for salvation."],
 "what about those who have never heard?":["bal",null,"Three views (Sanders, Fackre, Nash), each argued by its own supporter."],
 "four views on salvation in a pluralistic world":["bal",null,"Multi-view book. Listed here because hopeful agnosticism has no standard single-view book."]};
