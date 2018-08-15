// @flow
import React from 'react';
import { Field, FormSection } from 'redux-form';

import { Input } from '../../Field/index';

const ContactDetail = ({ email, phoneNumber }) => (
  <FormSection name="contactDetail">
    <label target="signup.contactDetail.email">Email</label>
    <Field
      id="signup.personInfo.email"
      name="email"
      component={Input}
      placeholder="Email"
      type="email"
      value={email}
    />

    <label target="signup.contactDetail.phoneNumber">Phone Number</label>
    <Field
      id="signup.contactDetail.phoneNumber"
      name="phoneNumber"
      component={Input}
      placeholder="Phone Number"
      type="tel"
      value={phoneNumber}
    />
  </FormSection>
);

ContactDetail.defaultProps = {
  email: '',
  phoneNumber: '',
};

export default ContactDetail;
