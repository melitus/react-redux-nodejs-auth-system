const isEmpty = value => value === undefined || value === null || value === "";
const join = rules => (value, data, params) =>
  rules.map(rule => rule(value, data, params)).filter(error => !!error)[0];

export const email = value => {
  // Let's not start a debate on email regex. This is just for an example app!
  if (
    !isEmpty(value) &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
  ) {
    return "Invalid email address";
  }
};

export const requiredInput = input => (input ? undefined : `Input is required`);

export const correctInput = input =>
  input !== "rajat" ? "Incorrect Username" : undefined;

export const isRequired = value => {
  if (isEmpty(value)) {
    return `${fieldName} is required`;
  }
};

export const minLength = min => {
  return value => {
    if (!isEmpty(value) && value.length < min) {
      return `${value} must be at least ${min} characters`;
    }
  };
};

export const maxLength = max => {
  return value => {
    if (!isEmpty(value) && value.length > max) {
      return `${value} must be no more than ${max} characters`;
    }
  };
};

export const integer = value => {
  if (!isEmpty(value) && !Number.isInteger(Number(value))) {
    return "Must be an integer";
  }
};

export const oneOf = enumeration => {
  return value => {
    if (!enumeration.includes(value)) {
      return `Must be one of: ${enumeration.join(", ")}`;
    }
  };
};

export const mustMatch = field => {
  return (value, data) => {
    if (data) {
      if (value !== data[field]) {
        return `${value} must match ${field}`;
      }
    }
  };
};

export const createValidator = (rules, params) => {
  return (data = {}) => {
    const errors = {};
    Object.keys(rules).forEach(key => {
      const rule = join([].concat(rules[key])); // concat enables both functions and arrays of functions
      const error = rule(data[key], data, { key, ...params });
      if (error) {
        errors[key] = error;
      }
    });
    return errors;
  };
};
