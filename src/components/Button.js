import React from 'react'

function Button({ btnText, onClick, className, type, children }) {
  return (
    <button className={className} onClick={onClick} type={type}>
      {btnText} {children}
    </button>
  );
}

export default Button;