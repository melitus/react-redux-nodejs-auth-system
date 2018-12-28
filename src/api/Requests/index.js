import { get$, post$, put$, remove$ } from '../../utils/rxjsUtils';

import apiPathsRoot from '../ServicePaths';

export const getAPI$ = (url, args) => get$(`${apiPathsRoot.path}${url}`, args);

export const postAPI$ = (url, args) => post$(`${apiPathsRoot.path}${url}`, args);

export const putAPI$ = (url, args) => put$(`${apiPathsRoot.path}${url}`, args);

export const deleteAPI$ = (url, args) => remove$(`${apiPathsRoot.path}${url}`, args);
