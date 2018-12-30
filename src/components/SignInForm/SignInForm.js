// @flow
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Container, Grid, Form, Message } from 'semantic-ui-react';

import { renderField } from '../commons/Field/index';
import signInValidation from './signInValidation';
import Page from '../../Hoc/page';


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
    <Page id="login" title="Login" description="We need to log in to portal.">
    <Container>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Form onSubmit={handleSubmit} autoComplete="off" loading={loading} >
              <Field
                id="signin.email"
                name="email"
                component={renderField}
                placeholder="Email"
                type="email"
                label="Email"
              />
              <Field
                id="signup.password"
                name="password"
                component={renderField}
                placeholder="••••••••••"
                type="password"
                label=" Password"
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
    </Page>
  );
};

    // Decorate the form component
export default reduxForm({
  form: 'SignInForm', // a unique name for this form
  validate: signInValidation,
})(SignInForm);

