import { connect } from 'react-redux';

import SignupForm from '../../components/SignupForm/SignupForm';

// event handling should be done here

export const mapDispatchToProps = () => ({
    onSubmit: () => dispatch({
      type: 'DO_SIGNUP'
    })
  });

export const mapStateToProps = state => ({
    signUpDetails: selectSignUpDetails(state)
  });

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
