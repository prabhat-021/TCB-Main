function togglePopup(id) {
  // Hide all popups first
  const popups = document.querySelectorAll(".popup");
  popups.forEach((popup) => {
    popup.classList.add("hidden");
  });
  const popup = document.getElementById(id);
  if (popup.classList.contains("hidden")) {
    popup.classList.remove("hidden");
  } else {
    popup.classList.add("hidden");
  }
}
// close popup when clicking outside of it

window.addEventListener("click", (event) => {
  if (event.target.classList.contains("popup")) {
    event.target.classList.add("hidden");
  }
});

window.togglePopup = togglePopup; // Expose the function to the global scope