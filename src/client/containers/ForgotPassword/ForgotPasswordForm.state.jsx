import { connect } from 'react-redux';

import ForgotPasswordForm from '../../components/ForgotPassword/ForgotPasswordForm';


// event handling should be done here
const ForgetPasswordFormContainer = props => <ForgotPasswordForm {...props} />;

export const mapDispatchToProps = () => ({
    onSubmit: () => dispatch({
      type: 'DO_FORGOTPASSWORD'
    })
  });

export const mapStateToProps = state => ({
    forgotPasswordDetails: selectForgotPasswordDetails(state),
  });
  
export default connect(mapStateToProps, mapDispatchToProps)(ForgetPasswordFormContainer);
