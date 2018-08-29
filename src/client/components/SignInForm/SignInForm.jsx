import React, { PropTypes } from 'react';
import { Container,Grid, Form, Message } from 'semantic-ui-react';

import SignInDetails from './SignInDetails/SignInDetails';

const SignInForm = (props) => {
  const { handleSubmit, pristine, submitting, loading, error } = props;
    return (
        <Container>
        <Grid>
          <Grid.Row centered>
            <Grid.Column width={6}>
              <Form onSubmit={handleSubmit} autoComplete="off" loading={loading} > 
                <Form.Field >
                <SignInDetails signInDetails={signInDetails} />
                </Form.Field>
                {error && (
                <Message negative>
                <p>{error}</p>
                </Message>
                )}
                <Form.Button primary type='signUp' disabled={pristine || submitting}>Sign In</Button>
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
