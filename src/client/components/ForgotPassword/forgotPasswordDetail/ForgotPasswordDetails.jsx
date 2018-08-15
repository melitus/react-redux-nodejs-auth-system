// @flow
import React from 'react';
import { Field, FormSection } from 'redux-form';

import { Input } from '../../Field/index';

const ForgotPasswordDetails = ({ email }) => (
  <FormSection name="forgotPassword">
    <label target="forgotPassword.forgotPasswordDetails.email">Email</label>
    <Field
      id="forgotPassword.forgotPasswordDetails.email"
      name="email"
      component={Input}
      placeholder="Email"
      type="email"
      value={email}
    />
  </FormSection>
);

ForgotPasswordDetails.defaultProps = {
  password: '',
};

export default ForgotPasswordDetails;
