// @flow
import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { getFormValues, submit as createSubmit } from 'redux-form';

const createActionName = name => `forgotpassword/${name}`;

// *********************************
// Actions
// *********************************

export const FORM_NAME = 'form/FORGOTPASSWORD_FORM';
export const DO_FORGOTPASSWORD_REQUEST = createActionName('DO_FORGOTPASSWORD');
export const DO_FORGOTPASSWORD_SUCCESS = createActionName('DO_FORGOTPASSWORD_SUCCESS');
export const DO_FORGOTPASSWORD_ERROR = createActionName('DO_FORGOTPASSWORD_ERROR');

// *********************************
// Action Creators
// *********************************

export const submit = createSubmit(FORM_NAME);
export const doForgotPasswordRequest = createAction(DO_FORGOTPASSWORD_REQUEST);
export const doForgotPasswordSuccess = createAction(DO_FORGOTPASSWORD_SUCCESS);
export const doForgotPasswordError = createAction(DO_FORGOTPASSWORD_ERROR);

// *********************************
// Selectors
// *********************************

export const selectFORGOTPASSWORDForm = getFormValues(FORM_NAME);

export const selectFORGOTPASSWORDDetails = createSelector(
  selectFORGOTPASSWORDForm,
  form => form.FORGOTPASSWORDDetails
);

// *********************************
// Reducer
// *********************************

export const defaultState = {
  email: '',
  isSubmitting: false,
  isSubmitted: false,
  errors: {}
};

export default handleActions({
  [DO_FORGOTPASSWORD_REQUEST]: (state, action) => ({
    ...state,
    isSubmitting: true
  }),
  [DO_FORGOTPASSWORD_SUCCESS]: (state, action) => ({
    ...state,
    isSubmitting: false,
    isSubmitted: true,
    user: action.payload
  }),
  [DO_FORGOTPASSWORD_ERROR]: (state, action) => ({
    ...state,
    isSubmitted: false,
    errors: action.payload
  }),
}, defaultState);
