document.addEventListener("DOMContentLoaded", function () {
  var currentPage = window.location.pathname.split("/").pop() || "index.html";
  var navLinks = document.querySelectorAll("[data-nav-link]");
  var yearTargets = document.querySelectorAll("[data-current-year]");
  var currentYear = new Date().getFullYear();

  navLinks.forEach(function (link) {
    var linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  yearTargets.forEach(function (target) {
    target.textContent = currentYear;
  });
});
