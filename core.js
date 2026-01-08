/* ================================
   CORE JS (LOCKED)
================================ */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    initMobileMenu();
  });

  /* ---------- MOBILE MENU ---------- */
  function initMobileMenu() {
    const toggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (!toggle || !navLinks) return;

    // Toggle menu
    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      toggle.classList.toggle("active");
      navLinks.classList.toggle("open");
      document.body.classList.toggle("menu-open");
    });

    // Close on link click
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        closeMenu();
      });
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (
        navLinks.classList.contains("open") &&
        !navLinks.contains(e.target) &&
        !toggle.contains(e.target)
      ) {
        closeMenu();
      }
    });

    function closeMenu() {
      toggle.classList.remove("active");
      navLinks.classList.remove("open");
      document.body.classList.remove("menu-open");
    }
  }

  /* ---------- UTILITIES ---------- */
  window.$ = (selector) => document.querySelector(selector);
  window.$$ = (selector) => document.querySelectorAll(selector);

})();
