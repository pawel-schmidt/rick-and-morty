import React from 'react'

import { Container } from '../LayoutUtils'
import NavigationLink from './NavigationLink'
import { Nav, Wrapper } from './styled'

const Navigation = () => {
  return (
    <Wrapper>
      <Container>
        <Nav>
          <NavigationLink to="/">Home</NavigationLink>
          <NavigationLink to="/characters">Characters</NavigationLink>
          <NavigationLink to="/other">Other</NavigationLink>
        </Nav>
      </Container>
    </Wrapper>
  )
}

export default Navigation
