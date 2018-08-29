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
  
export default connect(mapStateToProps, mapDispatchToProps)(SignupFormContainer);
