export const loadHighlightTheme = (isDarkMode) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';

  if (isDarkMode) {
    link.href = require.resolve('highlight.js/styles/github-dark.css');
  } else {
    link.href = require.resolve('highlight.js/styles/intellij-light.css');
  }

  document.head.appendChild(link);
};
