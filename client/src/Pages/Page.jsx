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

  const increaseVisitorsDeclined = async () => {
    const { data } = await axios.put(
      `https://pictusweb.online/api/visitors/dvl/increase`,
      // `http://localhost:2000/api/visitors/dvl/increase`,
      config
    )
    console.log('vstrsDec:', data.visitorsDeclinedDvl)
  }

  const increaseVisitorsAgreed = async () => {
    const { data } = await axios.put(
      `https://pictusweb.online/api/visitors/dvl/agree/increase`,
      // `http://localhost:2000/api/visitors/dvl/agree/increase`,
      config
    )
  }

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
        location='bottom'
        style={{
          background: '#adbbcb',
          color: '#000',
          fontSize: '22.5px',
          textAlign: 'justify',
        }}
        buttonStyle={{
          background: '#1d9f2f',
          color: '#fff',
          fontSize: '17.5px',
        }}
        buttonText='Súhlasím'
        expires={365}
        enableDeclineButton
        onDecline={() => {
          setCookieAccept(false)
          increaseVisitorsDeclined()
        }}
        declineButtonStyle={{
          background: 'red',
          color: '#fff',
          fontSize: '17.5px',
        }}
        declineButtonText='Nesúhlasím'
        onAccept={() => {
          setCookieAccept(true)
          increaseVisitorsAgreed()
        }}
      >
        Táto stránka používa len analytické a pre fungovanie webu nevyhnutné
        cookies. Nepoužívame funkčné ani marketingové cookies.{' '}
        <a href='/gdpr'> GDPR</a>
      </CookieConsent>
      <Footer />
    </>
  )
}

export default Page
