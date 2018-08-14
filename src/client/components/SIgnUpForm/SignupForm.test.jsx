import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

import SignupForm from './SignupForm';

enzyme.configure({ adapter: new Adapter() });

describe('<SignupForm />', () => {
  it('should render default snapshot', () => {
    const wrapper = shallow(
      <SignupForm />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
