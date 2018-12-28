import enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { reducer as form } from 'redux-form';

import ForgotPasswordFormContainer from './ForgotPasswordForm.state';
import { selectForgotPasswordDetails } from '../../redux/branches/entities/forgotpassword';
import { reducer as entities } from '../../redux/branches/entities';

enzyme.configure({ adapter: new Adapter() });

const renderContainer = () => {
  const rootReducer = combineReducers({ form, entities });
  const store = createStore(rootReducer);

  const wrapper = render(
    <Provider store={store} key="provider">
      <ForgotPasswordFormContainer />
    </Provider>
  );

  return { wrapper, store };
};

describe('ForgotPasswordFormContainer', () => {
  it('.selectForgotPasswordDetails', () => {
    const forgotpasswordInfo = selectForgotPasswordDetails(renderContainer().store.getState());

    expect(forgotpasswordInfo).toEqual({
      email: '',
    });
  });
});
