import React from 'react';
import { Router } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { createBrowserHistory, createMemoryHistory } from 'history';

import Routes from '../../routes/userRoute';
import configureStore from '../../redux/store/configureStore';

const initialState = {};
const store = configureStore(initialState);
export const history = syncHistoryWithStore(createBrowserHistory(), store);

const App = () => (
  <Router history={history} routes={Routes} />
);

export default App;
