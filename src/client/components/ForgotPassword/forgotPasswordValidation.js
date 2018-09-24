import memoize from 'lru-memoize';
import { createValidator, required, email } from '../../utils/validation';

const forgotPasswordValidation = createValidator({
  email: [email, required]
});
export default memoize(10)(forgotPasswordValidation);
