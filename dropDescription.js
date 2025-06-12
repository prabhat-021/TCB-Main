function dropDescription(element) {
  const description = element.nextElementSibling;
  if (description.classList.contains("hidden")) {
    description.classList.remove("hidden");
  } else {
    description.classList.add("hidden");
  }
}
window.dropDescription = dropDescription; // Expose the function to the global scope