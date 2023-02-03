import React from 'react'
import { SixSections, ContactForm, ScrollToTop, Footer } from '../components'
import CookieConsent from 'react-cookie-consent'

const Page = () => {
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
          alert('nay!')
        }}
        declineButtonStyle={{
          background: 'red',
          color: '#fff',
          fontSize: '17.5px',
        }}
        declineButtonText='Nesúhlasím'
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
