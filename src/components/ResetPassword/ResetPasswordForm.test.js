import React from 'react';
import enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

import ResetPasswordForm from './ResetPasswordForm';

enzyme.configure({ adapter: new Adapter() });

describe('<ResetPasswordForm />', () => {
  it('should render default snapshot', () => {
    const wrapper = shallow(
      <ResetPasswordForm />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
