const noop = next => next;

/* eslint-disable no-underscore-dangle, import/no-mutable-exports, no-undef */
let devToolsEnhancer = noop;

if (
  process.env.NODE_ENV === 'development' &&
  typeof window === 'object' &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined'
) {
  devToolsEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__();
}
/* eslint-disable no-underscore-dangle, import/no-mutable-exports, no-undef */

export default devToolsEnhancer;
