import enzyme, { render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';
import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers } from 'redux';

import FooterContainer from './Footer.state';
import { createStore } from 'redux';

enzyme.configure({ adapter: new Adapter() });

const renderContainer = () => {
  const rootReducer = combineReducers({});
  const store = createStore(rootReducer);

  const wrapper = render(
    <Provider store={store} key="provider">
      <FooterContainer />
    </Provider>
  );

  return { wrapper, store };
};

describe('FooterContainer', () => {
  describe('.getState', () => {
    it('returns empty state', () => {
      const state = renderContainer().store.getState();

      expect(state).toEqual({});
    });
  });
});
