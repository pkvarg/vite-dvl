import React, { useRef, useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import Message from './Message'
import axios from 'axios'

const ContactForm = () => {
  const [message, setMessage] = useState(null)
  const [messageSuccess, setMessageSuccess] = useState(null)
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [mailMessage, setMailMessage] = useState('')
  const [checkBox, setCheckBox] = useState(false)

  // Anti-spam: Time-based validation
  const [formStartTime, setFormStartTime] = useState(0)

  // Anti-spam: Honeypot field
  const [honeypot, setHoneypot] = useState('')

  // Initialize form start time on mount
  useEffect(() => {
    setFormStartTime(Date.now())
  }, [])

  const handleCheckBox = () => {
    setCheckBox((current) => !current)
  }

  // Anti-spam: Content validation function
  const isSpamContent = (text) => {
    if (!text || text.trim().length < 3) return true

    // Check for excessive special characters (more than 40% of content)
    const specialChars = text.match(/[^a-zA-Z0-9\s]/g) || []
    if (specialChars.length / text.length > 0.4) return true

    // Check for random character patterns (less than 25% vowels for stricter validation)
    const vowels = text.match(/[aeiouAEIOUáéíóúýäëïöüÁÉÍÓÚÝ]/g) || []
    if (vowels.length / text.length < 0.25) return true

    // Check for excessive uppercase (more than 40% uppercase letters for stricter validation)
    const uppercase = text.match(/[A-Z]/g) || []
    const letters = text.match(/[a-zA-Z]/g) || []
    if (letters && letters.length > 0 && uppercase.length / letters.length > 0.4) return true

    // Check for repetitive characters (same char 5+ times in a row)
    if (/(.)\1{4,}/.test(text)) return true

    return false
  }

  // Anti-spam: Rate limiting (client-side)
  const checkRateLimit = () => {
    const storageKey = 'contact_form_submissions'
    const now = Date.now()
    const oneHour = 60 * 60 * 1000 // 1 hour in milliseconds
    const maxSubmissions = 3

    try {
      const stored = localStorage.getItem(storageKey)
      const submissions = stored ? JSON.parse(stored) : []

      // Filter out submissions older than 1 hour
      const recentSubmissions = submissions.filter((time) => now - time < oneHour)

      if (recentSubmissions.length >= maxSubmissions) {
        return false // Rate limit exceeded
      }

      // Add current submission and save
      recentSubmissions.push(now)
      localStorage.setItem(storageKey, JSON.stringify(recentSubmissions))
      return true
    } catch (error) {
      // If localStorage is not available, allow submission
      console.error('Rate limit check error:', error)
      return true
    }
  }

  const form = useRef()
  const x = import.meta.env.VITE_EMAIL_EXTRA_ONE
  const y = import.meta.env.VITE_EMAIL_EXTRA_TWO
  const [passwordGroupOne, setPasswordGroupOne] = useState(x)
  const [passwordGroupTwo, setPasswordGroupTwo] = useState(y)

  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const increaseBots = async () => {
    const apiUrl = 'https://hono-api.pictusweb.com/api/bots/km/increase'
    //const apiUrl = 'http://localhost:3013/api/bots/km/increase'
    try {
      const { data } = await axios.put(apiUrl, {}, config)
    } catch (error) {
      console.error('Error increasing bots:', error)
    }
  }

  const increaseEmails = async () => {
    const apiUrl = 'https://hono-api.pictusweb.com/api/emails/km/increase'
    //const apiUrl = 'http://localhost:3013/api/emails/km/increase'
    try {
      const { data } = await axios.put(apiUrl, {}, config)
    } catch (error) {
      console.error('Error increasing emails:', error)
    }
  }

  // const increaseBots = async () => {
  //   const { data } = await axios.put(
  //     `https://km.pictusweb.com/api/bots/dvl/increase`,
  //     // `http://localhost:7000/api/bots/dvl/increase`,

  //     config
  //   )

  // }

  const sendEmail = (e) => {
    e.preventDefault()

    // Anti-spam Check 1: Honeypot field
    if (honeypot !== '') {
      setMessage('Neodoslané! Kontaktujte nás telefonicky alebo emailom.')
      setName('')
      setAddress('')
      setEmail('')
      setPhone('')
      setMailMessage('')
      increaseBots()
      const element = document.getElementById('contact')
      element.scrollIntoView({ behavior: 'smooth' })
      return
    }

    // Anti-spam Check 2: Time-based validation (minimum 3 seconds)
    const timeSpent = Date.now() - formStartTime
    if (timeSpent < 3000) {
      setMessage('Neodoslané! Kontaktujte nás telefonicky alebo emailom.')
      setName('')
      setAddress('')
      setEmail('')
      setPhone('')
      setMailMessage('')
      increaseBots()
      const element = document.getElementById('contact')
      element.scrollIntoView({ behavior: 'smooth' })
      return
    }

    // Anti-spam Check 3: Content validation
    if (isSpamContent(name) || isSpamContent(mailMessage)) {
      setMessage('Neodoslané! Kontaktujte nás telefonicky alebo emailom.')
      setName('')
      setAddress('')
      setEmail('')
      setPhone('')
      setMailMessage('')
      increaseBots()
      const element = document.getElementById('contact')
      element.scrollIntoView({ behavior: 'smooth' })
      return
    }

    // Anti-spam Check 4: Rate limiting
    if (!checkRateLimit()) {
      setMessage('Neodoslané! Kontaktujte nás telefonicky alebo emailom.')
      const element = document.getElementById('contact')
      element.scrollIntoView({ behavior: 'smooth' })
      return
    }

    // Anti-spam Check 5: Legacy honeypot (password fields)
    if (passwordGroupOne !== x || passwordGroupTwo !== y) {
      setMessage('Neodoslané! Kontaktujte nás telefonicky alebo emailom.')
      setName('')
      setAddress('')
      setEmail('')
      setPhone('')
      setMailMessage('')
      increaseBots()
      const element = document.getElementById('contact')
      element.scrollIntoView({ behavior: 'smooth' })
    } else {
      emailjs
        .sendForm(
          import.meta.env.VITE_EMAILJS_SERVICE,
          import.meta.env.VITE_EMAILJS_TEMPLATE,
          form.current,
          import.meta.env.VITE_EMAILJS_USER,
        )
        .then(
          (result) => {
            console.log(result.text)
            setMessageSuccess('Vaša správa bola úspešne odoslaná!')
            console.log('message sent')
            increaseEmails()
          },
          (error) => {
            console.log(error.text)
            setMessage('Chyba! Kontaktujte nás telefonicky alebo emailom.')
          },
        )
      setName('')
      setAddress('')
      setEmail('')
      setPhone('')
      setMailMessage('')
      const element = document.getElementById('contact')
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="section-2" id="contact">
      <div className="container">
        <div className="contact">
          <h3>Kontaktujte nás. </h3>
          <h3>Všetko ostatné vyriešime za Vás.</h3>
          {messageSuccess && <Message variant="success">{messageSuccess}</Message>}
          {message && <Message variant="danger">{message}</Message>}
          <div className="container">
            <form ref={form} onSubmit={sendEmail}>
              <label className="form-label">
                Meno <sup>*</sup>
              </label>
              <input
                className="form-control"
                label="Meno"
                type="text"
                name="user_name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required="required"
              />
              <label className="form-label">
                Mesto a adresa <sup>*</sup>
              </label>
              <input
                className="form-control"
                label="Mesto a adresa"
                type="text"
                name="user_address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required="required"
              />
              <label className="form-label">
                Email <sup>*</sup>
              </label>
              <input
                className="form-control"
                label="Email"
                type="email"
                name="user_email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required="required"
              />
              <label className="form-label">
                Telefón <sup>*</sup>
              </label>
              <input
                className="form-control"
                label="Telefon"
                type="text"
                name="user_phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required="required"
              />

              {/* Anti-spam: Honeypot field - hidden with CSS, bots will fill it */}
              <div style={{ position: 'absolute', left: '-9999px', opacity: 0 }} aria-hidden="true">
                <label htmlFor="website_url">Website</label>
                <input
                  type="text"
                  id="website_url"
                  name="website_url"
                  tabIndex={-1}
                  autoComplete="off"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                />
              </div>

              <label className="form-label">
                Popíšte čo potrebujete <sup>*</sup>
              </label>
              <textarea
                className="form-control"
                label="Text"
                rows="5"
                name="message"
                value={mailMessage}
                onChange={(e) => setMailMessage(e.target.value)}
                required="required"
              ></textarea>
              <div className="form-check my-3">
                <input
                  className="form-check-input"
                  label="Checkbox"
                  id="flexCheckDefault"
                  type="checkbox"
                  defaultChecked={false}
                  value={checkBox}
                  onChange={handleCheckBox}
                  required="required"
                />
                <label className="form-check-label" htmlFor="flexCheckDefault">
                  Súhlasím so spracovaním údajov
                </label>
              </div>
              <input
                className="form-control hidden"
                type="text"
                label="Password"
                defaultValue={passwordGroupOne}
                onChange={(e) => setPasswordGroupOne(e.target.value)}
              />
              <input
                className="form-control hidden"
                label="Password"
                type="text"
                defaultValue={passwordGroupTwo}
                onChange={(e) => setPasswordGroupTwo(e.target.value)}
              />
              <button className="btn btn-send my-3" type="submit" value="Send">
                Vyriešiť čo najskôr
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
