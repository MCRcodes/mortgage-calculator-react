import React from 'react';
import PropTypes from 'prop-types';

const InputField = props => {
  const {
    label, type, handleOnChange, value,
  } = props;

  return (
    <div>
      {label}:
      <input type={type} onChange={handleOnChange} value={value} />
    </div>
  );
};

InputField.prototypes = {
  label: PropTypes.string,
  type: PropTypes.string.isRequired,
  handleOnChange: PropTypes.func,
  value: PropTypes.string,
};

InputField.defaultValues = {
  label: '',
  value: '',
};

export default InputField;
