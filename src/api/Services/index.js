import { postAPI$, /* getAPI$,  deleteAPI$,*/ putAPI$ } from '../Requests/index';
import apiPathsRoot from '../ServicePaths';

const apiPaths = apiPathsRoot.children;

const performRegistration$ = data =>
  postAPI$({ url: apiPaths.signup.path, data: JSON.stringify(data) });

const performLogin$ = data =>
  postAPI$({ url: apiPaths.signin.path, data: JSON.stringify(data) });

const confirmRegistration$ = data =>
  postAPI$({ url: apiPaths.confirmregistration.path, data });

const updateUserInformation$ = data => putAPI$({ url: apiPaths.user.path, ...data });

const resetPassword$ = data =>
  putAPI$({ url: apiPaths.resetpassword.path, ...data });

const forgotPassword$ = data =>
  putAPI$({ url: apiPaths.resetpassword.path, ...data });


const getUsersInfos$ = (value, token) => postAPI$({
  url: apiPaths.userinfo.path,
  headers: {
    Authorization: `JWT ${token}`,
    'Content-Type': 'application/json'
  },
  data: JSON.stringify({ query: value })
});

export {
  performRegistration$,
  performLogin$,
  confirmRegistration$,
  updateUserInformation$,
  resetPassword$,
  forgotPassword$,
  getUsersInfos$,
};
