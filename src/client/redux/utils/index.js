import { ReduxObservable, ActionsObservable } from './reduxObservable';

const createActionWithPayload = type => payload => ({ type, payload });

export {
  ReduxObservable,
  ActionsObservable,
  createActionWithPayload,
};
