import React from 'react'
import {
  Container,

} from 'reactstrap'

import * as footerStyle from './footer.module.css'

const Footer = () => {
  const year = new Date(Date.now()).getFullYear()
  return (
    <Container fluid className={`bg-primary text-light ${footerStyle.footer}`}>
      <span>
        &copy;
        {year} Veterinární ordinace Galen, vetgalen.cz
      </span>
    </Container>
  )
}

export default Footer
