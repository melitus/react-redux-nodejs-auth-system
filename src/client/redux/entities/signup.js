// @flow
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { getFormValues, submit as createSubmit } from 'redux-form';

import { createActionWithPayload } from '../../utils/';

export const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phoneNumber: '',
    isSubmitting: false,
    submitError: false,
    errors: {
      firstName: [],
      lastName: [],
      email: [],
      password: [],
      password: [],
}
};

const createActionName = name => `signup/${name}`;

/* eslint-disable no-underscore-dangle */
// Actions
export const FORM_NAME = 'form/SIGNUP_FORM';
export const DO_SIGNUP = createActionName('DO_SIGNUP');
export const TRANSIT_TO_CONFIRMATION = createActionName('TRANSIT_TO_CONFIRMATION');
export const SIGNUP_REQUEST_SUCCESS = createActionName('SIGNUP_REQUEST_SUCCESS');
export const SIGNUP_REQUEST_ERROR = createActionName('SIGNUP_REQUEST_ERROR');

// Action creators
export const submit = createSubmit(FORM_NAME);
export const doSignup = createActionWithPayload(DO_SIGNUP);
export const transitToConfirmation = createActionWithPayload(TRANSIT_TO_CONFIRMATION);
export const _requestSuccess = createActionWithPayload(SIGNUP_REQUEST_SUCCESS);
export const _requestError = createActionWithPayload(SIGNUP_REQUEST_ERROR);

// Selectors
export const selectSignupForm = getFormValues(FORM_NAME);

export const selectSignUpDetails = createSelector(
  selectSignupForm,
  form => form.signUpDetails
);

// Reducer
export const reducer = handleActions(
  {
    [SIGNUP_REQUEST_SUCCESS]: (state, { payload }) => ({
      ...payload,
    }),
  },
  initialState
);

// DispatchpersonInfo
export const onSubmit = ({ signUpDetails }, dispatch) => (
  new Promise((resolve) => {
    resolve();
    // const { signUpDetails } = payload;
    dispatch(doSignup({  ...signUpDetails }));
  })
);


