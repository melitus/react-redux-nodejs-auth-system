// @flow
import React from 'react';
import { Field, FormSection } from 'redux-form';

import { Input } from '../../Field/index';

const ForgotPasswordDetails = ({ email, password }) => (
  <FormSection name="forgotPassword">
    <label target="forgotPassword.forgotPasswordDetails.passwword">Password</label>
    <Field
      id="forgotPassword.forgotPasswordDetails.password"
      name="password"
      component={Input}
      placeholder="Password"
      type="password"
      value={password}
    />
  </FormSection>
);

ForgotPasswordDetails.defaultProps = {
  password: '',
};

export default ForgotPasswordDetails;
