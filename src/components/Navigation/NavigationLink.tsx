import React from 'react'
import { LinkProps, useMatch, useResolvedPath } from 'react-router-dom'

import { NavLink } from './styled'

const NavigationLink = ({ children, to, ...props }: LinkProps) => {
  const resolved = useResolvedPath(to)
  const match = useMatch({ path: resolved.pathname, end: true })

  return (
    <NavLink isActive={!!match} to={to} {...props}>
      {children}
    </NavLink>
  )
}

export default NavigationLink
