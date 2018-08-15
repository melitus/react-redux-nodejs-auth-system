import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Button, Form } from 'semantic-ui-react';

import ResetPasswordDetails from './ResetPasswordDetails/ResetPasswordDetails';
import ResetPasswordFormValidation from './ResetPasswordFormValidation';


class ResetPasswordForm extends React.Component {

  render() {
    const {
      handleSubmit,
      resetPasswordDetails,
    } = this.props;
    return (
      <Form onSubmit={handleSubmit} autoComplete="off"> 
        <Form.Field inline required>
         <PersonInfo personInfo={personInfo} />
         <ResetPasswordDetails resetPasswordDetails={resetPasswordDetails} />
        </Form.Field>
        <Button primary type="submit">Submit</Button>
      </Form>
    );
  }
}

ResetPasswordForm = reduxForm({
  form: 'ResetPasswordForm',
  validate: ResetPasswordFormValidation,
})(ResetPasswordForm);

export default ResetPasswordForm;
