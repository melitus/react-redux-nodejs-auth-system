import React from 'react';
import { connect } from 'react-redux';

import SignupForm from '../../components/SIgnUpForm/SignupForm';
import { selectSignUpDetails } from '../../redux/branches/entities/signup';


const SignupFormContainer = props => <SignupForm {...props} />;


export const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch({ type: 'DO_SIGNUP' })
});

export const mapStateToProps = state => ({
  signUpDetails: selectSignUpDetails(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(SignupFormContainer);
