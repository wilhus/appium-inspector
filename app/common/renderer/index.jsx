import {createRoot} from 'react-dom/client';

import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary.jsx';
import Root from './Root.jsx';
import createStore from './store.js';

const container = document.getElementById('root');
const root = createRoot(container);

const initApp = async () => {
  const store = await createStore();

  root.render(
    <ErrorBoundary>
      <Root store={store} />
    </ErrorBoundary>,
  );
};

initApp();
