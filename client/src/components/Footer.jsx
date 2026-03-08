import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='footer-grid'>
        <div className='footer-col'>
          <p className='footer-copyright'>
            &copy; {Date().substring(11, 15)} kvalitnamontaz.sk
          </p>
          <a href='mailto:info@kvalitnamontaz.sk'>
            <i className='bi bi-envelope-fill'></i> info@kvalitnamontaz.sk
          </a>
        </div>
        <div className='footer-col'>
          <p className='footer-label'>kvalitnamontaz.sk</p>
          <a href='tel:+421908564435'>
            <i className='bi bi-telephone-fill'></i> 0908 564 435
          </a>
        </div>
        <div className='footer-col'>
          <a href='/gdpr'>
            <i className='bi bi-card-text'></i> GDPR
          </a>
        </div>
        <div className='footer-col footer-logo-section'>
          <a href='/'>
            <img
              className='footer-logo-img'
              src='/img/TD-logo.webp'
              alt='kvalitná montáž logo'
            />
          </a>
        </div>
      </div>
      <div className='footer-bottom'>
        <a href='https://pictusweb.sk' target='_blank' rel='noopener noreferrer'>
          &#60;&#47;&#62; PICTUSWEB Development
        </a>
      </div>
    </footer>
  )
}

export default Footer
