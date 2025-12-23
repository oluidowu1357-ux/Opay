// ...existing code...
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (!btn || !links) return;
  btn.setAttribute('aria-expanded', 'false');
  btn.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
});document.addEventListener("DOMContentLoaded", function () {
  const toggles = document.querySelectorAll(".nav-toggle");
  toggles.forEach((btn) => {
    btn.addEventListener("click", () => {
      const container = btn.closest("navbar");
      if (!container) return;
      const links = container.querySelector(".nav-links");
      if (!links) return;
      links.classList.toggle("open");
      btn.classList.toggle("open");
    });
  });
});

// Carousel functionality
let currentSlide = 1;

function changeSlide(direction) {
  const track = document.querySelector(".carousel-track");
  if (!track) return;

  currentSlide += direction;
  if (currentSlide < 1) currentSlide = 6;
  if (currentSlide > 6) currentSlide = 1;

  // Remove all slide classes
  track.classList.remove(
    "slide-1",
    "slide-2",
    "slide-3",
    "slide-4",
    "slide-5",
    "slide-6"
  );

  // Add the current slide class
  track.classList.add(`slide-${currentSlide}`);
}
