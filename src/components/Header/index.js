import {Link} from 'react-router-dom'

import {Nav, Logo} from './style'

import './index.css'

const Header = () => (
  <Nav>
    <Link to="/">
      <Logo
        src="https://assets.ccbp.in/frontend/react-js/meetup/website-logo-img.png"
        alt="website logo"
      />
    </Link>
  </Nav>
)

export default Header
