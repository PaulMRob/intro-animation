document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("intro-overlay");
  if (!overlay) return;

  setTimeout(() => {
    overlay.style.transition = "opacity 0.5s ease";
    overlay.style.opacity = "0";

    // After fade out, remove completely
    setTimeout(() => overlay.remove(), 500);
  }, 2000); // 2 seconds
});
