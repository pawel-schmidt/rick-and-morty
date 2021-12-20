import React, { PropsWithChildren } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from './GlobalStyle'

const appTheme = {
  breakpoints: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
  },
}

const Theme = ({ children }: PropsWithChildren<{}>) => (
  <ThemeProvider theme={appTheme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

export default Theme
