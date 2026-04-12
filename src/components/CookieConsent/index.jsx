import React from 'react'
import CookieConsent from 'react-cookie-consent'

const Cookie = () => (
  <CookieConsent
    location="bottom"
    buttonText="Souhlasím"
    style={{ background: '#2B373B' }}
    buttonStyle={{ color: '#4e503b' }}
  >
    <small>
      Provozovatel jako správce osobních údajů zpracovává na tomto webu cookies
      potřebné pro fungování webových stránek a pro analytické účely.{' '}
      <a href="/soukromi/">Další informace</a>
    </small>
  </CookieConsent>
)

export default Cookie
