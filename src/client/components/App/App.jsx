import React from 'react';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Routes from '../../routes/index';
import store from '../../redux/store/store';

export const history = syncHistoryWithStore(browserHistory, store);

const App = () => (
  <Router history={history} routes={Routes} />
);

export default App;
