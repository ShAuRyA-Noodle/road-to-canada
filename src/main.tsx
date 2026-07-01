import "@fontsource-variable/fraunces";
import "@fontsource-variable/inter";
import "./index.css";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

const saved = localStorage.getItem("rtg-theme");
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
document.documentElement.dataset.theme = saved ?? (prefersDark ? "dark" : "light");
document.documentElement.dataset.country = localStorage.getItem("rtg-country") ?? "canada";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
