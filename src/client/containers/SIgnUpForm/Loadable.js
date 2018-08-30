import React from 'react';
import Loadable from 'react-loadable';

const SignUpLoadable = Loadable({
  loader: () => import('./SignupForm.state'),
  loading: () => <div>Loading</div>
});

export default SignUpLoadable;
