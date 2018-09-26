import { Observable } from 'rxjs';

import { fetchJSON } from './fetch';

export const fetchJSON$ = (url, args) =>
  Observable.fromPromise(fetchJSON(url, args));

export const get$ = (url, args) =>
  fetchJSON$(url, {
    ...args,
    method: 'GET',
    httpsOptions: {}
  });

export const post$ = (url, args) =>
  fetchJSON$(url, {
    ...args,
    method: 'POST',
    httpsOptions: {}
  });

export const put$ = (url, args) =>
  fetchJSON$(url, {
    ...args,
    method: 'PUT',
    httpsOptions: {}
  });

export const remove$ = (url, args) =>
  fetchJSON$(url, {
    ...args,
    method: 'DELETE',
    httpsOptions: {}
  });
