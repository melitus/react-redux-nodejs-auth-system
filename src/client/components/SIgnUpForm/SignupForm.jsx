// @flow
import React from 'react';
import { reduxForm } from 'redux-form';
import { Form, Container, Grid, Message, Icon } from 'semantic-ui-react';

import SignUpFormDetails from './SignUpFormDetails/SignUpFormDetails';

type SignUpFormProp = {
  firstName?: string,
  lastName?: string,
  password?: number,
  email: string,
  phoneNumber: number,
};

const SignupForm = ({handleSubmit, pristine, submitting, loading, error}: SignUpFormProp) => {
  const { handleSubmit, pristine, submitting, loading, error } = props;
  return (
    <Container>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Form onSubmit={handleSubmit} autoComplete="off" loading={loading}>
            <label target="signup.firstName">First Name</label>
              <Field
                id="signup.firstName"
                name="firstName"
                component={LabelInputField}
                label={{ content: <Icon color="blue" name="user" size="small" /> }}
                labelPosition="left"
                placeholder="First Name"
                value={firstName}
                autoFocus
              />

              <label target="signup.lastName">Last Name</label>
              <Field
                id="signup.lastName"
                name="lastName"
                component={LabelInputField}
                label={{ content: <Icon color="blue" name="user" size="small" /> }}
                labelPosition="left"
                placeholder="Last Name"
                value={lastName}
              />

              <label target="signup.password">Password</label>
              <Field
                id="signup.password"
                name="Password"
                component={LabelInputField}
                label={{ content: <Icon color="blue" name="lock" size="small" /> }}
                labelPosition="left"
                placeholder="••••••••••"
                type="password"
                value={password}
              />

              <label target="signup.email">Email</label>
              <Field
                id="signup.email"
                name="email"
                component={LabelInputField}
                label={{ content: <Icon color="blue" name="envelope" size="small" /> }}
                labelPosition="left"
                placeholder="Email"
                type="email"
                value={email}
              />

              <label target="signup.phoneNumber">Phone Number</label>
              <Field
                id="signup.phoneNumber"
                name="phoneNumber"
                component={LabelInputField}
                label={{ content: <Icon color="blue" name="phone" size="small" /> }}
                labelPosition="left"
                placeholder="Phone Number"
                type="number"
                value={phoneNumber}
              />
              {error && (
              <Message negative>
                <p>{error}</p>
              </Message>
            )}
              <Form.Button primary type="signUp" disabled={pristine || submitting}>Sign Up</Form.Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

SignUpFormDetails.defaultProps = {
  firstname: '',
  lastname: '',
  password: '',
  email: '',
  phoneNumber: '',
};

export default reduxForm({
  form: 'signUpForm',
  validate: signUpValidation,
})(SignupForm);
