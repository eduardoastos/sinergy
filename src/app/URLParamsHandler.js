'use client'

import { useEffect } from 'react'

export default function URLParamsHandler() {
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    params.forEach((value, key) => {
      localStorage.setItem(key, value)
    })
  }, [])

  return null
} 