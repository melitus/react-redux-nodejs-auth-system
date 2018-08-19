import { connect } from 'react-redux';

import SignInForm from '../../components/SignIn/SignInForm';

// event handling should be done here

export const mapDispatchToProps = () => ({
    onSubmit: () => dispatch({
      type: 'DO_SIGNIN'
    })
  });

export const mapStateToProps = state => ({
    loginDetails: selectLoginDetails(state),
  });

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
