import { handleActions } from 'redux-actions';

import {
  FORGOTPASSWORD_REQUEST_SUCCESS,
  FORGOTPASSWORD_REQUEST_ERROR
} from '../entities/signup';

import {
  createSuccessLoadDetails,
  createErrorLoadDetails
} from '../../utils/actionErrors';

export const initialState = {};

export const reducer = handleActions(
  {
    [FORGOTPASSWORD_REQUEST_SUCCESS]: (state, { payload }) => ({
      loadDetails: createSuccessLoadDetails(payload)
    }),
    [FORGOTPASSWORD_REQUEST_ERROR]: (state, { payload }) => ({
      loadDetails: createErrorLoadDetails(payload.error)
    })
  },
  initialState
);
