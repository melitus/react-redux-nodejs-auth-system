import { ReduxObservable } from '../utils/';
import signupEpic from '../epics/signup';
import transitEpic from '../epics/transits';

export default ReduxObservable.combineEpics(signupEpic, transitEpic);
