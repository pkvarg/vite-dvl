import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const form = useRef()
  const x = '9%US7xkjNay2pnYrk9d8Z%En+b4%9'
  const y = 'ZnFrwKRL7%Fu$7u2Mt77b^$PPw@Yv'
  const [passwordGroupOne, setPasswordGroupOne] = useState(x)
  const [passwordGroupTwo, setPasswordGroupTwo] = useState(y)
  const sendEmail = (e) => {
    e.preventDefault()
    if (passwordGroupOne !== x || passwordGroupTwo !== y) {
      alert('Neodoslané! Kontaktujte nás telefonicky alebo emailom, prosím')
    } else {
      emailjs
        .sendForm(
          'service_45sakxl',
          'template_4qtokqw',
          form.current,
          'user_mnqXPxOn2rVCZkKeC92I9'
        )
        .then(
          (result) => {
            console.log(result.text)
            console.log('message sent')
          },
          (error) => {
            console.log(error.text)
          }
        )
      alert('správa úspešne odoslaná')
    }
  }

  return (
    <section className='section-2' id='contact'>
      <div className='container'>
        <div className='contact'>
          <h3>Kontaktujte nás. </h3>
          <h3>Všetko ostatné vyriešime za Vás.</h3>

          <h1 className='contact-warning'></h1>
          <div className='container'>
            <form ref={form} onSubmit={sendEmail}>
              <label className='form-label'>
                Meno <sup>*</sup>
              </label>
              <input
                className='form-control'
                type='text'
                name='user_name'
                required='required'
              />
              <label className='form-label'>
                Mesto a adresa <sup>*</sup>
              </label>
              <input
                className='form-control'
                type='text'
                name='user_address'
                required='required'
              />
              <label className='form-label'>Email</label>
              <input
                className='form-control'
                type='email'
                name='user_email'
                required='required'
              />
              <label className='form-label'>
                Telefón <sup>*</sup>
              </label>
              <input
                className='form-control'
                type='text'
                name='user_phone'
                required='required'
              />
              <label className='form-label'>
                Popíšte čo potrebujete <sup>*</sup>
              </label>
              <textarea
                className='form-control'
                rows='5'
                name='message'
                required='required'
              ></textarea>
              <div className='form-check my-3'>
                <input
                  className='form-check-input'
                  id='flexCheckDefault'
                  type='checkbox'
                  value=''
                  required='required'
                />
                <label className='form-check-label' htmlFor='flexCheckDefault'>
                  Súhlasím so spracovaním údajov
                </label>
              </div>
              <input
                className='form-control hidden'
                type='text'
                // name='password1'
                defaultValue={passwordGroupOne}
                onChange={(e) => setPasswordGroupOne(e.target.value)}
              />
              <input
                className='form-control hidden'
                type='text'
                name='password2'
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
      {/* <button className='scrollToTopBtn' onClick={(e) => handleScroll}>
        ^
      </button> */}
    </section>
  )
}

export default ContactForm
