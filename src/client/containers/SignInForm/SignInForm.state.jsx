import { connect } from 'react-redux';

import SignInForm from '../../components/SignInForm/SignInForm';

// event handling should be done here

export const mapDispatchToProps = () => ({
    onSubmit: () => dispatch({
      type: 'DO_SIGNIN'
    })
  });

export const mapStateToProps = state => ({
    loginDetails: selectLoginDetails(state),
  });

    // Decorate the form component
SignInForm = reduxForm({
  form: 'loginForm', // a unique name for this form
  validate: loginValidation,
})(SignInForm);

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
