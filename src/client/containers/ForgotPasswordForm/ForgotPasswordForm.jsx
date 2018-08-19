import { connect } from 'react-redux';

import SignInForm from '../../components/SignInForm/SignInForm';


// event handling should be done here

export const mapDispatchToProps = () => ({
    onSubmit: () => dispatch({
      type: 'DO_FORGOTPASSWORD'
    })
  });

export const mapStateToProps = state => ({
    loginDetails: selectForgotPasswordDetails(state),
  });

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
