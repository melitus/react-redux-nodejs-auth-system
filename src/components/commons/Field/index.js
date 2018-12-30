import React from 'react';

export const renderField = ({input, label, type, meta: {touched, error}, disabled}) => (
  <div className="form-group">
      <label>{label}:</label>
      <input {...input} className="form-control" disabled={disabled} type={type}/>
      <div> 
       {touched && error && <span style={{ color: 'red', fontWeight: 'bold' }} >{error}</span>}
     </div>
  </div>
);