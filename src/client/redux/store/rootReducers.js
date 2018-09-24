import { combineReducers } from "redux";
import { routerReducer as routing } from "react-router-redux";
import { reducer as formReducer } from "redux-form";

import { reducer as entities } from "../branches/entities";
import { reducer as entitiesMeta } from "../branches/entitiesMeta";

const rootReducers = combineReducers({
  // Vendor reducers
  form: formReducer,
  routing,

  // Own reducers
  entities,
  entitiesMeta
});

export default rootReducers;
