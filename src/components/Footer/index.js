import React from 'react'
import {
  Container,
  Col,
  Row,
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap'
import './style.scss'

const Footer = () => {
  const year = new Date(Date.now()).getFullYear()
  return (
    <div className="footer">
      <Container fluid className="bg-primary footer text-light">
        <span>
          &copy;
          {year} Vetgalen.cz
        </span>
      </Container>
    </div>
  )
}

export default Footer
