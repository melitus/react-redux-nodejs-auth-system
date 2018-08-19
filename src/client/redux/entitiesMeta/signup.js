import { handleActions } from 'redux-actions';

import {
 _REQUEST_SUCCESS,
 _REQUEST_ERROR
} from '../entities/signup';

import {
  createSuccessLoadDetails,
  createErrorLoadDetails
} from '../../../utils/ioUtils';

export const initialState = {};
export const reducer = handleActions(
  {
    [_REQUEST_SUCCESS]: (state, { payload }) => ({
      loadDetails: createSuccessLoadDetails(payload),
    }),
    [_REQUEST_ERROR]: (state, { payload }) => ({
      loadDetails: createErrorLoadDetails(payload.error),
    }),
  },
  initialState
);
