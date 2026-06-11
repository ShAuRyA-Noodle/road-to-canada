// The single source of truth for the journey. Edit freely as the plan evolves.
// Primary target: Canada CS master's, Fall (September) 2027 intake (earliest feasible).
// French is NOT an admission gate (programs are English). French is the PR gate, later.

export const INTAKE = new Date("2027-09-01T00:00:00");
export const JOURNEY_START = new Date("2026-06-05T00:00:00");

export type Ritual = { id: string; label: string; target: string; accentHours: number };

export const RITUALS: Ritual[] = [
  { id: "french", label: "French", target: "1.5h, sacred. NCLC 7 = the PR key", accentHours: 1.5 },
  { id: "dsa", label: "DSA", target: "2 to 2.5h, solve by hand", accentHours: 2.5 },
  { id: "system", label: "System Design", target: "1h, design then compare", accentHours: 1 },
  { id: "courses", label: "Courses", target: "3 to 5h, fast watch", accentHours: 4 },
  { id: "ielts", label: "IELTS", target: "until the exam is done", accentHours: 1 },
];

export type Tier = "Reach" | "Target" | "Safe";
export type UniStatus = "Researching" | "Preparing" | "Applied" | "Interview" | "Offer" | "Rejected";

export type Uni = {
  id: string;
  name: string;
  program: string;
  tier: Tier;
  tuition: string;
  deadline: string;
  note: string;
};

// star in note = Quebec (French + jobs + lower cost). Tuition is annual international, verify per uni.
export const UNIVERSITIES: Uni[] = [
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
];

export type CheckGroup = { id: string; title: string; items: { id: string; label: string }[] };

export const CHECKLIST: CheckGroup[] = [
  {
    id: "ielts",
    title: "IELTS (English)",
    items: [
      { id: "ielts-book", label: "Exam booked" },
      { id: "ielts-mock", label: "3 to 4 full timed mock tests" },
      { id: "ielts-score", label: "Score 6.5 to 7.0, aim CLB 9" },
    ],
  },
  {
    id: "french",
    title: "French (your PR superpower)",
    items: [
      { id: "fr-choose", label: "Choose TEF Canada or TCF Canada" },
      { id: "fr-daily", label: "Daily French to B2" },
      { id: "fr-book", label: "Book the test" },
      { id: "fr-nclc7", label: "Hit NCLC 7 (B2) in ALL 4 skills = +50 CRS" },
    ],
  },
  {
    id: "lor",
    title: "Letters of Recommendation",
    items: [
      { id: "lor-iit", label: "LOR 1 from IIT professor" },
      { id: "lor-college", label: "LOR 2 from Thapar professor" },
      { id: "lor-signed", label: "Both signed before graduation" },
    ],
  },
  {
    id: "docs",
    title: "Documents",
    items: [
      { id: "doc-wes", label: "WES ECA (degree evaluation, needed for PR too)" },
      { id: "doc-sop", label: "SOP per university" },
      { id: "doc-cv", label: "Academic CV" },
      { id: "doc-transcripts", label: "Official sealed transcripts" },
    ],
  },
  {
    id: "permit",
    title: "Study Permit",
    items: [
      { id: "p-offer", label: "Admission offer (LOI)" },
      { id: "p-caq", label: "CAQ (Quebec only, ~CAD 135, 25 days)" },
      { id: "p-funds", label: "Proof of funds: tuition + CAD 22,895 (Quebec 24,617)" },
      { id: "p-permit", label: "Study permit application + biometrics + medical" },
    ],
  },
  {
    id: "pr",
    title: "PR Path (start during study)",
    items: [
      { id: "pr-pgwp", label: "Apply PGWP right after graduation (3 yrs)" },
      { id: "pr-job", label: "Land skilled CS job (NOC TEER 0 or 1)" },
      { id: "pr-profile", label: "Build Express Entry profile" },
      { id: "pr-12mo", label: "12 months Canadian work = CEC eligible" },
      { id: "pr-file", label: "File PR by PGWP year 2. BOWP bridges you" },
    ],
  },
];

export type Milestone = { when: string; title: string; detail: string };

export const TIMELINE: Milestone[] = [
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
];

export const AFFIRMATIONS: string[] = [
  "French to NCLC 7. That one test unlocks the 379 to 446 draws.",
  "Montreal. AI labs, lower rent, and the PR cheat code.",
  "Apply to eleven. Land three. That is the math.",
  "Solve DSA by hand. The interview has no AI.",
  "PGWP is one shot. File PR by year two, never year three.",
  "Bilingual beats everyone in a smaller pool.",
  "You ship what others only watch. Now learn to defend it.",
  "Future you, a Canadian PR, is built by today's French lesson.",
];
