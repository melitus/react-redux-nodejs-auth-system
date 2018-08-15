// @flow
import React from 'react';
import { Field, FormSection } from 'redux-form';

import { Input } from '../../Field/index';

const ResetPasswordDetails = ({ password, confirmPassword }) => (
  <FormSection name="resetPasswordDetails">
    <label target="resetPasswordForm.resetPasswordDetails.password">Password</label>
    <Field
      id="resetPasswordForm.resetPasswordDetails.password"
      name="password"
      component={Input}
      placeholder="Password"
      type="password"
      value={password}
    />

    <label target="resetPasswordForm.resetPasswordDetails.confirmPassword">Confirm Password</label>
    <Field
      id="resetPasswordForm.resetPasswordDetails.confirmPassword"
      name=" confirmPassword"
      component={Input}
      placeholder="Confirm Password"
      type="password"
      value={ confirmPassword}
    />
  </FormSection>
);

ResetPasswordDetails.defaultProps = {
  email: '',
   confirmPassword: '',
};

export default ResetPasswordDetails;
