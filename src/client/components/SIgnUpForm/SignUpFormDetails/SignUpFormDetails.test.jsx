import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

import SignUpFormDetails from './SignUpFormDetails';

enzyme.configure({ adapter: new Adapter() });

describe('<SignUpFormDetails />', () => {
  it('should render default snapshot', () => {
    const wrapper = shallow(
      <SignUpFormDetails />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
