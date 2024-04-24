import React from 'react'

function Button({ btnText, onClick, className, children }) {
  return (
    <button className={className} onClick={onClick}>
        {btnText} {children}
    </button>
  );
}

export default Button;