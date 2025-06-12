// document.getElementById("btn").addEventListener("click", () => {
//   alert("Button clicked!");
// });

// DOMContentLoaded event listener
document.addEventListener("DOMContentLoaded", () => {
  navbar(); // Call the navbar function when the DOM is fully loaded
  // Load external HTML files into specific elements
  // loadHTML("/src/components/navbar.html", "navbar");
  // loadHTML("/src/components/footer.html", "footer");
  carousel(); // Call the carousel function when the DOM is fully loaded

});
// Debounce function to limit how often a function can be called
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Handle hash-based scrolling
function handleHashScroll() {
  const hash = window.location.hash;
  if (hash) {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      const navbarHeight = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }
}

// Initialize the application
function init() {
  // Handle initial hash scroll
  handleHashScroll();

  // Handle hash changes
  window.addEventListener("hashchange", handleHashScroll);

  // Optimize scroll performance
  window.addEventListener(
    "scroll",
    debounce(() => {
      // Add any scroll-based optimizations here
    }, 100)
  );
}

// Wait for DOM to be fully loaded
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}


