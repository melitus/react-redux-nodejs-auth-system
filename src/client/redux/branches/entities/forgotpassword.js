// @flow
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { getFormValues, submit as createSubmit } from 'redux-form';

import { createActionWithPayload } from '../../utils/';

export const initialState = {
  email: '',
  isSubmitting: false,
  submitError: false,
  errors: {}
};

const createActionName = name => `forgotpassword/${name}`;

/* eslint-disable no-underscore-dangle */
// Actions
export const FORM_NAME = 'form/FORGOTPASSWORD_FORM';
export const DO_FORGOTPASSWORD = createActionName('DO_FORGOTPASSWORD');
export const TRANSIT_TO_CONFIRMATION = createActionName(
  'TRANSIT_TO_CONFIRMATION'
);
export const FORGOTPASSWORD_REQUEST_SUCCESS = createActionName(
  'FORGOTPASSWORD_REQUEST_SUCCESS'
);
export const FORGOTPASSWORD_REQUEST_ERROR = createActionName('FORGOTPASSWORD_REQUEST_ERROR');

// Action creators
export const submit = createSubmit(FORM_NAME);
export const doFORGOTPASSWORD = createActionWithPayload(DO_FORGOTPASSWORD);
export const transitToConfirmation = createActionWithPayload(
  TRANSIT_TO_CONFIRMATION
);
export const _requestSuccess = createActionWithPayload(FORGOTPASSWORD_REQUEST_SUCCESS);
export const _requestError = createActionWithPayload(FORGOTPASSWORD_REQUEST_ERROR);

// Selectors
export const selectFORGOTPASSWORDForm = getFormValues(FORM_NAME);

export const selectFORGOTPASSWORDDetails = createSelector(
  selectFORGOTPASSWORDForm,
  form => form.FORGOTPASSWORDDetails
);

// Reducer
export const reducer = handleActions(
  {
    [FORGOTPASSWORD_REQUEST_SUCCESS]: (state, { payload }) => ({
      ...payload
    })
  },
  initialState
);

// DispatchpersonInfo
export const onSubmit = ({ FORGOTPASSWORDDetails }, dispatch) =>
  new Promise((resolve) => {
    resolve();
    // const { FORGOTPASSWORDDetails } = payload;
    dispatch(doFORGOTPASSWORD({ ...FORGOTPASSWORDDetails }));
  });
