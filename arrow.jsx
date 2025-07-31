import React from 'react'

export default function Arrow({ color, className }) {

  return (
    <svg className={className} width="13" height="8" viewBox="0 0 13 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.96344 1L6.96344 7" stroke={color} strokeWidth="2" />
      <path d="M11.7529 0.794556L5.75287 6.79456" stroke={color} strokeWidth="2" />
    </svg>
  )
}