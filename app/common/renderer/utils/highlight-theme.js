import githubDarkCss from 'highlight.js/styles/github-dark.css?url';
import intellijLightCss from 'highlight.js/styles/intellij-light.css?url';

export const loadHighlightTheme = (isDarkMode) => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';

  if (isDarkMode) {
    link.href = githubDarkCss;
  } else {
    link.href = intellijLightCss;
  }

  document.head.appendChild(link);
};
