import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

import ForgotPasswordDetails from './ForgotPasswordDetails';

enzyme.configure({ adapter: new Adapter() });

describe('<ForgotPasswordDetails />', () => {
  it('should render default snapshot', () => {
    const wrapper = shallow(
      <ForgotPasswordDetails />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
