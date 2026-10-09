import React, { useEffect } from 'react'
import { SixSections, ContactForm, ScrollToTop, Footer } from '../components'
import axios from 'axios'

// The site uses no analytics and no cookies. The anonymous visit counter only
// increments a total on the Pictusweb server; nothing is stored in the browser.
const Page = () => {
  useEffect(() => {
    axios
      .put('https://hono-api.pictusweb.com/api/visitors/km/increase', {}, {
        headers: { 'Content-Type': 'application/json' },
      })
      .catch((error) => console.error('Error counting visit:', error))
  }, [])

  return (
    <>
      <SixSections />
      <ContactForm />
      <ScrollToTop />
      <Footer />
    </>
  )
}

export default Page
