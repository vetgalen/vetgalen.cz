import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarker,
  faEnvelope,
  faPhoneSquare,
} from '@fortawesome/free-solid-svg-icons'
import React from 'react'

import * as iconStyle from './icon.module.css'

library.add(faMapMarker, faEnvelope, faPhoneSquare)

const Icon = ({ name }) => <FontAwesomeIcon icon={name} className={iconStyle.icon}/>

export default Icon
