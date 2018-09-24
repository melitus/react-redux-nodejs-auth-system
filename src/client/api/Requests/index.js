import { get$, post$, put$, remove$ } from "../../utils/rxjsUtils";

import { ROOT_PATH } from "../ServiceTypes/index";

export const getAPI$ = (url, args) => get$(`${ROOT_PATH}${url}`, args);

export const postAPI$ = (url, args) => post$(`${ROOT_PATH}${url}`, args);

export const putAPI$ = (url, args) => put$(`${ROOT_PATH}${url}`, args);

export const deleteAPI$ = (url, args) => remove$(`${ROOT_PATH}${url}`, args);
