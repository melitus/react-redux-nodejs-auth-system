import { ReduxObservable } from './utils/';
import signupEpic from './features/signup';

export default ReduxObservable.combineEpics(
  signupEpic
);
