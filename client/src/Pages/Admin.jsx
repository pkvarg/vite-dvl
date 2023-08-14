import React, { useState, useEffect } from 'react'
import { auth, provider, xauth } from './../App'
import { signInWithPopup } from 'firebase/auth'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useStateContext } from '../context/StateContext'
import getDate from '../date'
import { gapi } from 'gapi-script'

const Admin = () => {
  const navigate = useNavigate()
  const { isAuth, setIsAuth } = useStateContext()
  const [displayDay, setDisplayDay] = useState()
  const [displayDayOfMonth, setDisplayDayOfMonth] = useState()
  const [displayMonth, setDisplayMonth] = useState()
  const [displayYear, setDisplayYear] = useState()

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

  useEffect(() => {
    const todaysdate = new Date()
    const display = getDate(todaysdate)
    setDisplayDay(display.dayName)
    setDisplayDayOfMonth(display.dayOfMonth)
    setDisplayMonth(display.monthName)
    setDisplayYear(display.year)
  }, [])

  // useEffect(() => {

  // }, [])

  return (
    <>
      <div className='admin'>
        <div className='first'>
          <h1 onClick={() => navigate('/')}>Domov.</h1>
          <h2>
            Dnes je {displayDay} {displayDayOfMonth}. {displayMonth}{' '}
            {displayYear}
          </h2>
        </div>
        <div className='admin-1'>
          {isAuth === xauth && (
            <>
              <div className='greeting'>
                <h1>Vitaj Tomáš</h1>
              </div>
            </>
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
