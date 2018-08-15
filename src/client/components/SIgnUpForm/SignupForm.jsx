import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Button, Form } from 'semantic-ui-react';


import PersonInfo from './PersonInfo/PersonInfo';
import ContactDetail from './ContactDetail/ContactDetail';
import signUpValidation from './signUpValidation';


class SignupForm extends React.Component {

  render() {
    const {
      handleSubmit,
      personInfo,
      contactDetail,
    } = this.props;
    return (
      <Form onSubmit={handleSubmit} autoComplete="off"> 
        <Form.Field inline required>
         <PersonInfo personInfo={personInfo} />
         <ContactDetail contactDetail={contactDetail} />
        </Form.Field>
        <Button primary type="submit">Submit</Button>
      </Form>
    );
  }
}

SignupForm = reduxForm({
  form: 'signUpForm',
  validate: signUpValidation,
})(SignupForm);

export default SignupForm;
