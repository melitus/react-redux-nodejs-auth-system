// @flow
import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { getFormValues, submit as createSubmit } from 'redux-form';

const createActionName = name => `signIn/${name}`;

// *********************************
// Actions
// *********************************

export const FORM_NAME = 'SIGNIN_FORM';
export const DO_SIGNIN_REQUEST = createActionName('DO_SIGNIN_REQUEST');
export const DO_SIGNIN_SUCCESS = createActionName('DO_SIGNIN_SUCCESS');
export const DO_SIGNIN_ERROR = createActionName('DO_SIGNIN_ERROR');

export const LOGOUT = createActionName('LOGOUT');

export const TRANSIT_TO_CONFIRMATION = createActionName('TRANSIT_TO_CONFIRMATION');
export const TOGGLE_KEEP_LOGGED_IN = createActionName('TOGGLE_KEEP_LOGGED_IN');

// *********************************
// Action Creators
// *********************************

export const submit = createSubmit(FORM_NAME);
export const doSignInRequest = createAction(DO_SIGNIN_REQUEST);
export const doSignInSuccess = createAction(DO_SIGNIN_SUCCESS);
export const doSignInError = createAction(DO_SIGNIN_ERROR);

export const logout = createAction(LOGOUT);

export const transitToConfirmation = createAction(TRANSIT_TO_CONFIRMATION);
export const keepMeLoggedIn = createAction(TOGGLE_KEEP_LOGGED_IN);


// *********************************
// Selectors
// *********************************

export const selectSignInForm = getFormValues(FORM_NAME);

export const selectSignInDetails = createSelector(
  selectSignInForm,
  form => form.SIGNINDetails
);

// *********************************
// Reducer
// *********************************

const defaultUserState = {
  isLoggingIn: false,
  isLoggedIn: false,
  email: '',
  token: '',
  loginError: '',
  errorMessage: '',
  errors: {}
};

export default handleActions({
  [DO_SIGNIN_REQUEST]: (state, action) => ({
    ...state,
    isLoggingIn: true
  }),
  [DO_SIGNIN_SUCCESS]: (state, action) => ({
    ...state,
    isLoggingIn: false,
    isLoggedIn: true,
    user: action.payload
  }),
  [DO_SIGNIN_ERROR]: (state, action) => ({
    ...state,
    isLoggedIn: false,
  }),
  [LOGOUT]: (state, action) => {
    if (!action.payload.isLogin) {
      return defaultUserState;
    }
    return state;
  }
}, defaultUserState);
