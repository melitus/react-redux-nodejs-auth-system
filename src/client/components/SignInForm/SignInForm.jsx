import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Button, Form } from 'semantic-ui-react';

import SignInDetails from './SignInDetails/SignInDetails';
import loginValidation from './loginValidation';


class SignInForm extends React.Component {

  render() {
    const {
      handleSubmit,
      signInDetails,
    } = this.props;
    return (
      <Form onSubmit={handleSubmit} autoComplete="off"> 
        <Form.Field inline required>
         <SignInDetails signInDetails={signInDetails} />
        </Form.Field>
        <Button primary type="submit">Submit</Button>
      </Form>
    );
  }
}

SignInForm = reduxForm({
  form: 'loginForm',
  validate: loginValidation,
})(SignInForm);

export default SignInForm;
