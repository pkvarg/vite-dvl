import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div className='error-page'>
      <h1>Chyba! Táto stránka neexistuje.</h1>
      <Link className='error-link' to='/'>
        Na hlavnú stránku.
      </Link>
    </div>
  )
}

export default ErrorPage
