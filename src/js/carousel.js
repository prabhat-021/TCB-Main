function carousel() {
  const state = {};
  const carouselList = document.querySelector(".carousel__list");
  const carouselItems = document.querySelectorAll(".carousel__item");
  const elems = Array.from(carouselItems);
  // const prevBtn = document.getElementById("prevBtn");
  // const nextBtn = document.getElementById("nextBtn");

  // Add click event to carousel items
  carouselList.addEventListener("click", function (event) {
    const newActive = event.target.closest(".carousel__item");
    if (!newActive) {
      return;
    }

    update(newActive);
  });

  // Update function to handle position changes
  const update = function (newActive) {
    const newActivePos = parseInt(newActive.dataset.pos);

    // Skip if clicking the current active item
    if (newActivePos === 0) {
      return;
    }

    // Rearrange items based on the new active position
    elems.forEach((item) => {
      const itemPos = parseInt(item.dataset.pos);
      item.dataset.pos = getPos(itemPos, newActivePos);
    });
  };

  // Calculate new position
  const getPos = function (current, active) {
    const diff = current - active;

    // Handle edge cases for looping
    if (Math.abs(diff) > 2) {
      if (diff > 0) {
        return diff - 5;
      } else {
        return diff + 5;
      }
    }

    return diff;
  };

  // Auto rotation
  let autoRotate = setInterval(() => {
    const current = elems.find((elem) => elem.dataset.pos == 0);
    const next = elems.find((elem) => elem.dataset.pos == 1) || elems[0];

    if (next) {
      update(next);
    }
  }, 2000);

  // Pause auto rotation on hover
  carouselList.addEventListener("mouseenter", () => {
    clearInterval(autoRotate);
  });

  carouselList.addEventListener("mouseleave", () => {
    autoRotate = setInterval(() => {
      const current = elems.find((elem) => elem.dataset.pos == 0);
      const next = elems.find((elem) => elem.dataset.pos == 1) || elems[0];

      if (next) {
        update(next);
      }
    }, 3000);
  });

  // Add keyboard navigation
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      prevBtn.click();
    } else if (e.key === "ArrowRight") {
      nextBtn.click();
    }
  });
}

window.carousel = carousel; // Expose the carousel function to the global scope
