import React from 'react';
import Loadable from 'react-loadable';

const ResetPasswordLoadable = Loadable({
  loader: () => import('./ResetPassword.state'),
  loading: () => <div>Loading</div>
});

export default ResetPasswordLoadable;
