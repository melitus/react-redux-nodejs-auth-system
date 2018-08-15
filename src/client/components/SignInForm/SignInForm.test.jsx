import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

import SignInForm from './SignInForm';

enzyme.configure({ adapter: new Adapter() });

describe('<SignInForm />', () => {
  it('should render default snapshot', () => {
    const wrapper = shallow(
      <SignInForm />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
