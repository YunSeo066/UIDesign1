// =========================
// THEME MANAGER
// =========================

document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark-mode");
  }

  const modeBtn = document.querySelector(".ModeChange");
  const modeImg = modeBtn?.querySelector("img");

  updateThemeIcon();

  modeBtn?.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark-mode");

    const isDark =
      document.documentElement.classList.contains("dark-mode");

    localStorage.setItem(
      "theme",
      isDark ? "dark" : "light"
    );

    updateThemeIcon();
  });

  function updateThemeIcon() {
    if (!modeImg) return;

    const isDark =
      document.documentElement.classList.contains("dark-mode");

    modeImg.src = isDark
      ? "images/light.png"
      : "images/dark.png";
  }
});