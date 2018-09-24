import memoize from "lru-memoize";
import { createValidator, required, email } from "../../utils/validation";

const forgotPasswordValidation = createValidator({
  password: required
});
export default memoize(10)(forgotPasswordValidation);
