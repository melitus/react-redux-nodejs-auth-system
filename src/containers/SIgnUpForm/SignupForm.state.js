import React from 'react';
import { connect } from 'react-redux';

import SignupForm from '../../components/SIgnUpForm/SignupForm';
import { selectSignupForm } from '../../redux/branches/entities/signup';
import doSignupRequest  from '../../redux/branches/entities/signup';


class SignupFormContainer extends React.Component{
   submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
    doSignupRequest(formValues);
  }

  render() {
    return <SignupForm onSubmit={this.submitForm} />
  }

}

export const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch({ type: 'DO_SIGNUP' })
});

export const mapStateToProps = state => ({
  signUpDetails: selectSignupForm(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupFormContainer);
