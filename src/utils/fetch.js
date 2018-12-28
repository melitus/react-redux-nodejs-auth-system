// @flow
import fetch from 'isomorphic-fetch';
import * as QueryString from 'qs';

import {
  ServerError,
  NetworkError,
  FetchResponseError,
  ParseError
} from './errorUtils';

const defaultArgs = {
  method: 'GET',
  mode: 'cors',
  cache: 'default',
  httpsOptions: {
    rejectUnauthorized: process.env.NODE_ENV !== 'development'
  }
};

const buildQueryString = (url, params) =>
  `${url}?${QueryString.stringify(params)}`;

/* eslint-disable no-underscore-dangle */
const _fetch = (url, { method, params, headers, body } = defaultArgs) => {
  /* eslint-disable no-underscore-dangle */
  const reqHeaders = Object.assign(
    {
      Accept: 'application/hal+json',
      'Content-Type': 'application/json', // application/x-www-form-urlencoded
      'Accept-Charset': 'utf-8',
      'Accept-Encoding': 'gzip, deflate'
    },
    headers || {}
  );

  const finalUrl = params ? buildQueryString(url, params) : url;
  return fetch(
    // URL
    finalUrl,

    // OPTIONS
    Object.assign(
      {
        method: method || 'GET',
        mode: 'cors',
        cache: 'default',
        headers: reqHeaders,
        credentials: 'same-origin'
      },
      // process.env.BROWSER !== true ? {
      //   agent: new https.Agent(Object.assign(defaultArgs.httpsOptions, httpsOptions)),
      // } : null,
      body ? { body: JSON.stringify(body) } : {}
    )
  )
    .catch(err => Promise.reject(new NetworkError(err && err.message)))
    .then((response) => {
      if (response.ok) {
        const contentType = response.headers.get('Content-Type');
        if (!contentType) {
          return Promise.reject(
            new FetchResponseError(
              'Response OK: Missing Content-Type header in response.'
            )
          );
        } else if (
          !contentType
            .replace('+', '')
            .match(new RegExp(reqHeaders.Accept.replace('+', '')))
        ) {
          return Promise.reject(
            new FetchResponseError(
              'The response Content-Type does not match the Accept header.'
            )
          );
        }
        return Promise.resolve(response);
      }
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.match('json')) {
        return response.json().then(data => Promise.reject(data));
      }
      return response
        .text()
        .then((data: string) => Promise.reject(data))
        .catch(() =>
          Promise.reject(
            new ServerError('An unknown server error occured', response.status)
          )
        );
    });
};

export const fetchJSON = (
  url,
  args // eslint-disable-line import/prefer-default-export
) =>
  _fetch(url, args)
    .then(res => res.json())
    .catch((e) => {
      console.log('ParseError', e);
      return Promise.reject(new ParseError());
    });
