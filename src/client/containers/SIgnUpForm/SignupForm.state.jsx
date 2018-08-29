import { connect } from 'react-redux';

import SignupForm from '../../components/SignUpForm/SignupForm';


const SignupFormContainer = props => <SignupForm {...props} />;


export const mapDispatchToProps = () => ({
    onSubmit: () => dispatch({
      type: 'DO_SIGNUP'
    })
  });

export const mapStateToProps = state => ({
    signUpDetails: selectSignUpDetails(state)
  });

  // Decorate the form component
SignInForm = reduxForm({
  form: 'loginForm', // a unique name for this form
  validate: loginValidation,
})(SignInForm);

export default connect(mapStateToProps, mapDispatchToProps)(SignupFormContainer);
