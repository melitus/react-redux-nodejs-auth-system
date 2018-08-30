import React from 'react';
import Loadable from 'react-loadable';

const SignInLoadable = Loadable({
  loader: () => import('./SignInForm.state'),
  loading: () => <div>Loading</div>
});

export default SignInLoadable;
