import { handleActions } from 'redux-actions';

import {
  SIGNIN_REQUEST_SUCCESS,
  SIGNIN_REQUEST_ERROR
} from '../entities/signup';

import {
  createSuccessLoadDetails,
  createErrorLoadDetails
} from '../../utils/actionErrors';

export const initialState = {};

export const reducer = handleActions(
  {
    [SIGNIN_REQUEST_SUCCESS]: (state, { payload }) => ({
      loadDetails: createSuccessLoadDetails(payload)
    }),
    [SIGNIN_REQUEST_ERROR]: (state, { payload }) => ({
      loadDetails: createErrorLoadDetails(payload.error)
    })
  },
  initialState
);
