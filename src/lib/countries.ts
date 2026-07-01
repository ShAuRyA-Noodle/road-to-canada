import type { Ritual, Uni, CheckGroup, Milestone } from "./data";

export type CountryKey = "canada" | "australia";

export type CountryData = {
  key: CountryKey;
  label: string;
  heroEyebrow: string;
  heroAccentWord: string;
  heroSub: string;
  footerLine: string;
  intake: string; // ISO
  journeyStart: string; // ISO
  rituals: Ritual[];
  universities: Uni[];
  checklist: CheckGroup[];
  timeline: Milestone[];
  affirmations: string[];
};

// ------------------------------- CANADA -------------------------------
const canada: CountryData = {
  key: "canada",
  label: "Canada",
  heroEyebrow: "The road to September 2027",
  heroAccentWord: "Canada.",
  heroSub:
    "One compass for the whole journey. Eleven universities, French as the PR key, and a master's that opens permanent residence.",
  footerLine: "Eleven applications. French to B2. Then PR.",
  intake: "2027-09-01",
  journeyStart: "2026-06-05",
  rituals: [
    { id: "french", label: "French", target: "1.5h, sacred. NCLC 7 = the PR key", accentHours: 1.5 },
    { id: "dsa", label: "DSA", target: "2 to 2.5h, solve by hand", accentHours: 2.5 },
    { id: "system", label: "System Design", target: "1h, design then compare", accentHours: 1 },
    { id: "courses", label: "Courses", target: "3 to 5h, fast watch", accentHours: 4 },
    { id: "ielts", label: "IELTS", target: "until the exam is done", accentHours: 1 },
  ],
  universities: [
    { id: "waterloo", name: "Waterloo", program: "MMath / MEng CS", tier: "Reach", tuition: "~CAD 23,100", deadline: "~Dec to Feb", note: "Co-op powerhouse. Best tech pipeline." },
    { id: "toronto", name: "Toronto (UofT)", program: "MScAC / MEng", tier: "Reach", tuition: "~CAD 35k to 60k", deadline: "~15 Jan", note: "Top ranked. GRE optional, competitive." },
    { id: "ubc", name: "UBC", program: "MEng / MDS CS", tier: "Reach", tuition: "~CAD 30k", deadline: "varies", note: "Elite. Vancouver, high cost of living." },
    { id: "mcgill", name: "McGill (Quebec)", program: "MSc / MEng CS", tier: "Target", tuition: "~CAD 27k to 50k", deadline: "15 Jan", note: "Montreal. English uni, French city. AI hub." },
    { id: "alberta", name: "Alberta", program: "MEng / MSc CS", tier: "Target", tuition: "~CAD 12k to 20k", deadline: "varies", note: "Strong AI (Amii). Cheaper tuition." },
    { id: "sfu", name: "Simon Fraser", program: "Professional MSc CS", tier: "Target", tuition: "~CAD 6k to 18k", deadline: "varies", note: "Low tuition. Vancouver area." },
    { id: "concordia", name: "Concordia (Quebec)", program: "MSc / MEng (Gina Cody)", tier: "Target", tuition: "~CAD 27k", deadline: "~Feb to Mar", note: "Montreal. Reachable, strong CS." },
    { id: "ottawa", name: "Ottawa (bilingual)", program: "MCS", tier: "Safe", tuition: "~CAD 27k", deadline: "varies", note: "Bilingual city. Federal jobs. French fit." },
    { id: "polymtl", name: "Polytechnique Montreal (Quebec)", program: "MEng / maitrise", tier: "Safe", tuition: "~CAD 23k to 45k", deadline: "varies", note: "Montreal. Engineering school." },
    { id: "carleton", name: "Carleton (bilingual)", program: "MCS / MEng", tier: "Safe", tuition: "~CAD 17k to 25k", deadline: "varies", note: "Ottawa. High odds backup." },
    { id: "udem", name: "Universite de Montreal (Quebec)", program: "Maitrise informatique", tier: "Safe", tuition: "~CAD 25k", deadline: "varies", note: "French uni. Mila AI lab. Cheaper in French." },
  ],
  checklist: [
    { id: "ielts", title: "IELTS (English)", items: [
      { id: "ielts-book", label: "Exam booked" },
      { id: "ielts-mock", label: "3 to 4 full timed mock tests" },
      { id: "ielts-score", label: "Score 6.5 to 7.0, aim CLB 9" },
    ] },
    { id: "french", title: "French (your PR superpower)", items: [
      { id: "fr-choose", label: "Choose TEF Canada or TCF Canada" },
      { id: "fr-daily", label: "Daily French to B2" },
      { id: "fr-book", label: "Book the test" },
      { id: "fr-nclc7", label: "Hit NCLC 7 (B2) in ALL 4 skills = +50 CRS" },
    ] },
    { id: "lor", title: "Letters of Recommendation", items: [
      { id: "lor-iit", label: "LOR 1 from IIT professor" },
      { id: "lor-college", label: "LOR 2 from Thapar professor" },
      { id: "lor-signed", label: "Both signed before graduation" },
    ] },
    { id: "docs", title: "Documents", items: [
      { id: "doc-wes", label: "WES ECA (degree evaluation, needed for PR too)" },
      { id: "doc-sop", label: "SOP per university" },
      { id: "doc-cv", label: "Academic CV" },
      { id: "doc-transcripts", label: "Official sealed transcripts" },
    ] },
    { id: "permit", title: "Study Permit", items: [
      { id: "p-offer", label: "Admission offer (LOI)" },
      { id: "p-caq", label: "CAQ (Quebec only, ~CAD 135, 25 days)" },
      { id: "p-funds", label: "Proof of funds: tuition + CAD 22,895 (Quebec 24,617)" },
      { id: "p-permit", label: "Study permit application + biometrics + medical" },
    ] },
    { id: "pr", title: "PR Path (start during study)", items: [
      { id: "pr-pgwp", label: "Apply PGWP right after graduation (3 yrs)" },
      { id: "pr-job", label: "Land skilled CS job (NOC TEER 0 or 1)" },
      { id: "pr-profile", label: "Build Express Entry profile" },
      { id: "pr-12mo", label: "12 months Canadian work = CEC eligible" },
      { id: "pr-file", label: "File PR by PGWP year 2. BOWP bridges you" },
    ] },
  ],
  timeline: [
    { when: "Jun 2026", title: "Ignition", detail: "IELTS prep. Start French. Begin DSA. Clean GitHub. Research the 11 unis." },
    { when: "Jul to Oct 2026", title: "Final semester + prep", detail: "Protect CGPA. Lock 2 LORs. Start WES ECA. Draft SOPs. Start French." },
    { when: "Oct to Dec 2026", title: "Applications open", detail: "Submit early. IELTS done. Apply with in-progress transcripts where allowed." },
    { when: "Dec 2026", title: "Graduate", detail: "Final transcripts + degree certificate. Submit remaining applications." },
    { when: "Dec 2026 to Mar 2027", title: "Deadlines", detail: "All 11 in (McGill 15 Jan, others Dec to Mar). Keep DSA + courses going." },
    { when: "Mar to May 2027", title: "Offers", detail: "Collect 3 to 4 admits. Pick Montreal for French + cost + jobs." },
    { when: "May to Jul 2027", title: "Permit", detail: "CAQ if Quebec. Proof of funds (CAD 22,895+). Study permit + biometrics." },
    { when: "Jul to Aug 2027", title: "Departure prep", detail: "Visa, flights, housing. Montreal rent is far kinder than Toronto." },
    { when: "Sep 2027", title: "Canada", detail: "Arrive. Study, co-op, build network. Keep French going for PR." },
    { when: "2027 to 2028", title: "French for PR", detail: "Reach NCLC 7 on TEF or TCF. Plus 50 CRS, unlocks the 379 to 446 draws." },
    { when: "2028 to 2029", title: "Graduate + PGWP", detail: "Apply 3-year PGWP. Land a skilled CS job (NOC TEER 0 or 1)." },
    { when: "2029 to 2030", title: "Permanent Residence", detail: "12 months work. French Express Entry draw. File PR by PGWP year 2." },
  ],
  affirmations: [
    "French to NCLC 7. That one test unlocks the 379 to 446 draws.",
    "Montreal. AI labs, lower rent, and the PR cheat code.",
    "Apply to eleven. Land three. That is the math.",
    "Solve DSA by hand. The interview has no AI.",
    "PGWP is one shot. File PR by year two, never year three.",
    "Bilingual beats everyone in a smaller pool.",
    "You ship what others only watch. Now learn to defend it.",
    "Future you, a Canadian PR, is built by today's French lesson.",
  ],
};

// ------------------------------ AUSTRALIA ------------------------------
const australia: CountryData = {
  key: "australia",
  label: "Australia",
  heroEyebrow: "The road to July 2027",
  heroAccentWord: "Australia.",
  heroSub:
    "One compass for the whole journey. Points-based PR, no lottery, no sponsor. A master's that you turn into residency.",
  footerLine: "PTE Superior. Go regional. Stack the points. Then PR.",
  intake: "2027-07-01",
  journeyStart: "2026-06-05",
  rituals: [
    { id: "pte", label: "PTE / IELTS Superior", target: "1.5h, sacred. 79+ / 8 = +20 PR points", accentHours: 1.5 },
    { id: "dsa", label: "DSA", target: "2 to 2.5h, solve by hand", accentHours: 2.5 },
    { id: "system", label: "System Design", target: "1h, design then compare", accentHours: 1 },
    { id: "courses", label: "Courses", target: "3 to 5h, fast watch", accentHours: 4 },
  ],
  universities: [
    { id: "melbourne", name: "Melbourne (Go8)", program: "Master of CS", tier: "Reach", tuition: "~AUD 50k/yr", deadline: "rolling", note: "#1 in Australia. World top ~15." },
    { id: "sydney", name: "Sydney (Go8)", program: "Master of CS", tier: "Reach", tuition: "~AUD 55k/yr", deadline: "rolling", note: "Elite brand. Big tech city." },
    { id: "unsw", name: "UNSW (Go8)", program: "Master of IT / CS", tier: "Target", tuition: "~AUD 50k/yr", deadline: "rolling", note: "Strong engineering, Sydney." },
    { id: "monash", name: "Monash (Go8)", program: "Master of CS / IT", tier: "Target", tuition: "~AUD 45k/yr", deadline: "rolling", note: "Melbourne. Big, industry ties." },
    { id: "anu", name: "ANU (Go8)", program: "Master of Computing", tier: "Target", tuition: "~AUD 47k/yr", deadline: "rolling", note: "Canberra. Regional nomination access." },
    { id: "uq", name: "UQ (Go8)", program: "Master of CS", tier: "Target", tuition: "~AUD 48k/yr", deadline: "rolling", note: "Brisbane. Strong CS." },
    { id: "adelaide", name: "Adelaide (Go8) *regional", program: "Master of CS", tier: "Safe", tuition: "~AUD 42k/yr", deadline: "rolling", note: "REGIONAL: +5 PR points + extra work year. PR-smart." },
    { id: "uwa", name: "UWA (Go8) *regional", program: "Master of CS", tier: "Safe", tuition: "~AUD 43k/yr", deadline: "rolling", note: "Perth. Regional points." },
    { id: "uts", name: "UTS", program: "Master of IT", tier: "Safe", tuition: "~AUD 45k/yr", deadline: "rolling", note: "Sydney. Very industry-focused." },
    { id: "rmit", name: "RMIT", program: "Master of CS", tier: "Safe", tuition: "~AUD 42k/yr", deadline: "rolling", note: "Melbourne. Practical, job-focused." },
    { id: "wollongong", name: "Wollongong *regional", program: "Master of CS", tier: "Safe", tuition: "~AUD 35k/yr", deadline: "rolling", note: "REGIONAL: +5 PR points. Cheap. Near Sydney." },
  ],
  checklist: [
    { id: "english", title: "English (your points key)", items: [
      { id: "en-choose", label: "Choose PTE Academic or IELTS" },
      { id: "en-book", label: "Book the test" },
      { id: "en-mock", label: "Full timed mock tests" },
      { id: "en-superior", label: "Hit Superior: PTE 79+ / IELTS 8 = +20 PR points" },
    ] },
    { id: "lor", title: "Letters of Recommendation", items: [
      { id: "lor-iit", label: "LOR 1 from IIT professor" },
      { id: "lor-college", label: "LOR 2 from Thapar professor" },
      { id: "lor-signed", label: "Both signed before graduation" },
    ] },
    { id: "docs", title: "Documents", items: [
      { id: "doc-transcripts", label: "Official transcripts" },
      { id: "doc-sop", label: "SOP per university" },
      { id: "doc-cv", label: "Academic CV" },
      { id: "doc-gs", label: "Genuine Student (GS) statement, heavily scrutinized" },
    ] },
    { id: "visa", title: "Student Visa (Subclass 500)", items: [
      { id: "v-coe", label: "Offer + CoE (Confirmation of Enrolment)" },
      { id: "v-oshc", label: "OSHC health cover (mandatory)" },
      { id: "v-funds", label: "Funds: AUD 29,710 living + 1 yr tuition + travel" },
      { id: "v-lodge", label: "Lodge visa (AUD 2,000) + biometrics + health exam" },
    ] },
    { id: "pr", title: "PR Path (points-based)", items: [
      { id: "pr-485", label: "485 Temporary Graduate visa (2 yrs, 3 if regional)" },
      { id: "pr-acs", label: "ACS skills assessment (needs 1 yr work after degree)" },
      { id: "pr-points", label: "Stack points: PY + NAATI + regional study + experience" },
      { id: "pr-190", label: "Apply 190 (state) or 491 (regional, +15 pts)" },
      { id: "pr-191", label: "491 to 191 = PR after 3 yrs regional. 190 = PR direct" },
    ] },
  ],
  timeline: [
    { when: "Jun to Oct 2026", title: "Ignition", detail: "PTE / IELTS toward Superior (79+ / 8). Begin DSA. Shortlist. Apply (rolling)." },
    { when: "Jul to Dec 2026", title: "Final semester", detail: "Protect CGPA. Lock 2 LORs. Draft SOP + GS statement." },
    { when: "Dec 2026", title: "Graduate", detail: "Final transcripts. Confirm offers." },
    { when: "Late 2026 to early 2027", title: "Offer + CoE", detail: "Accept offer, pay deposit, receive CoE." },
    { when: "Mar to May 2027", title: "Student visa 500", detail: "Funds (AUD 29,710 + tuition), OSHC, GS statement, lodge visa." },
    { when: "Jun to Jul 2027", title: "Australia", detail: "Fly. July 2027 intake. Consider a regional city for PR points." },
    { when: "2027 to 2029", title: "2-year master's", detail: "Study (regional for +5 pts). Work 48h/fortnight. Keep PTE Superior fresh." },
    { when: "2029", title: "Graduate + 485", detail: "Apply Temporary Graduate visa (2 to 3 years). Age under 35, fine." },
    { when: "2029 to 2030", title: "ACS + points", detail: "ACS skills assessment. 1 yr work. Add PY, NAATI, experience points." },
    { when: "2030 to 2031", title: "Permanent Residence", detail: "190 or 491 nomination. 491 to 191 = PR after regional years." },
  ],
  affirmations: [
    "PTE Superior = +20 points. That one test moves everything.",
    "Go regional. Adelaide. +5 points and an extra work year.",
    "PR by points. No lottery, no sponsor. Just stack them.",
    "Solve DSA by hand. The interview has no AI.",
    "Age is points. Do it before the clock ticks past 32.",
    "491 regional is the surest road to PR.",
    "You ship what others only watch. Now learn to defend it.",
    "Future you, an Australian PR, is built by today's points.",
  ],
};

export const COUNTRIES: Record<CountryKey, CountryData> = { canada, australia };
export const COUNTRY_ORDER: CountryKey[] = ["canada", "australia"];
