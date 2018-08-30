import { combineReducers } from 'redux';

import { reducer as signup } from './signup';

/* eslint-disable import/prefer-default-export */
export const reducer = combineReducers({
  signup
});
