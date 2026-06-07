// The single source of truth for the journey. Edit freely as the plan evolves.

export const INTAKE = new Date("2027-10-01T00:00:00");
export const JOURNEY_START = new Date("2026-06-05T00:00:00");

export type Ritual = { id: string; label: string; target: string; accentHours: number };

export const RITUALS: Ritual[] = [
  { id: "german", label: "German", target: "1.5h, sacred", accentHours: 1.5 },
  { id: "dsa", label: "DSA", target: "2 to 2.5h, solve by hand", accentHours: 2.5 },
  { id: "system", label: "System Design", target: "1h, design then compare", accentHours: 1 },
  { id: "courses", label: "Courses", target: "3 to 5h, fast watch", accentHours: 4 },
  { id: "ielts", label: "IELTS", target: "until end of June", accentHours: 1 },
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

export const UNIVERSITIES: Uni[] = [
  { id: "tum", name: "TU Munich", program: "M.Sc. Informatics", tier: "Reach", tuition: "6,000 EUR / sem", deadline: "~31 May 2027", note: "Strictest credit match. CV is weighed here." },
  { id: "rwth", name: "RWTH Aachen", program: "M.Sc. Computer Science", tier: "Reach", tuition: "Free", deadline: "~1 Mar 2027", note: "Elite, huge industry ties." },
  { id: "darmstadt", name: "TU Darmstadt", program: "M.Sc. Computer Science", tier: "Target", tuition: "Free", deadline: "1 Jun to 15 Jul 2027", note: "Entrance exam in Sept. Apply by post." },
  { id: "kit", name: "KIT Karlsruhe", program: "M.Sc. Informatics", tier: "Target", tuition: "~1,500 EUR / sem", deadline: "~30 Apr 2027", note: "Top tier. SAP region." },
  { id: "stuttgart", name: "Uni Stuttgart", program: "M.Sc. Computer Science", tier: "Target", tuition: "~1,500 EUR / sem", deadline: "~15 Jul 2027", note: "Bosch and Daimler country." },
  { id: "berlin", name: "TU Berlin", program: "M.Sc. Computer Science", tier: "Target", tuition: "Free", deadline: "~15 May 2027", note: "Startup capital." },
  { id: "saarland", name: "Saarland Uni", program: "M.Sc. Computer Science", tier: "Safe", tuition: "Free", deadline: "15 May 2027", note: "CISPA. Needs 2 LORs." },
  { id: "dortmund", name: "TU Dortmund", program: "M.Sc. CS / Data Science", tier: "Safe", tuition: "Free", deadline: "Verify", note: "Solid Ruhr region." },
  { id: "fau", name: "FAU Erlangen", program: "M.Sc. CS / AI", tier: "Safe", tuition: "Free", deadline: "Verify", note: "Siemens hub." },
  { id: "paderborn", name: "Uni Paderborn", program: "M.Sc. Computer Science", tier: "Safe", tuition: "Free", deadline: "Verify", note: "High odds backup." },
  { id: "wuerzburg", name: "Uni Wuerzburg", program: "M.Sc. Computer Science", tier: "Safe", tuition: "Free", deadline: "Verify", note: "Solid. Strong AI." },
];

export type CheckGroup = { id: string; title: string; items: { id: string; label: string }[] };

export const CHECKLIST: CheckGroup[] = [
  {
    id: "ielts",
    title: "IELTS",
    items: [
      { id: "ielts-book", label: "Exam booked, end of June" },
      { id: "ielts-mock", label: "3 to 4 full timed mock tests" },
      { id: "ielts-score", label: "Score 7.0 overall, each band 6.5+" },
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
    id: "aps",
    title: "APS Certificate",
    items: [
      { id: "aps-result", label: "Final transcript + degree certificate" },
      { id: "aps-account", label: "Account on aps-india.de" },
      { id: "aps-docs", label: "Upload 10th, 12th, all marksheets, passport" },
      { id: "aps-pay", label: "Pay 18,000 INR" },
      { id: "aps-interview", label: "Verification interview" },
      { id: "aps-cert", label: "Certificate in hand" },
    ],
  },
  {
    id: "docs",
    title: "Documents and Money",
    items: [
      { id: "doc-sop", label: "SOP / motivation letter" },
      { id: "doc-cv", label: "Academic CV" },
      { id: "doc-blocked", label: "Blocked account (~11,904 EUR)" },
      { id: "doc-passport", label: "Passport valid through 2028" },
    ],
  },
  {
    id: "visa",
    title: "Visa and Departure",
    items: [
      { id: "visa-offers", label: "Collect 3 to 4 offer letters" },
      { id: "visa-slot", label: "Book visa appointment early" },
      { id: "visa-house", label: "Accommodation arranged" },
      { id: "visa-fly", label: "Fly to Germany" },
    ],
  },
];

export type Milestone = { when: string; title: string; detail: string };

export const TIMELINE: Milestone[] = [
  { when: "Jun 2026", title: "IELTS sprint", detail: "Hit 7.0. Start German. Begin DSA. Clean GitHub." },
  { when: "Jul 2026", title: "Foundation begins", detail: "German B1 push. DSA linked lists. ML Spec. Open LOR talks." },
  { when: "Aug 2026", title: "Build the base", detail: "DSA trees. DL Spec. System design basics. OS and DBMS revision." },
  { when: "Sep 2026", title: "Go deeper", detail: "DSA graphs. HuggingFace LLM course. SQL. Draft LOR 1." },
  { when: "Oct 2026", title: "Momentum", detail: "DSA dynamic programming. GenAI with LLMs. German B1 to B2." },
  { when: "Nov 2026", title: "Lock the assets", detail: "Both LORs signed. One flagship project to production." },
  { when: "Dec 2026", title: "Finals", detail: "Protect the CGPA. Graduate. Collect transcripts. Draft SOP." },
  { when: "Jan 2027", title: "APS day", detail: "Apply APS the moment results drop. NeetCode 150 begins." },
  { when: "Feb 2027", title: "Application season", detail: "APS processing. Prep RWTH. Darmstadt exam prep." },
  { when: "Mar to Jul 2027", title: "Submit all eleven", detail: "RWTH, KIT, Saarland, TUM, Berlin, Darmstadt, and the rest." },
  { when: "Aug 2027", title: "Offers and visa", detail: "Admits land. Book visa early. Fund blocked account." },
  { when: "Sep 2027", title: "Final steps", detail: "Darmstadt entrance exam. Visa interview. Flights." },
  { when: "Oct 2027", title: "Germany", detail: "Arrive. Day one mission: Werkstudent and thesis hunt." },
];

export const AFFIRMATIONS: string[] = [
  "The plan is not luck. It is 11 applications and a year of honest work.",
  "German every single day. That is the multiplier no one else is doing.",
  "Solve the problem by hand. The struggle is the skill.",
  "You already ship what others only watch. Now learn to defend it.",
  "Protect the CGPA. It is the strongest asset you own.",
  "Three offers from eleven. Spread, not a single bet.",
  "Recognition is not capability. Do the rep.",
  "Future you, in Munich, is built by today you.",
];
