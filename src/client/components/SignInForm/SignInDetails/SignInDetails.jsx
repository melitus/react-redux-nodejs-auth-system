// @flow
import React from 'react';
import { Field, FormSection } from 'redux-form';

import { Input } from '../../Field/index';

type SignInFormDetailsProp = {
  password?: number,
  email: string,
};

const SignInDetails = ({ email, password }: SignInFormDetailsProp) => (
  <FormSection name="signInDetails">
    <label target="signin.signInDetails.email">Email</label>
    <Field
      id="signin.personInfo.email"
      name="email"
      component={Input}
      placeholder="Email"
      type="email"
      value={email}
    />

    <label target="signin.signInDetails.passwword">Password</label>
    <Field
      id="signup.signinDetail.password"
      name="password"
      component={Input}
      placeholder="••••••••••"
      type="password"
      value={password}
    />
  </FormSection>
);

SignInDetails.defaultProps = {
  email: '',
  password: '',
};

export default SignInDetails;
