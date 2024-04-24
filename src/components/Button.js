import React from 'react'

function Button({ btnText, onSubmit, className, children }) {
  return (
      <button className={className} onSubmit={onSubmit}>
         {btnText} {children}
      </button>
  );
}

export default Button;