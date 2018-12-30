import memoize from 'lru-memoize';
import {
  createValidator,
  required,
  email,
  integer,
  minLength
} from '../../utils/validation';

const signUpValidation = createValidator({
  firstName: required,
  lastName: required,
  email: [email, required],
  password: [required, minLength(6)],
  phoneNumber: [integer, required],
  
});
export default memoize(10)(signUpValidation);
