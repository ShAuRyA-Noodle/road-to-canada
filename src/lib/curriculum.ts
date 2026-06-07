// Every course link Shaurya uploaded. NOTHING is removed. Redundant and duplicate
// links are kept and flagged, not cut, so the overlap is visible.
// verdict: Do = core | Later = job phase 2027 | Done = finished | Skip = low value for your path (still listed)
// redundant: short note when an item duplicates or overlaps another.

export type Verdict = "Do" | "Later" | "Skip" | "Done";
export type Track =
  | "DSA & Interviews"
  | "System Design"
  | "ML & Deep Learning"
  | "GenAI & Agentic"
  | "Data"
  | "Web & DevOps"
  | "Tools"
  | "Math & Basics";

export type Course = {
  id: string;
  label: string;
  url?: string;
  track: Track;
  verdict: Verdict;
  note?: string;
  redundant?: string; // duplicate or overlap marker, kept visible
};

export const TRACKS: Track[] = [
  "DSA & Interviews",
  "System Design",
  "ML & Deep Learning",
  "GenAI & Agentic",
  "Data",
  "Web & DevOps",
  "Tools",
  "Math & Basics",
];

export const COURSES: Course[] = [
  // DSA & Interviews
  { id: "striver-a2z", label: "Striver A2Z DSA (course)", url: "https://youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz", track: "DSA & Interviews", verdict: "Do", note: "Foundation. Solve by hand." },
  { id: "striver-a2z-sheet", label: "Striver A2Z DSA tracker sheet", url: "https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/", track: "DSA & Interviews", verdict: "Do" },
  { id: "striver-sde", label: "Striver SDE Sheet (90 days)", url: "https://takeuforward.org/interviews/strivers-sde-sheet-top-coding-interview-problems/", track: "DSA & Interviews", verdict: "Later" },
  { id: "lc-150", label: "LeetCode Top Interview 150", url: "https://leetcode.com/studyplan/top-interview-150/", track: "DSA & Interviews", verdict: "Later", redundant: "Interview-set overlap (pick one)" },
  { id: "neetcode-150", label: "NeetCode 150", url: "https://neetcode.io/practice", track: "DSA & Interviews", verdict: "Later", note: "Pick this as the main interview set." },
  { id: "neetcode-io", label: "Neetcode.io curated lists", url: "https://neetcode.io/", track: "DSA & Interviews", verdict: "Later", redundant: "Same site as NeetCode 150" },
  { id: "blind-75", label: "Blind 75 (speed revision)", url: "https://neetcode.io/practice?tab=blind75", track: "DSA & Interviews", verdict: "Later", redundant: "Subset of NeetCode 150" },

  // System Design
  { id: "tuf-sysd", label: "takeuforward System Design roadmap", url: "https://takeuforward.org/system-design/complete-system-design-roadmap-with-videos-for-sdes", track: "System Design", verdict: "Do", note: "Start with basics now." },
  { id: "udemy-sysd", label: "Mastering System Design (Udemy)", url: "https://www.udemy.com/course/mastering-system-design-from-basics-to-cracking-interviews/", track: "System Design", verdict: "Later", redundant: "Overlaps takeuforward System Design" },

  // ML & Deep Learning
  { id: "ng-ml", label: "ML Specialization (Andrew Ng)", url: "https://www.coursera.org/specializations/machine-learning-introduction", track: "ML & Deep Learning", verdict: "Do" },
  { id: "ng-dl", label: "Deep Learning Specialization (Andrew Ng)", url: "https://www.coursera.org/specializations/deep-learning", track: "ML & Deep Learning", verdict: "Do" },
  { id: "pytorch-dl", label: "PyTorch Deep Learning (playlist)", url: "https://www.youtube.com/watch?v=QZsguRbcOBM&list=PLKnIA16_Rmvboy8bmDCjwNHgTaYH2puK7", track: "ML & Deep Learning", verdict: "Do", note: "Do alongside Ng DL." },
  { id: "dl-playlist", label: "Deep Learning (playlist)", url: "https://www.youtube.com/watch?v=2dH_qjc9mFg&list=PLKnIA16_RmvYuZauWaPlRTC54KxSNLtNn", track: "ML & Deep Learning", verdict: "Skip", redundant: "Overlaps Andrew Ng Deep Learning" },
  { id: "ml-prod", label: "ML in Production (Andrew Ng)", url: "https://www.coursera.org/learn/introduction-to-machine-learning-in-production", track: "ML & Deep Learning", verdict: "Later", note: "MLOps, job phase." },
  { id: "mlops", label: "MLOps Fundamentals (Coursera)", url: "https://www.coursera.org/learn/mlops-fundamentals", track: "ML & Deep Learning", verdict: "Later", redundant: "Overlaps ML in Production" },

  // GenAI & Agentic
  { id: "hf-llm", label: "HuggingFace LLM course", url: "https://huggingface.co/learn/llm-course/chapter1/1", track: "GenAI & Agentic", verdict: "Do", note: "Best free LLM resource." },
  { id: "genai-llms", label: "Generative AI with LLMs (Coursera)", url: "https://www.coursera.org/learn/generative-ai-with-llms", track: "GenAI & Agentic", verdict: "Do" },
  { id: "genai-playlist", label: "Generative AI (playlist)", url: "https://www.youtube.com/watch?v=pSVk-5WemQ0&list=PLKnIA16_RmvaTbihpo4MtzVm4XOQa0ER0", track: "GenAI & Agentic", verdict: "Later", redundant: "EXACT DUPLICATE: same URL as Gen AI LangChain" },
  { id: "genai-langchain-pl", label: "Gen AI LangChain (playlist)", url: "https://www.youtube.com/watch?v=pSVk-5WemQ0&list=PLKnIA16_RmvaTbihpo4MtzVm4XOQa0ER0", track: "GenAI & Agentic", verdict: "Later", redundant: "EXACT DUPLICATE: same URL as Generative AI" },
  { id: "agentic-langgraph", label: "Agentic LangGraph (playlist)", url: "https://www.youtube.com/watch?v=yC36gN-rqjo&list=PLKnIA16_RmvYsvB8qkUQuJmJNuiCUJFPL", track: "GenAI & Agentic", verdict: "Later", redundant: "Agentic cluster (pick one)" },
  { id: "mcp", label: "MCP (playlist)", url: "https://www.youtube.com/watch?v=3_TN1i3MTEU&list=PLKnIA16_Rmva_oZ9F4ayUu9qcWgF7Fyc0", track: "GenAI & Agentic", verdict: "Later", redundant: "Agentic cluster" },
  { id: "agentic-ai", label: "Agentic AI (playlist)", url: "https://www.youtube.com/watch?v=rV3HJ4LEZ7k&list=PLHDyhEz2cEkg7jDELx9qOhTiHbrHExA1m", track: "GenAI & Agentic", verdict: "Later", redundant: "Agentic cluster" },
  { id: "rag-playlist", label: "RAG (playlist)", url: "https://www.youtube.com/playlist?list=PLKnIA16_Rmva0dRLWEHLznSHKbFD_RJfX", track: "GenAI & Agentic", verdict: "Later", redundant: "RAG cluster (pick one)" },
  { id: "adv-rag", label: "Advanced RAG with Vector DBs (Coursera)", url: "https://www.coursera.org/learn/advanced-rag-with-vector-databases-and-retrievers", track: "GenAI & Agentic", verdict: "Later", redundant: "RAG cluster" },
  { id: "ibm-rag", label: "IBM RAG and Agentic AI (certificate)", url: "https://www.coursera.org/professional-certificates/ibm-rag-and-agentic-ai", track: "GenAI & Agentic", verdict: "Later", redundant: "RAG + agentic cluster" },
  { id: "udemy-genai-lc", label: "GenAI with LangChain + HuggingFace (Udemy)", url: "https://www.udemy.com/course/complete-generative-ai-course-with-langchain-and-huggingface/", track: "GenAI & Agentic", verdict: "Later", redundant: "GenAI cluster overlap" },
  { id: "coursera-rag-lc", label: "GenAI apps with RAG and LangChain (Coursera)", url: "https://www.coursera.org/learn/project-generative-ai-applications-with-rag-and-langchain", track: "GenAI & Agentic", verdict: "Later", redundant: "RAG cluster" },
  { id: "finetune-llm", label: "Finetuning LLMs (project)", url: "https://www.coursera.org/projects/finetuning-large-language-models-project", track: "GenAI & Agentic", verdict: "Later" },
  { id: "nlp-playlist", label: "NLP (playlist)", url: "https://www.youtube.com/watch?v=zlUpTlaxAKI&list=PLKnIA16_RmvZo7fp5kkIth6nRTeQQsjfX", track: "GenAI & Agentic", verdict: "Later", redundant: "Overlaps NLP Specialization" },
  { id: "nlp-spec", label: "NLP Specialization (Coursera)", url: "https://www.coursera.org/specializations/natural-language-processing", track: "GenAI & Agentic", verdict: "Later", redundant: "Overlaps NLP playlist" },

  // Data
  { id: "sql-ds", label: "SQL for Data Science (playlist)", url: "https://www.youtube.com/playlist?list=PLKnIA16_RmvYun1_5r9Fb4eQigioPB7yn", track: "Data", verdict: "Do", note: "Fast, interview-useful." },
  { id: "tableau", label: "Tableau (playlist)", url: "https://www.youtube.com/watch?v=TnKL074VwXg&list=PLKnIA16_RmvYoVWj-ep-p0hbQliFAvA7x", track: "Data", verdict: "Skip", note: "BI tool, off your path." },

  // Web & DevOps
  { id: "angela-yu", label: "Complete Web Dev Bootcamp (Angela Yu)", url: "https://www.udemy.com/course/the-complete-web-development-bootcamp/", track: "Web & DevOps", verdict: "Done" },
  { id: "jonas-react", label: "The Ultimate React Course (Jonas)", url: "https://www.udemy.com/course/the-ultimate-react-course/", track: "Web & DevOps", verdict: "Skip", redundant: "React you already ship" },
  { id: "jonas-js", label: "Complete JavaScript Course (Jonas)", url: "https://www.udemy.com/course/the-complete-javascript-course/", track: "Web & DevOps", verdict: "Skip", redundant: "JS you already know" },
  { id: "smilga-react", label: "React Tutorial and Projects (Smilga)", url: "https://www.udemy.com/course/react-tutorial-and-projects-course/", track: "Web & DevOps", verdict: "Skip", redundant: "Overlaps Jonas React" },
  { id: "node-coursera", label: "Backend Node/Express/Mongo (Coursera)", url: "https://www.coursera.org/learn/backend-development-nodejs-express-mongodb-restapis", track: "Web & DevOps", verdict: "Skip", redundant: "You ship FastAPI backends" },
  { id: "backend-proto", label: "Backend Communications and Protocols (Udemy)", url: "https://www.udemy.com/course/fundamentals-of-backend-communications-and-protocols/", track: "Web & DevOps", verdict: "Later", note: "Useful theory." },
  { id: "gh-actions", label: "GitHub Actions Complete Guide (Udemy)", url: "https://www.udemy.com/course/github-actions-the-complete-guide/", track: "Web & DevOps", verdict: "Later" },
  { id: "docker-k8s", label: "Docker + Kubernetes Practical Guide (Udemy)", url: "https://www.udemy.com/course/docker-kubernetes-the-practical-guide/", track: "Web & DevOps", verdict: "Later", note: "K8s = good resume gap." },
  { id: "aws-ccp", label: "AWS Certified Cloud Practitioner (Udemy)", url: "https://www.udemy.com/course/aws-certified-cloud-practitioner-new/", track: "Web & DevOps", verdict: "Later", note: "Cheap, resume-friendly cert." },
  { id: "appsec", label: "Application Security for DevOps (Coursera)", url: "https://www.coursera.org/learn/application-security-for-developers-devops", track: "Web & DevOps", verdict: "Later" },
  { id: "react-test", label: "React Testing Library and Jest (Udemy)", url: "https://www.udemy.com/course/react-testing-library-and-jest/", track: "Web & DevOps", verdict: "Later" },
  { id: "playwright", label: "Playwright Test Automation (Udemy)", url: "https://www.udemy.com/course/playwright-test-automation-with-javascript-getting-started/", track: "Web & DevOps", verdict: "Later", redundant: "Testing overlap with Jest" },
  { id: "nextjs", label: "Next.js + React Complete Guide (Udemy)", url: "https://www.udemy.com/course/nextjs-react-the-complete-guide/", track: "Web & DevOps", verdict: "Skip", redundant: "Next.js you already ship" },
  { id: "tailwind", label: "Tailwind from Scratch (Udemy)", url: "https://www.udemy.com/course/tailwind-from-scratch/", track: "Web & DevOps", verdict: "Skip", redundant: "Used already in real projects" },
  { id: "cwh-webdev", label: "Code With Harry Web Dev (playlist)", url: "https://www.youtube.com/playlist?list=PLu0W_9lII9agq5TrH9XLIKQvv0iaF2X3w", track: "Web & DevOps", verdict: "Skip", redundant: "Beginner web, already past it" },
  { id: "apollo-graphql", label: "Full Stack Apollo GraphQL with React and Node", url: "https://www.youtube.com/watch?v=h-ZCVUAzR-0&list=PLASldBPN_pkDUuOzyPotAkKmvwqyDoA0g", track: "Web & DevOps", verdict: "Skip", note: "Niche, off your path." },
  { id: "fastapi-pl", label: "FastAPI (playlist)", url: "https://www.youtube.com/watch?v=WJKsPchji0Q&list=PLKnIA16_RmvZ41tjbKB2ZnwchfniNsMuQ", track: "Web & DevOps", verdict: "Skip", redundant: "You already use FastAPI in production" },

  // Tools
  { id: "streamlit", label: "Streamlit", track: "Tools", verdict: "Do", note: "Fast ML demo UIs. Useful." },
  { id: "flask", label: "Flask", track: "Tools", verdict: "Later", note: "Light, you already use it." },
  { id: "linux-vibe", label: "Linux (Code With Harry)", url: "https://www.youtube.com/watch?v=_tCY-c-sPZc&list=PLu0W_9lII9ahKZ42vg2w9ERPmShYbYAB7", track: "Tools", verdict: "Later", note: "CLI comfort, light." },
  { id: "cursor", label: "Cursor", track: "Tools", verdict: "Skip", note: "Just use it, not a course." },
  { id: "framer", label: "Framer", track: "Tools", verdict: "Skip" },
  { id: "spline", label: "Spline", track: "Tools", verdict: "Skip" },
  { id: "flutter", label: "Flutter", track: "Tools", verdict: "Skip", note: "Only if mobile. You are not." },
  { id: "figma", label: "Figma course", url: "https://www.youtube.com/playlist?list=PLlHtucAD9KT19ckHqXpPSStZOyDSq9AW-", track: "Tools", verdict: "Skip" },
  { id: "motion-design", label: "Motion Design", track: "Tools", verdict: "Skip" },
  { id: "php", label: "PHP (Code With Harry)", url: "https://www.youtube.com/watch?v=1SnPKhCdlsU", track: "Tools", verdict: "Skip", note: "Off your path." },
  { id: "js-1", label: "JS short 1", url: "https://youtu.be/H3XIJYEPdus", track: "Tools", verdict: "Skip", redundant: "JS you already know" },
  { id: "js-2", label: "JS short 2", url: "https://youtu.be/M9O5AjEFzKw", track: "Tools", verdict: "Skip", redundant: "JS you already know" },
  { id: "js-3", label: "JS short 3", url: "https://youtu.be/Bd1EBSCu2os", track: "Tools", verdict: "Skip", redundant: "JS you already know" },
  { id: "js-4", label: "JS short 4", url: "https://youtu.be/qnwFpjIqsrA", track: "Tools", verdict: "Skip", redundant: "JS you already know" },
  { id: "js-5", label: "JS short 5", url: "https://youtu.be/futeaowy34Y", track: "Tools", verdict: "Skip", redundant: "JS you already know" },
  { id: "js-6", label: "JS short 6", url: "https://youtu.be/-Qnf2bME-rE", track: "Tools", verdict: "Skip", redundant: "JS you already know" },
  { id: "js-7", label: "JS short 7", url: "https://youtu.be/znZQFzoV3CM", track: "Tools", verdict: "Skip", redundant: "JS you already know" },
  { id: "js-8", label: "JS short 8", url: "https://youtu.be/OkWWAgLSGkc", track: "Tools", verdict: "Skip", redundant: "JS you already know" },
  { id: "js-9", label: "JS short 9", url: "https://youtu.be/QIDkK0FbXDc", track: "Tools", verdict: "Skip", redundant: "JS you already know" },
  { id: "js-10", label: "JS short 10", url: "https://youtu.be/kiPrrtclZOA", track: "Tools", verdict: "Skip", redundant: "JS you already know" },

  // Math & Basics (Done)
  { id: "linear-algebra", label: "Linear Algebra", url: "https://www.youtube.com/watch?v=ILQTG5bMENI&list=PLlpUUtQ9RrF76jvALwrTp0oOGfk0EGC3s", track: "Math & Basics", verdict: "Done" },
  { id: "calculus", label: "Calculus", url: "https://www.youtube.com/watch?v=LA1_vBXOIiQ&list=PLlpUUtQ9RrF76jvALwrTp0oOGfk0EGC3s", track: "Math & Basics", verdict: "Done" },
  { id: "prob-stats", label: "Probability and Statistics", url: "https://www.youtube.com/watch?v=vEwe_1b1Df0&list=PLlpUUtQ9RrF76jvALwrTp0oOGfk0EGC3s", track: "Math & Basics", verdict: "Done" },
  { id: "python", label: "Python", url: "https://www.youtube.com/watch?v=UrsmFxEIp5k", track: "Math & Basics", verdict: "Done" },
  { id: "numpy", label: "NumPy", url: "https://www.youtube.com/watch?v=Rbh1rieb3zc", track: "Math & Basics", verdict: "Done" },
  { id: "pandas", label: "Pandas", url: "https://www.youtube.com/watch?v=RhEjmHeDNoA", track: "Math & Basics", verdict: "Done" },
];
