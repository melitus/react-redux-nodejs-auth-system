import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

import SignInDetails from './SignInDetails';

enzyme.configure({ adapter: new Adapter() });

describe('<SignInDetails />', () => {
  it('should render default snapshot', () => {
    const wrapper = shallow(
      <SignInDetails />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
