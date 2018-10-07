import React from 'react'
import emergence from 'emergence.js'

import Navi from 'components/Navi'
import Footer from 'components/Footer'
import { siteMetadata } from '../../../gatsby-config'

import 'modern-normalize/modern-normalize.css'
import 'prismjs/themes/prism.css'
import 'scss/gatstrap.scss'
import 'animate.css/animate.css'
import 'font-awesome/css/font-awesome.css'
import 'typeface-overpass'

class Layout extends React.Component {
  componentDidMount() {
    emergence.init()
  }

  componentDidUpdate() {
    emergence.init()
  }

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
        <Footer />
      </div>
    )
  }
}

export default Layout
