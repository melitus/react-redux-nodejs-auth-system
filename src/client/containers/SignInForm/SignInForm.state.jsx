import { connect } from 'react-redux';

import SignInForm from '../../components/SignInForm/SignInForm';

// event handling should be done here
export const SignInFormContainer = props => {
  return (
    <SignInForm
      formValues={props.formValues}
      onSubmit={submitForm}
      handleSubmit={props.handleSubmit}
    />
  );
}


export const mapDispatchToProps = () => ({
    onSubmit: () => dispatch({
      type: 'DO_SIGNIN'
    })
  });

export const mapStateToProps = state => ({
    loginDetails: selectLoginDetails(state),
  });


export default connect(mapStateToProps, mapDispatchToProps)(SignInFormContainer);
