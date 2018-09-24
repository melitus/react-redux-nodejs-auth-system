// @flow
import React from 'react';
import { Field, FormSection } from 'redux-form';
import type { Node } from "react";

import { Input } from '../../Field/index';

type ForgotPasswordFormDetailsProp = {
  email?: number,
};

const ForgotPasswordDetails = ({ email }: ForgotPasswordFormDetailsProp) => (
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
  email: '',
};

export default ForgotPasswordDetails;
