import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

import ContactDetail from './ContactDetail';

enzyme.configure({ adapter: new Adapter() });

describe('<ContactDetail />', () => {
  it('should render default snapshot', () => {
    const wrapper = shallow(
      <ContactDetail />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
