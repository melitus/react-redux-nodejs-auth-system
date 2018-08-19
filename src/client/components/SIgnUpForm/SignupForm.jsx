import React, { PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Button, Form ,Container, Grid } from 'semantic-ui-react';

import SignUpFormDetails from './SignUpFormDetails/SignUpFormDetails';

class SignupForm extends React.Component {

  render() {
    const {
      handleSubmit,
      pristine, 
      loading,
      submitting,
      signUpFormDetails
    } = this.props;
    return (
  <Container>
    <Grid>
      <Grid.Row centered>
         <Grid.Column width={6}>
          <Form onSubmit={handleSubmit} autoComplete="off" loading={loading} > 
            <Form.Field >
            <SignUpFormDetails signUpFormDetails={signUpFormDetails} />
            </Form.Field>
            <Form.Button primary type='signUp' disabled={pristine || submitting}>Sign Up</Form.Button>
           </Form>
          </Grid.Column>
        </Grid.Row>
     </Grid>
  </Container>
    );
  }
}

SignupForm = reduxForm({
  form: 'signUpForm',
  //validate: signUpValidation,
})(SignupForm);

export default SignupForm;
