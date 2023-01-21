import React, { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { Counter } from './components'

function App() {
  const x = '9%US7xkjNay2pnYrk9d8Z%En+b4%9'
  const y = 'ZnFrwKRL7%Fu$7u2Mt77b^$PPw@Yv'
  let clicks = 0
  const [passwordGroupOne, setPasswordGroupOne] = useState(x)
  const [passwordGroupTwo, setPasswordGroupTwo] = useState(y)
  const [counter, setCounter] = useState(clicks)

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()
    if (passwordGroupOne !== x || passwordGroupTwo !== y) {
      alert('Neodoslané! Kontaktujte nás telefonicky alebo emailom, prosím')
      clicks = clicks + 1
      setCounter(clicks)
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
    <div className='App'>
      {/* <Counter /> */}
      <div
        className='carousel slide'
        id='carouselExampleCaptions'
        data-bs-ride='carousel'
      >
        <div className='carousel-inner'>
          <div className='banner-box'>
            <div className='banner-text'>
              <a href='/'>
                <img
                  className='logo'
                  src='/img/TD-logo.png'
                  alt='kvalitná montáž podlahy'
                />
              </a>
              <h2>KVALITNÁ MONTÁŽ </h2>
              <h1>PODLAHY</h1>
              <h3>Všetky podlahárske práce </h3>
              <h3>v Bratislave a okolí</h3>
              <a className='call-us' href='tel:+421908564435'>
                <h4>
                  {' '}
                  <i className='fa-sharp fa-solid fa-mobile-screen'>
                    <span className='main-span'> Volajte: 0908 564 435 </span>
                  </i>
                </h4>
              </a>
            </div>
          </div>
          <img className='carousel-img' />
        </div>
      </div>
      <div id='services'></div>
      <section className='section-1'>
        <div className='container custom-mobile'>
          <div className='three-services'>
            <div className='service'>
              <img
                src='/img/dvl-1of6.jpg'
                alt='kvalitná montáž všetky podlahárske práce'
              />
              <h2>Všetky podlahárske práce </h2>
              <p>
                Postaráme sa o pokládku Vašej podlahy. Kladieme laminátové,
                vinylové, kompozitné a drevené podlahy. Plávajúcim spôsobom aj
                lepením.
              </p>
            </div>
            <div className='service'>
              <img
                src='/img/dvl-2of6.jpg'
                alt='kvalitná montáž prípravné a doplnkové práce'
              />
              <h2>Prípravné a doplnkové práce </h2>
              <p>
                Potrebujete pripraviť priestor pred pokládkou novej podlahy?
                Odstránime starú podlahovú krytinu. Zabezbečíme nivelizáciu a
                ďalšie prípravy podkladu.
              </p>
            </div>
            <div className='service'>
              <img
                src='/img/dvl-3of6.jpg'
                alt='kvalitná montáž práce na mieru'
              />
              <h2>Práce na mieru </h2>
              <p>
                Potrebujete obloženie schodov, stien či stropov? Dokončovacie
                alebo opravné práce? Nalepenie a nastrelenie soklových líšt?
                Stačí zavolať.{' '}
              </p>
            </div>
          </div>
          <a className='call-us-body' href='tel:+421908564435'>
            <h4>
              {' '}
              <i className='fa-sharp fa-solid fa-mobile-screen'>
                <span className='main-span'> Volajte: 0908 564 435 </span>
              </i>
            </h4>
          </a>
        </div>
      </section>
      <div id='reviews'> </div>
      <section className='section-reviews'>
        <div className='review-cards'>
          <div className='review-single'>
            <img src='/img/google-icon.jpg' alt='' />
            <h3 className='name'>Peter </h3>
            <h6 className='from'>Trnávka </h6>
            <p className='stars'>⭐️⭐️⭐️⭐️⭐️</p>
            <p className='review'>
              Rýchle jasné jednanie. Dodržané slovo, termín aj cena. Odporúčam a
              budem volať znova.
            </p>
          </div>
          <div className='review-single'>
            <img src='/img/google-icon.jpg' alt='' />
            <h3 className='name'>Judita </h3>
            <h6 className='from'>Dúbravka </h6>
            <p className='stars'>⭐️⭐️⭐️⭐️⭐️</p>
            <p className='review'>
              Včasná obhliadka, potom precízna pokládka parkiet. Páni si dali
              záležať.{' '}
            </p>
          </div>
          <div className='review-single'>
            <img src='/img/google-icon.jpg' alt='' />
            <h3 className='name'>Miro </h3>
            <h6 className='from'>Petržalka </h6>
            <p className='stars'>⭐️⭐️⭐️⭐️⭐️</p>
            <p className='review'>
              Potreboval som osadiť nové dvere a dostal som tento kontakt.
              Spokojnosť po všetkých stránkach.{' '}
            </p>
          </div>
        </div>
      </section>
      <section className='section-1'>
        <div className='container custom-mobile'>
          <div className='second-three-services'>
            <h1 className='second-three-sevices-title'>Ponúkame vám tiež</h1>
            <i className='bi bi-chevron-compact-down'></i>
            <div className='three-services'>
              <div className='service'>
                <img
                  src='/img/dvl-4of6.jpg'
                  alt='kvalitná montáž osadenie zárubní a dverí'
                />
                <h2>Osadenie zárubní a dverí </h2>
                <p>
                  Hľadáte kvalitného majstra na osadenie zárubní? Pomôžeme ako z
                  montážou, rovnako aj s výberom a zameraním interiérových
                  zárubní a dverí.
                </p>
              </div>
              <div className='service'>
                <img src='/img/dvl-5of6.jpg' alt='' />
                <h2>Montážne a stolárske práce </h2>
                <p>
                  Skladanie nábytku, montáž, či úprava kuchynskej linky. Oprava
                  alebo prirezanie nábytku na mieru. Výroba stolárskych výrobkov
                  z masívneho dreva.
                </p>
              </div>
              <div className='service'>
                <img
                  src='/img/dvl-6of6.jpg'
                  alt='kvalitná montáž altánky a prístrešky na mieru'
                />
                <h2>Prístrešky a altánky z dreva</h2>
                <p>
                  Potrebujete pomôcť s montážou, opravou alebo túžite po novom,
                  presne podľa vašich predstáv? Zavolajte nám a radi Vám
                  pomôžeme.{' '}
                </p>
              </div>
            </div>
          </div>
          <a className='call-us-body' href='tel:+421908564435'>
            <h4>
              {' '}
              <i className='fa-sharp fa-solid fa-mobile-screen'>
                <span className='main-span'> Volajte: 0908 564 435 </span>
              </i>
            </h4>
          </a>
        </div>
      </section>
      <section className='section-summary'>
        <div className='container custom-mobile'>
          <div className='four-points'>
            <div className='two-points'>
              <div className='one-point'>
                <i className='fa-solid fa-euro-sign'></i>
                <h3>Bezplatná cenová ponuka</h3>
              </div>
              <div className='point-description'>
                <h6>Urobíme Vám nezáväznú ponuku zdarma</h6>
              </div>
              <div className='one-point'>
                <i className='fa-solid fa-person'></i>
                <h3>Individuálny prístup</h3>
              </div>
              <div className='point-description'>
                <h6>Riešenia na mieru pre Vás</h6>
              </div>
            </div>
            <div className='two-points'>
              <div className='one-point'>
                <i className='fa-solid fa-face-smile'></i>
                <h3>Zaručujeme 100% spokojnosť</h3>
              </div>
              <div className='point-description'>
                <h6>Základom našej práce je spokojný zákazník</h6>
              </div>
              <div className='one-point'>
                <i className='fa-solid fa-person-running'></i>
                <h3>Rýchla reakcia</h3>
              </div>
              <div className='point-description'>
                <h6>Budeme u Vás čo najskôr!</h6>
              </div>
            </div>
          </div>
          <a className='call-us-four-points' href='tel:+421908564435'>
            <h4>
              {' '}
              <i className='fa-sharp fa-solid fa-mobile-screen'></i>
              <span className='main-span'> Volajte: 0908 564 435 </span>
            </h4>
          </a>
        </div>
      </section>
      <section className='section-about'>
        <div className='container custom-mobile'>
          <div className='about-box'>
            <div className='about-text'>
              <h3>
                Sme mladý a šikovný tým remeselníkov s bohatými skúsenosťami a
                nadšením pre svoju profesiu. Svoju prácu robíme s radosťou a
                úsmevom. Pričom sa venujeme neustálemu sledovaniu nových trendov
                a technológií. O tom že sme odborníkmi vo svojom odbore, svedčia
                aj naši spokojný zákazníci, ktorí sa k nám radi vracajú. Naši
                majstri sú Vám vždy k dispozícii. Nemáte radi keď po majstroch
                zostane v domácnosti kopec neporiadku? Vaša spokojnosť je pre
                nás prvoradá. Preto si po sebe vždy upraceme a vy si môžete
                ďalej užívať pohodlie svojho domova. Vaša spokojnosť je
                prvoradá. Kvalitne odvedená práca je samozrejmosťou.
              </h3>
              <h4>Vaša kvalitná montáž. </h4>
            </div>
          </div>
          <a className='call-us-summary mobile' href='tel:+421908564435'>
            <h4>
              {' '}
              <i className='fa-sharp fa-solid fa-mobile-screen'></i>
              <span className='main-span'> Volajte: 0908 564 435 </span>
            </h4>
          </a>
        </div>
      </section>

      <section className='section-2' id='contact'>
        <div className='container add-fluid-90'>
          <div className='contact'>
            <h3>Kontaktujte nás. </h3>
            <h3>Všetko ostatné vyriešime za Vás.</h3>
            <h1 className='contact-msg'> </h1>
            <h1 className='contact-warning'></h1>
            <div className='container add-fluid'>
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
                  <label
                    className='form-check-label'
                    htmlFor='flexCheckDefault'
                  >
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
                <button
                  className='btn btn-send my-3'
                  type='submit'
                  value='Send'
                >
                  Vyriešiť čo najskôr
                </button>
              </form>
            </div>
          </div>
        </div>
        <button className='scrollToTopBtn'>^</button>
      </section>

      {/* <form ref={form} onSubmit={sendEmail}>
        <label>Name</label>
        <input type='text' name='user_name' />
        <label>Email</label>
        <input type='email' name='user_email' />
        <label>Address</label>
        <input type='text' name='user_address' />
        <label>Telefón</label>
        <input type='phone' name='user_phone' />
        <label>Message</label>
        <textarea name='message' />
        <input type='submit' value='Send' />
      </form> */}

      <footer>
        <div class='container ftr-width'>
          <div class='rad'>
            <div class='fourCols'>
              <div class='copyright'>
                &copy; {Date().substring(11, 15)} kvalitnamontaz.sk
                <i class='bi bi-envelope-fill'>
                  {' '}
                  <a class='developer' href='mailto:info@kvalitnamontaz.sk'>
                    info@kvalitnamontaz.sk
                  </a>
                </i>
              </div>
            </div>
            <div class='fourCols'>
              <div class='firma contact'>
                <p>kvalitnamontaz.sk</p>
                <i class='bi bi-telephone-fill'>
                  <a class='developer' href='tel:+421908564435'>
                    {' '}
                    0908 564 435
                  </a>
                </i>
              </div>
            </div>
            <div class='fourCols'>
              <div class='firma'>
                <i class='bi bi-r-square'>
                  {' '}
                  <a href='/tradeRules'> Obchodné podmienky</a>
                </i>
                <i class='bi bi-card-text'>
                  {' '}
                  <a href='/gdpr'> GDPR</a>
                </i>
              </div>
            </div>
            <div class='fourCols fourthIcon'>
              <div class='footer-logo'>
                <a href='/'>
                  <img class='footer-logo-img' src='/img/TD-logo.png' alt='' />
                </a>
              </div>
            </div>
          </div>
          <div class='picweb'>
            {' '}
            <a class='developer' href='https://pictusweb.sk' target='_blank'>
              &#60;&#47;&#62; PICTUSWEB Development{' '}
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
