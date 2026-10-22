const themeButton = document.querySelector('.theme-toggle');
const themeMeta = document.querySelector('meta[name="theme-color"]');

function updateThemeControl() {
  const isDark = document.documentElement.dataset.theme === 'dark';
  const actionLabel = isDark ? 'Switch to light mode' : 'Switch to dark mode';
  themeButton.setAttribute('aria-label', actionLabel);
  themeButton.setAttribute('title', actionLabel);
  themeMeta.setAttribute('content', isDark ? '#191919' : '#dedede');
}

themeButton.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  try {
    localStorage.setItem('portfolio-theme', nextTheme);
  } catch {
    // The switch still works when browser storage is unavailable.
  }
  updateThemeControl();
});

updateThemeControl();
