import React from 'react';
import './Button.scss';

function Button({ children, variant = 'primary', size = 'medium', onClick, disabled = false }) {
  return (
    <button 
      className={`btn btn--${variant} btn--${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;

