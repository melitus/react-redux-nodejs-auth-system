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
}

SignInForm = reduxForm({
  form: 'loginForm',
  validate: loginValidation,
})(SignInForm);

export default SignInForm;
