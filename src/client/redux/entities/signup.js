import { handleActions } from 'redux-actions';
import { createActionWithPayload } from '../../utils/';

export const initialState = {};

const createActionName = name => `signup/${name}`;

/* eslint-disable no-underscore-dangle */
// Actions
export const DO_SIGNUP = createActionName('DO_SIGNUP');
export const TRANSIT_TO_CONFIRMATION = createActionName('TRANSIT_TO_CONFIRMATION');
export const _REQUEST_SUCCESS = createActionName('REQUEST_SUCCESS');
export const _REQUEST_ERROR = createActionName('REQUEST_ERROR');

// Action creators
export const doSignup = createActionWithPayload(DO_SIGNUP);
export const transitToConfirmation = createActionWithPayload(TRANSIT_TO_CONFIRMATION);
export const _requestSuccess = createActionWithPayload(_REQUEST_SUCCESS);
export const _requestError = createActionWithPayload(_REQUEST_ERROR);

// Reducer
export const reducer = handleActions(
  {
    [_REQUEST_SUCCESS]: (state, { payload }) => ({
      ...payload,
    }),
  },
  initialState
);
