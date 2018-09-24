import enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { reducer as form } from 'redux-form';

import SignupFormContainer from './SignupForm.state';
import { selectSignUpDetails } from '../../redux/branches/entities/signup';
import { reducer as entities } from '../../redux/branches/entities';

enzyme.configure({ adapter: new Adapter() });

const renderContainer = () => {
  const rootReducer = combineReducers({ form, entities });
  const store = createStore(rootReducer);

  const wrapper = render(
    <Provider store={store} key="provider">
      <SignupFormContainer />
    </Provider>
  );

  return { wrapper, store };
};

describe('SignupFormContainer', () => {
  it('.selectSignUpDetails', () => {
    const signupInfo = selectSignUpDetails(renderContainer().store.getState());

    expect(signupInfo).toEqual({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      password: '',
    });
  });
});
