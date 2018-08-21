import { get$, post$, put$, remove$ } from '../../utils/rxjsUtils';

import { ROOT_PATH } from '../ServiceTypes/index';

export const createPendingLoadDetails = () => ({
  status: 'PENDING',
});

export const createSuccessLoadDetails = () => ({
  status: 'SUCCESS',
  cachedAt: Date.now(),
});

export const createErrorLoadDetails = error => ({
  status: 'ERROR',
  error
});

export const getAPI$ = (url, args) =>
  get$(`${ROOT_PATH}${url}`, args);

export const postAPI$ = (url, args) =>
  post$(`${ROOT_PATH}${url}`, args);

export const putAPI$ = (url, args) =>
  put$(`${ROOT_PATH}${url}`, args);

export const deleteAPI$ = (url, args) =>
  remove$(`${ROOT_PATH}${url}`, args);
