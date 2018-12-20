import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';

import monitorReducersEnhancer from './enhancers/monitorReducer';
import { ReduxObservable } from '../utils';
import rootReducer from './rootReducers';
import rootEpic from './rootEpic';

// this enables the chrome devtools for redux only in development
const composeWithDevTools =
  (process.env.NODE_ENV !== 'production' &&
    typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export default function configureStore(preloadedState) {
  const middlewares = [
    ReduxObservable.createEpicMiddleware(rootEpic),
    routerMiddleware(browserHistory)
  ];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer, monitorReducersEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./rootReducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
