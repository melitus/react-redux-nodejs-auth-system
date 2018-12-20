import React from 'react';
import { reduxForm } from 'redux-form';
import { Container, Grid, Form, Message } from 'semantic-ui-react';

import { Input } from '../commons/Field/index';
import forgotPasswordValidation from './forgotPasswordValidation';

type ForgotPasswordProp = {
  handleSubmit?: Function,
  email: string,
  loading?: boolean,
  pristine?: boolean,
  submitting?: boolean,
  error?: string
};

const ForgotPasswordForm = ({ handleSubmit, pristine, submitting, loading, error }: ForgotPasswordProp) => (
  <Container>
    <Grid>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Form onSubmit={handleSubmit} autoComplete="off" loading={loading} >
              <label target="forgotPassword.email">Email</label>
              <Field
                id="forgotPassword.email"
                name="email"
                component={Input}
                placeholder="Email"
                type="email"
              />
              {error && (
              <Message negative>
                <p>{error}</p>
              </Message>
              )}
              <Form.Button primary type="forgotpassword" disabled={pristine || submitting}>Forgot Password</Form.Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
  </Container>
  );
export default reduxForm({
  form: 'forgotPasswordForm',
  validate: forgotPasswordValidation,
})(ForgotPasswordForm);

