import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '../client/redux/store/configureStore';
import App from '../client/components/App/App';
import initialState from './InitialStore/initialState';

const store = configureStore(initialState);

const renderApp = () =>
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./components/App', renderApp)
}

renderApp()
