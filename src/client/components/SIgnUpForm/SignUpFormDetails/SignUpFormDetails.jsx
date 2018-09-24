// @flow
import React from 'react';
import { Field, FormSection } from 'redux-form';
import { Icon } from 'semantic-ui-react';

// import { LabelInputField } from 'react-semantic-redux-form';
import { LabelInputField } from '../../Field/index';

type SignUpFormDetailsProp = {
  firstName?: string,
  lastName?: string,
  password?: number,
  email: string,
  phoneNumber: number,
};

const SignUpFormDetails = ({ firstName, lastName, password, email, phoneNumber } : SignUpFormDetailsProp) => (
  <FormSection name="signUpFormDetails">
    <label target="signup.signUpFormDetails.firstName">First Name</label>
    <Field
      id="signup.signUpFormDetails.firstName"
      name="firstName"
      component={LabelInputField}
      label={{ content: <Icon color="blue" name="user" size="small" /> }}
      labelPosition="left"
      placeholder="First Name"
      value={firstName}
      autoFocus
    />

    <label target="signup.signUpFormDetails.lastName">Last Name</label>
    <Field
      id="signup.signUpFormDetails.lastName"
      name="lastName"
      component={LabelInputField}
      label={{ content: <Icon color="blue" name="user" size="small" /> }}
      labelPosition="left"
      placeholder="Last Name"
      value={lastName}
    />

    <label target="signup.signUpFormDetails.password">Password</label>
    <Field
      id="signup.signUpFormDetails.password"
      name="Password"
      component={LabelInputField}
      label={{ content: <Icon color="blue" name="lock" size="small" /> }}
      labelPosition="left"
      placeholder="••••••••••"
      type="password"
      value={password}
    />

    <label target="signup.signUpFormDetails.email">Email</label>
    <Field
      id="signup.signUpFormDetails.email"
      name="email"
      component={LabelInputField}
      label={{ content: <Icon color="blue" name="envelope" size="small" /> }}
      labelPosition="left"
      placeholder="Email"
      type="email"
      value={email}
    />

    <label target="signup.signUpFormDetails.phoneNumber">Phone Number</label>
    <Field
      id="signup.signUpFormDetails.phoneNumber"
      name="phoneNumber"
      component={LabelInputField}
      label={{ content: <Icon color="blue" name="phone" size="small" /> }}
      labelPosition="left"
      placeholder="Phone Number"
      type="number"
      value={phoneNumber}
    />
  </FormSection>
);

SignUpFormDetails.defaultProps = {
  firstname: '',
  lastname: '',
  password: '',
  email: '',
  phoneNumber: '',
};

export default SignUpFormDetails;
