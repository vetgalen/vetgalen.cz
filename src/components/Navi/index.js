import get from 'lodash/get'
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
import { GatsbyImage } from 'gatsby-plugin-image'
import Timetable from 'components/Timetable'

class Navi extends React.Component {
  constructor(props) {
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }

  render() {
    const { location, logo, icon } = this.props
    const logoImage = get(logo, 'childImageSharp.gatsbyImageData')
    const iconImage = get(icon, 'childImageSharp.gatsbyImageData')
    return (
      <div className="fixed-top">
        <Container fluid className="d-none d-md-block bg-light">
          <Row>
            <Col className="col-8 pt-2 pl-3">
              <GatsbyImage image={logoImage} />
            </Col>
            <Col className="col-4 font-weight-bold">
              <Timetable compact />
            </Col>
          </Row>
        </Container>
        <Navbar className="bg-primary navbar-dark" expand="sm">
          <NavbarBrand className="d-block d-md-none">
            <GatsbyImage image={iconImage} />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
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
    );
  }
}

export default Navi
