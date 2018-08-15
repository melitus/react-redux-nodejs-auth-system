import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Button, Form } from 'semantic-ui-react';

import ForgotPasswordDetails from './ForgotPasswordDetails/ForgotPasswordDetails';
import forgotPasswordValidation from './forgotPasswordValidation';


class ForgotPasswordForm extends React.Component {

  render() {
    const {
      handleSubmit,
      forgotPassword,
    } = this.props;
    return (
      <Form onSubmit={handleSubmit} autoComplete="off"> 
        <Form.Field inline required>
         <ForgotPasswordDetails forgotPassword={forgotPassword} />
        </Form.Field>
        <Button primary type="submit">Submit</Button>
      </Form>
    );
  }
}

ForgotPasswordForm = reduxForm({
  form: 'forgotPasswordForm',
  validate: forgotPasswordValidation,
})(ForgotPasswordForm);

export default ForgotPasswordForm;
