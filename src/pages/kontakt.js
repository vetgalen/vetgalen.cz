import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import get from 'lodash/get'

import Meta from 'components/Meta'
import Layout from 'components/Layout'

const ContactPage = ({ data, location }) => {
  const derma = get(data, 'derma.childImageSharp.resolutions')
  const chirda = get(data, 'chirda.childImageSharp.resolutions')
  const infuze = get(data, 'infuze.childImageSharp.resolutions')
  const lahvicka = get(data, 'lahvicka.childImageSharp.resolutions')
  const mikroskop = get(data, 'mikroskop.childImageSharp.resolutions')
  const miska = get(data, 'miska.childImageSharp.resolutions')
  const packa = get(data, 'packa.childImageSharp.resolutions')
  const prevence = get(data, 'prevence.childImageSharp.resolutions')
  const psik = get(data, 'psik.childImageSharp.resolutions')
  const usg = get(data, 'usg.childImageSharp.resolutions')
  const zkumavka = get(data, 'zkumavka.childImageSharp.resolutions')
  const zub = get(data, 'zub.childImageSharp.resolutions')
  return (
    <Layout
      location={location}
      logo={get(data, 'logo')}
      icon={get(data, 'icon')}>
      <Meta site={get(data, 'site.meta')} />
      <Container>Dobry den</Container>
    </Layout>
  )
}

export default ContactPage

export const pageQuery = graphql`
  query ContactPageQuery {
    site {
      meta: siteMetadata {
        title
        description
        url: siteUrl
        author
      }
    }
    logo: file(name: { eq: "vetgalen-logo" }) {
      childImageSharp {
        fixed(width: 246, height: 119) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    icon: file(name: { eq: "icon" }) {
      childImageSharp {
        fixed(width: 80, height: 30) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
