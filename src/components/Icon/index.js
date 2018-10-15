import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import React from 'react'

import './style.scss'

library.add(faMapMarker, faEnvelope)

const Icon = ({ name }) => <FontAwesomeIcon icon={name} />

export default Icon
