// hidemaxmsp — script.js
// Only one job: keep the copyright year in the footer current.
// The site works fine without JavaScript.

(function () {
  var el = document.getElementById("year");
  if (el) {
    el.textContent = new Date().getFullYear();
  }
})();
