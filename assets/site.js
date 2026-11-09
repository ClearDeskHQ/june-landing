// shared on every page: entrances and campaign-source tracking
document.documentElement.classList.add("js");

const UTM_SINK = "https://script.google.com/macros/s/AKfycbyqPskw9VJvMugMJEa-0Rt4I1g8gGfalfeeszJ5yBQw_aoQWxpuJtCdspX4MXtE5-jV/exec";

function sendUtm(body) {
  try {
    fetch(UTM_SINK, { method: "POST", mode: "no-cors", headers: { "Content-Type": "text/plain" }, body: JSON.stringify(body), keepalive: true }).catch(() => {});
  } catch {}
}

function trackVisit() {
  try {
    const q = new URLSearchParams(location.search);
    const source = q.get("utm_source");
    if (!source) return;
    const campaign = q.get("utm_campaign") ?? "";
    localStorage.setItem("june_utm_source", source);
    localStorage.setItem("june_utm_campaign", campaign);
    if (sessionStorage.getItem("june_utm_visit_sent")) return;
    sessionStorage.setItem("june_utm_visit_sent", "1");
    sendUtm({ event: "visit", source, campaign, path: location.pathname, referrer: document.referrer });
  } catch {}
}

export function trackSignup() {
  try {
    sendUtm({
      event: "signup",
      source: localStorage.getItem("june_utm_source") ?? "",
      campaign: localStorage.getItem("june_utm_campaign") ?? "",
      path: location.pathname,
      referrer: document.referrer,
    });
  } catch {}
}

function rise() {
  const parts = document.querySelectorAll("[data-rise]");
  if (!("IntersectionObserver" in window)) { parts.forEach((el) => el.classList.add("is-in")); return; }
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
    }
  }, { rootMargin: "0px 0px -8% 0px" });
  parts.forEach((el) => io.observe(el));
}

// pages without hand-placed entrances get one on their main blocks; legal text is always there to read
document.querySelectorAll(".head > *, .ea__say > *, .alerts__say > *, .ea__form, .alerts__card").forEach((el, i) => {
  if (!el.hasAttribute("data-rise")) { el.setAttribute("data-rise", ""); el.style.setProperty("--i", String(i % 6)); }
});

trackVisit();
rise();
