import enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { reducer as form } from 'redux-form';

import ResetPasswordFormContainer from './ResetPassword.state';
import { selectResetPasswordDetails } from '../../redux/branches/entities/resetpassword';
import { reducer as entities } from '../../redux/branches/entities';

enzyme.configure({ adapter: new Adapter() });

const renderContainer = () => {
  const rootReducer = combineReducers({ form, entities });
  const store = createStore(rootReducer);

  const wrapper = render(
    <Provider store={store} key="provider">
      <ResetPasswordFormContainer />
    </Provider>
  );

  return { wrapper, store };
};

describe('ResetPasswordFormContainer', () => {
  it('.selectResetPasswordDetails', () => {
    const resetpasswordInfo = selectResetPasswordDetails(renderContainer().store.getState());

    expect(resetpasswordInfo).toEqual({
      email: '',
    });
  });
});
