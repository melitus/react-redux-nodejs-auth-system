import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

const rootReducers = combineReducers({

  form: formReducer,
});

export default rootReducers;
