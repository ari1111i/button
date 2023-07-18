
import React, { useState } from 'react';

const Button = () => {
  const [buttonState, setButtonState] = useState(':NORMAL');

  const handleClick = () => {
    if (buttonState === ':ACTIVE') {
      setButtonState(':DISABLED');
    } else {
      setButtonState(':ACTIVE');
    }
  };

  const handleMouseEnter = () => {
    if (buttonState !== ':ACTIVE') {
      setButtonState(':HOVER');
    }
  };

  const handleMouseLeave = () => {
    if (buttonState !== ':ACTIVE') {
      setButtonState(':NORMAL');
    }
  };



  const buttonStyles = {
    border: 'none',
    cursor: 'pointer',
    backgroundColor: buttonState === ':ACTIVE' ? 'darkblue' : buttonState === ':DISABLED' ?  'lightgray' : 'transparent',
    color: buttonState === ':ACTIVE' ? 'white' : 'black',
    width: '600px',
    height: '70px',
    marginLeft: '400px',
    borderRadius: '10px',
    marginTop: '200px',
  };

  return (
    <button
      style={buttonStyles}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {buttonState}
    </button>
  );
};

export default Button;


