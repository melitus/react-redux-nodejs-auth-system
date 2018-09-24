import { ReduxObservable } from "../utils/";
import signupEpic from "../features/signup";
import transitEpic from "../features/transits";

export default ReduxObservable.combineEpics(signupEpic, transitEpic);
