document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("intro-overlay");
  if (!overlay) return;

  const screen1 = overlay.querySelector(".screen1");
  const screen2 = overlay.querySelector(".screen2");
  const audio1 = document.getElementById("audio1");
  const audio2 = document.getElementById("audio2");

  // Step 1 → start pulse + audio1
  function startPulse() {
    screen1.classList.add("pulse");
    audio1.play();
  }

  // Step 2 → after pulse animation ends, go back to black
  screen1.addEventListener("animationend", () => {
    screen1.classList.remove("pulse");
    // Wait for audio1 to finish before continuing
    audio1.onended = startFadeIn;
  });

  // Step 3 → fade in screen2 + audio2
  function startFadeIn() {
    screen2.style.transition = "opacity 2s ease";
    screen2.style.opacity = "1";
    audio2.play();

    // When audio2 ends → fade overlay out
    audio2.onended = finishIntro;
  }

  // Step 4 → remove overlay
  function finishIntro() {
    overlay.style.transition = "opacity 2s ease";
    overlay.style.opacity = "0";
    setTimeout(() => overlay.remove(), 2000);
  }

  // Kick it off
  startPulse();
});
