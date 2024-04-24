import React from 'react'

function Button({ btnText, className, children }) {
  return (
    <button className={className}>
        {btnText} {children}
    </button>
  );
}

export default Button;