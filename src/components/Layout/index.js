import React from 'react'
import CookieConsent from 'react-cookie-consent'

import Navi from 'components/Navi'
import Footer from 'components/Footer'
import Helmet from 'react-helmet'
import { Container } from 'reactstrap'
import { siteMetadata } from '../../../gatsby-config'

import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'

const Layout = ({ children, title, location, description }) => {

  title = title || siteMetadata.title
  description = description || siteMetadata.description

  return (
    <>
      <Helmet
        title={title}
        meta={[
          { name: 'description', content: description },
          { name: 'keywords', content: 'veterina, veterinární ordinace, Medlánky' }
        ]}
      />
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
