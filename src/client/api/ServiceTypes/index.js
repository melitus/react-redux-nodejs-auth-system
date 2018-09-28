export default {
  path: 'https://localhost:4000/',
  children: {
    signup: {
      path: 'signup'
    },
    login: {
      path: 'signin'
    },
    resetpassword: {
      path: 'resetpassword'
    },
    forgotpassword: {
      path: 'resetpassword'
    },
    sendemail: {
      path: 'resetpassword'
    },
    confirmregistration: {
      path: 'resetpassword'
    },
    user: {
      path: 'user'
    },
    userinfo: {
      path: 'user'
    },
  }
};
