// Decision Wheel data: Scholars & academics (SCHOLARS) — researchers whose work bears on the Bible but who don't hold views on 3 or more of the wheel's topics
// (mostly non-professing or non-Christian academics). They appear only in the Scholars section of the Bios and Churches tabs, not on the wheel or in comparisons.
// If a scholar is later placed on 3+ topics, add them to PEOPLE (data/people.js) with scholar:true as well.
// Loaded by index.html before the app script (plain JavaScript, so it also works when index.html is opened as a file).
// Edit the data only; keep the "const SCHOLARS=" line. After changing any data file, bump ?v= on the data script tags in index.html.
// "HF2" = held in Luke's History Files 2 collection (cited by publication details only).
// Fields: name, life, roles, faith (shown as a tag), faithNote, known, spec, positions:[[text, source]], changed, crit:[[text, source]], works:[[title, year]], aff:{group, inst:[...]}, src:[[title, url]]

const SCHOLARS=[
 {name:"Israel Finkelstein",life:"b. 1949 (Tel Aviv)",
  roles:"Professor emeritus, Tel Aviv University; head of the School of Archaeology and Maritime Cultures, University of Haifa; excavator of Megiddo",
  faith:"Israeli Jewish · not a Christian",
  faithNote:"Born into an Ashkenazi Jewish family. Holds a 'complete separation' between faith, tradition and research, and has said he is not committed to the Christian archaeologist de Vaux's concern for the Judeo-Christian faith 'in terms of identity and faith'. Amit (2014) describes him as 'far from orthodoxy' but committed to the Jewish tradition.",
  known:"Archaeologist of ancient Israel. Proposed the 'Low Chronology' (1996), which moves buildings once credited to Solomon into the 9th century BC. Co-author of The Bible Unearthed (2001).",
  spec:"Archaeology and history of Iron Age Israel and Judah, radiocarbon dating, and how archaeology relates to the biblical text.",
  positions:[
   ["No 'glamorous United Monarchy': he calls the picture of Davidic conquests and Solomonic building projects 'an uncritical reading of the biblical text and in contradiction of archaeological finds'.","'A Great United Monarchy? Archaeological and Historical Perspectives' (2010; HF2)"],
   ["The Hebrew Bible holds early 'memories', 'historical or, preferably, quasi-historical', that are older than the written texts (for example, an early cult place at Shiloh).","'History of Ancient Israel: Archaeology and the Biblical Record – the View from 2015' (HF2)"],
   ["The patriarch, exodus and wilderness stories are layered 'cultural memories' from different periods. There is no evidence of the ability to write complex texts in Israel before about 800 BC; northern traditions were probably written under Jeroboam II and merged into a Judah-centred story from the 7th century BC.","'The Pentateuch: Archaeology and History', Oxford Handbook of the Pentateuch (2021; HF2)"]],
  changed:"Launched the Low Chronology in 1996 (Levant 28). By 2015 he wrote that his 'revolutionary fervor has somewhat waned, making it easier for me to seek the middle road', helped by radiocarbon dating and closer work with biblical scholars.",
  crit:[
   ["Daniel Pioske: much to learn from 'Finkelstein the archaeologist', but with 'Finkelstein the historian… the reader must tread carefully'; his use of 'memory' is never defined.","Review of The Forgotten Kingdom, Review of Biblical Literature (2014; HF2)"],
   ["Raz Kletter: a methodological review of the whole Low Chronology and how it developed (1995–2002).","'Chronology and United Monarchy: A Methodological Review', ZDPV 120 (2004; HF2)"],
   ["Amihai Mazar (a self-described moderate conservative): the biblical history 'preserved kernels of ancient texts and realities'.","Mazar's response in the same volume as Finkelstein's 2010 essay (HF2)"]],
  works:[["The Archaeology of the Israelite Settlement",1988],["The Bible Unearthed (with N. A. Silberman)",2001],["David and Solomon (with N. A. Silberman)",2006],["The Quest for the Historical Israel (with A. Mazar)",2007],["The Forgotten Kingdom",2013],["Hasmonean Realities behind Ezra, Nehemiah and Chronicles",2018],["Jerusalem the Center of the Universe",2024]],
  aff:{group:"jewish",inst:["Tel Aviv University","University of Haifa","Israel Academy of Sciences and Humanities"]},
  src:[["Wikipedia: Israel Finkelstein","https://en.wikipedia.org/wiki/Israel_Finkelstein"],["Interview after the Dan David Prize (2005)","https://hayadan.com/interview-with-israel-finkelstein-after-dandavid-award-270205"],["Shimon Amit, 'Israel vs. Judah: The Socio-Political Aspects of Biblical Archaeology in Contemporary Israel' (2014; HF2)",""]]},

 {name:"Emanuel Pfoh",life:"Argentina (birth year not found)",
  roles:"Researcher, CONICET (Argentina's national research council); Instituto de Investigaciones, Faculty of Social Sciences, Pontifical Catholic University of Argentina (UCA); formerly National University of La Plata",
  faith:"Faith not stated · not known to be a Christian",
  faithNote:"No statement of personal faith found. He writes 'from the point of view of general history and anthropology, rather than theology'. He works at a Catholic university, but that describes the institution, not his own beliefs.",
  known:"Historian and anthropologist of ancient Syria-Palestine (patronage, the Amarna age). Argues for writing a history of ancient Palestine rather than of 'biblical Israel'. The Emergence of Israel in Ancient Palestine (2009).",
  spec:"Political anthropology of the Late Bronze and Iron Age Levant; how histories of ancient Israel are written (historiography); biblical 'minimalism'. Doctorate in History, University of Buenos Aires (2011).",
  positions:[
   ["Rates the 'minimalist' scholars (Davies, Thompson, Lemche) as 'positive and laudatory' from the standpoint of general history, though a minority in biblical studies.","'On Biblical Minimalism in Hebrew Bible / Old Testament Studies', Annali di storia dell'esegesi 38/2 (2021; HF2)"],
   ["Histories of 'ancient Israel' keep being written because 'theological academic centers and communities of faith' want the biblical past told as history.","Review of Arnold & Hess (eds.), Ancient Israel's History, Review of Biblical Literature (2017; HF2)"],
   ["In that review of an evangelical textbook (Baker Academic) he calls its conquest model 'another rationalistic paraphrase of the biblical text', and doubts there was an 'Israelite people' before the Iron Age apart from what the Bible says.","Review of Arnold & Hess, RBL (2017; HF2)"]],
  changed:"",
  crit:[],
  works:[["The Emergence of Israel in Ancient Palestine",2009],["Loyal Servants of the King (Palamedes 8)",2013],["'A Hebrew Mafioso: Reading 1 Samuel 25 Anthropologically'",2014],["Syria-Palestine in the Late Bronze Age",2016],["'Rethinking the Historiographical Impulse' (SJOT 32)",2018],["Biblical Narratives, Archaeology and Historicity",2019],["T&T Clark Handbook of Anthropology and the Hebrew Bible",2022]],
  aff:{group:"none",inst:["CONICET","Pontifical Catholic University of Argentina (UCA)","National University of La Plata"]},
  src:[["CONICET researcher profile","https://bicyt.conicet.gov.ar/fichas/persona/en/9583"],["Open Library: Emanuel Pfoh","https://openlibrary.org/authors/OL6502864A"],["'On Biblical Minimalism…' (2021; HF2)",""],["Review of Arnold & Hess, RBL (2017; HF2)",""]]},

 {name:"Emanuel Tov",life:"b. 1941 (Amsterdam); in Israel since 1961",
  roles:"J. L. Magnes Professor of Bible (emeritus), Hebrew University of Jerusalem; editor-in-chief of the Dead Sea Scrolls publication project (1990/91–2009); Israel Prize (2009)",
  faith:"Jewish background · not a Christian theologian",
  faithNote:"Born Menno Toff in Amsterdam during the Nazi occupation; Bar Mitzvah, Talmud Torah, and the Labour Zionist youth movement Habonim Dror; moved to Israel in 1961. No statement of personal faith found. He writes for TheTorah.com, a Jewish site, framing his article around Shavuot.",
  known:"Leading textual critic of the Hebrew Bible: the Masoretic Text, the Septuagint (Greek Old Testament) and the Dead Sea Scrolls. Textual Criticism of the Hebrew Bible (4 editions, 1992–2022).",
  spec:"How the Hebrew Bible's text was copied and transmitted, and how its versions relate to each other.",
  positions:[
   ["The Torah's text is identical across all traditions in about 96–97% of cases; the 3–4% of differences come from other text traditions, harmonising additions or copying errors.","'Do We Know the Original Text of the Torah?', TheTorah.com (HF2)"],
   ["The Masoretic Text is 'generally the most trustworthy text' for the Torah, but not always: at Deut 32:8, 43 its scribes removed references to other gods that the Septuagint and Qumran scrolls still have.","'Do We Know the Original Text of the Torah?' (HF2)"],
   ["Textual criticism can reconstruct a common text of about the 3rd century BC, not the Torah's original composition. He notes that critical scholarship, 'even amongst its most conservative practitioners', doesn't consider a 13th-century date (by Moses) plausible.","'Do We Know the Original Text of the Torah?' (HF2)"]],
  changed:"",
  crit:[],
  works:[["The Text-Critical Use of the Septuagint in Biblical Research",1981],["Textual Criticism of the Hebrew Bible (4th ed. 2022)",1992],["The Greek and Hebrew Bible",1999],["Scribal Practices and Approaches Reflected in the Texts Found in the Judean Desert",2004],["The Dead Sea Scrolls Reader",2004],["Textual History of the Bible (with A. Lange)",2016]],
  aff:{group:"jewish",inst:["Hebrew University of Jerusalem","Dead Sea Scrolls Foundation"]},
  src:[["Wikipedia: Emanuel Tov","https://en.wikipedia.org/wiki/Emanuel_Tov"],["TheTorah.com: Do We Know the Original Text of the Torah?","https://www.thetorah.com/article/do-we-know-the-original-text-of-the-torah"],["Tov, Bibliography (updated 8 Aug 2019; HF2)",""]]}
];
// Groups for the Scholars view of the Churches tab (faith background / affiliation, not church membership)
const SCHOLAR_AFF=[
 {id:"jewish",n:"Jewish (by background or tradition)",about:"Scholars from a Jewish background. Neither professes Christian faith, so none of the church families in this app applies."},
 {id:"none",n:"Faith not stated",about:"Scholars whose personal faith isn't stated in the sources checked. They write from history or anthropology rather than theology."}
];
