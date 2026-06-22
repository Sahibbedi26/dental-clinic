/* =========================================================
   Contact page specific behaviour — form validation + submit
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  var form = document.getElementById("contact-form");
  if (!form) return;

  var successBox = document.getElementById("form-success");

  function showError(field, show) {
    var errorEl = form.querySelector('.field-error[data-for="' + field.name + '"]');
    if (!errorEl) return;
    errorEl.classList.toggle("show", show);
    field.classList.toggle("invalid", show);
  }

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function isValidPhone(value) {
    var digits = value.replace(/\D/g, "");
    return digits.length >= 7;
  }

  function validateField(field) {
    var valid = true;

    if (field.hasAttribute("required") && !field.value.trim()) {
      valid = false;
    } else if (field.type === "email" && !isValidEmail(field.value)) {
      valid = false;
    } else if (field.type === "tel" && !isValidPhone(field.value)) {
      valid = false;
    }

    showError(field, !valid);
    return valid;
  }

  // Validate on blur for friendlier feedback
  form.querySelectorAll("input, select").forEach(function (field) {
    field.addEventListener("blur", function () {
      if (field.hasAttribute("required") || field.value) validateField(field);
    });
  });

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var requiredFields = form.querySelectorAll("[required]");
    var allValid = true;

    requiredFields.forEach(function (field) {
      if (!validateField(field)) allValid = false;
    });

    if (!allValid) {
      var firstInvalid = form.querySelector(".invalid");
      if (firstInvalid) firstInvalid.focus();
      return;
    }

    // No backend connected yet — this simulates a successful submission.
    // Replace this block with a real fetch() call to your booking API or
    // CRM endpoint when one is available.
    form.classList.add("submitted");
    successBox.classList.add("show");
    successBox.scrollIntoView({ behavior: "smooth", block: "center" });
  });

});
