import React from 'react';
import PropTypes from 
import css from './Button.module.css';

const Button = ({ text }) => (
  <button className={css.button}>{text}</button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
