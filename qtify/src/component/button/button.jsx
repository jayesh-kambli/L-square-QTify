// Button.js
import React from 'react';
import './button.style.css';

const Button = ({ text }) => {
  return (
    <button className="feedbackButton">
      {text}
    </button>
  );
};

export default Button;
