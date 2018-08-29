import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

import { SignupForm } from './Signup';

enzyme.configure({ adapter: new Adapter() });

describe('<SignupPage />', () => {
  it('.it renders <SignupForm />', () => {
    const component = shallow(<SignupForm />);
    expect(component).toMatchSnapshot();
  });
});
