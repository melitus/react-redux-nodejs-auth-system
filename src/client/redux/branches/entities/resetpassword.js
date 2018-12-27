// @flow
import { createAction, handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { getFormValues, submit as createSubmit } from 'redux-form';

export const initialState = {
  password: '',
  isSubmitting: false,
  submitError: false,
  errors: {}
};

const createActionName = name => `resetpassword/${name}`;

// *********************************
// Actions
// *********************************

export const FORM_NAME = 'form/RESETPASSWORD_FORM';
export const DO_RESETPASSWORD_REQUEST = createActionName('DO_RESETPASSWORD_REQUEST');
export const DO_RESETPASSWORD_SUCCESS = createActionName('DO_RESETPASSWORD_SUCCESS');
export const DO_RESETPASSWORD_ERROR = createActionName('DO_RESETPASSWORD_ERROR');

// *********************************
// Action Creators
// *********************************

export const submit = createSubmit(FORM_NAME);
export const doResetPasswordRequest = createAction(DO_RESETPASSWORD_REQUEST);
export const doResetPasswordSuccess = createAction(DO_RESETPASSWORD_SUCCESS);
export const doResetPasswordError = createAction(DO_RESETPASSWORD_ERROR);

// Selectors
export const selectRESETPASSWORDForm = getFormValues(FORM_NAME);

export const selectRESETPASSWORDDetails = createSelector(
  selectRESETPASSWORDForm,
  form => form.RESETPASSWORDDetails
);

// *********************************
// Reducer
// *********************************

export const defaultState = {
  password: '',
  isSubmitting: false,
  submitError: false,
  errors: {}
};

export default handleActions({
  [DO_RESETPASSWORD_REQUEST]: (state, action) => ({
    ...state,
    isSubmitting: true
  }),
  [DO_RESETPASSWORD_SUCCESS]: (state, action) => ({
    ...state,
    isSubmitting: false,
    isSubmitted: true,
    user: action.payload
  }),
  [DO_RESETPASSWORD_ERROR]: (state, action) => ({
    ...state,
    isSubmitted: false,
    errors: action.payload
  }),
}, defaultState);
