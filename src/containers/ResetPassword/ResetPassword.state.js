import React from 'react';
import { connect } from 'react-redux';

import ResetPasswordForm from '../../components/ResetPassword/ResetPasswordForm';
import { selectResetPasswordDetails } from '../../redux/branches/entities/resetpassword';

// event handling should be done here
const ResetPasswordFormContainer = props => <ResetPasswordForm {...props} />;

export const mapDispatchToProps = dispatch => ({
  onSubmit: () => dispatch({ type: 'DO_RESETPASSWORD' })
});

export const mapStateToProps = state => ({
  resetPasswordDetails: selectResetPasswordDetails(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordFormContainer);

