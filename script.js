(function () {
  var lang = "id", filter = "all";
  var $ = function (s) { return document.querySelector(s); };

  function t(k) { return T[lang][k]; }

  function renderStatic() {
    document.querySelectorAll("[data-i]").forEach(function (n) {
      var v = T[lang][n.getAttribute("data-i")];
      if (v != null) n.textContent = v;
    });
    document.documentElement.lang = lang;
    $("#lang").textContent = lang === "id" ? "EN" : "ID";
    $("#lang").setAttribute("aria-label", t("langAria"));
    $("#theme").textContent = t("themeLbl");
  }

  function renderFilters() {
    var cats = [["all", t("f_all")], ["ml", t("f_ml")], ["da", t("f_da")], ["sys", t("f_sys")]];
    var box = $("#filters"); box.innerHTML = "";
    cats.forEach(function (c) {
      var b = document.createElement("button");
      b.type = "button"; b.className = "filter"; b.textContent = c[1];
      b.setAttribute("aria-pressed", String(filter === c[0]));
      b.addEventListener("click", function () { filter = c[0]; renderFilters(); renderCards(); });
      box.appendChild(b);
    });
  }

  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  function renderCards() {
    var grid = $("#proj-grid"); grid.innerHTML = "";
    PROJECTS.forEach(function (p, i) {
      if (filter !== "all" && p.cat !== filter) return;
      var d = p[lang];
      var b = document.createElement("button");
      b.type = "button"; b.className = "prow";
      b.innerHTML = '<span class="tag">' + esc(d.tag) + '</span>' +
        '<span><h3>' + esc(d.title) + '</h3><p>' + esc(d.desc) + '</p>' +
        '<ul class="tags">' + p.tech.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + '</ul>' +
        '<span class="more">' + esc(t("detail")) + '</span></span>' +
        '<span class="vz">' + VIZ[p.viz] + '</span>';
      b.addEventListener("click", function () { openModal(i); });
      grid.appendChild(b);
    });
  }

  var lastFocus = null, openIdx = -1;
  function openModal(i) {
    openIdx = i; lastFocus = document.activeElement;
    var p = PROJECTS[i], d = p[lang];
    $("#sheet").innerHTML = '<div class="thumb">' + VIZ[p.viz] + '</div><div class="sheet-body"><span class="tag">' + esc(d.tag) + '</span>' +
      '<h3 id="m-title">' + esc(d.title) + '</h3><p>' + esc(d.desc) + '</p><ul class="pts">' + d.pts.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + '</ul>' +
      '<ul class="tags" style="padding:0">' + p.tech.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + '</ul></div>';
    $("#modal").classList.add("open");
    $("#m-close").focus();
  }
  function closeModal() {
    $("#modal").classList.remove("open"); openIdx = -1;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }
  $("#m-close").addEventListener("click", closeModal);
  $("#modal").addEventListener("click", function (e) { if (e.target === $("#modal")) closeModal(); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && openIdx > -1) closeModal(); });

  function setLang(l) {
    lang = l; renderStatic(); renderFilters(); renderCards();
    if (openIdx > -1) openModal(openIdx);
    try { localStorage.setItem("niw3-lang", l); } catch (e) {}
  }
  $("#lang").addEventListener("click", function () { setLang(lang === "id" ? "en" : "id"); });

  var root = document.documentElement;
  $("#theme").addEventListener("click", function () {
    var cur = root.getAttribute("data-theme");
    if (!cur) cur = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    var next = cur === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("niw3-theme", next); } catch (e) {}
  });
  try { var th = localStorage.getItem("niw3-theme"); if (th) root.setAttribute("data-theme", th); } catch (e) {}

  /* mobile menu */
  var navEl = $("#nav"), menuBtn = $("#menu");
  menuBtn.addEventListener("click", function () {
    var o = navEl.classList.toggle("open"); menuBtn.setAttribute("aria-expanded", String(o));
  });
  navEl.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { navEl.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }); });

  /* active nav link */
  var links = {}; navEl.querySelectorAll("a").forEach(function (a) { links[a.getAttribute("href").slice(1)] = a; });
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          Object.keys(links).forEach(function (k) { links[k].classList.toggle("on", k === en.target.id); });
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    Object.keys(links).forEach(function (k) { var s = document.getElementById(k); if (s) io.observe(s); });
  }

  /* contact */
  var emailEl = $("#email-val"); emailEl.textContent = CONTACT.email;
  var li = $("#li-val"); li.textContent = CONTACT.linkedin.replace(/^https?:\/\//, ""); li.href = CONTACT.linkedin;
  var gh = $("#gh-val"); gh.textContent = CONTACT.github.replace(/^https?:\/\//, ""); gh.href = CONTACT.github;
  var copyBtn = $("#copy-email");
  copyBtn.addEventListener("click", function () {
    function done() { copyBtn.textContent = t("copied"); setTimeout(function () { copyBtn.textContent = t("copy"); }, 1500); }
    function fallback() { var r = document.createRange(); r.selectNodeContents(emailEl); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); }
    if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(CONTACT.email).then(done, fallback); } else { fallback(); }
  });
  $("#yr").textContent = new Date().getFullYear();

  renderFilters(); renderCards();
  try { if (localStorage.getItem("niw3-lang") === "en") setLang("en"); } catch (e) {}
})();
