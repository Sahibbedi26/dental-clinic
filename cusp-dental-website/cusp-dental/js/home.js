/* =========================================================
   Home page specific behaviour
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  // Subtle entrance stagger for service cards already handled by main.js's
  // data-stagger logic. This file is reserved for home-page-only behaviour
  // so each page keeps its own JS file, mirroring its own CSS file.

  var flowSteps = document.querySelectorAll(".flow-step");
  flowSteps.forEach(function (step, i) {
    step.style.transitionDelay = (i * 100) + "ms";
  });
});
