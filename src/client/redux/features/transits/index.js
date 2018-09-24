import { ReduxObservable } from "../../utils";

import fromSignup from "./fromSignup";

export default ReduxObservable.combineEpics(fromSignup);
