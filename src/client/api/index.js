import { postAPI$, getAPI$ /* , deleteAPI$, putAPI$ */} from '../utils/ioUtils';
import apiPathsRoot from '../../shared/apiPaths';

const apiPaths = apiPathsRoot.children;

const makeProfile$ = signupDetails =>
  postAPI$(apiPaths.signup.path, { body: signupDetails });

export {
  makeProfile$
};
