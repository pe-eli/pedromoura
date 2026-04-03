import { StrictMode } from "react";
import { createRoot, type Root } from "react-dom/client";
import Swup from "swup";
import App from "./App";
import type { AppPage } from "./data/types";
import "./index.css";

const pageKeys: AppPage[] = ["home", "skills", "portfolio", "education", "languages"];
const INK_ENTER_DURATION_MS = 460;
const INK_LEAVE_DURATION_MS = 860;
const INK_HOLD_COVERED_MS = 600;

let reactRoot: Root | null = null;
let inkCleanupTimeout: number | null = null;

function getCurrentPage(): AppPage {
  const swupContainer = document.getElementById("swup");
  const page = swupContainer?.getAttribute("data-page") as AppPage | null;

  if (page && pageKeys.includes(page)) {
    return page;
  }

  return "home";
}

function mountApp() {
  const rootElement = document.getElementById("root");
  if (!rootElement) {
    return;
  }

  reactRoot = createRoot(rootElement);
  reactRoot.render(
    <StrictMode>
      <App page={getCurrentPage()} />
    </StrictMode>
  );
}

async function waitForPageReady() {
  const root = document.getElementById("root");
  if (!root) {
    return;
  }

  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));
  await new Promise<void>((resolve) => requestAnimationFrame(() => resolve()));

  const images = Array.from(root.querySelectorAll("img"));

  const imagePromises = images.map((img) => {
    if (img.complete) {
      return Promise.resolve();
    }

    return new Promise<void>((resolve) => {
      const done = () => resolve();
      img.addEventListener("load", done, { once: true });
      img.addEventListener("error", done, { once: true });
    });
  });

  const timeout = new Promise<void>((resolve) => {
    setTimeout(() => resolve(), 900);
  });

  await Promise.race([Promise.all(imagePromises).then(() => undefined), timeout]);
}

function startInkTransition() {
  const html = document.documentElement;

  if (inkCleanupTimeout) {
    clearTimeout(inkCleanupTimeout);
    inkCleanupTimeout = null;
  }

  html.classList.remove("is-ink-leave");
  html.classList.add("is-ink-enter");
}

function finishInkTransition() {
  const html = document.documentElement;

  html.classList.remove("is-ink-enter");
  html.classList.add("is-ink-leave");

  inkCleanupTimeout = window.setTimeout(() => {
    html.classList.remove("is-ink-leave");
    inkCleanupTimeout = null;
  }, INK_LEAVE_DURATION_MS + 40);
}

async function waitForInkCovered() {
  await new Promise<void>((resolve) => {
    window.setTimeout(() => resolve(), INK_ENTER_DURATION_MS);
  });
}

mountApp();

const swup = new Swup({
  containers: ["#swup"],
  linkSelector: "a[data-swup-link]",
  animationSelector: "[class*='swup-transition-']",
});

swup.hooks.on("visit:start", () => {
  startInkTransition();
});

swup.hooks.before("content:replace", async () => {
  await waitForInkCovered();
});

swup.hooks.on("content:replace", async () => {

  reactRoot?.unmount();
  reactRoot = null;

  mountApp();
  window.scrollTo({ top: 0, behavior: "auto" });
  await waitForPageReady();

  await new Promise<void>((resolve) => {
    window.setTimeout(() => resolve(), INK_HOLD_COVERED_MS);
  });

  finishInkTransition();
});
