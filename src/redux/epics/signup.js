import { Observable } from 'rxjs';

import { performRegistration$ } from '../../api/Services/index';
import { ReduxObservable } from '../utils';

import {
  doSignupRequest,
  doSignupSuccess,
  doSignupError,
  transitToConfirmation
} from '../branches/entities/signup';

const doSignupEpic = action$ =>
 action$
  .ofType(doSignupRequest)
    .switchMap(action =>
      performRegistration$(action.payload)
       .switchMap(response =>
        Observable.concat(
          Observable.of(doSignupSuccess(response)),
          Observable.of(transitToConfirmation({}))
        )
      )
      .catch(error =>
        Observable.of(
          doSignupError({
            error
          })
        )
      )
  );

const signupEpic = ReduxObservable.combineEpics(doSignupEpic);

export default signupEpic;
