import React from 'react';
import { connect } from 'react-redux';

import ForgotPasswordForm from '../../components/ForgotPassword/ForgotPasswordForm';
import { selectForgotPasswordDetails } from '../../redux/branches/entities/forgotpassword';

// event handling should be done here
const ForgetPasswordFormContainer = props => <ForgotPasswordForm {...props} />;

export const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch({ type: 'DO_FORGOTPASSWORD' })
});

export const mapStateToProps = state => ({
  forgotPasswordDetails: selectForgotPasswordDetails(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordFormContainer);
