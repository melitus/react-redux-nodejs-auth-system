import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

import { reducer as entities } from '../branches/entities';
import auth from '../../modules/auth';
import profile from '../../modules/profile';



const rootReducers = combineReducers({
  // Vendor reducers
  form: formReducer,
  routing,

  // Own reducers
  entities,
  auth,
  profile
});

export default rootReducers;
