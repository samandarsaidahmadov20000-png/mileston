import React from 'react'
import './Button.css'

function Button({ className = '', ...props }) {
  return (
    <button {...props} className={`button ${className}`}>
      
    </button>
  )
}

export default Button
