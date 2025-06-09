import {configureStore} from '@reduxjs/toolkit';

import {THEME_MODE} from '../shared/setting-defs';
import actions from './actions';
import {getSetting} from './polyfills';
import createRootReducer from './reducers';

const createStore = async () => {
  const isDarkMode = (await getSetting(THEME_MODE)) === 'dark';

  const preloadedState = {
    theme: {
      isDarkMode,
    },
  };

  return configureStore({
    reducer: createRootReducer(),
    preloadedState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
    devTools:
      process.env.NODE_ENV !== 'development'
        ? false
        : {
            actionCreators: {...actions},
          },
  });
};

export default createStore;
