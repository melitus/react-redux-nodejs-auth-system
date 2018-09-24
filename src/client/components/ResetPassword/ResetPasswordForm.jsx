import React from 'react';
import { reduxForm } from 'redux-form';
import { Container, Grid, Form, Message } from 'semantic-ui-react';

import ResetPasswordDetails from './ResetPasswordDetails/ResetPasswordDetails';
import ResetPasswordFormValidation from './ResetPasswordFormValidation';

const ResetPasswordForm = (props) => {
  const { handleSubmit, pristine, submitting, loading, error } = props;
  return (
    <Container>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Form onSubmit={handleSubmit} autoComplete="off" loading={loading} >
              <Form.Field >
                <ResetPasswordDetails resetPasswordDetails={ResetPasswordDetails} />
              </Form.Field>
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

