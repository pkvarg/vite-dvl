import React, { useRef, useState } from 'react'
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

  const handleCheckBox = () => {
    setCheckBox((current) => !current)
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
    const { data } = await axios.put(
      `https://pictusweb.online/api/bots/dvl/increase`,
      // `http://localhost:2000/api/bots/dvl/increase`,

      config
    )
    // setBotsCount(data)
    // console.log('ctc:', data)
  }

  const sendEmail = (e) => {
    e.preventDefault()

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
          import.meta.env.VITE_EMAILJS_USER
        )
        .then(
          (result) => {
            console.log(result.text)
            setMessageSuccess('Vaša správa bola úspešne odoslaná!')
            console.log('message sent')
          },
          (error) => {
            console.log(error.text)
            setMessage('Chyba! Kontaktujte nás telefonicky alebo emailom.')
          }
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
    <section className='section-2' id='contact'>
      <div className='container'>
        <div className='contact'>
          <h3>Kontaktujte nás. </h3>
          <h3>Všetko ostatné vyriešime za Vás.</h3>
          {messageSuccess && (
            <Message variant='success'>{messageSuccess}</Message>
          )}
          {message && <Message variant='danger'>{message}</Message>}
          <div className='container'>
            <form ref={form} onSubmit={sendEmail}>
              <label className='form-label'>
                Meno <sup>*</sup>
              </label>
              <input
                className='form-control'
                label='Meno'
                type='text'
                name='user_name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                required='required'
              />
              <label className='form-label'>
                Mesto a adresa <sup>*</sup>
              </label>
              <input
                className='form-control'
                label='Mesto a adresa'
                type='text'
                name='user_address'
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required='required'
              />
              <label className='form-label'>
                Email <sup>*</sup>
              </label>
              <input
                className='form-control'
                label='Email'
                type='email'
                name='user_email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required='required'
              />
              <label className='form-label'>
                Telefón <sup>*</sup>
              </label>
              <input
                className='form-control'
                label='Telefon'
                type='text'
                name='user_phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required='required'
              />
              <label className='form-label'>
                Popíšte čo potrebujete <sup>*</sup>
              </label>
              <textarea
                className='form-control'
                label='Text'
                rows='5'
                name='message'
                value={mailMessage}
                onChange={(e) => setMailMessage(e.target.value)}
                required='required'
              ></textarea>
              <div className='form-check my-3'>
                <input
                  className='form-check-input'
                  label='Checkbox'
                  id='flexCheckDefault'
                  type='checkbox'
                  defaultChecked={false}
                  value={checkBox}
                  onChange={handleCheckBox}
                  required='required'
                />
                <label className='form-check-label' htmlFor='flexCheckDefault'>
                  Súhlasím so spracovaním údajov
                </label>
              </div>
              <input
                className='form-control hidden'
                type='text'
                label='Password'
                defaultValue={passwordGroupOne}
                onChange={(e) => setPasswordGroupOne(e.target.value)}
              />
              <input
                className='form-control hidden'
                label='Password'
                type='text'
                defaultValue={passwordGroupTwo}
                onChange={(e) => setPasswordGroupTwo(e.target.value)}
              />
              <button className='btn btn-send my-3' type='submit' value='Send'>
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
