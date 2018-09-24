import { Observable } from "rxjs";

import { performRegistration$ } from "../../api/Services/index";
import { ReduxObservable } from "../utils";

import {
  transitToConfirmation,
  _requestSuccess,
  _requestError,
  DO_SIGNUP
} from "../branches/entities/signup";

const doSignupEpic = action$ =>
  action$.ofType(DO_SIGNUP).switchMap(action =>
    performRegistration$(action.payload)
      .switchMap(response =>
        Observable.concat(
          Observable.of(_requestSuccess(response)),
          Observable.of(transitToConfirmation({}))
        )
      )
      .catch(error =>
        Observable.of(
          _requestError({
            error
          })
        )
      )
  );

const signupEpic = ReduxObservable.combineEpics(doSignupEpic);

export default signupEpic;
