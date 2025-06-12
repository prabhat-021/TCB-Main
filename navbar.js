function navbar() {
  const navbar = document.getElementById("navbar");
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const closeIcon = document.getElementById("close-icon");
  const hamburgerIcon = document.getElementById("hamburger-icon");

  // Change navbar background on scroll
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("bg-navColor");
    } else {
      // Only remove if mobile menu is also closed
      if (mobileMenu.classList.contains("hidden")) {
        navbar.classList.remove("bg-navColor");
      }
    }
  });

  // Toggle mobile menu
  mobileMenuButton.addEventListener("click", function (e) {
    e.stopPropagation();
    mobileMenu.classList.toggle("hidden");

    // Always add background when menu is opened
    if (!mobileMenu.classList.contains("hidden")) {
      navbar.classList.add("bg-navColor");
    } else {
      // Only remove if not scrolled
      if (window.scrollY === 0) {
        navbar.classList.remove("bg-navColor");
      }
    }

    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
  });

  // Close mobile menu if clicking outside
  document.addEventListener("click", function (e) {
    const isClickInsideMenu = mobileMenu.contains(e.target);
    const isClickOnButton = mobileMenuButton.contains(e.target);

    if (
      !isClickInsideMenu &&
      !isClickOnButton &&
      !mobileMenu.classList.contains("hidden")
    ) {
      mobileMenu.classList.add("hidden");

      if (window.scrollY === 0) {
        navbar.classList.remove("bg-navColor");
      }

      hamburgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }

    // Close if clicked on a mobile menu link
    const isClickOnLink = e.target.closest(".mobile-menu-link");
    if (isClickOnLink) {
      mobileMenu.classList.add("hidden");

      if (window.scrollY === 0) {
        navbar.classList.remove("bg-navColor");
      }

      hamburgerIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  });

  // Mobile dropdown toggle
  const mobileDropdownButton = document.getElementById(
    "mobile-dropdown-button"
  );
  const mobileDropdown = document.getElementById("mobile-dropdown");

  mobileDropdownButton.addEventListener("click", function () {
    mobileDropdown.classList.toggle("hidden");
  });

  // Desktop dropdown toggle
  const toggleButton = document.getElementById("dropdownToggle");
  const dropdownMenu = toggleButton.nextElementSibling;

  toggleButton.addEventListener("click", (e) => {
    e.stopPropagation();
    const isVisible = getComputedStyle(dropdownMenu).display === "block";
    dropdownMenu.style.display = isVisible ? "none" : "block";
  });

  // Close desktop dropdown on outside click
  document.addEventListener("click", (e) => {
    if (!toggleButton.contains(e.target) && !dropdownMenu.contains(e.target)) {
      dropdownMenu.style.display = "none";
    }
  });
}

window.navbar = navbar;
