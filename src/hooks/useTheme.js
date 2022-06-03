const getTheme = () => {
  const theme = window.localStorage.getItem('theme');

  if (!theme || theme === 'true') {
    return true;
  } else {
    return false;
  }
};

const switchTheme = (id) => {
  const themes = { true: 'light', false: 'dark' };

  document.documentElement.setAttribute('data-theme', themes[id]);
  document.documentElement.setAttribute('class', themes[id]);

  window.localStorage.setItem('theme', id);
};

export { getTheme, switchTheme };
