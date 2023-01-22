import React from 'react'

const SixSections = () => {
  return (
    <>
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
    </>
  )
}

export default SixSections
