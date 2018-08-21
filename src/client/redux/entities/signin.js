// @flow
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { getFormValues, submit as createSubmit } from 'redux-form';

import { createActionWithPayload } from '../../utils/';

const initialState = {
  email: '',
  password: '',
  keepLoggedIn: false,
  isSubmitting: false,
  submitError: false,
  errorMessage: '',
  errors: {}
}

const createActionName = name => `signin/${name}`;

/* eslint-disable no-underscore-dangle */
// Actions
export const FORM_NAME = 'form/SIGNIN_FORM';
export const DO_SIGNIN = createActionName('DO_SIGNIN');
export const TRANSIT_TO_CONFIRMATION = createActionName('TRANSIT_TO_CONFIRMATION');
export const SIGNIN_REQUEST_SUCCESS = createActionName('SIGNIN_REQUEST_SUCCESS');
export const SIGNIN_REQUEST_ERROR = createActionName('SIGNIN_REQUEST_ERROR');

// Action creators
export const submit = createSubmit(FORM_NAME);
export const doSIGNIN = createActionWithPayload(DO_SIGNIN);
export const transitToConfirmation = createActionWithPayload(TRANSIT_TO_CONFIRMATION);
export const _requestSuccess = createActionWithPayload(SIGNIN_REQUEST_SUCCESS);
export const _requestError = createActionWithPayload(SIGNIN_REQUEST_ERROR);

// Selectors
export const selectSIGNINForm = getFormValues(FORM_NAME);

export const selectSIGNINDetails = createSelector(
  selectSIGNINForm,
  form => form.SIGNINDetails
);

// Reducer
export const reducer = handleActions(
  {
    [SIGNIN_REQUEST_SUCCESS]: (state, { payload }) => ({
      ...payload,
    }),
  },
  initialState
);

// DispatchpersonInfo
export const onSubmit = ({ SIGNINDetails }, dispatch) => (
  new Promise((resolve) => {
    resolve();
    // const { SIGNINDetails } = payload;
    dispatch(doSIGNIN({  ...SIGNINDetails }));
  })
);


