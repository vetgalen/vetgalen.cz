import React from 'react'
import {
  Container,

} from 'reactstrap'

import './footer.scss'

const Footer = () => {
  const year = new Date(Date.now()).getFullYear()
  return (
    <Container fluid className="blue-pane text-light footer">
      <span>
        &copy;
        {year} Veterinární ordinace Galen, vetgalen.cz
      </span>
    </Container>
  )
}

export default Footer
