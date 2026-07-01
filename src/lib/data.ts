// Shared types. Actual per-country content lives in countries.ts.

export type Ritual = { id: string; label: string; target: string; accentHours: number };

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

export type CheckGroup = { id: string; title: string; items: { id: string; label: string }[] };

export type Milestone = { when: string; title: string; detail: string };
