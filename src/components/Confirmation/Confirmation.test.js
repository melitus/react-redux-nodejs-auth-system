import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

import Confirmation from './Confirmation';

enzyme.configure({ adapter: new Adapter() });

describe('<Confirmation />', () => {
  it('should render default snapshot', () => {
    const wrapper = shallow(
      <Confirmation />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
