import memoize from "lru-memoize";
import {
  createValidator,
  required,
  email,
  integer
} from "../../utils/validation";

const ResetPasswordFormValidation = createValidator({
  password: required
});
export default memoize(10)(ResetPasswordFormValidation);
