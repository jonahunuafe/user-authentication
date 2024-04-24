import React from 'react'

function Button({ btnText, onClick, className, children }) {
  return (
      <div className={className} onClick={onClick}>
         {btnText} {children}
      </div>
  );
}

export default Button;