import React from 'react'
import {
  Container,
  Col,
  Row,
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Timetable from 'components/Timetable'
import { StaticQuery, graphql } from 'gatsby'

const Navi = ({ location }) => {

  const [open, setOpen] = React.useState(false)

  const toggle = () => {
    setOpen(!open)
  }

  return (
    <StaticQuery query={graphql`
    query {
      logo: file(name: {eq: "vetgalen-logo"}) {
        childImageSharp {
          gatsbyImageData(width: 246, height: 119, placeholder: NONE, layout: FIXED)
        }
      }
      icon: file(name: {eq: "icon"}) {
        childImageSharp {
          gatsbyImageData(width: 80, height: 30, placeholder: NONE, layout: FIXED)
        }
      }
    }`
    }
      render={(data) => {
        return (
          <div className="fixed-top">
            <Container fluid className="d-none d-md-block bg-light">
              <Row>
                <Col className="col-8 pt-2 pl-3">
                  <GatsbyImage image={getImage(data.logo)} alt="logo" />
                </Col>
                <Col className="col-4 font-weight-bold">
                  <Timetable compact />
                </Col>
              </Row>
            </Container>
            <Navbar className="bg-primary navbar-dark" expand="sm">
              <NavbarBrand className="d-block d-md-none">
                <GatsbyImage image={getImage(data.icon)} alt="icon" />
              </NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={open} navbar>
                <Nav className="nav-fill" navbar>
                  <NavItem active={location.pathname === '/'}>
                    <NavLink href="/">O nás</NavLink>
                  </NavItem>
                  <NavItem active={location.pathname === '/sluzby/'}>
                    <NavLink href="/sluzby/">Co děláme?</NavLink>
                  </NavItem>
                  <NavItem active={location.pathname === '/galerie/'}>
                    <NavLink href="/galerie/">Jak to u nás vypadá?</NavLink>
                  </NavItem>
                  <NavItem active={location.pathname === '/kontakt/'}>
                    <NavLink href="/kontakt/">Kontakt</NavLink>
                  </NavItem>
                  <NavItem active={location.pathname === '/soukromi/'}>
                    <NavLink href="/soukromi/">Ochrana soukromí</NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        )
      }} />
  )
}

export default Navi
