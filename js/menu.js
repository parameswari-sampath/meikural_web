// js/menu.js

// Simple mobile menu toggle functionality
document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobileMenuToggle");
  const navLinks = document.getElementById("navLinks");

  mobileMenuButton.addEventListener("click", function () {
    navLinks.classList.toggle("active");
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    const isClickInsideNav = navLinks.contains(event.target);
    const isClickOnMenuButton = mobileMenuButton.contains(event.target);

    if (
      !isClickInsideNav &&
      !isClickOnMenuButton &&
      navLinks.classList.contains("active")
    ) {
      navLinks.classList.remove("active");
    }
  });
});
