import React, { useState, useEffect } from 'react'
import { auth, provider, xauth } from './../App'
import { signInWithPopup } from 'firebase/auth'
import { signOut } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-hot-toast'
import { useStateContext } from '../context/StateContext'
import getDate from '../date'
import useDrivePicker from 'react-google-drive-picker'
import { AdminDashboard } from '../components'

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
        toast.success('Prihlásený.')
      } else {
        navigate('/')
        toast.error('Unauthorised user.')
      }
    })
  }

  const signUserOut = () => {
    signOut(auth).then(() => {
      setIsAuth('non')
      toast.success('Odhlásený')
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

  const [openPicker, data, authResponse] = useDrivePicker()

  const handleOpenPicker = () => {
    openPicker({
      clientId: import.meta.env.VITE_GOOGLE_DRIVE_CLIENT_ID,
      developerKey: import.meta.env.VITE_GOOGLE_DRIVE_API_KEY,
      viewId: 'DOCS',
      showUploadView: true,
      showUploadFolders: true,
      supportDrives: true,
      multiselect: true,
      setOrigin: 'http://localhost:5173',
      token: import.meta.env.VITE_GOOGLE_DRIVE_API_ACCESS_TOKEN,
    })
  }

  // useEffect(() => {
  //   if (data) {
  //     data.docs.map((i) => console.log(i))
  //   }
  // }, [data])

  return (
    <>
      <div className='admin'>
        <div className='first'>
          <h1 onClick={() => navigate('/')}>Domov.</h1>
          <h2>
            Dnes je {displayDay} {displayDayOfMonth}. {displayMonth}{' '}
            {displayYear}
          </h2>
          {isAuth === xauth ? (
            <>
              <button onClick={signUserOut} className='admin-button'>
                Odhlásiť sa
              </button>
            </>
          ) : (
            <button onClick={signInWithGoogle} className='admin-button'>
              Prihlásenie cez Google
            </button>
          )}
        </div>
        <div className='admin-1'>
          {isAuth === xauth && (
            <>
              <div className='greeting'>
                <h1>Vitaj Tomáš</h1>
              </div>
              <img
                className='google-drive'
                src='/img/Google-Drive.webp'
                alt='Google-Drive'
                onClick={() => handleOpenPicker()}
              />
            </>
          )}
        </div>
        {isAuth === xauth && (
          <div>
            <>
              <AdminDashboard handleOpenPicker={handleOpenPicker} />
            </>
          </div>
        )}
      </div>
    </>
  )
}

export default Admin
