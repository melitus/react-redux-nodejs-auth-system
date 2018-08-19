import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Button, Form } from 'semantic-ui-react';

import ForgotPasswordDetails from './forgotPasswordDetail/ForgotPasswordDetails';
import forgotPasswordValidation from './forgotPasswordValidation';


class ForgotPasswordForm extends React.Component {

  render() {
    const {
      handleSubmit,
      forgotPassword,
    } = this.props;
    return (
      <Container>
      <Grid>
        <Grid.Row centered>
          <Grid.Column width={6}>
            <Form onSubmit={handleSubmit} autoComplete="off" loading={loading} > 
              <Form.Field >
              <ForgotPasswordDetails forgotPassword={forgotPassword} />
              </Form.Field>
              <Button primary type='forgotpassword' disabled={pristine || submitting}>Forgot Password</Button>
            </Form>
            </Grid.Column>
          </Grid.Row>
      </Grid>
      </Container>
    );
  }
}

ForgotPasswordForm = reduxForm({
  form: 'forgotPasswordForm',
  validate: forgotPasswordValidation,
})(ForgotPasswordForm);

export default ForgotPasswordForm;
