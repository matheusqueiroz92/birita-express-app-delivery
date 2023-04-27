import React from 'react';
import PropTypes from 'prop-types';
import styleLogin from '../pages/Login/Login.module.css';

export default function ErrorMessage({ ErrorMsg, dataTestId }) {
  return (
    <div>
      <p className={ styleLogin.textError } data-testid={ dataTestId }>{ ErrorMsg }</p>
    </div>
  );
}

ErrorMessage.propTypes = {
  ErrorMsg: PropTypes.string,
}.isRequired;
