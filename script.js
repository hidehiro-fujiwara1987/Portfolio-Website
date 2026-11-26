// hidehiro fujiwara — script.js
// 1. Keep the copyright year in the footer current.
// 2. Lightbox: click an image wrapped in <a class="zoom" href="large.jpg"> to view it large.
//    ← / → move between images in the same group, Esc or a click closes.
// The site works fine without JavaScript (the link just opens the large image).

(function () {
  var el = document.getElementById("year");
  if (el) {
    el.textContent = new Date().getFullYear();
  }
})();

(function () {
  var links = document.querySelectorAll("a.zoom");
  if (!links.length || typeof HTMLDialogElement !== "function") return;

  var ja = document.documentElement.lang === "ja";
  var dialog = document.createElement("dialog");
  dialog.className = "lightbox";
  dialog.setAttribute("aria-label", ja ? "拡大表示" : "Enlarged image");
  dialog.innerHTML =
    '<img alt="">' +
    '<button type="button" class="lb-close" aria-label="' + (ja ? "閉じる" : "Close") + '">×</button>' +
    '<button type="button" class="lb-prev" aria-label="' + (ja ? "前の画像" : "Previous image") + '">‹</button>' +
    '<button type="button" class="lb-next" aria-label="' + (ja ? "次の画像" : "Next image") + '">›</button>';
  document.body.appendChild(dialog);

  var img = dialog.querySelector("img");
  var group = [];
  var index = 0;

  function show(i) {
    index = (i + group.length) % group.length;
    var a = group[index];
    img.src = a.href;
    img.alt = a.querySelector("img").alt;
    dialog.classList.toggle("single", group.length < 2);
  }

  Array.prototype.forEach.call(links, function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      var box = a.closest("figure") || a.parentNode;
      group = Array.prototype.slice.call(box.querySelectorAll("a.zoom"));
      show(group.indexOf(a));
      dialog.showModal();
    });
  });

  dialog.querySelector(".lb-prev").addEventListener("click", function (e) {
    e.stopPropagation();
    show(index - 1);
  });
  dialog.querySelector(".lb-next").addEventListener("click", function (e) {
    e.stopPropagation();
    show(index + 1);
  });
  // a click anywhere else (image or dark background) closes
  dialog.addEventListener("click", function () {
    dialog.close();
  });
  dialog.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
  dialog.addEventListener("close", function () {
    img.removeAttribute("src");
  });
})();
