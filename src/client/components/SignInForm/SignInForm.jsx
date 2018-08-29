import React, { PropTypes } from 'react';
import { Button, Form } from 'semantic-ui-react';

import SignInDetails from './SignInDetails/SignInDetails';

const SignInForm = (props) => {
  const { handleSubmit, pristine, submitting, loading } = props;
    return (
        <Container>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={6}>
              <Form onSubmit={handleSubmit} autoComplete="off" loading={loading} > 
                <Form.Field >
                <SignInDetails signInDetails={signInDetails} />
                </Form.Field>
                <Button primary type='signUp' disabled={pristine || submitting}>Sign In</Button>
              </Form>
              </Grid.Column>
            </Grid.Row>
        </Grid>
        </Container>
    );
}
    // Decorate the form component
    SignInForm = reduxForm({
      form: 'loginForm', // a unique name for this form
      validate: loginValidation,
    })(SignInForm);
    
export default SignInForm;
