import React from 'react';
import { reduxForm } from 'redux-form';
import { Form ,Container, Grid } from 'semantic-ui-react';

import SignUpFormDetails from './SignUpFormDetails/SignUpFormDetails';

const SignupForm = ({ handleSubmit,pristine, loading,submitting }) => {

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

export default SignupForm;
