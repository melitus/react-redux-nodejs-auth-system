import { field, fieldArray } from 'redux-form';
import isEmail from 'sane-email-validation';
const validate = (values) => {
  const errors = {}
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.email) {
    errors.email = 'Required'
  } else if(!isEmail(value.email)) {
    error.email = 'invalid email address'
  }
  return errors
}

const renderInput = field => {
  <div>
    <label>{field.input.placeholder}</label>
    <div>
      <input {...field.input} />
      {field.errors && field.touched && <span> {field.error}</span>}
    </div>
  </div>
}
 const renderPhones = ({fields}) =>
 <ul>
<li></li>
 </ul>
const loginForm = ({ handleSubmit }) =>
  <div>
    <h1> LoginForm demo</h1>
    <form onSubmit={handleSubmit}>
      <field name="firstName" component={renderInput} placeholder="firstName" />
      <field name="lastName" component={renderInput} placeholder="lastName" />
      <field name="email" component={renderInput} placeholder="email" type="email" />
      <fieldArray name="phones" component={renderPhones} placeholder="email" type="email" />
      <button type="submit">Submit</button>
    </form>
  </div>
loginForm = reduxForm({
  form: loginForm,
  validate
})(loginForm);

export default loginForm;
