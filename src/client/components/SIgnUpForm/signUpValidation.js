import memoize from 'lru-memoize';
import {
  createValidator,
  required,
  email,
  integer,
  minLength
} from '../../utils/validation';

const signUpValidation = createValidator({
  email: [email, required],
  password: [required, minLength(6)],
  phoneNo: [integer, required],
  firstname: required,
  lastname: required
});
export default memoize(10)(signUpValidation);
