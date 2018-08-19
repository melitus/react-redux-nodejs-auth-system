import { get$, post$, put$, remove$ } from './rxUtils';

import apiPathsRoot from '../../shared/apiPaths';

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
  get$(`${apiPathsRoot.path}${url}`, args);

export const postAPI$ = (url, args) =>
  post$(`${apiPathsRoot.path}${url}`, args);

export const putAPI$ = (url, args) =>
  put$(`${apiPathsRoot.path}${url}`, args);

export const deleteAPI$ = (url, args) =>
  remove$(`${apiPathsRoot.path}${url}`, args);
