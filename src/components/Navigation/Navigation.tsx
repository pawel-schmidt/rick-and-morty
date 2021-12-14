import React from 'react'

import NavigationLink from './NavigationLink'
import { Nav } from './styled'

const Navigation = () => {
  return (
    <Nav>
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/characters">Characters</NavigationLink>
      <NavigationLink to="/other">Other</NavigationLink>
    </Nav>
  )
}

export default Navigation
