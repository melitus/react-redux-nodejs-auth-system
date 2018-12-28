import { combineReducers } from 'redux';

import signup from './signup';
import signin from './signin';
import forgotpassword from './forgotpassword';
import resetpassword from './resetpassword';


/* eslint-disable import/prefer-default-export */
export const reducer = combineReducers({
  signup,
  signin,
  forgotpassword,
  resetpassword
});
