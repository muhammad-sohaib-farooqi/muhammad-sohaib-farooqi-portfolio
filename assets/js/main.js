(function () {
  "use strict";
  var root = document.documentElement;
  root.classList.add("js");

  // Theme
  var themeBtn = document.getElementById("theme-btn");
  function syncThemeLabel() {
    var dark = root.dataset.theme === "dark";
    themeBtn.setAttribute("aria-label", dark ? "Switch to light theme" : "Switch to dark theme");
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", dark ? "#0b1020" : "#f6f8fd");
  }
  if (themeBtn) {
    syncThemeLabel();
    themeBtn.addEventListener("click", function () {
      root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
      try { localStorage.setItem("theme", root.dataset.theme); } catch (e) { /* storage unavailable */ }
      syncThemeLabel();
    });
  }

  // Mobile menu
  var menuBtn = document.getElementById("menu-btn");
  var links = document.getElementById("nav-links");
  function setMenu(open) {
    links.classList.toggle("open", open);
    menuBtn.setAttribute("aria-expanded", String(open));
    menuBtn.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  if (menuBtn && links) {
    menuBtn.addEventListener("click", function () { setMenu(!links.classList.contains("open")); });
    links.addEventListener("click", function (e) { if (e.target.closest("a")) setMenu(false); });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && links.classList.contains("open")) { setMenu(false); menuBtn.focus(); }
    });
  }

  // Footer year
  var year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  // Projects from config
  var list = document.getElementById("projects-list");
  var empty = document.getElementById("projects-empty");
  var projects = Array.isArray(window.PROJECTS) ? window.PROJECTS : [];
  if (list && projects.length) {
    if (empty) empty.hidden = true;
    projects.forEach(function (p) {
      var card = document.createElement("article");
      card.className = "card";
      if (p.image) {
        var img = document.createElement("img");
        img.src = p.image; img.alt = p.imageAlt || ""; img.loading = "lazy"; img.style.maxWidth = "100%";
        card.appendChild(img);
      }
      var h = document.createElement("h3"); h.textContent = p.title; card.appendChild(h);
      var d = document.createElement("p"); d.textContent = p.description; card.appendChild(d);
      if (Array.isArray(p.technologies) && p.technologies.length) {
        var t = document.createElement("p"); t.className = "muted"; t.textContent = p.technologies.join(", "); card.appendChild(t);
      }
      if (p.repo) {
        var a = document.createElement("a");
        a.href = p.repo; a.textContent = "View repository"; a.target = "_blank"; a.rel = "noopener noreferrer";
        card.appendChild(a);
      }
      list.appendChild(card);
    });
  }

  // Scroll progress
  var bar = document.getElementById("progress-bar");
  window.addEventListener("scroll", function () {
    var max = root.scrollHeight - window.innerHeight;
    if (bar && max > 0) bar.style.width = (window.scrollY / max * 100) + "%";
  }, { passive: true });

  // Active section + gentle reveal
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-links a[href^="#"]:not(.btn)'));
  if ("IntersectionObserver" in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        navLinks.forEach(function (a) {
          if (a.getAttribute("href") === "#" + en.target.id) a.setAttribute("aria-current", "true");
          else a.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-40% 0px -55% 0px" });
    document.querySelectorAll("main section[id]").forEach(function (s) { spy.observe(s); });

    var rev = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add("in"); rev.unobserve(en.target); } });
    }, { threshold: 0.08 });
    document.querySelectorAll(".section").forEach(function (s) { s.classList.add("reveal"); rev.observe(s); });
  }
})();
