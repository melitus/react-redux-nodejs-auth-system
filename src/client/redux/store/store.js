import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

import { ReduxObservable } from '../utils';
import initialState from './InitialStore/initialState';
import reducers from './rootReducers';
import rootEpic from './rootEpic';
import crashReporter from '../../utils/sentry-redux-middleware';
import devToolsEnhancer from './devToolsEnhancer'; // eslint-disable-line no-unused-vars

const middlewares = [
  ReduxObservable.createEpicMiddleware(rootEpic),
  routerMiddleware(browserHistory)
];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middlewares), devToolsEnhancer, crashReporter)
);

export default store;
