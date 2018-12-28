import React from 'react';
import { connect } from 'react-redux';

import SignInForm from '../../components/SignInForm/SignInForm';
import { selectSignInDetails } from '../../redux/branches/entities/signin';

// event handling should be done here
export const SignInFormContainer = props => (
  <SignInForm
    formValues={props.formValues}
    onSubmit={props.submitForm}
    handleSubmit={props.handleSubmit}
  />
  );


export const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch({ type: 'DO_SIGNIN' })
});

export const mapStateToProps = state => ({
  loginDetails: selectSignInDetails(state),
});


export default connect(mapStateToProps, mapDispatchToProps)(SignInFormContainer);
