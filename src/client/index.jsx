import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from '../client/redux/store/store';
import App from '../client/components/App/App';

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  window.document.getElementById('app')
);
