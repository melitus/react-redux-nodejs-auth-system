import React from 'react';
import { connect } from 'react-redux';

import SignupForm from '../../components/SIgnUpForm/SignupForm';
import { selectSignupForm } from '../../redux/branches/entities/signup';
import signupEpic  from '../../redux/epics/signup';


class SignupFormContainer extends React.Component{
   submitForm = (formValues) => {
    console.log('submitting Form: ', formValues);
    signupEpic(formValues);
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
