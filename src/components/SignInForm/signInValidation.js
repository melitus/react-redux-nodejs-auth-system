import memoize from 'lru-memoize';
import {
  createValidator,
  required,
  email,
  minLength } from '../../utils/validation';

const loginValidation = createValidator({
  email: [email, required("Email")],
  password: [required('Password'), minLength(6)]
});
export default memoize(10)(loginValidation);
