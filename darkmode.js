function applyDarkMode() {

  const savedTheme =
    localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark-mode");
  }

}

function toggleDarkMode() {

  document.documentElement.classList.toggle("dark-mode");

  const isDark =
    document.documentElement.classList.contains("dark-mode");

  localStorage.setItem(
    "theme",
    isDark ? "dark" : "light"
  );

}

applyDarkMode();