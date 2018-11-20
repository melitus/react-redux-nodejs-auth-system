import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
​
import monitorReducersEnhancer from './enhancers/monitorReducers'
import { ReduxObservable } from '../utils';
import rootReducer from './rootReducers';
import rootEpic from './rootEpic';
import { composeWithDevTools } from 'redux-devtools-extension'


​
export default function configureStore(preloadedState) {
  const middlewares = [
  ReduxObservable.createEpicMiddleware(rootEpic),
  routerMiddleware(browserHistory)
];
  const middlewareEnhancer = applyMiddleware(...middlewares)
​
  const enhancers = [middlewareEnhancer, monitorReducersEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

​
  const store = createStore(rootReducer, preloadedState, composedEnhancers)
​
  return store
}

  export default configureStore;


