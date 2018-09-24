// @flow
import { handleActions } from 'redux-actions';
import { createSelector } from 'reselect';
import { getFormValues, submit as createSubmit } from 'redux-form';

import { createActionWithPayload } from '../../utils/';

export const initialState = {
  password: '',
  isSubmitting: false,
  submitError: false,
  errors: {}
};

const createActionName = name => `resetpassword/${name}`;

/* eslint-disable no-underscore-dangle */
// Actions
export const FORM_NAME = 'form/RESETPASSWORD_FORM';
export const DO_RESETPASSWORD = createActionName('DO_RESETPASSWORD');
export const TRANSIT_TO_CONFIRMATION = createActionName(
  'TRANSIT_TO_CONFIRMATION'
);
export const RESETPASSWORD_REQUEST_SUCCESS = createActionName(
  'RESETPASSWORD_REQUEST_SUCCESS'
);
export const RESETPASSWORD_REQUEST_ERROR = createActionName('RESETPASSWORD_REQUEST_ERROR');

// Action creators
export const submit = createSubmit(FORM_NAME);
export const doRESETPASSWORD = createActionWithPayload(DO_RESETPASSWORD);
export const transitToConfirmation = createActionWithPayload(
  TRANSIT_TO_CONFIRMATION
);
export const _requestSuccess = createActionWithPayload(RESETPASSWORD_REQUEST_SUCCESS);
export const _requestError = createActionWithPayload(RESETPASSWORD_REQUEST_ERROR);

// Selectors
export const selectRESETPASSWORDForm = getFormValues(FORM_NAME);

export const selectRESETPASSWORDDetails = createSelector(
  selectRESETPASSWORDForm,
  form => form.RESETPASSWORDDetails
);

// Reducer
export const reducer = handleActions(
  {
    [RESETPASSWORD_REQUEST_SUCCESS]: (state, { payload }) => ({
      ...payload
    })
  },
  initialState
);

// DispatchpersonInfo
export const onSubmit = ({ RESETPASSWORDDetails }, dispatch) =>
  new Promise((resolve) => {
    resolve();
    // const { RESETPASSWORDDetails } = payload;
    dispatch(doRESETPASSWORD({ ...RESETPASSWORDDetails }));
  });
