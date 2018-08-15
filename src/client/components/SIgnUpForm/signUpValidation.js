import memoize from 'lru-memoize';
import { createValidator, required, email, integer } from '../../utils/validation';

const signUpValidation = createValidator({
  email: [email, required],
  password: required,
  phoneNo:[integer, required],
  firstname: required,
  lastname: required
});
export default memoize(10)(signUpValidation);
