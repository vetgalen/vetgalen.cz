import React from 'react'
import CookieConsent from 'react-cookie-consent'

import Navi from 'components/Navi'
import Footer from 'components/Footer'
import { Container } from 'reactstrap'

const Layout = ({ children, location }) => {
  return (
    <>
      <Navi location={location} />
      <Container fluid>
        <div className="d-none d-md-block spacer-lg">&nbsp;</div>
        <div className="d-md-none spacer-md">&nbsp;</div>
        {children}
      </Container>
      <CookieConsent
        location="bottom"
        buttonText="Souhlasím"
        style={{ background: '#2B373B' }}
        buttonStyle={{ color: '#4e503b' }}>
        <small>
          Provozovatel jako správce osobních údajů zpracovává na tomto webu
          cookies potřebné pro fungování webových stránek a pro analytické
          účely.&nbsp;
          <a href="/soukromi/">Další informace</a>
        </small>
      </CookieConsent>
      <Footer />
    </>
  )
}

export default Layout
