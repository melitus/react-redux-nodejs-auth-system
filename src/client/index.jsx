import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import configureStore from '../client/redux/store/configureStore';
import App from '../client/components/App/App';
import initialState from './InitialStore/initialState';

const store = configureStore(initialState);
 
ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>,
  window.document.getElementById('app')
);
