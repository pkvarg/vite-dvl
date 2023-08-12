import React, { useState, useEffect } from 'react'
import { auth, provider, xauth } from './../App'
import { signInWithPopup } from 'firebase/auth'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useStateContext } from '../context/StateContext'

const Admin = () => {
  const navigate = useNavigate()
  const { isAuth, setIsAuth } = useStateContext()

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      if (
        result.user.email === import.meta.env.VITE_AUTH_EMAIL_2 ||
        result.user.email === import.meta.env.VITE_AUTH_EMAIL_1
      ) {
        setIsAuth(xauth)
        toast.success('Logged in.')
      } else {
        navigate('/')
        toast.error('Unauthorised user.')
      }
    })
  }

  const signUserOut = () => {
    signOut(auth).then(() => {
      setIsAuth('non')
      toast.success('Logged out.')
      //navigate('/')
    })
  }

  const date = new Date()

  // Get the day of the week (0: Sunday, 1: Monday, ..., 6: Saturday)
  const dayOfWeek = date.getDay()

  // Get the day of the month (1 - 31)
  const dayOfMonth = date.getDate()

  // Get the month (0: January, 1: February, ..., 11: December)
  const month = date.getMonth()

  // Get the year (e.g., 2023)
  const year = date.getFullYear()

  // Get the hours (0 - 23)
  const hours = date.getHours()

  // Get the minutes (0 - 59)
  const minutes = date.getMinutes()

  let dayName

  switch (dayOfWeek) {
    case 0:
      dayName = 'Nedeľa'
      break
    case 1:
      dayName = 'Pondelok'
      break
    case 2:
      dayName = 'Utorok'
      break
    case 3:
      dayName = 'Streda'
      break
    case 4:
      dayName = 'Štvrtok'
      break
    case 5:
      dayName = 'Piatok'
      break
    case 6:
      dayName = 'Sobota'
      break
    default:
      dayName = 'Invalid day'
  }

  return (
    <>
      <div className='admin'>
        <div className='admin-1'>
          <h1 onClick={() => navigate('/')}>Home.</h1>
          {isAuth === xauth && (
            <div className='greeting'>
              <h1>Vitaj Tomáš</h1>
              <p>{dayName}</p>
              <p>
                {dayOfWeek}
                {month}
                {year}
              </p>
              {/* <h1 onClick={() => navigate('/blog')}>All Blogs.</h1>
              <h1 onClick={() => navigate('/create-blog')}>Create New Blog.</h1>

              <h1 onClick={() => getStats()}>Get stats.</h1> */}
            </div>
          )}
        </div>
        {isAuth === xauth ? (
          <button onClick={signUserOut} className='admin-button'>
            Log out
          </button>
        ) : (
          <button onClick={signInWithGoogle} className='admin-button'>
            Log in with Google
          </button>
        )}
      </div>
    </>
  )
}

export default Admin
