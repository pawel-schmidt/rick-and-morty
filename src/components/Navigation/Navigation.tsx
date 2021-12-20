import React from 'react'

import logo from '../../assets/icons8-morty-smith.svg'
import { Container } from '../LayoutUtils'
import NavigationLink from './NavigationLink'
import { Logo, LogoLink, Nav, Wrapper } from './styled'

const Navigation = () => {
  return (
    <Wrapper>
      <Container>
        <Nav>
          <LogoLink to="/">
            <Logo src={logo} alt="Home" />
          </LogoLink>
          <NavigationLink to="/characters">Characters</NavigationLink>
          <NavigationLink to="/other">Other</NavigationLink>
        </Nav>
      </Container>
    </Wrapper>
  )
}

export default Navigation
