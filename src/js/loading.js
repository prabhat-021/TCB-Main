document.addEventListener("DOMContentLoaded", function () {
  const spinner = document.getElementById("loading-spinner");
  window.addEventListener("load", function () {
    spinner.style.display = "none";
  });
});
