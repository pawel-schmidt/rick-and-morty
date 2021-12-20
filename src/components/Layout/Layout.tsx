import React from 'react'
import { Outlet } from 'react-router-dom'

import Navigation from '../Navigation/Navigation'
import { StyledContainer } from './styled'

const Layout = () => (
  <>
    <Navigation />
    <StyledContainer>
      <Outlet />
    </StyledContainer>
  </>
)

export default Layout
