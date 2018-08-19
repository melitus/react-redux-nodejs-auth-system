import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

import Header from './Header';

enzyme.configure({ adapter: new Adapter() });


describe('<Header />', () => {
  it('should render Footer', () => {
    const wrapper = shallow(
      <Header />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
