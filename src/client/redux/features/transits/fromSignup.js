import { push } from "react-router-redux";

import { ReduxObservable } from "../../utils";
import { TRANSIT_TO_CONFIRMATION } from "../../branches/entities/signup";

const transitFromSignup = action$ =>
  action$.ofType(TRANSIT_TO_CONFIRMATION).map(() => push("/confirmation"));

export default ReduxObservable.combineEpics(transitFromSignup);
