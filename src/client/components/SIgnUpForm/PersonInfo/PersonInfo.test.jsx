import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

import PersonInfo from './PersonInfo';

enzyme.configure({ adapter: new Adapter() });

describe('<PersonInfo />', () => {
  it('should render default snapshot', () => {
    const wrapper = shallow(
      <PersonInfo />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
