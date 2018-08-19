import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Button, Form } from 'semantic-ui-react';

import ResetPasswordDetails from './ResetPasswordDetails/ResetPasswordDetails';
import ResetPasswordFormValidation from './ResetPasswordFormValidation';


class ResetPasswordForm extends React.Component {

  render() {
    const {
      handleSubmit,
      loading,
      resetPasswordDetails,
    } = this.props;
    return (
      <Container>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={6}>
              <Form onSubmit={handleSubmit} autoComplete="off" loading={loading} > 
                <Form.Field >
                <ResetPasswordDetails resetPasswordDetails={resetPasswordDetails} />
                </Form.Field>
                <Button primary type='resetpassword' disabled={pristine || submitting}>Reset Password</Button>
              </Form>
              </Grid.Column>
            </Grid.Row>
        </Grid>
        </Container>
    );
  }
}

ResetPasswordForm = reduxForm({
  form: 'ResetPasswordForm',
  validate: ResetPasswordFormValidation,
})(ResetPasswordForm);

export default ResetPasswordForm;
