import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

import Layout from './Layout';

enzyme.configure({ adapter: new Adapter() });


describe('<Layout />', () => {
  it('should render layout', () => {
    const wrapper = shallow(
      <Layout />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
