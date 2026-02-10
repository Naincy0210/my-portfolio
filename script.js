document.addEventListener("DOMContentLoaded", () => {

  /* SCROLL FADE-IN */
  const fadeElements = document.querySelectorAll(".fade-in, .skill-card");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    },
    { threshold: 0.15 }
  );

  fadeElements.forEach(el => observer.observe(el));

  /* COPY TO CLIPBOARD */
  document.querySelectorAll(".copy-btn").forEach(card => {
    card.addEventListener("click", () => {
      const text = card.getAttribute("data-copy");
      navigator.clipboard.writeText(text);
      card.classList.add("copied");
      setTimeout(() => card.classList.remove("copied"), 1000);
    });
  });

  /* THEME TOGGLE */
  const toggleBtn = document.querySelector(".theme-toggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    toggleBtn.textContent =
      document.body.classList.contains("light") ? "🌞" : "🌙";
  });

});
