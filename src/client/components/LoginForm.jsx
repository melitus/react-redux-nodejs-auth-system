import React from 'react'
import { Field, reduxForm, FieldArray } from 'redux-form';
import isEmail from 'sane-email-validation';


const validate = (values) => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  }
  if (!values.lastName) {
    errors.lastName = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!isEmail(values.email)) {
    errors.email = 'invalid email address';
  }
  if (values.phones && values.phones.length > 3) {
    errors.phones = [];
    errors.phones._error = 'Too many phones';
  }
  return errors;
};

const renderInput = field => (
  <div>
    <label htmlFor={field.input.placeholder}>{field.input.placeholder}</label>
    <div>
      <input {...field.input} />
      {field.errors && field.touched && <span> {field.error}</span>}
    </div>
  </div>
);

const renderPhones = ({ fields }) => (
  <ul>
    <li><button type="button" onClick={() => fields.push()}>Add Button </button> </li>
    {fields.map((field, index) =>
      <li>
        <Field name="field" component={renderInput} placeholder={'phone #$(index + 1)'} />
        <button type="button" onClick={() => fields.remove(index)}> remove</button>
      </li>
    )}
    {fields.errors && <li className="error">{fields.error}</li>}
  </ul>
);

let LoginForm = ({ handleSubmit }) => (
  <div>
    <h1> LoginForm demo</h1>
    <form onSubmit={handleSubmit}>
      <Field name="firstName" component={renderInput} placeholder="first Name" />
      <Field name="lastName" component={renderInput} placeholder="last Name" />
      <Field name="email" component={renderInput} placeholder="email" type="email" />
      <FieldArray name="phones" component={renderPhones} placeholder="email" type="email" />
      <button type="submit">Submit</button>
    </form>
  </div>
  );

LoginForm = reduxForm({
  form: 'loginForm',
  validate
})(LoginForm);

export default LoginForm;
