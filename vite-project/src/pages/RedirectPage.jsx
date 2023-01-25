import React from 'react'
import { Navigate } from 'react-router'

function RedirectPage() {
  return (
      <div><Navigate to="/home" /></div>
      
  )
}

export default RedirectPage