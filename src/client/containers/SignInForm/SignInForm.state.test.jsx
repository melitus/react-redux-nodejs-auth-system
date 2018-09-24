import enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { reducer as form } from 'redux-form';

import { SignInFormContainer } from './SignInForm.state';
import { selectSignInDetails } from '../../redux/branches/entities/signin';
import { reducer as entities } from '../../redux/branches/entities';

enzyme.configure({ adapter: new Adapter() });

const renderContainer = () => {
  const rootReducer = combineReducers({ form, entities });
  const store = createStore(rootReducer);

  const wrapper = render(
    <Provider store={store} key="provider">
      <SignInFormContainer />
    </Provider>
  );

  return { wrapper, store };
};

describe('SignInFormContainer', () => {
  it('.selectSignInDetails', () => {
    const signInInfo = selectSignInDetails(renderContainer().store.getState());

    expect(signInInfo).toEqual({
      email: '',
      password: '',
    });
  });
});
