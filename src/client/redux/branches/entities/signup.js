// @flow
import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { getFormValues, submit as createSubmit } from 'redux-form';


const createActionName = name => `signup/${name}`;

// *********************************
// Actions
// *********************************

export const FORM_NAME = 'form/SIGNUP_FORM';
export const DO_SIGNUP_REQUEST = createActionName('DO_SIGNUP_REQUEST');
export const DO_SIGNUP_SUCCESS = createActionName(' DO_SIGNUP_SUCCESS');
export const DO_SIGNUP_ERROR = createActionName('DO_SIGNUP_ERROR');

export const TRANSIT_TO_CONFIRMATION = createActionName(
  'TRANSIT_TO_CONFIRMATION'
);

// *********************************
// Action Creators
// *********************************

export const submit = createSubmit(FORM_NAME);
export const doSignupRequest = createAction(DO_SIGNUP_REQUEST);
export const doSignupSuccess = createAction(DO_SIGNUP_SUCCESS);
export const doSignupError = createAction(DO_SIGNUP_ERROR);

export const transitToConfirmation = createAction(TRANSIT_TO_CONFIRMATION);

// *********************************
// Selectors
// *********************************
export const selectSignupForm = getFormValues(FORM_NAME);

export const selectSignUpDetails = createSelector(
  selectSignupForm,
  form => form.signUpDetails
);

// *********************************
// Reducer
// *********************************

const defaultUserState = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phoneNumber: '',
  isRegistering: false,
  isRegistered: false,
  submitError: false,
  errors: {
    firstName: [],
    lastName: [],
    email: [],
    password: [],
    phoneNumber: []
  }
};

export default handleActions({
  [DO_SIGNUP_REQUEST]: (state, action) => ({
    ...state,
    isRegistering: true
  }),
  [DO_SIGNUP_SUCCESS]: (state, action) => ({
    ...state,
    isRegistering: false,
    isRegistered: true,
    user: action.payload
  }),
  [DO_SIGNUP_ERROR]: (state, action) => ({
    ...state,
    isRegistered: false,
  }),
  [LOGOUT]: (state, action) => {
    if (!action.payload.isLogin) {
      return defaultUserState;
    }
    return state;
  }
}, defaultUserState);
