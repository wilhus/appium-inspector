import {THEME_MODE} from '../../shared/setting-defs';
import {setSetting} from '../polyfills';

export const SET_THEME = 'SET_THEME';

export const setTheme = (isDarkMode) => ({
  type: SET_THEME,
  isDarkMode,
});

export const toggleTheme = () => async (dispatch, getState) => {
  const {
    theme: {isDarkMode},
  } = getState();
  const newTheme = isDarkMode ? 'light' : 'dark';

  dispatch(setTheme(!isDarkMode));
  await setSetting(THEME_MODE, newTheme);
};
