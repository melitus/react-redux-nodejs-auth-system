import React from 'react';

import PersonInfo from './PersonInfo/PersonInfo';
import ContactDetail from './ContactDetail/ContactDetail';

class SignupForm extends React.Component {
  render() {
    const {
      handleSubmit,
      personInfo,
      contactDetail,
    } = this.props;
    return (
      <form onSubmit={handleSubmit} autoComplete="off">
        <PersonInfo personInfo={personInfo} />
        <ContactDetail contactDetail={contactDetail} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default SignupForm;
