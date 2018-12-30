import React from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';  

import SignInForm from '../../components/SignInForm/SignInForm';
import { selectUserEmail } from '../../redux/branches/entities/signin';
import { doSignInRequest } from '../../redux/branches/entities/signin'

// event handling should be done here
export const SignInFormContainer = props => (
  <SignInForm
    formValues={props.formValues}
    onSubmit={props.submitForm}
    handleSubmit={props.handleSubmit}
  />
  );


export const mapDispatchToProps = dispatch => ({
  onSubmit: () => bindActionCreators(doSignInRequest, dispatch)
});

export const mapStateToProps = state => {
  console.log('STATE', state);
  return ({
    loginUserEmail: selectUserEmail(state),
})};


export default connect(mapStateToProps, mapDispatchToProps)(SignInFormContainer);
