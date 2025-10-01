document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("intro-overlay");
  if (!overlay) return;

  const screen1 = overlay.querySelector(".screen1");
  const screen2 = overlay.querySelector(".screen2");
  const audio1 = document.getElementById("audio1");
  const audio2 = document.getElementById("audio2");

  // 1) Black screen initially (default)
  setTimeout(() => {
    // 2) Light pulse + thunder
    screen1.classList.add("pulse");
    audio1.play();
  }, 500);

  // 3) Back to black
  setTimeout(() => {
    screen1.classList.remove("pulse");
  }, 2500);

  // 4) Fade in second image + audio2
  setTimeout(() => {
    screen2.style.opacity = "1";
    audio2.play();
  }, 3000);

  // 5) Fade everything away -> reveal site
  setTimeout(() => {
    overlay.style.transition = "opacity 2s ease";
    overlay.style.opacity = "0";
    setTimeout(() => overlay.remove(), 2000);
  }, 6000);
});
