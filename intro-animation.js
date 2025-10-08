document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("intro-overlay");
  if (!overlay) return;

  // --- 🧠 1. Check if intro has already played this session ---
  if (sessionStorage.getItem("introPlayed")) {
    overlay.remove(); // Skip the intro completely
    return;
  }

  // --- 2. Mark intro as played ---
  sessionStorage.setItem("introPlayed", "true");

  const screen1 = overlay.querySelector(".screen1");
  const screen2 = overlay.querySelector(".screen2");
  const audio1 = document.getElementById("audio1");
  const audio2 = document.getElementById("audio2");

  // --- Step 1: Start pulse & thunder #1 ---
  function startPulse() {
    screen1.classList.add("pulse");
    audio1.play();

    // When the animation ends, fade to black
    screen1.addEventListener("animationend", handlePulseEnd, { once: true });
  }

  // --- Step 2: After pulse, fade to black & wait for audio ---
  function handlePulseEnd() {
    // If audio still playing, wait for it to finish before next fade
    if (!audio1.paused) {
      audio1.addEventListener("ended", startScene2, { once: true });
    } else {
      startScene2();
    }
  }

  // --- Step 3: Fade in new image + play second thunder ---
  function startScene2() {
    screen2.style.opacity = "1";
    audio2.play();

    // When audio2 finishes, fade everything away
    audio2.addEventListener("ended", finishIntro, { once: true });
  }

  // --- Step 4: Fade overlay out entirely ---
  function finishIntro() {
    overlay.style.transition = "opacity 2s ease";
    overlay.style.opacity = "0";
    setTimeout(() => overlay.remove(), 2000);
  }

  // Kick off the sequence
  startPulse();
});
