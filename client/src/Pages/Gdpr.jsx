import React from 'react'
import { Footer, ScrollToTop } from '../components'

const EFFECTIVE = '09.10.2026'

const sections = [
  {
    title: '1. Kto je prevádzkovateľ',
    text: [
      'Tomáš Dovala, miesto podnikania Rovniankova 1662/15, 851 02 Bratislava-Petržalka',
      'IČO: 48203068, zapísaný v živnostenskom registri Okresného úradu Bratislava, číslo živnostenského registra 650-17696',
      'Kontakt: info@kvalitnamontaz.sk, 0908 564 435',
      'V týchto zásadách vysvetľujem, aké osobné údaje spracúvam, prečo, na akom právnom základe, komu ich poskytujem, ako dlho ich uchovávam a aké máte práva podľa Nariadenia (EÚ) 2016/679 (GDPR) a zákona č. 18/2018 Z. z. o ochrane osobných údajov.',
    ],
  },
  {
    title: '2. Kontaktný formulár, e-mail a telefón',
    text: [
      'Údaje: meno, adresa, e-mail, telefón a text správy.',
      'Účel: odpovedať na Váš dopyt, pripraviť cenovú ponuku a dohodnúť obhliadku alebo termín prác.',
      'Právny základ: opatrenia pred uzavretím zmluvy na Vašu žiadosť a môj oprávnený záujem odpovedať na správy (čl. 6 ods. 1 písm. b) a f) GDPR). Na odoslanie formulára nepotrebujem Váš súhlas.',
      'Správa z formulára sa odošle cez službu EmailJS do mojej e-mailovej schránky; na webe sa neukladá.',
      'Doba uchovávania: 2 roky od poslednej komunikácie. Ak z dopytu vznikne zákazka, údaje ďalej spracúvam podľa časti 3.',
    ],
  },
  {
    title: '3. Zákazky a fakturácia',
    text: [
      'Údaje: meno, adresa miesta prác, telefón, e-mail, popis a cena prác, fakturačné údaje.',
      'Účel: vykonanie prác, fakturácia, vybavenie reklamácie.',
      'Právny základ: plnenie zmluvy a zákonné povinnosti v oblasti účtovníctva a daní (čl. 6 ods. 1 písm. b) a c) GDPR).',
      'Doba uchovávania: počas trvania zákazky a záručnej doby a 4 roky po nich; účtovné doklady 10 rokov podľa zákona č. 431/2002 Z. z. o účtovníctve.',
    ],
  },
  {
    title: '4. Návšteva webu, cookies a počítadlo',
    text: [
      'Web nepoužíva cookies, analytické ani marketingové nástroje. Písma a ikony sú súčasťou webu a nenačítavajú sa od tretích strán.',
      'Pri každej návšteve spracúva poskytovateľ hostingu technické údaje potrebné na doručenie stránky (IP adresa, typ prehliadača, čas požiadavky) v záznamoch servera, ktoré sa uchovávajú len krátko. Právnym základom je oprávnený záujem na bezpečnom fungovaní webu (čl. 6 ods. 1 písm. f) GDPR).',
      'Počítadlo návštev pri každej návšteve len zvýši celkový počet návštev na serveri Pictusweb; neukladá nič vo Vašom prehliadači ani žiadny údaj o Vás.',
    ],
  },
  {
    title: '5. Kto má k údajom prístup',
    text: [
      'Údaje nepredávam ani nepoužívam na marketing. Poskytujem ich len v nevyhnutnom rozsahu:',
      '– Hostinger International Ltd. – hosting webu a e-mailová schránka info@kvalitnamontaz.sk (Titan Mail)',
      '– EmailJS (emailjs.com) – odoslanie správy z kontaktného formulára',
      '– Pictusweb s.r.o., Nábrežná 4895/42, 940 02 Nové Zámky – vývoj a správa webu, počítadlo návštev a ochrana formulára pred spamom',
      '– účtovník – vedenie účtovníctva',
    ],
  },
  {
    title: '6. Prenos údajov mimo EÚ',
    text: [
      'Niektorí poskytovatelia (EmailJS, Titan Mail) môžu údaje spracúvať aj mimo EÚ. Prenos sa uskutočňuje len s primeranými zárukami podľa kapitoly V GDPR, najmä na základe štandardných zmluvných doložiek Európskej komisie.',
    ],
  },
  {
    title: '7. Vaše práva',
    text: [
      'Máte právo na prístup k svojim údajom, ich opravu a vymazanie, na obmedzenie spracúvania, na prenosnosť údajov a právo namietať proti spracúvaniu na základe oprávneného záujmu. Stačí napísať na info@kvalitnamontaz.sk – odpoviem bez zbytočného odkladu, najneskôr do 1 mesiaca.',
      'Ak sa domnievate, že Vaše údaje spracúvam nezákonne, môžete podať návrh na Úrad na ochranu osobných údajov SR, Hraničná 12, 820 07 Bratislava 27, www.dataprotection.gov.sk.',
    ],
  },
  {
    title: '8. Zmeny',
    text: [
      `Zásady aktualizujem pri zmene služieb alebo spôsobu spracúvania. Aktuálne znenie je vždy na tejto stránke. Toto znenie je účinné od ${EFFECTIVE}.`,
    ],
  },
]

const Gdpr = () => {
  return (
    <>
      <ScrollToTop />
      <div className='trade-gd-body'>
        <div className='container add-fluid-90'>
          <div className='gdpr'>
            <h1>ZÁSADY OCHRANY OSOBNÝCH ÚDAJOV</h1>
            {sections.map((section) => (
              <div key={section.title} className='my-4'>
                <h2 className='h4 mt-4'>{section.title}</h2>
                {section.text.map((line) => (
                  <p key={line} className='mb-2'>
                    {line}
                  </p>
                ))}
              </div>
            ))}
            <a href='/' className='gdpr-home'>
              Domov
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Gdpr
