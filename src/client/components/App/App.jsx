import React from 'react';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Routes from '../../routes/userRoute';
import store from '../../redux/store/configureStore';

//export const history = syncHistoryWithStore(browserHistory, store);

const App = () => (
  <Router routes={Routes} />
);

export default App;
