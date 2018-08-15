// @flow
import React from 'react';
import { Field, FormSection } from 'redux-form';

import { Input } from '../../Field/index';

const PersonInfo = ({ firstName, lastName, password }) => (
  <FormSection name="personInfo">
    <label target="signup.personInfo.firstName">First Name</label>
    <Field
      id="signup.personInfo.firstName"
      name="firstName"
      component={Input}
      placeholder="First Name"
      value={firstName}
      autoFocus
    />

    <label target="signup.personInfo.lastName">Last Name</label>
    <Field
      id="signup.personInfo.lastName"
      name="lastName"
      component={Input}
      placeholder="Last Name"
      value={lastName}
    />

    <label target="signup.personInfo.password">Password</label>
    <Field
      id="signup.personInfo.password"
      name="Password"
      component={Input}
      placeholder="Password"
      value={password}
    />
  </FormSection>
);

PersonInfo.defaultProps = {
  firstName: '',
  lastName: '',
  password: '',
};

export default PersonInfo;
