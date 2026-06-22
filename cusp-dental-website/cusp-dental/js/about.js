/* =========================================================
   About + FAQ page specific behaviour
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  var faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(function (item) {
    var btn = item.querySelector(".faq-q");

    btn.addEventListener("click", function () {
      var isOpen = item.classList.contains("open");

      // close all others (accordion behaviour)
      faqItems.forEach(function (other) {
        other.classList.remove("open");
        other.querySelector(".faq-q").setAttribute("aria-expanded", "false");
      });

      if (!isOpen) {
        item.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // Open the FAQ item if URL hash targets it, and open first by default
  if (faqItems.length && !window.location.hash) {
    faqItems[0].classList.add("open");
    faqItems[0].querySelector(".faq-q").setAttribute("aria-expanded", "true");
  }

});
