const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
const isEnglish = document.documentElement.lang === "en";
const menuLabels = isEnglish
  ? { open: "Open navigation menu", close: "Close navigation menu" }
  : { open: "開啟導覽選單", close: "關閉導覽選單" };

toggle?.addEventListener("click", () => {
  const open = !nav.classList.contains("open");
  nav.classList.toggle("open", open);
  document.body.classList.toggle("menu-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? menuLabels.close : menuLabels.open);
});

nav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    document.body.classList.remove("menu-open");
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", menuLabels.open);
  });
});

const sections = [...document.querySelectorAll("main section[id]")];
const links = [...document.querySelectorAll('.main-nav a[href^="#"]')];

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    const current = entries
      .filter((entry) => entry.isIntersecting)
      .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!current) return;
    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current.target.id);
    });
  }, { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.6] });

  sections.forEach((section) => observer.observe(section));
}
