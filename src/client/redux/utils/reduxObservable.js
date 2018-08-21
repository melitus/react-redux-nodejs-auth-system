import * as ReduxObservable from 'redux-observable';

class ActionsObservable extends ReduxObservable.ActionsObservable {
  lift(operator) {
    return this.lift(operator);
  }
  ofType(...key) {
    return this.ofType(...key);
  }
}

export {
  ReduxObservable,
  ActionsObservable,
};
