import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Form, Container, Grid, Message, Icon } from 'semantic-ui-react';

import signUpValidation from './signUpValidation';
import { renderField } from '../commons/Field/index';
import Page from '../../Hoc/page';



type SignUpFormProp = {
  handleSubmit?: Function,
  loading?: boolean,
  renderField?: Function,
  pristine?: boolean,
  submitting?: boolean,
  error?: string
};

const SignupForm = ({ handleSubmit, pristine, submitting, loading, error } :SignUpFormProp ) => (
  <Page id="register" title="SignUp" description="We need to register in the portal.">
  <Container>
    <Grid>
      <Grid.Row centered>
        <Grid.Column width={6}>
          <Form onSubmit={handleSubmit} autoComplete="off" loading={loading}>
            <label target="signup.firstName">First Name</label>
            <Field
              id="signup.firstName"
              name="firstName"
              component={renderField}
              placeholder="First Name"
              autoFocus
            />

            <label target="signup.lastName">Last Name</label>
            <Field
              id="signup.lastName"
              name="lastName"
              component={renderField}
              placeholder="Last Name"
            />

            <label target="signup.password">Password</label>
            <Field
              id="signup.password"
              name="password"
              component={renderField}
              placeholder="••••••••••"
              type="password"
            />

            <label target="signup.email">Email</label>
            <Field
              id="signup.email"
              name="email"
              component={renderField}
              placeholder="Email"
              type="email"
            />

            <label target="signup.phoneNumber">Phone Number</label>
            <Field
              id="signup.phoneNumber"
              name="phoneNumber"
              component={renderField}
              placeholder="Phone Number"
              type="number"
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
  </Page>
  );

export default reduxForm({
  form: 'signUpForm',
  validate: signUpValidation,
})(SignupForm);
