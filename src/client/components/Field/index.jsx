import React from 'react';

// Passing Custom Reusable Components to Field
export  const LabelInputField = props => {
  return (
    <input {...props.input} type={props.type} placeholder={props.placeholder} />
  );
};


