import {ConfigProvider, theme} from 'antd';
import {Suspense} from 'react';
import {Provider, useSelector} from 'react-redux';
import {MemoryRouter, Route, Routes} from 'react-router';

import Spinner from './components/Spinner/Spinner.jsx';
import InspectorPage from './containers/InspectorPage';
import SessionPage from './containers/SessionPage';
import i18n from './i18next';
import {ipcRenderer} from './polyfills';

ipcRenderer.on('appium-language-changed', (event, message) => {
  if (i18n.language !== message.language) {
    i18n.changeLanguage(message.language);
  }
});

const getTheme = (isDark) => ({
  algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
  token: {
    fontSize: 12,
    fontFamily:
      "'Helvetica Neue For Number', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC', 'Hiragino Sans GB', 'Microsoft YaHei', 'Helvetica Neue', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'",
  },
  components: {
    Tabs: {
      titleFontSize: 14,
    },
  },
});

const AppContent = () => {
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <ConfigProvider theme={getTheme(isDarkMode)}>
      <MemoryRouter initialEntries={['/']}>
        <Suspense fallback={<Spinner />}>
          <Routes>
            <Route path="/" element={<SessionPage />} />
            <Route path="/session" element={<SessionPage />} />
            <Route path="/inspector" element={<InspectorPage />} />
          </Routes>
        </Suspense>
      </MemoryRouter>
    </ConfigProvider>
  );
};

const Root = ({store}) => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

export default Root;
