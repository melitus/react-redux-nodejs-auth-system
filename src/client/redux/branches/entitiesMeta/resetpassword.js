import { handleActions } from 'redux-actions';

import {
  RESETPASSWORD_REQUEST_SUCCESS,
  RESETPASSWORD_REQUEST_ERROR
} from '../entities/signup';

import {
  createSuccessLoadDetails,
  createErrorLoadDetails
} from '../../utils/actionErrors';

export const initialState = {};

export const reducer = handleActions(
  {
    [RESETPASSWORD_REQUEST_SUCCESS]: (state, { payload }) => ({
      loadDetails: createSuccessLoadDetails(payload)
    }),
    [RESETPASSWORD_REQUEST_ERROR]: (state, { payload }) => ({
      loadDetails: createErrorLoadDetails(payload.error)
    })
  },
  initialState
);
