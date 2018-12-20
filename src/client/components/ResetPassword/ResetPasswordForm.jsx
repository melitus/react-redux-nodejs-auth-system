import React from 'react';
import { reduxForm } from 'redux-form';
import { Container, Grid, Form, Message } from 'semantic-ui-react';

import { Input } from '../commons/Field/index';
import ResetPasswordFormValidation from './ResetPasswordFormValidation';

type ResetPasswordFormProp = {
  handleSubmit?: Function,
  loading?: boolean,
  pristine?: boolean,
  submitting?: boolean,
  error?: string
};

const ResetPasswordForm = ({handleSubmit, pristine, submitting, loading, error}:ResetPasswordFormProp) => {
  return (
    <Container>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Form onSubmit={handleSubmit} autoComplete="off" loading={loading} >
            <label target="resetPasswordForm.password">Password</label>
              <Field
                id="resetPasswordForm.password"
                name="password"
                component={Input}
                placeholder="Password"
                type="password"
              />

              <label target="resetPasswordForm.confirmPassword">Confirm Password</label>
              <Field
                id="resetPasswordForm.confirmPassword"
                name=" confirmPassword"
                component={Input}
                placeholder="Confirm Password"
                type="password"
              />
              {error && (
                <Message negative>
                  <p>{error}</p>
                </Message>
                 )}
              <Form.Button primary type="resetpassword" disabled={pristine || submitting}>Reset Password</Form.Button>
            </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

export default reduxForm({
  form: 'ResetPasswordForm',
  validate: ResetPasswordFormValidation,
})(ResetPasswordForm);

