// @flow
import React from 'react';
import { reduxForm } from 'redux-form';
import { Container, Grid, Form, Message } from 'semantic-ui-react';

import { renderFields } from '../commons/Field/index';
import signInValidation from './signInValidation';

type SignInFormProp = {
  handleSubmit?: Function,
  email: string,
  loading?: boolean,
  pristine?: boolean,
  submitting?: boolean,
  error?: string
};

const SignInForm = ({handleSubmit, pristine, submitting, loading, error}: SignInFormProp) => {
  return (
    <Container>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Form onSubmit={handleSubmit} autoComplete="off" loading={loading} >
            <label target="signin.email">Email</label>
              <Field
                id="signin.email"
                name="email"
                component={renderField}
                placeholder="Email"
                type="email"
              />

              <label target="signin.passwword">Password</label>
              <Field
                id="signup.password"
                name="password"
                component={renderField}
                placeholder="••••••••••"
                type="password"
              />
              {error && (
                <Message negative>
                  <p>{error}</p>
                </Message>
                )}
              <Form.Button primary type="signUp" disabled={pristine || submitting}>Sign In</Form.Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

    // Decorate the form component
export default reduxForm({
  form: 'loginForm', // a unique name for this form
  validate: signInValidation,
})(SignInForm);

