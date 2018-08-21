import { handleActions } from 'redux-actions';

import {
 SIGNUP_REQUEST_SUCCESS,
 SIGNUP_REQUEST_ERROR
} from '../entities/signup';

import {
  createSuccessLoadDetails,
  createErrorLoadDetails
} from '../../../utils/ioUtils';

export const initialState = {};
export const reducer = handleActions(
  {
    [SIGNUP_REQUEST_SUCCESS]: (state, { payload }) => ({
      loadDetails: createSuccessLoadDetails(payload),
    }),
    [ SIGNUP_REQUEST_ERROR ]: (state, { payload }) => ({
      loadDetails: createErrorLoadDetails(payload.error),
    }),
  },
  initialState
);
