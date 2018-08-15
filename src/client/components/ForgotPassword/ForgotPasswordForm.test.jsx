import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

import ForgotPasswordForm from './ForgotPasswordForm';

enzyme.configure({ adapter: new Adapter() });

describe('<ForgotPasswordForm />', () => {
  it('should render default snapshot', () => {
    const wrapper = shallow(
      <ForgotPasswordForm />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
