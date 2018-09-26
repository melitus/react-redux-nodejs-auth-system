import { postAPI$, getAPI$, /* deleteAPI$,*/ putAPI$ } from '../Requests/index';
import * as apiPaths from '../ServiceTypes';

const performRegistration$ = data =>
  postAPI$({ url: apiPaths.REGISTRATION, data: JSON.stringify(data) });

const performLogin$ = data =>
  postAPI$({ url: apiPaths.LOGIN, data: JSON.stringify(data) });

const confirmRegistration$ = data =>
  postAPI$({ url: apiPaths.REGITRATION_CONFIRMATION, data });

const updateUserInformation$ = data => putAPI$({ url: apiPaths.USER, ...data });

const changePassword$ = data =>
  putAPI$({ url: apiPaths.CHANGE_PASSWORD, ...data });

const getUploadedData$ = () => getAPI$({ url: apiPaths.UPLOADED });

const requestToJoin$ = data =>
  postAPI$({ url: apiPaths.JOIN_REQUEST, ...data });

const getUsersInfos$ = (value, token) => postAPI$({
  url: apiPaths.GET_USERS_INFORMATIONS,
  headers: {
    Authorization: `JWT ${token}`,
    'Content-Type': 'application/json'
  },
  data: JSON.stringify({ query: value })
});

const getAccountNotification$ = token => getAPI$({
  url: apiPaths.ACCOUNT_NOTIFICATION_SETTING,
  headers: {
    Authorization: `JWT ${token}`
  }
});

const updateAccountNotification$ = (data, token) => putAPI$({
  url: apiPaths.ACCOUNT_NOTIFICATION_SETTING,
  headers: {
    Authorization: `JWT ${token}`,
    'Content-Type': 'application/json'
  },
  data: JSON.stringify(data)
});

export {
  performRegistration$,
  performLogin$,
  confirmRegistration$,
  updateUserInformation$,
  changePassword$,
  getUploadedData$,
  requestToJoin$,
  getUsersInfos$,
  getAccountNotification$,
  updateAccountNotification$
};
