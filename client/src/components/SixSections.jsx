import React from 'react'

const SixSections = () => {
  return (
    <>
      {/* HERO */}
      <div className='hero-section'>
        <div className='hero-bg'></div>
        <div className='hero-content'>
          <a href='/'>
            <img
              className='hero-logo'
              src='/img/TD-logo.webp'
              alt='kvalitna montaz podlahy'
            />
          </a>
          <p className='hero-eyebrow'>KVALITNÁ MONTÁŽ</p>
          <h1 className='hero-title'>PODLAHY</h1>
          <p className='hero-subtitle'>
            Všetky podlahárske práce v Bratislave a okolí
          </p>
          <a className='cta-phone' href='tel:+421908564435'>
            <i className='fa-sharp fa-solid fa-mobile-screen'></i>
            Volajte: 0908 564 435
          </a>
        </div>
        <div className='hero-clip'></div>
      </div>

      {/* SERVICES 1 */}
      <div id='services'></div>
      <section className='section-services'>
        <div className='container'>
          <h2 className='section-title'>Naše služby</h2>
          <div className='services-grid'>
            <div className='service-card'>
              <img
                src='/img/dvl-1of6.webp'
                alt='kvalitná montáž všetky podlahárske práce'
              />
              <div className='service-card-content'>
                <h2>Všetky podlahárske práce</h2>
                <p>
                  Postaráme sa o pokládku Vašej podlahy. Kladieme laminátové,
                  vinylové, kompozitné a drevené podlahy. Plávajúcim spôsobom aj
                  lepením.
                </p>
              </div>
            </div>
            <div className='service-card'>
              <img
                src='/img/dvl-2of6.webp'
                alt='kvalitná montáž prípravné a doplnkové práce'
              />
              <div className='service-card-content'>
                <h2>Prípravné a doplnkové práce</h2>
                <p>
                  Potrebujete pripraviť priestor pred pokládkou novej podlahy?
                  Odstránime starú podlahovú krytinu. Zabezbečíme nivelizáciu a
                  ďalšie prípravy podkladu.
                </p>
              </div>
            </div>
            <div className='service-card'>
              <img
                src='/img/dvl-3of6.webp'
                alt='kvalitná montáž práce na mieru'
              />
              <div className='service-card-content'>
                <h2>Práce na mieru</h2>
                <p>
                  Potrebujete obloženie schodov, stien či stropov? Dokončovacie
                  alebo opravné práce? Nalepenie a nastrelenie soklových líšt?
                  Stačí zavolať.
                </p>
              </div>
            </div>
          </div>
          <div className='cta-wrapper'>
            <a className='cta-phone' href='tel:+421908564435'>
              <i className='fa-sharp fa-solid fa-mobile-screen'></i>
              Volajte: 0908 564 435
            </a>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <div id='reviews'></div>
      <section className='section-reviews'>
        <h2 className='section-title-light'>Čo hovoria zákazníci</h2>
        <div className='reviews-grid'>
          <div className='review-card'>
            <img
              className='review-google-icon'
              src='/img/google-icon.webp'
              alt='google-icon'
            />
            <img
              className='review-face'
              src='/img/DanielSagath.webp'
              alt='Daniel Sagath'
            />
            <h3 className='review-name'>Daniel Sagath</h3>
            <div className='review-stars'>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <a
              className='review-text'
              href='https://www.google.com/maps/contrib/107617414494001322394/place/ChIJiUYfNhNyjyMRCenVnC9uwc8/@48.1357804,17.1107673,16z/data=!4m6!1m5!8m4!1e1!2s107617414494001322394!3m1!1e1?hl=sk'
              target='_blank'
              rel='noopener noreferrer'
            >
              Ak hladate majstra, uz ho nehladajte, nasli ste ho! Vyborna
              komunikacia, otvorenost, slusnost, zanietenost pre vas projekt,
              profesionalna praca, skvely networking na dalsich majstrov s
              podobnym slusnym a odbornym pristupom.
            </a>
          </div>
          <div className='review-card'>
            <img
              className='review-google-icon'
              src='/img/google-icon.webp'
              alt='google-icon'
            />
            <img
              className='review-face'
              src='/img/STreview.webp'
              alt='S T'
            />
            <h3 className='review-name'>S T</h3>
            <div className='review-stars'>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <a
              className='review-text'
              href='https://www.google.com/maps/contrib/106003207452819479018/place/ChIJiUYfNhNyjyMRCenVnC9uwc8/@48.1357804,16.4567374,9z/data=!4m6!1m5!8m4!1e1!2s106003207452819479018!3m1!1e1?hl=sk'
              target='_blank'
              rel='noopener noreferrer'
            >
              Hľadal som odborníkov na rôzne montážne práce v rodinnom dome.
              Dostal som číslo na pána ktorý sa mi hneď ozval. Dohodli sme sa
              na cene a termíne namontovania zárubní a dverí. Profesionálne
              odvedená práca, super komunikácia... <span>na recenziu</span>
            </a>
          </div>
          <div className='review-card'>
            <img
              className='review-google-icon'
              src='/img/google-icon.webp'
              alt='google-icon'
            />
            <img
              className='review-face'
              src='/img/KatarinaHercegova.webp'
              alt='Katarína Hercegová'
            />
            <h3 className='review-name'>Katarína Hercegová</h3>
            <div className='review-stars'>&#9733;&#9733;&#9733;&#9733;&#9733;</div>
            <a
              className='review-text'
              href='https://www.google.com/maps/contrib/101549139245048146818/reviews/@48.1357804,17.1159171,17z/data=!3m1!4b1!4m3!8m2!3m1!1e1?hl=sk'
              target='_blank'
              rel='noopener noreferrer'
            >
              P. Dovala pracuje spolahlivo a rychlo, velmi oceňujeme aj
              myslenie o krok dopredu, ako aj spolupodielanie sa na napade a
              najvhodnejsom rieseni. Je kreativny a zodpovedny, za nas 5
              hviezdiciek
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES 2 */}
      <section className='section-services section-services-alt'>
        <div className='container'>
          <h2 className='section-title'>Ponúkame vám tiež</h2>
          <div className='services-grid'>
            <div className='service-card'>
              <img
                src='/img/dvl-4of6.webp'
                alt='kvalitná montáž osadenie zárubní a dverí'
              />
              <div className='service-card-content'>
                <h2>Osadenie zárubní a dverí</h2>
                <p>
                  Hľadáte kvalitného majstra na osadenie zárubní? Pomôžeme ako z
                  montážou, rovnako aj s výberom a zameraním interiérových
                  zárubní a dverí.
                </p>
              </div>
            </div>
            <div className='service-card'>
              <img
                src='/img/dvl-5of6.webp'
                alt='kvalitna montaz stolarske prace'
              />
              <div className='service-card-content'>
                <h2>Montážne a stolárske práce</h2>
                <p>
                  Skladanie nábytku, montáž, či úprava kuchynskej linky. Oprava
                  alebo prirezanie nábytku na mieru. Výroba stolárskych výrobkov
                  z masívneho dreva.
                </p>
              </div>
            </div>
            <div className='service-card'>
              <img
                src='/img/dvl-6of6.webp'
                alt='kvalitná montáž altánky a prístrešky na mieru'
              />
              <div className='service-card-content'>
                <h2>Prístrešky a altánky z dreva</h2>
                <p>
                  Potrebujete pomôcť s montážou, opravou alebo túžite po novom,
                  presne podľa vašich predstáv? Zavolajte nám a radi Vám
                  pomôžeme.
                </p>
              </div>
            </div>
          </div>
          <div className='cta-wrapper'>
            <a className='cta-phone' href='tel:+421908564435'>
              <i className='fa-sharp fa-solid fa-mobile-screen'></i>
              Volajte: 0908 564 435
            </a>
          </div>
        </div>
      </section>

      {/* TRUST POINTS */}
      <section className='section-trust'>
        <div className='container'>
          <div className='trust-grid'>
            <div className='trust-point'>
              <i className='fa-solid fa-euro-sign'></i>
              <h3>Bezplatná cenová ponuka</h3>
              <p>Urobíme Vám nezáväznú ponuku zdarma</p>
            </div>
            <div className='trust-point'>
              <i className='fa-solid fa-person'></i>
              <h3>Individuálny prístup</h3>
              <p>Riešenia na mieru pre Vás</p>
            </div>
            <div className='trust-point'>
              <i className='fa-solid fa-face-smile'></i>
              <h3>Zaručujeme 100% spokojnosť</h3>
              <p>Základom našej práce je spokojný zákazník</p>
            </div>
            <div className='trust-point'>
              <i className='fa-solid fa-person-running'></i>
              <h3>Rýchla reakcia</h3>
              <p>Budeme u Vás čo najskôr!</p>
            </div>
          </div>
          <div className='cta-wrapper'>
            <a className='cta-phone-outline' href='tel:+421908564435'>
              <i className='fa-sharp fa-solid fa-mobile-screen'></i>
              Volajte: 0908 564 435
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className='section-about'>
        <div className='about-wrapper'>
          <hr className='about-rule' />
          <p className='about-text'>
            Sme mladý a šikovný tím remeselníkov s bohatými skúsenosťami a
            nadšením pre svoju profesiu. Svoju prácu robíme s radosťou a
            úsmevom. Pričom sa venujeme neustálemu sledovaniu nových trendov
            a technológií. O tom že sme odborníkmi vo svojom odbore, svedčia
            aj naši spokojný zákazníci, ktorí sa k nám radi vracajú. Naši
            majstri sú Vám vždy k dispozícii. Nemáte radi keď po majstroch
            zostane v domácnosti kopec neporiadku? Vaša spokojnosť je pre
            nás prvoradá. Preto si po sebe vždy upraceme a vy si môžete
            ďalej užívať pohodlie svojho domova. Vaša spokojnosť je
            prvoradá. Kvalitne odvedená práca je samozrejmosťou.
          </p>
          <p className='about-signature'>Vaša kvalitná montáž.</p>
        </div>
      </section>
    </>
  )
}

export default SixSections
