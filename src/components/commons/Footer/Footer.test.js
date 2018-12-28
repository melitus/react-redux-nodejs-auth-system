import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

import Footer from './Footer';

enzyme.configure({ adapter: new Adapter() });


describe('<Footer />', () => {
  it('should render Footer', () => {
    const wrapper = shallow(
      <Footer />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
