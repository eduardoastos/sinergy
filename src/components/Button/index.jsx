'use client'

import * as s from './button.module.css'

export default function Button({ variant, onClick, className = '', children}) {
  return (
    <button className={`${s.button} ${variant && s[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}
