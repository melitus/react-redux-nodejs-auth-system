

// Using Field-Level Validation

export const requiredInput = input =>
  input ? undefined : `Input is required`;

export const correctInput = input =>
  input !== 'rajat' ? 'Incorrect Username' : undefined;

  export const matchInput = (input, allInputs) =>
input === allInputs.password ? undefined : 'Passwords do not match';

export const isRequired = fieldName => `${fieldName} is required`;

export const mustMatch = otherFieldName => {
return (fieldName) => `${fieldName} must match ${otherFieldName}`;
};

export const minLength = length => {
return (fieldName) => `${fieldName} must be at least ${length} characters`;
};

const required = msg => value => (value ? undefined : msg);
