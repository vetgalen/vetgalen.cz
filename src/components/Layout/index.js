import React from 'react'
import CookieConsent from 'react-cookie-consent'

import Navi from 'components/Navi'
import Footer from 'components/Footer'
import { siteMetadata } from '../../../gatsby-config'

import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div>
        <Navi title={siteMetadata.title} {...this.props} />
        <div className="container-fluid">
          <div className="d-none d-md-block spacer-lg">&nbsp;</div>
          <div className="d-md-none spacer-md">&nbsp;</div>
          {children}
        </div>
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
      </div>
    )
  }
}

export default Layout
