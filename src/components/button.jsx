import React from 'react';

const Button = ({
  type,
  handleOnclick,
  label,
}) => <button type={type} onClick={handleOnclick}>{label}</button>;

export default Button;
