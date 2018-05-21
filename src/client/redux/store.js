import { createStore } from 'redux';
import reducers from './rootReducers';


const store = createStore(reducers);

export default store;
