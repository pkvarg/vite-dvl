import React, { useState } from 'react'
import { SixSections, ContactForm, ScrollToTop, Footer } from '../components'
import CookieConsent from 'react-cookie-consent'
import { getAnalytics } from 'firebase/analytics'
import axios from 'axios'
import { app } from './../App'

const Page = () => {
  const [cookieAccept, setCookieAccept] = useState(false)
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const apiUrl = 'https://hono-api.pictusweb.com/api/visitors/km/increase'
  //const apiUrl = 'http://localhost:3013/api/visitors/km/increase'

  const increaseVisitors = async () => {
    try {
      const { data } = await axios.put(apiUrl, {}, config)
    } catch (error) {
      console.error('Error tracking declined visitors:', error)
    }
  }

  // const increaseVisitorsDeclined = async () => {
  //   const { data } = await axios.put(
  //     `https://km.pictusweb.com/api/visitors/dvl/increase`,
  //     // `http://localhost:7000/api/visitors/dvl/increase`,
  //     config
  //   )
  //   console.log('vstrsDec:', data.visitorsDeclinedDvl)
  // }

  // const increaseVisitorsAgreed = async () => {
  //   const { data } = await axios.put(
  //     `https://km.pictusweb.com/api/visitors/dvl/agree/increase`,
  //     // `http://localhost:7000/api/visitors/dvl/agree/increase`,
  //     config
  //   )
  // }

  // Initialize Firebase
  if (cookieAccept) {
    const analytics = getAnalytics(app)
  }

  return (
    <>
      <SixSections />
      <ContactForm />
      <ScrollToTop />
      <CookieConsent
        location="bottom"
        style={{
          background: '#1a1916',
          color: '#f5f0e8',
          fontSize: '15px',
          fontFamily: '"DM Sans", sans-serif',
          borderTop: '1px solid rgba(200, 134, 10, 0.3)',
          padding: '18px 32px',
          alignItems: 'center',
          gap: '16px',
        }}
        buttonStyle={{
          background: '#1d7a35',
          color: '#fff',
          fontSize: '14px',
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: '500',
          letterSpacing: '0.05em',
          textTransform: 'uppercase',
          padding: '10px 24px',
          borderRadius: '4px',
          border: 'none',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}
        buttonText="Súhlasím"
        expires={365}
        enableDeclineButton
        onDecline={() => {
          setCookieAccept(false)
          increaseVisitors()
        }}
        declineButtonStyle={{
          background: 'transparent',
          color: '#9e9890',
          fontSize: '14px',
          fontFamily: '"DM Sans", sans-serif',
          fontWeight: '400',
          padding: '10px 20px',
          borderRadius: '4px',
          border: '1px solid rgba(158, 152, 144, 0.4)',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}
        declineButtonText="Nesúhlasím"
        onAccept={() => {
          setCookieAccept(true)
          increaseVisitors()
        }}
      >
        Táto stránka používa len analytické a pre fungovanie webu nevyhnutné cookies. Nepoužívame
        funkčné ani marketingové cookies.{' '}
        <a href="/gdpr" style={{ color: '#c8860a', textDecoration: 'none' }}>GDPR</a>
      </CookieConsent>
      <Footer />
    </>
  )
}

export default Page
