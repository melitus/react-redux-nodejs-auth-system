import enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';

import HeaderContainer from './Header.state';
import { createStore } from 'redux';

enzyme.configure({ adapter: new Adapter() });

const renderContainer = () => {
  const rootReducer = combineReducers({});
  const store = createStore(rootReducer);

  const wrapper = render(
    <Provider store={store} key="provider">
      <HeaderContainer />
    </Provider>
  );

  return { wrapper, store };
};

describe('HeaderContainer', () => {
  describe('.getState', () => {
    it('returns empty state', () => {
      const state = renderContainer().store.getState();

      expect(state).toEqual({});
    });
  });
});
