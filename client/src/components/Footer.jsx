import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className='container ftr-width'>
        <div className='rad'>
          <div className='fourCols'>
            <div className='copyright'>
              &copy; {Date().substring(11, 15)} kvalitnamontaz.sk
              <i className='bi bi-envelope-fill'>
                {' '}
                <a className='developer' href='mailto:info@kvalitnamontaz.sk'>
                  info@kvalitnamontaz.sk
                </a>
              </i>
            </div>
          </div>
          <div className='fourCols'>
            <div className='firma contact'>
              <p>kvalitnamontaz.sk</p>
              <i className='bi bi-telephone-fill'>
                <a className='developer' href='tel:+421908564435'>
                  &nbsp; 0908 564 435
                </a>
              </i>
            </div>
          </div>
          <div className='fourCols'>
            <div className='firma'>
              {/* <i className='bi bi-r-square'>
                {' '}
                <a href='/trade-rules'> Obchodné podmienky</a>
              </i> */}
              <i className='bi bi-card-text'>
                {' '}
                <a href='/gdpr'> GDPR</a>
              </i>
            </div>
          </div>
          <div className='fourCols fourthIcon'>
            <div className='footer-logo'>
              <a href='/' className='abc'>
                <img
                  className='footer-logo-img'
                  src='/img/TD-logo.webp'
                  alt=''
                />
              </a>
            </div>
          </div>
        </div>
        <div className='picweb'>
          <a className='developer' href='https://pictusweb.sk' target='_blank'>
            &#60;&#47;&#62; PICTUSWEB Development
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
