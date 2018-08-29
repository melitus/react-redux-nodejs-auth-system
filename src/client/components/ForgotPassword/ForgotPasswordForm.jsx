import React from 'react';
import { reduxForm } from 'redux-form';
import { Container, Grid, Form, Message } from 'semantic-ui-react';

import ForgotPasswordDetails from './forgotPasswordDetail/ForgotPasswordDetails';
import forgotPasswordValidation from './forgotPasswordValidation';

const ForgotPasswordForm = (props) => {
    const { handleSubmit, pristine,submitting, loading, error } = props;
    return (
      <Container>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Form onSubmit={handleSubmit} autoComplete="off" loading={loading} > 
              <Form.Field >
              <ForgotPasswordDetails forgotPassword={forgotPassword} />
              </Form.Field>
              {error && (
              <Message negative>
              <p>{error}</p>
              </Message>
              )}
              <Form.Button primary type='forgotpassword' disabled={pristine || submitting}>Forgot Password</Button>
            </Form>
            </Grid.Column>
          </Grid.Row>
      </Grid>
      </Container>
    );
  
  }
  ForgotPasswordForm = reduxForm({
    form: 'forgotPasswordForm',
    validate: forgotPasswordValidation,
  })(ForgotPasswordForm);

export default ForgotPasswordForm;
