import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

import ResetPasswordDetails from './ResetPasswordDetails';

enzyme.configure({ adapter: new Adapter() });

describe('<ResetPasswordDetails />', () => {
  it('should render default snapshot', () => {
    const wrapper = shallow(
      <ResetPasswordDetails />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
