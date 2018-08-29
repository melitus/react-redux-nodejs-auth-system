import { connect } from 'react-redux';

import ResetPasswordForm from '../../components/ResetPassword/ResetPasswordForm';

// event handling should be done here
const ResetPasswordFormContainer = props => <ResetPasswordForm {...props} />;

export const mapDispatchToProps = () => ({
    onSubmit: () => dispatch({
      type: 'DO_RESETPASSWORD'
    })
  });

export const mapStateToProps = state => ({
    resetPasswordDetails: selectResetPasswordDetails(state),
  });

export default connect(mapStateToProps, mapDispatchToProps)(ResetPasswordFormContainer);

