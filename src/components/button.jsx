import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  type,
  handleOnclick,
  label,
}) => <button type={type} onClick={handleOnclick}>{label}</button>;

Button.propTypes = {
  type: PropTypes.string.isRequired,
  handleOnclick: PropTypes.func,
  label: PropTypes.string,
};

Button.defaultProps = {
  handleOnclick: () => {},
  label: 'Cool button',
};

export default Button;
