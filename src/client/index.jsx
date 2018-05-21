import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import App from './components/App';
import store from './redux/store';

// create redux store and set redux devtools

ReactDOM.render(
  <Provider store={store}>
    <App store={store} />
  </Provider>
    , window.document.getElementById('app'));
