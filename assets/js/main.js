"use strict";

document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js");

const header = document.querySelector("[data-header]");
const menuToggle = document.querySelector("[data-menu-toggle]");
const navigation = document.querySelector("[data-navigation]");

const closeMenu = () => {
  if (!header || !menuToggle) return;
  header.dataset.menuOpen = "false";
  menuToggle.setAttribute("aria-expanded", "false");
  document.body.classList.remove("menu-locked");
};

if (header && menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = header.dataset.menuOpen === "true";
    header.dataset.menuOpen = String(!isOpen);
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    document.body.classList.toggle("menu-locked", !isOpen);
  });

  navigation.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && header.dataset.menuOpen === "true") {
      closeMenu();
      menuToggle.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (header.dataset.menuOpen === "true" && !header.contains(event.target)) {
      closeMenu();
    }
  });

  const desktopQuery = window.matchMedia("(min-width: 68.01rem)");
  desktopQuery.addEventListener("change", (event) => {
    if (event.matches) closeMenu();
  });
}

if (header) {
  const updateHeader = () => header.classList.toggle("is-scrolled", window.scrollY > 18);
  updateHeader();
  window.addEventListener("scroll", updateHeader, { passive: true });
}

document.querySelectorAll("[data-current-year]").forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

const normalizePhone = (country, number) => `+${country}${number}`;

document.querySelectorAll("[data-email-link]").forEach((link) => {
  const user = link.dataset.user;
  const domain = link.dataset.domain;
  if (!user || !domain) return;
  const address = `${user}@${domain}`;
  link.href = `mailto:${address}`;
  const label = link.querySelector("[data-contact-value]");
  if (label) label.textContent = address;
});

document.querySelectorAll("[data-phone-link]").forEach((link) => {
  const country = link.dataset.country;
  const number = link.dataset.number;
  if (!country || !number) return;
  link.href = `tel:${normalizePhone(country, number)}`;
});

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  const country = link.dataset.country;
  const number = link.dataset.number;
  if (!country || !number) return;
  link.href = `https://wa.me/${country}${number}`;
});

const revealElements = [...document.querySelectorAll(".reveal")];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (reduceMotion || !("IntersectionObserver" in window)) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -10%", threshold: 0.12 },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
}
